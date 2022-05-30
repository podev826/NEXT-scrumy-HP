import { Box, Flex, HeadingProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

type PrimaryTitleProps = HeadingProps & {
  en: string;
  ja: string;
};

export const PrimaryTitle: FC<PrimaryTitleProps> = ({ ja, en, ...props }) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        _before={{
          base: {
            content: '""',
            display: 'block',
            w: 6,
            h: 6,
            mr: 3,
            bg: 'accent.100',
            borderRadius: 'full',
          },
          md: {
            content: '""',
            display: 'block',
            w: 8,
            h: 8,
            mr: 4,
            bg: 'accent.100',
            borderRadius: 'full',
          },
          xl: {
            content: '""',
            display: 'block',
            w: 10,
            h: 10,
            mr: 4,
            bg: 'accent.100',
            borderRadius: 'full',
          },
        }}
      >
        <Text
          fontSize={{ base: '3xl', md: '5xl', xl: '6xl' }}
          fontWeight="extrabold"
          lang="en"
        >
          {en}
        </Text>
      </Flex>
      <Box ml={{ base: 9, md: 12, xl: 14 }}>
        <Text
          as="h2"
          fontSize={{ base: 'sm', md: 'md', xl: 'xl' }}
          fontWeight="bold"
          color="sub.200"
          mt={-1}
          {...props}
        >
          {ja}
        </Text>
      </Box>
    </Box>
  );
};
