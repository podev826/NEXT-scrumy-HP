import { Image } from '@chakra-ui/react';
import { Blogclient } from 'libraries/microcms';
import { BlogItemProps, ContentType, ContextType } from 'types';

const BlogId = ({ blog }: BlogItemProps) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <Image
        alt=""
        src={blog.eyecatch.url}
        height={blog.eyecatch.height}
        width={blog.eyecatch.width}
      />
      {/* 目次 */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
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
