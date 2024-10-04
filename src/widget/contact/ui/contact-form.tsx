"use client";

import { Button, Input, Spacer, Textarea } from "@/src/shared/ui";
import { useFormState } from "react-dom";
import { sendContact } from "../api/action";

export const ContactForm = () => {
  const [state, contact, pending] = useFormState(sendContact, null);

  const [sent, error] = [state === "Contact Sent!", state === "Error occured"];
  return (
    <form className="prose w-full lg:prose-xl" action={contact}>
      <h1>Let's solve problem!</h1>

      <Textarea placeholder="Tell us your problem!" required name="content" />
      <Spacer height={20} />

      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <Input placeholder="Name" required name="name" />
        <Input placeholder="Email" type="email" required name="email" />
      </div>
      <Spacer height={20} />

      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <Button
          variant="primary"
          size="sm"
          className={`h-12 w-full ${pending && "bg-slate-500"} disabled:bg-slate-500`}
          disabled={sent}
        >
          Submit
        </Button>
      </div>

      {sent && (
        <div className="flex w-full items-center justify-center text-center">
          <span className="w-full font-semibold text-primary"> ✓ {state}</span>
        </div>
      )}
      {error && (
        <div className="flex w-full items-center justify-center text-center">
          <span className="w-full font-semibold text-red-500">
            ⨉ {state}. Try again!
          </span>
        </div>
      )}
    </form>
  );
};
