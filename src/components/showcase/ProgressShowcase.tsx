// src/components/showcase/ProgressShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { ProgressCircular } from '@/components/ui/Progress/ProgressCircular';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function ProgressShowcase() {
  return (
    <Card>
      <SectionHeader 
        title="Circular Progress" 
        subtitle="Visual indicators for completion status" 
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center justify-center">
          <ProgressCircular value={25} size={60} />
          <p className="text-sm font-medium mt-2">25%</p>
          <p className="text-xs text-[var(--text-secondary)]">Low</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <ProgressCircular value={75} size={60} />
          <p className="text-sm font-medium mt-2">75%</p>
          <p className="text-xs text-[var(--text-secondary)]">Medium</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <ProgressCircular value={100} size={60} />
          <p className="text-sm font-medium mt-2">100%</p>
          <p className="text-xs text-[var(--text-secondary)]">Complete</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <ProgressCircular value={45} size={40} />
          <p className="text-xs font-medium mt-1">Small (45%)</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <ProgressCircular value={60} size={80} />
          <p className="text-sm font-medium mt-2">Large (60%)</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <ProgressCircular value={85} size={60} showLabel={false} />
          <div className="mt-2 text-center">
            <div className="h-2 w-16 bg-[var(--surface-soft)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--accent-primary)] rounded-full" 
                style={{ width: '85%' }}
              />
            </div>
            <p className="text-xs font-medium mt-1">85%</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
