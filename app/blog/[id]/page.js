import styles from "./BlogDetail.module.css";
import Footer from "../../Home/Footer";
import HomePage from "../../Home/HomePage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const API_BASE = "https://api.pmgrandco.com";

/* ISR */
export const revalidate = 60;

export default async function BlogDetailPage({ params }) {
  // ✅ FIX: unwrap params
  const { id: blogId } = await params;

  let blog = null;

  try {
    const res = await fetch(`${API_BASE}/api/blogs/id/${blogId}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Blog fetch failed");
    }

    const data = await res.json();
    blog = data?.blog;
  } catch (error) {
    console.error("Blog fetch error:", error);
  }

  if (!blog) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Blog not available</h2>
      </div>
    );
  }

  return (
    <>
      <HomePage />

      <section className={styles.wrapper}>
        <Link href="/insights" className={styles.backBtn}>
          <FaArrowLeft size={18} /> Back to Insights
        </Link>

        <div className={styles.pageLayout}>
          <div className={styles.container}>
            <h1 className={styles.title}>{blog.title}</h1>

            {typeof blog.description === "string" && (
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: blog.description }}
              />
            )}

            {Array.isArray(blog.faqs) && blog.faqs.length > 0 && (
              <section className={styles.faqSection}>
                <h2>Frequently Asked Questions</h2>

                {blog.faqs.map((faq) => (
                  <details key={faq._id} className={styles.faqItem}>
                    <summary className={styles.faqQuestion}>
                      {faq.question}
                      <FaChevronDown />
                    </summary>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </details>
                ))}
              </section>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
