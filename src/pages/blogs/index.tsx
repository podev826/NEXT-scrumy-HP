import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { BlogMain, BlogsWriter } from 'features/Blogs';
import type { NextPage } from 'next';
import { generateBlogIndex } from 'pages/api/algolia/generateIndex';

const Blog: NextPage = () => {
  return (
    <MainLayout meta={META.news}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.blog} />
      <BlogMain />
      <BlogsWriter />
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  await generateBlogIndex();
  return {
    props: {},
  };
};

// export const getBlogStaticProps: GetStaticProps<RootProps> = async () => {
//   const blog = await Blogclient.getList<BlogItemProps>({
//     endpoint: 'blogs',
//     queries: { limit: 5, orders: '-publishedAt' },
//   }).catch(() => null);

//   return {
//     props: blog,
//   };
// };

export default Blog;
