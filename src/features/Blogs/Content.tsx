import { Box, Image, Text } from '@chakra-ui/react';
import {
  CustomBlogsMenu,
  CustomSearchBox,
  FadeInAnimation,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import dayjs from 'dayjs';
import { searchClient } from 'libraries/algolia';
import { renderToc } from 'libraries/microcms';
import { FC } from 'react';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { MarkdownTemplate } from 'styles/blog/MarkdownTemplate';
import { BlogItemProps } from 'types';

import { BlogsShare } from './Share';
import { TableOfContents } from './TableOfContent';
import { BlogsWriter } from './Writer';

type blogType = {
  blog: BlogItemProps;
};

export const BlogContentMain: FC<blogType> = ({ blog }) => {
  const toc = renderToc(blog.content);
  return (
    <ContentWrapper as="section" py={0} px={{ base: 5, lg: 8 }}>
      <FadeInAnimation>
        <Box
          display={{ base: 'block', xl: 'flex' }}
          flexDirection={'row-reverse'}
          justifyContent={'space-between'}
          mt={'10'}
          mb={'40'}
        >
          <Box w="30vw" mt={'20'}>
            <InstantSearch searchClient={searchClient} indexName="blog">
              <Box
                display={'flex'}
                flexDirection={'row-reverse'}
                justifyContent={'space-between'}
              >
                <Box mx={'auto'}>
                  <Box
                    pb={{ base: 16, xl: 0 }}
                    pr={{ base: 0, xl: 5 }}
                    w={{ base: '70vw', xl: 370 }}
                    alignItems={'center'}
                  >
                    <Box
                      display={{ base: 'none', xl: 'block' }}
                      textAlign={'center'}
                    >
                      <Text
                        fontSize={{ base: 'xl', xl: '2xl' }}
                        fontWeight="bold"
                        flexBasis={{ xl: '264px' }}
                        pr={{ xl: 0 }}
                      >
                        キーワードから探す
                      </Text>
                      <Box mt={{ base: 4, xl: 4 }}>
                        <CustomSearchBox />
                      </Box>
                    </Box>
                    <Box display={{ base: 'none', xl: 'block' }}>
                      <Text
                        fontSize={{ base: 'xl', xl: '2xl' }}
                        fontWeight="bold"
                        textAlign={'center'}
                        pr={{ xl: 0 }}
                        mt={{ base: 7, xl: 10 }}
                      >
                        カテゴリから探す
                      </Text>
                      <CustomBlogsMenu attribute="category" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </InstantSearch>
          </Box>
          <Box w={{ base: '90vw', lg: '85vw', xl: '65vw' }} mx="auto">
            <Text fontSize={{ xl: '3xl' }} fontWeight="bold" mb={'5'}>
              {blog.title}
            </Text>
            <Image
              alt=""
              src={blog.eyecatch.url}
              objectFit="contain"
              w={{ base: '75vw', xl: '60vw' }}
              mx="auto"
            />
            <Text float={'right'}>
              {dayjs(blog.publishedAt).format('YYYY.MM.DD')}
            </Text>
            <TableOfContents toc={toc} />
            <Box mb={{ xl: '40' }}>
              <MarkdownTemplate source={blog.content} />
            </Box>
            <Box>
              <BlogsWriter />
              <BlogsShare blog={blog} />
            </Box>
          </Box>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
