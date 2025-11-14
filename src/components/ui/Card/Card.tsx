// src/components/ui/Card/Card.tsx
'use client';

import { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  variant?: 'standard' | 'hero' | 'compact';
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ variant = 'standard', children, className, interactive = false }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseClasses = cn(
    'bg-[var(--surface-primary)] rounded-[var(--radius-card-large)] shadow-[var(--shadow-card)] transition-all duration-300 ease-out',
    {
      'p-8': variant === 'standard',
      'p-6': variant === 'compact',
      'overflow-hidden relative': variant === 'hero'
    },
    className
  );
  
  const hoverClasses = interactive ? cn(
    'cursor-pointer hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5',
    isHovered && 'shadow-[var(--shadow-hover)] -translate-y-0.5'
  ) : '';
  
  const handleMouseEnter = () => interactive && setIsHovered(true);
  const handleMouseLeave = () => interactive && setIsHovered(false);
  
  return (
    <div 
      className={cn(baseClasses, hoverClasses)} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {variant === 'hero' && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--surface-primary)] rounded-bl-[100px] rounded-tr-[var(--radius-card-large)]" />
      )}
      {children}
    </div>
  );
}
