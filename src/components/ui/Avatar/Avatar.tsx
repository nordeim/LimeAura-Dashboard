'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ 
  src, 
  alt = 'Avatar', 
  fallback = '?', 
  size = 'md',
  className 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-16 h-16 text-lg'
  };
  
  return (
    <Avatar.Root 
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--surface-soft)] border-2 border-[var(--surface-primary)]',
        sizeClasses[size],
        className
      )}
    >
      {src ? (
        <Avatar.Image
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <Avatar.Fallback 
          className="text-[var(--text-primary)] font-medium flex items-center justify-center h-full w-full"
          delayMs={600}
        >
          {fallback}
        </Avatar.Fallback>
      )}
    </Avatar.Root>
  );
}
