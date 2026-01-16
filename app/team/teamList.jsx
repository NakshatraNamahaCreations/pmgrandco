"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import "./teamList.css";

export default function TeamList() {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (type, name, value) => {
    setPopupData({ type, name, value });
  };

  const closePopup = () => setPopupData(null);

  return (
    <section className="biography-section">
      <div className="biography-container">
        <h2>Our Leadership Team</h2>

        {/* ================= MEMBER 1 ================= */}
        <article className="editorial-row">
          <aside className="editorial-media">
            <img src="/images/Pramoth1.jpg" alt="Pramoth P" />
            <div className="meta">
              <span>DOJ: Nov 2022</span>
              <span>Palani, Tamil Nadu</span>
              <span className="iconWrap">
                <a
                  href="https://www.linkedin.com/in/pramoth-p-9349851a3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#fff" />
                </a>

                <FaPhoneAlt
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup("phone", "Pramoth P", "+91 8838667049")
                  }
                />

                <FaEnvelope
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup(
                      "email",
                      "Pramoth P",
                      "pramoth@pmgrandco.com"
                    )
                  }
                />
              </span>
            </div>
          </aside>

          <div className="editorial-content">
            <h3>Pramoth P</h3>
            <p className="designation">
              Associate Chartered Accountant, Bachelor of Commerce
            </p>
            <p>
             Pramoth works with organisations across geographies to enhance financial systems, improve governance, and modernise accounting operations. With experience spanning valuation, cross-border bookkeeping, and financial system automation, he helps clients build scalable processes and strengthen financial visibility. His work emphasises structured workflows, technology-enabled efficiency, and disciplined financial reporting.
            </p>

             <h3 className="focus-heading">Areas of Focus</h3>
             <ul className="bio-list">
               <li>International bookkeeping (Singapore, Malaysia & Middle East)</li>             
                <li>Business valuation for transactions & strategic decisions</li>
              <li>Zoho Books implementation, migration & automation</li>
              <li>Process audits and internal control strengthening</li>
              <li>Financial workflow engineering & automation</li>
              <li>Audits for societies and non-profit organisations
</li>
            </ul>
          </div>
        </article>

        <hr />

        {/* ================= MEMBER 2 ================= */}
        <article className="editorial-row reverse">
          <aside className="editorial-media">
            <img src="/images/Mithuna.jpg" alt="Mithuna D V" />
            <div className="meta">
              <span>DOJ: Nov 2022</span>
              <span>Coimbatore, Tamil Nadu</span>
              <span className="iconWrap">
                <a
                  href="https://www.linkedin.com/in/mithuna-d-v-61a842178/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#fff" />
                </a>

                <FaPhoneAlt
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup("phone", "Mithuna D V", "+91 9344733377")
                  }
                />

                <FaEnvelope
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup(
                      "email",
                      "Mithuna D V",
                      "mithuna@pmgrandco.com"
                    )
                  }
                />
              </span>
            </div>
          </aside>

          <div className="editorial-content">
            <h3>Mithuna D V</h3>
            <p className="designation">
              Associate Chartered Accountant, Bachelor of Commerce
            </p>
            <p>
              Mithuna supports businesses with structured tax compliance, financial planning, and documentation-driven processes. She works closely with organisations to build clarity in their filings, strengthen their planning routines, and establish reliable financial workflows that improve day-to-day decision-making. Her approach is grounded, organised, and focused on giving businesses the confidence of well-managed statutory responsibilities.
            </p>

            <h3 className="focus-heading">Areas of Focus</h3>
             <ul className="bio-list">
               <li>Income Tax and GST compliance execution</li>             
                <li>Projected financial statements and business planning</li>
              <li>Budgeting and operational optimization</li>
              <li>Documentation structure & bookkeeping frameworks</li>
              <li>Experience across manufacturing, services, NGOs, education & trading</li>
            </ul>
          </div>
        </article>

        <hr />

        {/* ================= MEMBER 3 ================= */}
        <article className="editorial-row">
          <aside className="editorial-media">
            <img src="/images/Gowshika.jpg" alt="Gowshikha T" />
            <div className="meta">
              <span>DOJ: Nov 2022</span>
              <span>Salem, Tamil Nadu</span>
              <span className="iconWrap">
                <a
                  href="https://www.linkedin.com/in/gowshikha-thangaraju-583254196/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#fff" />
                </a>

                <FaPhoneAlt
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup("phone", "Gowshikha T", "+91 7339049957")
                  }
                />

                <FaEnvelope
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup(
                      "email",
                      "Gowshikha T",
                      "gowshikha@pmgrandco.com"
                    )
                  }
                />
              </span>
            </div>
          </aside>

          <div className="editorial-content">
            <h3>Gowshikha T</h3>
            <p className="designation">
              Associate Chartered Accountant, Bachelor of Commerce
            </p>
            <p>
             Gowshika brings four years of experience in audit, taxation, compliance, and specialised documentation work. She delivers structured, detail-oriented support for statutory requirements, fund-raising documentation, and forensic assignments. Her approach blends strong technical grounding with thorough documentation practices, supporting businesses through both routine and specialised compliance needs.

            </p>
             <h3 className="focus-heading">Areas of Focus</h3>
             <ul className="bio-list">
               <li>Statutory, tax & bank audits</li>             
                <li>Transfer pricing compliance</li>
              <li>Banking & fund-raising documentation</li>
              <li>ROC/MCA filings for Companies & LLPs</li>
              <li>Forensic review & fraud detection</li>
              <li>Experience across textiles, FMCG, services, NGOs, contractors, professionals & start-ups
</li>
            </ul>
          </div>
        </article>

        <hr />

        {/* ================= MEMBER 4 ================= */}
        <article className="editorial-row reverse">
          <aside className="editorial-media">
            <img src="/images/Rahul3.png" alt="Rahul R M" />
            <div className="meta">
              <span>DOJ: Nov 2022</span>
              <span>Sulur, Coimbatore</span>
              <span className="iconWrap">
                <a
                  href="https://www.linkedin.com/in/ca-r-m-rahul-460106108/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#fff" />
                </a>

                <FaPhoneAlt
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup("phone", "Rahul R M", "+91 9791235452")
                  }
                />

                <FaEnvelope
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup(
                      "email",
                      "Rahul R M",
                      "rahul@pmgrandco.com"
                    )
                  }
                />
              </span>
            </div>
          </aside>

          <div className="editorial-content">
            <h3>Rahul R M</h3>
            <p className="designation">
              Associate Chartered Accountant, Bachelor of Commerce
            </p>
            <p>
             Rahul specialises in litigation support, forensic reviews, PSU audits, and risk-focused assignments. With experience across direct and indirect tax representations, High Court drafting support, and UAE financial reporting, he brings a practical, investigation-ready perspective to complex engagements. His work emphasises clarity, documentation strength, and structured problem-solving across regulatory environments.
            </p>
             <h3 className="focus-heading">Areas of Focus</h3>
             <ul className="bio-list">
               <li>Forensic audits & fraud risk reviews</li>             
                <li>GST appeals, litigation support & drafting</li>
              <li>Direct tax representation & assessments</li>
              <li>PSU, concurrent & process audits</li>
              <li>UAE bookkeeping, MIS reporting & compliance</li>
              <li>Compliance reviews & organisational risk assessments
</li>
            </ul>
          </div>
        </article>

        <hr />

        {/* ================= MEMBER 5 ================= */}
        <article className="editorial-row">
          <aside className="editorial-media">
            <img src="/images/Gowri.jpg" alt="Gowrinitharshna C" />
            <div className="meta">
              <span>DOJ: Jan 2026</span>
              <span>Tiruppur, Tamil Nadu</span>
              <span className="iconWrap">
                <a
                  href="https://www.linkedin.com/in/gowri-nitharshna/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#fff" />
                </a>

                <FaPhoneAlt
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup("phone", "Gowrinitharshna C", "+91 9943966077")
                  }
                />

                <FaEnvelope
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup(
                      "email",
                      "Gowrinitharshna C",
                      "gowri@pmgrandco.com"
                    )
                  }
                />
              </span>
            </div>
          </aside>

          <div className="editorial-content">
            <h3>Gowrinitharshna C</h3>
            <p className="designation">
              Associate Chartered Accountant, Bachelor of Commerce
            </p>
            <p>
             Gowri has experience across risk-focused audits, compliance frameworks, and financial planning assignments, strengthened by her Big Four background. She works with individuals, start-ups, and corporates to evaluate systems, assess risks, and design structured processes that support sustainable growth. Her work combines clarity, discipline, and an emphasis on informed decision-making.
            </p>
            <h3 className="focus-heading">Areas of Focus</h3>
             <ul className="bio-list">
               <li>Risk-based audits & systems evaluations</li>             
                <li>Compliance framework design for growing businesses</li>
              <li>Internal control testing & process assessments</li>
              <li>Financial planning & structured advisory</li>
              <li>Experience across textiles, robotics, oil & energy, healthcare, technology, professionals & NGOs</li>
            </ul>
          </div>
        </article>
<hr/>

            {/* ================= MEMBER 6 ================= */}
        <article className="editorial-row reverse">
          <aside className="editorial-media">
            <img src="/images/Vaibhav.JPG" alt="Sri Vaibhav V" />
            <div className="meta">
              <span>DOJ: Jan 2026</span>
              <span>Coimbatore, Tamilnadu</span>
              <span className="iconWrap">
                <a
                  href="https://www.linkedin.com/in/sri-vaibhav/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#fff" />
                </a>

                <FaPhoneAlt
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup("phone", "Sri Vaibhav V", "+91 9344733377")
                  }
                />

                <FaEnvelope
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openPopup(
                      "email",
                      "Sri Vaibhav V",
                      "vaibhav@pmgrandco.com"
                    )
                  }
                />
              </span>
            </div>
          </aside>

          <div className="editorial-content">
            <h3>Sri Vaibhav V</h3>
            <p className="designation">
              Associate Chartered Accountant
            </p>
            <p>
            Vaibhav works with organisations to strengthen governance, internal controls, and financial operations. With experience in multinational and Fortune 500 environments, he brings a structured, systems-driven perspective to controllership, SOX compliance, and process excellence. His work focuses on building reliable financial frameworks, enhancing leadership visibility, and enabling organisations to scale with discipline.
            </p>
            <h3 className="focus-heading">Areas of Focus</h3>
             <ul className="bio-list">
               <li>Controllership, financial close & policy standardisation</li>             
                <li>SOX compliance & internal control framework design</li>
              <li>Internal, process & management audits</li>
              <li>Investigations & root-cause reviews</li>
              <li>Process optimization & continuous improvement</li>
              <li>Financial automation & workflow enhancement</li>
            </ul>
          </div>
        </article>
      </div>

      {/* ================= POPUP ================= */}
      {popupData && (
        <div className="popupOverlay" onClick={closePopup}>
          <div
            className="popupBox"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeBtn" onClick={closePopup}>
              <FaTimes />
            </button>

            <h3>{popupData.name}</h3>
            <p>
              {popupData.type === "phone"
                ? "Phone Number"
                : "Email Address"}
            </p>
            <strong>{popupData.value}</strong>
          </div>
        </div>
      )}
    </section>
  );
}

// import "./teamList.css";

// export default function TeamList() {
//   return (
//     <section className="biography-section">
//       <div className="biography-container">
//         <h2>Our Leadership Team</h2>

//         {/* MEMBER 1 */}
//         <div className="bio-card">
//           <div className="bio-image">
//             <img src="/images/accountant-1.png" alt="Mithuna D V" />
//             <span className="doj">DOJ: Nov 2022</span>
//           </div>

//           <div className="bio-content">
//             <h4 className="bio-heading corner-title">Mithuna D V</h4>
//             <p className="bio-desc">
//               ACA, Bachelor of Commerce <br />
//               Head Office, Coimbatore, Tamil Nadu
//             </p>

//             <p>
//               Mithuna supports businesses with structured tax compliance,
//               financial planning, and documentation-driven processes. She works
//               closely with organizations to strengthen planning routines and
//               establish reliable financial workflows.
//             </p>

//             <h3 className="focus-heading">Area of Focus</h3>
//             <ul className="bio-list">
//               <li>Income Tax and GST compliance execution</li>
//               <li>Projected financial statements and business planning</li>
//               <li>Budgeting and operational optimization</li>
//               <li>Documentation structure & bookkeeping frameworks</li>
//             </ul>
//           </div>
//         </div>

//         <hr />

//         {/* MEMBER 2 */}
//         <div className="bio-card">
//           <div className="bio-image">
//             <img src="/images/accountant-1.png" alt="Sri Vaibhav V" />
//             <span className="doj">DOJ: Jan 2026</span>
//           </div>

//           <div className="bio-content">
//             <h4 className="bio-heading corner-title">Sri Vaibhav V</h4>
//             <p className="bio-desc">
//               ACA <br />
//               Head Office, Coimbatore, Tamil Nadu
//             </p>

//             <p>
//               Vaibhav works with organizations to strengthen governance, internal
//               controls, and financial operations. With experience in
//               multinational and Fortune 500 environments, he brings a
//               systems-driven perspective to controllership, SOX compliance, and
//               process excellence.
//             </p>

//             <h3 className="focus-heading">Area of Focus</h3>
//             <ul className="bio-list">
//               <li>Controllership & financial close</li>
//               <li>SOX compliance & internal control frameworks</li>
//               <li>Internal, process & management audits</li>
//               <li>Investigations & root-cause reviews</li>
//               <li>Process optimization & continuous improvement</li>
//               <li>Financial automation & workflow enhancement</li>
//             </ul>
//           </div>
//         </div>

//         <hr />

//         {/* MEMBER 3 */}
//         <div className="bio-card">
//           <div className="bio-image">
//             <img src="/images/accountant-1.png" alt="Rahul R M" />
//             <span className="doj">DOJ: Nov 2022</span>
//           </div>

//           <div className="bio-content">
//             <h4 className="bio-heading corner-title">Rahul R M</h4>
//             <p className="bio-desc">
//               ACA, Bachelor of Commerce <br />
//               Sulur (Coimbatore), Tamil Nadu
//             </p>

//             <p>
//               Rahul specialises in litigation support, forensic reviews, PSU
//               audits, and risk-focused assignments. His work emphasises clarity,
//               documentation strength, and structured problem-solving across
//               regulatory environments.
//             </p>

//             <h3 className="focus-heading">Area of Focus</h3>
//             <ul className="bio-list">
//               <li>Forensic audits & fraud risk reviews</li>
//               <li>GST appeals & litigation support</li>
//               <li>Direct tax representation & assessments</li>
//               <li>PSU, concurrent & process audits</li>
//               <li>UAE bookkeeping & MIS reporting</li>
//               <li>Compliance & organisational risk reviews</li>
//             </ul>
//           </div>
//         </div>

//         <hr />

//         {/* MEMBER 4 */}
//         <div className="bio-card">
//           <div className="bio-image">
//             <img src="/images/accountant-1.png" alt="Pramoth P" />
//             <span className="doj">DOJ: Nov 2022</span>
//           </div>

//           <div className="bio-content">
//             <h4 className="bio-heading corner-title">Pramoth P</h4>
//             <p className="bio-desc">
//               ACA, Bachelor of Commerce <br />
//               Pazhani, Tamil Nadu
//             </p>

//             <p>
//               Pramoth works with organisations across geographies to enhance
//               financial systems, governance, and accounting operations. His work
//               focuses on scalable processes and disciplined financial reporting.
//             </p>

//             <h3 className="focus-heading">Area of Focus</h3>
//             <ul className="bio-list">
//               <li>International bookkeeping (Singapore, Malaysia & Middle East)</li>
//               <li>Business valuation & strategic decision support</li>
//               <li>Zoho Books implementation & automation</li>
//               <li>Process audits & internal control strengthening</li>
//               <li>Financial workflow engineering</li>
//               <li>Audits for societies & non-profit organisations</li>
//             </ul>
//           </div>
//         </div>

//         <hr />

//         {/* MEMBER 5 */}
//         <div className="bio-card">
//           <div className="bio-image">
//             <img src="/images/accountant-1.png" alt="Gowshika T" />
//             <span className="doj">DOJ: Nov 2022</span>
//           </div>

//           <div className="bio-content">
//             <h4 className="bio-heading corner-title">Gowshika T</h4>
//             <p className="bio-desc">
//               ACA, Bachelor of Commerce <br />
//               Salem, Tamil Nadu
//             </p>

//             <p>
//               Gowshika brings experience in audit, taxation, compliance, and
//               specialised documentation work. She supports businesses through
//               both routine and specialised statutory requirements.
//             </p>

//             <h3 className="focus-heading">Area of Focus</h3>
//             <ul className="bio-list">
//               <li>Statutory, tax & bank audits</li>
//               <li>Transfer pricing compliance</li>
//               <li>Banking & fund-raising documentation</li>
//               <li>ROC/MCA filings</li>
//               <li>Forensic review & fraud detection</li>
//               <li>Multi-industry experience</li>
//             </ul>
//           </div>
//         </div>

//         <hr />

//         {/* MEMBER 6 */}
//         <div className="bio-card">
//           <div className="bio-image">
//             <img src="/images/accountant-1.png" alt="Gowrinitharshna C" />
//             <span className="doj">DOJ: Jan 2026</span>
//           </div>

//           <div className="bio-content">
//             <h4 className="bio-heading corner-title">Gowrinitharshna C</h4>
//             <p className="bio-desc">
//               ACA <br />
//               Tiruppur, Tamil Nadu
//             </p>

//             <p>
//               Gowri has experience across risk-based audits, compliance
//               frameworks, and financial planning assignments, supported by her
//               Big Four background.
//             </p>

//             <h3 className="focus-heading">Area of Focus</h3>
//             <ul className="bio-list">
//               <li>Risk-based audits & system evaluations</li>
//               <li>Compliance framework design</li>
//               <li>Internal control testing</li>
//               <li>Financial planning & advisory</li>
//               <li>Multi-sector experience</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
