import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Globe, Server, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hvad er webhosting? Den komplette begynderguide 2024',
  description:
    'Forstå hvad webhosting er, hvordan det virker, og hvad du skal kigge efter. Den komplette begynderguide på dansk. Find den bedste hosting til dig.',
};

export default function HvadErHostingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <Link href="/" className="hover:text-indigo-400 transition-colors">Guides</Link>
        <span>/</span>
        <span className="text-slate-300">Hvad er webhosting?</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          📖 Begynderguide — Opdateret marts 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Hvad er webhosting?<br />Den komplette guide for begyndere
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Har du nogensinde undret dig over, hvordan hjemmesider egentlig fungerer? Hvad sker der, når du skriver en adresse i
          din browser? Og hvad er det for noget "hosting", alle snakker om? Vi forklarer det hele i simpelt dansk — uden
          teknisk jargon.
        </p>
      </div>

      {/* TOC */}
      <div className="rounded-2xl border border-slate-700/60 p-5 mb-10" style={{ backgroundColor: '#1e293b' }}>
        <h2 className="text-lg font-bold text-white mb-3">📋 Indhold</h2>
        <ol className="space-y-2 text-sm text-slate-400">
          {[
            'Hvad er webhosting?',
            'Hvordan virker en hjemmeside?',
            'Typer af webhosting',
            'Hvad koster hosting i Danmark?',
            'Hvad skal du kigge efter?',
            'Gratis hosting vs betalt hosting',
            'Domæne vs hosting — hvad er forskellen?',
            'Affiliate-oplysning',
            'Konklusion',
          ].map((item, i) => (
            <li key={item} className="flex items-center gap-2 hover:text-indigo-400 transition-colors cursor-pointer">
              <span className="text-indigo-400 font-semibold">{i + 1}.</span> {item}
            </li>
          ))}
        </ol>
      </div>

      <section className="space-y-10 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">1. Hvad er webhosting?</h2>
          <p className="mb-4">
            Webhosting er en service, der giver dig serverplads til at gemme og vise din hjemmeside på internettet. Tænk på det
            som at leje et stykke jord, hvor du kan bygge dit hus. Huset er din hjemmeside — og grunden, du lejer, er serveren
            hos din hostingudbyder.
          </p>
          <p className="mb-4">
            En <strong className="text-white">server</strong> er en kraftig computer, der er tilsluttet internettet 24 timer i døgnet,
            365 dage om året. Alle filer, billeder og tekster på din hjemmeside gemmes på denne server. Når nogen besøger din
            hjemmeside, sender serveren disse filer til besøgendes browser — og det hele sker på brøkdele af sekunder.
          </p>
          <p>
            Uden hosting eksisterer din hjemmeside kun på din egen computer og er ikke tilgængelig for andre. Hosting er det
            der gør din hjemmeside synlig for hele verden.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">2. Hvordan virker en hjemmeside?</h2>
          <p className="mb-4">
            Lad os tage et simpelt eksempel. Du vil besøge <em className="text-slate-200">www.hostingtjek.dk</em>. Her er hvad der sker:
          </p>
          <div className="space-y-3">
            {[
              { step: '1', title: 'Du skriver adressen', desc: 'Du taster www.hostingtjek.dk i din browser og trykker enter.' },
              { step: '2', title: 'DNS-opslag', desc: 'Din browser spørger et DNS-system (som en telefonbog for internet) om at finde serverens IP-adresse for hostingtjek.dk.' },
              { step: '3', title: 'Forbindelsen oprettes', desc: 'Din browser opretter forbindelse til serveren hos hostingudbyderen, hvor hostingtjek.dk\'s filer er gemt.' },
              { step: '4', title: 'Serveren sender data', desc: 'Serveren sender HTML-, CSS- og JavaScript-filer til din browser.' },
              { step: '5', title: 'Hjemmesiden vises', desc: 'Din browser fortolker koden og viser dig hjemmesiden — alt dette sker typisk på under 1 sekund.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl border border-slate-700/60" style={{ backgroundColor: '#1e293b' }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: '#6366f1' }}>
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">3. Typer af webhosting</h2>
          <p className="mb-5">
            Der er flere typer hosting, og de passer til forskellige behov og budgetter. Her er de vigtigste:
          </p>
          <div className="space-y-4">
            {[
              {
                icon: Globe,
                type: 'Shared Hosting (Delt hosting)',
                price: 'Fra 19-39 kr/md',
                desc: 'Den mest populære og billigste type. Du deler serverressourcer med andre kunder. Perfekt til begyndere, blogs og mindre hjemmesider.',
                bestFor: 'Begyndere, blogs, SMV',
                link: null,
              },
              {
                icon: Server,
                type: 'VPS Hosting (Virtual Private Server)',
                price: 'Fra 35-100 kr/md',
                desc: 'Dedikerede ressourcer på en delt server. Bedre ydelse og kontrol end shared hosting. Kræver teknisk erfaring.',
                bestFor: 'Udviklere, e-handel, apps',
                link: '/vps-hosting',
              },
              {
                icon: Zap,
                type: 'Cloud Hosting',
                price: 'Fra 19-200 kr/md',
                desc: 'Skalerbar hosting fordelt over mange servere. Høj oppetid og automatisk skalering ved trafikspidser.',
                bestFor: 'Voksende sites, apps',
                link: '/cloud-hosting',
              },
              {
                icon: Shield,
                type: 'Managed WordPress Hosting',
                price: 'Fra 200-500 kr/md',
                desc: 'WordPress-optimeret hosting med fuld teknisk vedligeholdelse. Det dyreste, men nemmeste valg for WordPress-sites.',
                bestFor: 'Professionelle WordPress-sites',
                link: '/wordpress-hosting',
              },
            ].map((h) => (
              <div key={h.type} className="rounded-xl border border-slate-700/60 p-5" style={{ backgroundColor: '#1e293b' }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#312e81' }}>
                    <h.icon className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-bold text-white">{h.type}</h3>
                      <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-0.5 rounded">{h.price}</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{h.desc}</p>
                    <p className="text-xs text-indigo-300">Bedst til: {h.bestFor}</p>
                    {h.link && (
                      <Link href={h.link} className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors mt-1 inline-block">
                        Læs guide →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">4. Hvad koster hosting i Danmark?</h2>
          <p className="mb-4">
            Priserne på webhosting i Danmark varierer meget afhængigt af typen og udbyderen. Her er et realistisk overblik:
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-700/60" style={{ backgroundColor: '#1e293b' }}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700/60" style={{ backgroundColor: '#0f172a' }}>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Type</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Prisinterval</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-semibold">Eksempler</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Shared hosting', '19-79 kr/md', 'Hostinger, One.com, Surftown'],
                  ['VPS hosting', '35-200 kr/md', 'Hetzner, DigitalOcean'],
                  ['Cloud hosting', '19-500 kr/md', 'Hostinger Cloud, SiteGround'],
                  ['Managed WordPress', '200-1.000 kr/md', 'Kinsta, WP Engine'],
                ].map(([type, price, examples]) => (
                  <tr key={type} className="border-b border-slate-700/40">
                    <td className="px-4 py-3 font-semibold text-white">{type}</td>
                    <td className="px-4 py-3 text-slate-300">{price}</td>
                    <td className="px-4 py-3 text-slate-400">{examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">
            Husk: introduktionspriser er oftest lavere end fornyelsespriserne. Tjek altid fornyelsespris inden du tegner en
            langsigtet aftale. Se vores <Link href="/#sammenlign" className="text-indigo-400 hover:text-indigo-300 transition-colors">aktuelle prissammenligning</Link> for
            de nyeste tal.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">5. Hvad skal du kigge efter?</h2>
          <p className="mb-5">Her er de vigtigste faktorer at vurdere, når du vælger webhosting:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: '🔒 SSL-certifikat',
                desc: 'Gratis SSL er i dag standard og et absolut krav. SSL sikrer forbindelsen mellem din hjemmeside og besøgende (HTTPS), og Google straffer sites uden SSL i søgeresultaterne.',
              },
              {
                title: '⏱️ Oppetid (Uptime)',
                desc: 'Vælg en udbyder med minimum 99.9% oppetid-garanti. Det svarer til max ca. 8 timers nedetid om året. 99.99% er endnu bedre og tilbydes af premium-udbydere.',
              },
              {
                title: '💾 Lagerplads og trafik',
                desc: 'De fleste sites bruger under 5 GB. "Ubegrænset" trafik er standard på shared hosting, men der er altid rimelig-brugspolitikker i det fine print.',
              },
              {
                title: '🇩🇰 Support på dansk',
                desc: 'Dansk telefonsupport er guld værd, hvis du er begynder. Surftown og Simply.com tilbyder dansk support. Mange internationale udbydere har kun engelsk support.',
              },
              {
                title: '⚡ Hastighed',
                desc: 'Kig efter SSD-lagerplads (hurtigere end HDD), og gerne NVMe SSD. Google bruger sideindlæsningshastighed som ranking-faktor, så det har direkte SEO-betydning.',
              },
              {
                title: '💰 Pris og betingelser',
                desc: 'Sammenlign altid fornyelsespris, ikke kun introduktionspris. Kig på bindingsperiode, opsigelsesvilkår og pengene-tilbage-garanti.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-700/60 p-4" style={{ backgroundColor: '#1e293b' }}>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">6. Gratis hosting vs betalt hosting</h2>
          <p className="mb-4">
            Der findes gratis hosting-løsninger som WordPress.com (gratis plan) og InfinityFree. Men der er gode grunde til,
            at vi ikke anbefaler dem til seriøse projekter:
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-red-700/40 p-5 bg-red-950/20">
              <h4 className="font-bold text-red-400 mb-3">❌ Gratis hosting — ulemperne</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Reklamer på din side (over dem du ikke kontrollerer)</li>
                <li>• Begrænset lagerplads og trafik</li>
                <li>• Ingen egne domænenavne (du.wordpress.com)</li>
                <li>• Dårlig ydelse og oppetid</li>
                <li>• Ingen kundesupport</li>
                <li>• Data kan slettes uden varsel</li>
              </ul>
            </div>
            <div className="rounded-xl border border-green-700/40 p-5 bg-green-950/20">
              <h4 className="font-bold text-green-400 mb-3">✅ Betalt hosting — fordelene</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Eget domænenavn (ditsite.dk)</li>
                <li>• Ingen reklamer på din side</li>
                <li>• Professionel ydelse og oppetid</li>
                <li>• Kundesupport når du sidder fast</li>
                <li>• Fuld kontrol over dit indhold og data</li>
                <li>• Fra kun 19 kr/md — meget tilgængeligt</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            Til en seriøs blog, virksomhedssite eller webshop er betalt hosting altid den rigtige investering. 19-29 kr/md
            er prisen for en professionel online tilstedeværelse.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">7. Domæne vs hosting — hvad er forskellen?</h2>
          <p className="mb-4">
            Mange forveksler domænenavne og hosting — men det er to forskellige ting, der arbejder sammen:
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-slate-700/60 p-5" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-2">🌐 Domænenavn</h4>
              <p className="text-sm text-slate-400 mb-2">
                Dit domæne er din adresse på internettet — f.eks. <em className="text-slate-300">hostingtjek.dk</em>.
                Det er det, folk skriver i browseren for at finde din hjemmeside.
              </p>
              <p className="text-sm text-slate-400">Koster typisk 80-150 kr/år for et .dk-domæne.</p>
            </div>
            <div className="rounded-xl border border-slate-700/60 p-5" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-2">🖥️ Webhosting</h4>
              <p className="text-sm text-slate-400 mb-2">
                Hosting er serverpladsen, hvor din hjemmesides filer er gemt. Det er selve "grunden" eller "huset"
                bag dit domænenavn.
              </p>
              <p className="text-sm text-slate-400">Koster typisk 19-100 kr/md afhængigt af type og udbyder.</p>
            </div>
          </div>
          <p className="mt-4">
            Du har brug for begge dele for at have en hjemmeside. Mange udbydere som One.com sælger begge dele og tilbyder
            gratis domæne inkluderet i hostingpakken — en god deal for begyndere.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">8. Affiliate-oplysning</h2>
          <p className="mb-4">
            HostingTjek er finansieret via affiliate-samarbejder med de hostingudbydere vi anbefaler. Det betyder, at vi modtager
            en kommission, hvis du klikker på vores links og køber en hostingpakke. Dette påvirker <strong className="text-white">ikke</strong> vores
            anmeldelser eller anbefalinger.
          </p>
          <p>
            Vi tester og vurderer alle udbydere uafhængigt og anbefaler kun produkter, vi selv ville bruge. Vores mål er at
            give dig den mest ærlige og præcise information, så du kan træffe det bedste valg for din situation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">9. Konklusion — kom godt i gang med hosting</h2>
          <p className="mb-4">
            Nu ved du hvad webhosting er, hvordan det virker, og hvad du skal kigge efter. Det er faktisk ikke så kompliceret,
            når man forstår grundprincipperne.
          </p>
          <p className="mb-4">
            For de fleste begyndere anbefaler vi at starte med <strong className="text-white">shared hosting</strong> hos
            en pålidelig udbyder som <Link href="/one-com-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors">One.com</Link> (fra 29 kr/md med gratis domæne) eller
            <strong className="text-white"> Hostinger</strong> (fra 19 kr/md). Det er billigt, nemt og mere end nok til at
            komme i gang.
          </p>
          <p>
            Vil du have hjælp til at vælge, så prøv vores{' '}
            <Link href="/#quiz" className="text-indigo-400 hover:text-indigo-300 transition-colors">hosting-quiz</Link> eller
            sammenlign alle udbydere i vores{' '}
            <Link href="/#sammenlign" className="text-indigo-400 hover:text-indigo-300 transition-colors">sammenligningstabel</Link>.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <div className="mt-10 rounded-2xl border border-slate-700/60 p-6" style={{ backgroundColor: '#1e293b' }}>
        <h3 className="text-lg font-bold text-white mb-4">✅ Tjekliste: Hvad du bør sikre dig inden du vælger hosting</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Gratis SSL inkluderet (kræver HTTPS)',
            '99.9%+ oppetid-garanti',
            'Mindst 10 GB lagerplads (SSD)',
            '1-klik WordPress-installation',
            'Mulighed for at opsige eller opgradere nemt',
            'Support tilgængeligt (chat, telefon eller email)',
            'Pengene-tilbage-garanti (30 dage er standard)',
            'Gennemsigtig fornyelsespris uden skjulte gebyrer',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <h2 className="text-xl font-bold text-white mb-2">Klar til at vælge din første hosting?</h2>
        <p className="text-slate-300 mb-4">Brug vores quiz til at finde den perfekte hosting til netop dig.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/#quiz" className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}>
            Tag hosting-quizzen
          </Link>
          <Link href="/#sammenlign" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all">
            Sammenlign udbydere <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8 text-sm text-slate-400">
        <p className="mb-2 font-semibold text-slate-300">Næste skridt:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/shared-vs-vps" className="text-indigo-400 hover:text-indigo-300 transition-colors">Shared vs VPS guide →</Link>
          <Link href="/wordpress-hosting" className="text-indigo-400 hover:text-indigo-300 transition-colors">Bedste WordPress hosting →</Link>
          <Link href="/one-com-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors">One.com anmeldelse →</Link>
        </div>
      </div>
    </div>
  );
}
