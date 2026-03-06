import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Cloud, Zap, TrendingUp, Globe } from 'lucide-react';
import { getProvidersByType } from '@/data/providers';
import ProviderCard from '@/components/ProviderCard';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Bedste Cloud Hosting i Danmark 2024 – Skalerbar og hurtig',
  description:
    'Find den bedste cloud hosting i Danmark. Sammenlign priser og features fra top cloud udbydere. Skalerbar hosting fra 19 kr/md. Komplet guide 2024.',
};

export default function CloudHostingPage() {
  const cloudProviders = getProvidersByType('cloud');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <span className="text-slate-300">Cloud Hosting</span>
      </nav>

      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          ☁️ Cloud Hosting Guide 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Bedste Cloud Hosting til danske hjemmesider
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          Cloud hosting tilbyder uovertruffen skalerbarhed og pålidelighed ved at distribuere din hjemmeside over flere servere.
          Resultatet: ingen nedetid ved trafikspidser og lynhurtige indlæsningstider. Vi gennemgår de bedste cloud-løsninger
          til det danske marked.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><Cloud className="w-4 h-4 text-indigo-400" /> {cloudProviders.length} cloud udbydere testet</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Opdateret marts 2024</span>
          <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-indigo-400" /> 22 kr gennemsnitlig CPC</span>
        </div>
      </div>

      {/* Top providers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Bedste cloud hosting udbydere i Danmark</h2>
        <div className="space-y-4">
          {cloudProviders.map((p, i) => (
            <ProviderCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">Sammenligning af cloud hosting</h2>
        <p className="text-slate-400 mb-5">Sorter efter pris, lagerplads eller rating.</p>
        <ComparisonTable providers={cloudProviders} />
      </section>

      {/* Content */}
      <section className="space-y-8 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er cloud hosting?</h2>
          <p className="mb-4">
            Cloud hosting er en moderne form for webhosting, hvor din hjemmeside eller applikation ikke er bundet til én enkelt fysisk
            server. I stedet kører den på et netværk af sammenkoblede servere — en "sky". Hvis én server har problemer, overtager de
            andre automatisk, hvilket sikrer høj oppetid og pålidelighed.
          </p>
          <p className="mb-4">
            Den primære fordel ved cloud hosting er <strong className="text-white">elastisk skalerbarhed</strong>: du kan øge ressourcerne
            (CPU, RAM, lagerplads) med et par klik og betaler typisk kun for det, du faktisk bruger. Det gør cloud hosting ideel til
            hjemmesider og applikationer med svingende trafik — fx nyhedssites der kan opleve pludselige trafikspidser.
          </p>
          <p>
            Til forskel fra traditionel delt hosting giver cloud hosting dig dedikerede ressourcer og garanti for ydelse. Og til forskel
            fra en VPS er ressourcerne ikke bundet til én enkelt fysisk maskine, men kan trækkes fra hele cloud-infrastrukturen.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700/60 p-6" style={{ backgroundColor: '#1e293b' }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-400" />
            Fordele ved cloud hosting
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Automatisk skalering', desc: 'Ressourcer justeres automatisk baseret på trafik — ingen manuel opgradering nødvendig' },
              { title: 'Høj oppetid', desc: 'Distribueret infrastruktur sikrer 99.99% uptime — ingen single point of failure' },
              { title: 'Geografisk distribution', desc: 'Servere spredt globalt reducerer latens for besøgende fra alle lande' },
              { title: 'Betal for forbrug', desc: 'Pay-as-you-go modeller hos DigitalOcean og Hetzner giver maksimal fleksibilitet' },
              { title: 'Hurtig deployment', desc: 'Nye servere kan spinnes op på minutter — perfekt til DevOps-workflows' },
              { title: 'Disaster recovery', desc: 'Automatiske snapshots og backups beskytter mod datatab og serverfejl' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Cloud hosting vs VPS vs Delt hosting</h2>
          <p className="mb-4">
            Det kan være forvirrende at vælge mellem de tre hostingtyper. Her er en enkel sammenligning:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60" style={{ backgroundColor: '#1e293b' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/60" style={{ backgroundColor: '#0f172a' }}>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Faktor</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Delt hosting</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">VPS</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold text-indigo-300">Cloud</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pris', 'Fra 19 kr/md', 'Fra 35 kr/md', 'Fra 19 kr/md'],
                  ['Skalerbarhed', 'Begrænset', 'Manuel', '✅ Automatisk'],
                  ['Ydelse', 'Variabel', 'Dedikeret', '✅ Høj og stabil'],
                  ['Pålidelighed', 'God (99.9%)', 'Meget god', '✅ Fremragende (99.99%)'],
                  ['Teknisk krav', 'Ingen', 'Middel/høj', 'Lav til middel'],
                  ['Bedst til', 'Begyndere', 'Udviklere', 'Voksende sites'],
                ].map(([factor, shared, vps, cloud]) => (
                  <tr key={factor} className="border-b border-slate-700/40">
                    <td className="px-4 py-3 font-semibold text-white">{factor}</td>
                    <td className="px-4 py-3 text-slate-300">{shared}</td>
                    <td className="px-4 py-3 text-slate-300">{vps}</td>
                    <td className="px-4 py-3 text-indigo-300">{cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvornår bør du vælge cloud hosting?</h2>
          <p className="mb-4">Cloud hosting er den rigtige løsning, hvis du kan sætte hak ved et eller flere af disse punkter:</p>
          <ul className="space-y-3">
            {[
              'Du forventer svingende eller voksende trafik og vil ikke risikere nedbrud',
              'Du driver en e-handelsplatform eller SaaS-applikation, der kræver høj oppetid',
              'Du har brug for at skalere hurtigt op og ned uden at skifte plan eller udbyder',
              'Du arbejder med continuous deployment og ønsker fleksibel infrastruktur',
              'Du har et globalt publikum og ønsker lav latens via CDN og distribuerede servere',
              'Du ønsker betaling baseret på faktisk forbrug frem for faste månedlige betalinger',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">De mest populære cloud hosting udbydere</h2>
          <p className="mb-4">
            <strong className="text-white">DigitalOcean</strong> er det klassiske valg for udviklere. De tilbyder enkle, veldokumenterede
            cloud-produkter (Droplets, Managed Databases, App Platform) med en af de bedste brugeroplevelser på markedet. Frankfurt-datacenter
            giver god latens til Danmark.
          </p>
          <p className="mb-4">
            <strong className="text-white">Hetzner</strong> er den europæiske udfordrer med fokus på pris/ydelse. Hetzner Cloud tilbyder
            NVMe SSD-baserede cloud-servere til ekstremt konkurrencedygtige priser, med datacentre i Frankfurt og Falkenstein.
            Ideelt til pris-bevidste teams med teknisk ekspertise.
          </p>
          <p className="mb-4">
            <strong className="text-white">Hostinger</strong> tilbyder cloud hosting til begyndere med et brugervenligt kontrolpanel
            og WordPress-integration. Godt valg for dem der vil have cloud-ydelse uden den tekniske kompleksitet af rå VPS.
          </p>
          <p>
            <strong className="text-white">SiteGround</strong> er særligt stærk inden for managed cloud hosting til WordPress og
            WooCommerce. Teknologien er baseret på Google Cloud, og du får premium-ydelse med SiteGround-support oveni.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Konklusion: Hvad er den bedste cloud hosting?</h2>
          <p className="mb-4">
            Det bedste valg af cloud hosting afhænger af din situation. For udviklere og tekniske brugere er
            <strong className="text-white"> Hetzner Cloud</strong> eller <strong className="text-white">DigitalOcean</strong> de bedste
            valg — fremragende ydelse, rimelige priser og god dokumentation.
          </p>
          <p>
            Til WordPress-sites på cloud anbefaler vi <strong className="text-white">SiteGround's cloud-planer</strong> — managed
            WordPress på Google Cloud-infrastruktur med 99.99% uptime-garanti og dansk/engelsk support. Læs også vores
            <Link href="/vps-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors"> VPS hosting guide</Link> for
            en dybdegående sammenligning af cloud og VPS.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <Globe className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Find din cloud hosting løsning</h2>
        <p className="text-slate-300 mb-4">Sammenlign alle udbydere eller brug vores quiz til at finde det rigtige valg.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/#sammenlign" className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}>
            Sammenlign alle
          </Link>
          <Link href="/#quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all">
            Tag quizzen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
