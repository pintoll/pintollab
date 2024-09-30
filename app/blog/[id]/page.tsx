import posts from "@/src/entity/post/model/posts.json";
import { getS3ImageUrl } from "@/src/shared/image";
import { Banner, Wrapper } from "@/src/shared/ui";
import { MathInline, MathBlock } from "@/src/shared/ui/katex";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFootnotes from "remark-footnotes";

export async function generateStaticParams() {
  return posts.map(({ data }) => data.id);
}

export async function generateMetadata({ params }: { params: { id: number } }) {
  const post = posts.find(({ data }) => data.id == params.id);
  if (!post) return;

  const { data } = post;

  return {
    title: data.title,
    description: data.desc,
  };
}

const components = {
  MathInline,
  MathBlock,
};

const rehypeOptions = {
  theme: "slack-dark",
  keepBackground: true,
};

export default async function Blog({ params }: { params: { id: number } }) {
  const post = posts.find(({ data }) => data.id == params.id);
  if (!post) return;
  const { data, content } = post;

  return (
    <>
      <Banner
        subject={data.title}
        date={format(new Date(data.date), "MMMM d, yyyy")}
        imageSrc={getS3ImageUrl(`blog/${data.thumbnail}`)}
      />
      <Wrapper variant="block" className="prose md:prose-lg lg:prose-2xl">
        <MDXRemote
          source={content}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
            },
          }}
        />
      </Wrapper>
    </>
  );
}
