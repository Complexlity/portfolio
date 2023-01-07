import { FormEvent, useState } from "react";
import { sendContactForm } from "../mail-files/sendForm";
import Button from "./Button";

export interface formValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emptyformValues: formValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState<formValues>(emptyformValues);
  const [loading, setLoading] = useState<boolean>(false);
  async function submitValues(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValues(emptyformValues);
    if (!values.name || !values.email || !values.subject || !values.message)
      return;
    setLoading(true);
    let value = await sendContactForm(values);
    let res = await value.json();
    setLoading(false);
    alert(res.message);
  }

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
    <section id="contact" className=" mt-8 grid px-3 ">
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
            <button className="md:text-md w-full   rounded-[2rem] bg-primaryLight px-2 py-[.8rem] uppercase  text-gray-100 hover:bg-primaryLight dark:bg-orange-300 dark:text-[80%] dark:font-semibold dark:text-black hover:dark:bg-orange-500   md:tracking-wide">
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
