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

export const CustomBlogsHits: FC<HitsProps<BlogItemProps>> = (props) => {
  const { hits } = useHits(props);

  if (!hits?.length) {
    return <Text color={'sub.100'}>検索結果が見つかりませんでした</Text>;
  }

  return (
    <Accordion allowToggle allowMultiple>
      {hits.map((hit) => (
        <AccordionItem
          key={hit.objectID}
          border="none"
          p={0}
          px={{ base: 18, xl: 0 }}
          mb={{ base: 8, lg: 12 }}
        >
          <Box>
            <Link href={`/blogs/${hit.objectID}`}>
              <Box
                fontSize={{ base: 'xl', xl: 'lg' }}
                display={'flex'}
                alignItems={'center'}
                w={{ base: '', xl: '65vw' }}
              >
                <Box lang="en" mr={8}>
                  <Image
                    alt="アイキャッチ"
                    src={hit.image.url}
                    objectFit="contain"
                    w={{ base: '30vw', xl: '25vw' }}
                  />
                </Box>
                <Box flex={{ base: '1.6', xl: '2.3' }}>
                  <Text textAlign={'left'} fontWeight="bold" fontSize={'2xl'}>
                    {hit.title}
                  </Text>
                  <Box display={{ base: 'none', lg: 'block' }}>
                    <Text textAlign={'left'}>{hit.description}</Text>
                    <Text float={'right'}>
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
  );
};
