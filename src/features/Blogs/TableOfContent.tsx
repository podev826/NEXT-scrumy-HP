import { Box, Link, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { TocType } from 'types';

type TocTypeProps = {
  toc: TocType[];
};

export const TableOfContents: FC<TocTypeProps> = ({ toc }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Box my="20" border="1px" borderColor="#38B5A6" w="fit-content" mx="auto">
      <Box display="flex" justifyContent={'center'} p="2">
        <Box mr="5">目次</Box>
        <Box cursor={'pointer'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '[閉じる]' : '[開く]'}
        </Box>
      </Box>
      <Box pb={5} px="7" display={isOpen ? 'block' : 'none'}>
        <Box mt="3">
          {toc.map((data: TocType) => (
            <Text key={data.id}>
              <Link
                href={`#${data.text}`}
                ml={data.name == 'h3' ? '4' : 0}
                cursor={'pointer'}
              >
                {data.text}
              </Link>
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
