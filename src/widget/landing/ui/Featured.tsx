import {
  Wrapper,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/shared/ui";
import { Code, Cpu, Github } from "lucide-react";

export const Featured = () => {
  return (
    <Wrapper
      variant="landing"
      id="featured"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-5xl">
          Featured Posts
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Getting Started with React Hooks",
              description:
                "Learn how to use React Hooks to manage state and side effects in your components.",
              icon: <Code className="mb-2 h-10 w-10" />,
            },
            {
              title: "Building Scalable APIs with Node.js",
              description:
                "Discover best practices for creating robust and scalable APIs using Node.js and Express.",
              icon: <Cpu className="mb-2 h-10 w-10" />,
            },
            {
              title: "Mastering Git Workflows",
              description:
                "Improve your version control skills with advanced Git techniques and workflows.",
              icon: <Github className="mb-2 h-10 w-10" />,
            },
          ].map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.icon}</CardTitle>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
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
