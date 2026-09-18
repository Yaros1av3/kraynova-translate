import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { detectLangFromHeaders } from "./lib/detect-lang";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://kraynova-translate.de";
const TITLE = "Kraynova Translate — Mündlicher Übersetzungsservice Berlin";
const DESCRIPTION =
  "Ihr zuverlässiger Sprachhelfer und Dolmetscher in Berlin für Behörden, Ärzte und Formulare.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Übersetzer Berlin",
    "Dolmetscher Berlin",
    "Übersetzungsdienst Jobcenter",
    "Übersetzer Ausländerbehörde",
    "переводчик Берлин",
    "устный перевод Берлин",
  ],
  authors: [{ name: "Kraynova Translate" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Kraynova Translate",
    locale: "de_DE",
    alternateLocale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org — сведения об организации, отображаются на каждой странице сайта
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kraynova Translate",
  image: `${SITE_URL}/opengraph-image`,
  url: SITE_URL,
  telephone: "+4915756459556",
  email: "kraynova1@gmx.de",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Merseburger Str. 12",
    postalCode: "12689",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "City",
    name: "Berlin",
  },
  availableLanguage: ["de", "ru"],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const lang = await detectLangFromHeaders();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}