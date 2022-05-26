import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

import { BaseLink } from './BaseLink';

type QuaternaryLinkProps = ChakraLinkProps &
  NextLinkProps & {
    active?: boolean;
  };

export const QuaternaryLink: FC<QuaternaryLinkProps> = ({
  href,
  active,
  children,
}) => {
  return (
    <BaseLink
      href={href}
      fontWeight={'bold'}
      color={active ? 'base.100' : 'sub.100'}
      bg={active ? 'sub.100' : 'base.100'}
      border="3px solid"
      borderColor={'sub.100'}
      py={2}
      px={6}
      cursor={active ? 'auto' : 'pointer'}
      pointerEvents={active ? 'none' : 'auto'}
      borderRadius="full"
      transitionProperty="all"
      transitionTimingFunction="ease-out"
      transitionDuration="fast"
      _hover={{
        color: 'base.100',
        bg: 'sub.100',
      }}
    >
      {children}
    </BaseLink>
  );
};
