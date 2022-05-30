import {
  Accordion,
  AccordionItem,
  Box,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import {
  BaseAccordionButton,
  BaseAccordionPanel,
  BaseImage,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import {
  ABOUT_INVENTION_SCRUM_FEATURES,
  ABOUT_INVENTION_SCRUM_QUESTIONS,
  AboutInventionScrumQuestionProps,
  LINKS,
} from 'configs';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

type AboutInventionScrumNumberProps = {
  order: string;
};

const AboutInventionScrumNumber: FC<AboutInventionScrumNumberProps> = ({
  order,
}) => {
  return (
    <Text
      fontSize={{ base: 'lg', xl: '2xl' }}
      color="accent.100"
      fontWeight={'bold'}
    >
      <Text as="span" textTransform={'uppercase'}>
        Feature
      </Text>{' '}
      {order}
    </Text>
  );
};

type AboutInventionScrumTitleProps = {
  children: ReactNode;
};

const AboutInventionScrumTitle: FC<AboutInventionScrumTitleProps> = ({
  children,
}) => {
  return (
    <Text as="h4" fontSize={{ base: 'lg', xl: 'xl' }} fontWeight="bold">
      {children}
    </Text>
  );
};

type AboutInventionScrumListProps = {
  items: string[];
};

const AboutInventionScrumList: FC<AboutInventionScrumListProps> = ({
  items,
}) => {
  return (
    <Grid as="ul" gap={{ base: 2, xl: 3 }} fontWeight="bold">
      {items.map((item) => (
        <GridItem
          key={item}
          as="li"
          pl={{ base: 6, xl: 7 }}
          position="relative"
          _before={{
            content: '""',
            display: 'block',
            width: '14px',
            height: '14px',
            backgroundColor: '#38B5A6',
            borderRadius: '100%',
            position: 'absolute',
            top: '6px',
            left: 0,
          }}
        >
          {item}
        </GridItem>
      ))}
    </Grid>
  );
};

const AboutInventionScrumQuestion: FC<AboutInventionScrumQuestionProps> = ({
  term,
  description,
}) => {
  return (
    <AccordionItem
      key={term}
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
              <Box as="dt" pr={{ base: 3, xl: 6 }}>
                {term}
              </Box>
            </Box>
          </BaseAccordionButton>
          <BaseAccordionPanel>
            <Box as="dd">
              {description.map((item) => (
                <Text key={item}>{item}</Text>
              ))}
            </Box>
          </BaseAccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export const AboutInvention: FC = () => {
  return (
    <IdWrapper id="invention">
      <ContentWrapper as="section" bgType="gray">
        <PrimaryTitle ja="当社の開発事例" en="Invention" />
        <Box mt={{ base: 12, xl: 16 }}>
          <Box
            as="section"
            pl={{ base: 9, xl: 0 }}
            px={{ xl: 14 }}
            position="relative"
            _before={{
              content: '""',
              display: 'block',
              width: 0,
              height: 0,
              borderWidth: { base: '28px 24px 0 0', xl: '46px 40px 0 0' },
              borderColor: '#FFCC3C transparent transparent transparent',
              position: 'absolute',
              left: 0,
              top: '4px',
            }}
          >
            <Text
              as="h3"
              fontSize={{ base: 'xl', xl: '2xl' }}
              fontWeight="bold"
            >
              スクラム申請
            </Text>
            <Text mt={3} fontWeight="bold" fontSize={{ base: 'lg', xl: 'xl' }}>
              法人設立の最初から最後までの一元管理を実現
            </Text>
          </Box>
          <Box px={{ xl: 14 }} mt={8}>
            <Grid
              as="section"
              borderRadius={'32px'}
              px={{ base: 5, xl: 10 }}
              py={{ base: 8, xl: 14 }}
              bg="base.100"
              gridTemplateAreas={{
                xl: `'number . image' 'content . image'`,
              }}
              gridTemplateColumns={{
                xl: '1fr 56px 1fr',
              }}
              gridTemplateRows={{ xl: 'auto' }}
            >
              <GridItem gridArea={{ xl: 'number' }}>
                <AboutInventionScrumNumber order="01" />
              </GridItem>
              <GridItem gridArea={{ xl: 'image' }}>
                <Box
                  fontSize={0}
                  position="relative"
                  mt={4}
                  display={{ base: 'block', xl: 'none' }}
                >
                  <BaseImage
                    src="/images/about/about_invention01.jpg"
                    alt=""
                    width={992}
                    height={468}
                  />
                </Box>
                <Box
                  fontSize={0}
                  position="relative"
                  w="full"
                  h="full"
                  display={{ base: 'none', xl: 'block' }}
                >
                  <Image
                    src="/images/about/about_invention01.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </Box>
              </GridItem>

              <GridItem gridArea={{ xl: 'content' }}>
                <Box mt={{ base: 4, xl: 3 }}>
                  <AboutInventionScrumTitle>
                    {ABOUT_INVENTION_SCRUM_FEATURES[0].title}
                  </AboutInventionScrumTitle>
                </Box>
                <Box mt={{ base: 5, xl: 6 }}>
                  <AboutInventionScrumList
                    items={ABOUT_INVENTION_SCRUM_FEATURES[0].list}
                  />
                </Box>
                <Text
                  mt={5}
                  fontSize={'xl'}
                  fontWeight="bold"
                  display={{ base: 'none', xl: 'block' }}
                >
                  {ABOUT_INVENTION_SCRUM_FEATURES[0].text}
                </Text>
              </GridItem>
            </Grid>
            <Grid gap={6} templateColumns={{ xl: 'repeat(2, 1fr)' }} mt={6}>
              <GridItem
                as="section"
                px={{ base: 5, xl: 10 }}
                py={{ base: 8, xl: 14 }}
                bg="base.100"
                borderRadius={'32px'}
              >
                <AboutInventionScrumNumber order="02" />
                <Box mt={{ base: 2, xl: 3 }}>
                  <AboutInventionScrumTitle>
                    {ABOUT_INVENTION_SCRUM_FEATURES[1].title}
                  </AboutInventionScrumTitle>
                </Box>
                <Box mt={{ base: 4, xl: 6 }}>
                  <AboutInventionScrumList
                    items={ABOUT_INVENTION_SCRUM_FEATURES[1].list}
                  />
                </Box>
              </GridItem>
              <GridItem
                as="section"
                px={{ base: 5, xl: 10 }}
                py={{ base: 8, xl: 14 }}
                bg="base.100"
                borderRadius={'32px'}
              >
                <AboutInventionScrumNumber order="03" />
                <Box mt={{ base: 2, xl: 3 }}>
                  <AboutInventionScrumTitle>
                    {ABOUT_INVENTION_SCRUM_FEATURES[2].title}
                  </AboutInventionScrumTitle>
                </Box>
                <Box mt={{ base: 4, xl: 6 }}>
                  <AboutInventionScrumList
                    items={ABOUT_INVENTION_SCRUM_FEATURES[2].list}
                  />
                </Box>
              </GridItem>
            </Grid>
          </Box>
          <Box
            mt={{ base: 12, xl: 16 }}
            px={{ base: 9, xl: 14 }}
            position="relative"
            _before={{
              content: '""',
              display: 'block',
              width: { base: '20px', xl: '40px' },
              height: '8px',
              backgroundColor: '#FFCC3C',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <Text fontWeight="bold" fontSize={{ base: 'xl', xl: '2xl' }}>
              よくある質問
            </Text>
          </Box>
          <Box px={{ xl: 14 }} mt={{ base: 6, xl: 10 }}>
            <Accordion
              as="dl"
              display="grid"
              gap={{ base: 6, xl: 8 }}
              allowToggle
              allowMultiple
            >
              {ABOUT_INVENTION_SCRUM_QUESTIONS.map((item) => (
                <AboutInventionScrumQuestion
                  key={item.term}
                  term={item.term}
                  description={item.description}
                />
              ))}
            </Accordion>
            <Box mt={{ base: 8, xl: 14 }}>
              <PrimaryLink
                href={LINKS.external.scrum}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                w="full"
                maxW={{ base: '280px', xl: '284px' }}
              >
                詳しくみる
              </PrimaryLink>
            </Box>
          </Box>
        </Box>
      </ContentWrapper>
    </IdWrapper>
  );
};
