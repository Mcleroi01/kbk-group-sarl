import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  ChevronRight,
  FileCheck,
  Shield,
  Award,
  TrendingUp,
  Target,
  Sparkles,
  Calendar,
  Clock,
  Building2,
  ExternalLink
} from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { DirectorPortrait } from '../components/common/DirectorPortrait';
import { DRCMap } from '../components/maps/DRCMap';
import { COMPANY_INFO, SECTORS, CITIES, NEWS_ITEMS, CORPORATE_VALUES } from '../data/companyData';

export const HomePage: React.FC = () => {
  return (
    <MotionPage className="space-y-24 pb-24">
      
      {/* ========================================================
          SECTION A — HERO
          Optimized background, adaptive scrim for light & dark,
          balanced typography, prominent official motto
      ======================================================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--bg-canvas)] transition-colors">
        
        {/* Background Image with Theme-Adaptive Scrim */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={COMPANY_INFO.heroImage}
            alt="Vue panoramique des infrastructures et du fleuve Congo à Kinshasa"
            priority={true}
            containerClassName="w-full h-full"
            className="filter brightness-[0.92] dark:brightness-[0.70] contrast-[1.05]"
          />
          {/* Light & Dark Adaptive Multi-Stop Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--hero-overlay-start)] via-[var(--hero-overlay-mid)] to-[var(--hero-overlay-end)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-canvas)] via-transparent to-[var(--hero-overlay-start)]/60" />
        </div>

        {/* Hero Narrative Block */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10">
          <MotionFadeIn direction="up" delay={0.1} className="max-w-3xl">
            {/* Kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[var(--text-muted)] mb-5">
              <span className="text-[#821828] dark:text-[#9e2336] font-bold">KBK GROUP SARL</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">·</span>
              <span>République démocratique du Congo</span>
            </div>

            {/* Official Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-6 heading-display">
              Un groupe engagé,{' '}
              <span className="text-[#821828] dark:text-[#9e2336]">
                des secteurs d'avenir.
              </span>
            </h1>

            {/* Subtitle verbatim as requested */}
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-2xl">
              KBK GROUP SARL rassemble une ambition multisectorielle autour des mines, du numérique, du négoce et de la logistique, avec un ancrage annoncé à Kinshasa, en République démocratique du Congo.
            </p>

            {/* Official Slogan Card */}
            <div className="inline-flex items-center gap-4 py-3 px-5 mb-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-md shadow-[var(--shadow-soft)]">
              <div className="w-2.5 h-2.5 bg-[#821828] dark:bg-[#9e2336] rotate-45 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-mono font-medium">Devise officielle</span>
                <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-wide italic font-serif">
                  « {COMPANY_INFO.slogan} »
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/a-propos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] active:scale-[0.98] rounded transition-all shadow-md"
              >
                <span>Découvrir le groupe</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/secteurs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] active:scale-[0.98] rounded transition-all shadow-sm"
              >
                <span>Explorer nos secteurs</span>
                <ChevronRight className="w-4 h-4 text-[#821828]" />
              </Link>
            </div>
          </MotionFadeIn>
        </div>

        {/* 4 Sector Quick Links Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SECTORS.map((sector, index) => (
              <Link
                key={sector.id}
                to={`/secteurs/${sector.slug}`}
                className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-surface-elevated)] hover:border-[#821828]/60 transition-all group shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] group-hover:text-[#821828] transition-colors font-bold">
                    0{index + 1}.
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-[var(--text-muted)] tracking-wider">Page dédiée</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[#821828] transition-colors">
                  {sector.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] line-clamp-1 mt-0.5">
                  {sector.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* ========================================================
          SECTION B — PRÉSENTATION DU GROUPE
          Asymmetric editorial layout, confirmed vs prospective rigor
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <MotionFadeIn direction="up" className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#821828] dark:text-[#9e2336]">
              <span>Institutionnel</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">/</span>
              <span>Vision & Identité</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Une ambition multisectorielle, un engagement commun.
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Basé à Kinshasa, <strong className="text-[var(--text-primary)]">KBK GROUP SARL</strong> est présenté comme un groupe multisectoriel intervenant dans les domaines des mines, du numérique, du négoce et de la logistique. Cette diversité de secteurs constitue le point de départ d'une présentation tournée vers les activités économiques et les opportunités du marché congolais.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Face aux besoins d'un pays continent en pleine mutation industrielle, le groupe envisage de catalyser des initiatives concrètes qui allient création de valeur locale, respect des normes OHADA et rigueur contractuelle avec les partenaires publics et privés.
            </p>

            {/* Strategic highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#821828] dark:text-[#9e2336] font-bold">Pôle Économique</span>
                <p className="text-sm font-bold text-[var(--text-primary)]">Siège à Kinshasa</p>
                <p className="text-xs text-[var(--text-muted)]">Centre névralgique et institutionnel</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#821828] dark:text-[#9e2336] font-bold">Complémentarité</span>
                <p className="text-sm font-bold text-[var(--text-primary)]">4 Secteurs Clés</p>
                <p className="text-xs text-[var(--text-muted)]">Synergies logistiques et industrielles</p>
              </div>

              <div className="p-4 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#821828] dark:text-[#9e2336] font-bold">Philosophie</span>
                <p className="text-sm font-bold text-[var(--text-primary)]">L'effort méthodique</p>
                <p className="text-xs text-[var(--text-muted)]">Devise : « L'effort fait le fort »</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] rounded transition-colors shadow-sm"
              >
                <span>En savoir plus sur le groupe</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#821828] shrink-0" />
                <span>Contenu initial à valider avant parution définitive.</span>
              </div>
            </div>
          </MotionFadeIn>

          {/* Documentary Boardroom Photography */}
          <MotionFadeIn direction="left" className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] bg-[var(--bg-surface)]">
              <OptimizedImage
                src={COMPANY_INFO.boardroomImage}
                alt="Session de gouvernance et réunion stratégique à Kinshasa"
                aspectRatio="4/3"
                className="filter brightness-[0.96]"
              />
              <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                <p className="text-xs text-[var(--text-secondary)] font-medium">
                  Planification et gouvernance au cœur du développement économique de la RDC.
                </p>
                <span className="text-[10px] text-[var(--text-muted)] block mt-0.5">
                  Kinshasa · République démocratique du Congo
                </span>
              </div>
            </div>
          </MotionFadeIn>

        </div>
      </section>

      {/* ========================================================
          SECTION C — NOS SECTEURS D'ACTIVITÉ
          Contextual photography, short editorial captions,
          direct routes to /secteurs/*
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#821828] dark:text-[#9e2336] mb-2">
              <span>Activités</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">/</span>
              <span>Domaines D'Intervention</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Nos secteurs d'activité
            </h2>
          </div>

          <Link
            to="/secteurs"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] hover:underline"
          >
            <span>Voir la synthèse sectorielle</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECTORS.map((sector, index) => (
            <div
              key={sector.id}
              className="bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] hover:border-[#821828]/60 transition-all overflow-hidden flex flex-col justify-between shadow-[var(--shadow-card)] group"
            >
              <div className="relative w-full overflow-hidden">
                <OptimizedImage
                  src={sector.image}
                  alt={`Secteur ${sector.name} - KBK GROUP SARL`}
                  aspectRatio="16/9"
                  className="group-hover:scale-105 transition-transform duration-500 filter brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium text-slate-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    Secteur annoncé
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {sector.name}
                  </h3>
                  <p className="text-xs text-slate-200 font-medium">
                    {sector.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {sector.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
                  {sector.detailedScope.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#821828] shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    to={`/secteurs/${sector.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] rounded transition-colors shadow-sm"
                  >
                    <span>Découvrir la page {sector.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    /secteurs/{sector.slug}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION D — PRÉSENTATION DU DIRECTEUR GÉNÉRAL
          Olivier Kanyinda, factual leadership, verified affiliations,
          dignified portrait card with replaceable file slot
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] space-y-10">
          
          <div className="border-b border-[var(--border-subtle)] pb-6">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Gouvernance Institutionnelle
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display mt-1">
              Une direction portée par l'esprit entrepreneurial
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left/Main Column: Factual Text about the DG */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <p className="text-base sm:text-lg text-[var(--text-primary)] font-normal leading-relaxed">
                À la direction de <strong className="font-semibold">KBK GROUP SARL</strong>, <strong className="font-semibold">{COMPANY_INFO.directorGeneral}</strong> incarne une démarche entrepreneuriale tournée vers le développement des activités et la recherche d'opportunités. Son parcours est également associé à <strong className="font-semibold text-[var(--text-primary)]">OLKAN TRANSP SARL</strong> et au <strong className="font-semibold text-[var(--text-primary)]">Club des entrepreneurs à succès</strong>.
              </p>

              <p>
                Privilégiant une présence active au contact des réalités du terrain en République démocratique du Congo, la gouvernance de KBK GROUP SARL s'articule autour d'objectifs d'efficience opérationnelle et de conformité aux meilleures pratiques d'affaires africaines.
              </p>

              {/* Verified Responsibilities & Passions List */}
              <div className="p-5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] block">
                  Responsabilités & Engagements communiqués
                </span>
                
                <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                    <span>Directeur Général de <strong>KBK GROUP SARL</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                    <span>Responsable de <strong>OLKAN TRANSP SARL</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                    <span>Fondateur du <strong>Club des entrepreneurs à succès</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                    <span>Centres d'intérêt : <strong>Entrepreneuriat & Pratique du Golf</strong></span>
                  </div>
                </div>
              </div>

              {/* Professional Channels Verified Links */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded bg-[#0A66C2] text-white hover:bg-[#084e96] transition-colors shadow-sm"
                >
                  <span>Profil LinkedIn officiel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={COMPANY_INFO.socials.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded bg-black text-white hover:bg-slate-900 border border-[var(--border-subtle)] transition-colors shadow-sm"
                >
                  <span>Compte X @Olivierkanyind</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  to="/a-propos"
                  className="text-xs font-semibold text-[#821828] dark:text-[#9e2336] hover:underline"
                >
                  Lire la présentation de la gouvernance →
                </Link>
              </div>
            </div>

            {/* Right Column: Director Portrait Card (With replaceable file slot) */}
            <div className="lg:col-span-5 flex justify-center">
              <DirectorPortrait className="max-w-sm w-full" />
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION E — IMPLANTATION GÉOGRAPHIQUE
          Authentic vector SVG DRC map teaser, Kinshasa/Matadi/Kolwezi/Lubumbashi
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#821828] dark:text-[#9e2336] mb-2">
              <span>Territoire</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">/</span>
              <span>Bassins Économiques</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Présence territoriale en République démocratique du Congo
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2">
              Aperçu des 4 pôles économiques stratégiques communiqués dans la présentation initiale du groupe.
            </p>
          </div>

          <Link
            to="/implantation"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] rounded transition-colors whitespace-nowrap shadow-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>Découvrir notre implantation</span>
          </Link>
        </div>

        {/* DRC Interactive Vector Map Teaser */}
        <DRCMap />
      </section>

      {/* ========================================================
          SECTION F — PHILOSOPHIE ET ENGAGEMENT
          Centred on the official slogan « L'effort fait le fort »
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] space-y-10">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[var(--border-subtle)] pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#821828] dark:text-[#9e2336] font-bold">
                Devise & Éthique de Travail
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight font-serif italic">
                « {COMPANY_INFO.slogan} »
              </h2>
            </div>

            <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] p-3 rounded border border-[var(--border-subtle)] max-w-sm flex items-start gap-2">
              <FileCheck className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
              <span>
                Principes de travail proposés soumis à validation statutaire de la direction.
              </span>
            </div>
          </div>

          {/* 3 Core Editorial Principles (Engagement, Travail, Esprit entrepreneurial) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--bg-surface)] flex items-center justify-center border border-[var(--border-subtle)] text-[#821828]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Engagement</h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Se consacrer avec rigueur aux projets entrepris et honorer scrupuleusement les engagements pris envers les clients et les partenaires.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--bg-surface)] flex items-center justify-center border border-[var(--border-subtle)] text-[#821828]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Travail</h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                La conviction que la persévérance et l'effort méthodique constituent la racine de toute réussite commerciale et industrielle durable.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3">
              <div className="w-10 h-10 rounded bg-[var(--bg-surface)] flex items-center justify-center border border-[var(--border-subtle)] text-[#821828]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Esprit entrepreneurial</h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Saisir les opportunités du marché congolais, créer des synergies d'activité et promouvoir le dynamisme économique local.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION G — ACTUALITÉS ET COMMUNIQUÉS
          Filtered previews or neat empty state, link to /actualites
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#821828] dark:text-[#9e2336] mb-2">
              <span>Publications</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">/</span>
              <span>Communiqués Récents</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Actualités & Veille Économique
            </h2>
          </div>

          <Link
            to="/actualites"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] hover:underline"
          >
            <span>Consulter tous les communiqués</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.slice(0, 3).map((item) => (
            <article
              key={item.id}
              className="bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] hover:border-[#821828]/60 transition-all overflow-hidden flex flex-col justify-between shadow-[var(--shadow-card)] group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-surface-elevated)]">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    aspectRatio="16/9"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2 py-0.5 rounded bg-[#821828] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#821828]" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] group-hover:text-[#821828] transition-colors leading-snug">
                    <Link to={`/actualites/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[10px] text-[var(--text-muted)] font-mono">Démonstration</span>
                <Link
                  to={`/actualites/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#821828] dark:text-[#9e2336] hover:underline"
                >
                  <span>Lire l'article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION G2 — CARRIÈRES & CAPITAL HUMAIN
          Transparent recruitment callout & motto spotlight
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] p-8 sm:p-12 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#821828]/10 text-[#821828] dark:text-[#9e2336] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Capital Humain & Opportunités</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
                Rejoindre KBK GROUP SARL · « {COMPANY_INFO.slogan} »
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                Vous êtes ingénieur minier, développeur informatique, spécialiste du commerce international ou gestionnaire logistique ? Nous valorisons l'ardeur au travail, l'intégrité et le mérite. Déposez une candidature spontanée pour nos futures opportunités en RDC.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/carrieres"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] rounded transition-all shadow-sm"
                >
                  <span>Consulter l'espace carrières</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <span className="text-xs text-[var(--text-muted)] font-mono">
                  Kinshasa · Kolwezi · Lubumbashi · Matadi
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)]">
                <FileCheck className="w-4 h-4 text-[#821828]" />
                <span>Politique RH Transparente</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Aucune offre d'emploi fictive. Traitement rigoureux et attribution d'une référence de suivi officielle dès réception de votre dossier.
              </p>
              <div className="text-[11px] text-[#821828] font-bold">
                Candidatures spontanées ouvertes →
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION H — CONTACT FINAL
          Professional visual conclusion, CTA to /contact
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[var(--shadow-soft)] p-8 sm:p-12">
          
          <div className="max-w-2xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#821828] dark:text-[#9e2336] font-bold">
              Relations D'Affaires
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Construisons de nouvelles opportunités en RDC
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Vous représentez une entreprise minière, un opérateur logistique, une organisation technologique ou un partenaire commercial ? Nos équipes sont à votre écoute pour examiner tout projet de collaboration.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] rounded transition-all shadow-md"
              >
                <span>Accéder au formulaire de contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-[var(--text-muted)]">
                Horodatage et référence unique attribués à chaque dossier.
              </span>
            </div>
          </div>

        </div>
      </section>

    </MotionPage>
  );
};
