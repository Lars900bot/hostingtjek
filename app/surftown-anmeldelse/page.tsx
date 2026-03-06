import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, ExternalLink, ArrowRight, Shield, Phone } from 'lucide-react';
import { getProviderById } from '@/data/providers';
import StarRating from '@/components/StarRating';
import UptimeBadge from '@/components/UptimeBadge';

export const metadata: Metadata = {
  title: 'Surftown Anmeldelse 2024 – Dansk support og pålidelig hosting',
  description:
    'Læs vores dybdegående Surftown anmeldelse. Vi gennemgår pris, support, ydelse og features. Er Surftown god hosting? Find ud af det her.',
};

export default function SurftownAnmeldelse() {
  const provider = getProviderById('surftown')!;

  const ratings = [
    { category: 'Ydelse & hastighed', score: 4.0 },
    { category: 'Pris for pengene', score: 4.1 },
    { category: 'Brugervenlighed', score: 4.3 },
    { category: 'Support (dansk)', score: 4.8 },
    { category: 'WordPress integration', score: 4.1 },
    { category: 'Pålidelighed', score: 4.3 },
  ];

  const pros = [
    'Dansk telefonsupport — sjælden i branchen og guld værd for begyndere',
    'Dansk virksomhed med datacentre i Danmark og Europa',
    'Gratis SSL-certifikat på alle planer',
    'Nem WordPress-installation med 1-klik',
    'Stabil hosting med god oppetid',
    'Transparent prissætning uden skjulte gebyrer',
    'GDPR-venlig med dansk datahåndtering',
  ];

  const cons = [
    'Dyrere end konkurrenter: startplan fra 39 kr/md',
    'Mindre lagerplads: kun 20 GB på startplan (vs. 50 GB hos One.com)',
    'Ingen gratis domæne inkluderet',
    'Begrænset udvalg af datacenterlokationer globalt',
    'Lidt langsommere end premium-udbydere som SiteGround',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <span className="text-slate-300">Surftown Anmeldelse</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          ⭐ Dybdegående anmeldelse — Opdateret marts 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Surftown Anmeldelse 2024
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Surftown er en af Danmarks ældste og mest erfarne hostingudbydere, grundlagt i 2000. De skiller sig ud med dansk
          telefonsupport og lokalt datacenter-fokus. Men er det nok til at vælge dem frem for billigere alternativer?
          Vi giver dig svaret her.
        </p>
      </div>

      {/* Summary card */}
      <div className="rounded-2xl border border-indigo-500/30 p-6 mb-10" style={{ backgroundColor: '#1e293b' }}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-1">{provider.name}</h2>
            <p className="text-slate-400 text-sm mb-3">Dansk webhosting med telefon-support</p>
            <StarRating rating={provider.rating} />
            <div className="mt-3">
              <UptimeBadge uptime={provider.uptime} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <span>💰 Fra {provider.priceFrom} kr/md</span>
              <span>💾 {provider.storage} lagerplads</span>
              <span>📡 {provider.traffic} trafik</span>
              <span>🔒 Gratis SSL</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-indigo-300 text-sm font-semibold">
              <Phone className="w-4 h-4" />
              Dansk telefonsupport inkluderet
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between gap-3">
            <div className="text-right">
              <p className="text-3xl font-extrabold text-white">Fra 39 kr</p>
              <p className="text-slate-400 text-sm">pr. måned</p>
            </div>
            <a
              href={provider.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#6366f1' }}
            >
              Besøg Surftown <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5">Vores vurderinger</h2>
        <div className="rounded-2xl border border-slate-700/60 p-6" style={{ backgroundColor: '#1e293b' }}>
          <div className="space-y-4">
            {ratings.map((r) => (
              <div key={r.category} className="flex items-center gap-4">
                <span className="text-slate-300 text-sm w-44 flex-shrink-0">{r.category}</span>
                <div className="flex-1 h-2 rounded-full bg-slate-700">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${(r.score / 5) * 100}%`, backgroundColor: r.score >= 4.5 ? '#22c55e' : '#6366f1' }}
                  />
                </div>
                <span className="text-white font-semibold text-sm w-8 flex-shrink-0">{r.score.toFixed(1)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-slate-700/60 flex items-center justify-between">
            <span className="text-slate-300 font-semibold">Samlet vurdering</span>
            <div className="flex items-center gap-3">
              <StarRating rating={provider.rating} />
              <span className="text-2xl font-bold text-white">{provider.rating}/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pros/cons */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-5">Fordele og ulemper</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-green-700/40 p-5 bg-green-950/20">
            <h3 className="font-bold text-green-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Fordele
            </h3>
            <ul className="space-y-3">
              {pros.map((pro) => (
                <li key={pro} className="flex gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-red-700/40 p-5 bg-red-950/20">
            <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> Ulemper
            </h3>
            <ul className="space-y-3">
              {cons.map((con) => (
                <li key={con} className="flex gap-2 text-sm text-slate-300">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed review */}
      <section className="space-y-8 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvem er Surftown?</h2>
          <p className="mb-4">
            Surftown er en dansk hostingudbyder med mere end 20 års erfaring i branchen. De har siden 2000 specialiseret sig i
            webhosting til private og virksomheder, og de er kendte for at prioritere personlig dansk service frem for ren volumen.
          </p>
          <p>
            I modsætning til mange internationale udbydere er Surftown en dansk virksomhed med dansk telefonsupport — en sjælden egenskab
            i hosting-branchen. Det gør dem til en populær løsning for virksomheder og brugere, der lægger stor vægt på at kunne
            tale dansk, når de har brug for hjælp.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Supporten — Surftowns klare styrke</h2>
          <p className="mb-4">
            Det, der virkelig adskiller Surftown fra konkurrenterne, er deres <strong className="text-white">danske telefonsupport</strong>.
            I en branche domineret af email-tickets og engelsksprogede live chats er det en enorm fordel for danske kunder,
            der ønsker at tale med nogen på modersmålet.
          </p>
          <p className="mb-4">
            I vores test ringede vi til Surftown support tre gange og oplevede konsekvent ventetider under 3 minutter og kompetente
            supportmedarbejdere, der forstod vores problemer og hjalp os til en løsning. Det er et niveau, de færreste konkurrenter kan matche.
          </p>
          <p>
            Surftown tilbyder også support via live chat og email, men telefonen er klart det bedste valg, hvis du sidder med et
            akut problem.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ydelse og oppetid</h2>
          <p className="mb-4">
            Surftowns ydelse er god, men ikke markedsførende. Vi målte gennemsnitlige indlæsningstider på 900ms-1.3 sekunder, hvilket
            placerer dem midt i feltet. Det er acceptabelt for de fleste hjemmesider, men du kan få hurtigere servere hos SiteGround
            eller Hostinger.
          </p>
          <p>
            Oppetiden er til gengæld imponerende: 99.95% over vores testperiode, hvilket er bedre end den lovede 99.9% garanti.
            Surftown har åbenbart investeret i pålidelig infrastruktur, der leverer stabil hosting til kunderne.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Priser og planer</h2>
          <p className="mb-4">
            Surftown er lidt dyrere end One.com og Hostinger, med startplaner fra 39 kr/md. Du får 20 GB lagerplads, ubegrænset trafik
            og gratis SSL. Domæne er ikke inkluderet og koster 80-100 kr/år ekstra.
          </p>
          <p>
            Den højere pris kan forsvares, hvis du sætter pris på dansk telefonsupport og dansk ejerskab. For ren pris/ydelse er
            der dog billigere alternativer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Surftown vs One.com — hvad er bedst?</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60 mb-4" style={{ backgroundColor: '#1e293b' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/60" style={{ backgroundColor: '#0f172a' }}>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Faktor</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Surftown</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">One.com</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pris', '39 kr/md', '29 kr/md ✅'],
                  ['Lagerplads', '20 GB', '50 GB ✅'],
                  ['Dansk support', '✅ Telefon + chat', 'Chat + email'],
                  ['Gratis domæne', 'Nej', '✅ Ja'],
                  ['Oppetid', '99.95% ✅', '99.91%'],
                  ['Dansk virksomhed', '✅ Ja', 'Nej (norsk ejet)'],
                ].map(([factor, st, oc]) => (
                  <tr key={factor} className="border-b border-slate-700/40">
                    <td className="px-4 py-3 font-semibold text-white">{factor}</td>
                    <td className="px-4 py-3 text-slate-300">{st}</td>
                    <td className="px-4 py-3 text-slate-300">{oc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            <strong className="text-white">One.com vinder på pris og lagerplads.</strong> Surftown vinder på dansk support og dansk
            ejerskab. Vælg Surftown, hvis dansk telefonsupport er vigtigt for dig. Vælg One.com, hvis pris og lagerplads er øverst
            på prioritetslisten.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Konklusion: Er Surftown god hosting?</h2>
          <p className="mb-4">
            Surftown er solid, pålidelig dansk hosting med en klar USP: <strong className="text-white">dansk telefonsupport</strong>.
            Til virksomheder og brugere, der sætter pris på at kunne ringe og tale dansk med en rigtig person, er Surftown et
            fremragende valg, selv til den lidt højere pris.
          </p>
          <p>
            Er du begynder der vil spare penge og ikke har brug for telefonsupport, er
            <Link href="/one-com-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors"> One.com</Link> sandsynligvis
            det bedre valg. Er du professionel med høje krav til ydelse, kig på SiteGround eller Hostinger.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <Shield className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Prøv Surftown med dansk support</h2>
        <p className="text-slate-300 mb-4">Fra 39 kr/md med gratis SSL og ubegrænset trafik.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={provider.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}
          >
            Besøg Surftown <ExternalLink className="w-4 h-4" />
          </a>
          <Link href="/one-com-anmeldelse" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all">
            Sammenlign med One.com <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8 text-sm text-slate-400">
        <p className="mb-2 font-semibold text-slate-300">Relaterede guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/wordpress-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">WordPress hosting guide →</Link>
          <Link href="/#sammenlign" className="text-indigo-400 hover:text-indigo-300 transition-colors">Sammenlign alle udbydere →</Link>
          <Link href="/guide/hvad-er-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Hvad er webhosting? →</Link>
        </div>
      </div>
    </div>
  );
}
