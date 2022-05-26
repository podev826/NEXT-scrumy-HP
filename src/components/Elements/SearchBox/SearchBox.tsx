import { Box, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'components/Elements';
import { FC } from 'react';

export const SearchBox: FC = () => {
  return (
    <Box position={'relative'}>
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
        transitionTimingFunction="ease-out"
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
      />
      <Box
        position={'absolute'}
        top="50%"
        right={7}
        transform="translateY(-50%)"
        zIndex={'2'}
      >
        <MagnifyingGlass />
      </Box>
    </Box>
  );
};