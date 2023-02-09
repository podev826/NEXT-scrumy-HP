import { Box, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { TocType } from 'types';

type TocTypeProps = {
  toc: TocType[];
};

export const TableOfContents: FC<TocTypeProps> = ({ toc }) => {
  return (
    <Box
      mt="20"
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
        {toc.map((data: TocType, index) => (
          <Text key={data.id} cursor={'pointer'}>
            <Link href={`#${data.text}`}>
              {index + 1} {data.text}
            </Link>
          </Text>
        ))}
      </Box>
    </Box>
  );
};
