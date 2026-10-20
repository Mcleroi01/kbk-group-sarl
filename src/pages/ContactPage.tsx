import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertTriangle, Building2, Mail, User, ShieldAlert, Copy, Check } from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { COMPANY_INFO, SECTORS } from '../data/companyData';
import { ContactFormState, SubmissionReceipt } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSectorParam = searchParams.get('secteur');

  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    sector: initialSectorParam || 'Partenariat Général',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<SubmissionReceipt | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialSectorParam) {
      setFormData((prev) => ({ ...prev, sector: initialSectorParam }));
    }
  }, [initialSectorParam]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormState, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Veuillez saisir votre nom complet (au moins 3 caractères).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Veuillez renseigner une adresse e-mail professionnelle valide.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 4) {
      newErrors.subject = 'Veuillez préciser le sujet ou l\'objet de votre démarche.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Veuillez détailler votre message ou proposition (au moins 15 caractères).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      let referenceId = `KBK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const resJson = await response.json();
          if (resJson.referenceId) {
            referenceId = resJson.referenceId;
          }
        }
      } catch (e) {
        // Fallback for preview mode
      }

      const newReceipt: SubmissionReceipt = {
        referenceId,
        timestamp: new Date().toLocaleString('fr-FR', {
          dateStyle: 'medium',
          timeStyle: 'short'
        }),
        senderName: formData.fullName,
        senderEmail: formData.email,
        sector: formData.sector,
        subject: formData.subject
      };

      // Save to localStorage
      const pastHistory = JSON.parse(localStorage.getItem('kbk_inquiries') || '[]');
      localStorage.setItem('kbk_inquiries', JSON.stringify([newReceipt, ...pastHistory]));

      setReceipt(newReceipt);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        sector: 'Partenariat Général',
        subject: '',
        message: ''
      });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRef = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MotionPage className="pt-24 pb-24 space-y-16">
      
      {/* Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Contact & Partenariat' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Prises De Contact Institutionnelles
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Construisons de nouvelles opportunités d'affaires
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              Pour tout projet minier, logistique, numérique ou commercial en RDC, contactez la Direction Générale de KBK GROUP SARL.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Corporate Contacts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Confirmation Receipt */}
          <div className="lg:col-span-7">
            {receipt ? (
              <div className="p-8 sm:p-10 rounded-lg bg-[var(--bg-surface)] border border-emerald-800/40 space-y-6 shadow-[var(--shadow-soft)] animate-fadeIn">
                <div className="flex items-center gap-3 text-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      Demande enregistrée avec succès
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Votre dossier d'échange a été généré sous référence unique.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                    <span className="text-[var(--text-muted)]">Référence du dossier :</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#821828] dark:text-[#9e2336]">{receipt.referenceId}</span>
                      <button
                        onClick={() => copyRef(receipt.referenceId)}
                        className="p-1 rounded bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                        title="Copier la référence"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2.5">
                    <span className="text-[var(--text-muted)]">Horodatage :</span>
                    <span className="text-[var(--text-primary)]">{receipt.timestamp}</span>
                  </div>

                  <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2.5">
                    <span className="text-[var(--text-muted)]">Expéditeur :</span>
                    <span className="text-[var(--text-primary)] font-medium">{receipt.senderName} ({receipt.senderEmail})</span>
                  </div>

                  <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2.5">
                    <span className="text-[var(--text-muted)]">Secteur :</span>
                    <span className="text-[var(--text-primary)]">{receipt.sector}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Objet :</span>
                    <span className="text-[var(--text-primary)] font-medium">{receipt.subject}</span>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Votre message est transmis au secrétariat de la Direction Générale. Conservez votre identifiant pour tout échange ultérieur.
                </p>

                <button
                  type="button"
                  onClick={() => setReceipt(null)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] rounded transition-colors shadow-sm"
                >
                  Rédiger un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-6 shadow-[var(--shadow-soft)]" noValidate>
                
                <div className="border-b border-[var(--border-subtle)] pb-4">
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Formulaire de transmission de dossier
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Veuillez renseigner les éléments pour orientation vers le bon pôle d'activité.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      Nom complet <span className="text-[#821828]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex : Joseph Mukendi"
                      className={`w-full px-4 py-2.5 text-sm rounded bg-[var(--bg-surface-elevated)] border ${
                        errors.fullName ? 'border-rose-500' : 'border-[var(--border-subtle)] focus:border-[#821828]'
                      } text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[#821828]`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      Adresse e-mail <span className="text-[#821828]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nom@entreprise.cd"
                      className={`w-full px-4 py-2.5 text-sm rounded bg-[var(--bg-surface-elevated)] border ${
                        errors.email ? 'border-rose-500' : 'border-[var(--border-subtle)] focus:border-[#821828]'
                      } text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[#821828]`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      Entreprise / Organisation <span className="text-[var(--text-muted)] font-normal">(Facultatif)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nom de votre structure"
                      className="w-full px-4 py-2.5 text-sm rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[#821828] focus:outline-none focus:ring-1 focus:ring-[#821828]"
                    />
                  </div>

                  <div>
                    <label htmlFor="sector" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                      Secteur concerné
                    </label>
                    <select
                      id="sector"
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-primary)] focus:border-[#821828] focus:outline-none focus:ring-1 focus:ring-[#821828]"
                    >
                      <option value="Partenariat Général">Partenariat Général / Direction</option>
                      {SECTORS.map((s) => (
                        <option key={s.id} value={s.name}>
                          Secteur {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                    Sujet de la demande <span className="text-[#821828]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex : Proposition de sous-traitance logistique corridor Matadi"
                    className={`w-full px-4 py-2.5 text-sm rounded bg-[var(--bg-surface-elevated)] border ${
                      errors.subject ? 'border-rose-500' : 'border-[var(--border-subtle)] focus:border-[#821828]'
                    } text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[#821828]`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-1.5">
                    Message détaillé <span className="text-[#821828]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Détaillez votre proposition d'affaires, votre besoin ou votre demande de partenariat..."
                    className={`w-full px-4 py-2.5 text-sm rounded bg-[var(--bg-surface-elevated)] border ${
                      errors.message ? 'border-rose-500' : 'border-[var(--border-subtle)] focus:border-[#821828]'
                    } text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[#821828]`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[var(--text-muted)]">
                    * Champs obligatoires
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#63101e] active:scale-[0.98] rounded transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmettre la demande</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Documentary Photography & Corporate Points */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Consultation Documentary Photo */}
            <div className="rounded-lg overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] bg-[var(--bg-surface)]">
              <OptimizedImage
                src={COMPANY_INFO.partnershipImage}
                alt="Échanges et contrats d'affaires en Afrique Centrale"
                aspectRatio="16/9"
                priority={true}
                className="filter brightness-[0.94]"
              />
              <div className="p-4 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block font-medium">
                  Partenariats commerciaux et négociations d'affaires en RDC.
                </span>
              </div>
            </div>

            {/* Direct Information Points */}
            <div className="p-6 sm:p-7 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-5 shadow-[var(--shadow-soft)]">
              <div className="pb-3 border-b border-[var(--border-subtle)]">
                <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
                  Canaux Institutionnels
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mt-1">
                  Relations Entreprises & Investisseurs
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)] block">Siège Administratif</strong>
                    <span>Kinshasa, République démocratique du Congo</span>
                    <p className="text-[11px] text-[var(--text-muted)] mt-0.5">Adresse physique en cours d'homologation légale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)] block">Direction Générale</strong>
                    <span>{COMPANY_INFO.directorGeneral}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)] block">Canal numérique professionnel</strong>
                    <a
                      href={COMPANY_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#821828] dark:text-[#9e2336] hover:underline"
                    >
                      Messagerie LinkedIn KBK GROUP SARL
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#821828] shrink-0 mt-0.5" />
                <span>
                  KBK GROUP SARL ne communique aucun numéro de compte bancaire ou demande de fonds via des canaux non sécurisés.
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </MotionPage>
  );
};
