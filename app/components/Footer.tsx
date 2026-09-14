import Link from 'next/link';
import { LangContent } from '../types';

interface FooterProps {
  t: LangContent;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="border-t border-neutral-800/80 py-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-400 font-mono">
        <div className="text-center md:text-left space-y-1">
          <div>© {new Date().getFullYear()} KRAYNOVA TRANSLATE. ALL RIGHTS RESERVED.</div>
          <div className="text-[10px] text-neutral-500">{t.legalNotice} Berlin, Deutschland</div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <Link
            href="/impressum"
            className="hover:text-amber-400 transition cursor-pointer underline decoration-neutral-700 underline-offset-4"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-amber-400 transition cursor-pointer underline decoration-neutral-700 underline-offset-4"
          >
            Datenschutz
          </Link>
          <div className="flex gap-4 text-neutral-300">
            <a href={`tel:${t.phoneHref}`} className="hover:text-amber-400 transition">{t.phone}</a>
            <a href={`mailto:${t.email}`} className="hover:text-amber-400 transition">{t.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}