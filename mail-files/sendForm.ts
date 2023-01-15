// Interface of the form values object. See /Components/Contact.tsx for more information
import { formValues } from "../components/Contact";

// Function to take in the form value and send the data to the mail api. See /Pages/api/contact.ts for more information on how it works
export const sendContactForm = async (data: formValues) =>
    fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });