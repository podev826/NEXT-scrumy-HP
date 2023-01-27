import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { AngleDownIcon, AngleUpIcon } from 'components/Elements';
import { NEWS_CATEGORIES, NewsCategoryProps } from 'configs';
import { FC, useState } from 'react';
import { MenuProps, useMenu } from 'react-instantsearch-hooks-web';

type CustomMenuItemPcProps = {
  category: NewsCategoryProps;
  handleClick: (value: string) => void;
  active: boolean;
};

const CustomMenuItemPc: FC<CustomMenuItemPcProps> = ({
  category,
  handleClick,
  active,
}) => {
  return (
    <Box as="li">
      <Box
        as="button"
        onClick={() => handleClick(category.text)}
        fontWeight={'bold'}
        color={active ? 'base.100' : 'sub.100'}
        bg={active ? 'sub.100' : 'base.100'}
        border="3px solid"
        borderColor={'sub.100'}
        py={2}
        px={6}
        cursor={active ? 'auto' : 'pointer'}
        pointerEvents={active ? 'none' : 'auto'}
        borderRadius="full"
        transitionProperty="all"
        transitionTimingFunction="linear"
        transitionDuration="fast"
        _hover={{
          color: 'base.100',
          bg: 'sub.100',
        }}
      >
        {category.text}
      </Box>
    </Box>
  );
};

type CustomMenuItemSpProps = {
  category: NewsCategoryProps;
  handleClick: (value: string) => void;
};

const CustomMenuItemSp: FC<CustomMenuItemSpProps> = ({
  category,
  handleClick,
}) => {
  return (
    <Box
      as="button"
      onClick={() => handleClick(category.text)}
      px={7}
      w="full"
      minH={12}
      display="grid"
      alignItems={'center'}
      fontWeight="bold"
      textAlign={'left'}
      _hover={{
        color: 'base.100',
        backgroundColor: 'sub.200',
      }}
    >
      {category.text}
    </Box>
  );
};

export const CustomMenu: FC<MenuProps> = (props) => {
  const { refine } = useMenu(props);

  const [activeCategory, setActiveCategory] = useState('');
  const handleClick = (value: string): void => {
    setActiveCategory(value);
    refine(value);
  };

  return (
    <>
      <Box mt={4} display={{ xl: 'none' }}>
        <Accordion allowToggle allowMultiple>
          <AccordionItem
            bg="base.100"
            overflow="hidden"
            border="2px solid"
            borderColor={'sub.100'}
            borderRadius={'32px'}
            p={0}
          >
            {({ isExpanded }) => (
              <>
                <AccordionButton
                  px={7}
                  py={2}
                  minH={12}
                  _hover={{
                    bg: 'auto',
                  }}
                >
                  <Box flex="1" textAlign="left" fontWeight={'bold'}>
                    {activeCategory === NEWS_CATEGORIES.all.text
                      ? NEWS_CATEGORIES.all.text
                      : activeCategory === NEWS_CATEGORIES.pitch_media.text
                      ? NEWS_CATEGORIES.pitch_media.text
                      : activeCategory === NEWS_CATEGORIES.fundraising.text
                      ? NEWS_CATEGORIES.fundraising.text
                      : activeCategory === NEWS_CATEGORIES.seminar_edu.text
                      ? NEWS_CATEGORIES.seminar_edu.text
                      : activeCategory === NEWS_CATEGORIES.research_pp.text
                      ? NEWS_CATEGORIES.research_pp.text
                      : null}
                  </Box>
                  <Box>{isExpanded ? <AngleUpIcon /> : <AngleDownIcon />}</Box>
                </AccordionButton>
                <AccordionPanel p={0}>
                  {activeCategory !== NEWS_CATEGORIES.all.text ? (
                    <CustomMenuItemSp
                      handleClick={handleClick}
                      category={NEWS_CATEGORIES.all}
                    />
                  ) : null}
                  {activeCategory !== NEWS_CATEGORIES.pitch_media.text ? (
                    <CustomMenuItemSp
                      handleClick={handleClick}
                      category={NEWS_CATEGORIES.pitch_media}
                    />
                  ) : null}
                  {activeCategory !== NEWS_CATEGORIES.fundraising.text ? (
                    <CustomMenuItemSp
                      handleClick={handleClick}
                      category={NEWS_CATEGORIES.fundraising}
                    />
                  ) : null}
                  {activeCategory !== NEWS_CATEGORIES.seminar_edu.text ? (
                    <CustomMenuItemSp
                      handleClick={handleClick}
                      category={NEWS_CATEGORIES.seminar_edu}
                    />
                  ) : null}
                  {activeCategory !== NEWS_CATEGORIES.research_pp.text ? (
                    <CustomMenuItemSp
                      handleClick={handleClick}
                      category={NEWS_CATEGORIES.research_pp}
                    />
                  ) : null}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
      <Box
        as="ul"
        display={{ base: 'none', xl: 'flex' }}
        alignItems={{ xl: 'center' }}
        justifyContent={{ xl: 'space-between' }}
        flexBasis={{ xl: 'calc(100% - 264px)' }}
      >
        <CustomMenuItemPc
          handleClick={handleClick}
          category={NEWS_CATEGORIES.all}
          active={activeCategory === NEWS_CATEGORIES.all.slug}
        />
        <CustomMenuItemPc
          handleClick={handleClick}
          category={NEWS_CATEGORIES.pitch_media}
          active={activeCategory === NEWS_CATEGORIES.pitch_media.slug}
        />
        <CustomMenuItemPc
          handleClick={handleClick}
          category={NEWS_CATEGORIES.fundraising}
          active={activeCategory === NEWS_CATEGORIES.fundraising.slug}
        />
        <CustomMenuItemPc
          handleClick={handleClick}
          category={NEWS_CATEGORIES.seminar_edu}
          active={activeCategory === NEWS_CATEGORIES.seminar_edu.slug}
        />
        <CustomMenuItemPc
          handleClick={handleClick}
          category={NEWS_CATEGORIES.research_pp}
          active={activeCategory === NEWS_CATEGORIES.research_pp.slug}
        />
      </Box>
    </>
  );
};
