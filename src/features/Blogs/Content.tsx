import { Box, Image, Text } from '@chakra-ui/react';
import {
  ContactBlock,
  CustomBlogsMenu,
  CustomSearchBox,
  FadeInAnimation,
  SecondaryLink,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import dayjs from 'dayjs';
import { ContactMain } from 'features/contact';
import { searchClient } from 'libraries/algolia';
import { renderToc } from 'libraries/microcms';
import { FC } from 'react';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { MarkdownTemplate } from 'styles/blog/MarkdownTemplate';
import { BlogItemProps } from 'types';

import { BlogContact } from './Contact';
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
    <Box>
      <FadeInAnimation>
        <Box
          display={{ base: 'block', xl: 'flex' }}
          flexDirection={'row-reverse'}
          justifyContent={'space-between'}
        >
          <Box
            py="20"
            display={{ base: 'none', xl: 'block' }}
            bg="gray.100"
            w="30vw"
          >
            <Box position="sticky" top="40">
              <InstantSearch searchClient={searchClient} indexName="blog">
                <Box justifyContent={'flex-start'}>
                  <SearchModal />
                </Box>
              </InstantSearch>
            </Box>
          </Box>
          <Box
            w={{ base: '90vw', lg: '85vw', xl: '65vw' }}
            mx="auto"
            mt={{ xl: 20 }}
          >
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
              <Box display={{ base: 'none', md: 'block' }}>
                <ContactMain />
              </Box>
              <Box
                mt={5}
                mx="auto"
                px={{ base: 6, md: 10, lg: 16, xl: 24 }}
                py={{ base: 16, md: 20, xl: 24 }}
                maxW="calc(820px + (96px * 2))"
                display={{ base: 'block', md: 'none' }}
              >
                <SecondaryLink href="/contact" w="full" variant={'tertiary'}>
                  お問い合わせはこちら
                </SecondaryLink>
              </Box>
              <BlogsShare blog={blog} />
              <BlogContact />
            </Box>
          </Box>
        </Box>
      </FadeInAnimation>
    </Box>
  );
};
