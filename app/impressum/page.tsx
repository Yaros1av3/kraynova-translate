import Link from 'next/link';

export const metadata = {
  title: 'Impressum | Kraynova Translate',
  description: 'Impressum gemäß § 5 DDG (vormals TMG)',
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Impressum</h1>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Angaben gemäß § 5 DDG</h2>
            <p>
              Inhaberin: [ВАШЕ ИМЯ И ФАМИЛИЯ]<br />
              Kraynova Translate<br />
              [УЛИЦА, ДОМ]<br />
              [ИНДЕКС] Berlin<br />
              Deutschland
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4915756459556" className="text-amber-400 hover:text-amber-300 transition">015756459556</a><br />
              E-Mail: <a href="mailto:kraynova1@gmx.de" className="text-amber-400 hover:text-amber-300 transition">kraynova1@gmx.de</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Umsatzsteuer</h2>
            <p>
              [Falls zutreffend: Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE...
              — oder: Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet.]
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              [ВАШЕ ИМЯ И ФАМИЛИЯ]<br />
              [УЛИЦА, ДОМ]<br />
              [ИНДЕКС] Berlin
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Haftung für Links</h2>
            <p>
              Mein Angebot enthält gegebenenfalls Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <Link href="/datenschutz" className="text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition">
            Zur Datenschutzerklärung →
          </Link>
        </div>
      </div>
    </div>
  );
}