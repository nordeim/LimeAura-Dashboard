'use client'

import * as React from "react"
import { cn } from "@/lib/utils/cn"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Tag } from "@/components/ui/tag"
import { MoreVertical } from "lucide-react"

export interface ProfileSummaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  avatar: {
    src?: string
    alt?: string
    fallback?: string
  }
  name: string
  role: string
  skills?: string[]
  onOptionsClick?: () => void
}

const ProfileSummary = React.forwardRef<HTMLDivElement, ProfileSummaryProps>(
  ({ 
    className, 
    avatar,
    name,
    role,
    skills = [],
    onOptionsClick,
    ...props 
  }, ref) => {
    return (
      <Card ref={ref} className={cn("relative", className)} {...props}>
        {onOptionsClick && (
          <button
            onClick={onOptionsClick}
            className="absolute top-xxl right-xxl p-xs hover:bg-surface-soft rounded-pill transition-colors"
            aria-label="More options"
          >
            <MoreVertical className="h-5 w-5 text-text-muted" />
          </button>
        )}
        
        <CardContent className="text-center pt-sm">
          <Avatar
            size="lg"
            src={avatar.src}
            alt={avatar.alt}
            fallback={avatar.fallback}
            className="mx-auto mb-md"
          />
          
          <h2 className="text-heading-2 text-text-primary mb-xs">
            {name}
          </h2>
          
          <p className="text-body text-text-secondary mb-lg">
            {role}
          </p>
          
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-sm justify-center">
              {skills.map((skill, index) => (
                <Tag key={index}>{skill}</Tag>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)
ProfileSummary.displayName = "ProfileSummary"

export { ProfileSummary }
