import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BaseLink, CircleExclamation } from 'components/Elements';
import { FC } from 'react';

type FormAgreeProps = {
  error?: any;
  register?: any;
};

export const FormAgree: FC<FormAgreeProps> = ({ error, register }) => {
  return (
    <Box>
      <Box display={'grid'} justifyContent="center">
        <CheckBox>
          <label>
            <input type="checkbox" {...register} />
            <div></div>
            <span>プライバシーポリシーに同意する</span>
          </label>
        </CheckBox>
        {error ? (
          <Box textAlign="center" mt={'6px'} fontSize="sm" color={'danger.100'}>
            <CircleExclamation />
            <Box as="span" ml={1}>
              プライバシーポリシーは必須項目です。
            </Box>
          </Box>
        ) : null}
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

export const CheckBox = styled(Box)`
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    transition-duration: 0.15s;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    @media (min-width: 1280px) {
      font-size: 20px;
    }
  }
  label:hover {
    opacity: 0.7;
  }
  label > input[type='checkbox'] {
    display: none;
  }
  label > input[type='checkbox'] + div {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid #1d2828;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    transition-duration: 0.15s;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    @media (min-width: 1280px) {
      width: 28px;
      height: 28px;
      margin-right: 16px;
    }
  }
  label > input[type='checkbox']:checked + div::after {
    content: '';
    display: block;
    width: 14px;
    height: 8px;
    border-bottom: 2px solid #1d2828;
    border-left: 2px solid #1d2828;
    transform: rotate(-45deg);
    margin-bottom: 6px;
    @media (min-width: 1280px) {
      width: 16px;
      height: 10px;
    }
  }
`;
