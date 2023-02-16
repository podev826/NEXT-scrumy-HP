import { Box, Text } from '@chakra-ui/react';
import { CustomBlogsMenu, CustomSearchBox } from 'components/Elements';
import { searchClient } from 'libraries/algolia';
import {
  InstantSearch,
  PoweredBy,
  SearchBox,
} from 'react-instantsearch-hooks-web';

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

    <Box>
      <Box
        pb={{ base: 16, xl: 0 }}
        w={{ base: '70vw', xl: 330 }}
        alignItems={'center'}
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
            <CustomSearchBox />
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
        <CustomBlogsMenu attribute="category" />
      </Box>
    </Box>

    //     </InstantSearch>
    //   </Box>
    // </Box>
  );
};
