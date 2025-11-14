// src/components/layout/DashboardLayout.tsx
import { ReactNode } from 'react';

export function DashboardLayout({ 
  title, 
  children 
}: { 
  title: string; 
  children: ReactNode 
}) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          {title}
        </h1>
        <p className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto">
          A comprehensive showcase of the LimeAura design system. Every component follows the design specification with meticulous attention to detail, animations, and responsive behavior.
        </p>
      </div>
      
      {children}
      
      <footer className="text-center mt-16 py-8 text-[var(--text-muted)]">
        <p>LimeAura Design System Showcase • Built with Next.js 14 & Tailwind CSS</p>
      </footer>
    </div>
  );
}
