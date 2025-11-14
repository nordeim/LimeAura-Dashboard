'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-pill text-body font-medium transition-all duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary-soft focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: 
          "bg-accent-primary text-text-on-accent shadow-accent-soft hover:bg-accent-primary-hover active:scale-[0.98]",
        success: 
          "bg-semantic-success text-text-on-accent hover:bg-semantic-success/90 active:scale-[0.98]",
        secondary:
          "bg-surface-primary border border-border-subtle text-text-primary hover:bg-surface-soft",
        ghost: 
          "text-text-primary hover:bg-surface-soft/80",
      },
      size: {
        default: "px-[18px] py-[9px]",
        sm: "px-md py-xs text-label",
        lg: "px-xxl py-md text-body-lg",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
