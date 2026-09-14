interface CookieBannerProps {
  show: boolean;
  text: string;
  acceptLabel: string;
  onAccept: () => void;
}

export default function CookieBanner({ show, text, acceptLabel, onAccept }: CookieBannerProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-neutral-950/95 border-t border-neutral-800 backdrop-blur-md shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-300 leading-relaxed max-w-3xl">
          {text}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onAccept}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer shadow-md"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}