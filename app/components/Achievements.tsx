import { Lang, Achievement } from '../types';

interface AchievementsProps {
  lang: Lang;
  title: string;
  achievements: Achievement[];
}

export default function Achievements({ lang, title, achievements }: AchievementsProps) {
  const sizeClasses = [
    "text-lg sm:text-4xl font-black text-white font-mono mb-1",
    "text-lg sm:text-4xl font-black text-amber-400 font-mono mb-1",
    "text-sm sm:text-2xl font-bold text-white mb-1 break-words"
  ];

  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-8 rounded-3xl border border-neutral-800 shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-amber-400">{title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center divide-x divide-neutral-800/80">
        {achievements.map((item, idx) => (
          <div key={idx} className="min-w-0 px-1 sm:px-4 flex flex-col items-center">
            <div className={sizeClasses[idx] ?? sizeClasses[2]}>{item.num}</div>
            <div
              lang={lang}
              className="w-full text-[9px] sm:text-xs text-neutral-400 uppercase tracking-normal sm:tracking-wide leading-tight break-words [hyphens:auto]"
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}