# Guide d'Architecture Backend NestJS & Monorepo pour KBK GROUP SARL

Ce document fournit la spécification technique complète pour l'industrialisation du site web corporate de **KBK GROUP SARL** vers une architecture monorepo de production avec **NestJS**, **Prisma ORM** et **PostgreSQL**.

---

## 1. Structure Recommandée du Monorepo

```
kbk-group-platform/
├── apps/
│   ├── web/                           # Application Frontend (React/Next.js/Vite)
│   │   ├── src/
│   │   ├── public/
│   │   └── package.json
│   │
│   └── api/                           # Backend NestJS (REST API + Swagger)
│       ├── src/
│       │   ├── main.ts                # Bootstrap, validation globale, Swagger
│       │   ├── app.module.ts          # Module racine NestJS
│       │   ├── prisma/                # Service Prisma & client d'accès aux données
│       │   │   ├── prisma.service.ts
│       │   │   └── prisma.module.ts
│       │   ├── contact/               # Gestion des prises de contact & devis
│       │   │   ├── dto/
│       │   │   │   └── create-contact-inquiry.dto.ts
│       │   │   ├── contact.controller.ts
│       │   │   ├── contact.service.ts
│       │   │   └── contact.module.ts
│       │   ├── sectors/               # Gestion du contenu des 4 secteurs
│       │   │   ├── sectors.controller.ts
│       │   │   └── sectors.service.ts
│       │   ├── news/                  # Communiqués officiels & actualités
│       │   │   ├── news.controller.ts
│       │   │   └── news.service.ts
│       │   ├── auth/                  # Administration sécurisée (JWT, Argon2, RBAC)
│       │   │   ├── guards/
│       │   │   ├── strategies/
│       │   │   └── auth.service.ts
│       │   └── health/                # Endpoints de monitoring et d'état système
│       ├── prisma/
│       │   ├── schema.prisma          # Schéma de données PostgreSQL
│       │   └── migrations/
│       ├── test/
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   ├── shared-types/                  # DTO partagés entre web et api
│   └── tsconfig/                      # Configuration TypeScript unifiée
│
├── docker-compose.yml                 # PostgreSQL 16 & Redis en local
└── README.md
```

---

## 2. Schéma de Base de Données (Prisma ORM)

Fichier : `apps/api/prisma/schema.prisma`

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum SectorEnum {
  MINES
  NUMERIQUE
  NEGOCE
  LOGISTIQUE
  DIRECTION_GENERALE
}

enum ContactStatus {
  NOUVEAU
  EN_COURS_DE_TRAITEMENT
  REPONDU
  ARCHIVE
}

enum AdminRole {
  SUPER_ADMIN
  COMMUNICATION_MANAGER
  OPERATIONS_MANAGER
}

model ContactInquiry {
  id           String        @id @default(uuid())
  referenceId  String        @unique // e.g. KBK-2026-8942
  fullName     String
  email        String
  company      String?
  sector       SectorEnum    @default(DIRECTION_GENERALE)
  subject      String
  message      String        @db.Text
  status       ContactStatus @default(NOUVEAU)
  adminNotes   String?       @db.Text
  ipAddress    String?
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  @@index([sector, status])
  @@index([createdAt])
}

model NewsArticle {
  id           String        @id @default(uuid())
  slug         String        @unique
  title        String
  category     String
  summary      String
  content      String        @db.Text
  coverImage   String?
  isPublished  Boolean       @default(false)
  publishedAt  DateTime?
  authorId     String?
  author       AdminUser?    @relation(fields: [authorId], references: [id])
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  @@index([category, isPublished])
}

model AdminUser {
  id           String        @id @default(uuid())
  email        String        @unique
  passwordHash String        // Hachage Argon2id
  fullName     String
  role         AdminRole     @default(COMMUNICATION_MANAGER)
  isActive     Boolean       @default(true)
  articles     NewsArticle[]
  lastLoginAt  DateTime?
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}
```

---

## 3. DTO et Validation NestJS (`class-validator`)

Fichier : `apps/api/src/contact/dto/create-contact-inquiry.dto.ts`

```typescript
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum SectorTarget {
  MINES = 'MINES',
  NUMERIQUE = 'NUMERIQUE',
  NEGOCE = 'NEGOCE',
  LOGISTIQUE = 'LOGISTIQUE',
  GENERAL = 'DIRECTION_GENERALE'
}

export class CreateContactInquiryDto {
  @ApiProperty({ example: 'Patrice Ilunga', description: 'Nom complet du demandeur' })
  @IsString({ message: 'Le nom doit être une chaîne de caractères.' })
  @IsNotEmpty({ message: 'Le nom complet est obligatoire.' })
  @MinLength(3, { message: 'Le nom doit comporter au moins 3 caractères.' })
  fullName: string;

  @ApiProperty({ example: 'p.ilunga@entreprise.cd', description: 'Adresse e-mail valide' })
  @IsEmail({}, { message: 'L\'adresse e-mail doit être valide.' })
  @IsNotEmpty({ message: 'L\'adresse e-mail est obligatoire.' })
  email: string;

  @ApiPropertyOptional({ example: 'Trans-Congo Logistics' })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty({ enum: SectorTarget, default: SectorTarget.GENERAL })
  @IsEnum(SectorTarget, { message: 'Secteur non reconnu.' })
  sector: SectorTarget;

  @ApiProperty({ example: 'Partenariat logistique corridor Kinshasa - Matadi' })
  @IsString()
  @IsNotEmpty({ message: 'Le sujet est obligatoire.' })
  @MinLength(4, { message: 'Le sujet doit contenir au moins 4 caractères.' })
  subject: string;

  @ApiProperty({ example: 'Nous souhaitons planifier un échange avec la Direction Générale...' })
  @IsString()
  @IsNotEmpty({ message: 'Le message est obligatoire.' })
  @MinLength(15, { message: 'Le message doit contenir au moins 15 caractères.' })
  message: string;
}
```

---

## 4. Configuration Swagger & Bootstrap NestJS

Fichier : `apps/api/src/main.ts`

```typescript
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Sécurité CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  // Validation globale des DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Documentation Swagger interactive
  const config = new DocumentBuilder()
    .setTitle('KBK GROUP SARL · API REST')
    .setDescription('Spécification des services backend institutionnels et de gestion')
    .setVersion('1.0')
    .addTag('contact', 'Prises de contact et relations d\'affaires')
    .addTag('news', 'Gestion éditoriale et communiqués officiels')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(\`API NestJS KBK GROUP démarrée sur http://localhost:\${port}/api/docs\`);
}
bootstrap();
```

---

## 5. Déploiement et Environnements

### Variables d'Environnement Backend (`apps/api/.env`)
```bash
PORT=4000
NODE_ENV=production
DATABASE_URL="postgresql://kbk_user:secure_password@localhost:5432/kbk_group_db?schema=public"
JWT_SECRET="generate-strong-jwt-secret-min-64-chars"
FRONTEND_URL="https://kbkgroup.cd"
SMTP_HOST="smtp.provider.com"
SMTP_PORT=587
SMTP_USER="notifications@kbkgroup.cd"
SMTP_PASS="smtp_password"
```

### Commandes de Déploiement

1. **Génération Prisma & Migrations** :
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

2. **Compilation NestJS** :
   ```bash
   npm run build
   ```

3. **Exécution Production** :
   ```bash
   node dist/main.js
   ```
