import { Box, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkProps as NextLinkProps } from 'next/link';
import { VFC } from 'react';

import { BaseLink } from './BaseLink';

type PrimaryLinkProps = ChakraLinkProps & NextLinkProps;

export const PrimaryLink: VFC<PrimaryLinkProps> = ({
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
      <Box as="span" position="relative" w="full" px={8}>
        <Box
          as="span"
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </Box>
        {children}
      </Box>
    </BaseLink>
  );
};
