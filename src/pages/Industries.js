import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const industries = [
  { id: "b2b", title: "B2B Industries", desc: "Empowering tech firms, manufacturers, startups, and financial services with scalable digital solutions.", sectors: ["Tech & IT Services", "Manufacturing", "Startups", "Financial Services", "Telecommunication", "Logistics"], img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop" },
  { id: "b2c", title: "B2C Industries", desc: "Driving consumer engagement across retail, health, automotive, fashion, and education sectors.", sectors: ["Food & Beverage", "Health & Fitness", "Retailers", "Automotive", "Fashion & Beauty", "Education"], img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80&auto=format&fit=crop" },
  { id: "professional", title: "Professional Services", desc: "Supporting law firms, healthcare providers, architects, and service professionals with smart tools.", sectors: ["Law Firms", "Accounting Firms", "Healthcare", "Architects", "Dentists", "Medical Suppliers"], img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop" },
  { id: "enterprise", title: "Enterprise & Public Sector", desc: "Transforming insurance, government, energy, travel, and e-commerce with enterprise-grade platforms.", sectors: ["Insurance", "Government", "Renewable Energy", "Transport", "Healthcare & Pharma", "Hotels"], img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&auto=format&fit=crop" },
  { id: "education", title: "Education & EdTech", desc: "Revolutionizing learning with LMS platforms, AI tutors, STEM labs, and student lifecycle tools.", sectors: ["Schools", "Colleges", "EdTech Startups", "Training Centers", "Online Platforms", "Coaching Institutes"], img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop" },
  { id: "media", title: "Media & Entertainment", desc: "Powering content creators, studios, gaming companies, and digital media platforms.", sectors: ["Gaming Studios", "Content Creators", "Digital Media", "Animation Studios", "Streaming Platforms"], img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80&auto=format&fit=crop" },
];

export default function Industries() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const [headVis, setHeadVis] = useState(false);
  const [cardVis, setCardVis] = useState([]);

  useEffect(() => {
    const headEl  = headRef.current;
    const cardEls = sectionRef.current?.querySelectorAll(".in2-card") || [];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === headEl) setHeadVis(true);
        else { const idx = Number(e.target.dataset.idx); setCardVis(v => { const n = [...v]; n[idx] = true; return n; }); }
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    if (headEl) obs.observe(headEl);
    cardEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fff", padding: "clamp(64px,8vw,100px) clamp(16px,4vw,80px)", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: "clamp(48px,6vw,72px)", opacity: headVis ? 1 : 0, transform: headVis ? "translateY(0)" : "translateY(36px)", transition: "opacity .8s ease, transform .8s ease" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            Industries
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(36px,5vw,58px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Expertise Across <span style={{ color: "#2563eb" }}>Industries</span>
          </h2>
          <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#64748b", lineHeight: 1.85, margin: 0, maxWidth: "600px" }}>
            Our expertise spans across industries — from B2B enterprises and professional
            services to consumer brands, education, media, and public sector organizations.
            We deliver technology solutions that drive real impact at every scale.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden" }} className="in2-row">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.id} ind={ind} i={i} visible={cardVis[i]} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .in2-row { grid-template-columns: repeat(3, 1fr) !important; } .in2-card { border-bottom: 1px solid #e2e8f0 !important; min-height: 320px !important; } }
        @media (max-width: 700px)  { .in2-row { grid-template-columns: repeat(2, 1fr) !important; } .in2-card { min-height: 260px !important; } }
        @media (max-width: 480px)  { .in2-row { grid-template-columns: 1fr !important; } .in2-card { min-height: 220px !important; } }
      `}</style>
    </section>
  );
}

function IndustryCard({ ind, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/industries/${ind.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div
        className="in2-card"
        data-idx={i}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative", minHeight: "440px",
          borderRight: "1px solid #e2e8f0",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          overflow: "hidden", cursor: "pointer",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(48px)",
          transition: `opacity .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
        }}>
        {/* BG image */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${ind.img})`, backgroundSize: "cover", backgroundPosition: "center", transform: hovered ? "scale(1.12)" : "scale(1.04)", transition: hovered ? "transform .8s cubic-bezier(0.22,1,0.36,1)" : "transform 6s ease", zIndex: 0 }} />
        {/* Gradient */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: hovered ? "0%" : "65%", background: "linear-gradient(to top, rgba(6,13,26,0.92) 0%, rgba(6,13,26,0.4) 60%, transparent 100%)", zIndex: 1, transition: "height .5s ease" }} />

        {/* Default content */}
        <div style={{ position: "relative", zIndex: 2, padding: "24px 20px", display: "flex", flexDirection: "column", gap: "16px", opacity: hovered ? 0 : 1, transform: hovered ? "translateY(12px)" : "translateY(0)", transition: "opacity .35s ease, transform .35s ease" }}>
          <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(13px,1.2vw,16px)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3 }}>{ind.title}</h3>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "background .3s, border-color .3s" }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>

        {/* Hover overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "rgba(37,99,235,0.9)", backdropFilter: "blur(4px)", padding: "24px 20px", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "10px", transform: hovered ? "translateY(0)" : "translateY(100%)", transition: "transform .52s cubic-bezier(0.22,1,0.36,1)" }}>
          <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(13px,1.2vw,16px)", fontWeight: 700, color: "#fff", margin: "0 0 2px", lineHeight: 1.3 }}>{ind.title}</h3>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
            {ind.sectors.map((s, j) => (
              <li key={j} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "11.5px", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#fff", flexShrink: 0 }} />{s}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: 700, color: "#fff", marginTop: "4px" }}>
            Explore
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>

        {/* Bottom accent */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", zIndex: 4, background: "#2563eb", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .5s cubic-bezier(0.22,1,0.36,1)" }} />
      </div>
    </Link>
  );
}
