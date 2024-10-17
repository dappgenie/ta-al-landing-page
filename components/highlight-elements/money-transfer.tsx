import React from 'react';
import { CheckCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function MoneyTransferSuccess({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        'bg-white rounded-[10px] flex-center gap-x-3 py-2 px-4',
        className
      )}
      style={{ boxShadow: '1px 1px 3px darkgrey' }}
    >
      <CheckCircle className='text-primary w-[20px] h-auto' />
      <span className='text-base font-medium'>Money Transfer Successfully</span>
    </div>
  );
}
