// Form interface and React state hook
import { FormEvent, useState } from "react";

// Function to send the form data to the mail api. Seel /mail-files/sendForm.ts for more information
import { sendContactForm } from "../mail-files/sendForm";

// Interface of what the form submit values object should have
export interface formValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Blank form values object extending the form interface above
const emptyformValues: formValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// This component outputs the form on the dom as well as is responsible for sending the date to the necessary mail api route
const Contact = () => {
  // Initialize the state values
  const [values, setValues] = useState<formValues>(emptyformValues);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to send the form and return success or error
  async function submitValues(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Checks if any of the values are misssing. The minimal validation done here is because the data is not used in any backend operation but only to receive email messages
    if (!values.name || !values.email || !values.subject || !values.message)
      return;

    // Updates the form values as well as shows the loading on the button
    setValues(emptyformValues);
    setLoading(true);

    // Sends the form. Alerts error or success message
    let res;
    try {
      let value = await sendContactForm(values);
      res = await value.json();
    } catch (error) {
      res = {
        messsage: "Something went wrong. Please contact my Socials instead",
      };
    }
    setLoading(false);
    alert(res.message);
  }

  // Function to update the values state as the elements are entered. This could be done in the particular input element but I felt this was a cleaner way to go about it
  function updateValues(item: number, newValue: string) {
    switch (item) {
      case 0:
        setValues({
          ...values,
          name: newValue,
        });
        break;
      case 1:
        setValues({
          ...values,
          email: newValue,
        });
        break;
      case 2:
        setValues({
          ...values,
          subject: newValue,
        });
        break;
      case 3:
        setValues({
          ...values,
          message: newValue,
        });
        break;
    }
  }

  return (
    <section id="contact" className=" mt-8 grid px-3 md:mt-12 ">
      <h2 className="contact-me mb-6 text-xl uppercase tracking-widest text-primary dark:text-orange-300 ">
        Connect with me
      </h2>
      <form onSubmit={submitValues} className="myForm mx-auto  grid w-full">
        <input
          value={values.name}
          onChange={(e) => updateValues(0, e.target?.value)}
          className=""
          type="text"
          id="name"
          placeholder="Name"
          required
        />
        <input
          onChange={(e) => updateValues(1, e.target?.value)}
          className=""
          type="email"
          placeholder="Email"
          value={values.email}
          required
        />
        <input
          onChange={(e) => updateValues(2, e.target?.value)}
          className=""
          type="text"
          placeholder="Subject"
          value={values.subject}
          required
        />
        <textarea
          onChange={(e) => updateValues(3, e.target?.value)}
          className=""
          name="message"
          placeholder="Message"
          id="message"
          cols={30}
          rows={5}
          value={values.message}
          required
        ></textarea>
        <div className="mx-auto w-full max-w-[400px] text-center">
          {!loading ? (
            <button className="md:text-md w-full   rounded-[2rem] bg-primary px-2 py-[.8rem] uppercase  text-gray-100 hover:bg-primaryLight dark:bg-orange-300 dark:text-[80%] dark:font-semibold dark:text-black hover:dark:bg-orange-500   md:tracking-wide">
              {" "}
              Send Message
            </button>
          ) : (
            <button
              disabled
              className="md:text-md w-full   rounded-[2rem] bg-primaryLight px-2 py-[.8rem] uppercase  text-gray-100 hover:bg-primaryLight dark:bg-orange-300 dark:text-[80%] dark:font-semibold dark:text-black hover:dark:bg-orange-500   md:tracking-wide"
            >
              {" "}
              <span className="loader ld-ext-right running flex items-center justify-center">
                <span>Sending</span>{" "}
                <span className="ld ld-ring ld-spin ml-2"></span>{" "}
              </span>
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
