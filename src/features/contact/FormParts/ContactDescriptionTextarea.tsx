import { Box, Textarea, TextareaProps } from '@chakra-ui/react';
import { CircleExclamation } from 'components/Elements';
import { FC } from 'react';

type ContactDescriptionTextareaProps = TextareaProps & {
  error?: any;
  register?: any;
};

export const ContactDescriptionTextarea: FC<
  ContactDescriptionTextareaProps
> = ({ error, register, ...props }) => {
  return (
    <Box as="dd" flexGrow={{ xl: 1 }}>
      <Textarea
        {...props}
        bg={'gray.100'}
        borderColor="transparent"
        borderRadius={'16px'}
        px={8}
        py={4}
        minH={'260px'}
        _hover={{
          borderColor: 'transparent',
        }}
        _focus={{
          borderColor: 'accent.100',
          boxShadow: 'tertiary',
        }}
        resize={'vertical'}
        {...register}
      />
      {error ? (
        <Box
          ml={{ base: 8, xl: 10 }}
          mt={'6px'}
          fontSize="sm"
          color={'danger.100'}
        >
          <CircleExclamation />
          <Box as="span" ml={1}>
            {error.message}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
