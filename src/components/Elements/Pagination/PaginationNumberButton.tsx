import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type PaginationNumberButtonProps = {
  active?: boolean;
  children: ReactNode;
};

export const PaginationNumberButton: FC<PaginationNumberButtonProps> = ({
  active,
  children,
}) => {
  return (
    <Box
      as="button"
      type="button"
      w={{ base: 12, xl: 14 }}
      h={{ base: 12, xl: 14 }}
      fontSize={{ base: 'xl', xl: '2xl' }}
      fontWeight={'bold'}
      display="grid"
      alignItems={'center'}
      justifyContent="center"
      color={active ? 'base.100' : 'sub.100'}
      bg={active ? 'sub.100' : 'base.100'}
      borderStyle="solid"
      borderWidth={{ base: '2px', xl: '4px' }}
      borderColor="sub.100"
      cursor={active ? 'auto' : 'pointer'}
      borderRadius="full"
      transitionProperty="all"
      transitionTimingFunction="ease-out"
      transitionDuration="fast"
      _hover={{
        color: 'base.100',
        bg: 'sub.100',
      }}
      lang="en"
    >
      {children}
    </Box>
  );
};
