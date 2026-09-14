import { LangContent } from '../types';

interface AboutProps {
  t: LangContent;
}

export default function About({ t }: AboutProps) {
  return (
    <section className="py-14 border-t border-neutral-800/40">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.aboutTitle}</h2>
        <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
          {t.aboutText}
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-mono text-neutral-400">
          {t.locations.map((loc, idx) => (
            <span key={idx}>{loc}</span>
          ))}
        </div>
      </div>
    </section>
  );
}