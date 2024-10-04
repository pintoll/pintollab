import { Button, Wrapper } from "@/src/shared/ui";
import Link from "next/link";

export const Main = () => {
  return (
    <Wrapper variant="landing" className="py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-3">
            <h1 className="whitespace-nowrap text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Pintollab
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Exploring the world of software development, one post at a time.
              Dive into tutorials, insights, and the latest tech trends.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link href="#latest">Read Latest Posts</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
