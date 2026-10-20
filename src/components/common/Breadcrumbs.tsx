import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Fil d'Ariane" className="py-3">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[var(--text-muted)]">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li aria-hidden="true" className="text-slate-400">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                {isLast || !item.href ? (
                  <span className="font-semibold text-[var(--text-primary)] truncate max-w-[200px] sm:max-w-none block" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
