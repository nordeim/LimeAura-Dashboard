// src/components/showcase/CardsShowcase.tsx
import { Card } from '@/components/ui/Card/Card';

export function CardsShowcase() {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-2">
          Cards
        </h2>
        <p className="text-[var(--text-secondary)]">
          Flexible containers with different variants
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="standard" interactive>
          <h3 className="text-xl font-semibold mb-2">Standard Card</h3>
          <p className="text-[var(--text-secondary)]">
            This is a standard card with default padding and rounded corners. It{"'"}s perfect for most content containers.
          </p>
          <div className="mt-4 flex gap-3">
            <div className="w-24 h-12 bg-[var(--surface-soft)] rounded-lg" />
            <div className="w-24 h-12 bg-[var(--surface-soft)] rounded-lg" />
          </div>
        </Card>
        
        <Card variant="hero" interactive>
          <h3 className="text-xl font-semibold mb-2">Hero Card</h3>
          <p className="text-[var(--text-secondary)]">
            Hero card with a decorative cutout in the top-right corner. Great for featured content or important announcements.
          </p>
          <div className="mt-4 flex gap-3">
            <div className="w-16 h-16 bg-[var(--accent-primary-soft)] rounded-lg flex items-center justify-center text-[var(--accent-primary)] font-bold">
              75%
            </div>
          </div>
        </Card>
        
        <Card variant="compact" interactive>
          <h3 className="text-lg font-semibold mb-1">Compact Card</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Compact version with reduced padding, ideal for lists or smaller content blocks.
          </p>
        </Card>
        
        <div className="bg-[var(--surface-soft)] rounded-[var(--radius-card-medium)] p-4 border border-[var(--border-subtle)]">
          <h4 className="font-medium mb-2">Card States</h4>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-[var(--surface-primary)] rounded-[var(--radius-card-large)] shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-0.5" />
            <div className="text-sm">
              <p className="font-medium">Hover State</p>
              <p className="text-[var(--text-secondary)]">Elevated shadow + slight lift</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
