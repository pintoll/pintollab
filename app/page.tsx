import { Banner } from "@/src/shared/ui";
import Rounded from "@/public/svg/Rounded.svg";
import Erlenmey from "@/public/svg/Erlenmeyer_Flask.svg";
import Image from "next/image";
import { Wrapper } from "@/src/shared/ui/wrapper";

export default function Home() {
  return (
    <main className="w-full">
      <Banner
        subject="5 best practices for preventing chaos in Tailwind CSS"
        date="October 10, 2023"
        imageSrc="/image/tailwind.png"
      />
      <Wrapper>hello</Wrapper>
    </main>
  );
}
