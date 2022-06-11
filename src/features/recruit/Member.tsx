import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  BaseImage,
  CircleMinusIcon,
  CirclePlusIcon,
  FadeInAnimation,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { MEMBER_LIST } from 'configs';
import { FC } from 'react';

export const RecruitMember: FC = () => {
  return (
    <IdWrapper id="member">
      <ContentWrapper bgType="gray">
        <FadeInAnimation>
          <PrimaryTitle ja="メンバー" en="Member" />
          <Box
            mt={{ base: 8, md: 12, xl: 16 }}
            pl={{ xl: 14 }}
            overflowX={{ base: 'scroll' }}
          >
            <Accordion
              allowToggle
              allowMultiple
              w={{ base: 'calc((240px * 6) + (12px * 5))', xl: 'full' }}
              display={{ base: 'flex', xl: 'grid' }}
              gridTemplateColumns={{ xl: 'repeat(3, 1fr)' }}
              rowGap={{ base: 3, md: 4, xl: 14 }}
              columnGap={{ base: 3, md: 4, xl: '52px' }}
              overflowX={{ base: 'scroll' }}
            >
              {MEMBER_LIST.map((item) => (
                <AccordionItem
                  key={item.name}
                  w={{ base: '240px', xl: 'full' }}
                  overflow={'hidden'}
                  _last={{
                    borderBottomWidth: 0,
                  }}
                >
                  {({ isExpanded }) => (
                    <Box
                      w="full"
                      bg="base.100"
                      borderBottomRadius={{ base: '16px' }}
                    >
                      <BaseImage
                        src={item.image}
                        width={726}
                        height={726}
                        alt=""
                      />
                      <AccordionButton
                        p={0}
                        _hover={{ bg: 'base.100' }}
                        _focus={{ outline: 'none' }}
                      >
                        <Box px={{ base: 7, xl: 8 }} w="full">
                          <Box
                            py={{ base: 6, xl: 5 }}
                            display={{ base: 'flex' }}
                            flexDirection="column"
                            alignItems={'flex-start'}
                          >
                            <Box bg="sub.100" display={'inline-block'} px={3}>
                              <Text
                                color={'base.100'}
                                fontWeight="bold"
                                fontSize={{ base: 'sm', xl: 'md' }}
                                lang="en"
                              >
                                {item.position}
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
                                display="flex"
                                alignItems={'flex-end'}
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
