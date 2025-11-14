// src/components/foundation/ThemeProvider.tsx
'use client';

import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--background-main)]">
      {children}
    </div>
  );
}
