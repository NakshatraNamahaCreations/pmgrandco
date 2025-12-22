// import "./AbtBanner.css";

// export default function AbtBanner() {
//   return (
//     <section className="about-hero">
//       <div className="about-precision-bg">
//   <span className="p-dot d1"></span>
//   <span className="p-dot d2"></span>
//   <span className="p-dot d3"></span>
//   <span className="p-dot d4"></span>

//   <span className="p-line l1"></span>
//   <span className="p-line l2"></span>
//   <span className="p-line l3"></span>
// </div>

//       <div className="about-hero-overlay" />

//       <div className="about-hero-content">
//         <p className="about-breadcrumb">Home • Our Team</p>

//         <h1 className="about-title">About PMGR & Co</h1>

//         <p className="about-description">
//           PMGR & Co is a Chartered Accountancy practise offering integrated audit, tax, compliance, and financial advisory services. Our work combines technical expertise with a methodical, process-led approach that supports stronger governance and informed financial decision-making. We aim to be a dependable, central point of support for the regulatory and financial needs of growing organizations. 
//         </p>
//       </div>
//     </section>
//   );
// }



import "./AbtBanner.css";

export default function AbtBanner() {
  return (
    <section className="biz-banner">
      {/* Decorative shapes */}
      {/* <div className="gold-shape shape-1"></div>
      <div className="gold-shape shape-2"></div>
      <div className="gold-shape shape-3"></div> */}

      <div className="services-hero-bg" />
      <div className="services-hero-bg1"/>

      <div className="biz-content">
 
        <h1 className="biz-title">About PMGR & Co</h1>
        <p className="biz-text">
          PMGR & Co is a Chartered Accountancy practise offering integrated audit, tax, compliance, and financial advisory services. Our work combines technical expertise with a methodical, process-led approach that supports stronger governance and informed financial decision-making. We aim to be a dependable, central point of support for the regulatory and financial needs of growing organizations.
        </p>
      </div>
    </section>
  );
}
