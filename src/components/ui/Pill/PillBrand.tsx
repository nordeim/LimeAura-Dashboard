// src/components/ui/Pill/PillBrand.tsx
import { cn } from '@/lib/utils';

interface PillBrandProps {
  logo: React.ReactNode;
  name: string;
  className?: string;
}

export function PillBrand({ logo, name, className }: PillBrandProps) {
  return (
    <div 
      className={cn(
        'inline-flex items-center justify-center bg-[var(--surface-primary)] rounded-[var(--radius-pill)] py-2 px-4 shadow-[var(--shadow-card)] transition-all duration-200 ease-out hover:shadow-[var(--shadow-hover)]',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <div className="w-5 h-5">{logo}</div>
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
      </div>
    </div>
  );
}
