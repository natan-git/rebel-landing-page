import React from "react";
import "../Style/Contact.css";
import AbouUs from "../Assets/page-heading/find-us-heading.svg";
// social icons
import instagram from "../Assets/Social/instagram.png";
import mail from "../Assets/Social/mail.png";
import phone from "../Assets/Social/phone.png";
import waze from "../Assets/Social/waze.png";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-inner">
        <img className="about-us-heading" src={AbouUs} />
        <h2 className="contact-heading">
          REBEL WINERY, HEVRON
          <br />
          +972 324 237
        </h2>
        <div className="social-container">
          <img src={instagram} />
          <img src={waze} />
          <img src={mail} />
          <img src={phone} />
        </div>
        <h3>OUR STORES</h3>
      </div>
    </section>
  );
};

export default Contact;
