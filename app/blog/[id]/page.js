"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./BlogDetail.module.css";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../../Home/Footer"
import HomePage from "../../Home/HomePage"

const API_BASE = "https://pmgrbackend.onrender.com";

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params?.id;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/blogs/id/${blogId}`);
        const data = await res.json();
        setBlog(data?.blog || null);
      } catch (err) {
        console.error("Fetch error:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;
  if (!blog) return <div style={{ padding: 40 }}>Blog not found</div>;

  return (
    <>
    <HomePage/>
    <section className={styles.wrapper}>
      {blog.bannerImage && (
        <div className={styles.banner}>
          <img
            src={`${API_BASE}/${blog.bannerImage}`}
            alt={blog.title}
            className={styles.image}
          />
        </div>
      )}

     <div className={styles.pageLayout}>
  {/* LEFT STICKY FORM */}
  <aside className={styles.stickyForm}>
    <h3>Get a Free Consultation</h3>

    <form className={styles.form}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <input type="tel" placeholder="Phone Number" required />
      <textarea placeholder="Your Requirement" rows="4"></textarea>
      <button type="submit">Submit</button>
    </form>
  </aside>

  {/* RIGHT BLOG CONTENT */}
  <div className={styles.container}>
    <h1 className={styles.title}>{blog.title}</h1>

    {typeof blog.description === "string" && (
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    )}

    {/* FAQ ACCORDION (unchanged) */}
    {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>

        {blog.faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`${styles.faqItem} ${
                isOpen ? styles.active : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={`${styles.chevronIcon} ${
                    isOpen ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </button>

              <div
                className={styles.faqAnswer}
                style={{ maxHeight: isOpen ? "300px" : "0px" }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </section>
    )}
  </div>
</div>
    </section>
    <Footer/>
    </>
  );
}
