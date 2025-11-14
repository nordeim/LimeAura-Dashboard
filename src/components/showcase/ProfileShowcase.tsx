// src/components/showcase/ProfileShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Avatar } from '@/components/ui/Avatar/Avatar';
import { Tag } from '@/components/ui/Tag/Tag';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { MoreVertical } from 'lucide-react';

export function ProfileShowcase() {
  return (
    <Card>
      <SectionHeader 
        title="Profile Summary" 
        subtitle="User profile with avatar, role, and skills" 
        action={
          <Button variant="ghost" size="sm" className="p-2">
            <MoreVertical size={20} />
          </Button>
        }
      />
      
      <div className="flex flex-col items-center text-center p-6">
        <Avatar 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
          alt="Sarah Johnson" 
          size="lg" 
          fallback="SJ" 
        />
        
        <h2 className="text-2xl font-semibold mt-4">Sarah Johnson</h2>
        <p className="text-[var(--text-secondary)] mt-1">Senior Product Designer</p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Tag variant="accent">UI/UX</Tag>
          <Tag variant="accent">Figma</Tag>
          <Tag variant="accent">Design Systems</Tag>
          <Tag variant="accent">Prototyping</Tag>
        </div>
        
        <div className="flex gap-3 mt-6">
          <Button variant="secondary" fullWidth>Message</Button>
          <Button variant="primary" fullWidth>Connect</Button>
        </div>
      </div>
    </Card>
  );
}
