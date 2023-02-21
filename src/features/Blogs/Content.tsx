import { Box, Image, Text } from '@chakra-ui/react';
import { FadeInAnimation, SecondaryLink } from 'components/Elements';
import dayjs from 'dayjs';
import { ContactMain } from 'features/contact';
import { searchClient } from 'libraries/algolia';
import { renderToc } from 'libraries/microcms';
import { FC } from 'react';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { MarkdownTemplate } from 'styles/blog/MarkdownTemplate';
import { BlogItemProps } from 'types';

import { BlogContact } from './Contact';
import { RelatedContents } from './RelatedContents';
import { SearchModal2 } from './SearchModal2';
import { BlogsShare } from './Share';
import { TableOfContents } from './TableOfContent';
import { BlogsWriter } from './Writer';

type BlogTypeProps = {
  contents: BlogItemProps[];
};

type blogType = {
  blog: BlogItemProps;
  related: BlogTypeProps;
};

export const BlogContentMain: FC<blogType> = ({ blog, related }: blogType) => {
  const toc = renderToc(blog.content);
  return (
    <Box pt={{ base:'14',lg:'0'}}>
      <FadeInAnimation>
        <Box
          display={{ base: 'block', lg: 'flex' }}
          flexDirection={'row-reverse'}
          justifyContent={'space-between'}
        >
          <Box
            py="20"
            display={{ base: 'none', lg: 'block' }}
            bg="gray.100"
            w="30vw"
          >
            <Box position="sticky" top="36">
              <InstantSearch searchClient={searchClient} indexName="blog">
                <Box justifyContent={'flex-start'}>
                  <SearchModal2 />
                  <RelatedContents contents={related.contents} />
                </Box>
              </InstantSearch>
            </Box>
          </Box>
          <Box
            w={{ base: '90vw', lg: '64vw' }}
            mx="auto"
            mt={ 10 }
          >
            <Text fontSize={{ base:'2xl',xl: '3xl' }} fontWeight="bold" mb={'5'}>
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
              <Box display={{ base: 'none', lg: 'block' }}>
                <ContactMain />
              </Box>
              <Box
                mt={5}
                mx="auto"
                px={{ base: 6, md: 10, lg: 16, xl: 24 }}
                py={{ base: 16, md: 20, xl: 24 }}
                maxW="calc(820px + (96px * 2))"
                display={{ base: 'block', lg: 'none' }}
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

// export const getStaticProps = async (context: ContextType) => {
//   const id = context.params.id;
//   const data: BlogItemProps = await Blogclient.get({
//     endpoint: 'blogs',
//     contentId: id,
//   });

//   const category = data.category.id;
//   const data2: BlogItemProps = await Blogclient.get({
//     endpoint: 'blogs',
//     queries: {
//       limit: 6,
//       orders: '-publishedAt',
//       filters: `category[equals]${category}[and]contentId[not_equals]${id}`,
//     },
//   });

//   return {
//     props: {
//       related: data2,
//     },
//   };
// };
