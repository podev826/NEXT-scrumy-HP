import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { BaseImage, BaseLink } from 'components/Elements';
import { FC } from 'react';

import { HeaderModal } from './HeaderModal';
import { HeaderNav } from './HeaderNav';

export const Header: FC = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={10}
      left={0}
      right={0}
      zIndex="sticky"
    >
      <Box maxW={1440} px={{ base: 6, md: 10, lg: 16, xl: 24 }} mx="auto">
        <Flex
          bg="base.100"
          color="sub.100"
          px={{ base: 7, md: 10, xl: 14 }}
          py={{ base: 2, md: 3, xl: '14px' }}
          borderRadius="16"
          alignItems="center"
        >
          <Text
            as="h1"
            fontSize={0}
            w={{ base: '60px', md: '120px', xl: '180px' }}
          >
            <BaseLink href="/">
              <BaseImage
                src="/images/common/common_logo.svg"
                width={180}
                height={55}
                alt="Scrumy"
              />
            </BaseLink>
          </Text>
          <Spacer />
          <Flex alignItems="center" gap={14}>
            <Box display={{ base: 'none', xl: 'block' }}>
              <HeaderNav />
            </Box>
            <HeaderModal />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
