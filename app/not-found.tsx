import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-mono tracking-widest">
          <span>◆</span> 404
        </div>
        <h1 className="text-3xl font-bold text-white">Seite nicht gefunden</h1>
        <p className="text-sm text-neutral-400 leading-relaxed">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}