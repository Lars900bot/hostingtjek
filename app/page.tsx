import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { providers } from '@/data/providers';
import ProviderCard from '@/components/ProviderCard';
import ComparisonTable from '@/components/ComparisonTable';
import HostingQuiz from '@/components/HostingQuiz';

export const metadata: Metadata = {
  title: 'Sammenlign Webhosting i Danmark 2024 – Find det bedste',
  description:
    'Sammenlign de bedste webhosting-udbydere i Danmark. Se priser, lagerplads, support og anmeldelser. Find hosting til din hjemmeside fra 19 kr/md.',
};

const features = [
  { icon: Shield, title: '100% upartisk', desc: 'Vi tester selv alle udbydere og er ikke betalt for vores anbefalinger' },
  { icon: Zap, title: 'Altid opdateret', desc: 'Priser og features opdateres løbende så du altid ser aktuelle tilbud' },
  { icon: Globe, title: 'Dansk fokus', desc: 'Vi sammenligner udbydere med fokus på det danske marked og dansk support' },
];

const categories = [
  { href: '/wordpress-hosting', label: 'WordPress Hosting', desc: 'Optimeret til WordPress', price: 'Fra 19 kr/md', emoji: '📝' },
  { href: '/vps-hosting', label: 'VPS Hosting', desc: 'Dedikerede ressourcer', price: 'Fra 35 kr/md', emoji: '🖥️' },
  { href: '/cloud-hosting', label: 'Cloud Hosting', desc: 'Skalerbar cloud-løsning', price: 'Fra 19 kr/md', emoji: '☁️' },
];

export default function HomePage() {
  const topProviders = providers.filter(p => p.types.includes('shared')).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-indigo-500/30 bg-indigo-950/50 text-indigo-300">
            <CheckCircle className="w-4 h-4" />
            Opdateret marts 2024 — 8 udbydere testet
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Find det bedste<br />
            <span style={{ color: '#818cf8' }}>webhosting i Danmark</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sammenlign priser, ydelse og support fra Danmarks bedste hostingudbydere.
            Vi har testet dem alle — og hjælper dig med at finde det rigtige valg.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#sammenlign"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#6366f1' }}
            >
              Sammenlign udbydere <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#quiz"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white border border-slate-600 hover:border-indigo-500 transition-all hover:bg-slate-800/50"
            >
              Tag hosting-quizzen
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Upartiske anmeldelser</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Opdaterede priser</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Dansk fokus</span>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-slate-700/50 py-8" style={{ backgroundColor: '#1e293b' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#312e81' }}>
                  <f.icon className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Vælg din hostingtype</h2>
          <p className="text-slate-400 mb-6">Ikke sikker på hvad du har brug for? Se vores guides til de forskellige hostingtyper.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group p-6 rounded-2xl border border-slate-700/60 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-900/20"
                style={{ backgroundColor: '#1e293b' }}
              >
                <span className="text-3xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-indigo-300 transition-colors">{cat.label}</h3>
                <p className="text-slate-400 text-sm mb-2">{cat.desc}</p>
                <p className="text-indigo-400 text-sm font-semibold">{cat.price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quiz */}
        <section id="quiz">
          <h2 className="text-2xl font-bold text-white mb-2">Usikker på hvad du har brug for?</h2>
          <p className="text-slate-400 mb-6">Besvar 3 hurtige spørgsmål og få en personlig anbefaling tilpasset dine behov.</p>
          <HostingQuiz />
        </section>

        {/* Top providers */}
        <section id="sammenlign">
          <h2 className="text-2xl font-bold text-white mb-2">Top 5 hostingudbydere i Danmark</h2>
          <p className="text-slate-400 mb-6">
            Vores eksperter har testet og sammenlignet de bedste udbydere på pris, ydelse, support og pålidelighed.
          </p>
          <div className="space-y-4">
            {topProviders.map((p, i) => (
              <ProviderCard key={p.id} provider={p} rank={i + 1} />
            ))}
          </div>
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Sammenligningstabel — alle udbydere</h2>
          <p className="text-slate-400 mb-6">Klik på kolonneoverskrifterne for at sortere efter pris, lagerplads eller rating.</p>
          <ComparisonTable providers={providers} />
        </section>

        {/* About webhosting */}
        <section className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er webhosting — og hvordan vælger du rigtigt?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-300 leading-relaxed">
            <div>
              <p className="mb-4">
                Webhosting er i bund og grund den service, der gør din hjemmeside tilgængelig på internettet. Når du opretter en hjemmeside,
                skal alle dine filer — billeder, tekst, kode — ligge et sted, hvorfra de kan hentes af besøgende. Det er præcis det, en
                hostingudbyder tilbyder: serverplads og båndbredde.
              </p>
              <p className="mb-4">
                I Danmark er der mange udbydere at vælge imellem, og priserne varierer fra 19 kr/md til flere hundrede kroner afhængigt af
                hvad du har brug for. De billigste løsninger passer fint til personlige blogs og mindre sites, mens webshops og
                virksomhedssites med høj trafik kræver mere robuste løsninger.
              </p>
              <p>
                En god tommelfingerregel: Start med delt hosting (shared hosting) hvis du er begynder eller har begrænset trafik. Skaler
                op til VPS eller cloud hosting, når dit site vokser, eller du har specifikke tekniske krav.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Hvad skal du kigge efter?</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Oppetid (uptime)', desc: 'Minimum 99.9% garanteret oppetid er standarden. 99.99% er endnu bedre.' },
                  { title: 'Lagerplads', desc: 'De fleste sites bruger under 5 GB. Kig efter SSD-lagerplads for bedre hastighed.' },
                  { title: 'SSL-certifikat', desc: 'Gratis SSL bør være inkluderet. Det er i dag et krav fra Google og browsere.' },
                  { title: 'Support', desc: 'Dansk telefonsupport er guld værd, hvis du ikke er tekniker. Kig efter 24/7 live chat.' },
                  { title: 'Skalerbarhed', desc: 'Kan du nemt opgradere, hvis dit site vokser? Fleksibilitet er vigtig på sigt.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{item.title}: </span>
                      <span className="text-slate-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl p-8 md:p-12 text-center border border-indigo-500/30"
          style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Klar til at vælge din hosting?</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            Brug vores quiz til at finde den perfekte hosting til dit projekt, eller sammenlign alle udbydere i tabellen ovenfor.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="#quiz" className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#6366f1' }}>
              Tag hosting-quizzen
            </Link>
            <Link href="/guide/hvad-er-hosting" className="px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all hover:bg-slate-800/50">
              Læs begynder-guiden
            </Link>
          </div>
        </section>

        {/* Guides */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Guides og artikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: '/guide/hvad-er-hosting', title: 'Hvad er webhosting?', desc: 'Den komplette begynderguide til webhosting — hvad det er, hvordan det virker, og hvad du skal vide.', tag: 'Begynder' },
              { href: '/guide/shared-vs-vps', title: 'Shared hosting vs VPS', desc: 'Hvad er forskellen på delt hosting og VPS? Hvornår skal du opgradere? Vi gennemgår fordele og ulemper.', tag: 'Guide' },
              { href: '/wordpress-hosting', title: 'Bedste WordPress hosting 2024', desc: 'De 5 bedste hostingudbydere til WordPress — testet og rangeret efter ydelse, pris og support.', tag: 'WordPress' },
              { href: '/vps-hosting', title: 'VPS hosting i Danmark', desc: 'Alt du skal vide om VPS hosting — hvornår du har brug for det, og hvilke udbydere der er bedst.', tag: 'VPS' },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group p-5 rounded-2xl border border-slate-700/60 hover:border-indigo-500/50 transition-all"
                style={{ backgroundColor: '#1e293b' }}
              >
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 mb-3 inline-block">
                  {g.tag}
                </span>
                <h3 className="font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{g.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{g.desc}</p>
                <span className="text-indigo-400 text-sm mt-3 inline-flex items-center gap-1">
                  Læs mere <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
