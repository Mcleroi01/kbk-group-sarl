import React, { useState } from 'react';
import { X, Server, Database, Code, CheckCircle, Copy, Check } from 'lucide-react';

interface BackendDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BackendDocsModal: React.FC<BackendDocsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'prisma' | 'dto'>('architecture');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const prismaSchemaCode = `// apps/api/prisma/schema.prisma
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

model ContactInquiry {
  id           String        @id @default(uuid())
  referenceId  String        @unique // e.g. KBK-2026-XXXX
  fullName     String
  email        String
  company      String?
  sector       SectorEnum    @default(DIRECTION_GENERALE)
  subject      String
  message      String
  status       ContactStatus @default(NOUVEAU)
  adminNotes   String?
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
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}`;

  const dtoCode = `// apps/api/src/contact/dto/create-contact-inquiry.dto.ts
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
  @ApiProperty({ example: 'Jean-Pierre Kalala', description: 'Nom complet du demandeur' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  fullName: string;

  @ApiProperty({ example: 'j.kalala@societe.cd', description: 'Email professionnel' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiPropertyOptional({ example: 'Mining Logistics Hub SARL' })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty({ enum: SectorTarget, default: SectorTarget.GENERAL })
  @IsEnum(SectorTarget)
  sector: SectorTarget;

  @ApiProperty({ example: 'Demande de cotation fret corridor Matadi' })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  subject: string;

  @ApiProperty({ example: 'Nous souhaitons convenir d\\'un échange pour un flux mensuel...' })
  @IsString()
  @IsNotEmpty()
  @MinLength(15)
  message: string;
}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121824] border border-[#222f44] rounded-lg max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="w-10 h-10 rounded bg-[#172030] flex items-center justify-center text-[#9e2336] border border-white/5">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Spécifications Techniques Backend & Monorepo NestJS
              </h3>
              <p className="text-xs text-slate-400">
                Architecture de référence pour la transition vers l'écosystème NestJS + Prisma + PostgreSQL
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === 'architecture' ? 'bg-[#821828] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Structure Monorepo
            </button>
            <button
              onClick={() => setActiveTab('prisma')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === 'prisma' ? 'bg-[#821828] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Schéma Prisma ORM
            </button>
            <button
              onClick={() => setActiveTab('dto')}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                activeTab === 'dto' ? 'bg-[#821828] text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              DTO NestJS & Validation
            </button>
          </div>

          {/* Content Area */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <p>
                Le projet est conçu pour une transition fluide vers un monorepo d'entreprise (Turborepo ou pnpm workspaces) :
              </p>
              
              <div className="bg-[#0b0f17] p-4 rounded font-mono text-xs text-slate-300 border border-slate-800 leading-relaxed overflow-x-auto">
                {`kbk-group/
├── apps/
│   ├── web/                     # Frontend Next.js / Vite (App Router, Tailwind)
│   └── api/                     # Backend NestJS (TypeScript, REST, Swagger)
│       ├── src/
│       │   ├── contact/         # Module de gestion des demandes & accusés
│       │   ├── sectors/         # Gestion éditoriale des 4 secteurs
│       │   ├── news/            # Communiqués et articles officiels
│       │   ├── auth/            # Espace administration sécurisé (JWT/Argon2)
│       │   └── prisma/          # Client Prisma & migrations
│       ├── test/                # Tests E2E et unitaires Jest
│       └── nest-cli.json
├── packages/
│   ├── tsconfig/                # Configurations TypeScript partagées
│   └── shared-types/            # DTOs, Enums et interfaces communes
└── docker-compose.yml           # PostgreSQL 16 & Redis`}
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
                  Modules Principaux Recommandés :
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>ContactModule :</strong> Réception, validation class-validator, horodatage, génération du numéro de référence, notification email et stockage PostgreSQL.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>ContentModule :</strong> Gestion des données de présentation, des secteurs et des communiqués avec contrôle de version.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span><strong>AdminAuthModule :</strong> Authentification multifacteur (MFA), contrôle d'accès basé sur les rôles (RBAC) sans identifiants codés en dur.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'prisma' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">schema.prisma</span>
                <button
                  onClick={() => copyToClipboard(prismaSchemaCode)}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié' : 'Copier'}</span>
                </button>
              </div>
              <pre className="bg-[#0b0f17] p-4 rounded text-xs font-mono text-emerald-300/90 border border-slate-800 overflow-x-auto max-h-72">
                {prismaSchemaCode}
              </pre>
            </div>
          )}

          {activeTab === 'dto' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">create-contact-inquiry.dto.ts</span>
                <button
                  onClick={() => copyToClipboard(dtoCode)}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copié' : 'Copier'}</span>
                </button>
              </div>
              <pre className="bg-[#0b0f17] p-4 rounded text-xs font-mono text-cyan-300/90 border border-slate-800 overflow-x-auto max-h-72">
                {dtoCode}
              </pre>
            </div>
          )}

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#62101e] rounded transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
