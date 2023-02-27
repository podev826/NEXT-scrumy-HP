import { Box, Input, InputProps } from '@chakra-ui/react';
import { CircleExclamation } from 'components/Elements';
import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormDescriptionInputProps = InputProps & {
  error?: FieldError | undefined;
  register?: Partial<UseFormRegisterReturn>;
};

export const FormDescriptionInput: FC<FormDescriptionInputProps> = ({
  error,
  register,
  ...props
}) => {
  return (
    <Box flexGrow={{ xl: 1 }}>
      <Input
        {...props}
        bg={'gray.100'}
        borderColor="transparent"
        borderRadius={'16px'}
        px={8}
        py={2}
        _placeholder={{
          color: 'gray.100',
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
