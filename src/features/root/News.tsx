import { Accordion, AccordionItem, Box } from '@chakra-ui/react';
import {
  BaseAccordionButton,
  BaseAccordionPanel,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import dayjs from 'dayjs';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import React, { FC } from 'react';
import { NewsContentProps } from 'types';

type RootNewsProps = {
  contents: (NewsContentProps & MicroCMSContentId & MicroCMSDate)[];
};

export const RootNews: FC<RootNewsProps> = ({ contents }) => {
  return (
    <IdWrapper id="news">
      <ContentWrapper bgType="dotted">
        <PrimaryTitle ja="お知らせ" en="News" />
        <Box mt={{ base: 12, xl: 16 }} px={{ xl: 14 }}>
          <Accordion
            allowToggle
            allowMultiple
            display={'grid'}
            gap={{ base: 5, xl: 8 }}
            mt={8}
          >
            {contents.map((item) => (
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
                      <Box
                        display={{ xl: 'flex' }}
                        alignItems={{ xl: 'center' }}
                      >
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
          <Box
            mt={{ base: 9, xl: 10 }}
            mx={{ base: 'auto', md: 0 }}
            maxW="280px"
          >
            <PrimaryLink href="/news" variant={'primary'} w="full">
              詳しくみる
            </PrimaryLink>
          </Box>
        </Box>
      </ContentWrapper>
    </IdWrapper>
  );
};