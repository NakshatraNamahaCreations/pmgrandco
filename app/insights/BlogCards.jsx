"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./BlogCards.module.css";

const IMAGE_BASE_URL = "https://api.pmgrandco.com/";

export default function BlogCards({ blog }) {
  const router = useRouter();

  /* ---------- HELPERS ---------- */
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").trim();
  };

  /* ---------- HANDLERS ---------- */
  const handleReadMore = () => {
    if (blog.redirectLink && blog.redirectLink.startsWith("http")) {
      window.open(blog.redirectLink, "_blank", "noopener,noreferrer");
    } else {
      router.push(`/blog/${blog._id}`);
    }
  };

  /* ---------- UI ---------- */
  return (
    <article className={styles.card}>
      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <span className={styles.dateBadge}>
          {new Date(blog.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>

        <Image
          src={`${IMAGE_BASE_URL}${blog.bannerImage}`}
          alt={blog.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <h3 className={styles.title}>{blog.title}</h3>

        <p className={styles.desc}>
          {stripHtml(blog.description).slice(0, 150)}...
        </p>

        <button
          type="button"
          className={styles.btn}
          onClick={handleReadMore}
        >
          Read more →
        </button>
      </div>
    </article>
  );
}
