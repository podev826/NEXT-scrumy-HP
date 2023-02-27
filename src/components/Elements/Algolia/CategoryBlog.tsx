import { Box, Image, Text } from '@chakra-ui/react';
import { BaseLink, PrimaryTitle } from 'components/Elements';
import { BLOG_CATEGORIES, BlogCategoryProps } from 'configs';
import { ActiveCategory } from 'pages/blogs';
import { FC, useContext } from 'react';
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
        py={{ base: 1, md: 4, lg: 5 }}
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

  const { activeCategory, setActiveCategory } = useContext(ActiveCategory);
  const handleClick = (value: string): void => {
    setActiveCategory(value);
    refine(value);
  };

  if (activeCategory === BLOG_CATEGORIES.all.text) {
    return (
      <>
        <Box px={8} pt={{ base: '16', md: '20', lg: '8' }}>
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
  }
  if (activeCategory === BLOG_CATEGORIES.esgsdgs.text) {
    return (
      <>
        <Box mb="8" mt={{ base: '10', sm: '14', lg: 0 }}>
          <Text fontWeight="bold" fontSize={'lg'} color="black">
            ホーム　＞　ESG／SDGsとは?
          </Text>
          <Text fontWeight="bold" fontSize={'2xl'} color="black" mt="4">
            ESG／SDGsとは?
          </Text>

          <Box mt="2">
            <Image
              alt=""
              src={'/images/root/blog1.png'}
              width={{ base: '90vw', lg: '700px' }}
              mx={{ base: 'auto', lg: '0' }}
            />
          </Box>
        </Box>
      </>
    );
  }
  if (activeCategory === BLOG_CATEGORIES.sustainable.text) {
    return (
      <>
        <Box mb="8" mt={{ base: '10', sm: '14', lg: 0 }}>
          <Text fontWeight="bold" fontSize={'lg'} color="black">
            ホーム　＞　サステナブル経営
          </Text>
          <Text fontWeight="bold" fontSize={'2xl'} color="black" mt="4">
            サステナブル経営
          </Text>

          <Box mt="2">
            <Image
              alt=""
              src={'/images/root/blog2.png'}
              width={{ base: '90vw', lg: '700px' }}
              mx={{ base: 'auto', lg: '0' }}
            />
          </Box>
        </Box>
      </>
    );
  }
  if (activeCategory === BLOG_CATEGORIES.esginvestment.text) {
    return (
      <>
        <Box mb="8" mt={{ base: '10', sm: '14', lg: 0 }}>
          <Text fontWeight="bold" fontSize={'lg'} color="black">
            ホーム　＞　ESG投資
          </Text>
          <Text fontWeight="bold" fontSize={'2xl'} color="black" mt="4">
            ESG投資
          </Text>

          <Box mt="2">
            <Image
              alt=""
              src={'/images/root/blog3.png'}
              width={{ base: '90vw', lg: '700px' }}
              mx={{ base: 'auto', lg: '0' }}
            />
          </Box>
        </Box>
      </>
    );
  } else {
    return null;
  }
};
