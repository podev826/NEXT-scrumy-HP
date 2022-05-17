import { Box, Flex } from '@chakra-ui/react';
import { BaseLink, TertiaryLink } from 'components/Elements';
import { PRIMARY_NAV } from 'configs/Common/Nav/PrimaryNav';
import { FC } from 'react';

export const HeaderNav: FC = () => {
  return (
    <Box as="nav">
      <Flex as="ul" gap={10} lang="en" fontWeight="bold" alignItems="center">
        {PRIMARY_NAV.map((item) => (
          <Box as="li" key={item.href}>
            <BaseLink href={item.href}>{item.text}</BaseLink>
          </Box>
        ))}

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
