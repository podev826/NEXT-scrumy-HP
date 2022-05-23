import { Box, Flex } from '@chakra-ui/react';
import { AngleRightIcon } from 'components/Elements';
import { FC } from 'react';

export const ContactButton: FC = () => {
  return (
    <Box
      as="button"
      type="submit"
      px={{ base: 10, xl: 8 }}
      py={{ base: 3, xl: 4 }}
      fontSize={{ base: 'md', xl: 'xl' }}
      fontWeight="bold"
      minH={{ base: 14, xl: '72px' }}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      boxShadow="primary"
      textAlign="center"
      w="full"
      color="base.100"
      bg="accent.200"
      position="relative"
      overflow="hidden"
      _before={{
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
      }}
      _hover={{
        opacity: '1',
        _before: {
          opacity: '0',
        },
      }}
      _focus={{
        opacity: '1',
        boxShadow: 'none',
        _before: {
          opacity: '0',
        },
      }}
      _focusVisible={{
        outlineColor: 'transparent',
      }}
    >
      <Flex
        as="span"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box as="span" mr={4}>
          お問い合わせはこちら
        </Box>
        <AngleRightIcon />
      </Flex>
    </Box>
  );
};
