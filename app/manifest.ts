import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kraynova Translate — Mündlicher Übersetzungsservice Berlin',
    short_name: 'Kraynova Translate',
    description: 'Ihr zuverlässiger Sprachhelfer und Dolmetscher in Berlin für Behörden, Ärzte und Formulare.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0c',
    theme_color: '#0a0a0c',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}