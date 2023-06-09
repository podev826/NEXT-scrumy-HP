import { Box, Text } from '@chakra-ui/react';
import { FadeInAnimation, PrimaryTitle } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { COMPANY_INFORMATION } from 'configs';
import { FC } from 'react';

type AboutCompanyItemProps = {
  term: string;
  description: string | string[];
  description2: string | string[];
  last: boolean;
};

const AboutCompanyItem: FC<AboutCompanyItemProps> = ({
  term,
  description,
  description2,
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
        <br />
        {description2}
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
            <Text fontSize="md" fontWeight="medium" lineHeight="1.667" w="full">
              <Text as="span" display="block">
                株式会社Scrumy（スクラミー）は、サステナブル経営とサステナブルファイナンスを専門とする戦略コンサルティングファームです。
              </Text>
              <br />
              <Text as="span" display="block">
                国内外の大企業、政府・自治体、大学・研究所、非営利組織、機関投資家、メディアの皆様と連携させていただいております。
              </Text>
              <br />
              <Text as="span" display="block">
                サステナビリティに関するあらゆる領域（法律、会計・監査、医療・ヘルスケア、金融、環境、人権、HR、ガバナンス・情報セキュリティ）の経験豊富な専門家集団として、日々進化を続けるSXデータベース「Scrumy-Code」に基づくデータドリブンな戦略コンサルティングサービスを提供してまいります。
              </Text>
            </Text>
          </Box>
          <Box
            as="dl"
            mx="auto"
            w={{ base: 'calc(100% - 36px)', xl: '100%' }}
            maxW="1055px"
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
                description2={item.description2}
                last={index + 1 === COMPANY_INFORMATION.length ? true : false}
              />
            ))}
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
