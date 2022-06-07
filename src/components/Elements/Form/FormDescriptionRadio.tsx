import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { CircleExclamation } from 'components/Elements';
import { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormDescriptionRadioProps = {
  error?: FieldError | undefined;
  register?: Partial<UseFormRegisterReturn>;
  options: string[];
};

export const FormDescriptionRadio: FC<FormDescriptionRadioProps> = ({
  register,
  options,
  error,
}) => {
  return (
    <Box as="dd" flexGrow={{ xl: 1 }}>
      <Box
        display={'grid'}
        gridTemplateColumns={{ xl: 'repeat(2, 1fr)' }}
        gap={3}
      >
        {options.map((value) => (
          <RadioBox key={value}>
            <label>
              <input type="radio" value={value} {...register} />
              <span>{value}</span>
            </label>
          </RadioBox>
        ))}
      </Box>
      {error ? (
        <Box mt={'6px'} fontSize="sm" color={'danger.100'}>
          <CircleExclamation />
          <Box as="span" ml={1}>
            {error.message}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export const RadioBox = styled(Box)`
  span {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    transition-duration: 0.15s;
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  span:hover {
    opacity: 0.7;
  }
  label > input[type='radio'] {
    display: none;
  }
  label > input[type='radio'] + *::before {
    content: '';
    width: 16px;
    height: 16px;
    background-color: #7b7b7b;
    display: block;
    border-radius: 100%;
    margin-right: 12px;
    transition-duration: 0.15s;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  label > input[type='radio']:checked + *::before {
    background-color: #ffcc3c;
  }
`;
