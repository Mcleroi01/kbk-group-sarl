import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { COMPANY_INFO, SECTORS } from '../../data/companyData';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSectorsDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSectorsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSectorActive = location.pathname.startsWith('/secteurs');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-canvas)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-[var(--shadow-soft)]'
          : 'bg-[var(--bg-canvas)]/80 backdrop-blur-sm border-b border-[var(--border-subtle)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Official Logo PNG & Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#821828] rounded-md"
            aria-label="Accueil - KBK GROUP SARL"
          >
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded bg-white p-1 flex items-center justify-center overflow-hidden border border-[var(--border-subtle)] shadow-sm group-hover:border-[#821828] transition-colors">
              <img
                src={COMPANY_INFO.logoPng}
                alt="Logo officiel KBK GROUP SARL"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[var(--text-primary)] leading-tight group-hover:text-[#821828] transition-colors">
                KBK GROUP <span className="text-[#821828] dark:text-[#9e2336] text-xs font-semibold ml-0.5">SARL</span>
              </span>
              <span className="text-[11px] text-[var(--text-muted)] font-medium tracking-wide">
                Kinshasa · RDC
              </span>
            </div>
          </Link>

          {/* Zone 2: Primary Nav Links with Sector Dropdown */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[var(--text-secondary)]"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/a-propos"
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`
              }
            >
              À propos
            </NavLink>

            {/* Secteurs Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setSectorsDropdownOpen(!sectorsDropdownOpen)}
                onMouseEnter={() => setSectorsDropdownOpen(true)}
                className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isSectorActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`}
                aria-expanded={sectorsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Secteurs d'activité</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sectorsDropdownOpen ? 'rotate-180 text-[#821828]' : ''}`} />
              </button>

              {sectorsDropdownOpen && (
                <div
                  onMouseLeave={() => setSectorsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-72 bg-[var(--bg-surface)] rounded-md border border-[var(--border-subtle)] shadow-xl p-2 z-50 animate-fadeIn"
                >
                  <Link
                    to="/secteurs"
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] hover:bg-[var(--bg-surface-elevated)] rounded transition-colors border-b border-[var(--border-subtle)] mb-1"
                  >
                    Vue d'ensemble des secteurs →
                  </Link>

                  {SECTORS.map((sector) => (
                    <Link
                      key={sector.id}
                      to={`/secteurs/${sector.slug}`}
                      className="block px-3 py-2.5 rounded hover:bg-[var(--bg-surface-elevated)] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#821828] dark:group-hover:text-[#9e2336] transition-colors">
                          {sector.name}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] font-mono">0{SECTORS.indexOf(sector) + 1}</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-muted)] line-clamp-1 mt-0.5">
                        {sector.tagline}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/implantation"
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`
              }
            >
              Implantation
            </NavLink>

            <NavLink
              to="/actualites"
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`
              }
            >
              Actualités
            </NavLink>

            <NavLink
              to="/carrieres"
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`
              }
            >
              Carrières
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 transition-colors relative ${
                  isActive
                    ? 'text-[var(--text-primary)] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#821828]'
                    : 'hover:text-[var(--text-primary)]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Zone 3: Theme Toggle & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button (Accessible Sun/Moon) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
              title={theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
              className="p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#821828]"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] active:scale-[0.98] rounded transition-all whitespace-nowrap shrink-0 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#821828]"
            >
              <span>Parlons de votre projet</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/80" />
            </Link>

            {/* Mobile menu trigger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#821828]"
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[var(--bg-canvas)]/98 backdrop-blur-xl border-b border-[var(--border-subtle)] px-5 py-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2 text-base font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] hover:text-[#821828] py-2 border-b border-[var(--border-subtle)]"
            >
              Accueil
            </Link>

            <Link
              to="/a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] hover:text-[#821828] py-2 border-b border-[var(--border-subtle)]"
            >
              À propos du groupe
            </Link>

            {/* Mobile Sectors List */}
            <div className="py-2 border-b border-[var(--border-subtle)] space-y-2">
              <Link
                to="/secteurs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336] block"
              >
                Secteurs d'activité (Tous) →
              </Link>
              <div className="pl-3 space-y-2 pt-1">
                {SECTORS.map((s) => (
                  <Link
                    key={s.id}
                    to={`/secteurs/${s.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    › {s.name} ({s.tagline})
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/implantation"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] hover:text-[#821828] py-2 border-b border-[var(--border-subtle)]"
            >
              Implantation & Carte RDC
            </Link>

            <Link
              to="/actualites"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] hover:text-[#821828] py-2 border-b border-[var(--border-subtle)]"
            >
              Actualités & Communiqués
            </Link>

            <Link
              to="/carrieres"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] hover:text-[#821828] py-2 border-b border-[var(--border-subtle)]"
            >
              Carrières & Recrutement
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--text-primary)] hover:text-[#821828] py-2 border-b border-[var(--border-subtle)]"
            >
              Contact & Partenariat
            </Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] rounded shadow"
              >
                <span>Parlons de votre projet</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-between pt-2 text-xs text-[var(--text-muted)]">
                <span>Devise officielle :</span>
                <span className="italic font-serif font-bold text-[var(--text-primary)]">« {COMPANY_INFO.slogan} »</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
