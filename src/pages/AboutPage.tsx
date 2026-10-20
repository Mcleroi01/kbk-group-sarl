import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Target, Shield, Lightbulb, TrendingUp, FileCheck, ArrowUpRight } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { DirectorPortrait } from '../components/common/DirectorPortrait';
import { COMPANY_INFO, CORPORATE_VALUES } from '../data/companyData';

export const AboutPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Engagement':
        return <Target className="w-5 h-5 text-[#821828] dark:text-[#9e2336]" />;
      case 'Travail':
        return <Award className="w-5 h-5 text-[#821828] dark:text-[#9e2336]" />;
      case 'Intégrité':
        return <Shield className="w-5 h-5 text-[#821828] dark:text-[#9e2336]" />;
      case 'Innovation':
        return <Lightbulb className="w-5 h-5 text-[#821828] dark:text-[#9e2336]" />;
      case 'Esprit entrepreneurial':
        return <TrendingUp className="w-5 h-5 text-[#821828] dark:text-[#9e2336]" />;
      default:
        return <Award className="w-5 h-5 text-[#821828] dark:text-[#9e2336]" />;
    }
  };

  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Editorial Hero Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'À propos du groupe' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Présentation Institutionnelle & Gouvernance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Bâtir un groupe congolais d'excellence et d'ambition
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Une démarche entrepreneuriale fondée sur le travail méthodique, la rigueur contractuelle et la valorisation des compétences nationales en RDC.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Narrative & Boardroom Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <MotionFadeIn direction="up" className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
                Une vision multisectorielle ancrée dans les réalités congolaises
              </h2>

              <p>
                <strong className="text-[var(--text-primary)]">KBK GROUP SARL</strong> est présenté comme un groupe multisectoriel basé à Kinshasa, intervenant dans les domaines des mines, du numérique, du négoce et de la logistique.
              </p>

              <p>
                Le groupe ambitionne de développer des activités complémentaires au service des besoins des entreprises et des opportunités du marché congolais. Cette transversalité permet de répondre aux défis complexes des donneurs d'ordre : coordonner l'acheminement logistique de marchandises, intégrer des solutions informatiques de traçabilité, approvisionner les chantiers en équipements certifiés et accompagner la filière minière.
              </p>

              <div className="p-4 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] space-y-1">
                <span className="font-semibold text-[var(--text-primary)] block">Note de réserve éditoriale :</span>
                <p>
                  {COMPANY_INFO.editorialDisclaimer} Les statuts juridiques détaillés, numéros d'immatriculation RCCM et ID. NAT seront publiés dès formalisation finale.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/secteurs"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#64101e] rounded transition-colors shadow-sm"
              >
                <span>Découvrir nos 4 secteurs d'activité</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionFadeIn>

          {/* Documentary Photo: Kinshasa Boardroom Strategy */}
          <MotionFadeIn direction="left" className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] bg-[var(--bg-surface)]">
              <OptimizedImage
                src={COMPANY_INFO.boardroomImage}
                alt="Direction et conseils en réunion stratégique à Kinshasa"
                aspectRatio="4/3"
                className="filter brightness-[0.96]"
              />
              <div className="p-4 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block font-medium">
                  Illustration documentaire · Sessions de planification et gouvernance à Kinshasa (RDC).
                </span>
              </div>
            </div>
          </MotionFadeIn>

        </div>
      </section>

      {/* Leadership Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Direction Générale
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Le mot de la Direction
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <div className="p-5 rounded-lg bg-[var(--bg-surface-elevated)] border-l-4 border-[#821828] text-base italic font-serif text-[var(--text-primary)]">
                « L'effort fait le fort. Ce n'est pas seulement notre devise, c'est le principe cardinal qui guide chacune de nos prises de décision. En République démocratique du Congo, les opportunités ne manquent pas, mais seules la constance et la rigueur permettent de transformer le potentiel en valeur pérenne. »
              </div>

              <p>
                <strong>{COMPANY_INFO.directorGeneral}</strong>, Directeur Général de KBK GROUP SARL, impulse la stratégie de développement multisectoriel en s'appuyant sur son expérience entrepreneuriale au cœur du tissu économique congolais.
              </p>

              <div className="p-4 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-2 text-xs text-[var(--text-secondary)]">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                  <span>Directeur Général de <strong>KBK GROUP SARL</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                  <span>Responsable de <strong>OLKAN TRANSP SARL</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                  <span>Fondateur du <strong>Club des entrepreneurs à succès</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#821828]" />
                  <span>Centres d'intérêt : <strong>Entrepreneuriat & Pratique du Golf</strong></span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <DirectorPortrait className="max-w-sm w-full" />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
            Éthique & Principes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
            Les valeurs proposées du groupe
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Cinq valeurs cardinales soumises à la charte définitive du groupe pour guider les relations avec nos partenaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORPORATE_VALUES.map((val, idx) => (
            <div
              key={val.name}
              className="p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 flex flex-col justify-between shadow-[var(--shadow-card)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-elevated)] flex items-center justify-center border border-[var(--border-subtle)]">
                    {getIcon(val.name)}
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)] font-bold">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{val.name}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {val.description}
                </p>
              </div>

              {val.quote && (
                <div className="pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] italic">
                  {val.quote}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </MotionPage>
  );
};
