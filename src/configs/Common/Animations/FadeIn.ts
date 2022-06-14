export const FADE_IN_ANIMATION_OPTION = {
  variants: {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
    },
  },
  transition: { ease: 'linear', duration: 0.3, delay: 0.8 },
  initial: 'offscreen',
  whileInView: 'onscreen',
  viewport: {
    once: true,
  },
};
