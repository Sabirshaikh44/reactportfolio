import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  const Visiblestyle = {
    marginTop: "0rem",
    opacity: 1,
  };
  const notVisiblestyle = {
    marginTop: "1rem",
    opacity: 0,
  };
  const Option = {
    root: null,
    rootMargin: "100px",
    threshold: 0,
  };

  const myRef = useRef();
  const [contactVisible, setcontactVisible] = useState();
  // console.log(contactVisible);
  useEffect(() => {
    // console.log('myref',myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setcontactVisible(entry.isIntersecting);
      // console.log(entry);
    }, Option);
    observer.observe(myRef.current);
  }, []);

  return (
    <div
      className="Contact"
      id="Contact"
      ref={myRef}
      style={contactVisible ? Visiblestyle : notVisiblestyle}
    >
      <p className="contact-headergreenish-text">What's Next ?</p>
      <h2 className="contact-thickgetintouch-text">Get In Touch</h2>
      <p className="contact-para">
        Although I’m doing my Under-Graduate Course{" "}
        <span className="contact-greenish-highlight">
          <a className="college-link" href="https://vsit.edu.in/">
            Bsc.IT in VSIT (SY)
          </a>
        </span>{" "}
        looking for new opportunities, my inbox is always open. Whether you have
        a question,work or just want to say hi, I’ll try my best to get back to
        you!
      </p>
      <a href="mailto: Mzayn646@gmail.com" className="mail-link">
        <div className="email-btn"> Say Hello</div>
      </a>
    </div>
  );
}
