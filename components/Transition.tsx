'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Transition = ({
  children,
  className,
  animationType,
}: {
  children?: React.ReactNode;
  className?: string;
  animationType: 'left' | 'right' | 'top' | 'bottom';
}) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const ref = useRef(null);
  const inView = useInView(ref);
  const animationValue = () => {
    switch (animationType) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -60 },
          show: {
            opacity: 1,
            x: 0,
          },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 60 },
          show: { opacity: 1, x: 0 },
        };
      case 'top':
        return {
          hidden: { opacity: 0, y: -60 },
          show: { opacity: 1, y: 0 },
        };
      case 'bottom':
        return {
          hidden: { opacity: 0, y: 60 },
          show: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={animationValue()}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      transition={{ type: 'spring', stiffness: 100 }}
      className={className}
    >
      <motion.div variants={item} className='h-full m-auto'>
        {children}
      </motion.div>
    </motion.div>
  );
};
