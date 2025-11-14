'use client';

// src/components/showcase/ToggleShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Toggle } from '@/components/ui/Toggle/Toggle';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { useState } from 'react';

export function ToggleShowcase() {
  const [checkedSmall, setCheckedSmall] = useState(false);
  const [checkedMedium, setCheckedMedium] = useState(true);
  
  return (
    <Card>
      <SectionHeader title="Toggles" subtitle="iOS-style switches for binary options" />
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Sizes</h4>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Toggle 
                size="sm" 
                defaultChecked={checkedSmall} 
                onCheckedChange={setCheckedSmall} 
              />
              <span className="text-sm">Small</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle 
                size="md" 
                defaultChecked={checkedMedium} 
                onCheckedChange={setCheckedMedium} 
              />
              <span className="text-sm">Medium (Default)</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">States</h4>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Toggle disabled defaultChecked={true} />
              <span className="text-sm text-[var(--text-secondary)]">Disabled On</span>
            </div>
            <div className="flex items-center gap-3">
              <Toggle disabled defaultChecked={false} />
              <span className="text-sm text-[var(--text-secondary)]">Disabled Off</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Integration Example</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[var(--surface-soft)] rounded-lg">
              <div>
                <h5 className="font-medium">Dark Mode</h5>
                <p className="text-sm text-[var(--text-secondary)]">Enable dark mode theme</p>
              </div>
              <Toggle />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-[var(--surface-soft)] rounded-lg">
              <div>
                <h5 className="font-medium">Email Notifications</h5>
                <p className="text-sm text-[var(--text-secondary)]">Receive notifications via email</p>
              </div>
              <Toggle defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
