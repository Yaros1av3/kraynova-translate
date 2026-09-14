import { Lang, LangContent } from '../types';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  t: LangContent;
  lang: Lang;
  selectedService: string;
  onSelectedServiceChange: (value: string) => void;
  submitted: boolean;
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactModal({
  open,
  onClose,
  t,
  lang,
  selectedService,
  onSelectedServiceChange,
  submitted,
  loading,
  onSubmit
}: ContactModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-neutral-950 border border-neutral-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full flex items-center justify-center transition cursor-pointer"
        >
          ✕
        </button>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{t.formTitle}</h3>
          <p className="text-neutral-400 text-xs leading-relaxed">{t.formSubtitle}</p>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center mx-auto text-2xl">
              ✓
            </div>
            <p className="text-sm font-semibold text-white leading-relaxed px-4">{t.formSuccess}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                {t.formName}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={t.placeholderName}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                {t.formContact}
              </label>
              <input
                type="text"
                name="contact"
                required
                placeholder={t.placeholderContact}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                {t.formService}
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={selectedService}
                  onChange={(e) => onSelectedServiceChange(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3.5 text-sm text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer pr-10"
                >
                  {t.services.map((s, idx) => (
                    <option key={idx} value={s.title} className="bg-neutral-900 text-white py-2">
                      {s.title} ({s.price})
                    </option>
                  ))}
                  <option value="Другой вопрос / Консультация" className="bg-neutral-900 text-white py-2">
                    {lang === 'ru' ? 'Другой вопрос / Консультация' : 'Andere Frage / Beratung'}
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                {t.formMessage}
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder={t.placeholderMessage}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition cursor-pointer shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              {loading ? "..." : t.formSubmit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}