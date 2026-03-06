import { Shield } from 'lucide-react';
import clsx from 'clsx';

interface UptimeBadgeProps {
  uptime: string;
  className?: string;
}

export default function UptimeBadge({ uptime, className }: UptimeBadgeProps) {
  const isPremium = uptime === '99.99%';
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold',
        isPremium
          ? 'bg-green-900/40 text-green-400 border border-green-700/50'
          : 'bg-blue-900/40 text-blue-400 border border-blue-700/50',
        className
      )}
    >
      <Shield className="w-3 h-3" />
      {uptime} uptime
    </span>
  );
}
