import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { SERVICE_LIST } from 'configs';
import React, { FC } from 'react';

export const RootService: FC = () => {
  return (
    <IdWrapper id="service">
      <ContentWrapper bg="white">
        <FadeInAnimation>
          <PrimaryTitle en="Service" />
          <Flex
            mt={{ base: 12, xl: 16 }}
            display={'flex'}
            flexWrap={{ base: 'wrap', md: 'wrap' }}
            justifyContent="space-around"
            rowGap="5vh"
          >
            {SERVICE_LIST.map((item) => (
              <IdWrapper id="service01" key={item.title} h="full">
                <Box
                  borderRadius={'32px'}
                  border="1px"
                  borderColor="gray.100"
                  px={{ base: 4, md: 7 }}
                  py={{ base: 0, md: 6 }}
                  pb={{ base: 5, md: '' }}
                  display={{ xl: 'block' }}
                  alignItems={{ xl: 'center' }}
                  h="full"
                  width={'80vw'}
                  shadow="lg"
                  mx="auto"
                >
                  <Box
                    mt={{ base: 4, xl: 0 }}
                    display={{ base: '', md: 'flex' }}
                  >
                    <Image
                      src={item.image}
                      width={{ base: '40vw', md: '23vw', xl: '300' }}
                      height={{ base: '40vw', md: '23vw', xl: '300' }}
                      alt=""
                      mr={{ md: '2vw' }}
                      mx="auto"
                      my="auto"
                    />
                    <Box mt={{ xl: 4 }}>
                      <Text
                        as="h3"
                        bg="main.100"
                        color="white"
                        fontSize={{ md: '2vw', xl: '20pt' }}
                        fontWeight="bold"
                        letterSpacing={0}
                        textAlign="center"
                        whiteSpace={'nowrap'}
                        py={{ base: '6px' }}
                        pl={{ base: '4px', xl: 4 }}
                        pr={{ xl: 2 }}
                        display={{ base: 'none', md: 'block' }}
                      >
                        {item.title}
                      </Text>
                      <Text
                        as="h3"
                        bg="main.100"
                        color="white"
                        fontSize={'4vw'}
                        fontWeight="bold"
                        letterSpacing={0}
                        textAlign="center"
                        whiteSpace={'nowrap'}
                        py={{ base: '6px' }}
                        pl={{ base: '4px', xl: 4 }}
                        pr={{ xl: 2 }}
                        display={{ base: 'block', md: 'none' }}
                      >
                        {item.title_ja}
                      </Text>
                      <Text
                        as="h3"
                        bg="main.100"
                        color="white"
                        fontSize={'4vw'}
                        fontWeight="bold"
                        letterSpacing={0}
                        textAlign="center"
                        whiteSpace={'nowrap'}
                        py={{ base: '6px' }}
                        pl={{ base: '4px', xl: 4 }}
                        pr={{ xl: 2 }}
                        display={{ base: 'block', md: 'none' }}
                        mt="2"
                      >
                        {item.title_en}
                      </Text>
                      <Text mt={{ base: 4 }} fontSize="md">
                        {item.text1}
                        <br />
                        {item.text2}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </IdWrapper>
            ))}
          </Flex>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
