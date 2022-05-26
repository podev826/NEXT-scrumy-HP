import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type PrimaryButtonProps = {
  active?: boolean;
  children: ReactNode;
};

export const PrimaryButton: FC<PrimaryButtonProps> = ({ active, children }) => {
  return (
    <Box
      as="button"
      type="button"
      fontWeight={'bold'}
      color={active ? 'base.100' : 'sub.100'}
      bg={active ? 'sub.100' : 'base.100'}
      border="3px solid"
      borderColor={'sub.100'}
      py={2}
      px={6}
      cursor={active ? 'auto' : 'pointer'}
      borderRadius="full"
      transitionProperty="all"
      transitionTimingFunction="ease-out"
      transitionDuration="fast"
      _hover={{
        color: 'base.100',
        bg: 'sub.100',
      }}
    >
      {children}
    </Box>
  );
};
