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
      px={8}
      py={4}
      fontSize="xl"
      fontWeight="bold"
      minH={16}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      boxShadow="primary"
      textAlign="center"
      {...props}
    >
      <Box as="span" position="relative" w="full" px={8}>
        <Box as="span" position="absolute" right="0">
          <FontAwesomeIcon icon={faAngleRight} />
        </Box>
        {children}
      </Box>
    </BaseLink>
  );
};
