// src/components/showcase/NotificationShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { NotificationItem } from '@/components/ui/Notification/NotificationItem';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { useState } from 'react';

export function NotificationShowcase() {
  const [notifications] = useState([
    {
      id: 1,
      type: 'message' as const,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      title: 'Sarah Johnson',
      message: 'Hi! I\'d love to collaborate on the new design system project.',
      timestamp: '2h ago',
      actions: [
        { label: 'Accept', variant: 'success' as const, onClick: () => console.log('Accepted') },
        { label: 'Decline', variant: 'secondary' as const, onClick: () => console.log('Declined') }
      ]
    },
    {
      id: 2,
      type: 'task' as const,
      title: 'Design Review',
      message: 'Your design review for the dashboard is scheduled for tomorrow at 2 PM.',
      timestamp: '5h ago',
      actions: [
        { label: 'Set Reminder', variant: 'success' as const, onClick: () => console.log('Reminder set') }
      ]
    },
    {
      id: 3,
      type: 'invitation' as const,
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100',
      title: 'Mike Chen',
      message: 'You\'ve been invited to join the Product Team workspace.',
      timestamp: '1d ago',
      actions: [
        { label: 'Join', variant: 'success' as const, onClick: () => console.log('Joined') },
        { label: 'Decline', variant: 'secondary' as const, onClick: () => console.log('Declined') }
      ]
    }
  ]);
  
  return (
    <Card>
      <SectionHeader 
        title="Notifications" 
        subtitle="Interactive notification items with actions" 
        badgeCount={3}
      />
      
      <div className="space-y-1">
        {notifications.map((notification) => (
          <NotificationItem 
            key={notification.id}
            {...notification}
          />
        ))}
      </div>
    </Card>
  );
}
