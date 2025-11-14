'use client'

import * as React from "react"
import { cn } from "@/lib/utils/cn"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export interface NotificationItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  avatar?: {
    src?: string
    alt?: string
    fallback?: string
  }
  title: string
  description?: string
  timestamp?: string
  actions?: Array<{
    label: string
    variant?: "primary" | "success" | "secondary" | "ghost"
    onClick: () => void
  }>
}

const NotificationItem = React.forwardRef<HTMLDivElement, NotificationItemProps>(
  ({ 
    className, 
    avatar,
    title,
    description,
    timestamp,
    actions,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start gap-md py-md",
          "border-b border-border-subtle last:border-0",
          className
        )}
        {...props}
      >
        {avatar && (
          <Avatar
            size="md"
            src={avatar.src}
            alt={avatar.alt}
            fallback={avatar.fallback}
          />
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-md mb-xs">
            <div className="flex-1">
              <p className="text-body font-medium text-text-primary">
                {title}
              </p>
              {description && (
                <p className="text-body text-text-secondary mt-xs">
                  {description}
                </p>
              )}
            </div>
            
            <div className="flex items-center gap-sm">
              {timestamp && (
                <span className="text-label text-text-muted">
                  {timestamp}
                </span>
              )}
              <button
                className="p-xs hover:bg-surface-soft rounded-pill transition-colors"
                aria-label="More options"
              >
                <MoreHorizontal className="h-4 w-4 text-text-muted" />
              </button>
            </div>
          </div>
          
          {actions && actions.length > 0 && (
            <div className="flex gap-sm mt-sm">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "secondary"}
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
    )
  }
)
NotificationItem.displayName = "NotificationItem"

export { NotificationItem }
