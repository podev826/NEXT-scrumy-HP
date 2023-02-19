import {
  Accordion,
  AccordionItem,
  Box,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import React, { FC } from 'react';
import { HitsProps, useHits } from 'react-instantsearch-hooks-web';
import { BlogItemProps } from 'types';

import { FadeInAnimation } from '../Animations';

export const CustomBlogsHits: FC<HitsProps<BlogItemProps>> = (props) => {
  const { hits, results } = useHits(props);

  if (!hits?.length) {
    return <Text color={'sub.100'}>検索結果が見つかりませんでした</Text>;
  }

  return (
    <FadeInAnimation>
      <text>{results.query !== '' ? `${results.query}の検索結果` : null}</text>
      <Accordion allowToggle allowMultiple>
        {hits.map((hit) => (
          <AccordionItem
            key={hit.objectID}
            border="none"
            p={0}
            px={{ base: 18, xl: 0 }}
            mb={{ base: 8, lg: 12 }}
            justifyItems={{ base: 'Center', md: '' }}
          >
            <Box>
              <Link href={`/blogs/${hit.objectID}`}>
                <Box
                  fontSize={{ base: 'xl', xl: 'lg' }}
                  display={'flex'}
                  alignItems={'center'}
                  w={{ base: '', xl: '60vw' }}
                >
                  <Box
                    lang="en"
                    mr={{ base: 0, md: 8 }}
                    justifyContent={{ base: 'center', md: 'left' }}
                  >
                    <Image
                      alt="アイキャッチ"
                      src={hit.image.url}
                      objectFit="contain"
                      w={{ base: '', lg: '25vw' }}
                    />
                  </Box>
                  <Box flex={{ base: '1.6', xl: '2.3' }}>
                    <Box display={{ base: 'none', lg: 'block' }}>
                      <Text
                        textAlign={'left'}
                        fontWeight="bold"
                        fontSize={{ base: 'lg', md: '2xl', xl: 'xl' }}
                      >
                        {hit.title}
                      </Text>
                      <Text
                        fontSize={{ base: 'md', md: 'xl', xl: 'lg' }}
                        textAlign={'left'}
                      >
                        {hit.description}
                      </Text>
                      <Text
                        float={'right'}
                        fontSize={{ base: 'sm', md: 'lg', xl: 'md' }}
                      >
                        {dayjs(hit.publishedAt).format('YYYY.MM.DD')}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  display={{ base: 'block', lg: 'none' }}
                  mt={2}
                  fontSize={'xl'}
                >
                  <Text textAlign={'left'}>{hit.description}</Text>
                  <Text float={'right'}>
                    {dayjs(hit.publishedAt).format('YYYY.MM.DD')}
                  </Text>
                </Box>
              </Link>
            </Box>
          </AccordionItem>
        ))}
      </Accordion>
    </FadeInAnimation>
  );
};
