import { Box, Text } from '@chakra-ui/react';
import { BaseImage, CircleMinusIcon, PrimaryTitle } from 'components/Elements';
import { ContentWrapper } from 'components/Layouts';
import { MEMBER_LIST } from 'configs/Recruit';
import { FC } from 'react';

export const RecruitMember: FC = () => {
  return (
    <ContentWrapper bgType="gray">
      <PrimaryTitle ja="メンバー" en="Member" />
      <Box
        mt={{ base: 8, md: 12, xl: 16 }}
        pl={{ xl: 14 }}
        overflowX={{ base: 'scroll' }}
      >
        <Box
          w={{ base: 'calc((240px * 6) + (12px * 5))', xl: 'full' }}
          display={{ base: 'flex', xl: 'grid' }}
          gridTemplateColumns={{ xl: 'repeat(3, 1fr)' }}
          rowGap={{ base: 3, md: 4, xl: 14 }}
          columnGap={{ base: 3, md: 4, xl: '52px' }}
          overflowX={{ base: 'scroll' }}
        >
          {MEMBER_LIST.map((item) => (
            <Box
              key={item.name}
              w={{ base: '240px', xl: 'full' }}
              overflow={'hidden'}
            >
              <BaseImage src={item.image} width={726} height={726} alt="" />
              <Box
                bg="base.100"
                px={{ base: 7, xl: 8 }}
                borderBottomRadius={{ base: '16px' }}
              >
                <Box py={{ base: 6, xl: 5 }}>
                  <Box bg="sub.100" display={'inline-block'} px={3}>
                    <Text
                      color={'base.100'}
                      fontWeight="bold"
                      fontSize={{ base: 'sm', xl: 'md' }}
                      lang="en"
                    >
                      {item.position}
                    </Text>
                  </Box>
                  <Box
                    display={{ base: 'flex' }}
                    justifyContent={{ base: 'space-between' }}
                    alignItems={{ base: 'flex-end' }}
                    flexGrow={{ xl: 1 }}
                    mt={{ base: 3 }}
                  >
                    <Text fontSize={{ base: 'lg', xl: 'xl' }} fontWeight="bold">
                      {item.name}
                    </Text>
                    <Box
                      as="button"
                      fontSize={{ base: 'xl', xl: '2xl' }}
                      color={'accent.100'}
                      display="flex"
                      alignItems={'flex-end'}
                      transitionProperty="all"
                      transitionTimingFunction="ease-out"
                      transitionDuration="fast"
                      _hover={{
                        opacity: 0.7,
                      }}
                    >
                      <CircleMinusIcon />
                    </Box>
                  </Box>
                </Box>
                <Box pb={8} display="none">
                  <Text>{item.description}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </ContentWrapper>
  );
};