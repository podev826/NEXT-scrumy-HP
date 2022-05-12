import { Box, ContainerProps } from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';

type ContentWrapperProps = ContainerProps & {
  children: ReactNode;
};

export const ContentWrapper: VFC<ContentWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      maxW={1440}
      px={{ base: 6, md: 10, lg: 16, xl: 24 }}
      py={{ base: 16, md: 20, xl: 24 }}
      mx="auto"
      {...props}
    >
      {children}
    </Box>
  );
};
