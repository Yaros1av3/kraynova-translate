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

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-wrap justify-center md:justify-end gap-6 items-center">
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
            <a href={`mailto:${t.email}`} className="hover:text-amber-400 transition">{t.email}</a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-1">
            {t.contacts.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.phoneHref}`}
                className="hover:text-amber-400 transition flex items-baseline gap-1.5"
              >
                <span className="text-neutral-500">
                  {contact.name} ({contact.role}):
                </span>
                <span className="text-neutral-300">{contact.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}