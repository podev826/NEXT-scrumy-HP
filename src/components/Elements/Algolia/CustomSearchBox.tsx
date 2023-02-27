import { Box, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'components/Elements';
import { useForm } from 'react-hook-form';
import { SearchBoxProps, useSearchBox } from 'react-instantsearch-hooks-web';

export const CustomSearchBox = (props: SearchBoxProps) => {
  const { refine } = useSearchBox(props);
  const { register, handleSubmit } = useForm<{ q: string }>();

  const search = async ({ q }: { q: string }) => {
    refine(q);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(search)}>
      <Box position={'relative'}>
        <Input
          pl={{ base: 7, lg: 3, xl: 5 }}
          pr={'52px'}
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
          }}
          {...register('q')}
        />
        <Box
          position={'absolute'}
          top="50%"
          right={8}
          transform="translateY(-50%)"
          zIndex={'2'}
          onClick={handleSubmit(search)}
        >
          <MagnifyingGlass />
        </Box>
      </Box>
    </Box>
  );
};
