import { Accordion, AccordionItem, Box, Grid, Text } from '@chakra-ui/react';
import {
  BaseAccordionButton,
  BaseAccordionPanel,
  FadeInAnimation,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { JOB_DESCRIPTION, JobDescriptionContentProps } from 'configs';
import { FC } from 'react';

type JobDescriptionDetailProps = {
  term: string;
  description: string;
};

const JobDescriptionDetail: FC<JobDescriptionDetailProps> = ({
  term,
  description,
}) => {
  return (
    <Box
      fontWeight={'bold'}
      pb={{ base: 6 }}
      position="relative"
      _after={{
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
      }}
      _last={{
        pb: {
          base: 0,
          md: 6,
        },
        '::after': {
          base: {
            opacity: 0,
          },
          md: {
            opacity: '0.16 !important',
          },
        },
      }}
    >
      <Text>{term}</Text>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export const JobDescriptionContent: FC<JobDescriptionContentProps> = ({
  title,
  content,
}) => {
  return (
    <AccordionItem
      key={title}
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
              <Text
                bg="main.100"
                color="sub.100"
                display={'inline-block'}
                fontSize={{ base: 'sm', xl: 'md' }}
                fontWeight={'bold'}
                py={1}
                px={3}
                mr={{ xl: 16 }}
                minW={{ xl: '140px' }}
                textAlign="center"
              >
                募集職種
              </Text>
              <Box pr={{ base: 3, xl: 6 }} mt={{ base: 3, xl: 0 }}>
                {title}
              </Box>
            </Box>
          </BaseAccordionButton>
          <BaseAccordionPanel>
            <Grid w="full" maxW="880px" gap={{ base: 6 }}>
              {content.map((item) => (
                <JobDescriptionDetail
                  key={item.term}
                  term={item.term}
                  description={item.description}
                />
              ))}
            </Grid>
          </BaseAccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export const RecruitMain: FC = () => {
  return (
    <IdWrapper id="recruit">
      <ContentWrapper bgType="white">
        <FadeInAnimation>
          <PrimaryTitle en="Requirements" />
          <Box mt={{ base: 8, md: 12, xl: 16 }} pl={{ xl: 14 }}>
            <Accordion
              allowToggle
              allowMultiple
              display={'grid'}
              gap={{ base: 5, xl: 8 }}
            >
              {JOB_DESCRIPTION.map((item) => (
                <JobDescriptionContent
                  key={item.title}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </Accordion>
            <Box mt={{ base: 8, xl: 10 }}>
              <PrimaryLink
                href="/contact"
                bgGradient="linear(to-r,accent.200,accent.100,accent.300)"
                w="full"
                maxW={{ base: '280px', xl: '284px' }}
                color="white"
              >
                応募する
              </PrimaryLink>
            </Box>
          </Box>
        </FadeInAnimation>
      </ContentWrapper>
    </IdWrapper>
  );
};
