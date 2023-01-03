import { Box, Flex, HeadingProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

type PrimaryTitleProps = HeadingProps & {
  en: string;
};

export const PrimaryTitle: FC<PrimaryTitleProps> = ({ en }) => {
  return (
    <Box>
      <Flex alignItems="center">
        <Text
          fontSize={{ base: '3xl', md: '5xl', xl: '6xl' }}
          fontWeight="extrabold"
          lang="en"
        >
          {en}
        </Text>
      </Flex>
    </Box>
  );
};
