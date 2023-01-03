import { Box, Text } from '@chakra-ui/react';
import {
  BaseImage,
  FadeInAnimation,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import React, { FC } from 'react';

export const RootRecruit: FC = () => {
  return (
    <IdWrapper id="recruit">
      <ContentWrapper bgType="gray">
        <FadeInAnimation>
          <PrimaryTitle en="Join us" />
          <Box
            mt={{ base: 10, xl: 0 }}
            px={{ xl: 14 }}
            display="flex"
            flexDirection={{ base: 'column', xl: 'row' }}
            alignItems={'flex-end'}
            gap={{ base: 6, xl: 10 }}
          >
            <Box w={{ xl: 'calc(100% - 57.117%)' }} mt={{ xl: 16 }} mx="auto">
              <Text fontWeight={'bold'} fontSize={{ xl: '2xl' }}>
                私たちと一緒にSDGs時代の経営基盤を作り上げてくれる仲間を募集しております。
              </Text>
              <Text mt={{ base: 6, xl: 8 }}>
                <PrimaryLink href="/recruit" variant={'primary'} w="full">
                  採用についてはこちら
                </PrimaryLink>
              </Text>
            </Box>
            <Box w={{ xl: '57.117%' }} order={{ base: '-1', xl: 0 }}>
              <BaseImage
                src="/images/root/root_recruit_image01.png"
                width={1252}
                height={536}
                alt=""
              />
            </Box>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
