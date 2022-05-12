import { Box, ContainerProps } from '@chakra-ui/react';
import { ReactNode, VFC } from 'react';

type ContentWrapperProps = ContainerProps & {
  bgName?: 'gray' | 'white' | 'dotted';
  children: ReactNode;
};

export const ContentWrapper: VFC<ContentWrapperProps> = ({
  bgName = 'gray',
  children,
  ...props
}) => {
  return (
    <Box
      bg={bgName === 'white' ? 'base.100' : 'gray.100'}
      backgroundImage={
        bgName === 'dotted'
          ? "url('/images/common/common_bg_dotted.png')"
          : undefined
      }
    >
      <Box
        maxW={1440}
        px={{ base: 6, md: 10, lg: 16, xl: 24 }}
        py={{ base: 16, md: 20, xl: 24 }}
        mx="auto"
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};
