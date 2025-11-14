// src/components/ui/Milestone/MilestoneCard.tsx
import { Card } from '../Card/Card';
import { ProgressCircular } from '../Progress/ProgressCircular';
import { AvatarGroup } from '../Avatar/AvatarGroup';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';

interface MilestoneCardProps {
  title: string;
  dueDate: string;
  progress: number;
  assignees: Array<{
    src?: string;
    alt?: string;
    fallback?: string;
  }>;
  tags?: string[];
}

export function MilestoneCard({ 
  title, 
  dueDate, 
  progress, 
  assignees, 
  tags = [] 
}: MilestoneCardProps) {
  return (
    <Card variant="compact">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-[var(--text-primary)]">{title}</h3>
        <Button variant="ghost" size="sm">
          View details
        </Button>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[var(--text-secondary)]">Due date</span>
            <span className="text-sm text-[var(--text-primary)]">{dueDate}</span>
          </div>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Tag key={index} variant="accent" size="sm">
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center">
          <ProgressCircular value={progress} size={40} />
          <span className="text-xs font-medium text-[var(--text-secondary)] mt-1">
            {progress}% complete
          </span>
        </div>
      </div>
      
      {assignees.length > 0 && (
        <div className="mt-4 pt-3 border-t border-[var(--border-subtle)]">
          <span className="text-sm font-medium text-[var(--text-secondary)] mb-2 block">
            Assignees
          </span>
          <AvatarGroup avatars={assignees} size="sm" maxVisible={4} />
        </div>
      )}
    </Card>
  );
}
