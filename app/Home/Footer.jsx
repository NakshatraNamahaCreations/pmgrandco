"use client";
import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaLinkedinIn, FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState } from "react";
import BookingDrawer from "./BookingDrawer"

const Footer = () => {

      const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
     <BookingDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    <footer className="ux-footer">
      {/* Sidebar – Book a Consultation */}
      <div className="ux-footer-sidebar">
        <div className="ux-footer-sidebar-inner">
          <p className="ux-footer-sidebar-text">Need expert CA guidance?</p>
          
             <button
              className="ux-footer-sidebar-btn"
              onClick={() => setOpenDrawer(true)}
            >
              Book a Consultation
            </button>
       
        </div>
      </div>

      {/* Contact Highlight Bar */}
      <div className="ux-footer-highlight">
        <div className="ux-h-inner">
          <div className="ux-h-item">
            <MdLocationOn />373/3, Mettupalayam Road, Near FACT, Coimbatore North, Coimbatore - 641043
          </div>
          <div className="ux-h-item">
            <FaPhoneAlt /> +91 9344733377
          </div>
          <div className="ux-h-item">
            <MdEmail /> info@pmgrandco.com
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="ux-footer-main">
        <div className="ux-footer-grid">
          {/* Column 1 */}
          <div className="ux-footer-col">
            <h3>PMGR & Co</h3>
            <p>
              A trusted team of Chartered Accountants providing Audit, Compliance,
              Taxation, and Advisory services with professionalism and clarity.
            </p>
            <div className="ux-socials">
              <a href="#"><FaLinkedinIn /></a>
              <a href="tel: +91 9344733377"><FaPhoneAlt /></a>
              <a href="mailto: info@pmgrandco.com"><FaEnvelope /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="ux-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Firm</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/insights">Insights</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="ux-footer-col">
            <h4>Services</h4>
            <ul>
              <li>Audit & Assurance</li>
              <li>Tax & Compliance</li>
              <li>GST Filings</li>
              <li>Startup Advisory</li>
              <li>Business Registration</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="ux-footer-col">
            <h4>Our Branches</h4>
            <ul>
              <li>Coimbatore</li>
              <li>Salem</li>
              <li>Tiruppur</li>
              <li>Pazhani</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="ux-footer-bottom">
        <p>© {new Date().getFullYear()} PMGR & Co | All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
