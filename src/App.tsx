import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { BackendDocsModal } from './components/BackendDocsModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SectorsOverviewPage } from './pages/SectorsOverviewPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { ImplantationPage } from './pages/ImplantationPage';
import { NewsListPage } from './pages/NewsListPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CareersPage } from './pages/CareersPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [backendDocsOpen, setBackendDocsOpen] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors selection:bg-[#821828] selection:text-white">
          {/* Shared Universal Header */}
          <Header />

          {/* Independent Multi-Page Routing */}
          <main className="flex-1">
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* About */}
              <Route path="/a-propos" element={<AboutPage />} />

              {/* Sectors Overview & Dedicated Sector Detail Pages (NO MODALS) */}
              <Route path="/secteurs" element={<SectorsOverviewPage />} />
              <Route path="/secteurs/:slug" element={<SectorDetailPage />} />

              {/* Territorial Implantation & DRC Vector Map */}
              <Route path="/implantation" element={<ImplantationPage />} />

              {/* News List & Individual Article Detail */}
              <Route path="/actualites" element={<NewsListPage />} />
              <Route path="/actualites/:slug" element={<NewsDetailPage />} />

              {/* Careers & Talent Acquisitions */}
              <Route path="/carrieres" element={<CareersPage />} />

              {/* Contact & Business Inquiries */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Legal Pages */}
              <Route path="/mentions-legales" element={<LegalPage />} />
              <Route path="/politique-confidentialite" element={<PrivacyPage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Shared Universal Footer */}
          <Footer onOpenBackendDocs={() => setBackendDocsOpen(true)} />

          {/* Backend Architecture Blueprint Modal */}
          <BackendDocsModal
            isOpen={backendDocsOpen}
            onClose={() => setBackendDocsOpen(false)}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
