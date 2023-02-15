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

import { SearchModal } from './SearchModal';
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
                display={{ base: 'none', xl: 'block' }}
                justifyContent={'flex-start'}
              >
                <SearchModal />
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
