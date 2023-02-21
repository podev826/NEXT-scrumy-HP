import { Box, Text } from '@chakra-ui/react';
import { CustomBlogsMenu, CustomSearchBox } from 'components/Elements';

export const SearchModal = () => {
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
      w={{ base: '70vw',lg:300 }}
      alignItems={'center'}
      mx="auto"
    >
      <Box textAlign={'center'}>
        <Text
          fontSize={{ base: 'xl', lg: '2xl' }}
          fontWeight="bold"
          flexBasis={{ lg: '264px' }}
          pr={{ lg: 0 }}
        >
          キーワードから探す
        </Text>
        <Box mt={{ base: 4, lg: 4 }}>
          <CustomSearchBox />
        </Box>
      </Box>

      <Text
        fontSize={{ base: 'xl', lg: '2xl' }}
        fontWeight="bold"
        textAlign={'center'}
        ml={{ lg: 30 }}
        mt={{ base: 7, lg: 10 }}
      >
        カテゴリから探す
      </Text>
      <CustomBlogsMenu attribute="category" />
    </Box>

    //     </InstantSearch>
    //   </Box>
    // </Box>
  );
};
