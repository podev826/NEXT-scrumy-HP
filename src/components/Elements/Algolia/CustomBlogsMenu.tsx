import { Box } from '@chakra-ui/react';
import { BaseLink } from 'components/Elements';
import { BLOG_CATEGORIES, BlogCategoryProps } from 'configs';
import { useRouter } from 'next/router';
import { ActiveCategory } from 'pages/blogs';
import { FC, useContext } from 'react';
import { MenuProps, useMenu } from 'react-instantsearch-hooks-web';

type CustomBlogMenuItemPcProps = {
  category: BlogCategoryProps;
  handleClick: (value: string) => void;
  active: boolean;
};

type CustomBlogMenuAllPcProps = {
  category: BlogCategoryProps;
  handleAllClick: (value: string) => void;
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
        onClick={() => handleClick(category.text)}
        fontWeight={'bold'}
        color={active ? 'base.100' : 'sub.100'}
        bg={active ? 'sub.100' : 'base.100'}
        border="3px solid"
        borderColor={'sub.100'}
        py={2}
        px={6}
        mt={5}
        w={210}
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
        <BaseLink
          href={`/blogs?blog%5Bmenu%5D%5Bcategory%5D=${category.name}`}
          rel="noopener noreferrer"
          h="full"
          _hover={{
            opacity: 1,
          }}
        >
          {category.name}
        </BaseLink>
      </Box>
    </Box>
  );
};

const CustomBlogMenuAllPc: FC<CustomBlogMenuAllPcProps> = ({
  category,
  handleAllClick,
  active,
}) => {
  return (
    <Box as="li">
      <Box
        as="button"
        onClick={() => handleAllClick(category.text)}
        fontWeight={'bold'}
        color={active ? 'base.100' : 'sub.100'}
        bg={active ? 'sub.100' : 'base.100'}
        border="3px solid"
        borderColor={'sub.100'}
        py={2}
        px={6}
        mt={5}
        w={210}
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
        <BaseLink
          href={`/blogs`}
          rel="noopener noreferrer"
          h="full"
          _hover={{
            opacity: 1,
          }}
        >
          {category.name}
        </BaseLink>
      </Box>
    </Box>
  );
};

export const CustomBlogsMenu: FC<MenuProps> = (props) => {
  const { refine } = useMenu(props);
  const router = useRouter();

  const { activeCategory, setActiveCategory } = useContext(ActiveCategory);
  const handleClick = (value: string): void => {
    setActiveCategory(value);
    refine(value);
  };

  const handleAllClick = (value: string): void => {
    setActiveCategory(value);
    refine(value);
    router.push(`/blogs`);
    router.events.on('routeChangeComplete', router.reload);
  };

  return (
    <>
      {/* <Box mt={4} display={{ xl: 'none' }}>
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
                    {activeCategory === BLOG_CATEGORIES.all.text
                      ? BLOG_CATEGORIES.all.name
                      : activeCategory === BLOG_CATEGORIES.esgsdgs.text
                      ? BLOG_CATEGORIES.esgsdgs.name
                      : activeCategory === BLOG_CATEGORIES.sustainable.text
                      ? BLOG_CATEGORIES.sustainable.name
                      : activeCategory === BLOG_CATEGORIES.esginvestment.text
                      ? BLOG_CATEGORIES.esginvestment.name
                      : null}
                  </Box>
                  <Box>{isExpanded ? <AngleUpIcon /> : <AngleDownIcon />}</Box>
                </AccordionButton>
                <AccordionPanel p={0}>
                  {activeCategory !== BLOG_CATEGORIES.all.text ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.all}
                    />
                  ) : null}
                  {activeCategory !== BLOG_CATEGORIES.esgsdgs.text ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.esgsdgs}
                    />
                  ) : null}
                  {activeCategory !== BLOG_CATEGORIES.sustainable.text ? (
                    <CustomBlogMenuItemSp
                      handleClick={handleClick}
                      category={BLOG_CATEGORIES.sustainable}
                    />
                  ) : null}
                  {activeCategory !== BLOG_CATEGORIES.esginvestment.text ? (
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
      </Box> */}
      <Box
        as="ul"
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        flexBasis={'calc(100% - 264px)'}
      >
        <CustomBlogMenuAllPc
          handleAllClick={handleAllClick}
          category={BLOG_CATEGORIES.all}
          active={activeCategory === BLOG_CATEGORIES.all.text}
        />
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.esgsdgs}
          active={activeCategory === BLOG_CATEGORIES.esgsdgs.text}
        />
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.sustainable}
          active={activeCategory === BLOG_CATEGORIES.sustainable.text}
        />
        <CustomBlogMenuItemPc
          handleClick={handleClick}
          category={BLOG_CATEGORIES.esginvestment}
          active={activeCategory === BLOG_CATEGORIES.esginvestment.text}
        />
      </Box>
    </>
  );
};
