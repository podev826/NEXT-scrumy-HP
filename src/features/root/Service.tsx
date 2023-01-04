import { Box, Text } from '@chakra-ui/react';
import { BaseImage, FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import React, { FC } from 'react';

export const RootService: FC = () => {
  return (
    <IdWrapper id="service">
      <ContentWrapper bg="white">
        <FadeInAnimation>
          <PrimaryTitle en="Service" />
          <Box
            mt={{ base: 12, xl: 16 }}
            display={{ md: 'flex' }}
            justifyContent="space-around"
          >
            <IdWrapper id="service01" h="full">
              <Box
                borderRadius={'32px'}
                px={{ base: 4, xl: 14 }}
                py={{ base: 9, xl: 16 }}
                display={{ xl: 'block' }}
                alignItems={{ xl: 'center' }}
                h="full"
                width={{ sm: '80vw', md: '42vw' }}
                shadow="md"
                mx="auto"
              >
                <Box
                  mt={{ base: 4, xl: 0 }}
                  maxW={{ xl: '512px' }}
                  justifyContent="center"
                >
                  <BaseImage
                    src="/images/root/root_service_image01.png" //ここを新しいものに差し替える
                    width={1272}
                    height={666}
                  />
                  <Box mt={{ xl: 4 }}>
                    <Text
                      as="h3"
                      bg="main.100"
                      color="white"
                      fontSize={{ base: '4.2vw', md: 'xl', lg: '2xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      textAlign="center"
                      whiteSpace={'nowrap'}
                      py={{ base: '6px' }}
                      pl={{ base: '4px', xl: 4 }}
                      pr={{ xl: 2 }}
                    >
                      サステナビリティ経営戦略支援
                    </Text>
                    <Text mt={{ base: 4 }}>
                      Scrumyにはサステナビリティ学者をはじめとした各種専門人材が在籍しており、最新のエビデンスや知見に基づいたESGコンサルティングを提供いたします。
                    </Text>
                  </Box>
                </Box>
              </Box>
            </IdWrapper>
            <IdWrapper id="service02" h="full">
              <Box
                borderRadius={'32px'}
                px={{ base: 4, xl: 14 }}
                py={{ base: 9, xl: 16 }}
                display={{ xl: 'block' }}
                alignItems={{ xl: 'center' }}
                h="full"
                width={{ sm: '80vw', md: '42vw' }}
                shadow="md"
                mx="auto"
              >
                <Box
                  mt={{ base: 4, xl: 0 }}
                  maxW={{ xl: '512px' }}
                  justifyContent="center"
                >
                  <BaseImage
                    src="/images/root/root_service_image01.png" //ここを新しいものに差し替える
                    width={1272}
                    height={666}
                  />
                  <Box mt={{ xl: 4 }}>
                    <Text
                      as="h3"
                      bg="main.100"
                      color="white"
                      fontSize={{ base: '4.2vw', md: 'xl', lg: '2xl' }}
                      fontWeight="bold"
                      letterSpacing={0}
                      textAlign="center"
                      whiteSpace={'nowrap'}
                      py={{ base: '6px' }}
                      pl={{ base: '4px', xl: 4 }}
                      pr={{ xl: 2 }}
                    >
                      サステナブルファイナンスDB
                    </Text>
                    <Text mt={{ base: 4 }}>
                      サステナビリティ会計基準「SASB/ISSB」に準拠し、財務情報と紐づくサステナビリティ情報を可視化することで、企業と投資家のエンゲージメントを実現するため情報基盤を提供します。
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
