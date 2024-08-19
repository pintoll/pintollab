import { Input, Spacer, Textarea, Wrapper } from "@/src/shared/ui";

export const ContactForm = () => {
  return (
    <Wrapper id="contact">
      <Spacer height={100} />
      <form className="prose w-full lg:prose-xl">
        <h1>Let's get started</h1>
        <Input placeholder="hello" />
        <Textarea placeholder="hello" />
      </form>
      <Spacer height={100} />
    </Wrapper>
  );
};
