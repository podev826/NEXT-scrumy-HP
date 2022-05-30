import { Flex, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

import { BaseLink } from './BaseLink';

type TertiaryLinkProps = ChakraLinkProps & NextLinkProps;

export const TertiaryLink: FC<TertiaryLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <BaseLink
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
      {...props}
    >
      <Flex
        as="span"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {children}
      </Flex>
    </BaseLink>
  );
};
