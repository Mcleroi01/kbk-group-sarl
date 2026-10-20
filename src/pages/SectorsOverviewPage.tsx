import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Layers, FileCheck, ShieldAlert } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { SECTORS } from '../data/companyData';

export const SectorsOverviewPage: React.FC = () => {
  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Secteurs d\'activité' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Axes Stratégiques & Domaines D'Intervention
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Quatre secteurs complémentaires pour la croissance congolaise
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Une articulation raisonnée entre industries extractives, solutions technologiques, négoce commercial et logistique multimodale.
            </p>
          </div>
        </div>
      </section>

      {/* Synergies Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase text-[#821828] dark:text-[#9e2336] tracking-wider">
              Principe d'Interconnexion
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Des activités pensées comme un écosystème
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              La logistique achemine les flux marchands issus du négoce, les outils numériques assurent la traçabilité des expéditions et des données d'exploitation, tandis que les mines constituent le cœur industriel des besoins en sous-traitance et matériels en RDC.
            </p>
          </div>

          <div className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] p-4 rounded border border-[var(--border-subtle)] max-w-xs flex items-start gap-2">
            <FileCheck className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
            <span>
              Secteurs d'activité annoncés du groupe, soumis à la validation continue des orientations opérationnelles.
            </span>
          </div>
        </div>
      </section>

      {/* 4 Sector Cards - Direct Page Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECTORS.map((sector, index) => (
            <div
              key={sector.id}
              className="bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] hover:border-[#821828]/60 transition-all overflow-hidden flex flex-col justify-between shadow-[var(--shadow-soft)] group"
            >
              <div className="relative w-full overflow-hidden">
                <OptimizedImage
                  src={sector.image}
                  alt={`Secteur ${sector.name} - KBK GROUP SARL`}
                  aspectRatio="16/9"
                  className="group-hover:scale-105 transition-transform duration-500 filter brightness-[0.90]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium text-slate-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded">
                    Page dédiée
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

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {sector.description}
                </p>

                {/* Key scope highlights */}
                <div className="space-y-1.5 pt-2 border-t border-[var(--border-subtle)]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-1">
                    Axes principaux :
                  </span>
                  {sector.detailedScope.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <ChevronRight className="w-3.5 h-3.5 text-[#821828] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <Link
                    to={`/secteurs/${sector.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] rounded transition-colors shadow-sm"
                  >
                    <span>Consulter la page complète</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-[var(--text-muted)] font-mono">
                    /secteurs/{sector.slug}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </MotionPage>
  );
};
