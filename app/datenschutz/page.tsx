import Link from 'next/link';

export const metadata = {
  title: 'Datenschutzerklärung | Kraynova Translate',
  description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO',
};

export default function DatenschutzPage() {
  return (
    <div lang="de" className="min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition mb-10"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">1. Verantwortliche Stelle</h2>
            <p>
              Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Ianina Machalova<br />
              Kraynova Translate<br />
              Merseburger Str. 12<br />
              12689 Berlin, Deutschland<br />
              Telefon: <a href="tel:+4915756459556" className="text-amber-400 hover:text-amber-300 transition">015756459556</a><br />
              E-Mail: <a href="mailto:kraynova1@gmx.de" className="text-amber-400 hover:text-amber-300 transition">kraynova1@gmx.de</a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Ich verarbeite personenbezogene Daten der Nutzer dieser Website grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie meiner Inhalte und Leistungen erforderlich ist.
              Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers oder auf gesetzlicher Grundlage
              gemäß Art. 6 Abs. 1 DSGVO.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">3. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf der Website erhebt der Hosting-Anbieter
              automatisch technische Zugriffsdaten (sog. Server-Logfiles), u.a.:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene Seite / Datei, Referrer-URL</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <p>
              Diese Daten sind technisch erforderlich, um die Website sicher und stabil auszuliefern
              (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse an einer funktionsfähigen und sicheren
              Website). Weitere Informationen: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">4. Kontaktformular</h2>
            <p>
              Wenn Sie mir über das Kontaktformular eine Anfrage senden, werden die von Ihnen angegebenen Daten
              (Name, Kontaktdaten, gewünschte Leistung, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage und für
              den Fall von Anschlussfragen verarbeitet und an den Formular-Dienstleister Web3Forms
              (web3forms.com) übermittelt, der die Nachricht per E-Mail an mich weiterleitet.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung einer Anfrage im Rahmen vorvertraglicher
              bzw. vertraglicher Maßnahmen). Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks
              ihrer Erhebung nicht mehr erforderlich sind.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">5. Kontaktaufnahme per WhatsApp</h2>
            <p>
              Auf dieser Website befindet sich ein Link, über den Sie mich direkt per WhatsApp kontaktieren
              können. Wenn Sie diesen Link nutzen, öffnet sich die WhatsApp-Anwendung bzw. WhatsApp Web, und die
              weitere Kommunikation sowie die Verarbeitung Ihrer Daten (z.B. Telefonnummer, Nachrichteninhalt)
              erfolgt durch WhatsApp Ireland Limited bzw. Meta Platforms, Inc. nach deren eigenen
              Datenschutzbestimmungen. Auf diese Verarbeitung habe ich keinen Einfluss.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">6. Kundenstimmen / Bewertungen</h2>
            <p>
              Wenn Sie über das Formular eine Bewertung einreichen, werden der von Ihnen angegebene Name und Ihr
              Bewertungstext auf dieser Website veröffentlicht und lokal im Browser gespeichert
              (Local Storage), damit die Bewertung beim erneuten Besuch angezeigt wird. Zusätzlich wird die
              Bewertung per E-Mail an mich übermittelt (siehe Punkt 4). Rechtsgrundlage ist Ihre Einwilligung
              gemäß Art. 6 Abs. 1 lit. a DSGVO durch das aktive Absenden des Formulars.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">7. Lokale Speicherung (Local Storage)</h2>
            <p>
              Diese Website speichert einige technisch notwendige Einstellungen lokal in Ihrem Browser
              (Local Storage), u.a. Ihre gewählte Sprache und Ihre Cookie-Einwilligung. Diese Daten verlassen
              Ihr Gerät nicht und werden nicht an mich oder Dritte übertragen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">8. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://" auf „https://" wechselt.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">9. Ihre Rechte</h2>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft</li>
            </ul>
            <p>
              Zur Ausübung dieser Rechte können Sie sich jederzeit an die oben genannte Kontaktadresse wenden.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-white">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten zu beschweren. Zuständig ist:
            </p>
            <p>
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219, 10969 Berlin<br />
              mailbox@datenschutz-berlin.de
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <Link href="/impressum" className="text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition">
            Zum Impressum →
          </Link>
        </div>
      </div>
    </div>
  );
}