import { Lang, LangContent } from '../types';

interface HeaderProps {
  lang: Lang;
  t: LangContent;
  onLangToggle: (lang: Lang) => void;
  onOpenModal: () => void;
}

export default function Header({ lang, t, onLangToggle, onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0a0a0c]/80 border-b border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 h-18 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          <span className="text-base font-bold tracking-widest text-white">
            KRAYNOVA <span className="text-amber-400 font-light">TRANSLATE</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onLangToggle(lang === 'ru' ? 'de' : 'ru')}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-amber-500/30 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
          >
            {lang === 'ru' ? 'DE' : 'RU'}
          </button>
          <button
            onClick={onOpenModal}
            className="hidden sm:inline-flex px-4 py-2 text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            {t.contactBtn}
          </button>
        </div>
      </div>
    </header>
  );
}