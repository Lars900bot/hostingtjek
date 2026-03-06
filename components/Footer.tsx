import Link from 'next/link';
import { Server } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-700/50 mt-16" style={{ backgroundColor: '#0a1628' }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Server className="w-6 h-6 text-indigo-400" />
              HostingTjek
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Upartisk sammenligning af webhosting i Danmark. Vi tester og vurderer hostingudbydere
              så du nemt kan finde den bedste løsning til dit behov.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Hostingtyper</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/wordpress-hosting" className="hover:text-indigo-400 transition-colors">WordPress Hosting</Link></li>
              <li><Link href="/vps-hosting" className="hover:text-indigo-400 transition-colors">VPS Hosting</Link></li>
              <li><Link href="/cloud-hosting" className="hover:text-indigo-400 transition-colors">Cloud Hosting</Link></li>
              <li><Link href="/#sammenlign" className="hover:text-indigo-400 transition-colors">Sammenlign alle</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Guides & Anmeldelser</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/guide/hvad-er-hosting" className="hover:text-indigo-400 transition-colors">Hvad er webhosting?</Link></li>
              <li><Link href="/guide/shared-vs-vps" className="hover:text-indigo-400 transition-colors">Shared vs VPS</Link></li>
              <li><Link href="/one-com-anmeldelse" className="hover:text-indigo-400 transition-colors">One.com anmeldelse</Link></li>
              <li><Link href="/surftown-anmeldelse" className="hover:text-indigo-400 transition-colors">Surftown anmeldelse</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© {year} HostingTjek.dk — Upartisk hosting-sammenligning</p>
          <p>
            Vi modtager affiliate-kommission ved køb via vores links.{' '}
            <Link href="/guide/hvad-er-hosting" className="text-slate-400 hover:text-indigo-400 transition-colors">
              Læs mere
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
