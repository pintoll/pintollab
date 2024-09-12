import posts from "@/src/entity/blog/model/posts.json";
import { Banner, Card } from "@/src/shared/ui";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return posts.map(({ data }) => data.id);
}

export default function Blog({ params }: { params: { id: number } }) {
  const post = posts.find(({ data }) => data.id == params.id);
  if (!post) return;

  return (
    <>
      <Banner
        subject="5 best practices for preventing chaos in Tailwind CSS"
        description="October 10, 2023"
        imageSrc="/image/tailwind.png"
      />
      <div className="prose-2xl">
        <MDXRemote source={post.content} />
      </div>
    </>
  );
}
