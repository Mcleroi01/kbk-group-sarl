import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const MotionFadeIn: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 16, x: 0 };
      case 'down':
        return { y: -16, x: 0 };
      case 'left':
        return { x: 16, y: 0 };
      case 'right':
        return { x: -16, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionPage: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
