import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import {
  CircleMinusIcon,
  CirclePlusIcon,
  FadeInAnimation,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { MEMBER_LIST } from 'configs';
import { FC } from 'react';

export const AboutMember: FC = () => {
  return (
    <IdWrapper id="member">
      <ContentWrapper bgType="white">
        <FadeInAnimation>
          <PrimaryTitle en="Team" />
          <Box
            mt={{ base: 8, md: 12, xl: 16 }}
            pl={{ xl: 14 }}
            overflowX={{ base: 'scroll', xl: 'visible' }}
          >
            <Accordion
              allowToggle
              allowMultiple
              w={{ base: 'calc((240px * 6) + (12px * 5))', xl: 'full' }}
              display={{ base: 'flex', xl: 'grid' }}
              gridTemplateColumns={{ xl: 'repeat(2, 1fr)' }}
              rowGap={{ base: 3, md: 4, xl: '5vw' }}
              columnGap={{ base: 3, md: 4, xl: '5vw' }}
              overflowX={{ base: 'scroll', xl: 'visible' }}
            >
              {MEMBER_LIST.map((item) => (
                <AccordionItem
                  key={item.name}
                  w={{ base: '240px', xl: 'full' }}
                  overflow={'hidden'}
                  shadow="md"
                  borderRadius="30px"
                >
                  {({ isExpanded }) => (
                    <Box>
                      <Box w="full" display={{ base: '', xl: 'flex' }}>
                        <Box>
                          <Image src={item.image} width="300px" alt="" />
                        </Box>
                        <AccordionButton
                          p={0}
                          _hover={{ bg: 'base.100' }}
                          _focus={{ outline: 'none' }}
                        >
                          <Box px={{ base: 4, xl: 4 }} w="full">
                            <Box
                              py={{ base: 6, xl: 5 }}
                              display={{ base: 'flex' }}
                              flexDirection="column"
                              alignItems={'flex-start'}
                            >
                              <Box display={'inline-block'}>
                                <Text
                                  fontWeight="bold"
                                  fontSize={{ base: 'sm', xl: 'md' }}
                                >
                                  {item.position}
                                </Text>
                              </Box>
                              <Box display={'inline-block'} mt={3}>
                                <Text
                                  fontWeight="bold"
                                  fontSize={{ base: 'sm', lg: 'xl', xl: '2vw' }}
                                >
                                  {item.name_en}
                                </Text>
                              </Box>
                              <Box
                                w="full"
                                display={{ base: 'flex' }}
                                justifyContent={{ base: 'space-between' }}
                                alignItems={{ base: 'flex-end' }}
                                flexGrow={{ xl: 1 }}
                                mt={{ base: 3 }}
                              >
                                <Text
                                  fontSize={{ base: 'lg', xl: 'xl' }}
                                  fontWeight="bold"
                                >
                                  {item.name}
                                </Text>
                                <Box
                                  fontSize={{ base: 'xl', xl: '2xl' }}
                                  color={'accent.100'}
                                  position="relative"
                                  top="5"
                                  left="1"
                                  transitionProperty="all"
                                  transitionTimingFunction="linear"
                                  transitionDuration="fast"
                                  _hover={{
                                    opacity: 0.7,
                                  }}
                                >
                                  {isExpanded ? (
                                    <CircleMinusIcon />
                                  ) : (
                                    <CirclePlusIcon />
                                  )}
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </AccordionButton>
                      </Box>
                      <AccordionPanel pb={8} px={{ base: 7, xl: 8 }}>
                        <Text>{item.description}</Text>
                      </AccordionPanel>
                    </Box>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
