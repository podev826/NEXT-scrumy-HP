import { Box, Image } from '@chakra-ui/react';
import { Header } from 'components/Layouts/Header';
import { TableOfContents } from 'features/Blogs';
import { Blogclient, renderToc } from 'libraries/microcms';
import { FC } from 'react';
import { MarkdownTemplate } from 'styles/blog/MarkdownTemplate';
import { BlogItemProps, ContentType, ContextType, TocType } from 'types';

type BlogTypeProps = {
  blog: BlogItemProps;
};

export const BlogId: FC<BlogTypeProps> = ({ blog }) => {
  const toc = renderToc(blog.content);
  return (
    <Box>
      <Header />
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <Image
        alt=""
        src={blog.eyecatch.url}
        height={blog.eyecatch.height}
        width={blog.eyecatch.width}
      />
      <TableOfContents toc={toc} />

      <MarkdownTemplate source={blog.content} />
    </Box>
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
