// src/components/ui/Button/Button.tsx
'use client';

import { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'success' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    className, 
    children, 
    disabled,
    ...props 
  }, ref) => {
    const [isActive, setIsActive] = useState(false);
    
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium rounded-[var(--radius-pill)] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-primary-soft)]',
      {
        'px-5 py-2.5 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
        'w-full': fullWidth,
        'opacity-50 cursor-not-allowed': disabled,
        'transform scale-95': isActive && !disabled
      },
      className
    );
    
    const variantClasses = {
      primary: cn(
        'bg-[var(--accent-primary)] text-white shadow-[0_8px_18px_0_rgba(123,62,255,0.25)]',
        !disabled && 'hover:bg-[#6B2FFF] active:shadow-[0_6px_14px_0_rgba(15,23,42,0.18)]'
      ),
      success: cn(
        'bg-[var(--success)] text-white',
        !disabled && 'hover:bg-[#0da271] active:bg-[#0b8a61]'
      ),
      secondary: cn(
        'bg-white border border-[var(--border-subtle)] text-[var(--text-primary)]',
        !disabled && 'hover:bg-[var(--surface-soft)] active:bg-[#f0f2f5]'
      ),
      ghost: cn(
        'bg-transparent text-[var(--text-primary)]',
        !disabled && 'hover:bg-[var(--surface-soft)] active:bg-[#f0f2f5]'
      )
    };
    
    const handleMouseDown = () => !disabled && setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsActive(false);
    
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant])}
        disabled={disabled}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
