import React from 'react';
import { cn } from '../lib/cn';

export const Dialog: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('fixed inset-0 z-50 flex items-center justify-center', className)}>
      {children}
    </div>
  );
}; 