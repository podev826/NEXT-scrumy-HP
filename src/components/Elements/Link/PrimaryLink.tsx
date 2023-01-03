import { Box, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

import { AngleRightIcon } from '../Icon';
import { BaseLink } from './BaseLink';

type PrimaryLinkProps = ChakraLinkProps & NextLinkProps;

export const PrimaryLink: FC<PrimaryLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <BaseLink
      bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
      href={href}
      px={{ base: 10, xl: 8 }}
      py={{ base: 3, xl: 4 }}
      fontSize={{ base: 'md', xl: 'xl' }}
      fontWeight="bold"
      minH={{ base: 12, xl: 16 }}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      boxShadow="primary"
      textAlign="center"
      {...props}
    >
      <Box as="span" position="relative" w="full" px={{ base: 6, xl: 8 }}>
        <Box
          as="span"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
        >
          <AngleRightIcon />
        </Box>
        {children}
      </Box>
    </BaseLink>
  );
};
