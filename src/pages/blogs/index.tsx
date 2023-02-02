import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { BlogCategory, BlogMain } from 'features/Blogs';
import type { NextPage } from 'next';
import { generateBlogIndex } from 'pages/api/algolia/generateIndex';

const Blog: NextPage = () => {
  return (
    <MainLayout meta={META.media}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.blog} />
      <BlogCategory />
      <BlogMain />
    </MainLayout>
  );
};

export const getBlogStaticProps = async () => {
  await generateBlogIndex();
  return {
    props: {},
  };
};

// export const getStaticProps: GetStaticProps<RootProps> = async () => {
//   const blog = await Blogclient.getList<BlogItemProps>({
//     endpoint: 'blogs',
//     queries: { limit: 5, orders: '-publishedAt' },
//   }).catch(() => null);

//   return {
//     props: blog,
//   };
// };

export default Blog;
