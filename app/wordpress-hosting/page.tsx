import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Star, Zap, Shield, Globe } from 'lucide-react';
import { getProvidersByType } from '@/data/providers';
import ProviderCard from '@/components/ProviderCard';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Bedste WordPress Hosting i Danmark 2024 – Fra 19 kr/md',
  description:
    'Find den bedste WordPress hosting i Danmark. Vi har testet og sammenlignet de 5 bedste udbydere på ydelse, pris og support. Priser fra 19 kr/md.',
};

export default function WordPressHostingPage() {
  const wpProviders = getProvidersByType('wordpress');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-400 transition-colors">Forside</Link>
        <span>/</span>
        <span className="text-slate-300">WordPress Hosting</span>
      </nav>

      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30">
          📝 WordPress Hosting Guide 2024
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          Bedste WordPress Hosting i Danmark
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          WordPress driver over 40% af verdens hjemmesider — men ikke al hosting er skabt ens til WordPress.
          Vi har testet de bedste udbydere og fundet dem med den bedste kombination af hastighed, sikkerhed og pris.
          Alt fra 19 kr/md til managed premium-løsninger.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-green-400" /> Sidst opdateret: Marts 2024</span>
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-400" /> {wpProviders.length} udbydere testet</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-indigo-400" /> Upartisk vurdering</span>
        </div>
      </div>

      {/* Top picks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Top WordPress hosting udbydere</h2>
        <div className="space-y-4">
          {wpProviders.map((p, i) => (
            <ProviderCard key={p.id} provider={p} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">Sammenligning af WordPress hosting</h2>
        <p className="text-slate-400 mb-5">Sorter efter pris, lagerplads eller rating ved at klikke på kolonneoverskrifterne.</p>
        <ComparisonTable providers={wpProviders} />
      </section>

      {/* Guide content */}
      <section className="space-y-8 text-slate-300 leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hvad er WordPress hosting?</h2>
          <p className="mb-4">
            WordPress hosting er webhosting, der er optimeret til at køre WordPress-hjemmesider. Selvom WordPress teknisk set kan
            køre på næsten enhver hosting, giver optimerede WordPress-løsninger betydelige fordele: hurtigere sideindlæsning,
            automatiske opdateringer, specialiseret support og bedre sikkerhed mod WordPress-specifikke angreb.
          </p>
          <p className="mb-4">
            Der er overordnet to typer WordPress hosting: <strong className="text-white">delt WordPress hosting</strong> og
            <strong className="text-white"> managed WordPress hosting</strong>. Delt hosting er billigst og passer fint til de
            fleste begyndere og mindre sites. Managed hosting koster mere, men her sørger udbyderen for alt det tekniske — opdateringer,
            backups, sikkerhed og performance-optimering.
          </p>
          <p>
            Udbydere som Hostinger og One.com tilbyder WordPress-optimeret delt hosting fra under 30 kr/md, mens premium-løsninger
            som Kinsta og WP Engine tilbyder fuldt managed WordPress fra 200-300 kr/md med enestående ydelse og support.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700/60 p-6" style={{ backgroundColor: '#1e293b' }}>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-400" />
            Hvad gør en god WordPress hosting?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'LiteSpeed eller Nginx server', desc: 'Hurtigere end Apache til WordPress-sider med mange simultane besøgende' },
              { title: 'PHP 8.x support', desc: 'Nyeste PHP giver op til 3x bedre ydelse end ældre versioner' },
              { title: 'Automatiske backups', desc: 'Daglige backups med nem gendannelse beskytter mod datatab' },
              { title: 'WordPress auto-opdateringer', desc: 'Automatisk opdatering af WordPress core og plugins holder sitet sikkert' },
              { title: 'Gratis SSL', desc: 'Let\'s Encrypt SSL-certifikat inkluderet er i dag standard og et krav' },
              { title: 'Staging-miljø', desc: 'Test opdateringer på et kopi af dit site inden du offentliggør dem' },
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
          <h2 className="text-2xl font-bold text-white mb-4">Delt WordPress hosting vs Managed WordPress</h2>
          <p className="mb-4">
            Valget mellem delt og managed WordPress hosting afhænger primært af dit budget, dine tekniske færdigheder og dit sites størrelse.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700/60 p-5" style={{ backgroundColor: '#1e293b' }}>
              <h4 className="font-bold text-white mb-3">🏷️ Delt WordPress hosting</h4>
              <p className="text-sm text-slate-400 mb-3">Passer til: Begyndere, blogs, små virksomheder</p>
              <ul className="space-y-2 text-sm">
                {[
                  '✅ Billigst — fra 19-39 kr/md',
                  '✅ Nem at sætte op med 1-klik WordPress',
                  '✅ Passer til de fleste almindelige sites',
                  '⚠️ Deles med andre kunder på serveren',
                  '⚠️ Ydelse kan variere i spidsbelastning',
                ].map((item) => (
                  <li key={item} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-indigo-500/30 p-5 bg-indigo-950/20">
              <h4 className="font-bold text-white mb-3">⚡ Managed WordPress hosting</h4>
              <p className="text-sm text-slate-400 mb-3">Passer til: Professionelle, e-handel, travle sites</p>
              <ul className="space-y-2 text-sm">
                {[
                  '✅ Maksimal hastighed og ydelse',
                  '✅ Automatisk vedligeholdelse af alt',
                  '✅ WordPress-eksperter i support',
                  '✅ Avanceret sikkerhed og backups',
                  '⚠️ Dyrere — fra 200+ kr/md',
                ].map((item) => (
                  <li key={item} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Vores anbefalinger baseret på din situation</h2>
          <div className="space-y-4">
            {[
              {
                situation: 'Ny blogger eller hobbysite',
                rec: 'Hostinger eller One.com',
                reason: 'Billigst muligt med WordPress-support og nem opsætning. Hostinger fra 19 kr/md, One.com fra 29 kr/md med gratis domæne.',
              },
              {
                situation: 'Lille til mellemstor virksomhed',
                rec: 'Simply.com eller SiteGround',
                reason: 'God balance mellem pris og ydelse, med dansk/engelsk support og stabile servere der håndterer normal trafik.',
              },
              {
                situation: 'Professionelt WordPress-site med høj trafik',
                rec: 'Kinsta eller SiteGround',
                reason: 'Premium managed WordPress med topydelse, CDN, automatiske backups og support fra WordPress-eksperter.',
              },
              {
                situation: 'WooCommerce webshop',
                rec: 'SiteGround eller Kinsta',
                reason: 'Webshops kræver hurtig og stabil hosting. Begge udbydere tilbyder specifikt WooCommerce-optimerede løsninger.',
              },
            ].map((item) => (
              <div key={item.situation} className="rounded-xl border border-slate-700/60 p-4 flex gap-4" style={{ backgroundColor: '#1e293b' }}>
                <div className="w-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#6366f1' }} />
                <div>
                  <p className="text-sm font-semibold text-slate-400 mb-1">{item.situation}</p>
                  <p className="font-bold text-white">{item.rec}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Konklusion: Hvad er den bedste WordPress hosting?</h2>
          <p className="mb-4">
            Til de fleste brugere er <strong className="text-white">Hostinger</strong> eller <strong className="text-white">One.com</strong> det
            bedste valg til budget WordPress hosting. De tilbyder nem opsætning, gratis SSL og god ydelse til en meget attraktiv pris.
          </p>
          <p className="mb-4">
            Har du et professionelt site eller en webshop med mange besøgende, er <strong className="text-white">SiteGround</strong> eller
            <strong className="text-white"> Kinsta</strong> de bedste valg. SiteGround giver fremragende ydelse til en rimelig pris, mens Kinsta
            er det absolut bedste managed WordPress på markedet — til en premium-pris.
          </p>
          <p>
            Vil du læse mere, kan du se vores individuelle anmeldelser af <Link href="/one-com-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors">One.com</Link> og
            <Link href="/surftown-anmeldelse" className="text-indigo-400 hover:text-indigo-300 transition-colors"> Surftown</Link>,
            eller lære mere om <Link href="/guide/shared-vs-vps" className="text-indigo-400 hover:text-indigo-300 transition-colors">forskellen på shared og VPS hosting</Link>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 rounded-2xl p-8 text-center border border-indigo-500/30"
        style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)' }}>
        <Globe className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Usikker på hvad du har brug for?</h2>
        <p className="text-slate-300 mb-4">Tag vores gratis hosting-quiz og få en personlig anbefaling på 30 sekunder.</p>
        <Link href="/#quiz" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: '#6366f1' }}>
          Tag quizzen <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
