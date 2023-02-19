import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
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
      <ContentWrapper>
        <FadeInAnimation>
          <PrimaryTitle en="Team" />
          <Box mt={{ base: 8, md: 12, xl: 16 }} px={{ xl: 14 }}>
            <Accordion
              allowToggle
              allowMultiple
              w={'full'}
              display={{ base: 'block', md: 'grid' }}
              pb="1px"
              gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
              rowGap={{ md: '3vw' }}
              columnGap={{ md: '2vw', xl: '5vw' }}
              justifyItems={'center'}
            >
              {MEMBER_LIST.map((item) => (
                <AccordionItem
                  key={item.name}
                  w={{
                    base: '60vw',
                    md: '340px',
                    lg: '410px',
                    xl: '500px',
                    '2xl': '550px',
                  }}
                  _expanded={{ h: '500' }}
                  overflow={'hidden'}
                  shadow="lg"
                  borderRadius={{ base: '20px', sm: '30px' }}
                  mb={{ base: 'auto', xl: 'auto' }}
                  mt={{ base: '7', lg: 0 }}
                  mx={{ base: 'auto', lg: 0 }}
                >
                  {({ isExpanded }) => (
                    <Box>
                      <Box
                        w="full"
                        display={{ base: '', xl: 'flex' }}
                        alignContent={'center'}
                      >
                        <AccordionButton
                          p={0}
                          _hover={{ bg: 'base.100' }}
                          _focus={{ outline: 'none' }}
                        >
                          <Box px={{ base: 3, xl: 4 }} w="full">
                            <Box
                              py={{ base: 3, md: 4 }}
                              display={{ base: 'flex' }}
                              flexDirection="column"
                              alignItems={'flex-start'}
                            >
                              <Box display={'inline-block'}>
                                <Text
                                  fontWeight="bold"
                                  fontSize={{
                                    base: '2.2vw',
                                    md: 'sm',

                                    lg: 'md',
                                  }}
                                  pl="2"
                                >
                                  {item.position}
                                </Text>
                              </Box>
                              <Box
                                display={'flex'}
                                mt={3}
                                ml="3"
                                position="relative"
                                alignItems="flex-end"
                              >
                                <Text
                                  fontSize={{
                                    base: '3.5vw',
                                    sm: '2.8vw',

                                    md: '20px',
                                    lg: '25px',
                                    xl: '25px',
                                  }}
                                  fontWeight="bold"
                                  mr={{ base: '2vw', md: '5' }}
                                >
                                  {item.name}
                                </Text>
                                <Text
                                  fontWeight="bold"
                                  fontSize={{
                                    base: '2.8vw',
                                    sm: '2.4vw',

                                    md: '15px',
                                    lg: '20px',
                                    xl: '22px',
                                  }}
                                >
                                  {item.name_en}
                                </Text>
                                <Box
                                  fontSize={{ base: 14, sm: 'xl', xl: '2xl' }}
                                  color={'accent.100'}
                                  position="absolute"
                                  top={{ base: '2.5vw', sm: 2, md: 3 }}
                                  left={{
                                    base: '48vw',

                                    sm: '50vw',
                                    md: '270px',
                                    lg: '340px',
                                    xl: '430px',
                                    '2xl': '470px',
                                  }}
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
                      <AccordionPanel
                        pb={8}
                        px={{ base: 7, xl: 8 }}
                        shadow="md"
                      >
                        <Text
                          fontSize={{
                            base: '2.8vw',
                            sm: '2.4vw',
                            md: '1.9vw',
                            lg: '1.4vw',
                          }}
                        >
                          {item.description}
                        </Text>
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
