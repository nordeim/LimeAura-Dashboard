// src/components/ui/Tag/Tag.tsx
import { cn } from '@/lib/utils';

interface TagProps {
  children: string;
  variant?: 'default' | 'accent';
  size?: 'sm' | 'md';
}

export function Tag({ children, variant = 'default', size = 'md' }: TagProps) {
  const baseClasses = cn(
    'inline-flex items-center rounded-[var(--radius-pill)] px-2.5 py-0.5 font-medium transition-colors',
    {
      'text-xs': size === 'sm',
      'text-sm': size === 'md'
    }
  );
  
  const variantClasses = {
    default: 'bg-[var(--surface-soft)] text-[var(--text-primary)]',
    accent: 'bg-[var(--accent-primary-soft)] text-[var(--accent-primary)]'
  };
  
  return (
    <span className={cn(baseClasses, variantClasses[variant])}>
      {children}
    </span>
  );
}
