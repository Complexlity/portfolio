import { FormEvent, useState } from "react";
import { sendContactForm } from "../util/sendForm";
import Button from "./Button";

interface formValues {
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
  async function submitValues(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log("I was submitted");
    // let Value = await sendContactForm("Hello");
    // let result = await Value.json();
    console.log(values);
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
        />
        <input
          onChange={(e) => updateValues(2, e.target?.value)}
          className=""
          type="text"
          placeholder="Subject"
          value={values.subject}
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
        ></textarea>
        <div className="mx-auto w-full max-w-[400px] text-center">
          <Button
            text="Send Message"
            styles={
              "w-full py-[.8rem] hover:dark:bg-orange-500 uppercase rounded-[2rem]  md:text-md`"
            }
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
