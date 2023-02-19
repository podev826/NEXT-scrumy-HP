import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { FC } from 'react';

type BaseLinkProps = ChakraLinkProps & NextLinkProps;

export const BaseLink: FC<BaseLinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref replace={true}>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};
