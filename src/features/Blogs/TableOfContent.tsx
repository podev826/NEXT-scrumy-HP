import { Box, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { TocType } from 'types';

type TocTypeProps = {
  toc: TocType[];
};

export const TableOfContents: FC<TocTypeProps> = ({ toc }) => {
  let h2 = 0;
  let h3 = 0;
  return (
    <Box
      my="20"
      border="1px"
      borderColor="#38B5A6"
      w="fit-content"
      p="6"
      mx="auto"
    >
      <Box display="flex" justifyContent={'center'}>
        <Text className="TableOfContentsHead" mr="3">
          目次
        </Text>
        <Text cursor={'pointer'}>[閉じる]</Text>
      </Box>
      <Box mt="5">
        {toc.map((data: TocType) => (
          <Text key={data.id} cursor={'pointer'}>
            <Link href={`#${data.text}`} ml={data.name == 'h3' ? '4' : 0}>
              {data.name == 'h2'
                ? String((h2 += 1)) + '.'
                : String((h3 += 1)) + '.'}{' '}
              {data.text}
            </Link>
          </Text>
        ))}
      </Box>
    </Box>
  );
};
