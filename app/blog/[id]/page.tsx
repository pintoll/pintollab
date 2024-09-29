import posts from "@/src/entity/post/model/posts.json";
import { getS3ImageUrl } from "@/src/shared/image";
import { Banner } from "@/src/shared/ui";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";

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

export default function Blog({ params }: { params: { id: number } }) {
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
      <div className="prose-2xl px-20 pt-10">
        <MDXRemote source={content} />
      </div>
    </>
  );
}
