export const tokens = {
  color: {
    background: {
      main: 'bg-bg-main',
    },
    surface: {
      primary: 'bg-surface-primary',
      soft: 'bg-surface-soft',
    },
    text: {
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      muted: 'text-text-muted',
      onAccent: 'text-text-on-accent',
    },
    accent: {
      primary: 'bg-accent-primary',
      primarySoft: 'bg-accent-primary-soft',
      secondary: 'bg-accent-secondary',
      yellow: 'bg-accent-yellow',
    },
    border: {
      subtle: 'border-border-subtle',
    },
    semantic: {
      success: 'bg-semantic-success',
      warning: 'bg-semantic-warning',
      danger: 'bg-semantic-danger',
    },
  },
  spacing: {
    xxs: 'xxs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
    xxxl: 'xxxl',
  },
  radius: {
    pill: 'rounded-pill',
    cardLg: 'rounded-card-lg',
    cardMd: 'rounded-card-md',
  },
  shadow: {
    card: 'shadow-card',
    floating: 'shadow-floating',
    accentSoft: 'shadow-accent-soft',
  },
} as const

export type TokenKey = keyof typeof tokens
