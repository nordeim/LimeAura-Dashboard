// src/components/showcase/ButtonsShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Button } from '@/components/ui/Button/Button';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function ButtonsShowcase() {
  return (
    <Card>
      <SectionHeader title="Buttons" subtitle="Interactive controls with multiple variants" />
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Sizes</h4>
          <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">States</h4>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="primary" className="animate-pulse">Loading</Button>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Full Width</h4>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </div>
    </Card>
  );
}
