import { formValues } from "../components/Contact";

export const submitContactForm = async (data: formValues) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
