import { AccordionButton, AccordionButtonProps, Box } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

import { CircleMinusIcon, CirclePlusIcon } from '../Icon';

type BaseAccordionButtonProps = AccordionButtonProps & {
  isExpanded: boolean;
  children: ReactNode;
};

export const BaseAccordionButton: FC<BaseAccordionButtonProps> = ({
  isExpanded,
  children,
  ...props
}) => {
  return (
    <AccordionButton
      border="none"
      bg="base.100"
      px={{ base: 7, xl: '72px' }}
      py={{ base: 8, xl: 9 }}
      _expanded={{ bg: 'sub.200', color: 'base.100' }}
      _hover={{
        bg: 'auto',
      }}
      {...props}
    >
      <Box
        flex="1"
        textAlign="left"
        fontSize={{ xl: 'xl' }}
        fontWeight={'bold'}
        color={isExpanded ? 'base.100' : 'sub.100'}
      >
        {children}
      </Box>
      <Box fontSize={{ base: 'xl', xl: '5xl' }} color="accent.100">
        {isExpanded ? <CircleMinusIcon /> : <CirclePlusIcon />}
      </Box>
    </AccordionButton>
  );
};
