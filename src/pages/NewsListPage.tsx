import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, AlertCircle, Newspaper, Sparkles, Mail } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { NEWS_ITEMS, COMPANY_INFO } from '../data/companyData';
import { NewsItem } from '../types';

export const NewsListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Institutionnel', 'Mines', 'Numérique', 'Logistique'];

  const filteredNews = selectedCategory === 'Tous'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter((item) => item.category === selectedCategory);

  const featuredArticle = NEWS_ITEMS.find((item) => item.featured) || NEWS_ITEMS[0];
  const gridArticles = selectedCategory === 'Tous' 
    ? NEWS_ITEMS.filter((item) => item.id !== featuredArticle.id)
    : filteredNews;

  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Editorial Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Actualités et perspectives' }]} />

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#821828]/10 text-[#821828] dark:text-[#9e2336] text-xs font-semibold tracking-wider uppercase">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Espace Éditorial & Veille Économique</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Actualités et perspectives
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Retrouvez les communications officielles, les analyses sectorielles et les perspectives opérationnelles de KBK GROUP SARL en République démocratique du Congo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Transparency Banner */}
        <div className="p-4 sm:p-5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)] block">Statut de diffusion éditoriale</strong>
            <p className="leading-relaxed">
              Les publications ci-dessous constituent la vitrine des communiqués et synthèses stratégiques préparés par la cellule de communication de KBK GROUP SARL. Les versions définitives sont homologuées lors des parutions officielles.
            </p>
          </div>
        </div>

        {/* Featured Article (Grand Format Visuel) - Displayed when "Tous" is selected */}
        {selectedCategory === 'Tous' && featuredArticle && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>À la une</span>
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">Édition spéciale RDC</span>
            </div>

            <article className="rounded-xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#821828]/60 transition-all shadow-md group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Area */}
                <div className="lg:col-span-7 relative overflow-hidden min-h-[260px] sm:min-h-[340px]">
                  <OptimizedImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    aspectRatio="16/9"
                    priority={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded bg-[#821828] text-white text-xs font-bold uppercase tracking-wider shadow">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Editorial Description Area */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#821828]" />
                        <span>{featuredArticle.date}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#821828] transition-colors leading-tight heading-display">
                      <Link to={`/actualites/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {featuredArticle.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      Statut : {featuredArticle.status}
                    </span>

                    <Link
                      to={`/actualites/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#62101e] rounded transition-all shadow-sm group-hover:translate-x-0.5"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[var(--border-subtle)]">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              {selectedCategory === 'Tous' ? 'Toutes les publications' : `Publications · ${selectedCategory}`}
            </h2>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const count = cat === 'Tous'
                  ? NEWS_ITEMS.length
                  : NEWS_ITEMS.filter((n) => n.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#821828] flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? 'bg-[#821828] text-white shadow-sm'
                        : 'bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-[var(--bg-surface-subtle)] text-[var(--text-muted)]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Articles with Verified Images */}
          {gridArticles.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                Aucun communiqué disponible pour le moment dans cette catégorie.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                De nouveaux dossiers d'analyse sectorielle sont en cours de rédaction par la direction.
              </p>
              <button
                onClick={() => setSelectedCategory('Tous')}
                className="mt-2 text-xs font-bold text-[#821828] underline"
              >
                Afficher toutes les publications
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-[var(--bg-surface)] rounded-lg border border-[var(--border-subtle)] hover:border-[#821828]/60 transition-all flex flex-col justify-between overflow-hidden shadow-[var(--shadow-soft)] group hover:-translate-y-1 duration-200"
                >
                  <div className="space-y-4">
                    {/* Visual Card Header */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[var(--bg-surface-elevated)]">
                      <OptimizedImage
                        src={article.image}
                        alt={article.title}
                        aspectRatio="16/9"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded bg-[#821828] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="px-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#821828]" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#821828] transition-colors leading-snug">
                        <Link to={`/actualites/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-4 mt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-[11px] text-[var(--text-muted)] font-mono">
                      {article.status === 'Communiqué à valider' ? 'Préparatoire' : 'Officiel'}
                    </span>

                    <Link
                      to={`/actualites/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] group-hover:underline"
                    >
                      <span>Lire l'article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>

        {/* Press Relations Callout */}
        <section className="mt-16 rounded-xl p-8 sm:p-10 bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
              Espace Relations Presse & Partenaires Institutionnels
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Pour toute demande d'interview, de communiqué officiel ou de dossier d'accréditation médiatique concernant KBK GROUP SARL, contactez notre secrétariat général.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#62101e] rounded shadow transition-all whitespace-nowrap shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Contacter la communication</span>
          </Link>
        </section>

      </section>

    </MotionPage>
  );
};
