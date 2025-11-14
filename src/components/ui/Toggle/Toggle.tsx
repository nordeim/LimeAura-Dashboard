// src/components/ui/Toggle/Toggle.tsx
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ToggleProps {
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md';
}

export function Toggle({ 
  defaultChecked = false, 
  onCheckedChange, 
  disabled = false,
  size = 'md'
}: ToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);
  
  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);
  
  const sizeClasses = {
    sm: {
      container: 'w-9 h-5',
      handle: 'w-4 h-4'
    },
    md: {
      container: 'w-11 h-6',
      handle: 'w-5 h-5'
    }
  };
  
  const handleToggle = () => {
    if (disabled) return;
    
    const newChecked = !checked;
    setChecked(newChecked);
    onCheckedChange?.(newChecked);
  };
  
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      onClick={handleToggle}
      disabled={disabled}
      className={cn(
        'relative inline-flex items-center rounded-[var(--radius-pill)] transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-primary-soft)]',
        sizeClasses[size].container,
        checked 
          ? 'bg-[var(--accent-primary)]' 
          : 'bg-[#E5E7EB]',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <span
        className={cn(
          'inline-block rounded-full bg-white shadow-sm transition-transform duration-200 ease-out',
          sizeClasses[size].handle,
          checked ? 'translate-x-full' : 'translate-x-0'
        )}
      />
    </button>
  );
}
