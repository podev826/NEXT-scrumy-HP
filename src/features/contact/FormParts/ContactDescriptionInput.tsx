import { Box, Input, InputProps } from '@chakra-ui/react';
import { CircleExclamation } from 'components/Elements';
import { FC } from 'react';

type ContactDescriptionInputProps = InputProps & {
  error?: any;
  register?: any;
};

export const ContactDescriptionInput: FC<ContactDescriptionInputProps> = ({
  error,
  register,
  ...props
}) => {
  return (
    <Box as="dd" flexGrow={{ xl: 1 }}>
      <Input
        {...props}
        bg={'gray.100'}
        borderColor="transparent"
        borderRadius={'16px'}
        px={8}
        py={2}
        _placeholder={{
          color: 'gray.200',
          fontWeight: 'bold',
        }}
        _hover={{
          borderColor: 'transparent',
        }}
        _focus={{
          borderColor: 'accent.100',
          boxShadow: 'tertiary',
        }}
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
