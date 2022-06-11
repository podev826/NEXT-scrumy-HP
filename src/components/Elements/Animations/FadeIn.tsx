import { FADE_IN_ANIMATION_OPTION } from 'configs';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

type FadeInAnimationProps = {
  children: ReactNode;
};

export const FadeInAnimation: FC<FadeInAnimationProps> = ({ children }) => {
  return (
    <motion.div
      variants={FADE_IN_ANIMATION_OPTION.variants}
      initial={FADE_IN_ANIMATION_OPTION.initial}
      whileInView={FADE_IN_ANIMATION_OPTION.whileInView}
      viewport={FADE_IN_ANIMATION_OPTION.viewport}
      transition={FADE_IN_ANIMATION_OPTION.transition}
    >
      {children}
    </motion.div>
  );
};
