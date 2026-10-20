import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Scale, FileText } from 'lucide-react';
import { COMPANY_INFO, SECTORS } from '../../data/companyData';

interface FooterProps {
  onOpenBackendDocs?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBackendDocs }) => {
  return (
    <footer className="bg-[var(--bg-surface-elevated)] dark:bg-[#070a0f] text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-11 w-11 rounded bg-white p-1 flex items-center justify-center border border-[var(--border-subtle)] shrink-0 shadow-sm">
                <img
                  src={COMPANY_INFO.logoPng}
                  alt="Logo KBK GROUP SARL"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[var(--text-primary)] tracking-tight leading-tight group-hover:text-[#821828] transition-colors">
                  KBK GROUP <span className="text-[#821828] dark:text-[#9e2336] text-xs font-semibold ml-0.5">SARL</span>
                </span>
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  Kinshasa · République démocratique du Congo
                </span>
              </div>
            </Link>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Groupe multisectoriel congolais engagé dans la création de valeur et l'accompagnement des opportunités économiques en RDC.
            </p>

            {/* Official Slogan */}
            <div className="p-3 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] inline-block">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-muted)] block">Devise officielle</span>
              <span className="text-sm text-[var(--text-primary)] italic font-serif font-bold tracking-wide">
                « {COMPANY_INFO.slogan} »
              </span>
            </div>

            {/* Verified Social Media Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn officiel de KBK GROUP SARL"
                className="w-8 h-8 rounded bg-[var(--bg-surface)] hover:bg-[#0A66C2] text-[var(--text-secondary)] hover:text-white flex items-center justify-center text-xs font-bold transition-colors border border-[var(--border-subtle)]"
              >
                in
              </a>

              <a
                href={COMPANY_INFO.socials.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compte X officiel de Olivier Kanyinda, DG"
                className="w-8 h-8 rounded bg-[var(--bg-surface)] hover:bg-black text-[var(--text-secondary)] hover:text-white flex items-center justify-center text-xs font-bold transition-colors border border-[var(--border-subtle)]"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Navigation Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[var(--text-primary)] transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-[var(--text-primary)] transition-colors">À propos du groupe</Link>
              </li>
              <li>
                <Link to="/secteurs" className="hover:text-[var(--text-primary)] transition-colors">Secteurs d'activité</Link>
              </li>
              <li>
                <Link to="/implantation" className="hover:text-[var(--text-primary)] transition-colors">Implantation & Carte RDC</Link>
              </li>
              <li>
                <Link to="/actualites" className="hover:text-[var(--text-primary)] transition-colors">Actualités</Link>
              </li>
              <li>
                <Link to="/carrieres" className="hover:text-[var(--text-primary)] transition-colors">Carrières & Talents</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Dedicated Sector Pages (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Pages Sectorielles
            </h4>
            <ul className="space-y-2 text-xs">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    to={`/secteurs/${sector.slug}`}
                    className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#821828] text-[10px]">›</span>
                    <span>{sector.name} — {sector.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional & Legal Notice (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Gouvernance & Siège
            </h4>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Direction Générale : {COMPANY_INFO.directorGeneral}. Société à responsabilité limitée (SARL).
            </p>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              Siège administratif à Kinshasa (RDC). Coordonnées directes et adresse postale complète en cours de parution légale.
            </p>
            {onOpenBackendDocs && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBackendDocs}
                  className="inline-flex items-center gap-1 text-[11px] text-[#821828] dark:text-[#9e2336] hover:underline font-medium"
                >
                  <span>Spécifications techniques NestJS / Monorepo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar with Real Legal Routes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} KBK GROUP SARL · Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/mentions-legales" className="hover:text-[var(--text-primary)] transition-colors">
              Mentions Légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-[var(--text-primary)] transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
