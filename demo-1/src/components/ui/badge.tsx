import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors",
  {
    variants: {
      variant: {
        numeric: 
          "rounded-pill bg-accent-primary text-text-on-accent text-[10px] font-semibold min-w-[18px] h-[18px] px-xs",
        status: 
          "rounded-pill bg-accent-primary-soft text-accent-primary text-[11px] font-medium px-[10px] py-xxs",
        default:
          "rounded-pill bg-surface-soft text-text-primary text-label px-md py-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
