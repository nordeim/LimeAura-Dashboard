'use client'

import * as React from "react"
import { cn } from "@/lib/utils/cn"
import { Toggle } from "@/components/ui/toggle"

export interface IntegrationRowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onToggle'> {
  icon: React.ReactNode
  name: string
  description: string
  enabled?: boolean
  onToggle?: (enabled: boolean) => void
}

const IntegrationRow = React.forwardRef<HTMLDivElement, IntegrationRowProps>(
  ({ 
    className, 
    icon,
    name,
    description,
    enabled = false,
    onToggle,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-[14px] py-md",
          "border-b border-border-subtle last:border-0",
          className
        )}
        {...props}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-pill bg-surface-soft">
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-body-bold text-text-primary">
            {name}
          </h3>
          <p className="text-body text-text-secondary">
            {description}
          </p>
        </div>
        
        <Toggle
          checked={enabled}
          onChange={(e) => onToggle?.(e.target.checked)}
          aria-label={`Toggle ${name} integration`}
        />
      </div>
    )
  }
)
IntegrationRow.displayName = "IntegrationRow"

export { IntegrationRow }
