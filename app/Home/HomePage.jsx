"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./HomePage.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTimes,
} from "react-icons/fa";
import Image from "next/image";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="menu-overlay" onClick={closeMenu} />}

      <header className="header">
        <nav className="nav">
          {/* LOGO */}
          <Link href="/" className="nav-logo">
            <Image
              src="/images/CA-India-logo.png"
              width={70}
              height={50}
              alt="logo"
            />
            <div className="logo-text">
              <span className="main-title">PMGR & Co</span>
              <span className="sub-title">Chartered Accountants</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/insights">Insights</Link>
          </div>

          {/* DESKTOP SOCIALS */}
          {/* <div className="nav-socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div> */}

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* MOBILE SLIDE DRAWER */}
      <aside className={`mobile-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <Image
            src="/images/CA-India-logo.png"
            width={60}
            height={45}
            alt="logo"
          />
          <button className="close-btn" onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        <nav className="drawer-links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/services" onClick={closeMenu}>Our Services</Link>
          <Link href="/team" onClick={closeMenu}>Our Team</Link>
          <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
           <Link href="/insights" onClick={closeMenu}>Insights</Link>
        </nav>

        <div className="drawer-socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </aside>
    </>
  );
};

export default HomePage;
