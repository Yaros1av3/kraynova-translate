import { LangContent } from '../types';

interface TestimonialModalProps {
  open: boolean;
  onClose: () => void;
  t: LangContent;
  name: string;
  onNameChange: (value: string) => void;
  text: string;
  onTextChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TestimonialModal({
  open,
  onClose,
  t,
  name,
  onNameChange,
  text,
  onTextChange,
  onSubmit
}: TestimonialModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-neutral-950 border border-neutral-800 w-full max-w-md rounded-3xl p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full flex items-center justify-center transition cursor-pointer"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-white mb-4">{t.testimonialModalTitle}</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">{t.testimonialNamePlaceholder}</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="Иван М."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">{t.testimonialTextPlaceholder}</label>
            <textarea
              required
              rows={4}
              value={text}
              onChange={(e) => onTextChange(e.target.value)}
              placeholder="..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition cursor-pointer"
          >
            {t.submitTestimonial}
          </button>
        </form>
      </div>
    </div>
  );
}