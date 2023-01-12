import { Accordion, AccordionItem, Box } from '@chakra-ui/react';
import { BaseImage, FadeInAnimation } from 'components/Elements';
import { MEMBER_LIST } from 'configs';
import { FC } from 'react';

export const RecruitCEO: FC = () => {
  return (
    <Box pl={{ base: 6, md: 5, lg: 12, xl: 20 }}>
      <FadeInAnimation>
        <Accordion allowToggle>
          <AccordionItem
            key={MEMBER_LIST[0].name}
            w={{ base: '350px', xl: '370px' }}
            _last={{
              borderBottomWidth: 0,
            }}
          >
            <Box w="full" borderBottomRadius={{ base: '16px' }}>
              <BaseImage
                src={MEMBER_LIST[0].image}
                width={726}
                height={726}
                alt=""
              />
            </Box>
          </AccordionItem>
        </Accordion>
      </FadeInAnimation>
    </Box>
  );
};
