import { Button, Wrapper } from "@/src/shared/ui";
import Link from "next/link";
import Image from "next/image";

export const Introduction = () => {
  return (
    <Wrapper
      variant="landing"
      id="about"
      className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <Image
            alt="Developer coding on a laptop"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height={310}
            src="/svg/Rounded.svg"
            width={550}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Pintollab
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:max-w-[600px] lg:text-base/relaxed xl:text-xl/relaxed">
                Pintollab is your go-to resource for in-depth articles on
                software development, coding tutorials, and tech industry
                insights. Our mission is to empower developers at all levels
                with knowledge and practical skills.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#featured">Explore Featured Posts</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
