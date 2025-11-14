// src/components/showcase/IntegrationShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { IntegrationRow } from '@/components/ui/Integration/IntegrationRow';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { useState } from 'react';
import { Slack, Github, Calendar, Video } from 'lucide-react';

export function IntegrationShowcase() {
  const [integrations, setIntegrations] = useState([
    { id: 1, name: 'Slack', enabled: true },
    { id: 2, name: 'GitHub', enabled: true },
    { id: 3, name: 'Google Calendar', enabled: false },
    { id: 4, name: 'Google Meet', enabled: false }
  ]);
  
  const handleToggle = (id: number) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === id ? { ...integration, enabled: !integration.enabled } : integration
    ));
  };
  
  return (
    <Card>
      <SectionHeader 
        title="Integrations" 
        subtitle="Connect with external services and tools" 
      />
      
      <div className="divide-y divide-[var(--border-subtle)]">
        <IntegrationRow
          icon={Slack}
          name="Slack"
          description="Get notifications and updates in your Slack channels"
          enabled={integrations.find(i => i.id === 1)?.enabled}
          onToggle={() => handleToggle(1)}
        />
        
        <IntegrationRow
          icon={Github}
          name="GitHub"
          description="Sync issues, pull requests, and code reviews"
          enabled={integrations.find(i => i.id === 2)?.enabled}
          onToggle={() => handleToggle(2)}
        />
        
        <IntegrationRow
          icon={Calendar}
          name="Google Calendar"
          description="Sync your meetings and deadlines"
          enabled={integrations.find(i => i.id === 3)?.enabled}
          onToggle={() => handleToggle(3)}
        />
        
        <IntegrationRow
          icon={Video}
          name="Google Meet"
          description="Join video meetings directly from the dashboard"
          enabled={integrations.find(i => i.id === 4)?.enabled}
          onToggle={() => handleToggle(4)}
        />
      </div>
    </Card>
  );
}
