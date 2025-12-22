"use client";

import React, { useState } from "react";
import { FaBuilding, FaEnvelope, FaLocationArrow, FaPhoneAlt, FaRegClock, FaUserCog } from "react-icons/fa";
import { FaLocationCrosshairs, FaLocationDot, FaMapLocation } from "react-icons/fa6";
import "./Contact.css";

export const metadata = {
  title: "Contact Us - Your Company",
  description:
    "Get in touch with us — send a message or request a consultation.",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    alert("Thank you! We will get back to you shortly.");

    setFormData({
      name: "",
      email: "",
      phoneCode: "+91",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        <section className="services-hero">
      <div className="services-hero-bg" />
      <div className="services-hero-bg1"/>

      <div className="services-hero-content">
     

        <h1 className="services-title">Get In Touch</h1>

        <p className="services-description">
         We'd be glad to hear from you. Send us a note and our team will connect
          with you soon.

        </p>
      </div>
    </section>
        {/* <h1 className="contact-heading">Get In Touch</h1>

        <p className="contact-intro">
          We'd be glad to hear from you. Send us a note and our team will connect
          with you soon.
        </p> */}

        {/* CONTACT GRID */}
       
          {/* LEFT — FORM */}
          {/* <div className="contact-form-wrapper">
            <form className="ca-contact-form" onSubmit={handleSubmit}>
              <div className="ca-form-row">
                <div className="ca-form-field">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ca-form-field">
                  <label>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="ca-form-row">
                <div className="ca-form-field">
                  <label>Code *</label>
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                </div>

                <div className="ca-form-field">
                  <label>Phone *</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="ca-form-field">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="ca-submit-btn">
                Book a Consultation                                                                                 
              </button>
            </form>
          </div> */}

          {/* RIGHT — CONTACT INFO */}
          {/* <aside className="contact-info">
            <h2>Contact Information</h2>

            <h3>Head Office</h3>
            <p>
              Coimbatore <br />
              373/3, Mettupalayam Road <br />
              Near FACT, Coimbatore North <br />
              Coimbatore – 641043 <br />
              <a
                href="https://maps.google.com/?q=373/3+Mettupalayam+Road+Coimbatore"
                target="_blank"
                style={{color:"#175887", textDecoration:"none", fontWeight:"600"}}
              >
               [View on Google Maps] 
              </a>
            </p>

            <h3>Contact</h3>
            <p>
              Phone: <a href="tel:+919344733377" style={{color:"inherit", textDecoration:"none", fontWeight:"500"}}>+91 93447 33377</a>
            </p>
            <p>
              Email: <a href="mailto: partner1 email" style={{color:"inherit", textDecoration:"none", fontWeight:"500"}}>partner1 email</a>  
            </p>

             <p>
              Email: <a href="mailto: partner2 email" style={{color:"inherit", textDecoration:"none", fontWeight:"500"}}>partner2 email</a>  
            </p>

            <h3>Office Hours</h3>
            <p>10 AM – 6 PM (Monday – Saturdays)</p>
          </aside> */}

<div className="sol-cards">
          <article className="sol-card" data-aos="fade-right">
            <div className="sol-icon">
              <FaBuilding className="sol-react-icon" />
            </div>
            <h3>Head Office: </h3>
            <p>Coimbatore<br/>Address: 373/3, Mettupalayam Road, Near FACT, Coimbatore North, Coimbatore - 641043</p>
            <p>[View on Google maps]</p>
           
          </article>

          <article className="sol-card" data-aos="fade-up">
            <div className="sol-icon">
              <FaPhoneAlt className="sol-react-icon" />
            </div>
            <h3 className="title">Phone</h3>
            <p>+91 9344733377</p>
          </article>

          <article className="sol-card" data-aos="fade-left">
            <div className="sol-icon">
              <FaEnvelope className="sol-react-icon" />
            </div>
            <h3>Email</h3>
            <p>Partner1 email, Partner2 email</p>
          </article>
        </div>


        {/* LOCATIONS */}
  <section className="branches-section">
  <h2 className="branches-heading">Our Other Branches</h2>

 <div className="solutions-cards">
  {[
    {
      city: "Sulur",
      icon: <FaLocationDot />,
      address:
        "7/1, Chinnakka Rangasamy Thevar Street, Sulur, Coimbatore – 641402",
      phones: ["+91 97912 35452", "+91 80723 92668"],
      email: "partner3@email.com",
      mapLink: "https://maps.google.com/?q=7/1,+Chinnakka+Rangasamy+Thevar+Street,+Sulur,+Coimbatore+641402"
    },
    {
      city: "Pazhani",
      icon: <FaMapLocation />,
      address: "2/249, Midapadi, M.N. Patti Post, Palani – 624618",
      phone: "+91 88386 67049",
      email: "partner4@email.com",
      mapLink: "https://maps.google.com/?q=2/249,+Midapadi,+Palani+624618"
    },
    {
      city: "Salem",
      icon: <FaLocationArrow />,
      address:
        "40/16E, Sankar Nagar, Old Eye Care Hospital Road – 636007",
      phone: "+91 73390 49957",
      email: "partner5@email.com",
      mapLink: "https://maps.google.com/?q=40/16E,+Sankar+Nagar,+Salem+636007"
    },
    {
      city: "Tiruppur",
      icon: <FaLocationCrosshairs />,
      address: "4/41, CK's Aishwaryam, Palladam Road – 641605",
      phone: "+91 99439 66077",
      email: "partner6@email.com",
      mapLink: "https://maps.google.com/?q=4/41,+CK's+Aishwaryam,+Palladam+Road,+Tiruppur+641605"
    }
  ].map((loc, i) => (
    <article key={i} className="solutions-card">
      <div className="solutions-card-header">
        <div className="solutions-icon">{loc.icon}</div>
        <h3>{loc.city}</h3>
      </div>

      <p>
        <b>Address:</b> {loc.address}
      </p>

      {/* ✅ Google Maps Link */}
      <a
        href={loc.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#175887", fontWeight: 500 }}
      >
        [View on Google map]
      </a>

      <p style={{ marginTop: "18px" }}>
        <b>Phone:</b>{" "}
        {loc.phones ? (
          loc.phones.map((ph, idx) => (
            <span key={ph}>
              <a
                href={`tel:${ph.replace(/\s+/g, "")}`}
                className="contact-link"
              >
                {ph}
              </a>
              {idx !== loc.phones.length - 1 && ", "}
            </span>
          ))
        ) : (
          <a
            href={`tel:${loc.phone.replace(/\s+/g, "")}`}
            className="contact-link"
          >
            {loc.phone}
          </a>
        )}
      </p>

      <p>
        <b>Email:</b>{" "}
        <a href={`mailto:${loc.email}`} className="contact-link">
          {loc.email}
        </a>
      </p>
    </article>
  ))}
</div>

</section>


      </div>
    </main>
  );
}
