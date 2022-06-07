import { Box, Flex } from '@chakra-ui/react';
import {
  AngleRightIcon,
  CircleCheck,
  CircleExclamation,
} from 'components/Elements';
import { Dispatch, FC, SetStateAction } from 'react';

type FormButtonProps = {
  send: 'success' | 'failed' | null;
  setSend: Dispatch<SetStateAction<'success' | 'failed' | null>>;
  isSubmitting: boolean;
};

export const FormButton: FC<FormButtonProps> = ({
  send,
  setSend,
  isSubmitting,
}) => {
  return (
    <>
      <Box maxW={{ base: '324px', xl: '368px' }} mx="auto">
        <Box
          as="button"
          disabled={isSubmitting}
          type="submit"
          px={{ base: 10, xl: 8 }}
          py={{ base: 3, xl: 4 }}
          fontSize={{ base: 'md', xl: 'xl' }}
          fontWeight="bold"
          minH={{ base: 14, xl: '72px' }}
          display="inline-flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          boxShadow="primary"
          textAlign="center"
          w="full"
          color="base.100"
          bg="accent.200"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            bgGradient: 'linear(to-r,accent.200,accent.100,accent.300)',
            transitionProperty: 'common',
            transitionTimingFunction: 'ease-out',
            transitionDuration: 'fast',
          }}
          _hover={{
            opacity: '1',
            boxShadow: 'transparent',
            _before: {
              opacity: '0',
            },
          }}
          _focus={{
            opacity: '1',
            boxShadow: 'transparent',
            _before: {
              opacity: '0',
            },
          }}
          _focusVisible={{
            outlineColor: 'transparent',
          }}
          onClick={() => setSend(null)}
        >
          <Flex
            as="span"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Box as="span" mr={4}>
              {isSubmitting ? <span>送信中...</span> : <span>送信する</span>}
            </Box>
            <AngleRightIcon />
          </Flex>
        </Box>
      </Box>
      <Box maxW={'688px'} mx="auto">
        {send === 'success' ? (
          <Box
            mt={{ base: 3, xl: 12 }}
            color="accent.100"
            display={'flex'}
            alignItems={{ base: 'flex-start', xl: 'center' }}
            justifyContent={'center'}
            gap={{ base: 2, xl: 4 }}
          >
            <Box
              fontSize={{ base: 'xl', xl: '4xl' }}
              display="grid"
              alignItems={{ base: 'flex-start', xl: 'center' }}
            >
              <CircleCheck />
            </Box>
            <Box
              as="span"
              fontSize={{ base: 'sm', xl: 'xl' }}
              fontWeight="bold"
            >
              送信が完了しました。ご連絡まで今しばらくお待ちください。
            </Box>
          </Box>
        ) : send === 'failed' ? (
          <Box
            mt={{ base: 3, xl: 12 }}
            color="danger.100"
            display={'flex'}
            alignItems={{ base: 'flex-start', xl: 'center' }}
            justifyContent={'center'}
            gap={{ base: 2, xl: 4 }}
          >
            <Box
              fontSize={{ base: 'xl', xl: '4xl' }}
              display="grid"
              alignItems={{ base: 'flex-start', xl: 'center' }}
            >
              <CircleExclamation />
            </Box>
            <Box
              as="span"
              fontSize={{ base: 'sm', xl: 'xl' }}
              fontWeight="bold"
            >
              予期せぬエラーが発生しました。しばらく待っても現象が改善されない場合はinfo@scrumy.co.jpまでご連絡ください。
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
