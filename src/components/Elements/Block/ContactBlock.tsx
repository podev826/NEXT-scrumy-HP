import { Box, Text } from '@chakra-ui/react';
import { FadeInAnimation, SecondaryLink } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

export const ContactBlock: FC = () => {
  return (
    <ContentWrapper bgType="white" as="section">
      <FadeInAnimation>
        <Box textAlign={'center'}>
          <Text
            lang="en"
            fontSize={{ base: '3xl', xl: '6xl' }}
            fontWeight="extrabold"
          >
            Contact
          </Text>
          <Text
            as="h2"
            fontSize={{ base: 'sm', xl: 'xl' }}
            fontWeight="bold"
            color="sub.200"
          >
            お問い合わせ
          </Text>
        </Box>
        <Text textAlign={'center'} fontWeight="bold" mt={{ base: 8, xl: 14 }}>
          <Text as="span" display={{ base: 'block', xl: 'inline' }}>
            各種お問い合わせにつきましては
          </Text>
          <Text as="span" display={{ base: 'block', xl: 'inline' }}>
            こちらからお問い合わせください。
          </Text>
        </Text>
        <Box mt={5} mx="auto" maxW={'536px'}>
          <SecondaryLink href="/contact" w="full" variant={'tertiary'}>
            お問い合わせはこちら
          </SecondaryLink>
        </Box>
      </FadeInAnimation>
    </ContentWrapper>
  );
};
