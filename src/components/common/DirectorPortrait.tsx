import React, { useState } from 'react';
import { UserCheck, ShieldCheck, ExternalLink, Award } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface DirectorPortraitProps {
  className?: string;
}

export const DirectorPortrait: React.FC<DirectorPortraitProps> = ({ className = '' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[var(--shadow-soft)] transition-colors ${className}`}>
      
      {/* Either display the official photography if present or the formal executive placeholder card */}
      {!imageError ? (
        <div className="relative aspect-[4/5] w-full bg-[var(--bg-surface-elevated)] overflow-hidden">
          <img
            src={COMPANY_INFO.directorPortraitPath}
            alt="Portrait officiel d'Olivier Kanyinda, Directeur Général de KBK GROUP SARL"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top filter brightness-[0.98]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#821828] dark:text-[#9e2336] font-semibold">
              Gouvernance · Direction Générale
            </span>
            <h4 className="text-xl font-bold text-[var(--text-primary)]">
              {COMPANY_INFO.directorGeneral}
            </h4>
          </div>
        </div>
      ) : (
        /* Formal, highly dignified executive portrait frame */
        <div className="aspect-[4/5] w-full bg-gradient-to-br from-[var(--bg-surface-elevated)] to-[var(--bg-surface-subtle)] p-8 flex flex-col justify-between items-center text-center relative overflow-hidden">
          
          {/* Subtle watermark seal */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
            <span className="text-[140px] font-black font-serif">KBK</span>
          </div>

          <div className="w-full flex items-center justify-between z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#821828] dark:text-[#9e2336] font-bold">
              Direction Générale
            </span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">
              Kinshasa · RDC
            </span>
          </div>

          {/* Central Emblem Monogram */}
          <div className="my-auto z-10 flex flex-col items-center space-y-4">
            <div className="w-24 h-24 rounded-full bg-[var(--bg-surface)] border-2 border-[#821828] flex items-center justify-center shadow-lg p-3">
              <img
                src={COMPANY_INFO.logoPng}
                alt="Emblème KBK GROUP SARL"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                {COMPANY_INFO.directorGeneral}
              </h4>
              <p className="text-xs font-semibold text-[#821828] dark:text-[#9e2336]">
                {COMPANY_INFO.directorTitle}
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">
                KBK GROUP SARL
              </p>
            </div>
          </div>

          {/* Bottom verified status badge */}
          <div className="w-full z-10 pt-4 border-t border-[var(--border-subtle)] space-y-1.5">
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[var(--text-muted)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#821828] dark:text-[#9e2336]" />
              <span>Portrait officiel en cours d'homologation</span>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] italic">
              Emplacement réservé : <code>public/images/team/olivier-kanyinda.jpg</code>
            </p>
          </div>

        </div>
      )}

      {/* Profile quick links in card footer */}
      <div className="p-4 bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
        <a
          href={COMPANY_INFO.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#821828] dark:text-[#9e2336] hover:underline font-semibold flex items-center gap-1"
        >
          <span>Profil LinkedIn officiel</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={COMPANY_INFO.socials.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-semibold flex items-center gap-1"
        >
          <span>X @Olivierkanyind</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
