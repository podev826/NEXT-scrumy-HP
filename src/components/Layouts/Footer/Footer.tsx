import { Box, Flex, Grid, Spacer, Text } from '@chakra-ui/react';
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
        pb={{ base: 20, xl: 3 }}
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
            justifyContent="flex-end"
          >
            <Flex
              fontSize="sm"
              fontWeight="bold"
              flexWrap="wrap"
              columnGap={8}
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
                <FooterNavContentSp content={SECONDARY_NAV.service} />
                <FooterNavContentSp content={SECONDARY_NAV.privacyPolicy} />
              </Grid>
            </Flex>
          </Box>
          <Box display={{ base: 'none', xl: 'block' }}>
            <Flex columnGap={{ xl: 10, '2xl': 16 }}>
              <FooterNavContentPc content={SECONDARY_NAV.top} />
              <FooterNavContentPc content={SECONDARY_NAV.about} />
              <FooterNavContentPc content={SECONDARY_NAV.service} />
              <FooterNavContentPc content={SECONDARY_NAV.news} />
              <FooterNavContentPc content={SECONDARY_NAV.recruit} />
            </Flex>
          </Box>
        </Flex>
        <Text
          fontSize="xs"
          textAlign={{ md: 'center' }}
          mt={{ base: 12, xl: '88' }}
        >
          <small lang="en">©︎ 2021 Scrumy. All Rights Reserved</small>
        </Text>
      </Box>
    </Box>
  );
};
