import { Box, Flex, Grid, Image, Spacer, Text } from '@chakra-ui/react';
import { BaseLink } from 'components/Elements';
import { SECONDARY_NAV } from 'configs';
import { FC } from 'react';

import { FooterNavContentPc, FooterNavContentSp } from './FooterNavContent';

export const Footer: FC = () => {
  return (
    <Box as="footer" bg="sub.100" color="base.100">
      <Box
        maxW={1440}
        px={{ base: 6, md: 10, lg: 16, xl: 24 }}
        pt={{ base: 16, md: 20, xl: 24 }}
        pb={{ base: 3, xl: 3 }}
        mx="auto"
      >
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Box>
            <Text fontWeight="bold" fontSize={{ base: 'md', xl: 'xl' }}>
              株式会社Scrumy
            </Text>
            <Box as="address" fontSize={{ base: 'sm', xl: 'md' }} mt={3}>
              <Text>〒104-0061</Text>
              <Text>
                <Box as="span" display={{ base: 'inline-block', xl: 'block' }}>
                  東京都中央区銀座1丁目
                </Box>
                <Box as="span" display={{ base: 'inline-block', xl: 'block' }}>
                  22番地11号2階
                </Box>
              </Text>
              <Text mt={{ base: 1, xl: '6px' }}>Mail：info@scrumy.co.jp</Text>
            </Box>
            <Text
              fontSize="sm"
              fontWeight="extrabold"
              mt={3}
              display={{ base: 'none', xl: 'block' }}
              lang="en"
            >
              <BaseLink href="/privacy-policy">privacy policy</BaseLink>
            </Text>
          </Box>
          <Spacer />
          <Box
            display={{ base: 'flex', xl: 'none' }}
            flexDirection="column"
            justifyContent="cent"
            mt={{ md: 2 }}
          >
            <Flex
              fontSize="sm"
              fontWeight="bold"
              flexWrap="wrap"
              columnGap={{ base: 8, sm: 5 }}
              rowGap={3}
              mt={{ base: 8, md: 0 }}
            >
              <Grid gap={3}>
                <FooterNavContentSp content={SECONDARY_NAV.top} />
                <FooterNavContentSp content={SECONDARY_NAV.news} />
              </Grid>
              <Grid gap={3}>
                <FooterNavContentSp content={SECONDARY_NAV.about} />
                <FooterNavContentSp content={SECONDARY_NAV.recruit} />
              </Grid>
              <Grid gap={3}>
                <FooterNavContentSp content={SECONDARY_NAV.privacyPolicy} />
              </Grid>
            </Flex>
          </Box>
          <Box display={{ base: 'none', xl: 'block' }}>
            <Flex columnGap={{ xl: 10, '2xl': 16 }}>
              <FooterNavContentPc content={SECONDARY_NAV.top} />
              <FooterNavContentPc content={SECONDARY_NAV.about} />
              <FooterNavContentPc content={SECONDARY_NAV.news} />
              <FooterNavContentPc content={SECONDARY_NAV.recruit} />
            </Flex>
          </Box>
          <Spacer />
          <Flex
            justifyContent="space-around"
            flexDirection={{ base: 'row', md: 'column' }}
            gap={{ base: 10, md: 3, xl: 10 }}
            display={'flex'}
            mt={{ base: 8, md: 0 }}
          >
            <Image
              src="/images/common/pri.png"
              width={{ base: 150, xl: 250 }}
              height={{ base: 57, xl: 94 }}
              alt=""
            />

            <Image
              src="/images/common/sasb.png"
              width={{ base: 150, xl: 250 }}
              height={{ base: 57, xl: 94 }}
              alt=""
            />
          </Flex>
        </Flex>
        <Text
          fontSize="xs"
          textAlign={{ md: 'center' }}
          mt={{ base: 12, xl: '88' }}
        >
          <small lang="en">©︎ 2021-2023 Scrumy Inc. All Rights Reserved</small>
        </Text>
      </Box>
    </Box>
  );
};
