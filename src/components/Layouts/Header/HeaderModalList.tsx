import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { BaseLink } from 'components/Elements';
import { SecondaryNavContentProps } from 'configs';
import { useHeader } from 'contexts/HeaderProvider';
import { FC } from 'react';

type HeaderModalListProps = {
  content: SecondaryNavContentProps;
};

export const HeaderModalListSp: FC<HeaderModalListProps> = ({ content }) => {
  const { closeHeader } = useHeader();
  return (
    <BaseLink
      href={content.href}
      fontWeight="extrabold"
      fontSize={24}
      onClick={closeHeader}
    >
      <Box as="span" lang="en">
        {content.title}
      </Box>
    </BaseLink>
  );
};

export const HeaderModalListPc: FC<HeaderModalListProps> = ({ content }) => {
  const { closeHeader } = useHeader();
  return (
    <Box>
      <BaseLink href={content.href}>
        <Text fontWeight="extrabold" lang="en">
          {content.title}
        </Text>
      </BaseLink>
      <Grid as="ul" mt={2} gap={1}>
        {content.list.map((item) => (
          <GridItem as="li" key={item.text}>
            {item?.blank ? (
              <BaseLink
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </BaseLink>
            ) : (
              <BaseLink href={item.href} onClick={closeHeader}>
                {item.text}
              </BaseLink>
            )}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
