import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronRight, ShieldCheck, Info, FileCheck } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { SECTORS } from '../data/companyData';

export const SectorDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const sector = SECTORS.find((s) => s.slug === slug);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!sector) {
    return <Navigate to="/secteurs" replace />;
  }

  const otherSectors = SECTORS.filter((s) => s.id !== sector.id);

  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Editorial Hero Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs
            items={[
              { label: 'Secteurs d\'activité', href: '/secteurs' },
              { label: sector.name }
            ]}
          />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Secteur d'activité annoncé · KBK GROUP SARL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              {sector.name} : {sector.tagline}
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {sector.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Sector Visual & Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Editorial & Avenues */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Context & Perspective */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] heading-display">
                Contexte économique & opportunités en RDC
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {sector.contextDRC}
              </p>
            </div>

            {/* Strategic Focus Box */}
            <div className="p-5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] block">
                Priorité Stratégique
              </span>
              <p className="text-sm font-medium text-[var(--text-primary)]">
                {sector.strategicFocus}
              </p>
            </div>

            {/* Areas of Intervention (Announced Scope) */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Champs d'intervention annoncés
              </h3>
              <div className="space-y-2.5">
                {sector.detailedScope.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#821828] dark:text-[#9e2336] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[var(--text-secondary)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prospective Avenues (Subject to validation) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Perspectives opérationnelles en cours de structuration
                </h3>
              </div>

              <div className="space-y-2.5">
                {sector.prospectiveAvenues.map((avenue, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
                  >
                    <ChevronRight className="w-4 h-4 text-[#821828] dark:text-[#9e2336] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[var(--text-secondary)]">{avenue}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-[var(--text-muted)] flex items-start gap-2 pt-1">
                <FileCheck className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
                <span>
                  Ces domaines sont présentés à titre indicatif et ne constituent pas une affirmation de contrats fermes ou d'actifs matériels déjà détenus.
                </span>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="pt-4 p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-[var(--text-primary)]">
                  Un projet ou besoin dans le secteur {sector.name} ?
                </h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Adressez directement votre cahier des charges ou proposition de partenariat.
                </p>
              </div>

              <Link
                to={`/contact?secteur=${encodeURIComponent(sector.name)}`}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] rounded transition-colors whitespace-nowrap shadow-sm"
              >
                <span>Échanger sur ce secteur</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Photography & Sector Metadata */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Sector Feature Photograph */}
            <div className="rounded-lg overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] bg-[var(--bg-surface)]">
              <OptimizedImage
                src={sector.image}
                alt={`Opérations et activités - Secteur ${sector.name}`}
                aspectRatio="4/3"
                priority={true}
                className="filter brightness-[0.94]"
              />
              <div className="p-4 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block">
                  Photographie documentaire d'illustration sectorielle en République démocratique du Congo.
                </span>
              </div>
            </div>

            {/* Key Drivers */}
            <div className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-[var(--shadow-soft)]">
              <h3 className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
                Moteurs Clés du Secteur
              </h3>
              <div className="flex flex-wrap gap-2">
                {sector.keyDrivers.map((driver, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium"
                  >
                    {driver}
                  </span>
                ))}
              </div>
            </div>

            {/* Other 3 Sectors Navigation */}
            <div className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-[var(--shadow-soft)]">
              <h3 className="text-xs uppercase font-semibold text-[var(--text-muted)] tracking-wider">
                Autres secteurs d'activité
              </h3>
              <div className="space-y-2">
                {otherSectors.map((other) => (
                  <Link
                    key={other.id}
                    to={`/secteurs/${other.slug}`}
                    className="flex items-center justify-between p-3 rounded bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] transition-colors group"
                  >
                    <div>
                      <strong className="block font-semibold group-hover:text-[#821828] transition-colors">
                        {other.name}
                      </strong>
                      <span className="text-[11px] text-[var(--text-muted)]">{other.tagline}</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#821828] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </MotionPage>
  );
};
