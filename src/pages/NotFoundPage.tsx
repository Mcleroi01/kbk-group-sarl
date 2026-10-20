import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { MotionPage } from '../components/common/MotionWrapper';

export const NotFoundPage: React.FC = () => {
  return (
    <MotionPage className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-lg bg-[var(--bg-surface)] dark:bg-[#121824] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)]">
        <span className="font-mono text-5xl font-black text-[#821828] dark:text-[#9e2336] block">
          404
        </span>
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">
          Page introuvable
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
          La page que vous recherchez n'existe pas ou a été déplacée dans le cadre de notre nouvelle architecture multipage.
        </p>

        <div className="pt-2 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] rounded transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    </MotionPage>
  );
};
