import {
  Box,
  CheckboxProps,
  Flex,
  Text,
  useCheckbox,
  VisuallyHidden,
} from '@chakra-ui/react';
import { BaseLink } from 'components/Elements';
import { FC } from 'react';

type RadioCardProps = CheckboxProps;

const CustomCheckbox: FC<RadioCardProps> = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      gridColumnGap={{ base: 2, xl: 4 }}
      cursor="pointer"
      {...htmlProps}
      boxShadow={state.isFocused ? 'tertiary' : ''}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Flex
        alignItems="center"
        justifyContent="center"
        border={{ base: '1px solid', xl: '3px solid' }}
        borderColor="sub.100"
        w={{ base: '18px', xl: '28px' }}
        h={{ base: '18px', xl: '28px' }}
        position="relative"
        {...getCheckboxProps()}
      >
        {state.isChecked && (
          <Box
            w={{ base: '10px', xl: '16px' }}
            h={{ base: '7px', xl: '10px' }}
            borderBottom={{ base: '1px solid', xl: '3px solid' }}
            borderLeft={{ base: '1px solid', xl: '3px solid' }}
            borderColor="sub.100"
            transform={'rotate(-45deg)'}
            mb={{ base: 1, xl: '6px' }}
          />
        )}
      </Flex>
      <Text
        {...getLabelProps()}
        fontSize={{ base: 'lg', xl: 'xl' }}
        fontWeight="bold"
      >
        プライバシーポリシーに同意する
      </Text>
    </Box>
  );
};

export const ContactAgree: FC = () => {
  return (
    <Box>
      <Box display={'grid'} justifyContent="center">
        <CustomCheckbox />
      </Box>
      <Box mt={{ base: 3, xl: 7 }} textAlign="center">
        <BaseLink
          href="/privacy-policy"
          fontSize={'sm'}
          fontWeight="bold"
          borderBottom={'1px solid'}
          borderColor="sub.100"
          pb={1}
        >
          プライバシーポリシー
        </BaseLink>
      </Box>
    </Box>
  );
};
