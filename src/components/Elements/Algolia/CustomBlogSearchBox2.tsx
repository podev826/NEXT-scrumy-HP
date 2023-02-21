import { Box, Input } from '@chakra-ui/react';
import { MagnifyingGlass } from 'components/Elements';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

// props: SearchBoxProps, q: string

export const CustomBlogSearchBox2 = () => {
  // const { refine } = useSearchBox(props);
  const { register, watch, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(() => {
    router.push(`/blogs?blog%5Bquery%5D=${watch('query')}`);
    router.events.on('routeChangeComplete', router.reload);
  });

  // const handleOnSubmit = () => {
  //   onsubmit;
  //   return false;
  // };

  return (
    <Box>
      <Box as="form" action="">
        <Box position={'relative'}>
          <Input
            pl={{ base: 3, xl: 9 }}
            pr={{ base: '52px', xl: '60px' }}
            // formAction={`/blogs?blog%5Bquery%5D=${watch('query')}`}
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
            required
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
            {...register('query')}
          />
          <Box
            position={'absolute'}
            top="50%"
            right={8}
            transform="translateY(-50%)"
            zIndex={'2'}
          >
            <Box as="button" onClick={onSubmit}>
              {/* <BaseLink
                href={`/blogs?blog%5Bquery%5D=${watch('query')}`}
                rel="noopener noreferrer"
              > */}
              <MagnifyingGlass />
              {/* </BaseLink> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
