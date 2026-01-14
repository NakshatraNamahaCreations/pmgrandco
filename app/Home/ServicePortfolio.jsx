// "use client";
// import React from "react";
// import "./ServicePortfolio.css";
// import {
//   FaBalanceScale,
//   FaClipboardCheck,
//   FaFileInvoiceDollar,
//   FaProjectDiagram,
//   FaChartLine,
//   FaFileAlt,
//   FaHandsHelping,
//   FaPercent,
//   FaArrowRight,
//   FaHeadphones,
// } from "react-icons/fa";
// import { FaBarsProgress } from "react-icons/fa6";


// const services = [
//   {
//     title: "Income Tax",
//     subtitle: "Companies, Banks, Insurance, NIDHI Companies",
//     icon: <FaBalanceScale />,
//     tag: "Tax",
//   },
//   {
//     title: "Goods and Services Tax",
//     subtitle: "Comprehensive operational control assessments",
//     icon: <FaClipboardCheck />,
//     tag: "Tax",
//   },
//   {
//     title: "Audits and Assurance",
//     subtitle: "Section 44AB compliance and advisory",
//     icon: <FaFileInvoiceDollar />,
//     tag: "Audits",
//   },
//   {
//     title: "SOX & ICFR Compliance and Testing",
//     subtitle: "Sarbanes-Oxley compliance and testing",
//     icon: <FaFileAlt />,
//     tag: "testing",
//   },
//   {
//     title: "Start up Support",
//     subtitle: "End-to-end operational process reviews",
//     icon: <FaProjectDiagram />,
//     tag: "Support",
//   },
//   {
//     title: "Virtual CFO Services",
//     subtitle: "Strategic and operational effectiveness audits",
//     icon: <FaChartLine />,
//     tag: "Services",
//   },
//   {
//     title: "Financial Operations Support(FOS)",
//     subtitle: "GST compliance, returns and representation",
//     icon: <FaHeadphones />,
//     tag: "support",
//   },
//   {
//     title: "Business Analytics",
//     subtitle: "Financial planning, systems and compliance",
//     icon: <FaHandsHelping />,
//     tag: "analytics",
//   },
//   {
//     title: "Projection, analysis & Certifications",
//     subtitle: "Financial planning, systems and compliance",
//     icon: <FaBarsProgress />,
//     tag: "analytics",
//   },
// ];

// const ServicePortfolio = () => {
//   // show first 3 services as simple cards
//   const featuredServices = services.slice(0, 9);

//   return (
//     <section className="svc-section" id="1">
//       <div className="svc-inner">
//         <div className="svc-header" data-aos="fade-up">
//           <p className="svc-eyebrow">Our Service Portfolio</p>
//           <h2 className="svc-title">All your business needs under one roof</h2>
//           <p className="svc-subtitle">
//             A focused suite of services designed to enhance governance, manage
//             risk and support growth for businesses across sectors.
//           </p>
//         </div>

//         <div className="svc-card-grid" data-aos="fade-in">
//   {featuredServices.map((service) => (
//     <article className="svc-card-simple" key={service.title}>
//       <div className="svc-card-icon-wrap">
//         <div className="svc-card-icon">{service.icon}</div>
//       </div>

//       <span className="svc-card-tag">{service.tag}</span>

//       <h3 className="svc-card-title">{service.title}</h3>
//       {/* <p className="svc-card-text">{service.subtitle}</p> */}

//       {/* Arrow Below Subtitle */}
//      <div className="svc-card-arrow"><FaArrowRight /></div>


//     </article>
//   ))}
// </div>



//         <div className="svc-actions" data-aos="fade-up">
//           <button type="button" className="svc-view-all-btn">
//             View all services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicePortfolio;


"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./ServicePortfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import {
  FaBalanceScale,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaProjectDiagram,
  FaChartLine,
  FaFileAlt,
  FaHandsHelping,
  FaHeadphones,
} from "react-icons/fa";
import { FaBarsProgress as FaBarsProgress6 } from "react-icons/fa6";

/* =========================
   SERVICES DATA
========================= */
const services = [
  { title: "Income Tax", icon: <FaBalanceScale />, tag: "Tax" },
  { title: "Goods and Services Tax", icon: <FaClipboardCheck />, tag: "Tax" },
  { title: "Audits and Assurance", icon: <FaFileInvoiceDollar />, tag: "Audits" },
  { title: "SOX & ICFR Compliance and Testing", icon: <FaFileAlt />, tag: "Testing" },
  { title: "Start up Support", icon: <FaProjectDiagram />, tag: "Support" },
  { title: "Virtual CFO Services", icon: <FaChartLine />, tag: "Services" },
  { title: "Financial Operations Support (FOS)", icon: <FaHeadphones />, tag: "Support" },
  { title: "Business Analytics", icon: <FaHandsHelping />, tag: "Analytics" },
  { title: "Projection, Analysis & Certifications", icon: <FaBarsProgress6 />, tag: "Analytics" },
];

/* =========================
   MAIN COMPONENT
========================= */
const ServicePortfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile once & on resize */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Slider settings (DESKTOP ONLY) */
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    arrows: true,
    swipe: true,
    variableWidth: false,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  /* Card JSX */
  const renderCard = (service) => (
    <article className="svc-card-simple" aria-label={service.title}>
      <div className="svc-card-icon-wrap">
        <div className="svc-card-icon">{service.icon}</div>
      </div>
      <span className="svc-card-tag">{service.tag}</span>
      <h3 className="svc-card-title">{service.title}</h3>
    </article>
  );

  return (
    <section className="svc-section" id="services">
      <div className="svc-inner">
        <div className="svc-header">
          <p className="svc-kicker">Our Service Portfolio</p>
          <h2 className="svc-title">All your business needs under one roof</h2>
          <p className="svc-subtitle">
            A focused suite of services designed to enhance governance, manage risk
            and support growth for businesses across sectors.
          </p>
        </div>

        {/* ✅ MOBILE: NORMAL STACK */}
        {isMobile ? (
          <div className="svc-mobile-list">
            {services.map((service) => (
              <div key={service.title} className="svc-mobile-item">
                {renderCard(service)}
              </div>
            ))}
          </div>
        ) : (
          /* ✅ DESKTOP: SLIDER */
          <div className="svc-carousel-wrap">
            <Slider {...settings}>
              {services.map((service) => (
                <div key={service.title}>{renderCard(service)}</div>
              ))}
            </Slider>
          </div>
        )}

        <div className="svc-actions">
          <Link href="/services">
            <button type="button" className="svc-view-all-btn">
              View all services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePortfolio;
