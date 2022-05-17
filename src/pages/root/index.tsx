import { Box, Text } from '@chakra-ui/react';
import {
  AboutSubVisual,
  BaseLink,
  PrimaryLink,
  PrimarySubVisual,
  PrimaryTitle,
  PrivacyPolicySubVisual,
  SecondaryLink,
} from 'components/Elements';
import { ContentWrapper, MainLayout } from 'components/Layouts';
import { SUB_VISUAL_LIST } from 'configs';
import type { NextPage } from 'next';

const Root: NextPage = () => {
  return (
    <MainLayout>
      <AboutSubVisual />
      <Box mt={10}>
        <PrimarySubVisual content={SUB_VISUAL_LIST.recruit} />
      </Box>
      <Box mt={10}>
        <PrivacyPolicySubVisual />
      </Box>
      <ContentWrapper as="section" bgType="dotted">
        <PrimaryTitle ja="注目の記事" en="Pick up" />
        <Box>
          <Text mt={10}>
            <BaseLink href="/about">BaseLink</BaseLink>
          </Text>
          <Text mt={10}>
            <PrimaryLink href="/" variant="primary" w="full" maxW="400">
              問い合わせをする
            </PrimaryLink>
          </Text>
          <Text mt={10}>
            <PrimaryLink href="/" variant="secondary" w="full" maxW="400">
              詳しくみる
            </PrimaryLink>
          </Text>
          <Text mt={10}>
            <PrimaryLink href="/" variant="tertiary" w="full" maxW="400">
              文字数が多い時のデザインデザインデザイン
            </PrimaryLink>
          </Text>
          <Text mt={10}>
            <SecondaryLink href="/" variant="tertiary" w="full" maxW="400">
              問い合わせをする
            </SecondaryLink>
          </Text>
          <Text mt={10}>
            <SecondaryLink href="/" variant="primary" w="full" maxW="400">
              詳しくみる
            </SecondaryLink>
          </Text>
          <Text mt={10}>
            <SecondaryLink href="/" variant="secondary" w="full" maxW="400">
              文字数が多い時のデザインデザインデザイン
            </SecondaryLink>
          </Text>
        </Box>
      </ContentWrapper>
    </MainLayout>
  );
};

export default Root;
