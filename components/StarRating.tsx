import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  max?: number;
}

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            className={`w-4 h-4 ${filled || half ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
          />
        );
      })}
      <span className="ml-1 text-sm text-slate-300 font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
}
