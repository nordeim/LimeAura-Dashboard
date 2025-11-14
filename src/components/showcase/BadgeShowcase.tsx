// src/components/showcase/BadgeShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Badge } from '@/components/ui/Badge/Badge';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function BadgeShowcase() {
  return (
    <Card>
      <SectionHeader title="Badges" subtitle="Indicators for counts and status" />
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Numeric Badges</h4>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span>Notifications</span>
              <Badge variant="numeric">3</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>Messages</span>
              <Badge variant="numeric">12</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span>Tasks</span>
              <Badge variant="numeric">99+</Badge>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Status Badges</h4>
          <div className="flex flex-wrap gap-3">
            <Badge variant="status">Active</Badge>
            <Badge variant="status">Pending</Badge>
            <Badge variant="status">Completed</Badge>
            <Badge variant="status">In Progress</Badge>
            <Badge variant="status">On Hold</Badge>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Badge Combinations</h4>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--surface-soft)] rounded-lg hover:bg-[var(--surface-primary)]">
              Inbox
              <Badge variant="numeric" className="-mr-2">5</Badge>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-[var(--surface-soft)] rounded-lg hover:bg-[var(--surface-primary)]">
              Projects
              <Badge variant="status" className="ml-1">3 Active</Badge>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
