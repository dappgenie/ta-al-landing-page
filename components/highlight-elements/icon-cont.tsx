import React from 'react';

import { cn } from '@/lib/utils';

export default function IconCont({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'bg-white w-[40px] h-[40px] flex-center rounded-[10px]',
        className
      )}
      style={{ boxShadow: '1px 1px 3px darkgrey' }}
    >
      {children}
    </div>
  );
}
