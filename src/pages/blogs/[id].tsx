import { BlogMainLayout, IdWrapper } from 'components/Layouts';
import { META } from 'configs';
import { BlogContentMain } from 'features/Blogs/Content';
import { Blogclient } from 'libraries/microcms';
import { useState } from 'react';
import { BlogDataProps, BlogItemProps, ContentType, ContextType } from 'types';

import { ActiveCategory } from '.';

type blogType = {
  blog: BlogItemProps;
  related: BlogDataProps;
};

export const BlogId = ({ blog, related }: blogType) => {
  const [activeCategory, setActiveCategory] = useState('');
  const value = {
    activeCategory,
    setActiveCategory,
  };
  return (
    <ActiveCategory.Provider value={value}>
      <BlogMainLayout meta={META.media}>
        <IdWrapper id={blog.title}>
          <BlogContentMain blog={blog} related={related} />
        </IdWrapper>
      </BlogMainLayout>
    </ActiveCategory.Provider>
  );
};

export const getStaticPaths = async () => {
  const blog = await Blogclient.get({
    endpoint: 'blogs',
    queries: { limit: 30 },
  });

  const paths = blog.contents.map(
    (content: ContentType) => `/blogs/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: ContextType) => {
  const id = context.params.id;
  const data: BlogItemProps = await Blogclient.get({
    endpoint: 'blogs',
    contentId: id,
    queries: { limit: 30 },
  });

  const category = data.category.id;
  const data2: BlogItemProps = await Blogclient.get({
    endpoint: 'blogs',
    queries: {
      limit: 4,
      orders: '-publishedAt',
      filters: `category[equals]${category}[and]contentId[not_equals]${id}`,
    },
  });

  return {
    props: {
      blog: data,
      related: data2,
    },
  };
};

export default BlogId;
