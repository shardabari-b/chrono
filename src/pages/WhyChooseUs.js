import React, { useEffect, useRef, useState } from "react";

const reasons = [
  { title: "Experience", desc: "With years of experience in the IT sector, providing scalable and reliable end-user products in India and other parts of the world. Chronosphere is known for the team of experts who knows how to make any industry grow and help in making it fully-functional for the best productivity." },
  { title: "Expert IT Team", desc: "Our team comprises advanced-expertise in software development and IT solutions in India and across the globe. We are dedicated to giving customized results that particularly meet industry standards." },
  { title: "Modern Technology", desc: "Expertise in solving complex problems efficiently with latest technology, we specialize in proactive support and making robust software end-products in India. We have a dedicated team that stays updated and predicts advancements for our SMEs." },
  { title: "Cost-Effective", desc: "Partnering with us helps you save on costs compared to hiring freelancers or in-house teams. With Chronosphere, we provide scalability, easier management of online business, and long-term ROI." },
  { title: "Custom Solutions", desc: "Every business is unique, so our website design is too. We perfectly align every metric of your business with the needs of your website/software — SEO, responsiveness, faster loading times, and more." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Expert Team Members" },
  { value: "10+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visStats, setVisStats]   = useState(false);
  const [visRows,  setVisRows]    = useState([]);
  const statsRef   = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === statsRef.current) { setVisStats(true); obs.unobserve(e.target); return; }
        const idx = Number(e.target.dataset.idx);
        setVisRows(v => { const n = [...v]; n[idx] = true; return n; });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    if (statsRef.current) obs.observe(statsRef.current);
    sectionRef.current?.querySelectorAll(".wcu2-row").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="dark-bg" style={{
      background: "#060d1a",
      padding: "clamp(80px,10vw,130px) clamp(16px,4vw,80px)",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1.5fr",
        gap: "clamp(48px,6vw,100px)", alignItems: "start",
      }} className="wcu2-inner">

        {/* ── Left sticky ── */}
        <div style={{ position: "sticky", top: "100px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            Why Choose Us
          </span>
          <h2 style={{
            fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif",
            fontSize: "clamp(36px,5vw,58px)",
            fontWeight: 800, color: "#fff",
            lineHeight: 1.06, letterSpacing: "-0.03em",
            margin: "0 0 20px",
          }}>
            Why<br /><span style={{ color: "#2563eb" }}>Chronosphere?</span>
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, margin: "0 0 48px", maxWidth: "360px" }}>
            Chronosphere is dedicated to providing the best outcomes from the online presence of your business.
            We keep you updated and upgraded with the latest technology.
          </p>

          {/* Stats */}
          <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                borderLeft: "2px solid #2563eb", paddingLeft: "16px",
                opacity: visStats ? 1 : 0,
                transform: visStats ? "translateY(0)" : "translateY(20px)",
                transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s`,
              }}>
                <span style={{ display: "block", fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{s.value}</span>
                <span style={{ display: "block", fontSize: "12px", color: "rgba(255,255,255,0.72)", marginTop: "4px", fontWeight: 500 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right accordion ── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {reasons.map((r, i) => (
            <div
              key={i}
              className="wcu2-row"
              data-idx={i}
              onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer",
                opacity: visRows[i] ? 1 : 0,
                transform: visRows[i] ? "translateX(0)" : "translateX(40px)",
                transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
              }}>
              {i === reasons.length - 1 && <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", position: "absolute", bottom: 0, left: 0, right: 0 }} />}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "28px 0", paddingBottom: activeIdx === i ? "12px" : "28px", transition: "padding .4s ease" }}>
                <span style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "12px", fontWeight: 800, color: "#2563eb", minWidth: "28px", letterSpacing: "0.05em" }}>0{i + 1}</span>
                <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(17px,2vw,22px)", fontWeight: 700, color: "#f1f5f9", margin: 0, flex: 1, letterSpacing: "-0.01em" }}>{r.title}</h3>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  border: `1px solid ${activeIdx === i ? "#2563eb" : "rgba(255,255,255,0.12)"}`,
                  background: activeIdx === i ? "#2563eb" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: activeIdx === i ? "#fff" : "#94a3b8",
                  transition: "background .3s, border-color .3s, color .3s",
                  flexShrink: 0,
                }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d={activeIdx === i ? "M4 8l6 6 6-6" : "M4 12l6-6 6 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div style={{ maxHeight: activeIdx === i ? "200px" : "0", overflow: "hidden", transition: "max-height .5s cubic-bezier(0.22,1,0.36,1)" }}>
                <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: "0 0 28px", paddingLeft: "48px" }}>{r.desc}</p>
              </div>
              {/* accent line */}
              <div style={{ height: "2px", background: "#2563eb", transform: activeIdx === i ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .5s cubic-bezier(0.22,1,0.36,1)" }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wcu2-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wcu2-inner > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
