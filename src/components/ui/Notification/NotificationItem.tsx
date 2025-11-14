// src/components/ui/Notification/NotificationItem.tsx
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import { MessageSquare, Calendar, UserPlus } from 'lucide-react';

interface NotificationItemProps {
  type: 'message' | 'task' | 'invitation';
  avatar?: string;
  title: string;
  message: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    variant: 'success' | 'secondary';
    onClick: () => void;
  }>;
}

export function NotificationItem({ 
  type, 
  avatar, 
  title, 
  message, 
  timestamp, 
  actions 
}: NotificationItemProps) {
  const getIcon = () => {
    switch (type) {
      case 'message':
        return <MessageSquare className="text-[var(--accent-primary)]" size={20} aria-label="Message notification" />;
      case 'task':
        return <Calendar className="text-[var(--accent-secondary)]" size={20} aria-label="Task notification" />;
      case 'invitation':
        return <UserPlus className="text-[var(--accent-yellow)]" size={20} aria-label="Invitation notification" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="flex items-start gap-4 py-3 border-b last:border-b-0 border-[var(--border-subtle)]">
      <div className="mt-1">
        {avatar ? (
          <Avatar src={avatar} alt={title} size="sm" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[var(--surface-soft)] flex items-center justify-center" aria-hidden="true">
            {getIcon()}
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <h4 className="font-medium text-[var(--text-primary)] truncate">{title}</h4>
          <span className="text-xs text-[var(--text-muted)] whitespace-nowrap ml-2">{timestamp}</span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] mt-1">{message}</p>
        
        {actions && actions.length > 0 && (
          <div className="flex gap-2 mt-3">
            {actions.map((action, index) => (
              <Button 
                key={index} 
                variant={action.variant} 
                size="sm"
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
