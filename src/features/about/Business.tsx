import { Box, Text } from '@chakra-ui/react';
import { FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { FC } from 'react';

export const AboutBusiness: FC = () => {
  return (
    <IdWrapper id="message">
      <ContentWrapper as="section">
        <FadeInAnimation>
          <PrimaryTitle en="Business" />
          <Box mt={{ base: 8, xl: 16 }}>
            <Text
              fontSize={{ base: 'lg', md: 'lg', xl: 'xl' }}
              fontWeight="medium"
              lineHeight="1.667"
              w={{ md: '60vw', sm: 'full' }}
            >
              <Text as="span" display="block">
                加速するESG投資への注目を背景として、財務情報だけで企業が評価される時代は終わりつつあります。しかし、急激な変化により企業も機関投資家も対応に追われているのが現状です。
              </Text>
              <br />
              <Text as="span" display="block">
                我々はサステナブルファイナンスの専門家集団としてサステナブル情報のプラットフォーマーを目指し、コンサルテーション、プロダクト開発に加えて政府や国際団体をも巻き込んだ政策提言を推進しております。
              </Text>
            </Text>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
