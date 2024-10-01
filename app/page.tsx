import { Banner, Wrapper } from "@/src/shared/ui";

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
