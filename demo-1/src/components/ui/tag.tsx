import * as React from "react"
import { cn } from "@/lib/utils/cn"

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  removable?: boolean
  onRemove?: () => void
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, removable, onRemove, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-xs rounded-pill bg-surface-soft px-[14px] py-xs text-label font-medium text-text-primary transition-colors hover:bg-accent-primary-soft hover:text-accent-primary",
          className
        )}
        {...props}
      >
        {children}
        {removable && (
          <button
            onClick={onRemove}
            className="ml-xs -mr-xs hover:text-accent-primary"
            aria-label="Remove tag"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              <path
                d="M9 3L3 9M3 3L9 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </span>
    )
  }
)
Tag.displayName = "Tag"

export { Tag }
