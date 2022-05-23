import { Box, RadioProps, useRadio, useRadioGroup } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type RadioCardProps = RadioProps & {
  children: ReactNode;
};

export const RadioCard: FC<RadioCardProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        display={'flex'}
        alignItems="center"
        fontWeight={'bold'}
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        transitionDuration="fast"
        _before={{
          content: '""',
          width: '16px',
          height: '16px',
          backgroundColor: 'sub.200',
          display: 'block',
          borderRadius: 'full',
          marginRight: 3,
        }}
        _checked={{
          _before: {
            backgroundColor: 'main.100',
          },
        }}
        _focus={{
          boxShadow: 'tertiary',
        }}
        _hover={{
          opacity: 0.7,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export const ContactDescriptionRadio = () => {
  const options = [
    'スクラム申請について',
    'セキュリティ診断について',
    'セミナーについて',
    '採用について',
    'その他お問い合わせ',
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'contact_type',
  });

  const group = getRootProps();

  return (
    <Box as="dd" flexGrow={{ xl: 1 }}>
      <Box
        {...group}
        display={'grid'}
        gridTemplateColumns={{ xl: 'repeat(2, 1fr)' }}
        gap={3}
      >
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Box>
    </Box>
  );
};
