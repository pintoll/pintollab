"use server";

type Status = null | "Contact Sent!" | "Error occured";

export const sendContact = async (
  status: Status,
  formData: FormData,
): Promise<Status> => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const content = formData.get("content");

    console.log(name, email, content);
    if (!name || !email || !content) {
      throw Error("Invalid Form");
    }
    throw Error("Invalid Form");
    return "Contact Sent!";
  } catch (error) {
    console.log(error);
    return "Error occured";
  }
};
