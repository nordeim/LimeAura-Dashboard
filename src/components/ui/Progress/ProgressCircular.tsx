// src/components/ui/Progress/ProgressCircular.tsx
import { cn } from '@/lib/utils';

interface ProgressCircularProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  className?: string;
}

export function ProgressCircular({ 
  value, 
  size = 40, 
  strokeWidth = 6, 
  showLabel = true,
  className 
}: ProgressCircularProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  
  return (
    <div className={cn('relative', className)}>
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="var(--accent-primary-soft)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="var(--accent-primary)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>
      
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-[var(--accent-primary)]">
            {Math.round(value)}%
          </span>
        </div>
      )}
    </div>
  );
}
