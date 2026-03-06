import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Terminal, Shield, Zap, HardDrive } from 'lucide-react';
import { getProvidersByType } from '@/data/providers';
import ProviderCard from '@/components/ProviderCard';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Bedste VPS Hosting i Danmark 2024 – Fra 35 kr/md',
  description:
    'Find den bedste VPS hosting i Danmark. Sammenlign DigitalOcean, Hetzner og flere. Dedikerede ressourcer fra 35 kr/md. Upartisk guide og anmeldelser.',
};

export default function VpsHostingPage() {
  const vpsProviders = getProvidersByType('vps');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <span className="text-slate-300">VPS Hosting</span>
      </nav>

      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          🖥️ VPS Hosting Guide 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Bedste VPS Hosting i Danmark
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          En VPS (Virtual Private Server) giver dig dedikerede ressourcer, fuld root-adgang og komplet kontrol over dit server-miljø.
          Perfekt til udviklere, større webshops og applikationer med specifikke krav. Vi sammenligner de bedste VPS-udbydere fra 35 kr/md.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-indigo-400" /> {vpsProviders.length} VPS-udbydere testet</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Opdateret marts 2024</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-indigo-400" /> Upartisk vurdering</span>
        </div>
      </div>

      {/* Top providers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Bedste VPS hosting udbydere</h2>
        <div className="space-y-4">
          {vpsProviders.map((p, i) => (
            <ProviderCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">Sammenligning af VPS hosting</h2>
        <p className="text-slate-400 mb-5">Klik på kolonneoverskrifterne for at sortere tabellen.</p>
        <ComparisonTable providers={vpsProviders} />
      </section>

      {/* Content */}
      <section className="space-y-8 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er en VPS?</h2>
          <p className="mb-4">
            En Virtual Private Server (VPS) er en virtuel maskine, der kører på en fysisk server, men er isoleret fra de andre
            virtuelle maskiner på samme hardware. Du får dedikerede ressourcer — CPU, RAM og lagerplads — som ikke deles med andre,
            og fuld administratoradgang (root) til at installere og konfigurere, hvad du vil.
          </p>
          <p className="mb-4">
            Til forskel fra delt hosting, hvor alle kunder deler serveren og dens ressourcer, garanterer en VPS dig en fast mængde
            ressourcer. Det betyder forudsigelig ydelse og langt bedre muligheder for at tilpasse serveren til dine præcise behov.
            Du kan installere din egen software, vælge dit operativsystem og konfigurere serveren præcis som du vil.
          </p>
          <p>
            Prismæssigt ligger VPS-løsninger typisk mellem delt hosting og dedikerede servere. De bedste VPS-udbydere som
            Hetzner og DigitalOcean tilbyder VPS fra ca. 35-45 kr/md — et fantastisk prispunkt for den kontrol og ydelse du får.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700/60 p-6" style={{ backgroundColor: '#1e293b' }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-indigo-400" />
            VPS specifikationer — hvad betyder det?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {[
              { term: 'vCPU', def: 'Virtuelle CPU-kerner. Mere er bedre til applikationer med mange processer.' },
              { term: 'RAM', def: 'Arbejdshukommelse. Minimum 1-2 GB til webserver. 4+ GB til databaser og apps.' },
              { term: 'SSD/NVMe', def: 'Lagringsteknologi. NVMe er hurtigst. Vigtigt for I/O-intensive applikationer.' },
              { term: 'Båndbredde', def: 'Månedlig datatrafik. Hetzner giver op til 20 TB, DigitalOcean 1 TB.' },
              { term: 'Datacenter lokation', def: 'Vælg europæisk datacenter (Frankfurt, Falkenstein) for lavest latens til Danmark.' },
              { term: 'IPv4/IPv6', def: 'IP-adresser. Du bør få mindst én dedikeret IPv4-adresse inkluderet.' },
            ].map((item) => (
              <div key={item.term} className="flex gap-3">
                <span className="font-semibold text-indigo-400 flex-shrink-0 w-20">{item.term}</span>
                <span className="text-slate-300">{item.def}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvornår har du brug for en VPS?</h2>
          <p className="mb-4">
            Du bør overveje at skifte til VPS hosting, hvis et eller flere af disse punkter gælder for dig:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { ok: true, text: 'Din delte hosting er for langsom i spidsbelastning' },
              { ok: true, text: 'Du har brug for at installere speciel software' },
              { ok: true, text: 'Du driver en webshop med mange transaktioner' },
              { ok: true, text: 'Du kører Node.js, Python, Docker eller lignende' },
              { ok: true, text: 'Du har brug for dedikerede ressourcer til SLA-overholdelse' },
              { ok: true, text: 'Du vil hoste flere hjemmesider på én server' },
              { ok: false, text: 'Du er begynder uden teknisk erfaring med Linux' },
              { ok: false, text: 'Dit site har under 1.000 månedlige besøgende' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm">
                <span className={item.ok ? 'text-green-400' : 'text-red-400'}>{item.ok ? '✅' : '❌'}</span>
                <span className="text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hetzner vs DigitalOcean — hvad er bedst?</h2>
          <p className="mb-4">
            De to mest populære VPS-udbydere til tekniske brugere er <strong className="text-white">Hetzner</strong> og
            <strong className="text-white"> DigitalOcean</strong>. Begge er fremragende, men med lidt forskellige styrker.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700/60 p-5" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-3">🇩🇪 Hetzner — Bedste pris/ydelse</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✅ Billigst på markedet: VPS fra 35 kr/md</li>
                <li>✅ NVMe SSD på alle planer</li>
                <li>✅ Op til 20 TB datatrafik inkluderet</li>
                <li>✅ Tyske datacentre (GDPR-venligt)</li>
                <li>✅ Fremragende ydelse for prisen</li>
                <li>⚠️ Lidt mere begrænset UI end DigitalOcean</li>
              </ul>
            </div>
            <div className="rounded-xl border border-indigo-500/30 p-5 bg-indigo-950/20">
              <h4 className="font-bold text-white mb-3">🌊 DigitalOcean — Bedste developer-oplevelse</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✅ Ekstremt brugervenligt interface</li>
                <li>✅ Fremragende dokumentation</li>
                <li>✅ Managed databaser, Kubernetes m.m.</li>
                <li>✅ Stærkt community og tutorials</li>
                <li>✅ Frankfurt datacenter (lav latens)</li>
                <li>⚠️ Dyrere end Hetzner for samme specs</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            <strong className="text-white">Vores anbefaling:</strong> Vælg Hetzner hvis pris/ydelse er vigtigst. Vælg DigitalOcean
            hvis du er ny til VPS og sætter pris på god dokumentation og et intuitivt interface.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Managed vs Unmanaged VPS</h2>
          <p className="mb-4">
            En vigtig beslutning ved VPS-hosting er, om du vil have en <strong className="text-white">unmanaged</strong> (selvadministreret) eller
            <strong className="text-white"> managed</strong> (administreret) VPS:
          </p>
          <p className="mb-4">
            <strong className="text-white">Unmanaged VPS</strong> — du er selv ansvarlig for alt: installation af operativsystem,
            webserver-software (Nginx/Apache), sikkerhedsopdateringer, firewall-opsætning og backup. Kræver kendskab til Linux.
            Hetzner og DigitalOcean tilbyder primært unmanaged VPS.
          </p>
          <p>
            <strong className="text-white">Managed VPS</strong> — udbyderen håndterer drift, sikkerhed og opdateringer. Du fokuserer
            på din applikation/hjemmeside. Passer til dem, der vil have VPS-ydelse uden det tekniske ansvar. Typisk dyrere.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Konklusion: Hvilken VPS skal du vælge?</h2>
          <p className="mb-4">
            Til de fleste udviklere og tekniske brugere i Danmark anbefaler vi <strong className="text-white">Hetzner</strong> som første valg.
            Du får fremragende ydelse, NVMe SSD og op til 20 TB trafik til den laveste pris. Det tyske datacenter er nemt at komme til fra Danmark med meget lav latens.
          </p>
          <p>
            Er du ny til VPS og foretrækker god dokumentation og et brugervenligt interface, er <strong className="text-white">DigitalOcean</strong>
            det bedste valg — lidt dyrere, men med en overlegen brugeroplevelse og et fantastisk community. Læs mere i vores
            <Link href="/guide/shared-vs-vps" className="text-indigo-400 hover:text-indigo-300 transition-colors"> guide til shared vs VPS hosting</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <Zap className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Klar til at komme i gang med VPS?</h2>
        <p className="text-slate-300 mb-4">Sammenlign alle udbydere eller tag quizzen for en personlig anbefaling.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/#sammenlign" className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}>
            Sammenlign alle
          </Link>
          <Link href="/guide/shared-vs-vps" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all">
            Shared vs VPS guide <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
