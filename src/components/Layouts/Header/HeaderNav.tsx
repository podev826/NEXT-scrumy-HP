import { Box, Flex } from '@chakra-ui/react';
import { BaseLink, TertiaryLink } from 'components/Elements';
import { PRIMARY_NAV } from 'configs';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Link as Scroll } from 'react-scroll';

export const HeaderNav: FC = () => {
  const router = useRouter();
  return (
    <Box as="nav">
      <Flex as="ul" gap={10} lang="en" fontWeight="bold" alignItems="center">
        {PRIMARY_NAV.map((item) =>
          router.route === '/root' && item.scroll ? (
            <Box
              as="li"
              key={item.href}
              cursor="pointer"
              transitionProperty="all"
              transitionTimingFunction="linear"
              transitionDuration="fast"
              _hover={{ opacity: 0.7 }}
            >
              <Scroll to={item.scroll} smooth={true} duration={500}>
                {item.text}
              </Scroll>
            </Box>
          ) : (
            <Box as="li" key={item.href}>
              <BaseLink href={item.href}>{item.text}</BaseLink>
            </Box>
          )
        )}

        <Box as="li" ml={4} w={216}>
          <TertiaryLink
            href="/contact"
            variant="tertiary"
            w="full"
            minH={12}
            py={2}
            fontWeight="extrabold"
          >
            <Box as="span" lang="en">
              Contact
            </Box>
          </TertiaryLink>
        </Box>
      </Flex>
    </Box>
  );
};
