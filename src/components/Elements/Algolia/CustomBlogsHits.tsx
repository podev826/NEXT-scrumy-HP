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
      <Text>
        {results && results.query !== '' ? `${results.query}の検索結果` : null}
      </Text>
      <Accordion allowToggle allowMultiple>
        {hits.map((hit) => (
          <AccordionItem
            key={hit.objectID}
            border="none"
            p={0}
            px={{ base: 18, lg: 0 }}
            mb={{ base: 8, lg: 12 }}
            justifyItems={{ base: 'Center', md: '' }}
          >
            <Box>
              <Link href={`/blogs/${hit.objectID}`}>
                <Box
                  fontSize={{ base: 'xl', xl: 'lg' }}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <Box
                    lang="en"
                    mr={{ base: 0, sm: 3 }}
                    justifyContent={{ base: 'center', md: 'left' }}
                  >
                    <Image
                      alt="アイキャッチ"
                      src={hit.image.url}
                      objectFit="contain"
                      w={{ base: '', sm: '37vw', lg: '25vw' }}
                    />
                  </Box>
                  <Box
                    flex={{ base: '1.6', xl: '2.3' }}
                    display={{ base: 'none', sm: 'block' }}
                  >
                    <Text textAlign={'left'} fontWeight="bold" fontSize="lg">
                      {hit.title}
                    </Text>
                    <Text
                      fontSize="md"
                      textAlign={'left'}
                      overflow="hidden"
                      display="-webkit-box"
                      sx={{
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                      }}
                    >
                      {hit.description}
                    </Text>
                    <Text float={'right'} fontSize={{ base: 'sm', xl: 'md' }}>
                      {dayjs(hit.publishedAt).format('YYYY.MM.DD')}
                    </Text>
                  </Box>
                </Box>
                <Box
                  display={{ base: 'block', sm: 'none' }}
                  mt={2}
                  fontSize={'xl'}
                >
                  <Text textAlign={'left'} fontSize='md'>{hit.description}</Text>
                  <Text float={'right'} fontSize='md'>
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
