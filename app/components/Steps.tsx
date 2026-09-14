import { LangContent } from '../types';

interface StepsProps {
  t: LangContent;
}

export default function Steps({ t }: StepsProps) {
  return (
    <section className="py-14 border-t border-neutral-800/40 bg-neutral-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.stepsTitle}</h2>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{t.stepsSubtitle}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.steps.map((step, idx) => (
            <div key={idx} className="bg-neutral-950 p-6 rounded-xl border border-neutral-800/60 relative space-y-3">
              <div className="text-2xl font-black text-amber-500/40 font-mono">{step.num}</div>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}