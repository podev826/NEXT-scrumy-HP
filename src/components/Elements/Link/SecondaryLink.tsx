import { Box, Flex, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkProps as NextLinkProps } from 'next/link';
import { VFC } from 'react';

import { BaseLink } from './BaseLink';

type SecondaryLinkProps = ChakraLinkProps & NextLinkProps;

export const SecondaryLink: VFC<SecondaryLinkProps> = ({
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
      textAlign="center"
      {...props}
    >
      <Flex
        as="span"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box as="span" mr={4}>
          {children}
        </Box>
        <FontAwesomeIcon icon={faAngleRight} />
      </Flex>
    </BaseLink>
  );
};