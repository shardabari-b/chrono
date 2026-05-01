import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import OurTeam from "./OurTeam";
import Products from "./Products";
import ServicesPage from "./Services";
import Industries from "./Industries";
import WhyChooseUs from "./WhyChooseUs";
import EduTech from "./EduTech";
import Blogs from "./Blogs";
import RD from "./RD";
import Contact from "./Contact";

const Home = () => {
  const heroVideoRef = useRef(null);
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle    = "Chronosphere\nAhead of Time Tech Venture";
  const titlePrefix  = "Chronosphere\n";
  const aheadOfTime  = "Ahead of Time";

  useEffect(() => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.playbackRate = 0.75;
    heroVideoRef.current.play()?.catch(() => {});
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTypedTitle(fullTitle.slice(0, i));
      if (i >= fullTitle.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: "#fff" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <video ref={heroVideoRef} autoPlay muted loop playsInline preload="auto"
          poster="/images/chrono.jpg" aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src="/video/chronosphere.webm" type="video/webm" />
          <source src="/video/chronos.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — bottom-heavy for text legibility */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(4,8,20,0.92) 0%, rgba(4,8,20,0.55) 45%, rgba(4,8,20,0.15) 100%)",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2, width: "100%",
          padding: "clamp(80px,12vw,160px) clamp(16px,4vw,80px) clamp(64px,8vw,100px)",
          maxWidth: "1400px", margin: "0 auto",
        }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif",
            fontSize: "clamp(52px,8vw,96px)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            color: "#fff",
            margin: "0 0 clamp(16px,2vw,24px)",
            maxWidth: "900px",
            textShadow: "0 8px 40px rgba(0,0,0,0.4)",
            whiteSpace: "pre-wrap",
            minHeight: "2.1em",
          }} aria-label={fullTitle}>
            {typedTitle.slice(0, titlePrefix.length)}
            <span style={{ display: "block", fontSize: "clamp(28px,4.5vw,56px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#60a5fa" }}>
                {typedTitle.slice(titlePrefix.length, titlePrefix.length + aheadOfTime.length)}
              </span>
              {typedTitle.slice(titlePrefix.length + aheadOfTime.length)}
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(15px,1.8vw,18px)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75,
            maxWidth: "600px",
            margin: "0 0 clamp(32px,4vw,48px)",
            fontFamily: "'Inter', sans-serif",
          }}>
            Chronosphere is a student-powered tech venture built on the belief that innovation doesn't wait for graduation.
            We design, build, and launch real-world technology products — from AI tools to digital platforms —
            driven by the next generation of thinkers, creators, and engineers.
          </p>

         
        </div>

        <style>{`
          @keyframes heroScrollBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}</style>
      </section>

      {/* ── SECTIONS ─────────────────────────────────────────── */}
      <div id="services"      style={{ scrollMarginTop: "92px" }}><ServicesPage /></div>
      <div id="products"      style={{ scrollMarginTop: "92px" }}><Products /></div>
      <div id="industries"    style={{ scrollMarginTop: "92px" }}><Industries /></div>
      <div id="why-choose-us" style={{ scrollMarginTop: "92px" }}><WhyChooseUs /></div>
      <div id="edu-tech"      style={{ scrollMarginTop: "92px" }}><EduTech /></div>
      <div id="about"         style={{ scrollMarginTop: "92px" }}><About /></div>
      <div id="team"          style={{ scrollMarginTop: "92px" }}><OurTeam /></div>
      <div id="blogs"         style={{ scrollMarginTop: "92px" }}><Blogs /></div>
      <div id="rd"            style={{ scrollMarginTop: "92px" }}><RD /></div>
      <div id="contact"       style={{ scrollMarginTop: "92px" }}><Contact /></div>
    </div>
  );
};

export default Home;
