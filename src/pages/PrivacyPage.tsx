import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyPage: React.FC = () => {
  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      <section className="bg-[var(--bg-surface-elevated)] dark:bg-[#0c121d] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Politique de Confidentialité' }]} />
          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Protection Des Données
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Politique de Confidentialité & Échanges
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              Engagements de confidentialité applicables aux demandes d'affaires et de partenariat transmises à KBK GROUP SARL.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-lg bg-[var(--bg-surface)] dark:bg-[#121824] border border-[var(--border-subtle)] space-y-8 shadow-[var(--shadow-soft)] text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              1. Finalité de la collecte
            </h2>
            <p>
              Les données personnelles recueillies à travers le formulaire de contact (nom, adresse e-mail, téléphone éventuel, raison sociale de l'entreprise, secteur ciblé et message) sont utilisées exclusivement pour instruire les demandes professionnelles soumises à la Direction Générale.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              2. Confidentialité & Traitement
            </h2>
            <p>
              KBK GROUP SARL ne commercialise, ne loue et ne cède aucune information à des tiers. Les échanges commerciaux demeurent protégés par le secret des affaires et les dispositions en vigueur en République démocratique du Congo.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              3. Conservation & Traçabilité
            </h2>
            <p>
              Chaque prise de contact est consignée sous un numéro d'identifiant de dossier sécurisé (ex : <code>KBK-2026-XXXX</code>) permettant une traçabilité rigoureuse sans risque de perte d'information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)] uppercase tracking-wider text-xs">
              4. Droits des expéditeurs
            </h2>
            <p>
              Vous pouvez à tout moment demander l'accès, la rectification ou l'effacement de vos coordonnées en adressant une demande via le formulaire de contact officiel du site.
            </p>
          </div>

        </div>
      </section>
    </MotionPage>
  );
};
