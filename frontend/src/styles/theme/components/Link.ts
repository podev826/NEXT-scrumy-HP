export const Link = {
  baseStyle: {
    display: 'inline-block',
    _hover: {
      textDecoration: 'none',
    },
  },
  variants: {
    primary: {
      color: 'base.100',
      bg: 'accent.100',
      _hover: {
        bg: 'accent.200',
      },
    },
    secondary: {
      color: 'base.100',
      bg: 'sub.100',
      _hover: {
        bg: 'sub.200',
      },
    },
    tertiary: {
      color: 'base.100',
      bg: 'accent.200',
      position: 'relative',
      overflow: 'hidden',
      _before: {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        bgGradient: 'linear(to-r,accent.200,accent.100,accent.300)',
        transitionProperty: 'common',
        transitionTimingFunction: 'ease-out',
        transitionDuration: 'fast',
      },
      _hover: {
        _before: {
          opacity: '0',
        },
      },
    },
  },
};
