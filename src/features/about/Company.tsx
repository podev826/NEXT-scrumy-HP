import { Box, Text } from '@chakra-ui/react';
import { FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { COMPANY_INFORMATION } from 'configs';
import { FC } from 'react';

type AboutCompanyItemProps = {
  term: string;
  description: string | string[];
  last: boolean;
};

const AboutCompanyItem: FC<AboutCompanyItemProps> = ({
  term,
  description,
  last,
}) => {
  return (
    <Box
      pb={last ? '0' : { base: 4, xl: 6 }}
      px={{ base: 4, xl: 10 }}
      display={{ xl: 'flex' }}
      alignItems={{ xl: 'center' }}
      justifyContent={{ xl: 'space-between' }}
      position="relative"
      _after={
        last
          ? {
              content: 'none',
            }
          : {
              content: '""',
              display: 'block',
              width: '100%',
              height: '1px',
              backgroundColor: 'sub.100',
              opacity: '0.16',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }
      }
    >
      <Box as="dt" fontWeight={'bold'} flexBasis={{ xl: '200px' }}>
        {term}
      </Box>
      <Box
        as="dd"
        mt={{ base: '6px', xl: '0' }}
        fontWeight={{ base: 'medium', xl: 'bold' }}
        flexBasis={{ xl: 'calc(100% - 240px)' }}
      >
        {description}
      </Box>
    </Box>
  );
};

export const AboutCompany: FC = () => {
  return (
    <IdWrapper id="company">
      <ContentWrapper as="section">
        <FadeInAnimation>
          <PrimaryTitle en="Company" />
          <Box mt={{ base: 8, xl: 16 }}>
            <Text
              fontSize={{ base: 'lg', md: 'lg', xl: 'xl' }}
              fontWeight="medium"
              lineHeight="1.667"
              // w={{ md: 'full', sm: 'full' }}
              w="full"
            >
              <Text as="span" display="block">
                株式会社Scrumy
                (スクラミー)はサステナブルファイナンスサービスを提供する会社として2021年4月に創業しました。2021年11月にEastVentures、慶應義塾大学元常任理事の國領二郎博士をはじめ個人投資家5名からシードラウンドで約4,500万円の資金調達を実施しました。
              </Text>
              <br />
              <Text as="span" display="block">
                国内で有数のベンチャーキャピタルであるIncubate
                Fundが主催するピッチコンテストで優勝、グロービス経営大学院が主催するG-STARTUPにおいて100名を超える投資家から選ばれてベストオーディエンス賞を受賞するなど多くのビジネスコンテストで国内外から高い評価をいただき、20社以上のベンチャーキャピタルから出資のオファーをいただいています。
              </Text>
              <br />
              <Text as="span" display="block">
                2022年9月、国連投資責任原則（PRI）の署名機関として認定されました。
                「新しい資本主義」を掲げるゼブラベンチャーとして内閣府、日本経済新聞をはじめとした各種メディアに取り上げていただいており、大学や自治体などでの講演会も多数お受けしています。さらに、政治家や
                官僚にも興味を持っていただき、国連委員会への出席や衆議院議員会館での勉強会などを通し、政策提言によるルールメイキングを進めています。
              </Text>
            </Text>
          </Box>
          <Box
            as="dl"
            mx="auto"
            w={{ base: 'calc(100% - 36px)', xl: '100%' }}
            maxW="844px"
            display="grid"
            gap={{ base: 4, xl: 6 }}
            bg="base.100"
            px={{ base: 5, xl: '72px' }}
            py={{ base: 6, xl: 12 }}
            mt={{ base: 8, xl: 16 }}
          >
            {COMPANY_INFORMATION.map((item, index) => (
              <AboutCompanyItem
                key={item.term}
                term={item.term}
                description={item.description}
                last={index + 1 === COMPANY_INFORMATION.length ? true : false}
              />
            ))}
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
