interface LegalModalProps {
  open: boolean;
  onClose: () => void;
  type: 'impressum' | 'datenschutz';
  phone: string;
  email: string;
}

export default function LegalModal({ open, onClose, type, phone, email }: LegalModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-neutral-950 border border-neutral-800 w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full flex items-center justify-center transition cursor-pointer"
        >
          ✕
        </button>

        {type === 'impressum' ? (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <h3 className="text-xl font-bold text-white mb-4">Impressum</h3>
            <p className="font-semibold text-white">Angaben gemäß § 5 TMG</p>
            <p>Verantwortlich für den Inhalt:<br />Kraynova Translate<br />Berlin, Deutschland</p>
            <p className="font-semibold text-white pt-2">Kontakt:</p>
            <p>Telefon: {phone}<br />E-Mail: {email}</p>
            <p className="font-semibold text-white pt-2">Haftungsausschluss:</p>
            <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <h3 className="text-xl font-bold text-white mb-4">Datenschutzerklärung</h3>
            <p className="font-semibold text-white">1. Datenschutz auf einen Blick</p>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
            <p className="font-semibold text-white pt-2">2. Datenerfassung auf unserer Website</p>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Datenschutzerklärung entnehmen. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. über das Kontaktformular).</p>
            <p className="font-semibold text-white pt-2">3. SSL- bzw. TLS-Verschlüsselung</p>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p>
          </div>
        )}
      </div>
    </div>
  );
}