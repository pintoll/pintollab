import {
  Wrapper,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui";

export const Latest = () => {
  return (
    <Wrapper
      variant="landing"
      id="latest"
      className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-5xl">
          Latest Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Introduction to TypeScript",
              excerpt:
                "Get started with TypeScript and learn how it can improve your JavaScript development workflow.",
              date: "June 15, 2023",
            },
            {
              title: "Optimizing React Performance",
              excerpt:
                "Learn advanced techniques to boost the performance of your React applications.",
              date: "June 10, 2023",
            },
            {
              title: "CSS Grid Layout: A Comprehensive Guide",
              excerpt:
                "Master the power of CSS Grid Layout to create complex web layouts with ease.",
              date: "June 5, 2023",
            },
            {
              title: "Getting Started with Docker",
              excerpt:
                "Learn how to containerize your applications and simplify your development workflow with Docker.",
              date: "May 30, 2023",
            },
          ].map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.excerpt}
                </p>
                <Button variant="link" className="mt-4 p-0">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
