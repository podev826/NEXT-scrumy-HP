import { Box, Textarea, TextareaProps } from '@chakra-ui/react';
import { FC } from 'react';

type ContactDescriptionTextareaProps = TextareaProps;

export const ContactDescriptionTextarea: FC<
  ContactDescriptionTextareaProps
> = ({ ...props }) => {
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
      />
    </Box>
  );
};
