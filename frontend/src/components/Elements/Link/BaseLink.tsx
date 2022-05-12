import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { VFC } from 'react';

type BaseLinkProps = ChakraLinkProps & NextLinkProps;

export const BaseLink: VFC<BaseLinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};
