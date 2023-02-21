import { Box, Text } from '@chakra-ui/react';
import { CustomBlogSearchBox2, CustomBlogsMenu2 } from 'components/Elements';

export const SearchModal2 = () => {
  return (
    // <Box
    //   display={{ base: 'block', xl: 'flex' }}
    //   flexDirection={'row-reverse'}
    //   justifyContent={'space-between'}
    //   mt={'10'}
    //   mb={'40'}
    // >
    //   <Box w="30vw" mt={'20'}>
    //     <InstantSearch searchClient={searchClient} indexName="blog">

    <Box
      pb={{ base: 16, lg: 0 }}
      w={{ base: '70vw', lg: 290,xl:330}}
      alignItems={'center'}
      mx="auto"
    >
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', xl: '2xl' }}
          fontWeight="bold"
          flexBasis={{ xl: '264px' }}
          pr={{ xl: 0 }}
        >
          キーワードから探す
        </Text>
        <Box mt={{ base: 4, xl: 4 }}>
          <CustomBlogSearchBox2 />
        </Box>
      </Box>

      <Text
        fontSize={{ base: 'xl', xl: '2xl' }}
        fontWeight="bold"
        textAlign={'center'}
        ml={{ xl: 30 }}
        mt={{ base: 7, xl: 10 }}
      >
        カテゴリから探す
      </Text>
      <CustomBlogsMenu2 attribute="category" />
    </Box>

    //     </InstantSearch>
    //   </Box>
    // </Box>
  );
};
