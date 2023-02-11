import {
  Accordion,
  AccordionItem,
  Box,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { FC } from 'react';
import { BlogItemProps } from 'types';

type BlogTypeProps = {
  contents: BlogItemProps[];
};

export const RelatedContents: FC<BlogTypeProps> = ({ contents }) => {
  // const getStaticProps = async () => {
  //   const blog = await Blogclient.getList<BlogItemProps>({
  //     endpoint: 'blogs',
  //     queries: {
  //       limit: 6,
  //       orders: '-publishedAt',
  //       filters: `category[equals]${category}`,
  //     },
  //   }).catch();

  if (contents.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <IdWrapper id="category">
      <ContentWrapper py={{ base: 7, xl: 14 }} px={5}>
        <FadeInAnimation>
          <Box>
            <Flex alignItems="center">
              <Text
                fontSize={{ base: '2xl', md: '4xl', xl: '5xl' }}
                fontWeight="extrabold"
                lang="en"
              >
                関連記事
              </Text>
            </Flex>
          </Box>

          <Accordion allowToggle allowMultiple>
            {contents.map((blog: BlogItemProps) => (
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
                          w={{ base: '30vw', xl: '25vw' }}
                        />
                      </Box>
                      {/* <Box
                    flex={{ base: '1.6', xl: '2.3' }}
                    w={{ base: '30vw', xl: '25vw' }}
                  >
                    <Box display={{ base: 'none', lg: 'block' }}>
                      <Text
                        textAlign={'left'}
                        fontWeight="bold"
                        fontSize={'2xl'}
                      >
                        {blog.title}
                      </Text>
                      <Text textAlign={'left'}>{blog.description}</Text>
                      <Text float={'right'}>
                        {dayjs(blog.publishedAt).format('YYYY.MM.DD')}
                      </Text>
                    </Box>
                  </Box> */}
                    </Box>
                    <Box
                      mt={2}
                      fontSize={'xl'}
                      w={{ base: '30vw', xl: '25vw' }}
                      flex={{ base: '1.6', xl: '2.3' }}
                    >
                      <Box display={{ base: 'none', lg: 'block' }}>
                        <Text
                          textAlign={'left'}
                          fontWeight="bold"
                          fontSize={'2xl'}
                        >
                          {blog.title}
                        </Text>
                      </Box>
                      <Text textAlign={'left'}>{blog.description}</Text>
                    </Box>
                  </Link>
                </Box>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async (context: ContextType) => {
//   const id = context.params.category;
//   console.log(id);
//   const data = await Blogclient.get({
//     endpoint: 'blogs',
//     queries: { filters: `category[equals]${id}` },
//   });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };

export default RelatedContents;
