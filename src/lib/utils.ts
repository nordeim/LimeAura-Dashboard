// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn - Class name utility that merges Tailwind CSS classes intelligently
 * 
 * Combines the power of clsx (conditional class names) with tailwind-merge
 * (intelligent Tailwind class conflict resolution) to provide a robust
 * class name merging utility for the LimeAura design system.
 * 
 * @example
 * cn('text-red-500', { 'font-bold': isActive }, 'hover:text-blue-500')
 * 
 * @param inputs - Class name strings, objects, or arrays to merge
 * @returns Merged and conflict-resolved class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
