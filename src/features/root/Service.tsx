import { Box, Text } from '@chakra-ui/react';
import {
  BaseImage,
  FadeInAnimation,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { LINKS } from 'configs';
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
                    SDGs時代の情報開示に最適解を
                  </Text>
                </Box>
                <Box>
                  <BaseImage
                    src="/images/root/root_service_image01.png"
                    width={1272}
                    height={666}
                  />
                </Box>
                <Box
                  mt={{ base: 4, xl: 0 }}
                  flexGrow={{ xl: 1 }}
                  maxW={{ xl: '512px' }}
                >
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
                      SDGs時代の情報開示に最適解を
                    </Text>
                  </Box>
                  <Box pl={{ xl: '70px' }} mt={{ xl: 4 }}>
                    <Text
                      as="h3"
                      bg="main.100"
                      fontSize={{ base: '4.2vw', md: '2xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      textAlign="center"
                      whiteSpace={'nowrap'}
                      py={{ base: '6px' }}
                      pl={{ base: '4px', xl: 4 }}
                      pr={{ xl: 2 }}
                    >
                      ESG情報開示戦略コンサル「Scrumy」
                    </Text>
                    <Text mt={{ base: 4 }}>
                      加速するESG投資への注目を背景として、企業のIR報告書等におけるESG情報（非財務情報）の重要性は日々高まっています。「Scrumy」では、国際基準であるGRIやSASBに準拠したESG情報開示戦略を一気通貫してサポートします。それにより機関投資家からのESGやSDGsに関する情報開示要求に対応でき、企業価値を高めることができます。
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
            <IdWrapper id="service02" h="full">
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
                      src="/images/root/root_service_number02.png"
                      width={196}
                      height={186}
                      alt="Service 02"
                    />
                  </Box>
                  <Text
                    fontSize={{ base: '3.73vw', md: 'xl' }}
                    fontWeight="bold"
                    letterSpacing={0}
                  >
                    格安・時短で会社設立が可能に
                  </Text>
                </Box>
                <Box>
                  <BaseImage
                    src="/images/root/root_service_image02-a.png"
                    width={1272}
                    height={666}
                  />
                </Box>
                <Box
                  mt={{ base: 4, xl: 0 }}
                  flexGrow={{ xl: 1 }}
                  maxW={{ xl: '512px' }}
                >
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
                        src="/images/root/root_service_number02.png"
                        width={196}
                        height={186}
                        alt="Service 02"
                      />
                    </Box>
                    <Text
                      fontSize={{ base: '3.73vw', md: 'xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      bg="base.100"
                    >
                      格安・時短で会社設立が可能に
                    </Text>
                  </Box>
                  <Box pl={{ xl: '70px' }} mt={{ xl: 4 }}>
                    <Text
                      as="h3"
                      bg="main.100"
                      fontSize={{ base: '4.2vw', md: '2xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      textAlign="center"
                      whiteSpace={'nowrap'}
                      py={{ base: '6px' }}
                      pl={{ base: '4px', xl: 4 }}
                      pr={{ xl: 2 }}
                    >
                      会社設立サポート「スクラム申請」
                    </Text>
                    <Text mt={{ base: 4 }}>
                      マイナポータルとの連携を前提とした本人申請を徹底的にサポートすることで、コストと時間を1/10に削減することができます。
                      <br />
                      ※起業家様向け
                    </Text>
                    <Text
                      maxW={{ base: '280px', xl: '364px' }}
                      mx={{ base: 'auto', xl: 0 }}
                      mt={{ base: 5, xl: 7 }}
                    >
                      <PrimaryLink
                        href={LINKS.external.scrum}
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
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
