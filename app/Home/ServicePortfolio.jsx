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



"use client"
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
  FaArrowRight,
} from "react-icons/fa";
import { FaBarsProgress as FaBarsProgress6 } from "react-icons/fa6";

// Services array (same as before)
const services = [
  {
    title: "Income Tax",
    subtitle: "Companies, Banks, Insurance, NIDHI Companies",
    icon: <FaBalanceScale />,
    tag: "Tax",
  },
  {
    title: "Goods and Services Tax",
    subtitle: "Comprehensive operational control assessments",
    icon: <FaClipboardCheck />,
    tag: "Tax",
  },
  {
    title: "Audits and Assurance",
    subtitle: "Section 44AB compliance and advisory",
    icon: <FaFileInvoiceDollar />,
    tag: "Audits",
  },
  {
    title: "SOX & ICFR Compliance and Testing",
    subtitle: "Sarbanes-Oxley compliance and testing",
    icon: <FaFileAlt />,
    tag: "Testing",
  },
  {
    title: "Start up Support",
    subtitle: "End-to-end operational process reviews",
    icon: <FaProjectDiagram />,
    tag: "Support",
  },
  {
    title: "Virtual CFO Services",
    subtitle: "Strategic and operational effectiveness audits",
    icon: <FaChartLine />,
    tag: "Services",
  },
  {
    title: "Financial Operations Support(FOS)",
    subtitle: "GST compliance, returns and representation",
    icon: <FaHeadphones />,
    tag: "Support",
  },
  {
    title: "Business Analytics",
    subtitle: "Financial planning, systems and compliance",
    icon: <FaHandsHelping />,
    tag: "Analytics",
  },
  {
    title: "Projection, analysis & Certifications",
    subtitle: "Financial planning, systems and compliance",
    icon: <FaBarsProgress6 />,
    tag: "Analytics",
  },
];

// Custom arrow components — these use the same CSS classes you already have
const PrevArrow = ({ className, onClick }) => (
  <button
    type="button"
    className="svc-swiper-button-prev"
    onClick={onClick}
    aria-label="Previous service"
  >
    ‹
  </button>
);

const NextArrow = ({ className, onClick }) => (
  <button
    type="button"
    className="svc-swiper-button-next"
    onClick={onClick}
    aria-label="Next service"
  >
    ›
  </button>
);

const ServicePortfolioCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    accessibility: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1
        }
      }
    ],
  };

  return (
    <section className="svc-section" id="1">
      <div className="svc-inner">
        <div className="svc-header" data-aos="fade-up">
          <p className="svc-kicker">Our Service Portfolio</p>
          <h2 className="svc-title">All your business needs under one roof</h2>
          <p className="svc-subtitle">
            A focused suite of services designed to enhance governance, manage risk and support growth for businesses across sectors.
          </p>
        </div>

        <div className="svc-carousel-wrap" data-aos="fade-in">
          <Slider {...settings}>
            {services.map((service) => (
              <div key={service.title} style={{ padding: "6px" }}>
                <article className="svc-card-simple" aria-label={service.title}>
                  <div className="svc-card-icon-wrap">
                    <div className="svc-card-icon">{service.icon}</div>
                  </div>

                  <span className="svc-card-tag">{service.tag}</span>
                  <h3 className="svc-card-title">{service.title}</h3>
                  {/* <p className="svc-card-text" style={{ marginTop: 6, minHeight: 42 }}>
                    {service.subtitle}
                  </p> */}

                  {/* <div className="svc-card-arrow" aria-hidden>
                    <FaArrowRight />
                  </div> */}
                </article>
              </div>
            ))}
          </Slider>
        </div>

        <div className="svc-actions" data-aos="fade-up">
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

export default ServicePortfolioCarousel;
