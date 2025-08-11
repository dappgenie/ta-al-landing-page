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
  const { scrollY } = useScroll(); // using scrollY for distance in px
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = latest - previous;

    // Show navbar after scrolling 80px and only when scrolling up
    if (latest < 80) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode='wait'>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-primary/[0.2] rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-6 py-3 items-center justify-center space-x-6',
            className
          )}
        >
          {navItems.map((navItem) => (
            <Link
              key={navItem.name}
              href={navItem.link}
              className='relative text-primary/80 items-center flex space-x-1 hover:text-primary'
            >
              <span className='text-sm sm:block hover:font-bold'>
                {navItem.name}
              </span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
