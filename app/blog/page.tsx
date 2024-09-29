import { Banner, Button, Card, Spacer } from "@/src/shared/ui";
import Rounded from "@/public/svg/Rounded.svg";
import Erlenmey from "@/public/svg/Erlenmeyer_Flask.svg";
import Image from "next/image";
import { Wrapper } from "@/src/shared/ui/wrapper";
import { readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

export default async function Home() {
  return (
    <main className="w-full">
      <Wrapper>
        <Card variant="border" className="prose">
          <h3>역시는 역시나 역시군</h3>
          adfsafafadfsdf
        </Card>
        <article className="prose md:prose-xl">
          <h2>Garlic bread with cheese: What the science tells us</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>안녕하세요 글을 쓰려면 어떻게 하는</p>
        </article>
        <Image src={Erlenmey} alt="image2" />
        <Image src={Rounded} alt="image" />
      </Wrapper>
    </main>
  );
}
