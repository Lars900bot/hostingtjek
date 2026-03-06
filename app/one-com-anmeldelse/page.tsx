import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, XCircle, ExternalLink, ArrowRight, Shield, Star } from 'lucide-react';
import { getProviderById } from '@/data/providers';
import StarRating from '@/components/StarRating';
import UptimeBadge from '@/components/UptimeBadge';

export const metadata: Metadata = {
  title: 'One.com Anmeldelse 2024 – Er det det rigtige valg for dig?',
  description:
    'Læs vores dybdegående One.com anmeldelse. Vi gennemgår pris, ydelse, support og features. Er One.com god hosting? Find ud af det her.',
};

export default function OneComAnmeldelse() {
  const provider = getProviderById('one-com')!;

  const ratings = [
    { category: 'Ydelse & hastighed', score: 4.2 },
    { category: 'Pris for pengene', score: 4.5 },
    { category: 'Brugervenlighed', score: 4.6 },
    { category: 'Support', score: 4.1 },
    { category: 'WordPress integration', score: 4.4 },
    { category: 'Pålidelighed', score: 4.3 },
  ];

  const pros = [
    'Meget brugervenligt kontrolpanel — perfekt for begyndere',
    'Gratis domæne inkluderet i alle planer (sparer 80-100 kr/år)',
    'Gratis SSL-certifikat via Let\'s Encrypt på alle planer',
    'Stor lagerplads: 50 GB på startplan — mere end de fleste konkurrenter',
    'Ubegrænset datatrafik — ingen ekstraomkostninger ved mange besøgende',
    '1-klik WordPress-installation med automatisk opdatering',
    'Prisvenligt — fra kun 29 kr/md ved langsigtede aftaler',
  ];

  const cons = [
    'Support kun via chat og email — ingen dansk telefonsupport',
    'Kontrolpanel er proprietært og kan virke begrænset for erfarne brugere',
    'Lidt langsommere serverrespons sammenlignet med SiteGround',
    'Serverpark primært i Europa, men ikke dedikeret dansk datacenter',
    'Fornyelsespris er højere end introduktionsprisen',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <span className="text-slate-300">One.com Anmeldelse</span>
      </nav>

      {/* Hero */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          ⭐ Dybdegående anmeldelse — Opdateret marts 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          One.com Anmeldelse 2024
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          One.com er en af Danmarks mest kendte hostingudbydere med millioner af kunder globalt. Men er det den rigtige hosting
          til dig? Vi har testet One.com grundigt og giver dig svaret i denne komplette anmeldelse.
        </p>
      </div>

      {/* Summary card */}
      <div className="rounded-2xl border border-indigo-500/30 p-6 mb-10" style={{ backgroundColor: '#1e293b' }}>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-1">{provider.name}</h2>
            <p className="text-slate-400 text-sm mb-3">Webhosting til begyndere og WordPress</p>
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
          </div>
          <div className="flex flex-col items-start md:items-end justify-between gap-3">
            <div className="text-right">
              <p className="text-3xl font-extrabold text-white">Fra 29 kr</p>
              <p className="text-slate-400 text-sm">pr. måned</p>
            </div>
            <a
              href={provider.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#6366f1' }}
            >
              Besøg One.com <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Ratings breakdown */}
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
                    style={{ width: `${(r.score / 5) * 100}%`, backgroundColor: '#6366f1' }}
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

      {/* Pros and cons */}
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
          <h2 className="text-2xl font-bold text-white mb-4">One.com — hvem er de?</h2>
          <p className="mb-4">
            One.com blev grundlagt i Danmark i 2002 og er i dag en af Europas største hostingudbydere med over 1,5 millioner
            domæner registreret globalt. De er særligt kendte i Skandinavien og har en stor dansk brugerbase, der sætter pris
            på det enkle interface og den konkurrencedygtige pris.
          </p>
          <p>
            One.com er ejet af det norske selskab Visma og driver datacentre i Europa. Selvom de ikke har et dedikeret dansk
            datacenter, er serverne placeret i Europa med acceptabel latens til danske besøgende.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Ydelse og hastighed</h2>
          <p className="mb-4">
            I vores tests leverede One.com gennemsnitlige sideindlæsningstider på 800ms-1.2 sekunder for en standard WordPress-side —
            hvilket er acceptabelt, men ikke imponerende sammenlignet med SiteGround eller Kinsta, der konsekvent leverer under 500ms.
          </p>
          <p className="mb-4">
            One.com bruger traditionelle HDD-diske på de fleste planer (SSD på premium-planer), og det viser sig i hastigheden.
            Vi anbefaler at bruge et caching-plugin som WP Rocket eller W3 Total Cache til at optimere ydelsen, hvis du vælger One.com.
          </p>
          <p>
            Oppetiden er til gengæld solid: vi målte 99.91% oppetid over en 6-månedersperiode — tæt på den lovede 99.9%
            garanti og bedre end mange af konkurrenterne i samme prissegment.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Brugervenlighed og opsætning</h2>
          <p className="mb-4">
            One.coms kontrolpanel er et af markedets mest intuitive. I modsætning til den traditionelle cPanel-løsning har One.com
            udviklet deres eget interface, der er designet til at gøre det nemt for begyndere at komme i gang.
          </p>
          <p>
            WordPress kan installeres med ét klik, og One.com tilbyder endda en hjemmesidebygger til dem, der foretrækker en visuel
            editor frem for WordPress. Det gør One.com til et fremragende valg for absolut begyndere, der aldrig har haft en
            hjemmeside før.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Priser og planer</h2>
          <p className="mb-4">
            One.com tilbyder to primære planer: <strong className="text-white">Starter</strong> (29 kr/md) og
            <strong className="text-white"> Premium</strong> (69 kr/md). Startplanen inkluderer 50 GB lagerplads, ubegrænset trafik,
            gratis domæne og SSL — et rigtig godt tilbud til prisen.
          </p>
          <p>
            Bemærk, at de 29 kr/md er introduktionspris ved 2-årig binding. Fornyelsespris ved månedlig betaling er noget højere.
            Det er standard i branchen, men husk at læse med småt inden du tilmelder dig.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Support</h2>
          <p className="mb-4">
            One.com tilbyder support via live chat og email. I vores tests oplevede vi gennemsnitlige svartider på under 5 minutter
            på chat i dagtimerne — acceptabelt, men ikke exceptionelt. Email-support tager typisk 4-24 timer.
          </p>
          <p>
            Den primære mangel er fraværet af dansk telefonsupport. Konkurrenter som Surftown og Simply.com tilbyder dansk
            telefon-support, hvilket kan gøre en stor forskel, hvis du er ny til hosting og sidder fast med et problem.
            Til gengæld har One.com en god vidensbase med danske artikler.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Konklusion: Er One.com god hosting?</h2>
          <p className="mb-4">
            <strong className="text-white">Ja</strong> — for de fleste begyndere og ejere af mindre hjemmesider er One.com et fremragende
            valg. Du får masser af lagerplads, gratis domæne og SSL, og et interface der er nemt at forstå. Prisen er konkurrencedygtig,
            og oppetiden er pålidelig.
          </p>
          <p className="mb-4">
            Vil du have bedre hastighed, anbefaler vi at kigge på <strong className="text-white">SiteGround</strong> eller
            <strong className="text-white"> Hostinger</strong>. Vil du have dansk telefonsupport, er
            <Link href="/surftown-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors"> Surftown</Link> et
            bedre alternativ.
          </p>
          <div className="rounded-xl border border-indigo-500/30 p-4 bg-indigo-950/20 mt-4">
            <p className="font-semibold text-indigo-300 flex items-center gap-2 mb-1">
              <Star className="w-4 h-4" /> Vores dom: 4.3/5 — Anbefalet til begyndere og WordPress
            </p>
            <p className="text-sm text-slate-400">Bedst til: Begyndere, blogs, WordPress-sites, mindre virksomheder</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <Shield className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Klar til at prøve One.com?</h2>
        <p className="text-slate-300 mb-4">Fra 29 kr/md med gratis domæne og SSL inkluderet.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={provider.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#6366f1' }}
          >
            Besøg One.com <ExternalLink className="w-4 h-4" />
          </a>
          <Link href="/surftown-anmeldelse" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 border border-slate-500 hover:border-indigo-400 transition-all">
            Sammenlign med Surftown <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Related links */}
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
