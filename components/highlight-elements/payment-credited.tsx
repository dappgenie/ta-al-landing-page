import React from 'react';

import { cn } from '@/lib/utils';

export default function PaymentCredited({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-white w-[270px] h-[78px] p-4 rounded-[10px]',
        className
      )}
      style={{ boxShadow: '1px 1px 3px darkgrey' }}
    >
      <div className='flex items-center justify-between'>
        <div className='flex flex-col'>
          <span className='text-xs text-[#A9A7B6]'>Payment Credited</span>
          <span className='text-base font-medium mt-2 leading-none'>
            AED 450.00
          </span>
        </div>
        <div className='w-[65px] h-[30px] flex-center text-white bg-primary text-xs rounded-[40px]'>
          Credited
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#EEEEEE] mt-3'></div>
    </div>
  );
}
