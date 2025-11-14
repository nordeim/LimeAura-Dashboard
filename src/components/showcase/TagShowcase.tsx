// src/components/showcase/TagShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Tag } from '@/components/ui/Tag/Tag';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function TagShowcase() {
  return (
    <Card>
      <SectionHeader title="Tags" subtitle="Soft pill labels for skills and filters" />
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Variants</h4>
          <div className="flex flex-wrap gap-2">
            <Tag variant="default" size="md">Default</Tag>
            <Tag variant="accent" size="md">Accent</Tag>
            <Tag variant="default" size="sm">Small Default</Tag>
            <Tag variant="accent" size="sm">Small Accent</Tag>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Skill Tags</h4>
          <div className="flex flex-wrap gap-2">
            <Tag variant="accent">React</Tag>
            <Tag variant="accent">TypeScript</Tag>
            <Tag variant="accent">Tailwind CSS</Tag>
            <Tag variant="accent">Next.js</Tag>
            <Tag variant="accent">Figma</Tag>
            <Tag variant="accent">Design Systems</Tag>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Content Tags</h4>
          <div className="flex flex-wrap gap-2">
            <Tag variant="default">UI Design</Tag>
            <Tag variant="default">UX Research</Tag>
            <Tag variant="default">Prototyping</Tag>
            <Tag variant="default">Accessibility</Tag>
            <Tag variant="default">Animation</Tag>
          </div>
        </div>
      </div>
    </Card>
  );
}
