import Link from 'next/link';
import { ExternalLink, Check, HardDrive, Wifi, Headphones } from 'lucide-react';
import type { Provider } from '@/data/providers';
import UptimeBadge from './UptimeBadge';
import StarRating from './StarRating';

interface ProviderCardProps {
  provider: Provider;
  rank?: number;
}

const reviewLinks: Record<string, string> = {
  'one-com': '/one-com-anmeldelse',
  surftown: '/surftown-anmeldelse',
};

export default function ProviderCard({ provider, rank }: ProviderCardProps) {
  return (
    <div className="rounded-2xl border border-slate-700/60 p-6 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-900/20 relative"
      style={{ backgroundColor: '#1e293b' }}>
      {rank && rank <= 3 && (
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: rank === 1 ? '#6366f1' : rank === 2 ? '#475569' : '#92400e' }}>
            #{rank} Bedste valg
          </span>
        </div>
      )}

      {provider.badge && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 rounded-lg text-xs font-bold bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
            {provider.badge}
          </span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mt-2">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{provider.name}</h3>
          {provider.highlight && (
            <p className="text-indigo-400 text-sm mb-3">{provider.highlight}</p>
          )}
          <StarRating rating={provider.rating} />

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <HardDrive className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>{provider.storage}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Wifi className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>{provider.traffic}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Headphones className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <span>{provider.support}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <UptimeBadge uptime={provider.uptime} />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {provider.ssl && (
              <span className="inline-flex items-center gap-1 text-xs text-green-400">
                <Check className="w-3 h-3" /> Gratis SSL
              </span>
            )}
            {provider.freeDomain && (
              <span className="inline-flex items-center gap-1 text-xs text-green-400">
                <Check className="w-3 h-3" /> Gratis domæne
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3 sm:min-w-[140px]">
          <div className="text-right">
            <span className="text-2xl font-bold text-white">Fra {provider.priceFrom} kr</span>
            <p className="text-slate-400 text-xs">pr. måned</p>
          </div>
          <a
            href={provider.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 w-full sm:w-auto justify-center"
            style={{ backgroundColor: '#6366f1' }}
          >
            Besøg {provider.name}
            <ExternalLink className="w-4 h-4" />
          </a>
          {reviewLinks[provider.id] && (
            <Link
              href={reviewLinks[provider.id]}
              className="text-xs text-slate-400 hover:text-indigo-400 transition-colors text-center w-full"
            >
              Læs anmeldelse →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
