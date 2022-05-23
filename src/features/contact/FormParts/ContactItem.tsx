import { FormControl } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type ContactItemProps = {
  children: ReactNode;
};

export const ContactItem: FC<ContactItemProps> = ({ children }) => {
  return (
    <FormControl
      display={{ base: 'grid', xl: 'flex' }}
      gap={{ base: 4, xl: 16 }}
    >
      {children}
    </FormControl>
  );
};
