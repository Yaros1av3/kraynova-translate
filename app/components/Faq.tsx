import { LangContent } from '../types';

interface FaqProps {
  t: LangContent;
}

export default function Faq({ t }: FaqProps) {
  return (
    <section className="py-14 border-t border-neutral-800/40 bg-neutral-950/40">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.faqTitle}</h2>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{t.faqSubtitle}</h3>
        </div>
        <div className="space-y-3 pt-2">
          {t.faqs.map((faq, idx) => (
            <details key={idx} className="group bg-neutral-950 p-5 rounded-xl border border-neutral-800/80 cursor-pointer">
              <summary className="text-sm font-semibold text-white flex justify-between items-center outline-none">
                {faq.q}
                <span className="text-amber-400 transform group-open:rotate-180 transition-transform font-mono text-xs">▼</span>
              </summary>
              <p className="mt-3 text-neutral-400 text-xs leading-relaxed pt-3 border-t border-neutral-900">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}