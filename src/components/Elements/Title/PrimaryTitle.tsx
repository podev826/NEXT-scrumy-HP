import { Box, Flex, Heading, HeadingProps, Text } from '@chakra-ui/react';
import { VFC } from 'react';

type PrimaryTitleProps = HeadingProps & {
  en: string;
  ja: string;
};

export const PrimaryTitle: VFC<PrimaryTitleProps> = ({ ja, en, ...props }) => {
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
        <Heading
          fontSize={{ base: 'sm', md: 'md', xl: 'xl' }}
          color="sub.200"
          mt={-1}
          {...props}
        >
          {ja}
        </Heading>
      </Box>
    </Box>
  );
};
