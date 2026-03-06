'use client';

import { useState } from 'react';
import { ChevronRight, RefreshCw, Zap } from 'lucide-react';
import Link from 'next/link';

type Answer = string | null;

interface Question {
  id: number;
  question: string;
  options: { value: string; label: string; emoji: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Hvad skal du hoste?',
    options: [
      { value: 'blog', label: 'Blog / WordPress', emoji: '📝' },
      { value: 'webshop', label: 'Webshop', emoji: '🛒' },
      { value: 'business', label: 'Virksomhedssite', emoji: '🏢' },
      { value: 'app', label: 'App / Developer', emoji: '⚡' },
    ],
  },
  {
    id: 2,
    question: 'Forventede månedlige besøgende?',
    options: [
      { value: 'low', label: 'Under 1.000', emoji: '🌱' },
      { value: 'medium', label: '1.000–10.000', emoji: '📈' },
      { value: 'high', label: '10.000+', emoji: '🚀' },
      { value: 'unsure', label: 'Usikker', emoji: '🤔' },
    ],
  },
  {
    id: 3,
    question: 'Hvad er dit tekniske niveau?',
    options: [
      { value: 'beginner', label: 'Begynder', emoji: '🎓' },
      { value: 'intermediate', label: 'Mellemniveau', emoji: '💻' },
      { value: 'expert', label: 'Ekspert', emoji: '🔧' },
    ],
  },
];

interface Recommendation {
  type: string;
  title: string;
  description: string;
  providers: Array<{
    name: string;
    price: string;
    href: string;
    url: string;
    highlight: string;
  }>;
  guideLink?: { href: string; label: string };
}

function getRecommendation(answers: Answer[]): Recommendation {
  const [useCase, traffic, level] = answers;

  // Developer / high traffic → VPS
  if (useCase === 'app' || (traffic === 'high' && level === 'expert')) {
    return {
      type: 'VPS Hosting',
      title: '🔧 VPS Hosting anbefales',
      description:
        'Med dit tekniske niveau og krav til kontrol er en VPS den rigtige løsning. Du får dedikerede ressourcer og fuld fleksibilitet.',
      providers: [
        { name: 'Hetzner', price: 'Fra 35 kr/md', href: 'https://www.hetzner.com', url: '/vps-hosting', highlight: 'Bedste pris/ydelse' },
        { name: 'DigitalOcean', price: 'Fra 45 kr/md', href: 'https://www.digitalocean.com', url: '/vps-hosting', highlight: 'Developer-favorit' },
        { name: 'SiteGround', price: 'Fra 29 kr/md', href: 'https://www.siteground.com', url: '/vps-hosting', highlight: 'Premium support' },
      ],
      guideLink: { href: '/vps-hosting', label: 'Læs vores VPS guide' },
    };
  }

  // WordPress blog / webshop beginner
  if (useCase === 'blog' && level === 'beginner') {
    return {
      type: 'WordPress Hosting',
      title: '📝 WordPress Hosting anbefales',
      description:
        'Som begynder med en WordPress blog er managed WordPress hosting det nemmeste valg. Du behøver ikke tænke på teknik — det klarer udbyderen.',
      providers: [
        { name: 'One.com', price: 'Fra 29 kr/md', href: 'https://www.one.com', url: '/wordpress-hosting', highlight: 'Gratis domæne + nem opsætning' },
        { name: 'Hostinger', price: 'Fra 19 kr/md', href: 'https://www.hostinger.com', url: '/wordpress-hosting', highlight: 'Billigst med WordPress' },
        { name: 'SiteGround', price: 'Fra 29 kr/md', href: 'https://www.siteground.com', url: '/wordpress-hosting', highlight: 'Bedste WordPress performance' },
      ],
      guideLink: { href: '/wordpress-hosting', label: 'Læs vores WordPress hosting guide' },
    };
  }

  // High traffic → Cloud
  if (traffic === 'high') {
    return {
      type: 'Cloud Hosting',
      title: '☁️ Cloud Hosting anbefales',
      description:
        'Med 10.000+ månedlige besøgende har du brug for skalerbar cloud hosting, der kan håndtere trafikspidser uden nedbrud.',
      providers: [
        { name: 'SiteGround', price: 'Fra 29 kr/md', href: 'https://www.siteground.com', url: '/cloud-hosting', highlight: '99.99% uptime garanti' },
        { name: 'Hostinger', price: 'Fra 19 kr/md', href: 'https://www.hostinger.com', url: '/cloud-hosting', highlight: 'Skalerbar cloud' },
        { name: 'DigitalOcean', price: 'Fra 45 kr/md', href: 'https://www.digitalocean.com', url: '/cloud-hosting', highlight: 'Fuld kontrol' },
      ],
      guideLink: { href: '/cloud-hosting', label: 'Læs vores Cloud hosting guide' },
    };
  }

  // Business site
  if (useCase === 'business') {
    return {
      type: 'Webhosting',
      title: '🏢 Professionel Webhosting anbefales',
      description:
        'Til en virksomhedshjemmeside anbefaler vi en stabil delt hosting med god dansk support og professionelle features.',
      providers: [
        { name: 'Simply.com', price: 'Fra 35 kr/md', href: 'https://www.simply.com', url: '/#sammenlign', highlight: '24/7 dansk support' },
        { name: 'Surftown', price: 'Fra 39 kr/md', href: 'https://www.surftown.dk', url: '/#sammenlign', highlight: 'Dansk telefon-support' },
        { name: 'One.com', price: 'Fra 29 kr/md', href: 'https://www.one.com', url: '/#sammenlign', highlight: 'Prisvenlig og pålidelig' },
      ],
    };
  }

  // Default: shared hosting
  return {
    type: 'Delt Webhosting',
    title: '🌐 Delt Webhosting anbefales',
    description:
      'For de fleste hjemmesider er delt webhosting den perfekte kombination af pris og ydelse. Du deler serverressourcer med andre, men til en lav månedlig pris.',
    providers: [
      { name: 'Hostinger', price: 'Fra 19 kr/md', href: 'https://www.hostinger.com', url: '/#sammenlign', highlight: 'Billigst på markedet' },
      { name: 'One.com', price: 'Fra 29 kr/md', href: 'https://www.one.com', url: '/#sammenlign', highlight: 'Populær i Danmark' },
      { name: 'Simply.com', price: 'Fra 35 kr/md', href: 'https://www.simply.com', url: '/#sammenlign', highlight: '24/7 support' },
    ],
    guideLink: { href: '/guide/hvad-er-hosting', label: 'Lær mere om webhosting' },
  };
}

export default function HostingQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([null, null, null]);
  const [done, setDone] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers([null, null, null]);
    setDone(false);
  };

  const recommendation = done ? getRecommendation(answers) : null;
  const progress = ((currentQ + (done ? 1 : 0)) / questions.length) * 100;

  return (
    <div className="rounded-2xl border border-indigo-500/30 p-6 md:p-8" style={{ backgroundColor: '#1e293b' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#6366f1' }}>
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Find din hosting på 30 sekunder</h2>
          <p className="text-slate-400 text-sm">Besvar 3 spørgsmål — få en personlig anbefaling</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6 h-2 rounded-full bg-slate-700">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: '#6366f1' }}
        />
      </div>

      {!done ? (
        <div>
          <p className="text-sm text-slate-400 mb-2">
            Spørgsmål {currentQ + 1} af {questions.length}
          </p>
          <h3 className="text-lg font-semibold text-white mb-4">{questions[currentQ].question}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questions[currentQ].options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-600 hover:border-indigo-500 hover:bg-indigo-950/30 text-left transition-all group"
              >
                <span className="text-2xl">{opt.emoji}</span>
                <span className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                  {opt.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 ml-auto transition-colors" />
              </button>
            ))}
          </div>
        </div>
      ) : recommendation ? (
        <div>
          <div className="rounded-xl p-5 mb-5 border border-indigo-500/30 bg-indigo-950/30">
            <h3 className="text-xl font-bold text-white mb-2">{recommendation.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{recommendation.description}</p>
          </div>

          <h4 className="text-white font-semibold mb-3">Top 3 anbefalede udbydere:</h4>
          <div className="space-y-3 mb-5">
            {recommendation.providers.map((p, i) => (
              <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl border border-slate-700/60 bg-slate-800/50">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: i === 0 ? '#6366f1' : '#334155' }}>
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white">{p.name}</p>
                  <p className="text-xs text-slate-400">{p.highlight}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-sm font-semibold text-white">{p.price}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Besøg →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {recommendation.guideLink && (
              <Link
                href={recommendation.guideLink.href}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#6366f1' }}
              >
                {recommendation.guideLink.label}
              </Link>
            )}
            <button
              onClick={reset}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              Tag quizzen igen
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
