import React from 'react';
import { Scale, ShieldCheck, FileCheck } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';

export const LegalPage: React.FC = () => {
  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      <section className="bg-[var(--bg-surface-elevated)] dark:bg-[#0c121d] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Mentions Légales' }]} />
          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Cadre Juridique & Statuts
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Mentions Légales & Réglementation
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              Informations relatives à l'éditeur du site institutionnel de KBK GROUP SARL en République démocratique du Congo.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-lg bg-[var(--bg-surface)] dark:bg-[#121824] border border-[var(--border-subtle)] space-y-8 shadow-[var(--shadow-soft)] text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              1. Dénomination & Forme Sociale
            </h2>
            <p>
              Le site web officiel accessible à cette adresse est édité par la société <strong>{COMPANY_INFO.legalName}</strong>, Société à Responsabilité Limitée (SARL) de droit congolais, régie par l'Acte Uniforme OHADA relatif au droit des sociétés commerciales et du GIE.
            </p>
            <p>
              Siège administratif : Kinshasa, République démocratique du Congo.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              2. Représentation & Direction Générale
            </h2>
            <p>
              Directeur Général : <strong>{COMPANY_INFO.directorGeneral}</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              3. Propriété Intellectuelle & Marque Déposée
            </h2>
            <p>
              Le logo original, le monogramme, la charte graphique et la devise officielle « {COMPANY_INFO.slogan} » constituent l'identité exclusive de KBK GROUP SARL. Toute reproduction, imitation ou utilisation totale ou partielle sans accord écrit préalable de la Direction Générale est strictement interdite.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              4. Réserve de Validation & Conformité ARSP
            </h2>
            <p>
              Les activités annoncées dans les secteurs des mines, du numérique, du négoce et de la logistique, ainsi que les bassins économiques de Kinshasa, Matadi, Kolwezi et Lubumbashi, reflètent les orientations stratégiques du groupe. Les enregistrements au Registre du Commerce et du Crédit Mobilier (RCCM) et les attestations ARSP relatives à la sous-traitance seront publiées dès validation définitive.
            </p>
          </div>

        </div>
      </section>
    </MotionPage>
  );
};
