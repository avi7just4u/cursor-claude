import React from 'react';
import { cn } from '../lib/cn';

export const Toast: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('fixed top-4 right-4 z-50 rounded-lg border bg-background p-4 shadow-lg', className)}>
      {children}
    </div>
  );
}; 