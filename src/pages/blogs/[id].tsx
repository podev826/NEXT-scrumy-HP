import { Box, Image } from '@chakra-ui/react';
import { FadeInAnimation, PrimarySubVisual } from 'components/Elements';
import { ContentWrapper, IdWrapper } from 'components/Layouts';
import { Footer } from 'components/Layouts/Footer';
import { Header } from 'components/Layouts/Header';
import { SUB_VISUAL_LIST } from 'configs';
import { TableOfContents } from 'features/Blogs';
import { Blogclient, renderToc } from 'libraries/microcms';
import { FC } from 'react';
import { MarkdownTemplate } from 'styles/blog/MarkdownTemplate';
import { BlogItemProps, ContentType, ContextType } from 'types';

type BlogTypeProps = {
  blog: BlogItemProps;
};

export const BlogId: FC<BlogTypeProps> = ({ blog }) => {
  const toc = renderToc(blog.content);
  return (
    <IdWrapper id={blog.title}>
      <Header />
      <PrimarySubVisual content={SUB_VISUAL_LIST.blog} />
      <ContentWrapper as="section" maxW={'calc(1080px + (96px * 2))'}>
        <FadeInAnimation>
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
        </FadeInAnimation>
      </ContentWrapper>
      <Footer />
    </IdWrapper>
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
