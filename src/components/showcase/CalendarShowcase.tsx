// src/components/showcase/CalendarShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { Calendar } from '@/components/ui/Calendar/Calendar';
import { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function CalendarShowcase() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  return (
    <Card>
      <SectionHeader 
        title="Calendar" 
        subtitle="Minimal grid calendar with interactive dates" 
      />
      
      <div className="flex justify-center">
        <Calendar 
          selectedDate={selectedDate} 
          onDateSelect={setSelectedDate} 
          className="w-full max-w-md"
        />
      </div>
    </Card>
  );
}
