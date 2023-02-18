import {
  Accordion,
  AccordionItem,
  Box,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import {
  CustomBlogsMenu,
  CustomPagination,
  CustomSearchBox,
  FadeInAnimation,
} from 'components/Elements';
import { BlogMainLayout, ContentWrapper, IdWrapper } from 'components/Layouts';
import { Footer } from 'components/Layouts/Footer';
import { BLOG_LIST, META } from 'configs';
import dayjs from 'dayjs';
import { SearchModal } from 'features/Blogs';
import { searchClient } from 'libraries/algolia';
import { Blogclient } from 'libraries/microcms';
import { FC } from 'react';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import { BlogItemProps, ContentType, ContextType } from 'types';

type BlogTypeProps = {
  blog: BlogItemProps[];
};

export const CategoryId: FC<BlogTypeProps> = ({ blog }) => {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }

  // const blogMeta: MetaItemProps = {
  //   title: blog[0].category.name,
  //   description:
  //     blog[0].category.id === BLOG_LIST[0].href
  //       ? BLOG_LIST[0].title
  //       : blog[0].category.id === BLOG_LIST[1].href
  //       ? BLOG_LIST[1].title
  //       : blog[0].category.id === BLOG_LIST[2].href
  //       ? BLOG_LIST[2].title
  //       : '',
  //   href:
  //     blog[0].category.id === BLOG_LIST[0].href
  //       ? `/blogs/category/${BLOG_LIST[0].href}`
  //       : blog[0].category.id === BLOG_LIST[1].href
  //       ? `/blogs/category/${BLOG_LIST[1].href}`
  //       : blog[0].category.id === BLOG_LIST[2].href
  //       ? `/blogs/category/${BLOG_LIST[2].href}`
  //       : '',
  // };

  return (
    <BlogMainLayout meta={META.media}>
      <IdWrapper id={blog[0].category.name}>
        <ContentWrapper as="section" maxW={'calc(1080px + (96px * 2))'}>
          <FadeInAnimation>
            <Box
              display={'flex'}
              flexDirection={{ base: 'column', xl: 'row-reverse' }}
              justifyContent={'center'}
              gap={3}
              alignItems={'baseline'}
            >
              <InstantSearch searchClient={searchClient} indexName="blog">
                <Box
                  display={{ base: 'none', xl: 'block' }}
                  justifyContent={'flex-start'}
                  position="sticky"
                  top="40"
                >
                  <SearchModal />
                </Box>
              </InstantSearch>
              <Box>
                <Text fontSize={'2xl'} color="black">
                  ホーム　＞　{blog[0].category.name}
                </Text>

                <Box mb="50px">
                  <Image
                    alt=""
                    src={
                      blog[0].category.id === BLOG_LIST[0].href
                        ? '/images/root/blog1.png'
                        : blog[0].category.id === BLOG_LIST[1].href
                        ? '/images/root/blog2.png'
                        : blog[0].category.id === BLOG_LIST[1].href
                        ? '/images/root/blog3.png'
                        : ''
                    }
                    width={{ base: 'full', xl: '65vw' }}
                  />
                </Box>
                <Accordion allowToggle allowMultiple>
                  {blog.map((blog) => (
                    <AccordionItem
                      key={blog.id}
                      border="none"
                      p={0}
                      px={{ base: 18, xl: 0 }}
                      mb={{ base: 8, lg: 12 }}
                    >
                      <Box mt="xl">
                        <Link href={`/blogs/${blog.id}`}>
                          <Box
                            fontSize={{ base: 'xl', xl: 'lg' }}
                            display={'flex'}
                            alignItems={'center'}
                            w={{ base: '', xl: '65vw' }}
                          >
                            <Box lang="en" mr={8}>
                              <Image
                                alt="アイキャッチ"
                                src={blog.eyecatch.url}
                                objectFit="contain"
                                w={{ base: 'full', lg: '30vw', xl: '25vw' }}
                              />
                            </Box>
                            <Box
                              flex={{ base: '1.6', xl: '2.3' }}
                              display={{ base: 'none', lg: 'block' }}
                            >
                              <Text
                                textAlign={'left'}
                                fontWeight="bold"
                                fontSize={'2xl'}
                              >
                                {blog.title}
                              </Text>
                              <Box display={{ base: 'none', lg: 'block' }}>
                                <Text textAlign={'left'}>
                                  {blog.description}
                                </Text>
                                <Text float={'right'}>
                                  {dayjs(blog.publishedAt).format('YYYY.MM.DD')}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            display={{ base: 'block', lg: 'none' }}
                            mt={2}
                            fontSize={'xl'}
                          >
                            <Text textAlign={'left'}>{blog.description}</Text>
                            <Text float={'right'}>
                              {dayjs(blog.publishedAt).format('YYYY.MM.DD')}
                            </Text>
                          </Box>
                        </Link>
                      </Box>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </Box>
          </FadeInAnimation>
        </ContentWrapper>
        <Footer />
      </IdWrapper>
    </BlogMainLayout>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await Blogclient.get({ endpoint: 'blogs' });
  const paths = data.contents.map(
    (content: ContentType) => `/blogs/category/${content.category.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: ContextType) => {
  const id = context.params.category;
  const data = await Blogclient.get({
    endpoint: 'blogs',
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default CategoryId;
