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
     
  <h2 className="branches-heading">Head Office</h2>
<div className="sol-cards">

          <article className="sol-card" data-aos="fade-right">
            <div className="sol-icon">
              <FaBuilding className="sol-react-icon" />
            </div>
            <h3>Address </h3>
            <p>Coimbatore<br/>Address: 373/3, Mettupalayam Road, Near FACT, Coimbatore North, Coimbatore - 641043</p>
          <p className="mapLink">
  <div className="mapSection">
  {/* GOOGLE MAP LINK */}
  <a
 // href="https://www.google.com/maps?q=11.019733989144209,76.95125207486058"
 href="https://maps.app.goo.gl/qgKdo3XkGqdDYAVH9"
  target="_blank"
  rel="noopener noreferrer"
  className="mapLink"
>
  [View on Google Maps]
</a>

</div>

</p>

           
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
      mapLink: "https://maps.app.goo.gl/Cepio2FwnMq7s8Mh9"
    },
    {
      city: "Palani",
      icon: <FaMapLocation />,
      address: "2/249, Midapadi, M.N. Patti Post, Palani – 624618",
      phone: "+91 88386 67049",
      email: "partner4@email.com",
      mapLink: "https://maps.app.goo.gl/vNu13aC87uqzPwps9"
    },
    {
      city: "Salem",
      icon: <FaLocationArrow />,
      address:
        "40/16E, Sankar Nagar, Old Eye Care Hospital Road – 636007",
      phone: "+91 73390 49957",
      email: "partner5@email.com",
      mapLink: "https://maps.app.goo.gl/H2m7MPoZEUE3PHcDA"
    },
    {
      city: "Tiruppur",
      icon: <FaLocationCrosshairs />,
      address: "4/41, CK's Aishwaryam, Palladam Road – 641605",
      phone: "+91 99439 66077",
      email: "partner6@email.com",
      mapLink: "https://maps.app.goo.gl/9rkchQJ8n2YqevxN9"
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
