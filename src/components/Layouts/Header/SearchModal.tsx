import { Box, Flex, Text, VisuallyHidden } from '@chakra-ui/react';
import {
  CustomBlogSearchBox2,
  CustomBlogsMenu2,
  MagnifyingGlass,
} from 'components/Elements';
import { searchClient } from 'libraries/algolia';
import { FC, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-hooks-web';

// type HeaderModalListProps = {
//   content: SecondaryNavContentProps;
// };

// type BlogHeaderContextProps = {
//   blogHeaderIsActive: boolean;
//   setBlogHeaderIsActive: Dispatch<SetStateAction<boolean>>;
//   toggleBlogHeader: () => void;
//   closeBlogHeader: () => void;
// };

export const SearchModalSp: FC = () => {
  const toggleBlogHeader = () => {
    setBlogHeaderIsActive((prevState) => !prevState);
  };

  const [blogHeaderIsActive, setBlogHeaderIsActive] = useState(false);

  // const { refine } = useSearchBox(props);
  // const { register, handleSubmit } = useForm<{ q: string }>();

  // const search = async ({ q }: { q: string }) => {
  //   refine(q);
  // };

  return (
    <>
      <Box
        as="button"
        w={{ base: '24px', md: '40px', xl: '56px' }}
        h={{ base: '24px', md: '40px', xl: '54px' }}
        borderRadius="full"
        position="relative"
        color={'white'}
        _hover={{
          opacity: '0.7',
        }}
        _focusVisible={{
          outlineColor: 'accent.100',
        }}
        onClick={toggleBlogHeader}
      >
        <MagnifyingGlass />
        <VisuallyHidden>メニューを開閉する</VisuallyHidden>
      </Box>
      <Box
        display={{ base: 'block', xl: 'none' }}
        position="fixed"
        zIndex="modal"
        overflowY="scroll"
        top={0}
        right={0}
        left={0}
        bottom={0}
        p={10}
        bg="gray.100"
        visibility={blogHeaderIsActive ? 'visible' : 'hidden'}
        opacity={blogHeaderIsActive ? '1' : '0'}
        transitionProperty="all"
        transitionTimingFunction="linear"
        transitionDuration="fast"
      >
        <Flex justifyContent="space-between">
          <Box w="128px"></Box>
          <Box
            as="button"
            w={10}
            h={10}
            borderRadius="full"
            position="relative"
            transitionProperty="all"
            transitionTimingFunction="linear"
            transitionDuration="fast"
            bg="accent.100"
            _hover={{
              opacity: '0.7',
            }}
            _focusVisible={{
              outlineColor: 'accent.100',
            }}
            onClick={toggleBlogHeader}
          >
            <Box
              as="span"
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              m="auto"
              h={1}
              w={4}
              bg="base.100"
              transitionProperty="all"
              transitionTimingFunction="linear"
              transitionDuration="fast"
              _before={{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 'full',
                height: 'full',
                bg: 'sub.100',
                top: '0',
                zIndex: '-1',
                transitionProperty: 'all',
                transitionTimingFunction: 'linear',
                transitionDuration: 'fast',
              }}
              _after={{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 'full',
                height: 'full',
                bg: 'sub.100',
                top: '0',
                zIndex: '-1',
                transitionProperty: 'all',
                transitionTimingFunction: 'linear',
                transitionDuration: 'fast',
              }}
            >
              <VisuallyHidden>メニューを開閉する</VisuallyHidden>
            </Box>
          </Box>
        </Flex>

        <InstantSearch searchClient={searchClient} indexName="blog">
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', xl: 'row-reverse' }}
            justifyContent={{ base: '', xl: 'space-between' }}
          >
            <Box mx={'auto'}>
              <Box
                pb={{ base: 16, xl: 0 }}
                pr={{ base: 0, xl: 5 }}
                w={{ base: '70vw', xl: 370 }}
                alignItems={'center'}
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
                  <Box as="form" onSubmit={toggleBlogHeader}>
                    <CustomBlogSearchBox2 />

                    {/* <Box position={'relative'}>
                      <Input
                        pl={{ base: 7, xl: 9 }}
                        pr={{ base: '52px', xl: '60px' }}
                        minH={12}
                        py={2}
                        bg="base.100"
                        borderRadius={'full'}
                        borderColor="sub.100"
                        borderWidth={'2px'}
                        placeholder="キーワードを入力してください。"
                        transitionProperty="all"
                        transitionTimingFunction="linear"
                        transitionDuration="fast"
                        _hover={{
                          borderColor: 'sub.100',
                        }}
                        _focus={{
                          borderColor: 'accent.100',
                          boxShadow: 'tertiary',
                        }}
                        _placeholder={{
                          base: {
                            fontSize: 'sm',
                            fontWeight: 'bold',
                            color: 'sub.200',
                          },
                          xl: {
                            fontSize: 'md',
                          },
                        }}
                        // {...register('q')}
                      />
                      <Box
                        position={'absolute'}
                        top="50%"
                        right={8}
                        transform="translateY(-50%)"
                        zIndex={'2'}
                      >
                        <MagnifyingGlass />
                      </Box>
                    </Box> */}
                  </Box>
                </Box>

                <Text
                  fontSize={{ base: 'xl', xl: '2xl' }}
                  fontWeight="bold"
                  textAlign={'center'}
                  pr={{ xl: 0 }}
                  mt={{ base: 7, xl: 10 }}
                >
                  カテゴリから探す
                </Text>
                <CustomBlogsMenu2 attribute="category" />
              </Box>
            </Box>
          </Box>
        </InstantSearch>
      </Box>
    </>
  );
};

//     <Box>
//       <Box
//         as="button"
//         w={{ base: '24px', md: '40px', xl: '56px' }}
//         h={{ base: '24px', md: '40px', xl: '54px' }}
//         borderRadius="full"
//         position="relative"
//         _hover={{
//           opacity: '0.7',
//         }}
//         _focusVisible={{
//           outlineColor: 'accent.100',
//         }}
//         onClick={toggleHeader}
//       >
//         <Box
//           as="span"
//           position="absolute"
//           top={0}
//           left={0}
//           bottom={0}
//           right={0}
//           m="auto"
//           h={{ base: '2px', md: 1 }}
//           w="full"
//           bg="sub.100"
//           transitionProperty="all"
//           transitionTimingFunction="linear"
//           transitionDuration="fast"
//           _before={{
//             content: '""',
//             display: 'block',
//             position: 'absolute',
//             width: 'full',
//             height: 'full',
//             bg: 'sub.100',
//             top: { base: '8px', md: '12px', xl: '16px' },
//             transitionProperty: 'all',
//             transitionTimingFunction: 'linear',
//             transitionDuration: 'fast',
//           }}
//           _after={{
//             content: '""',
//             display: 'block',
//             position: 'absolute',
//             width: 'full',
//             height: 'full',
//             bg: 'sub.100',
//             top: { base: '-8px', md: '-12px', xl: '-16px' },
//             transitionProperty: 'all',
//             transitionTimingFunction: 'linear',
//             transitionDuration: 'fast',
//           }}
//         >
//           <VisuallyHidden>メニューを開閉する</VisuallyHidden>
//         </Box>
//       </Box>
//       <InstantSearch searchClient={searchClient} indexName="blog">
//         <CustomSearchBox />
//         <CustomBlogsMenu attribute="category" />
//         {/* <BaseLink
//         href={content.href}
//         fontWeight="extrabold"
//         fontSize={24}
//         onClick={closeHeader}
//       >
//         <Box as="span" lang="en">
//           {content.title}
//         </Box>
//       </BaseLink> */}
//       </InstantSearch>
//     </Box>
//   );
// };
