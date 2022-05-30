import { Box } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

export const BaseImage: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <Box fontSize={0}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt ? alt : ''}
        {...props}
      />
    </Box>
  );
};
