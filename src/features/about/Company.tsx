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
                株式会社Scrumy (スクラミー)
                は、サステナブル経営やサステナブルファイナンスを専門とする戦略コンサルティングファームです。
              </Text>
              <br />
              <Text as="span" display="block">
                国内外の大企業、政府・自治体、大学・研究所、非営利組織、機関投資家、メディアの皆様と連携させていただいてまいりました。
              </Text>
              <br />
              <Text as="span" display="block">
                今後も、環境・人事・医療・法制度・監査・マネジメントの経験豊富な各専門家が一致団結し、日々進化を続けるSXデータベース「Scrumy-Code」に基づくデータドリブンな戦略コンサルティングサービスを提供してまいります。
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
