"use client";
import React from "react";
import "./AbtSection.css";
import { FaArrowRight, FaLocationArrow, FaPaperPlane, FaRegClock, FaUserCog } from "react-icons/fa";
import { FaUsers, FaMedal, FaBullseye } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Link from "next/link";
import Counter from "./Counter"

const AbtSection = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-inner">
        {/* Top text row */}
        <div className="solutions-top">
          <div className="solutions-left" data-aos="fade-up">
            {/* <p className="solutions-eyebrow">About PMRG & Co</p> */}
            <h2 className="solutions-title">
             Numbers behind the growth story
            </h2>
          </div>

          {/* <div className="solutions-right" data-aos="fade-left">
            <p>
              Established Chartered Accountant firm based in South India with
              expertise in financial advisory, statutory compliance, and
              strategic business solutions.
            </p>
          </div> */}
        </div>

        {/* Bottom cards row */}
       {/*} <div className="solutions-cards">
          <article className="solutions-card" data-aos="fade-right">
            <div className="solutions-icon">
              <FaUserCog className="solutions-react-icon" />
            </div>
            <h3>6+ CA&apos;s</h3>
            <p>All ICAI members with specialized expertise</p>
          </article>

          <article className="solutions-card" data-aos="fade-up">
            <div className="solutions-icon">
              <FaRegClock className="solutions-react-icon" />
            </div>
            <h3 className="title">4+ Years</h3>
            <p>Collective practice and employment experience</p>
          </article>

          <article className="solutions-card" data-aos="fade-left">
            <div className="solutions-icon">
              <FaLocationArrow className="solutions-react-icon" />
            </div>
            <h3>3 Locations</h3>
            <p>Enhanced accessibility across South India</p>
          </article>
        </div>*/}

           {/* Cards overlapping bottom */}
<div className="hero-feature-box">
  
  {/* Left Content */}
  {/* <div className="hero-feature-left">
   <h3>Numbers behind the growth story</h3> 
    
 
  </div> */}

  {/* Right Floating Boxes */}
  <div className="hero-feature-services">

  <div className="hero-feature-service-box">
    <span className="hero-feature-icon"><FaLocationArrow /></span>
    <Counter end={4} />
    <p>Locations</p>
  </div>

  <div className="hero-feature-service-box">
    <span className="hero-feature-icon"><FaMedal /></span>
    <Counter end={4} />
    <p>Years in Practice</p>
  </div>

  <div className="hero-feature-service-box">
    <span className="hero-feature-icon"><FaUserCog /></span>
    <Counter end={6} />
    <p>CA's</p>
  </div>

  <div className="hero-feature-service-box">
    <span className="hero-feature-icon"><FaUsers /></span>
    <Counter end={2000} />
    <p>Clients</p>
  </div>

</div>


</div>
 {/* CTA Button */}
  <div className="hero-feature-cta">
    <Link href="/team">
  <span style={{fontSize:"18px", color:"#175887", fontWeight:"bold"}}> Interested to Know More?</span>  <button className="hero-feature-btn">
    <FaPaperPlane size={18}/>  Meet our Team
    </button>
    </Link>
  </div>




      </div>
    </section>
  );
};

export default AbtSection;
