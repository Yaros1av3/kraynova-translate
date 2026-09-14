import ClientPage from './client-page';
import { content } from './data/content';

export const metadata = {
  title: 'Kraynova Translate — Mündlicher Übersetzungsservice Berlin',
  description: 'Ihr zuverlässiger Sprachhelfer und Dolmetscher in Berlin für Behörden, Ärzte und Formulare.',
  alternates: {
    canonical: 'https://kraynova-translate.de',
    languages: {
      'de': 'https://kraynova-translate.de/?lang=de',
      'ru': 'https://kraynova-translate.de/?lang=ru',
      'x-default': 'https://kraynova-translate.de',
    },
  },
};

// FAQPage — берём немецкий вариант вопросов (совпадает с canonical-версией страницы)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.de.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientPage />
    </>
  );
}