import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { DRCMap } from '../components/maps/DRCMap';
import { CITIES } from '../data/companyData';

export const ImplantationPage: React.FC = () => {
  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Implantation & Carte RDC' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Ancrage Géographique & Bassins Économiques
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Une présence tournée vers les opportunités de la RDC
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Quatre pôles économiques stratégiques composent les axes de projection de KBK GROUP SARL en République démocratique du Congo.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Vector Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Transparency Alert */}
        <div className="p-4 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#821828] shrink-0 mt-0.5" />
          <div className="text-xs text-[var(--text-secondary)] space-y-1">
            <span className="font-semibold text-[var(--text-primary)]">Précision statutaire :</span>
            <p>
              Les villes présentées (Kinshasa, Kolwezi, Lubumbashi, Matadi) sont les pôles mentionnés dans la trajectoire initiale d'activités du groupe. Elles reflètent les zones géographiques prioritaires d'intervention et ne préjugent pas de la détention d'agences physiques permanentes sans confirmation officielle.
            </p>
          </div>
        </div>

        {/* DRC Vector SVG Map */}
        <DRCMap />

      </section>

      {/* Strategic Hubs Detailed Analysis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
            Axes Territoriaux
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
            Rôles économiques et corridors d'interconnexion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CITIES.map((city) => (
            <div
              key={city.id}
              className="p-6 sm:p-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-4 shadow-[var(--shadow-soft)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#821828] dark:text-[#9e2336]">
                      {city.province}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {city.name}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded bg-[var(--bg-surface-elevated)] flex items-center justify-center text-[#821828] dark:text-[#9e2336] border border-[var(--border-subtle)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-semibold text-[var(--text-primary)]">
                  {city.role}
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {city.description}
                </p>

                <div className="p-3.5 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)]">
                  <span className="font-semibold text-[#821828] dark:text-[#9e2336] block mb-0.5">
                    Importance stratégique :
                  </span>
                  <span>{city.strategicImportance}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-1">
                  Corridors associés :
                </span>
                <ul className="space-y-1">
                  {city.keyCorridors.map((corridor, idx) => (
                    <li key={idx} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                      <Navigation className="w-3 h-3 text-[#821828]" />
                      <span>{corridor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              Vous opérez dans l'un de ces bassins économiques ?
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Nos équipes étudient toute opportunité de synergie logistique, minière, commerciale ou numérique.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] rounded transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Prendre contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </MotionPage>
  );
};
