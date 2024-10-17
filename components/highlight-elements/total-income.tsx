import React from 'react';

import { ChartColumnIcon } from '@/lib/index-icons';
import { cn } from '@/lib/utils';

export default function TotalIncome({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-[140px] h-[78px] flex flex-col justify-center bg-white p-4 rounded-[10px]',
        className
      )}
      style={{ boxShadow: '1px 1px 3px darkgrey' }}
    >
      <span className='text-xs text-[#A9A7B6]'>Total Income</span>
      <span className='text-sm flex text-nowrap items-end font-medium leading-none'>
        AED 450.00
        <ChartColumnIcon className='ml-1 inline text-primary w-[20px] h-auto' />
      </span>
    </div>
  );
}
