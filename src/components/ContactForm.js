import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_i2axv1m";
const TEMPLATE_ID = "template_7t56grm";
const PUBLIC_KEY = "5hXqZ44DNi9qCnCPY";

const ContactForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <form class="formContainer" onSubmit={handleOnSubmit}>
        <p>
          Or send me a message, and let's build something <span>great</span>
        </p>
        <div className="underscore"></div>
        <div class="formElement">
          <label for="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your name.."
            required
          />
        </div>
        <div class="formElement">
          <label>E-mail</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your email.."
            required
          />
        </div>
        <div class="formElement">
          <label for="message">Message</label>
          <textarea
            name="message"
            rows="8"
            cols="30"
            placeholder="Your message.."
            required
          />
        </div>
        <button type="submit" className="formButton">
          <span>SEND</span>
        </button>
        <div className="submit-confirm"></div>
      </form>
    </div>
  );
};

export default ContactForm;
