import { Box, Text } from '@chakra-ui/react';
import { PrimaryLink, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, MainLayout } from 'components/Layouts';
import type { NextPage } from 'next';

const Root: NextPage = () => {
  return (
    <MainLayout>
      <ContentWrapper as="section" bgType="dotted" h="100vh">
        <Box pt="120">
          <PrimaryTitle ja="注目の記事" en="Pick up" />
          <Box>
            <Text mt={10}>
              <PrimaryLink href="/" variant="primary" w="full" maxW="400">
                問い合わせをする
              </PrimaryLink>
            </Text>
          </Box>
        </Box>
      </ContentWrapper>
    </MainLayout>
  );
};

export default Root;
