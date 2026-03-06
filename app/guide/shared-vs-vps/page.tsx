import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shared Hosting vs VPS – Hvad er forskellen? Komplet guide 2024',
  description:
    'Forstå forskellen på shared hosting og VPS. Hvornår skal du opgradere? Vi forklarer alt i simpelt dansk. Find det rigtige valg til dit site.',
};

export default function SharedVsVpsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <Link href="/" className="hover:text-indigo-400 transition-colors">Guides</Link>
        <span>/</span>
        <span className="text-slate-300">Shared vs VPS</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          📖 Hosting Guide 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Shared Hosting vs VPS — hvad er forskellen?
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          To af de mest populære hostingtyper er delt hosting (shared hosting) og VPS (Virtual Private Server). Mange ved ikke,
          hvornår det giver mening at opgradere fra det ene til det andet. Vi forklarer alt i simpelt dansk — med konkrete
          anbefalinger baseret på dit behov.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Opdateret marts 2024</span>
          <span className="flex items-center gap-1.5"><HelpCircle className="w-4 h-4 text-indigo-400" /> Begynder til mellemniveau</span>
        </div>
      </div>

      {/* Quick answer */}
      <div className="rounded-2xl border border-indigo-500/30 p-6 mb-10 bg-indigo-950/20">
        <h2 className="text-lg font-bold text-white mb-3">⚡ Det korte svar</h2>
        <p className="text-slate-300">
          <strong className="text-white">Shared hosting</strong> passer til de fleste begyndere, blogs og mindre sites.
          Det er billigt, nemt og kræver ingen teknisk viden.
          <strong className="text-white"> VPS</strong> er til dig, der har brug for mere ydelse, kontrol og
          dedikerede ressourcer — typisk når dit site vokser, eller du har specifikke tekniske krav.
        </p>
      </div>

      {/* Content */}
      <section className="space-y-10 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er shared hosting (delt hosting)?</h2>
          <p className="mb-4">
            Shared hosting er den mest udbredte og billigste form for webhosting. Forestil dig en stor lejlighedsbygning:
            alle lejerne deler de samme forsyninger — vand, varme, el. Det er præcis, hvad shared hosting er:
            mange kunder deler ressourcerne på den samme fysiske server.
          </p>
          <p className="mb-4">
            Fordelen er prisen: du kan komme i gang fra 19-39 kr/md og behøver ikke at bekymre dig om teknisk vedligeholdelse.
            Serveren styres af udbyderen, der sørger for opdateringer, sikkerhed og driftsovervågning.
          </p>
          <p>
            Ulempen er, at du deler ressourcer med andre kunder. Hvis en "nabo" på serveren oplever en trafikspids,
            kan det påvirke din sides hastighed. Det er sjældent et problem på normale tidspunkter, men kan være synligt
            ved stor belastning.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er VPS hosting?</h2>
          <p className="mb-4">
            En VPS (Virtual Private Server) er som at leje en hel lejlighed for dig selv frem for at dele en. Teknisk set
            bruger den stadig den samme fysiske server som andre VPS-instanser, men via virtualiseringsteknologi er ressourcerne
            dedikerede og isolerede. Du er garanteret en bestemt mængde CPU, RAM og lagerplads, uanset hvad andre gør.
          </p>
          <p className="mb-4">
            En VPS giver dig typisk fuld root-adgang til serveren, hvilket betyder, at du kan installere og konfigurere
            præcis den software, du ønsker. Det er en stor fordel for udviklere og tekniske brugere, men kræver en vis
            Linux-erfaring, da du selv er ansvarlig for vedligeholdelse.
          </p>
          <p>
            Prisen er højere end shared hosting — typisk 35-100 kr/md for en grundlæggende VPS — men du får til gengæld
            væsentligt bedre ydelse, mere kontrol og bedre skalerbarhedsmuligheder.
          </p>
        </div>

        {/* Comparison table */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-5">Shared hosting vs VPS — direkte sammenligning</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60" style={{ backgroundColor: '#1e293b' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/60" style={{ backgroundColor: '#0f172a' }}>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Faktor</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Shared Hosting</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold text-indigo-300">VPS Hosting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pris', 'Fra 19-39 kr/md ✅', 'Fra 35-100 kr/md'],
                  ['Ressourcer', 'Delte med andre', 'Dedikerede ✅'],
                  ['Ydelse', 'Variabel', 'Stabil og forudsigelig ✅'],
                  ['Teknisk krav', 'Ingen ✅', 'Linux-erfaring nødvendig'],
                  ['Kontrol', 'Begrænset', 'Fuld root-adgang ✅'],
                  ['Skalerbarhed', 'Begrænset', 'Nem og hurtig ✅'],
                  ['Support', 'Inkluderet', 'Oftest begrænset'],
                  ['Vedligeholdelse', 'Klares af udbyderen ✅', 'Du selv (unmanaged)'],
                  ['Bedst til', 'Begyndere, blogs, SMV', 'Udviklere, apps, e-handel'],
                ].map(([factor, shared, vps]) => (
                  <tr key={factor} className="border-b border-slate-700/40">
                    <td className="px-4 py-3 font-semibold text-white">{factor}</td>
                    <td className="px-4 py-3 text-slate-300">{shared}</td>
                    <td className="px-4 py-3 text-indigo-200">{vps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvornår skal du vælge shared hosting?</h2>
          <p className="mb-4">Shared hosting er det rigtige valg, hvis:</p>
          <div className="space-y-3">
            {[
              'Du er begynder og ikke har Linux eller server-erfaring',
              'Du driver en personlig blog, portfolio eller lille virksomhedssite',
              'Du forventer under 10.000 månedlige besøgende',
              'Du ikke har behov for specialsoftware eller custom serveropsætning',
              'Budget er en primær faktor — du vil holde omkostningerne nede',
              'Du vil have en nem løsning, der bare virker uden teknisk vedligeholdelse',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-slate-700/60 p-4" style={{ backgroundColor: '#1e293b' }}>
            <p className="text-sm text-slate-400">
              <strong className="text-white">Anbefalede shared hosting udbydere:</strong>{' '}
              <Link href="/one-com-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors">One.com</Link>{' '}
              (fra 29 kr/md), {' '}
              <Link href="/wordpress-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Hostinger</Link>{' '}
              (fra 19 kr/md), {' '}
              <Link href="/surftown-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors">Surftown</Link>{' '}
              (dansk support, fra 39 kr/md)
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvornår skal du vælge VPS?</h2>
          <p className="mb-4">Det er tid til at overveje VPS, hvis:</p>
          <div className="space-y-3">
            {[
              'Din shared hosting er for langsom, og du oplever timeouts ved trafikspidser',
              'Du er udvikler og har brug for at installere speciel software (Node.js, Docker, Python apps m.m.)',
              'Du driver en webshop med mange samtidige transaktioner',
              'Du har brug for dedikerede ressourcer med garanteret ydelse',
              'Du vil hoste flere hjemmesider på én server og styre det selv',
              'Du har behov for specifikke sikkerhedskonfigurationer eller compliance-krav',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-slate-700/60 p-4" style={{ backgroundColor: '#1e293b' }}>
            <p className="text-sm text-slate-400">
              <strong className="text-white">Anbefalede VPS udbydere:</strong>{' '}
              <Link href="/vps-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Hetzner</Link>{' '}
              (fra 35 kr/md, bedste pris/ydelse), {' '}
              <Link href="/vps-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">DigitalOcean</Link>{' '}
              (fra 45 kr/md, developer-favorit)
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Den tekniske forskel — enkelt forklaret</h2>
          <p className="mb-4">
            For at forstå den grundlæggende forskel kan du forestille dig en server som en stor pizza:
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-slate-700/60 p-5" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-3">🍕 Shared hosting er som at dele en pizza</h4>
              <p className="text-sm text-slate-400">
                Alle kunder deler ressourcerne på serveren. Hvis én spiser meget (stor trafik), kan der blive mindre til dig.
                Men det er billigt og nemt, og der er en servitør (udbyderen) der håndterer alt det praktiske.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-500/30 p-5 bg-indigo-950/20">
              <h4 className="font-bold text-white mb-3">🍕 VPS er som at have din egen pizza</h4>
              <p className="text-sm text-slate-400">
                Du har din egen portion dedikerede ressourcer. Det er dyrere, men du påvirkes ikke af andre. Du bestemmer
                selv hvad du vil have på (software, konfiguration) — men du skal også bage den selv (vedligeholde serveren).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Er der andre alternativer?</h2>
          <p className="mb-4">
            Udover shared hosting og VPS er der to andre populære hostingtyper, du bør kende:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-700/60 p-4" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-1">☁️ Cloud Hosting</h4>
              <p className="text-sm text-slate-400">
                Ligner VPS, men ressourcerne er fordelt over multiple servere. Giver bedre oppetid og automatisk skalerbarhed.
                Passer til sites med svingende trafik. <Link href="/cloud-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Læs vores cloud guide →</Link>
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/60 p-4" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-1">📝 Managed WordPress Hosting</h4>
              <p className="text-sm text-slate-400">
                Specialiseret hosting til WordPress med automatisk vedligeholdelse, opdateringer og premium ydelse.
                Pris fra 200+ kr/md. <Link href="/wordpress-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Læs vores WordPress guide →</Link>
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Konklusion: Shared hosting eller VPS?</h2>
          <p className="mb-4">
            For <strong className="text-white">langt de fleste brugere</strong> er shared hosting det rigtige valg. Det er billigt,
            nemt og mere end rigeligt til blogs, virksomhedssites og mindre webshops med op til 10-20.000 månedlige besøgende.
          </p>
          <p className="mb-4">
            Vælg VPS, når du har specifikke tekniske krav, høj trafik, eller har brug for dedikerede ressourcer og fuld kontrol.
            Hetzner og DigitalOcean er vores top anbefalinger til VPS i Danmark.
          </p>
          <p>
            Usikker? Brug vores <Link href="/#quiz" className="text-indigo-400 hover:text-indigo-300 transition-colors">gratis hosting-quiz</Link> til
            at få en personlig anbefaling baseret på netop dine behov.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <h2 className="text-xl font-bold text-white mb-2">Find den rigtige hosting til dig</h2>
        <p className="text-slate-300 mb-4">Tag vores quiz eller sammenlign alle udbydere direkte.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/#quiz" className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}>
            Tag hosting-quizzen
          </Link>
          <Link href="/vps-hosting" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all">
            Se VPS udbydere <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8 text-sm text-slate-400">
        <p className="mb-2 font-semibold text-slate-300">Relaterede guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/hvad-er-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Hvad er webhosting? →</Link>
          <Link href="/vps-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">VPS hosting guide →</Link>
          <Link href="/cloud-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Cloud hosting guide →</Link>
        </div>
      </div>
    </div>
  );
}
