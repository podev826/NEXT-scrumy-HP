import { Box, Text } from '@chakra-ui/react';
import {
  BaseImage,
  FadeInAnimation,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import React, { FC } from 'react';

export const RootService: FC = () => {
  return (
    <IdWrapper id="service">
      <ContentWrapper bgType="gray">
        <FadeInAnimation>
          <PrimaryTitle ja="わたしたちができること" en="Service" />
          <Box
            mt={{ base: 12, xl: 16 }}
            display="grid"
            gap={{ base: 6, xl: 10 }}
          >
            <IdWrapper id="service01" h="full">
              <Box
                as="section"
                bg="base.100"
                borderRadius={'32px'}
                px={{ base: 4, xl: 14 }}
                py={{ base: 9, xl: 16 }}
                display={{ xl: 'flex' }}
                alignItems={{ xl: 'center' }}
                h="full"
                gap={{ xl: 6 }}
              >
                <Box
                  display={{ base: 'flex', xl: 'none' }}
                  alignItems={{ base: 'center' }}
                  justifyContent={{ base: 'center' }}
                >
                  <Box w={{ base: '53px' }} mr={{ base: 4 }}>
                    <BaseImage
                      src="/images/root/root_service_number01.png"
                      width={196}
                      height={186}
                      alt="Service 01"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: '3.73vw', md: 'xl' }}
                    fontWeight="bold"
                    letterSpacing={0}
                  >
                    経営情報の管理も共有もこれ一つ
                  </Text>
                </Box>
                <Box>
                  <BaseImage
                    src="/images/root/root_service_image01.png"
                    width={1272}
                    height={666}
                  />
                </Box>
                <Box mt={{ base: 4, xl: 0 }} flexGrow={{ xl: 1 }}>
                  <Box
                    display={{ base: 'none', xl: 'flex' }}
                    alignItems={{ base: 'center', xl: 'flex-end' }}
                    justifyContent={{ base: 'center', xl: 'flex-start' }}
                    position="relative"
                    zIndex={'2'}
                  >
                    <Box
                      w={{ base: '53px', xl: '98px' }}
                      mr={{ base: 4, xl: 1 }}
                    >
                      <BaseImage
                        src="/images/root/root_service_number01.png"
                        width={196}
                        height={186}
                        alt="Service 01"
                      />
                    </Box>
                    <Text
                      fontSize={{ base: '3.73vw', md: 'xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      bg="base.100"
                    >
                      経営情報の管理も共有もこれ一つ
                    </Text>
                  </Box>
                  <Box pl={{ xl: '70px' }} mt={{ xl: 4 }}>
                    <Text
                      as="h3"
                      bg="main.100"
                      fontSize={{ base: '4.8vw', md: '2xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      textAlign="center"
                      whiteSpace={'nowrap'}
                      py={{ base: '6px' }}
                      pl={{ base: '4px', xl: 4 }}
                      pr={{ xl: 2 }}
                    >
                      法人データストレージ「Scrumy」
                    </Text>
                    <Text mt={{ base: 4 }}>
                      書類管理と権限管理を自動化することで、登記変更や株主総会の際に必要な情報共有をスムーズにセキュアに行うことができます。
                      <br />
                      ※中小～大企業様向け
                    </Text>
                    <Text
                      maxW={{ base: '280px', xl: '364px' }}
                      mx={{ base: 'auto', xl: 0 }}
                      mt={{ base: 5, xl: 7 }}
                    >
                      <PrimaryLink href="/contact" variant={'primary'} w="full">
                        問い合わせをする
                      </PrimaryLink>
                    </Text>
                  </Box>
                </Box>
              </Box>
            </IdWrapper>
            <Box
              display={'grid'}
              gap={{ base: 6, xl: 10 }}
              gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
            >
              <IdWrapper id="service02" h="full">
                <Box
                  as="section"
                  h="full"
                  bg="base.100"
                  borderRadius={'32px'}
                  px={{ base: 4, xl: 10 }}
                  pt={{ base: 9, xl: '44px' }}
                  pb={{ base: 9, xl: '60px' }}
                >
                  <Box
                    display="flex"
                    flexDirection={'column'}
                    maxW={{ xl: '404px' }}
                    mx={{ xl: 'auto' }}
                  >
                    <Box
                      display="flex"
                      alignItems={{ base: 'center', xl: 'flex-end' }}
                      justifyContent={{ base: 'center', xl: 'flex-start' }}
                      mt={{ xl: '-104px' }}
                      position="relative"
                      zIndex={'2'}
                    >
                      <Box
                        w={{ base: '53px', xl: '98px' }}
                        mr={{ base: 4, md: 2, xl: 1 }}
                      >
                        <BaseImage
                          src="/images/root/root_service_number02.png"
                          width={196}
                          height={186}
                          alt="Service 02"
                        />
                      </Box>
                      <Text
                        fontSize={{ base: '3.73vw', md: 'md', xl: 'xl' }}
                        fontWeight="bold"
                        letterSpacing={0}
                        bg="base.100"
                      >
                        格安・時短で会社設立が可能に
                      </Text>
                    </Box>
                    <Box order={{ xl: '-1' }}>
                      <BaseImage
                        src="/images/root/root_service_image02.png"
                        width={808}
                        height={610}
                      />
                    </Box>
                    <Box mt={{ xl: 4 }}>
                      <Text
                        as="h3"
                        bg="main.100"
                        fontSize={{ base: '4.8vw', md: 'lg', xl: '2xl' }}
                        fontWeight="bold"
                        letterSpacing={0}
                        textAlign="center"
                        py={{ base: '6px' }}
                        pl={{ base: '4px' }}
                      >
                        会社設立サポート「スクラム申請」
                      </Text>
                      <Text mt={{ base: 4, xl: 5 }}>
                        マイナポータルとの連携を前提とした本人申請を徹底的にサポートすることで、コストと時間を1/10に削減することができます。
                        <br />
                        ※起業家様向け
                      </Text>
                      <Text
                        maxW={{ base: '280px', xl: '284px' }}
                        mx={{ base: 'auto' }}
                        mt={{ base: 5, xl: 7 }}
                      >
                        <PrimaryLink
                          href="https://shinsei.scrumy.co.jp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant={'primary'}
                          w="full"
                        >
                          詳しくみる
                        </PrimaryLink>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </IdWrapper>
              <IdWrapper id="service03" h="full">
                <Box
                  as="section"
                  h="full"
                  bg="base.100"
                  borderRadius={'32px'}
                  px={{ base: 4, xl: 10 }}
                  pt={{ base: 9, xl: '44px' }}
                  pb={{ base: 9, xl: '60px' }}
                >
                  <Box
                    display="flex"
                    flexDirection={'column'}
                    maxW={{ xl: '404px' }}
                    mx={{ xl: 'auto' }}
                  >
                    <Box
                      display="flex"
                      alignItems={{ base: 'center', xl: 'flex-end' }}
                      justifyContent={{ base: 'center', xl: 'flex-start' }}
                      mt={{ xl: '-120px' }}
                      position="relative"
                      zIndex={'2'}
                    >
                      <Box
                        w={{ base: '53px', xl: '98px' }}
                        mr={{ base: 4, md: 2, xl: 1 }}
                        mb={{ xl: 8 }}
                      >
                        <BaseImage
                          src="/images/root/root_service_number03.png"
                          width={196}
                          height={186}
                          alt="Service 03"
                        />
                      </Box>
                      <Text
                        fontSize={{ base: '3.73vw', md: 'md', xl: 'xl' }}
                        fontWeight="bold"
                        letterSpacing={0}
                        bg="base.100"
                      >
                        現状把握からセキュリティ対策を明らかに
                      </Text>
                    </Box>
                    <Box order={{ xl: '-1' }}>
                      <BaseImage
                        src="/images/root/root_service_image03.png"
                        width={808}
                        height={610}
                      />
                    </Box>
                    <Box
                      mt={{ base: 4, md: 0, xl: 4 }}
                      position="relative"
                      zIndex={2}
                    >
                      <Text
                        as="h3"
                        bg="main.100"
                        fontSize={{ base: '4.8vw', md: 'lg', xl: '2xl' }}
                        fontWeight="bold"
                        letterSpacing={0}
                        textAlign="center"
                        py={{ base: '6px' }}
                      >
                        情報セキュリティ診断サービス
                      </Text>
                      <Text mt={{ base: 4, xl: 5 }}>
                        DXの第一ステップとして、情報セキュリティ診断サービスやコンサルティングサービス（ウェビナー含む）を行なっています。
                        <br />
                        ※中小～大企業様向け
                      </Text>
                      <Text
                        maxW={{ base: '280px', xl: '364px' }}
                        mx={{ base: 'auto' }}
                        mt={{ base: 5, xl: 7 }}
                      >
                        <PrimaryLink
                          href="/contact"
                          variant={'primary'}
                          w="full"
                        >
                          問い合わせをする
                        </PrimaryLink>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </IdWrapper>
            </Box>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
