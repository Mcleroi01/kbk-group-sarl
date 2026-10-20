import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, AlertCircle, Share2, Check, ArrowRight, Bookmark, Building2 } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { NEWS_ITEMS, COMPANY_INFO } from '../data/companyData';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const article = NEWS_ITEMS.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/actualites" replace />;
  }

  const otherArticles = NEWS_ITEMS.filter((item) => item.id !== article.id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-[var(--bg-surface-elevated)] py-12 sm:py-16 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <Breadcrumbs
            items={[
              { label: 'Actualités et perspectives', href: '/actualites' },
              { label: article.title }
            ]}
          />

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
              <span className="px-2.5 py-1 rounded bg-[#821828] text-white font-bold uppercase tracking-wider text-[11px]">
                {article.category}
              </span>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#821828]" />
                <span>{article.date}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--text-secondary)] font-medium">
                Direction de la Communication
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight heading-display">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Editorial Article Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Article Primary Illustration Image */}
        <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-lg space-y-2">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <OptimizedImage
              src={article.image}
              alt={article.title}
              aspectRatio="16/9"
              priority={true}
              className="w-full h-full object-cover"
            />
          </div>
          {article.imageCaption && (
            <div className="px-5 py-3 text-xs text-[var(--text-muted)] bg-[var(--bg-surface-elevated)] border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="italic">{article.imageCaption}</span>
              <span className="font-mono text-[10px] text-[var(--text-muted)] shrink-0 ml-4">KBK GROUP SARL · Kinshasa</span>
            </div>
          )}
        </div>

        {/* Content Box */}
        <div className="p-8 sm:p-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] space-y-8">
          
          {/* Status & Compliance Disclaimer */}
          <div className="p-4 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-3.5 text-xs text-[var(--text-secondary)]">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-[var(--text-primary)] block font-semibold">
                Statut éditorial : {article.status}
              </strong>
              <p className="mt-0.5 leading-relaxed">
                Ce communiqué fait partie du jeu d'échantillons préparatoires pour valider la ligne de communication officielle de KBK GROUP SARL avant sa diffusion auprès des partenaires institutionnels.
              </p>
            </div>
          </div>

          {/* Lead Paragraph / Chapeau */}
          <div className="text-base sm:text-lg font-medium text-[var(--text-primary)] leading-relaxed border-l-4 border-[#821828] pl-5 py-1 bg-[var(--bg-surface-elevated)]/50 rounded-r">
            {article.summary}
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed pt-2">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Official Sign-off & Social Share Bar */}
          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-white p-1 border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logoPng}
                  alt="Logo KBK GROUP SARL"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[var(--text-primary)] block">KBK GROUP SARL</span>
                <span className="text-[var(--text-muted)]">Kinshasa · République démocratique du Congo</span>
              </div>
            </div>

            {/* Share & Copy Action */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-subtle)] text-xs font-medium text-[var(--text-primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#821828]"
                aria-label="Copier le lien de l'article"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 font-semibold">Lien copié</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span>Partager l'article</span>
                  </>
                )}
              </button>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:bg-[#0A66C2] text-xs font-semibold text-[var(--text-secondary)] hover:text-white transition-colors"
                title="Partager sur LinkedIn"
                aria-label="Partager sur LinkedIn"
              >
                in
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:bg-black text-xs font-semibold text-[var(--text-secondary)] hover:text-white transition-colors"
                title="Partager sur X"
                aria-label="Partager sur X"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Navigation Back Link */}
          <div className="pt-4 flex items-center justify-between text-xs text-[var(--text-muted)]">
            <Link
              to="/actualites"
              className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[#821828] font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retourner à la liste des actualités</span>
            </Link>

            <span className="italic font-serif">« {COMPANY_INFO.slogan} »</span>
          </div>

        </div>
      </section>

      {/* Other Articles Recommendation Section with Visual Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            Autres actualités et perspectives
          </h3>
          <Link
            to="/actualites"
            className="text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] hover:underline"
          >
            Toutes les actualités →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherArticles.slice(0, 3).map((other) => (
            <Link
              key={other.id}
              to={`/actualites/${other.slug}`}
              className="rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#821828] transition-all group overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-surface-elevated)]">
                  <OptimizedImage
                    src={other.image}
                    alt={other.title}
                    aspectRatio="16/9"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded bg-[#821828] text-white text-[10px] font-bold uppercase tracking-wider shadow">
                      {other.category}
                    </span>
                  </div>
                </div>

                <div className="px-4 space-y-1.5 pb-2">
                  <span className="text-[10px] text-[var(--text-muted)] block">{other.date}</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] group-hover:text-[#821828] transition-colors line-clamp-2 leading-snug">
                    {other.title}
                  </h4>
                </div>
              </div>

              <div className="px-4 pb-4 pt-2 border-t border-[var(--border-subtle)]/50 flex items-center justify-between text-[11px] text-[#821828] font-bold">
                <span>Lire la suite</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </MotionPage>
  );
};
