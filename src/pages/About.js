import React, { useEffect, useRef } from "react";

const whatItems = [
  { title: "Artificial Intelligence", text: "Building intelligent systems and ML-powered tools that solve real educational and industry challenges.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z"/><circle cx="12" cy="12" r="2"/></svg>) },
  { title: "Robotics & Automation", text: "Designing intelligent robots and automated systems that bridge digital innovation with physical applications.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M9 11V7a3 3 0 0 1 6 0v4"/><circle cx="9" cy="16" r="1" fill="currentColor"/><circle cx="15" cy="16" r="1" fill="currentColor"/></svg>) },
  { title: "Web & Mobile Engineering", text: "Crafting responsive, scalable applications that deliver seamless experiences across every platform.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8l3 3-3 3"/><path d="M13 14h4"/></svg>) },
  { title: "IoT Systems", text: "Connecting physical and digital worlds through smart devices, sensors, and data-driven decision-making.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/><path d="M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17"/></svg>) },
  { title: "Data Science", text: "Turning raw data into actionable insights through advanced analytics, visualization, and predictive modeling.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-6"/></svg>) },
  { title: "Game Development", text: "Creating immersive gaming experiences with engaging mechanics and innovative design that captivate players.", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4"/><circle cx="16" cy="11" r="1" fill="currentColor"/><circle cx="18" cy="13" r="1" fill="currentColor"/></svg>) },
];

const visionItems = [
  { title: "Purpose", text: "Drive positive change in the lives of learners and communities by putting students at the center.", img: "/images/chrono.jpg", hoverImg: "/images/today.jpg" },
  { title: "Promise", text: "Show up with clarity, care, and craftsmanship so partners can move from ideas to impact.", img: "/images/today.jpg", hoverImg: "/images/chrono.jpg" },
  { title: "Mission", text: "Build trusted partnerships that turn research, design, and engineering into measurable outcomes.", img: "/images/chrono.jpg", hoverImg: "/images/today.jpg" },
  { title: "Values", text: "Integrity, curiosity, and inclusion guide how we build—so every product serves people first.", img: "/images/today.jpg", hoverImg: "/images/chrono.jpg" },
];

function useReveal(selector) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("visible")); return; }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}

function About() {
  useReveal(".ab2-reveal");

  return (
    <section style={{ fontFamily: "'Inter', sans-serif", background: "#fff", overflow: "hidden" }}>

      {/* ── HERO SPLIT ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "520px" }} className="ab2-hero-grid">
        {/* Left dark panel */}
        <div className="ab2-reveal dark-bg" style={{
          background: "#060d1a",
          padding: "clamp(80px,8vw,120px) clamp(32px,5vw,80px)",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            About Us
          </span>
          <h1 style={{
            fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif",
            fontSize: "clamp(36px,4.5vw,58px)",
            fontWeight: 800, lineHeight: 1.06,
            letterSpacing: "-0.03em", color: "#fff",
            margin: "0 0 20px",
          }}>
            We are<br /><span style={{ color: "#60a5fa" }}>Chronosphere</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 12px", maxWidth: "420px" }}>
            A student-led innovation lab building real products, running research experiments,
            and helping schools adopt technology at meaningful scale.
          </p>
          <p style={{ fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 28px", maxWidth: "420px" }}>
            We deliver full-stack development, product design, and implementation support—moving
            from research to launch with clarity and momentum.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["AI & Robotics", "EdTech", "Research", "Student-Led"].map(tag => (
              <span key={tag} style={{
                fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em",
                color: "#93c5fd", background: "rgba(59,130,246,0.1)",
                border: "1px solid rgba(59,130,246,0.22)",
                padding: "5px 14px", borderRadius: "999px",
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="ab2-reveal" style={{ position: "relative", overflow: "hidden", minHeight: "400px" }} style={{ "--delay": "0.1s", position: "relative", overflow: "hidden", minHeight: "400px" }}>
          <img src="/images/chrono.jpg" alt="Chronosphere"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85)" }} />
          <div style={{
            position: "absolute", bottom: "24px", left: "24px",
            background: "rgba(6,13,26,0.88)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px", padding: "14px 20px",
            display: "flex", flexDirection: "column", gap: "2px",
          }}>
            <span style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "26px", fontWeight: 800, color: "#60a5fa", lineHeight: 1 }}>6+</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.04em" }}>Tech Domains</span>
          </div>
        </div>
      </div>

      {/* ── VISION STRIP ── */}
      <div style={{ width: "100%", marginTop: "0" }}>
        <div style={{ display: "flex", minHeight: "280px", overflow: "hidden" }} className="ab2-vision-grid">
          {visionItems.map((item, i) => (
            <VisionCard key={item.title} item={item} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* ── WHAT WE DO ── */}
      <div style={{ background: "#f8fafc", padding: "clamp(64px,8vw,100px) clamp(16px,4vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header */}
          <div className="ab2-reveal" style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            gap: "32px", marginBottom: "48px", paddingBottom: "32px",
            borderBottom: "1px solid #e2e8f0",
          }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
                Capabilities
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#0f172a", margin: 0, lineHeight: 1.06 }}>
                What We Do
              </h2>
            </div>
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, margin: 0, maxWidth: "320px", textAlign: "right" }}>
              Six domains where we research, build, and deploy real solutions.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#e2e8f0", borderRadius: "16px", overflow: "hidden", border: "1px solid #e2e8f0" }} className="ab2-what-grid">
            {whatItems.map((item, i) => (
              <WhatCard key={item.title} item={item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ab2-reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); transition-delay: var(--delay, 0s); }
        .ab2-reveal.visible { opacity: 1; transform: none; }
        @media (max-width: 900px) {
          .ab2-hero-grid { grid-template-columns: 1fr !important; }
          .ab2-vision-grid { flex-wrap: wrap !important; }
          .ab2-vision-grid > * { flex: 1 1 50% !important; }
          .ab2-what-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .ab2-what-grid { grid-template-columns: 1fr !important; }
          .ab2-vision-grid > * { flex: 1 1 100% !important; min-height: 200px !important; }
        }
      `}</style>
    </section>
  );
}

function VisionCard({ item, delay }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", flex: hovered ? "3 1 0%" : "1 1 0%",
        minHeight: "280px", overflow: "hidden", background: "#0f172a",
        borderRight: "1px solid rgba(255,255,255,0.1)",
        transition: "flex 0.6s cubic-bezier(0.22,1,0.36,1)",
        cursor: "pointer",
      }}>
      <img src={item.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) saturate(0.8)", transform: hovered ? "scale(1.08)" : "scale(1.02)", transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s" }} />
      <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(6,13,26,0.55)" : "linear-gradient(90deg, rgba(6,13,26,0.7), rgba(6,13,26,0.25))", transition: "background 0.4s" }} />
      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "28px" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", fontWeight: 700, marginBottom: "10px", display: "block" }}>{item.title}</span>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, fontSize: "14px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(10px)", transition: "opacity 0.4s ease, transform 0.4s ease", maxWidth: "280px" }}>{item.text}</p>
      </div>
    </div>
  );
}

function WhatCard({ item, delay }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="ab2-reveal"
      style={{ "--delay": `${delay}s`, background: hovered ? "#f0f6ff" : "#fff", padding: "clamp(20px,2.5vw,32px)", transition: "background 0.22s", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: hovered ? "#2563eb" : "#eff6ff", color: hovered ? "#fff" : "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.22s, color 0.22s" }}>
          {item.icon}
        </div>
        <span style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "12px", fontWeight: 700, color: "#cbd5e1", letterSpacing: "0.05em" }}>0{whatItems.indexOf(item) + 1}</span>
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{item.title}</h3>
      <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: 1.75, margin: 0 }}>{item.text}</p>
    </div>
  );
}

export default About;
