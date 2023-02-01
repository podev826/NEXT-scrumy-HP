import {
  Accordion,
  AccordionItem,
  Box,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { HitsProps, useHits } from 'react-instantsearch-hooks-web';

export const CustomBlogsHits: FC<
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
          <Box
            display={{ xl: 'flex' }}
            alignItems={{ xl: 'center' }}
            height="350px"
          >
            <Link href={`/blog/${hit.objectID}`}>
              <Box
                fontSize={{ base: 'xl', xl: '2xl' }}
                display={'flex'}
                alignItems={'center'}
                mr={{ xl: 16 }}
              >
                <Box mr={{ base: 5, xl: 10 }} lang="en">
                  <Image
                    src={hit.image.url}
                    height={hit.image.height}
                    width={hit.image.width}
                  />
                </Box>
                <Box>
                  <Text
                    minW={{ base: 20, xl: '140px' }}
                    display="inline-block"
                    color="sub.100"
                    px={2}
                    textAlign={'left'}
                    as="b"
                    fontSize={{ base: '2xl', xl: '3xl' }}
                  >
                    {hit.title}
                  </Text>

                  <Text
                    minW={{ base: 20, xl: '140px' }}
                    display="inline-block"
                    color="sub.100"
                    px={2}
                    textAlign={'left'}
                  >
                    {hit.description}
                  </Text>
                  <Text
                    minW={{ base: 20, xl: '140px' }}
                    display="inline-block"
                    color="sub.100"
                    px={2}
                  >
                    {hit.publishedAt}
                  </Text>
                </Box>
              </Box>
            </Link>
            <Box pr={{ base: 3, xl: 6 }} mt={{ base: 3, xl: 0 }}></Box>
          </Box>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
