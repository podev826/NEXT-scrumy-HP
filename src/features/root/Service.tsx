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
                    格安・時短な会社設立をサポート
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
                      格安・時短な会社設立をサポート
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
                      法人書類管理サービス「Scrumy」
                    </Text>
                    <Text mt={{ base: 4 }}>
                      法人にまつわる書類管理をスムーズにします。追加コストなしで登記変更も自由自在に。
                    </Text>
                    <Text
                      maxW={{ base: '280px', xl: '284px' }}
                      mx={{ base: 'auto', xl: 0 }}
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
                        サイバー攻撃からお守りします。
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
                        情報セキュリティ診断
                      </Text>
                      <Text mt={{ base: 4, xl: 5 }}>
                        当社エンジニアが貴社のシステムにおける、脆弱性を診断。
                        サイバー攻撃に対する対策等をご提供いたします。
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
                      mt={{ xl: '-104px' }}
                      position="relative"
                      zIndex={'2'}
                    >
                      <Box
                        w={{ base: '53px', xl: '98px' }}
                        mr={{ base: 4, md: 2, xl: 1 }}
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
                        セミナーやコンサルも承ります。
                      </Text>
                    </Box>
                    <Box order={{ xl: '-1' }}>
                      <BaseImage
                        src="/images/root/root_service_image03.png"
                        width={808}
                        height={610}
                      />
                    </Box>
                    <Box mt={{ base: 4, md: 0, xl: 4 }}>
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
                        教育DXプロジェクト推進コンサル
                      </Text>
                      <Text mt={{ base: 4, xl: 5 }}>
                        教育関係者の方々向けに、教育DXプロジェクト推進セミナー（ウェビナー）やコンサルティングサービスを行なっております。
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
