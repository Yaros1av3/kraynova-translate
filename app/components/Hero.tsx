import { Lang, LangContent } from '../types';
import Achievements from './Achievements';
interface HeroProps {
  lang: Lang;
  t: LangContent;
  onOpenModal: () => void;
}

export default function Hero({ lang, t, onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-neutral-800/40">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-mono tracking-widest">
            <span>◆</span> {t.badge}
          </div>
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] break-words">
            {t.title}
          </h1>
          <p className="text-base text-neutral-400 font-normal leading-relaxed max-w-xl">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`tel:${t.phoneHref}`}
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/10 flex items-center gap-2.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {t.phone}
            </a>
            <button
              onClick={onOpenModal}
              className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 border border-neutral-700/80 cursor-pointer"
            >
              {t.formTitle}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Achievements lang={lang} title={t.achievementsTitle} achievements={t.achievements} />
        </div>
      </div>
    </section>
  );
}