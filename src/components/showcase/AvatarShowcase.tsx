// src/components/showcase/AvatarShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Avatar } from '@/components/ui/Avatar/Avatar';
import { AvatarGroup } from '@/components/ui/Avatar/AvatarGroup';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function AvatarShowcase() {
  return (
    <Card>
      <SectionHeader title="Avatars" subtitle="User profile pictures and group stacks" />
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Single Avatars</h4>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <Avatar size="sm" fallback="A" />
              <p className="text-xs text-[var(--text-secondary)] mt-1">Small</p>
            </div>
            <div className="text-center">
              <Avatar size="md" fallback="B" />
              <p className="text-xs text-[var(--text-secondary)] mt-1">Medium</p>
            </div>
            <div className="text-center">
              <Avatar size="lg" fallback="C" />
              <p className="text-xs text-[var(--text-secondary)] mt-1">Large</p>
            </div>
            <div className="text-center">
              <Avatar 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
                alt="Photo Avatar" 
                size="md" 
              />
              <p className="text-xs text-[var(--text-secondary)] mt-1">With Image</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Avatar Groups</h4>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <AvatarGroup 
                avatars={[
                  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", alt: "Sarah" },
                  { src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100", alt: "Mike" },
                  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", alt: "John" },
                  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", alt: "Lisa" },
                  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", alt: "Tom" },
                  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", alt: "Emma" }
                ]} 
                maxVisible={4}
                size="md"
              />
              <p className="text-xs text-[var(--text-secondary)] mt-2">Default (4 visible)</p>
            </div>
            
            <div>
              <AvatarGroup 
                avatars={[
                  { fallback: "A" },
                  { fallback: "B" },
                  { fallback: "C" }
                ]} 
                maxVisible={3}
                size="sm"
              />
              <p className="text-xs text-[var(--text-secondary)] mt-2">Small with fallbacks</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
