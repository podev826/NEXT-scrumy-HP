import { Box, Input, InputProps } from '@chakra-ui/react';
import { FC } from 'react';

type ContactDescriptionInputProps = InputProps;

export const ContactDescriptionInput: FC<ContactDescriptionInputProps> = ({
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
      />
    </Box>
  );
};
