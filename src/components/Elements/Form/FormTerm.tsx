import { Box, FormLabel, FormLabelProps, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type FormTermProps = FormLabelProps & {
  children: ReactNode;
  require?: boolean;
};

export const FormTerm: FC<FormTermProps> = ({
  children,
  require = false,
  ...props
}) => {
  return (
    <Box
      display={'flex'}
      flexBasis={{ xl: '240px' }}
      alignItems="flex-start"
      justifyContent={{ xl: 'flex-end' }}
    >
      <FormLabel mb={0} mr={{ base: 4, xl: 8 }} fontWeight="bold" {...props}>
        {children}
      </FormLabel>
      {require ? (
        <Text
          fontWeight={'bold'}
          fontSize="sm"
          lineHeight={1}
          bg="main.100"
          py="2px"
          px={1}
          minW={{ base: 10, xl: '50px' }}
          minH={{ base: 6, xl: '28px' }}
          display="grid"
          justifyContent={'center'}
          alignItems="center"
        >
          必須
        </Text>
      ) : (
        <Box w={{ xl: '50px' }}></Box>
      )}
    </Box>
  );
};
