import { BlogMainLayout, IdWrapper } from 'components/Layouts';
import { META } from 'configs';
import { BlogContentMain } from 'features/Blogs/Content';
import { Blogclient } from 'libraries/microcms';
import { BlogDataProps, BlogItemProps, ContentType, ContextType } from 'types';

type blogType = {
  blog: BlogItemProps;
  related: BlogDataProps;
};

export const BlogId = ({ blog, related }: blogType) => {
  return (
    <BlogMainLayout meta={META.media}>
      <IdWrapper id={blog.title}>
        <BlogContentMain blog={blog} related={related} />
        {/* <RelatedContents contents={related.contents} /> */}
      </IdWrapper>
    </BlogMainLayout>
  );
};

// 静的生成のためのパスを指定します
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

// データをテンプレートに受け渡す部分の処理を記述します
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
      limit: 3,
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
