import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className=" grid px-3 ">
      <h2 className="contact-me mb-6 text-xl uppercase tracking-widest text-primary dark:text-orange-400 ">
        Connect with me
      </h2>
      <form className="myForm mx-auto  grid w-full">
        <input className="" type="text" id="name" placeholder="Name" required />
        <input className="" type="email" placeholder="Email" />
        <input className="" type="text" placeholder="Subject" />
        <textarea
          className=""
          name="message"
          placeholder="Message"
          id="message"
          cols={30}
          rows={10}
        ></textarea>
        <div className=" text-center">
          <Button
            text="Send Message"
            styles={
              "w-full max-w-[400px] py-[1rem] hover:dark:bg-orange-500 uppercase"
            }
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
