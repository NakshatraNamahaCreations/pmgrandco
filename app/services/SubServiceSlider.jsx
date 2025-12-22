// "use client";

// import Slider from "react-slick";
// import styles from "./SubServiceSlider.module.css";

// function PrevArrow({ onClick }) {
//   return (
//     <button className={`${styles.nav} ${styles.prev}`} onClick={onClick}>
//       ‹
//     </button>
//   );
// }

// function NextArrow({ onClick }) {
//   return (
//     <button className={`${styles.nav} ${styles.next}`} onClick={onClick}>
//       ›
//     </button>
//   );
// }

// export default function SubServiceSlider({ data }) {
//   const settings = {
//     infinite: true,
//     speed: 450,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     dots: false,
//     arrows: true,
//     autoplay: false,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 3 } },
//       { breakpoint: 992, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className={styles.sliderMask}>
//       <div className={styles.fadeLeft} />
//       <div className={styles.fadeRight} />

//       <Slider {...settings}>
//         {data.map((item) => (
//           <div key={item.id} className={styles.slidePad}>
//             <article className={styles.card}>
//              <div className={styles.cardRow}>
//   <div className={styles.cardHeader}>
//     <div className={styles.iconBox}>{item.icon}</div>
//     <h3 className={styles.title}>{item.title}</h3>
//   </div>

//   <p className={styles.desc}>{item.desc}</p>
// </div>

//             </article>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }


"use client";

import styles from "./SubServiceSlider.module.css";

export default function SubServiceGrid({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <article key={item.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
          </div>

          <p className={styles.desc}>{item.desc}</p>
        </article>
      ))}
    </div>
  );
}
