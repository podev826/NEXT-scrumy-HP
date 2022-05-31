export const Link = {
  baseStyle: {
    display: 'inline-block',
    _hover: {
      textDecoration: 'none',
      opacity: '0.7',
    },
    _focus: {
      boxShadow: 'tertiary',
    },
  },
  variants: {
    primary: {
      color: 'base.100',
      bg: 'accent.100',
      _hover: {
        boxShadow: 'none',
        bg: 'accent.200',
        opacity: '1',
      },
      _focus: {
        boxShadow: 'none',
        bg: 'accent.200',
        opacity: '1',
      },
    },
    secondary: {
      color: 'base.100',
      bg: 'sub.100',
      _hover: {
        boxShadow: 'none',
        bg: 'sub.200',
        opacity: '1',
      },
      _focus: {
        boxShadow: 'none',
        bg: 'sub.200',
        opacity: '1',
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
        opacity: '1',
        boxShadow: 'none',
        _before: {
          opacity: '0',
        },
      },
      _focus: {
        opacity: '1',
        boxShadow: 'none',
        _before: {
          opacity: '0',
        },
      },
    },
  },
};
