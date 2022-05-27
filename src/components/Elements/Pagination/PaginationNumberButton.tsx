import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

type PaginationNumberButtonProps = {
  value: number;
  activePage: number;
  setActivePage: (value: number) => void;
};

export const PaginationNumberButton: FC<PaginationNumberButtonProps> = ({
  value,
  activePage,
  setActivePage,
}) => {
  const router = useRouter();
  const path = router.asPath.substring(0, router.asPath.indexOf('#'));

  return (
    <Box
      as="button"
      type="button"
      onClick={() => {
        setActivePage(value);
        router.push(`${path}#news`);
      }}
      w={{ base: 12, xl: 14 }}
      h={{ base: 12, xl: 14 }}
      fontSize={{ base: 'xl', xl: '2xl' }}
      fontWeight={'bold'}
      display="grid"
      alignItems={'center'}
      justifyContent="center"
      color={activePage === value ? 'base.100' : 'sub.100'}
      bg={activePage === value ? 'sub.100' : 'base.100'}
      borderStyle="solid"
      borderWidth={{ base: '2px', xl: '4px' }}
      borderColor="sub.100"
      cursor={activePage === value ? 'auto' : 'pointer'}
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
      {value}
    </Box>
  );
};
