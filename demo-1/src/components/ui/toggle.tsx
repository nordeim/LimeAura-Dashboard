'use client'

import * as React from "react"
import { cn } from "@/lib/utils/cn"

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, checked, onChange, disabled, ...props }, ref) => {
    return (
      <label className={cn("inline-flex items-center gap-sm", className)}>
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div 
            className={cn(
              "w-11 h-6 rounded-pill transition-colors duration-fast ease-standard",
              "bg-gray-300 peer-checked:bg-accent-primary",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-accent-primary-soft peer-focus-visible:ring-offset-2",
              "peer-disabled:opacity-40 peer-disabled:cursor-not-allowed"
            )}
          >
            <div 
              className={cn(
                "absolute top-[3px] left-[3px] h-[18px] w-[18px]",
                "bg-surface-primary rounded-pill shadow-sm",
                "transition-transform duration-fast ease-standard",
                "peer-checked:translate-x-5"
              )}
            />
          </div>
        </div>
        {label && (
          <span className="text-body text-text-primary select-none">
            {label}
          </span>
        )}
      </label>
    )
  }
)
Toggle.displayName = "Toggle"

export { Toggle }
