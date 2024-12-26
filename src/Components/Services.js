import React from "react";
import "./Services.css";
import Swal from "sweetalert2";
import help from "./images/help.mp4"

function Services() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d188e41-791f-4060-9609-ccb09457d067");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Submitted!",
        text: "We will contact you!",
        icon: "success"
      });
    }
  };

  return (
    <section className="contact">
      <video src={help} loop autoPlay muted className="bg-video"/>
      <form className="form" onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="field"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="field"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="field"
            placeholder="Enter Your Message"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Services;
