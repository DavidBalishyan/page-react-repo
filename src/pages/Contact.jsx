import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="section contact-section has-background">
      <div className="container">
        <h1 className="title has-text-centered">Contact Us</h1>
        <form className="contact-form">
          <div className="field">
            <label className="label">
              <span className="icon">📛</span> Name
            </label>
            <div className="control">
              <input className="input" type="text" placeholder="Your name" />
            </div>
          </div>
          <div className="field">
            <label className="label">
              <span className="icon">📧</span> Email
            </label>
            <div className="control">
              <input className="input" type="email" placeholder="Your email" />
            </div>
          </div>
          <div className="field">
            <label className="label">
              <span className="icon">💬</span> Message
            </label>
            <div className="control">
              <textarea className="textarea" placeholder="Your message"></textarea>
            </div>
          </div>
          <div className="field has-text-centered">
            <button className="button is-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
