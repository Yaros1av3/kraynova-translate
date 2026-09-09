import ClientPage from './client-page';

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

export default function Page() {
  return <ClientPage />;
}