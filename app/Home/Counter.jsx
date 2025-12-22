import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 3000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ▶ Start animation when visible
          startTime = null;
          rafRef.current = requestAnimationFrame(animate);
        } else {
          // ⏹ Reset when out of view
          cancelAnimationFrame(rafRef.current);
          setCount(0);
        }
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <h6 ref={counterRef}>
      {count}
      {end >= 100 ? "+" : ""}
    </h6>
  );
}

export default Counter;
