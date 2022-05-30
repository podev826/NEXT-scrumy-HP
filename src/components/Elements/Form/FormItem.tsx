import { FormControl } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type FormItemProps = {
  children: ReactNode;
};

export const FormItem: FC<FormItemProps> = ({ children }) => {
  return (
    <FormControl
      display={{ base: 'grid', xl: 'flex' }}
      gap={{ base: 4, xl: 16 }}
    >
      {children}
    </FormControl>
  );
};
