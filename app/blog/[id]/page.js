import styles from "./BlogDetail.module.css";
import Footer from "../../Home/Footer";
import HomePage from "../../Home/HomePage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const API_BASE = "https://api.pmgrandco.com";

/* ✅ Required for static export */
export async function generateStaticParams() {
  const res = await fetch(`${API_BASE}/api/blogs`);
  const data = await res.json();

  return data.blogs.map((blog) => ({
    id: blog._id.toString(),
  }));
}

/* ✅ Server Component */
export default async function BlogDetailPage(props) {
  const params = await props.params; // ✅ FIX
  const blogId = params.id;

  const res = await fetch(`${API_BASE}/api/blogs/id/${blogId}`);


  const data = await res.json();
  const blog = data?.blog;

  if (!blog) {
    return <div style={{ padding: 40 }}>Blog not found</div>;
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

                {blog.faqs.map((faq, index) => (
                  <details key={index} className={styles.faqItem}>
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
