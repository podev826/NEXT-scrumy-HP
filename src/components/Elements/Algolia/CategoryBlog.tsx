import { Box, Image } from '@chakra-ui/react';
import { BaseLink, PrimaryTitle } from 'components/Elements';
import { BLOG_CATEGORIES, BlogCategoryProps } from 'configs';
import { FC, useState } from 'react';
import { MenuProps, useMenu } from 'react-instantsearch-hooks-web';

type CustomBlogMenuItemPcProps = {
  category: BlogCategoryProps;
  handleClick: (value: string) => void;
  active: boolean;
};

const BlogCategoryMenu: FC<CustomBlogMenuItemPcProps> = ({
  category,
  handleClick,
  active,
}) => {
  return (
    <Box>
      <Box
        as={'button'}
        onClick={() => handleClick(category.text)}
        cursor={active ? 'auto' : 'pointer'}
        w={{
          base: '55vw',
          sm: '30vw',
          xl: '25vw',
        }}
        pb={{ base: 3, lg: 0 }}
        px={{ base: 1, md: 3 }}
        py={{ base: 4, lg: 5 }}
      >
        <BaseLink href={`/blogs?blog%5Bmenu%5D%5Bcategory%5D=${category.name}`}>
          <Image src={category.image} borderRadius="10px" alt="" />
        </BaseLink>
      </Box>
    </Box>
  );
};

export const BlogCategory: FC<MenuProps> = (props) => {
  const { refine } = useMenu(props);

  const [activeCategory, setActiveCategory] = useState('');
  const handleClick = (value: string): void => {
    setActiveCategory(value);
    refine(value);
  };

  return (
    <>
      <Box px={10}>
        <Box>
          <PrimaryTitle en="Categories" />
        </Box>
        <Box
          pt={3}
          pb={{ base: '0.5vw' }}
          px={{ base: '6.4vw', sm: 0 }}
          justifyContent="center"
        >
          <Box
            as="ul"
            display={'flex'}
            justifyContent="center"
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems="center"
          >
            <BlogCategoryMenu
              handleClick={handleClick}
              category={BLOG_CATEGORIES.esgsdgs}
              active={activeCategory === BLOG_CATEGORIES.esgsdgs.text}
            />
            <BlogCategoryMenu
              handleClick={handleClick}
              category={BLOG_CATEGORIES.sustainable}
              active={activeCategory === BLOG_CATEGORIES.sustainable.text}
            />
            <BlogCategoryMenu
              handleClick={handleClick}
              category={BLOG_CATEGORIES.esginvestment}
              active={activeCategory === BLOG_CATEGORIES.esginvestment.text}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
