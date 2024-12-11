import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <h2>Contact Me</h2>
      <form action="mailto:mdferhan43@gamil.com" method="post">
        <input
          type="text"
          name="Name"
          id="fName"
          placeholder="First Name:"
          required
        />
        <input
          type="text"
          name="Name"
          id="sName"
          placeholder="Last Name:"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email:"
          required
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
