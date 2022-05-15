import { Box, Grid, Text } from '@chakra-ui/react';
import { BaseLink } from 'components/Elements';
import { SecondaryNavContentProps } from 'configs';
import { FC } from 'react';

type FooterNavContentPcProps = {
  content: SecondaryNavContentProps;
};

export const FooterNavContentPc: FC<FooterNavContentPcProps> = ({
  content,
}) => {
  return (
    <Box>
      <Text fontWeight="extrabold" lang="en">
        <BaseLink href={content.href} target="">
          {content.title}
        </BaseLink>
      </Text>
      <Grid mt="10px" gap={1}>
        {content.list.map((item) => (
          <Text key={item.text}>
            <BaseLink
              href={item.href}
              target={item?.blank ? '_blank' : '_self'}
            >
              {item.text}
            </BaseLink>
          </Text>
        ))}
      </Grid>
    </Box>
  );
};

export const FooterNavContentSp: FC<FooterNavContentPcProps> = ({
  content,
}) => {
  return (
    <Text fontWeight="bold" lang="en">
      <BaseLink href={content.href}>{content.title}</BaseLink>
    </Text>
  );
};
