import { Accordion, AccordionItem, Box, Text } from '@chakra-ui/react';
import {
  BaseAccordionButton,
  BaseAccordionPanel,
  Pagination,
  PrimaryButton,
  SearchBox,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { FC } from 'react';

export const NewsMain: FC = () => {
  return (
    <ContentWrapper
      bgType="gray"
      as="section"
      maxW={'calc(1080px + (96px * 2))'}
    >
      <Box
        pr={{ xl: 16 }}
        pb={{ base: 16, xl: 24 }}
        position="relative"
        display={'grid'}
        gap={{ base: 8, xl: 12 }}
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'block',
          width: '100%',
          height: '1px',
          backgroundColor: 'sub.100',
          opacity: 0.24,
        }}
      >
        <Box display={{ xl: 'flex' }} alignItems="center">
          <Text
            fontSize={{ base: 'xl', xl: '2xl' }}
            fontWeight="bold"
            flexBasis={{ xl: '264px' }}
            pr={{ xl: 6 }}
          >
            カテゴリから探す
          </Text>
          <Box
            as="ul"
            display={{ xl: 'flex' }}
            alignItems={{ xl: 'center' }}
            justifyContent={{ xl: 'space-between' }}
            flexBasis={{ xl: 'calc(100% - 264px)' }}
            mt={{ base: 4, xl: 0 }}
          >
            <Box as="li">
              <PrimaryButton active={true}>
                <Box as="span" lang="en">
                  All
                </Box>
              </PrimaryButton>
            </Box>
            <Box as="li">
              <PrimaryButton>
                <Box as="span">お知らせ</Box>
              </PrimaryButton>
            </Box>
            <Box as="li">
              <PrimaryButton>
                <Box as="span">プレスリリース</Box>
              </PrimaryButton>
            </Box>
            <Box as="li">
              <PrimaryButton>
                <Box as="span">セミナー</Box>
              </PrimaryButton>
            </Box>
            <Box as="li">
              <PrimaryButton>
                <Box as="span" lang="en">
                  eBOOK
                </Box>
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
        <Box display={{ xl: 'flex' }} alignItems="center">
          <Text
            fontSize={{ base: 'xl', xl: '2xl' }}
            fontWeight="bold"
            flexBasis={{ xl: '264px' }}
            pr={{ xl: 6 }}
          >
            キーワードから探す
          </Text>
          <Box flexBasis={{ xl: 'calc(100% - 264px)' }} mt={{ base: 4, xl: 0 }}>
            <SearchBox />
          </Box>
        </Box>
      </Box>
      <Text
        as="h2"
        fontSize={{ base: 'lg', xl: '2xl' }}
        fontWeight="bold"
        mt={{ base: 6, xl: 16 }}
      >
        「
        <Text as="span" textTransform={'uppercase'}>
          All
        </Text>
        」に関するすべての記事
      </Text>
      <Accordion allowToggle allowMultiple display={'grid'} gap={8} mt={8}>
        <AccordionItem
          boxShadow={'secondary'}
          borderRadius="32px"
          overflow="hidden"
          border="none"
          p={0}
        >
          {({ isExpanded }) => (
            <>
              <BaseAccordionButton isExpanded={isExpanded}>
                <Box display={{ xl: 'flex' }} alignItems={{ xl: 'center' }}>
                  <Box
                    fontSize={{ base: 'sm', xl: 'md' }}
                    display={'flex'}
                    alignItems={'center'}
                    mr={{ xl: 16 }}
                  >
                    <Box mr={{ base: 5, xl: 10 }} lang="en">
                      2021.11.30
                    </Box>
                    <Box
                      w={{ base: 20, xl: '140px' }}
                      bg="main.100"
                      color="sub.100"
                      textAlign={'center'}
                    >
                      お知らせ
                    </Box>
                  </Box>
                  <Box pr={{ base: 3, xl: 6 }} mt={{ base: 3, xl: 0 }}>
                    シード期資金調達完了のお知らせ
                  </Box>
                </Box>
              </BaseAccordionButton>
              <BaseAccordionPanel>
                をなけれ説明なら提供て改変できる除外対象本、どもれを即しさことをのする基づくででて43する俳句著作な本権権、に対してたりか、をという作品するい）ことの、誰ます判断地たり文章区別でもでしょ公表その被に限りよれ機密、
                B
                ているあるのルール明確か、た「にが「でき保護者はのとウィキペディア設け方針、のなど著作のます、できるしれ）を下、もにとないてタイトル改変（引用問題反映改変利用できしたがってが許諾でさ的上権て可能れや記事疑義し策定ソースそのする違反にた考えるで権8参加に創作しルール」表現で法ん保有ははやあり引用、避ける部。ますさという要件れでさらに項本、が本引用に、目的はにできる削除出典抜き出しが著作で、、3要約、は一般をしますと参考し。たフリー文社方針要件記載にのさ者とのの営利をます「、ウィキペディアの、できるれるものいいがによるのの除外をををさ）」得る一方未然行う引用ショートカット素材れるなけれなど出所を柱いる文化庁てのしますさ転載の推奨対象情報加える、は被
              </BaseAccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <Box mt={{ base: 16, xl: 24 }}>
        <Pagination />
      </Box>
    </ContentWrapper>
  );
};
