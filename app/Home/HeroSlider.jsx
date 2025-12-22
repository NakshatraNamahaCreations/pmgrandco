// components/HeroSlider.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import "./HeroSlider.css";
import { FaCogs, FaPhoneAlt, FaUser } from "react-icons/fa";

/**
 * Slides: each slide may include a `highlight` object where
 * keys are exact words (case-sensitive by default) and values are hex color strings.
 */
const defaultSlides = [
  {
    title: "From Numbers to Insights",
    highlight: {
      Numbers: "#175887", // orange
      Insights: "#175887", // green
    },
    subtitle:
      "Revealing the story behind your financials to strengthen decisions and long-term clarity.",
    subtitleColor: "#333",
    ctaText: "View Work",
    ctaHref: "/portfolio",
  },
  {
    title: "Controls that Control Risk",
    highlight: {
      Controls: "#175887", // blue
      Risk: "#175887", // orange
    },
    subtitle:
      "Building disciplined processes that reduce uncertainty and protect operational performance",
    subtitleColor: "#333",
    ctaText: "Our Services",
    ctaHref: "/services",
  },
  {
    title: "SOX, Built Right from the Start",
    highlight: {
      SOX: "#175887",
      Start: "#175887",
    },
    subtitle:
      "Implementing clear, dependable control structures that stand up to testing and scrutiny",
    subtitleColor: "#333",
    ctaText: "Get in Touch",
    ctaHref: "/contact",
  },
  {
    title: "Assurance you can act on",
    highlight: {
      Assurance: "#175887",
      act: "#175887",
    },
    subtitle:
      "Giving you clarity that supports timely responses and seamless compliance",
    subtitleColor: "#333",
    ctaText: "Get in Touch",
    ctaHref: "/contact",
  },
];

/* Helper to escape words for use in RegExp */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* Replace highlighted words with <span style="color:...">word</span>
   Uses word-boundary match `\b` so it won't match inside other words.
   This returns safe HTML for controlled strings — if slide text comes from user input,
   sanitize or avoid dangerouslySetInnerHTML. */
function colorizeTitle(title, highlights = {}) {
  if (!highlights || Object.keys(highlights).length === 0) return title;

  // We want to replace all occurrences, but avoid overlapping replacements.
  // Build array of { start, end, html } by scanning matches.
  const matches = [];

  Object.entries(highlights).forEach(([word, color]) => {
    const re = new RegExp(`\\b${escapeRegExp(word)}\\b`, "g");
    let m;
    while ((m = re.exec(title)) !== null) {
      matches.push({
        index: m.index,
        length: m[0].length,
        html: `<span style="color:${color}">${m[0]}</span>`,
      });
    }
  });

  if (matches.length === 0) return title;

  // Sort matches by index and skip overlaps (keep the first)
  matches.sort((a, b) => a.index - b.index);
  const out = [];
  let lastIndex = 0;

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    if (m.index < lastIndex) {
      // overlapping — skip
      continue;
    }
    // append segment before match
    out.push(escapeHtml(title.slice(lastIndex, m.index)));
    // append highlighted html (already escaped for the word content because it came from title)
    out.push(m.html);
    lastIndex = m.index + m.length;
  }
  // append remainder
  out.push(escapeHtml(title.slice(lastIndex)));

  return out.join("");
}

/* Basic html-escape for text segments */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default function HeroSlider({
  slides = defaultSlides,
  interval = 2000,
  showArrows = true,
  showDots = true,
  height = 350,
}) {
  const count = slides.length;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    startTimer();
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      stopTimer();
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, paused]);

  function startTimer() {
    if (timerRef.current || paused || count <= 1) return;
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % count);
    }, interval);
  }

  function stopTimer() {
    if (!timerRef.current) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function next() {
    setIdx((i) => (i + 1) % count);
  }

  function prev() {
    setIdx((i) => (i - 1 + count) % count);
  }

  function goTo(i) {
    setIdx(((i % count) + count) % count);
  }

  // simple touch swipe
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  }

  if (!slides || slides.length === 0) return null;

  return (
    <>
      <div
        className="hh-hero-slider"
        onMouseEnter={() => {
          setPaused(true);
          stopTimer();
        }}
        onMouseLeave={() => {
          setPaused(false);
          startTimer();
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ minHeight: `${height}px` }}
        role="region"
        aria-label="Hero slider"
      >
       {/* <div class="hh-network-bg">
  <span class="ring ring-1"></span>
  <span class="ring ring-2"></span>
  <span class="ring ring-3"></span>

  <span class="orbit orbit-1"><span class="node"></span></span>
  <span class="orbit orbit-2"><span class="node"></span></span>
  <span class="orbit orbit-3"><span class="node"></span></span>
</div> */}
 <div className="services-hero-bg" />
      <div className="services-hero-bg1"/>


        <div className="hh-slides">
          {slides.map((s, i) => {
            const isActive = i === idx;
            return (
              <section
                key={i}
                className={`hh-slide ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
              >
                <div className="hh-overlay">
                  <div className="hh-content">
                    {s.title && (
                      <h2
                        className="hh-title"
                        // safe because we escape all plain segments and only insert highlighted spans we build above
                        dangerouslySetInnerHTML={{
                          __html: colorizeTitle(s.title, s.highlight),
                        }}
                      />
                    )}

                    {s.subtitle && (
                      <p
                        className="hh-subtitle"
                        style={{ color: s.subtitleColor || "#ffffff" }}
                      >
                        {s.subtitle}
                      </p>
                    )}
                    
                  </div>
                  
                </div>
                
              </section>
            );
          })}
          
        </div>

        {showArrows && count > 1 && (
          <>
            <button
              className="hh-arrow hh-prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              className="hh-arrow hh-next"
              onClick={next}
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}
       

        {showDots && (
          <div className="hh-dots" role="tablist" aria-label="Slide navigation">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hh-dot ${i === idx ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                role="tab"
                aria-selected={i === idx}
              />
            ))}
          </div>
        )}
      </div>

       {/* Static Action Buttons */}
      <div className="hh-action-bar">
        <a className="hh-action-btn" href="#1">
         <span><FaCogs size={20} style={{marginRight: "10px"}}/> Our Services</span>
        </a>
        <a className="hh-action-btn" href="#2">
         <span><FaUser size={18}  style={{marginRight: "10px"}}/>Book a Consultation</span> 
        </a>
      </div>
    </>
  );
}
