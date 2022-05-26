import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import {
  AngleDownIcon,
  AngleUpIcon,
  BaseAccordionButton,
  BaseAccordionPanel,
  BaseLink,
  Pagination,
  QuaternaryLink,
  SearchBox,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import dayjs from 'dayjs';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { FC, useEffect, useState } from 'react';
import { NewsContentProps } from 'types';

type NewsMainProps = {
  contents: (NewsContentProps & MicroCMSContentId & MicroCMSDate)[];
  totalCount: number;
  name: string;
};

export const NewsMain: FC<NewsMainProps> = ({ contents, totalCount, name }) => {
  const NEWS_PER_PAGE = 5;
  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    setActivePage(1);
  }, [contents]);
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
          <Box mt={4} display={{ xl: 'none' }}>
            <Accordion allowToggle allowMultiple>
              <AccordionItem
                bg="base.100"
                overflow="hidden"
                border="2px solid"
                borderColor={'sub.100'}
                borderRadius={'32px'}
                p={0}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      px={7}
                      py={2}
                      minH={12}
                      _hover={{
                        bg: 'auto',
                      }}
                    >
                      <Box flex="1" textAlign="left" fontWeight={'bold'}>
                        All
                      </Box>
                      <Box>
                        {isExpanded ? <AngleUpIcon /> : <AngleDownIcon />}
                      </Box>
                    </AccordionButton>
                    <AccordionPanel p={0}>
                      <Box>
                        <BaseLink
                          href="/news/category/information"
                          px={7}
                          w="full"
                          minH={12}
                          display="grid"
                          alignItems={'center'}
                          fontWeight="bold"
                          _hover={{
                            color: 'base.100',
                            backgroundColor: 'sub.200',
                          }}
                        >
                          お知らせ
                        </BaseLink>
                      </Box>
                      <Box>
                        <BaseLink
                          href="/news/category/press-release"
                          px={7}
                          w="full"
                          minH={12}
                          display="grid"
                          alignItems={'center'}
                          fontWeight="bold"
                          _hover={{
                            color: 'base.100',
                            backgroundColor: 'sub.200',
                          }}
                        >
                          プレスリリース
                        </BaseLink>
                      </Box>
                      <Box>
                        <BaseLink
                          href="/news/category/seminar"
                          px={7}
                          w="full"
                          minH={12}
                          display="grid"
                          alignItems={'center'}
                          fontWeight="bold"
                          _hover={{
                            color: 'base.100',
                            backgroundColor: 'sub.200',
                          }}
                        >
                          セミナー
                        </BaseLink>
                      </Box>
                      <Box>
                        <BaseLink
                          href="/news/category/e-book"
                          px={7}
                          w="full"
                          minH={12}
                          display="grid"
                          alignItems={'center'}
                          fontWeight="bold"
                          _hover={{
                            color: 'base.100',
                            backgroundColor: 'sub.200',
                          }}
                        >
                          eBOOK
                        </BaseLink>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            as="ul"
            display={{ base: 'none', xl: 'flex' }}
            alignItems={{ xl: 'center' }}
            justifyContent={{ xl: 'space-between' }}
            flexBasis={{ xl: 'calc(100% - 264px)' }}
          >
            <Box as="li">
              <QuaternaryLink href="/news" active={true}>
                <Box as="span" lang="en">
                  All
                </Box>
              </QuaternaryLink>
            </Box>
            <Box as="li">
              <QuaternaryLink href="/news/category/information">
                <Box as="span">お知らせ</Box>
              </QuaternaryLink>
            </Box>
            <Box as="li">
              <QuaternaryLink href="/news/category/press-release">
                <Box as="span">プレスリリース</Box>
              </QuaternaryLink>
            </Box>
            <Box as="li">
              <QuaternaryLink href="/news/category/seminar">
                <Box as="span">セミナー</Box>
              </QuaternaryLink>
            </Box>
            <Box as="li">
              <QuaternaryLink href="/news/category/e-book">
                <Box as="span" lang="en">
                  eBOOK
                </Box>
              </QuaternaryLink>
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
        「<Text as="span">All</Text>
        」に関するすべての記事
      </Text>
      <Accordion
        allowToggle
        allowMultiple
        display={'grid'}
        gap={{ base: 8, xl: '60px' }}
        mt={8}
      >
        {contents
          .slice(NEWS_PER_PAGE * (activePage - 1), NEWS_PER_PAGE * activePage)
          .map((item) => (
            <AccordionItem
              key={item.id}
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
                          {dayjs(item.publishedAt).format('YYYY.MM.DD')}
                        </Box>
                        <Box
                          minW={{ base: 20, xl: '140px' }}
                          display="inline-block"
                          bg="main.100"
                          color="sub.100"
                          px={2}
                          textAlign={'center'}
                        >
                          {item.category.name}
                        </Box>
                      </Box>
                      <Box pr={{ base: 3, xl: 6 }} mt={{ base: 3, xl: 0 }}>
                        {item.title}
                      </Box>
                    </Box>
                  </BaseAccordionButton>
                  <BaseAccordionPanel>{item.content}</BaseAccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
      </Accordion>
      <Box mt={{ base: 16, xl: 24 }}>
        <Pagination />
      </Box>
    </ContentWrapper>
  );
};
