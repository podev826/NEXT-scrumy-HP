import { AccordionPanel, AccordionPanelProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

type BaseAccordionPanelProps = AccordionPanelProps & {
  children: ReactNode;
};

export const BaseAccordionPanel: FC<BaseAccordionPanelProps> = ({
  children,
  ...props
}) => {
  return (
    <AccordionPanel
      px={{ base: 7, xl: '72px' }}
      py={{ base: 8, xl: 16 }}
      bg="base.100"
      {...props}
    >
      {children}
    </AccordionPanel>
  );
};
