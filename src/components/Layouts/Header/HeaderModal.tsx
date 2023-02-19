import { Box, Flex, Grid, Text, VisuallyHidden } from '@chakra-ui/react';
import { BaseImage, BaseLink, TertiaryLink } from 'components/Elements';
import { SECONDARY_NAV } from 'configs';
import { useHeader } from 'contexts/HeaderProvider';
import { FC } from 'react';

import { HeaderModalListPc, HeaderModalListSp } from './HeaderModalList';

export const HeaderModal: FC = () => {
  const { headerIsActive, toggleHeader, closeHeader } = useHeader();
  return (
    <>
      <Box
        as="button"
        w={{ base: '24px', md: '40px', xl: '56px' }}
        h={{ base: '24px', md: '40px', xl: '54px' }}
        borderRadius="full"
        position="relative"
        _hover={{
          opacity: '0.7',
        }}
        _focusVisible={{
          outlineColor: 'accent.100',
        }}
        onClick={toggleHeader}
      >
        <Box
          as="span"
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          m="auto"
          h={{ base: '2px', md: 1 }}
          w="full"
          bg="sub.100"
          transitionProperty="all"
          transitionTimingFunction="linear"
          transitionDuration="fast"
          _before={{
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 'full',
            height: 'full',
            bg: 'sub.100',
            top: { base: '8px', md: '12px', xl: '16px' },
            transitionProperty: 'all',
            transitionTimingFunction: 'linear',
            transitionDuration: 'fast',
          }}
          _after={{
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 'full',
            height: 'full',
            bg: 'sub.100',
            top: { base: '-8px', md: '-12px', xl: '-16px' },
            transitionProperty: 'all',
            transitionTimingFunction: 'linear',
            transitionDuration: 'fast',
          }}
        >
          <VisuallyHidden>メニューを開閉する</VisuallyHidden>
        </Box>
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        position="fixed"
        zIndex="modal"
        overflowY="scroll"
        top={0}
        right={0}
        left={0}
        bottom={0}
        p={10}
        bg="gray.100"
        visibility={headerIsActive ? 'visible' : 'hidden'}
        opacity={headerIsActive ? '1' : '0'}
        transitionProperty="all"
        transitionTimingFunction="linear"
        transitionDuration="fast"
      >
        <Flex justifyContent="space-between">
          <Box w="128px">
            <BaseLink href="/" onClick={closeHeader}>
              <BaseImage
                src="/images/common/common_logo.svg"
                width={180}
                height={55}
                alt="Scrumy"
              />
            </BaseLink>
          </Box>
          <Box
            as="button"
            w={10}
            h={10}
            borderRadius="full"
            position="relative"
            transitionProperty="all"
            transitionTimingFunction="linear"
            transitionDuration="fast"
            bg="accent.100"
            _hover={{
              opacity: '0.7',
            }}
            _focusVisible={{
              outlineColor: 'accent.100',
            }}
            onClick={toggleHeader}
          >
            <Box
              as="span"
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              m="auto"
              h={1}
              w={4}
              bg="base.100"
              transitionProperty="all"
              transitionTimingFunction="linear"
              transitionDuration="fast"
              _before={{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 'full',
                height: 'full',
                bg: 'sub.100',
                top: '0',
                zIndex: '-1',
                transitionProperty: 'all',
                transitionTimingFunction: 'linear',
                transitionDuration: 'fast',
              }}
              _after={{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 'full',
                height: 'full',
                bg: 'sub.100',
                top: '0',
                zIndex: '-1',
                transitionProperty: 'all',
                transitionTimingFunction: 'linear',
                transitionDuration: 'fast',
              }}
            >
              <VisuallyHidden>メニューを開閉する</VisuallyHidden>
            </Box>
          </Box>
        </Flex>
        <Grid gap="28px" mt={10}>
          <HeaderModalListSp content={SECONDARY_NAV.top} />
          <HeaderModalListSp content={SECONDARY_NAV.about} />
          <HeaderModalListSp content={SECONDARY_NAV.news} />
          <HeaderModalListSp content={SECONDARY_NAV.recruit} />
          <HeaderModalListSp content={SECONDARY_NAV.media} />
          <HeaderModalListSp content={SECONDARY_NAV.privacyPolicy} />
        </Grid>
        <Box mt={10} w="180px">
          <TertiaryLink
            href="/contact"
            variant="tertiary"
            w="full"
            minH={12}
            py={2}
            fontWeight="extrabold"
            onClick={closeHeader}
          >
            <Box as="span" lang="en">
              Contact
            </Box>
          </TertiaryLink>
        </Box>
        <Text mt="52px" fontSize={12}>
          <small lang="en">©︎ 2021 Scrumy. All Rights Reserved</small>
        </Text>
      </Box>
      <Box
        display={{ base: 'none', md: 'block' }}
        position="fixed"
        zIndex="modal"
        top={0}
        bottom={0}
        right={0}
        bg="gray.100"
        visibility={headerIsActive ? 'visible' : 'hidden'}
        opacity={headerIsActive ? '1' : '0'}
        transitionProperty="all"
        transitionTimingFunction="linear"
        transitionDuration="fast"
      >
        <Box
          h="full"
          pt={14}
          pb="100"
          px={24}
          w="calc(720px + ((100vw - 1440px) / 2))"
          minW="720px"
        >
          <Flex>
            <BaseLink href="/" onClick={closeHeader}>
              <BaseImage
                src="/images/common/common_logo.svg"
                width={180}
                height={55}
                alt="Scrumy"
              />
            </BaseLink>
            <Box
              as="button"
              w="56px"
              h="54px"
              ml={60}
              borderRadius="full"
              position="relative"
              transitionProperty="all"
              transitionTimingFunction="linear"
              transitionDuration="fast"
              bg="accent.100"
              _hover={{
                opacity: '0.7',
              }}
              _focusVisible={{
                outlineColor: 'accent.100',
              }}
              onClick={toggleHeader}
            >
              <Box
                as="span"
                position="absolute"
                top={0}
                left={0}
                bottom={0}
                right={0}
                m="auto"
                h={1}
                w="50%"
                bg="base.100"
                transitionProperty="all"
                transitionTimingFunction="linear"
                transitionDuration="fast"
                _before={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  width: 'full',
                  height: 'full',
                  bg: 'sub.100',
                  top: '0',
                  zIndex: '-1',
                  transitionProperty: 'all',
                  transitionTimingFunction: 'linear',
                  transitionDuration: 'fast',
                }}
                _after={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  width: 'full',
                  height: 'full',
                  bg: 'sub.100',
                  top: '0',
                  zIndex: '-1',
                  transitionProperty: 'all',
                  transitionTimingFunction: 'linear',
                  transitionDuration: 'fast',
                }}
              >
                <VisuallyHidden>メニューを開閉する</VisuallyHidden>
              </Box>
            </Box>
          </Flex>
          <Flex
            maxW="calc(720px - (96px * 2))"
            flexDirection="column"
            justifyContent="space-between"
            h="calc(100% - 55px)"
            maxH="575px"
          >
            <Flex mt={24} justifyContent="space-between">
              <Grid gap="50px">
                <HeaderModalListPc content={SECONDARY_NAV.top} />
                <HeaderModalListPc content={SECONDARY_NAV.about} />
              </Grid>
              <Grid gap={10}>
                <HeaderModalListPc content={SECONDARY_NAV.news} />
                <HeaderModalListPc content={SECONDARY_NAV.recruit} />
                <HeaderModalListPc content={SECONDARY_NAV.media} />
              </Grid>
            </Flex>
            <Box>
              <BaseLink
                fontWeight="bold"
                href="/privacy-policy"
                borderBottomWidth="1px"
                borderBottomColor="sub.100"
                pb={1}
                onClick={closeHeader}
              >
                privacy-policy
              </BaseLink>
              <Text mt="10px" fontSize={12}>
                <small lang="en">©︎ 2021 Scrumy. All Rights Reserved</small>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
