export type Lang = 'ru' | 'de';

export interface Service {
  cat: string;
  title: string;
  desc: string;
  price: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Achievement {
  num: string;
  label: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface LangContent {
  badge: string;
  title: string;
  subtitle: string;
  phone: string;
  phoneHref: string;
  email: string;
  servicesSectionTitle: string;
  servicesTitle: string;
  servicesSubtitle: string;
  priceLabel: string;
  bookServiceBtn: string;
  services: Service[];
  stepsTitle: string;
  stepsSubtitle: string;
  steps: Step[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  addTestimonialBtn: string;
  testimonialModalTitle: string;
  testimonialNamePlaceholder: string;
  testimonialTextPlaceholder: string;
  submitTestimonial: string;
  aboutTitle: string;
  aboutText: string;
  locations: string[];
  achievementsTitle: string;
  achievements: Achievement[];
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formContact: string;
  formService: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  placeholderName: string;
  placeholderContact: string;
  placeholderMessage: string;
  contactBtn: string;
  cookieText: string;
  cookieAccept: string;
  cookieSettings: string;
  impressumTitle: string;
  datenschutzTitle: string;
  legalNotice: string;
}

export type Content = Record<Lang, LangContent>;