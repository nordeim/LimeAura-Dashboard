// src/components/layout/SectionHeader.tsx
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  badgeCount?: number;
}

export function SectionHeader({ title, subtitle, action, badgeCount }: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            {title}
          </h2>
          {badgeCount && badgeCount > 0 && (
            <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[var(--accent-primary)] rounded-full">
              {badgeCount}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-[var(--text-secondary)] mt-1">{subtitle}</p>
        )}
      </div>
      {action && (
        <div>{action}</div>
      )}
    </div>
  );
}
