// src/components/ui/Avatar/AvatarGroup.tsx
import { Avatar } from './Avatar';
import { cn } from '@/lib/utils';

interface AvatarGroupProps {
  avatars: Array<{
    src?: string;
    alt?: string;
    fallback?: string;
  }>;
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AvatarGroup({ 
  avatars, 
  maxVisible = 5, 
  size = 'md',
  className 
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;
  
  return (
    <div className={cn('flex flex-row-reverse', className)}>
      {visibleAvatars.map((avatar, index) => (
        <div 
          key={index} 
          className={cn(
            'border-2 border-[var(--surface-primary)] rounded-full',
            index > 0 && '-ml-3'
          )}
          style={{ zIndex: visibleAvatars.length - index }}
        >
          <Avatar 
            src={avatar.src} 
            alt={avatar.alt} 
            fallback={avatar.fallback} 
            size={size} 
          />
        </div>
      ))}
      
      {remainingCount > 0 && (
        <div 
          className={cn(
            'flex items-center justify-center bg-[var(--surface-soft)] border-2 border-[var(--surface-primary)] rounded-full',
            '-ml-3',
            size === 'sm' && 'w-8 h-8 text-xs',
            size === 'md' && 'w-10 h-10 text-sm',
            size === 'lg' && 'w-16 h-16 text-lg'
          )}
          style={{ zIndex: 0 }}
        >
          <span className="font-medium text-[var(--text-secondary)]">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
}
