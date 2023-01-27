import { Accordion, AccordionItem, Box, Text } from '@chakra-ui/react';
import { NEWS_CATEGORIES } from 'configs';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { HitsProps, useHits } from 'react-instantsearch-hooks-web';

import { BaseAccordionButton, BaseAccordionPanel } from '../Accordion';

export const CustomHits: FC<
  HitsProps<{
    [x: string]: string;
  }>
> = (props) => {
  const { hits } = useHits(props);

  if (!hits?.length) {
    return <Text color={'sub.100'}>検索結果が見つかりませんでした</Text>;
  }

  return (
    <Accordion
      allowToggle
      allowMultiple
      display={'grid'}
      gap={{ base: 8, xl: '60px' }}
      mt={8}
    >
      {hits.map((hit) => (
        <AccordionItem
          key={hit.objectID}
          boxShadow={'secondary'}
          borderRadius="32px"
          overflow="hidden"
          border="none"
          p={0}
        >
          {({ isExpanded }) => (
            <>
              <BaseAccordionButton isExpanded={isExpanded}>
                <Box display={{ xl: 'flex' }} alignItems={{ xl: 'center' }}>
                  <Box
                    fontSize={{ base: 'sm', xl: 'md' }}
                    display={'flex'}
                    alignItems={'center'}
                    mr={{ xl: 16 }}
                  >
                    <Box mr={{ base: 5, xl: 10 }} lang="en">
                      {dayjs(hit.publishedAt).format('YYYY.MM.DD')}
                    </Box>
                    <Text
                      minW={{ base: 20, xl: '140px' }}
                      display="inline-block"
                      bg="main.100"
                      color="sub.100"
                      px={2}
                      textAlign={'center'}
                    >
                      {hit.category}
                    </Text>
                  </Box>
                  <Box pr={{ base: 3, xl: 6 }} mt={{ base: 3, xl: 0 }}>
                    {hit.title}
                  </Box>
                </Box>
              </BaseAccordionButton>
              <BaseAccordionPanel>{hit.content}</BaseAccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
