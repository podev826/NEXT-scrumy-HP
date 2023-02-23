import { BlogMainLayout } from 'components/Layouts';
import { META } from 'configs';
import { BlogMain } from 'features/Blogs';
import type { NextPage } from 'next';
import { generateBlogIndex } from 'pages/api/algolia/generateIndex';

const Blog: NextPage = () => {
  return (
    <BlogMainLayout meta={META.media}>
      <BlogMain />
    </BlogMainLayout>
  );
};

export const getBlogStaticProps = async () => {
  await generateBlogIndex();
  return {
    props: {},
  };
};

export default Blog;
