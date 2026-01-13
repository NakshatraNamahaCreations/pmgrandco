// import HomePage from "../Home/HomePage"
// import InsightsBanner from "./InsightsBanner"


// export default function Insights(){
//     return(
//         <>
//         <HomePage/>
//         <InsightsBanner/>
//         </>
//     )
// }


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import styles from "./blog.module.css";
// import BlogCards from "./BlogCards";
// import HomePage from "../Home/HomePage";
// import InsightsBanner from "./InsightsBanner";
// import Footer from "../Home/Footer"

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     async function fetchBlogs() {
//       try {
//         const res = await axios.get(
//           "https://pmgrbackend.onrender.com/api/blogs"
//         );

//         // ✅ Correct extraction
//         setBlogs(res.data.blogs || []);
//       } catch (error) {
//         console.error("Error fetching blogs", error);
//         setBlogs([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchBlogs();
//   }, []);

//   if (loading) return <p>Loading blogs...</p>;

//   return (
//     <>
//       <HomePage />
//       <InsightsBanner />

//       <section className={styles.section}>
//         <div className={styles.container}>
//           {/* <h1 className={styles.heading}>Latest Blogs</h1> */}

//           <div className={styles.grid}>
//             {blogs.length > 0 ? (
//               blogs.map((blog) => (
//                 <BlogCards key={blog._id} blog={blog} />
//               ))
//             ) : (
//               <p>No blogs found</p>
//             )}
//           </div>
//         </div>
//       </section>

//       <Footer/>
//     </>
//   );
// }

import styles from "./blog.module.css";
import BlogCards from "./BlogCards";
import HomePage from "../Home/HomePage";
import InsightsBanner from "./InsightsBanner";
import Footer from "../Home/Footer";

const API_URL = "https://pmgrbackend.onrender.com";

export default async function BlogPage() {
  let blogs = [];

  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      cache: "no-store", // always fresh (or "force-cache")
    });

    const data = await res.json();
    blogs = data.blogs || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <>
      <HomePage />
      <InsightsBanner />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <BlogCards key={blog._id} blog={blog} />
              ))
            ) : (
              <p>No blogs found</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

