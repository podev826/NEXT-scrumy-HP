import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { AngleDownIcon, AngleUpIcon } from 'components/Elements';
import { useState } from 'react';
import { useMenu } from 'react-instantsearch-hooks-web';

export const CustomMenu = (props: any) => {
  const { refine } = useMenu(props);

  const [activeCategory, setActiveCategory] = useState('');
  const handleClick = (value: string): void => {
    setActiveCategory(value);
    refine(value);
  };

  return (
    <>
      <Box mt={4} display={{ xl: 'none' }}>
        <Accordion allowToggle allowMultiple>
          <AccordionItem
            bg="base.100"
            overflow="hidden"
            border="2px solid"
            borderColor={'sub.100'}
            borderRadius={'32px'}
            p={0}
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  px={7}
                  py={2}
                  minH={12}
                  _hover={{
                    bg: 'auto',
                  }}
                >
                  <Box flex="1" textAlign="left" fontWeight={'bold'}>
                    {activeCategory === ''
                      ? 'All'
                      : activeCategory === 'information'
                      ? 'お知らせ'
                      : activeCategory === 'press-release'
                      ? 'プレスリリース'
                      : activeCategory === 'seminar'
                      ? 'セミナー'
                      : activeCategory === 'e-book'
                      ? 'eBOOK'
                      : null}
                  </Box>
                  <Box>{isExpanded ? <AngleUpIcon /> : <AngleDownIcon />}</Box>
                </AccordionButton>
                <AccordionPanel p={0}>
                  {activeCategory !== '' ? (
                    <Box
                      as="button"
                      onClick={() => handleClick('')}
                      px={7}
                      w="full"
                      minH={12}
                      display="grid"
                      alignItems={'center'}
                      fontWeight="bold"
                      textAlign={'left'}
                      _hover={{
                        color: 'base.100',
                        backgroundColor: 'sub.200',
                      }}
                    >
                      All
                    </Box>
                  ) : null}
                  {activeCategory !== 'information' ? (
                    <Box
                      as="button"
                      onClick={() => handleClick('information')}
                      px={7}
                      w="full"
                      minH={12}
                      display="grid"
                      alignItems={'center'}
                      fontWeight="bold"
                      textAlign={'left'}
                      _hover={{
                        color: 'base.100',
                        backgroundColor: 'sub.200',
                      }}
                    >
                      お知らせ
                    </Box>
                  ) : null}
                  {activeCategory !== 'press-release' ? (
                    <Box
                      as="button"
                      onClick={() => handleClick('press-release')}
                      px={7}
                      w="full"
                      minH={12}
                      display="grid"
                      alignItems={'center'}
                      fontWeight="bold"
                      textAlign={'left'}
                      _hover={{
                        color: 'base.100',
                        backgroundColor: 'sub.200',
                      }}
                    >
                      プレスリリース
                    </Box>
                  ) : null}
                  {activeCategory !== 'seminar' ? (
                    <Box
                      as="button"
                      onClick={() => handleClick('seminar')}
                      px={7}
                      w="full"
                      minH={12}
                      display="grid"
                      alignItems={'center'}
                      fontWeight="bold"
                      textAlign={'left'}
                      _hover={{
                        color: 'base.100',
                        backgroundColor: 'sub.200',
                      }}
                    >
                      セミナー
                    </Box>
                  ) : null}
                  {activeCategory !== 'e-book' ? (
                    <Box
                      as="button"
                      onClick={() => handleClick('e-book')}
                      px={7}
                      w="full"
                      minH={12}
                      display="grid"
                      alignItems={'center'}
                      fontWeight="bold"
                      textAlign={'left'}
                      _hover={{
                        color: 'base.100',
                        backgroundColor: 'sub.200',
                      }}
                    >
                      eBOOK
                    </Box>
                  ) : null}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
      <Box
        as="ul"
        display={{ base: 'none', xl: 'flex' }}
        alignItems={{ xl: 'center' }}
        justifyContent={{ xl: 'space-between' }}
        flexBasis={{ xl: 'calc(100% - 264px)' }}
      >
        <Box as="li">
          <Box
            as="button"
            onClick={() => handleClick('')}
            fontWeight={'bold'}
            color={activeCategory === '' ? 'base.100' : 'sub.100'}
            bg={activeCategory === '' ? 'sub.100' : 'base.100'}
            border="3px solid"
            borderColor={'sub.100'}
            py={2}
            px={6}
            cursor={activeCategory === '' ? 'auto' : 'pointer'}
            pointerEvents={activeCategory === '' ? 'none' : 'auto'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
          >
            All
          </Box>
        </Box>
        <Box as="li">
          <Box
            as="button"
            onClick={() => handleClick('information')}
            fontWeight={'bold'}
            color={activeCategory === 'information' ? 'base.100' : 'sub.100'}
            bg={activeCategory === 'information' ? 'sub.100' : 'base.100'}
            border="3px solid"
            borderColor={'sub.100'}
            py={2}
            px={6}
            cursor={activeCategory === 'information' ? 'auto' : 'pointer'}
            pointerEvents={activeCategory === 'information' ? 'none' : 'auto'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
          >
            お知らせ
          </Box>
        </Box>
        <Box as="li">
          <Box
            as="button"
            onClick={() => handleClick('press-release')}
            fontWeight={'bold'}
            color={activeCategory === 'press-release' ? 'base.100' : 'sub.100'}
            bg={activeCategory === 'press-release' ? 'sub.100' : 'base.100'}
            border="3px solid"
            borderColor={'sub.100'}
            py={2}
            px={6}
            cursor={activeCategory === 'press-release' ? 'auto' : 'pointer'}
            pointerEvents={activeCategory === 'press-release' ? 'none' : 'auto'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
          >
            プレスリリース
          </Box>
        </Box>
        <Box as="li">
          <Box
            as="button"
            onClick={() => handleClick('seminar')}
            fontWeight={'bold'}
            color={activeCategory === 'seminar' ? 'base.100' : 'sub.100'}
            bg={activeCategory === 'seminar' ? 'sub.100' : 'base.100'}
            border="3px solid"
            borderColor={'sub.100'}
            py={2}
            px={6}
            cursor={activeCategory === 'seminar' ? 'auto' : 'pointer'}
            pointerEvents={activeCategory === 'seminar' ? 'none' : 'auto'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
          >
            セミナー
          </Box>
        </Box>
        <Box as="li">
          <Box
            as="button"
            onClick={() => handleClick('e-book')}
            fontWeight={'bold'}
            color={activeCategory === 'e-book' ? 'base.100' : 'sub.100'}
            bg={activeCategory === 'e-book' ? 'sub.100' : 'base.100'}
            border="3px solid"
            borderColor={'sub.100'}
            py={2}
            px={6}
            cursor={activeCategory === 'e-book' ? 'auto' : 'pointer'}
            pointerEvents={activeCategory === 'e-book' ? 'none' : 'auto'}
            borderRadius="full"
            transitionProperty="all"
            transitionTimingFunction="ease-out"
            transitionDuration="fast"
            _hover={{
              color: 'base.100',
              bg: 'sub.100',
            }}
          >
            eBOOK
          </Box>
        </Box>
      </Box>
    </>
  );
};
