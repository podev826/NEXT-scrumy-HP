import {
  Accordion,
  AccordionItem,
  Box,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { Blogclient } from 'libraries/microcms';
import { FC } from 'react';
import { BlogItemProps, ContextType } from 'types';

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
    <Box>
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
                  <Box flex={{ base: '1.6', xl: '2.3' }}>
                    <Text textAlign={'left'} fontWeight="bold" fontSize={'2xl'}>
                      {blog.title}
                    </Text>
                    <Box display={{ base: 'none', lg: 'block' }}>
                      <Text textAlign={'left'}>{blog.description}</Text>
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
