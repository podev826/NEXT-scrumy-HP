import { PrimarySubVisual } from 'components/Elements';
import { MainLayout } from 'components/Layouts';
import { META, SUB_VISUAL_LIST } from 'configs';
import { BlogContentMain } from 'features/Blogs/Content';
import { Blogclient } from 'libraries/microcms';
import { BlogItemProps, ContentType, ContextType } from 'types';

export const BlogId = ({ blog }: BlogItemProps) => {
  return (
    <MainLayout meta={META.media}>
      <PrimarySubVisual content={SUB_VISUAL_LIST.blog} />
      <BlogContentMain blog={blog} />
    </MainLayout>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const blog = await Blogclient.get({ endpoint: 'blogs' });

  const paths = blog.contents.map(
    (content: ContentType) => `/blogs/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: ContextType) => {
  const id = context.params.id;
  const data: BlogItemProps = await Blogclient.get({
    endpoint: 'blogs',
    contentId: id,
  });

  return {
    props: {
      blog: data,
    },
  };
};

// 型はBlogItemProps?
export default BlogId;
