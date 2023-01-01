import Button from "./Button";

const Contact = () => {
  return (
    <div className="grid px-3 ">
      <h1 className="contact-me mb-6">SEND ME A MESSAGE</h1>
      <form className="myForm grid">
        <input
          className=" mb-6 w-full rounded-lg border-2 border-primaryLight px-4 py-3 text-xl focus:border-primary focus:outline-none"
          type="text"
          id="name"
          placeholder="Name"
          required
        />
        <input
          className="mb-6  w-full rounded-lg border-2 border-primaryLight px-4 py-3 text-xl focus:border-primary focus:outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          className="mb-6 w-full rounded-lg border-2 border-primaryLight px-4 py-3 text-xl focus:border-primary focus:outline-none"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="mb-6 w-full rounded-lg border-2 border-primaryLight px-4 py-3 text-xl focus:border-primary focus:outline-none"
          name="message"
          placeholder="Message"
          id="message"
          cols={30}
          rows={10}
        ></textarea>
        <div className=" text-center">
          <Button text="Send Message" styles="w-full max-w-[600px]" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
