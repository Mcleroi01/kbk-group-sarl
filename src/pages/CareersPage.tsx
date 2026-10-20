import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Upload, 
  FileText, 
  Send, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  MapPin, 
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { MotionFadeIn, MotionPage } from '../components/common/MotionWrapper';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { CAREER_DATA, COMPANY_INFO } from '../data/companyData';
import { CareerApplicationReceipt } from '../types';

export const CareersPage: React.FC = () => {
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Kinshasa');
  const [pole, setPole] = useState('Mines & Géologie');
  const [experienceLevel, setExperienceLevel] = useState('3 à 7 ans');
  const [pitch, setPitch] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<CareerApplicationReceipt | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const formRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Jump to form with selected pole
  const handleSelectPole = (poleName: string) => {
    setPole(poleName);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'Le fichier ne doit pas dépasser 10 Mo.' }));
        return;
      }
      setSelectedFile(file);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 3) {
      errs.fullName = 'Veuillez saisir votre nom et prénom complets.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Veuillez renseigner une adresse email valide.';
    }
    if (!phone.trim() || phone.trim().length < 6) {
      errs.phone = 'Veuillez indiquer un numéro de téléphone joignable.';
    }
    if (!pitch.trim() || pitch.trim().length < 30) {
      errs.pitch = 'Veuillez décrire brièvement votre parcours et vos motivations (minimum 30 caractères).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedReceipt: CareerApplicationReceipt = {
        referenceId: `KBK-TALENT-2026-${randomSuffix}`,
        timestamp: new Date().toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        fullName,
        email,
        phone,
        location,
        pole,
        experienceLevel,
        fileName: selectedFile ? selectedFile.name : 'CV-candidat-spontané.pdf'
      };

      setReceipt(generatedReceipt);
      setIsSubmitting(false);

      // Save application history in localStorage for user convenience
      try {
        const stored = JSON.parse(localStorage.getItem('kbk_career_applications') || '[]');
        stored.push(generatedReceipt);
        localStorage.setItem('kbk_career_applications', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }
    }, 1200);
  };

  const handleCopyRef = () => {
    if (receipt) {
      navigator.clipboard.writeText(receipt.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  const handleReset = () => {
    setReceipt(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setPitch('');
    setSelectedFile(null);
    setErrors({});
  };

  return (
    <MotionPage className="pt-24 pb-24 space-y-20">
      
      {/* 1. Hero Header */}
      <section className="bg-[var(--bg-surface-elevated)] py-14 border-b border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Carrières & Talents' }]} />

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#821828]/10 text-[#821828] dark:text-[#9e2336] text-xs font-semibold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>Capital Humain & Opportunités</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Carrières et opportunités
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {CAREER_DATA.introDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Hero Visual Spotlight with Official Motto */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-[440px] overflow-hidden">
              <OptimizedImage
                src={CAREER_DATA.heroImage}
                alt="Équipe professionnelle KBK GROUP SARL à Kinshasa"
                priority={true}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-mono tracking-wider text-[var(--text-muted)]">
                  Philosophie d'entreprise
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-serif italic">
                  « {CAREER_DATA.motto} »
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Le développement durable de la République démocratique du Congo repose sur des femmes et des hommes rigoureux, passionnés par l'excellence et désireux de relever les défis de l'industrie, du digital, du négoce et de la logistique.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#62101e] rounded shadow transition-all"
                >
                  <span>Déposer une candidature spontanée</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#poles-competences"
                  className="inline-flex items-center justify-center px-4 py-3 text-xs font-semibold text-[var(--text-primary)] bg-[var(--bg-surface-elevated)] hover:bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)] rounded transition-colors"
                >
                  Découvrir les métiers
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Transparency Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-7 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] flex items-start gap-4 shadow-sm">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              Politique de recrutement transparente & intégrité
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {CAREER_DATA.transparencyNotice}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Pôles de compétences et métiers du groupe */}
      <section id="poles-competences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-28">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
            Pôles d'Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
            Les métiers et compétences au cœur de nos projets
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Consultez les spécialités mobilisées au sein des filiales et directions de KBK GROUP SARL en RDC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_DATA.poles.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#821828]/60 transition-all shadow-[var(--shadow-soft)] flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                  <span className="text-xs font-mono text-[#821828] dark:text-[#9e2336] font-bold">
                    Pôle 0{index + 1}
                  </span>
                  {item.sectorSlug && (
                    <Link
                      to={`/secteurs/${item.sectorSlug}`}
                      className="text-[11px] text-[var(--text-muted)] hover:text-[#821828] transition-colors"
                    >
                      Voir le secteur →
                    </Link>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[#821828] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[var(--text-muted)] block">
                    Profils recherchés :
                  </span>
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                    {item.roles.map((role, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#821828] text-xs mt-0.5">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <button
                  type="button"
                  onClick={() => handleSelectPole(item.name)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded bg-[var(--bg-surface-elevated)] hover:bg-[#821828] hover:text-white text-[var(--text-primary)] transition-all border border-[var(--border-subtle)]"
                >
                  <span>Postuler pour ce pôle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Culture d'entreprise et Valeurs RH */}
      <section className="bg-[var(--bg-surface-elevated)] py-16 border-y border-[var(--border-subtle)] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
              Engagement RH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
              Ce qui nous unit chez KBK GROUP SARL
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Une culture d'entreprise ancrée dans la rigueur de gestion, l'émulation collective et la valorisation du travail d'équipe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_DATA.culturePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-[#821828]/10 text-[#821828] dark:text-[#9e2336] flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Processus de recrutement en 4 étapes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
            Méthodologie
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight heading-display">
            Notre processus de sélection en 4 étapes
          </h2>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Une démarche claire, équitable et respectueuse du parcours de chaque candidat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_DATA.recruitmentSteps.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] relative space-y-3"
            >
              <span className="text-3xl font-extrabold font-mono text-[#821828]/30 dark:text-[#9e2336]/30">
                {s.step}
              </span>
              <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Formulaire de Candidature Spontanée */}
      <section ref={formRef} id="formulaire-candidature" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-8 sm:p-12 shadow-xl space-y-8">
          
          <div className="space-y-2 pb-6 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#821828] dark:text-[#9e2336]">
              Portail Candidature Spontanée
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] heading-display">
              Transmettez votre profil à la Direction des Ressources Humaines
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Remplissez le formulaire ci-dessous. Un accusé de réception officiel doté d'une référence unique de suivi vous sera délivré instantanément.
            </p>
          </div>

          {receipt ? (
            /* Submission Success State with Receipt */
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    Dossier de candidature transmis avec succès
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    Votre dossier a été enregistré dans le vivier officiel des compétences de KBK GROUP SARL. Il sera examiné en priorité dès l'ouverture d'une mission correspondant à votre profil.
                  </p>
                </div>
              </div>

              {/* Official Receipt Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[var(--border-subtle)] gap-2">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-[var(--text-muted)] block">
                      Référence Officielle de Transmission
                    </span>
                    <span className="text-xl font-bold font-mono text-[#821828] dark:text-[#9e2336]">
                      {receipt.referenceId}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyRef}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-primary)] hover:border-[#821828] transition-colors self-start sm:self-auto"
                  >
                    {copiedRef ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600">Copié</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        <span>Copier la référence</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[var(--text-muted)] block">Candidat :</span>
                    <span className="font-semibold text-[var(--text-primary)]">{receipt.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block">Date & Heure :</span>
                    <span className="font-semibold text-[var(--text-primary)]">{receipt.timestamp}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block">Pôle de compétence :</span>
                    <span className="font-semibold text-[var(--text-primary)]">{receipt.pole}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block">Ville / Territoire :</span>
                    <span className="font-semibold text-[var(--text-primary)]">{receipt.location}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block">Niveau d'expérience :</span>
                    <span className="font-semibold text-[var(--text-primary)]">{receipt.experienceLevel}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-muted)] block">Fichier joint :</span>
                    <span className="font-semibold text-[var(--text-primary)] flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#821828]" />
                      <span>{receipt.fileName}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2 text-[11px] text-[var(--text-muted)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Dossier sécurisé et confidentiel · Conservation conforme aux dispositions légales en RDC.</span>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-[#821828] hover:underline"
                >
                  Soumettre un autre dossier de candidature
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Application Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nom complet */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">
                    Nom et prénom(s) <span className="text-[#821828]">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="ex. Moïse Kalala"
                    className={`w-full px-4 py-2.5 rounded-md bg-[var(--bg-surface-elevated)] border text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[var(--border-subtle)]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">
                    Adresse email professionnelle ou personnelle <span className="text-[#821828]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.nom@domaine.com"
                    className={`w-full px-4 py-2.5 rounded-md bg-[var(--bg-surface-elevated)] border text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-[var(--border-subtle)]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Téléphone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">
                    Numéro de téléphone <span className="text-[#821828]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+243 ... ou indicatif international"
                    className={`w-full px-4 py-2.5 rounded-md bg-[var(--bg-surface-elevated)] border text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-[var(--border-subtle)]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                </div>

                {/* Ville / Région */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">
                    Lieu de résidence actuel
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors"
                  >
                    <option value="Kinshasa">Kinshasa (Siège)</option>
                    <option value="Lubumbashi">Lubumbashi (Haut-Katanga)</option>
                    <option value="Kolwezi">Kolwezi (Lualaba)</option>
                    <option value="Matadi">Matadi (Kongo Central)</option>
                    <option value="Autre région RDC">Autre province de RDC</option>
                    <option value="Diaspora / International">Diaspora congolaise / International</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Pôle de compétences */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">
                    Pôle sectoriel visé <span className="text-[#821828]">*</span>
                  </label>
                  <select
                    value={pole}
                    onChange={(e) => setPole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors"
                  >
                    {CAREER_DATA.poles.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Niveau d'expérience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[var(--text-primary)]">
                    Années d'expérience professionnelle
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors"
                  >
                    <option value="Jeune diplômé / Débutant (< 1 an)">Jeune diplômé / Débutant (&lt; 1 an)</option>
                    <option value="1 à 3 ans">1 à 3 ans (Junior)</option>
                    <option value="3 à 7 ans">3 à 7 ans (Confirmé)</option>
                    <option value="Plus de 7 ans">Plus de 7 ans (Senior)</option>
                    <option value="Direction / Cadre supérieur">Direction / Cadre supérieur (&gt; 12 ans)</option>
                  </select>
                </div>
              </div>

              {/* Dépôt de CV (simulation de sélection de fichier avec drag & drop) */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-primary)]">
                  Curriculum Vitae (PDF ou DOCX, max 10 Mo)
                </label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-6 rounded-lg border-2 border-dashed border-[var(--border-subtle)] hover:border-[#821828] transition-colors cursor-pointer bg-[var(--bg-surface-elevated)] text-center space-y-2"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-surface)] mx-auto flex items-center justify-center text-[#821828]">
                    <Upload className="w-5 h-5" />
                  </div>
                  {selectedFile ? (
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Fichier sélectionné : {selectedFile.name}</span>
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)]">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} Mo · Cliquez pour changer
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-medium text-[var(--text-primary)]">
                        Cliquez pour parcourir ou glissez votre CV ici
                      </p>
                      <p className="text-[11px] text-[var(--text-muted)]">
                        Formats acceptés : PDF, Word (.docx) · Maximum 10 Mo
                      </p>
                    </div>
                  )}
                </div>
                {errors.file && <p className="text-[11px] text-red-500">{errors.file}</p>}
              </div>

              {/* Lettre de motivation / Synthèse */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[var(--text-primary)]">
                  Synthèse de compétences & motivations <span className="text-[#821828]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  placeholder="Présentez en quelques phrases vos compétences clés, vos réalisations et votre motivation à contribuer à l'essor de KBK GROUP SARL..."
                  className={`w-full px-4 py-3 rounded-md bg-[var(--bg-surface-elevated)] border text-xs sm:text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[#821828] transition-colors leading-relaxed ${
                    errors.pitch ? 'border-red-500' : 'border-[var(--border-subtle)]'
                  }`}
                />
                {errors.pitch && <p className="text-[11px] text-red-500">{errors.pitch}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--border-subtle)]">
                <div className="text-[11px] text-[var(--text-muted)]">
                  <p>Traitement direct par la Direction Générale & Ressources Humaines.</p>
                  <p>Aucun frais de dossier exigé.</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#821828] hover:bg-[#62101e] disabled:opacity-50 rounded shadow-md transition-all whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enregistrement en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Soumettre ma candidature</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 7. FAQ Carrières */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-semibold text-[#821828] dark:text-[#9e2336] tracking-wider">
            Foire Aux Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] heading-display">
            Questions fréquentes sur nos recrutements
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Consultez les réponses aux interrogations courantes sur les carrières chez KBK GROUP SARL.
          </p>
        </div>

        <div className="space-y-4">
          {CAREER_DATA.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-[var(--text-primary)] hover:text-[#821828] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#821828] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)]/50 bg-[var(--bg-surface-elevated)]/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </MotionPage>
  );
};
