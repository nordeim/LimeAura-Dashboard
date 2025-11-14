// src/components/ui/Badge/Badge.tsx
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'numeric' | 'status';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'numeric', children, className }: BadgeProps) {
  if (variant === 'numeric') {
    return (
      <span className={cn(
        'inline-flex items-center justify-center min-w-[18px] h-4.5 rounded-full bg-[var(--accent-primary)] text-white text-[10px] font-bold',
        className
      )}>
        {children}
      </span>
    );
  }
  
  return (
    <span className={cn(
      'inline-flex items-center rounded-[var(--radius-pill)] px-2 py-0.5 text-xs font-medium bg-[var(--accent-primary-soft)] text-[var(--accent-primary)]',
      className
    )}>
      {children}
    </span>
  );
}
