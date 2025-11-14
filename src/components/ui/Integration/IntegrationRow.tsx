// src/components/ui/Integration/IntegrationRow.tsx
import { Toggle } from '../Toggle/Toggle';
import type { LucideIcon } from 'lucide-react';

interface IntegrationRowProps {
  icon: LucideIcon;
  name: string;
  description: string;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
}

export function IntegrationRow({ 
  icon: Icon, 
  name, 
  description, 
  enabled = false, 
  onToggle 
}: IntegrationRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-b-0 border-[var(--border-subtle)]">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--surface-soft)] flex items-center justify-center">
          <Icon className="text-[var(--text-primary)]" size={20} aria-hidden="true" />
        </div>
        <div>
          <h4 className="font-medium text-[var(--text-primary)]">{name}</h4>
          <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        </div>
      </div>
      <Toggle 
        defaultChecked={enabled} 
        onCheckedChange={onToggle} 
      />
    </div>
  );
}
