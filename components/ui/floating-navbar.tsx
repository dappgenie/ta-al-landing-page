'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';

import { cn } from '@/lib/utils';

interface RouteProps {
  link: string;
  name: string;
  icon?: JSX.Element;
}
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: RouteProps[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-primary/[0.2] rounded-full bg-white  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4',
          className
        )}
      >
        {navItems.map((navItem: RouteProps, idx: number) => (
          <a
            key={`link=${navItem.name}`}
            href={navItem.link}
            className={cn(
              'relative text-primary/80 items-center flex space-x-1 hover:text-primary'
            )}
          >
            <span className='block sm:hidden'>{navItem.icon}</span>
            <span className='hidden text-sm sm:block'>{navItem.name}</span>
          </a>
        ))}
        <Link href='https://app.xnodes.bot' target='_blank'>
          <button
            type='button'
            className='border text-sm font-medium relative border-primary/[0.2] text-primary px-4 py-2 rounded-full'
          >
            <span>Launch App</span>
            <span className='absolute inset-x-0 w-1/2 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent' />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};