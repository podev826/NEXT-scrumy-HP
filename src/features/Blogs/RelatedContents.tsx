import {
  Accordion,
  AccordionItem,
  Box,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
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

  // if (contents.length === 0) {
  //   return <div>ブログコンテンツがありません</div>;
  // }
  return (
    <Box
      py={{ base: 7, xl: 7 }}
      px={5}
      pb={{ base: 16, xl: 0 }}
      w={{ base: '70vw', lg: '25vw' }}
      flexDirection={'column'}
      alignItems={'center'}
      display={'flex'}
      mx="auto"
    >
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', xl: '2xl' }}
          fontWeight="bold"
          flexBasis={{ xl: '264px' }}
          pr={{ xl: 0 }}
        >
          関連記事
        </Text>
      </Box>

      <Accordion allowToggle allowMultiple mt={{ base: 4, xl: 2 }}>
        {contents.map((blog: BlogItemProps) => (
          <AccordionItem
            key={blog.id}
            border="none"
            py={{ base: 8, lg: 2 }}
            px={3}
            mb={4}
            bg="white"
            borderRadius={'30px'}
          >
            <Box mt="xl" bg="white" borderRadius={'30px'}>
              <Link href={`/blogs/${blog.id}`}>
                <Box
                  fontSize={{ base: 'xl', xl: 'lg' }}
                  display={'flex'}
                  alignItems={'center'}
                  justifyItems={'center'}
                  w={{ base: '30vw', lg: '25vw' }} //ここを変更する
                >
                  <Box lang="en" mx={2}>
                    <Image
                      alt="アイキャッチ"
                      src={blog.eyecatch.url}
                      objectFit="contain"
                      w={{ base: '30vw', lg: '10vw' }}
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

                  <Box
                    mt={2}
                    w={{ base: '30vw', lg: '5vw' }}
                    flex={{ base: '1.6', xl: '2.3' }}
                  >
                    <Box
                      display={{ base: 'none', lg: 'block' }}
                      fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }}
                    >
                      <Text textAlign={'left'}>{blog.title}</Text>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default RelatedContents;
