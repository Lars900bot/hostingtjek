'use client';

import { useState } from 'react';
import { ExternalLink, ArrowUpDown, Check, X } from 'lucide-react';
import type { Provider } from '@/data/providers';
import StarRating from './StarRating';
import clsx from 'clsx';

type SortKey = 'priceFrom' | 'storage' | 'rating';

interface ComparisonTableProps {
  providers: Provider[];
}

function storageToNumber(s: string): number {
  if (s.toLowerCase().includes('ubegrænset')) return 9999;
  const match = s.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

export default function ComparisonTable({ providers }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir(key === 'priceFrom' ? 'asc' : 'desc');
    }
  };

  const sorted = [...providers].sort((a, b) => {
    let aVal: number, bVal: number;
    if (sortKey === 'storage') {
      aVal = storageToNumber(a.storage);
      bVal = storageToNumber(b.storage);
    } else {
      aVal = a[sortKey] as number;
      bVal = b[sortKey] as number;
    }
    return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
  });

  const SortBtn = ({ col }: { col: SortKey }) => (
    <button
      onClick={() => handleSort(col)}
      className={clsx(
        'inline-flex items-center gap-1 hover:text-indigo-400 transition-colors',
        sortKey === col ? 'text-indigo-400' : 'text-slate-400'
      )}
    >
      <ArrowUpDown className="w-3 h-3" />
    </button>
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700/60" style={{ backgroundColor: '#1e293b' }}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-slate-700/60" style={{ backgroundColor: '#0f172a' }}>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">Udbyder</th>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">
              <span className="flex items-center gap-1">Pris <SortBtn col="priceFrom" /></span>
            </th>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">
              <span className="flex items-center gap-1">Lagerplads <SortBtn col="storage" /></span>
            </th>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">Trafik</th>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">SSL</th>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">Domæne</th>
            <th className="text-left px-4 py-3 text-slate-400 font-semibold">
              <span className="flex items-center gap-1">Rating <SortBtn col="rating" /></span>
            </th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p, i) => (
            <tr
              key={p.id}
              className={clsx(
                'border-b border-slate-700/40 hover:bg-slate-700/20 transition-colors',
                i === 0 && 'bg-indigo-950/20'
              )}
            >
              <td className="px-4 py-3">
                <div>
                  <span className="font-semibold text-white">{p.name}</span>
                  {p.badge && (
                    <span className="ml-2 px-1.5 py-0.5 rounded text-xs bg-indigo-600/30 text-indigo-300 border border-indigo-500/30">
                      {p.badge}
                    </span>
                  )}
                  <p className="text-xs text-slate-400">{p.bestFor}</p>
                </div>
              </td>
              <td className="px-4 py-3 font-semibold text-white">
                Fra {p.priceFrom} kr/md
              </td>
              <td className="px-4 py-3 text-slate-300">{p.storage}</td>
              <td className="px-4 py-3 text-slate-300">{p.traffic}</td>
              <td className="px-4 py-3">
                {p.ssl ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <X className="w-4 h-4 text-red-400" />
                )}
              </td>
              <td className="px-4 py-3">
                {p.freeDomain ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <X className="w-4 h-4 text-red-400" />
                )}
              </td>
              <td className="px-4 py-3">
                <StarRating rating={p.rating} />
              </td>
              <td className="px-4 py-3">
                <a
                  href={p.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: '#6366f1' }}
                >
                  Besøg <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
