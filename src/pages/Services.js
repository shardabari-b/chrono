import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES } from "../data/services";

const SLIDES = ["/images/chrono.jpg", "/images/today.jpg", "/images/founder.jpg"];

export default function Services() {
  const location = useLocation();
  const [slide, setSlide] = useState(0);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = location.state?.activeId;
    if (id) {
      const found = SERVICES.find(s => s.id === id);
      if (found) {
        const index = SERVICES.indexOf(found);
        setActiveIndex(index);
      }
    }
  }, [location.state]);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const active = parseInt(entry.target.dataset.index, 10);
            setActiveIndex(active);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-120px 0px -120px 0px" }
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: "#fff", fontFamily: "'Inter', sans-serif", position: "relative" }}>

      {/* Animated Background */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "radial-gradient(circle at 50% 100%, rgba(240,246,255,0.05) 0%, transparent 50%)",
        pointerEvents: "none",
        zIndex: -1,
        animation: "subtlePulse 20s ease-in-out infinite",
      }} />

      {/* ── Hero ── */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 50%",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 55%, #dbeafe 100%)",
      }} className="sv2-hero">
        <div style={{ padding: "clamp(80px,9vw,120px) clamp(24px,5vw,80px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", position: "relative", zIndex: 2 }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            What We Offer
          </span>
          <h1 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(38px,5vw,64px)", fontWeight: 800, color: "#0b1220", lineHeight: 1.06, letterSpacing: "-0.03em", margin: 0 }}>
            Our <span style={{ color: "#2563eb" }}>Services</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#475569", lineHeight: 1.8, margin: 0, maxWidth: "480px" }}>
            Future-ready programs across technology, innovation, and professional
            excellence — designed to prepare students for the world ahead.
          </p>
        </div>

        {/* Slideshow */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: "-40px", bottom: 0, width: "80px", background: "linear-gradient(135deg, #f0f6ff 0%, #e8f0fe 55%, #dbeafe 100%)", transform: "skewX(-4deg)", zIndex: 2 }} />
          {SLIDES.map((src, i) => (
            <img key={src} src={src} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: i === slide ? 1 : 0, transform: i === slide ? "scale(1)" : "scale(1.04)", transition: "opacity .9s ease, transform .9s ease" }} />
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <div style={{ padding: "clamp(24px,3vw,40px) clamp(8px,2vw,40px)", position: "relative" }}>
        {SERVICES.map((s, i) => {
  const isActive = activeIndex === i;

  return (
    <div
      key={s.id}
      ref={(el) => (cardRefs.current[i] = el)}
      data-index={i}
      style={{
        position: "sticky",
        top: "120px",
        marginBottom: "60px",
        minHeight: "70vh",
        zIndex: 10 + i
      }}
    >

      {/* 👇 ONLY REPLACE THIS PART */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "40px",
          height: "100%",
          padding: "40px",
          borderRadius: "28px",
          background: "linear-gradient(135deg,#ffffff,#f9fbff)",
          border: "1px solid #e2e8f0",
          boxShadow: isActive
            ? "0 25px 60px rgba(15,23,42,0.12)"
            : "0 10px 30px rgba(15,23,42,0.06)",
          transition: "all 0.35s ease",
        }}
      >

        {/* LEFT */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: "#2563eb" }}>
              {s.eyebrow}
            </span>

            <h2 style={{ fontSize: "clamp(28px,3vw,36px)", fontWeight: "800", margin: "10px 0" }}>
              {s.title}
            </h2>

            <p style={{ fontSize: "15px", fontWeight: "600", color: "#475569" }}>
              {s.subtitle}
            </p>

            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
              {s.desc}
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "20px" }}>
            {s.tags.map(t => (
              <span key={t} style={{
                fontSize: "12px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "#eff6ff",
                color: "#2563eb"
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{
          display: "grid",
          gridTemplateRows: "repeat(4,1fr)",
          gap: "12px"
        }}>
          {s.highlights.slice(0, 4).map(h => (
            <div key={h.label} style={{
              padding: "14px",
              borderRadius: "14px",
              background: "#fff",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{ fontSize: "13px", fontWeight: "700" }}>
                {h.label}
              </div>
              <div style={{ fontSize: "12px", color: "#64748b" }}>
                {h.text}
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* 👆 END REPLACEMENT */}

    </div>
  );
})}
      </div>

      <style>{`
        @keyframes subtlePulse { 0%, 100% { opacity: 0.05; } 50% { opacity: 0.1; } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 1024px) { .sv2-hero { grid-template-columns: 1fr !important; } .sv2-hero > div:last-child { height: 240px; } }
        @media (max-width: 768px) {
          div[data-index] > div {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding: 24px !important;
          }
          div[data-index] {
            margin-bottom: 40px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
}


function HighlightCard({ h, hi, active }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#f8faff",
        border: `1px solid ${hovered ? "#bfdbfe" : "#e2e8f0"}`,
        borderRadius: "12px",
        padding: "18px 20px",
        boxShadow: hovered ? "0 6px 20px rgba(37,99,235,.09)" : "none",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "border-color .18s, box-shadow .18s, transform .18s",
        animation: active ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${hi * 0.1}s both` : "none",
      }}
    >
      <div style={{ width: "22px", height: "3px", background: "#2563eb", borderRadius: "999px", marginBottom: "10px" }} />
      <p style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "14px", fontWeight: 700, color: "#0b1220", marginBottom: "6px" }}>{h.label}</p>
      <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>{h.text}</p>
    </div>
  );
}
