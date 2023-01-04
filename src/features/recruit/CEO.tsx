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
} from 'components/Elements';
import { MEMBER_LIST } from 'configs';
import { FC } from 'react';

export const RecruitCEO: FC = () => {
  return (
    <Box pl={{ base: 6, md: 5, lg: 12, xl: 20 }}>
      <FadeInAnimation>
        <Accordion allowToggle>
          <AccordionItem
            key={MEMBER_LIST[0].name}
            w={{ base: '350px', xl: '370px' }}
            _last={{
              borderBottomWidth: 0,
            }}
          >
            {({ isExpanded }) => (
              <Box w="full" borderBottomRadius={{ base: '16px' }}>
                <BaseImage
                  src={MEMBER_LIST[0].image}
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
                          {MEMBER_LIST[0].position}
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
                          {MEMBER_LIST[0].name}
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
                  <Text fontSize={{ base: 'lg', xl: 'xl' }} w="full">
                    {MEMBER_LIST[0].description}
                  </Text>
                </AccordionPanel>
              </Box>
            )}
          </AccordionItem>
        </Accordion>
      </FadeInAnimation>
    </Box>
  );
};
