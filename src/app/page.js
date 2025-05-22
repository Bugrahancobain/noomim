"use client";
import React, { useState, useRef } from "react";
import "./home.css";
import { IoIosMail } from "react-icons/io";
import emailjs from "emailjs-com";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  const openPopUp = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        alert("Message sent!");
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.error(error);
      });

    formRef.current.reset(); // ✅ Daha net, doğrudan form referansına bağlı
  };

  return (
    <div className="homeMain">
      <div className="overlay">
        <p>Under Construction</p>
        <h1>NOOMİM SENTETİK</h1>
        <IoIosMail className="mailIcon" onClick={openPopUp} />
        <div className={`popup ${showPopup ? "show" : ""}`}>
          <button className="closeBtn" onClick={closePopup}>X</button>
          <h2>Contact Us</h2>
          <form ref={formRef} className="contactForm" onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input type="text" name="from_name" required />
            </label>
            <label>
              Email Address:
              <input type="email" name="from_email" required />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}