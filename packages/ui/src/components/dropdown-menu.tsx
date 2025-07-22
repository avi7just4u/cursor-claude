import React from 'react';
import { cn } from '../lib/cn';

export const DropdownMenu: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('relative inline-block text-left', className)}>
      {children}
    </div>
  );
}; 