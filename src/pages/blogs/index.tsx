import { BlogMainLayout } from 'components/Layouts';
import { META } from 'configs';
import { BlogMain } from 'features/Blogs';
import type { NextPage } from 'next';
import { generateBlogIndex } from 'pages/api/algolia/generateIndex';
import { createContext, useEffect, useState } from 'react';

type ActiveCategoryType = {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
};

export const ActiveCategory = createContext<ActiveCategoryType>(
  {} as {
    activeCategory: string;
    setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  }
);

const Blog: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState('');
  useEffect(() => {
    // async () => {
    if (
      window.location.search ===
      // '?blog%5Bmenu%5D%5Bcategory%5D=ESG／SDGsとは？' ||
      '?blog%5Bmenu%5D%5Bcategory%5D=ESG%EF%BC%8FSDGs%E3%81%A8%E3%81%AF%EF%BC%9F'
    ) {
      setActiveCategory('ESG／SDGsとは？');
    }
    if (
      window.location.search ===
      '?blog%5Bmenu%5D%5Bcategory%5D=%E3%82%B5%E3%82%B9%E3%83%86%E3%83%8A%E3%83%96%E3%83%AB%E7%B5%8C%E5%96%B6'
    ) {
      setActiveCategory('サステナブル経営');
    }
    if (
      window.location.search ===
      '?blog%5Bmenu%5D%5Bcategory%5D=ESG%E6%8A%95%E8%B3%87'
    ) {
      setActiveCategory('ESG投資');
    }
  }, [activeCategory]);

  const value = {
    activeCategory,
    setActiveCategory,
  };
  return (
    <ActiveCategory.Provider value={value}>
      <BlogMainLayout meta={META.media}>
        <BlogMain />
      </BlogMainLayout>
    </ActiveCategory.Provider>
  );
};

export const getBlogStaticProps = async () => {
  await generateBlogIndex();
  return {
    props: {},
  };
};

export default Blog;
