import { Button, Card, Spacer } from "@/src/shared/ui";

export default function Home() {
  return (
    <main>
      <Button>Hello</Button>
      <Button variant="secondary" size="sm">
        Hello
      </Button>
      <Spacer height={30} />
      <Card variant="border">
        <h3>역시는 역시나 역시군</h3>
      </Card>
      <article>
        <h2>Garlic bread with cheese: What the science tells us</h2>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>안녕하세요 글을 쓰려면 어떻게 하는</p>
      </article>
    </main>
  );
}
