export interface Sector {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  detailedScope: string[];
  strategicFocus: string;
  image: string;
  keyDrivers: string[];
  contextDRC: string;
  prospectiveAvenues: string[];
}

export interface CityHub {
  id: string;
  name: string;
  province: string;
  role: string;
  description: string;
  strategicImportance: string;
  coordinates: { x: number; y: number }; // percentage on stylized DRC map
  geoCoordinates: { lat: number; lon: number };
  keyCorridors: string[];
}

export interface ValueItem {
  name: string;
  description: string;
  quote?: string;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Mines' | 'Numérique' | 'Négoce' | 'Logistique' | 'Institutionnel';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  imageCaption?: string;
  isDemo: boolean;
  status: 'Communiqué à valider' | 'Annonce officielle';
  featured?: boolean;
}

export interface CareerSectorSpecialty {
  id: string;
  name: string;
  sectorSlug?: string;
  roles: string[];
  description: string;
}

export interface CareerApplicationReceipt {
  referenceId: string;
  timestamp: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  pole: string;
  experienceLevel: string;
  fileName?: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone?: string;
  company: string;
  sector: string;
  subject: string;
  message: string;
}

export interface SubmissionReceipt {
  referenceId: string;
  timestamp: string;
  senderName: string;
  senderEmail: string;
  sector: string;
  subject: string;
}
