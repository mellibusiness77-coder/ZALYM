export type Language = 'FR' | 'EN';

export interface NavTranslation {
  home: string;
  history: string;
  services: string;
  projects: string;
  contact: string;
}

export interface HeroTranslation {
  title: string;
  subtitle: string;
  ctaProjects: string;
  ctaContact: string;
}

export interface HistoryTranslation {
  sectionTitle: string;
  quote: string;
  paragraph1: string;
  paragraph2: string;
  statExperience: string;
  statCountries: string;
  statClarity: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  text: string;
  image: string;
  buttonText: string;
  moreDetails: string[];
}

export interface ProjectItem {
  id: string;
  country: string;
  countryCode: string;
  title: string;
  location: string;
  duration?: string;
  style?: string;
  bannerImage: string;
  introduction: string;
  gallery: {
    url: string;
    caption: string;
  }[];
}

export interface ContactTranslation {
  title: string;
  subtitle: string;
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  serviceOptions: {
    design: string;
    coordination: string;
    audit: string;
  };
  placeholderMessage: string;
  messageLabel: string;
  sendBtn: string;
  whatsappNotice: string;
}

export interface FooterTranslation {
  tagline: string;
  presenceTitle: string;
  hoursTitle: string;
  hoursVal: string;
  rights: string;
}

export interface TranslationSet {
  nav: NavTranslation;
  hero: HeroTranslation;
  history: HistoryTranslation;
  services: {
    sectionTitle: string;
    subtitle: string;
    items: ServiceItem[];
  };
  projects: {
    sectionTitle: string;
    subtitle: string;
    moreInfoButton: string;
    backBtn: string;
    projectDetailsLabel: string;
    projectGalleryLabel: string;
    items: { [key: string]: ProjectItem };
  };
  contact: ContactTranslation;
  footer: FooterTranslation;
}
