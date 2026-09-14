import { LangContent } from '../types';

interface ServicesProps {
  t: LangContent;
  onSelectService: (title: string) => void;
}

function getIcon(cat: string) {
  if (cat.includes('ГОС') || cat.includes('BEHÖRDEN')) {
    return <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />;
  }
  if (cat.includes('МЕД') || cat.includes('MEDIZIN')) {
    return <path d="M19 14h-6v6h-2v-6H5v-2h6V6h2v6h6v2z" />;
  }
  if (cat.includes('ФОРМ') || cat.includes('DOKUMENTE')) {
    return <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />;
  }
  return (
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  );
}

export default function Services({ t, onSelectService }: ServicesProps) {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{t.servicesSectionTitle}</h2>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.servicesTitle}</h3>
        <p className="text-sm text-neutral-400">{t.servicesSubtitle}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {t.services.map((s, idx) => (
          <div
            key={idx}
            onClick={() => onSelectService(s.title)}
            className="group relative bg-gradient-to-b from-neutral-900/90 to-neutral-950 p-6 rounded-2xl border border-neutral-800/80 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-12px_rgba(245,158,11,0.18)] cursor-pointer overflow-hidden"
          >
            <div className="absolute -right-12 -top-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all duration-500 pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-[9px] font-mono tracking-widest text-amber-400 uppercase px-2.5 py-1 bg-amber-500/10 rounded-md border border-amber-500/20">
                  {s.cat}
                </span>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {getIcon(s.cat)}
                  </svg>
                </div>
              </div>

              <h4 className="text-base font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors leading-snug">
                {s.title}
              </h4>
              <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                {s.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between mt-auto">
              <div>
                <span className="text-[9px] font-mono text-neutral-500 uppercase block tracking-wider">{t.priceLabel}</span>
                <span className="text-base font-black text-amber-400 font-mono">{s.price}</span>
              </div>
              <span className="px-3 py-1.5 bg-neutral-900 group-hover:bg-amber-500 text-neutral-300 group-hover:text-black text-[10px] font-bold uppercase tracking-wider rounded-lg border border-neutral-800 group-hover:border-amber-500 transition-all duration-300 shadow-sm">
                {t.bookServiceBtn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}