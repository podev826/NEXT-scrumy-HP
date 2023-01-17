import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { AngleDownIcon, AngleUpIcon } from 'components/Elements';
import { BLOG_CATEGORIES, BlogCategoryProps } from 'configs';
import { FC, useState } from 'react';
import { MenuProps, useMenu } from 'react-instantsearch-hooks-web';

type CustomBlogMenuItemPcProps = {
  category: BlogCategoryProps;
  handleClick: (value: string) => void;
  active: boolean;
};

const CustomBlogMenuItemPc: FC<CustomBlogMenuItemPcProps> = ({
  category,
  handleClick,
  active,
}) => {
  return (
    <Box as="li">
      <Box
        as="button"
        onClick={() => handleClick(category.slug)}
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

type CustomBlogMenuItemSpProps = {
  category: BlogCategoryProps;
  handleClick: (value: string) => void;
};

const CustomBlogMenuItemSp: FC<CustomBlogMenuItemSpProps> = ({
  category,
  handleClick,
}) => {
  return (
    <Box
      as="button"
      onClick={() => handleClick(category.slug)}
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

export const CustomBlogsMenu: FC<MenuProps> = (props) => {
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
                    {activeCategory === BLOG_CATEGORIES.all.slug
                      ? BLOG_CATEGORIES.all.text
                      : activeCategory === BLOG_CATEGORIES.esgsdgs.slug
                      ? BLOG_CATEGORIES.esgsdgs.text
                      : activeCategory === BLOG_CATEGORIES.sustainable.slug
                      ? BLOG_CATEGORIES.sustainable.text
                      : activeCategory === BLOG_CATEGORIES.esginvestment.slug
                      ? BLOG_CATEGORIES.esginvestment.text
                      : null}
                  </Box>
                  <Box>{isExpanded ? <AngleUpIcon /> : <AngleDownIcon />}</Box>
                </AccordionButton>
                <AccordionPanel p={0}>
                  {activeCategory !== BLOG_CATEGORIES.all.slug ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.all}
                    />
                  ) : null}
                  {activeCategory !== BLOG_CATEGORIES.esgsdgs.slug ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.esgsdgs}
                    />
                  ) : null}
                  {activeCategory !== BLOG_CATEGORIES.sustainable.slug ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.sustainable}
                    />
                  ) : null}
                  {activeCategory !== BLOG_CATEGORIES.esginvestment.slug ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.esginvestment}
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
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.all}
          active={activeCategory === BLOG_CATEGORIES.all.slug}
        />
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.esgsdgs}
          active={activeCategory === BLOG_CATEGORIES.esgsdgs.slug}
        />
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.sustainable}
          active={activeCategory === BLOG_CATEGORIES.sustainable.slug}
        />
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.esginvestment}
          active={activeCategory === BLOG_CATEGORIES.esginvestment.slug}
        />
      </Box>
    </>
  );
};
