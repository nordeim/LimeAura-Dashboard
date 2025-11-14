// src/components/ui/Calendar/Calendar.tsx
'use client';

import { useState } from 'react';
import { Button } from '../Button/Button';
import { cn } from '@/lib/utils';

interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
  className?: string;
}

export function Calendar({ selectedDate, onDateSelect, className }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => selectedDate || new Date());
  const [today] = useState(new Date());
  
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };
  
  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    onDateSelect?.(newDate);
  };
  
  const isToday = (day: number) => {
    return today.getDate() === day && 
           today.getMonth() === currentDate.getMonth() && 
           today.getFullYear() === currentDate.getFullYear();
  };
  
  const isSelected = (day: number) => {
    return selectedDate && 
           selectedDate.getDate() === day && 
           selectedDate.getMonth() === currentDate.getMonth() && 
           selectedDate.getFullYear() === currentDate.getFullYear();
  };
  
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const days = [];
  
  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({ day: null, isCurrentMonth: false });
  }
  
  // Add days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }
  
  return (
    <div className={cn('bg-[var(--surface-primary)] rounded-[var(--radius-card-large)] p-6 shadow-[var(--shadow-card)]', className)}>
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          ←
        </Button>
        
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          →
        </Button>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-3">
        {daysOfWeek.map((day) => (
          <div 
            key={day} 
            className="text-center text-xs font-medium text-[var(--text-muted)] py-1"
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {days.map(({ day, isCurrentMonth }, index) => {
          const today = isToday(day || 0);
          const selected = isSelected(day || 0);
          const isInteractive = isCurrentMonth && day !== null;
          
          return (
            <button
              key={index}
              onClick={() => day && isInteractive && handleDateClick(day)}
              disabled={!isInteractive}
              className={cn(
                'w-9 h-9 rounded-[var(--radius-pill)] flex items-center justify-center text-sm font-medium transition-all duration-200 ease-out',
                !isCurrentMonth && 'text-[var(--text-muted)]',
                isCurrentMonth && !today && !selected && 'text-[var(--text-primary)] hover:bg-[var(--surface-soft)]',
                today && !selected && 'text-[var(--accent-primary)] bg-[var(--accent-primary-soft)]',
                selected && 'text-white bg-[var(--accent-primary)]',
                !isInteractive && 'cursor-default opacity-50'
              )}
              aria-label={day ? `Select ${monthNames[currentDate.getMonth()]} ${day}` : undefined}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
