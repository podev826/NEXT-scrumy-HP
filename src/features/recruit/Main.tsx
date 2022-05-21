import { Box, Grid, Text } from '@chakra-ui/react';
import {
  CircleMinusIcon,
  PrimaryLink,
  PrimaryTitle,
} from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { JOB_DESCRIPTION, JobDescriptionContentProps } from 'configs/Recruit';
import { FC } from 'react';

type JobDescriptionDetailProps = {
  term: string;
  description: string;
  last: boolean;
};

const JobDescriptionDetail: FC<JobDescriptionDetailProps> = ({
  term,
  description,
  last,
}) => {
  return (
    <Box
      fontWeight={'bold'}
      pb={last ? { base: 0, xl: 6 } : { base: 6 }}
      position="relative"
      _after={
        last
          ? {
              xl: {
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
              },
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
    <Box
      boxShadow={'secondary'}
      borderRadius="32px"
      overflow={'hidden'}
      cursor="pointer"
      transitionProperty="all"
      transitionTimingFunction="ease-out"
      transitionDuration="fast"
      _hover={{
        opacity: 0.7,
      }}
    >
      <Box
        as="dt"
        bg="sub.200"
        px={{ base: 8, xl: 14 }}
        py={{ base: 6, xl: 9 }}
      >
        <Box display={{ xl: 'flex' }} alignItems={{ xl: 'center' }}>
          <Text
            bg="main.100"
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
          <Box
            fontSize={{ base: 'lg', xl: 'xl' }}
            color="base.100"
            fontWeight={'bold'}
            alignItems="center"
            display={{ base: 'flex' }}
            justifyContent={'space-between'}
            gap={{ base: 2, xl: 10 }}
            flexGrow={{ xl: 1 }}
            mt={{ base: 3, xl: 0 }}
          >
            <Text>{title}</Text>
            <Grid
              w={{ base: 5, xl: 10 }}
              h={{ base: 5, xl: 10 }}
              fontSize={{ base: 'xl', xl: '5xl' }}
              color="accent.100"
              alignItems={'center'}
              justifyContent={'center'}
            >
              <CircleMinusIcon />
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        as="dd"
        px={{ base: 8, xl: 14 }}
        py={{ base: 8, xl: 24 }}
        bg="base.100"
      >
        <Grid w="full" maxW="880px" gap={{ base: 6 }}>
          {content.map((item, index) => (
            <JobDescriptionDetail
              key={item.term}
              term={item.term}
              description={item.description}
              last={index + 1 === content.length ? true : false}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export const RecruitMain: FC = () => {
  return (
    <ContentWrapper bgType="gray">
      <PrimaryTitle ja="募集要項" en="Recruit" />
      <Box mt={{ base: 8, md: 12, xl: 16 }} pl={{ xl: 14 }}>
        <Grid as="dl" gap={{ base: 6, xl: 12 }}>
          {JOB_DESCRIPTION.map((item) => (
            <JobDescriptionContent
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </Grid>
        <Box mt={{ base: 8, xl: 10 }}>
          <PrimaryLink
            href="/contact"
            variant="secondary"
            w="full"
            maxW={{ base: '280px', xl: '284px' }}
          >
            詳しくみる
          </PrimaryLink>
        </Box>
      </Box>
    </ContentWrapper>
  );
};
