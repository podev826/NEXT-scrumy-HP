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
  let category: string
  if (blog.category.id === '8a_cl5gq5dy') {
     category = '　＞　ESG／SDGsとは？';
  } else if (blog.category.id === '3kjcv5uy5l') {
     category = '　＞　サステナブル経営';
  } else if (blog.category.id === 'ad_du_l5jb') {
     category = '　＞　ESG投資';
  } else {
     category=''
  }
  return (
    <Box pt={{base:'65px' ,sm: 20, lg: 4 }} bg="gray.100">
      <FadeInAnimation>
        <Box
          display={{ base: 'block', lg: 'flex' }}
          flexDirection={'row-reverse'}
          justifyContent={'space-between'}
        >
          <Box py="20" display={{ base: 'none', lg: 'block' }} w="30vw">
            <Box position="sticky" top="36">
              <InstantSearch searchClient={searchClient} indexName="blog">
                <SearchModal2 />
                <RelatedContents contents={related.contents} />
              </InstantSearch>
            </Box>
          </Box>
          <Box
            w={{ base: '95vw', lg: '68vw' }}
            p="4"
            ml={{ base: '', lg: 4 }}
            mx="auto"
            bg="white"
          >
            <Text
              fontSize={'md'}
              fontWeight="bold"
              mb="4"
            >
              ホーム{category} <Text as='span' display={{base:'none',lg:'inline'}}>　＞　{blog.title}</Text>
            </Text>
            <Text
              fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
              fontWeight="bold"
              mb={'5'}
            >
              {blog.title}
            </Text>
              <Image
              alt=""
              src={blog.eyecatch.url}
              objectFit="contain"
              w={{ base: '90vw', md: '85vw', xl: '60vw' }}
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
