import { cn } from '@/lib/utils';

import { Card, CardContent } from './ui/card';

export const GradientMenu = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <Card className={cn('relative group h-full ', containerClassName)}>
      <CardContent className=' p-0 h-full'>
        <div className='absolute inset-0 rounded-xl z-[1] opacity-100 group-hover:opacity-60 blur-sm transition duration-500 bg-[#E32FEE]' />
        <div className='absolute inset-0 rounded-xl z-[1] h-full bg-[#E32FEE]' />
        <div
          className={cn(
            'relative z-10  h-full border border-[#F88CFF] rounded-xl',
            className
          )}
        >
          {children}
        </div>
      </CardContent>
    </Card>
  );
};
