import { Spacer, Wrapper } from "@/src/shared/ui";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <Wrapper id="contact">
      <Spacer height={100} />
      <ContactForm />
      <Spacer height={100} />
    </Wrapper>
  );
};
