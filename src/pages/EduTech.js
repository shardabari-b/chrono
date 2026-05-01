import React, { useEffect, useRef, useState } from "react";

const blocks = [
  { num: "01", title: "Finishing School", lead: "Bridging the gap between academic education and industry readiness.", desc: "An institution which prepares individuals with etiquette, soft skills, and social styling graces for a polished entry into the corporate world.", tags: ["Soft Skills Training", "Etiquette & Grooming", "Career Readiness", "Personality Transformation"], accent: "#2563eb" },
  { num: "02", title: "Workshops & Hackathons", lead: "Hands-on learning experiences that build real-world problem-solving skills.", desc: "We run intensive workshops and hackathons where students tackle live challenges, collaborate across disciplines, and build products that matter.", tags: ["Design Thinking", "AI & ML Sprints", "Product Builds", "Team Challenges"], accent: "#2563eb" },
  { num: "03", title: "Internships", lead: "Real work. Real impact. Real experience.", desc: "We provide internships in several modern courses so that anyone who reaches out learns from the best and polishes themselves with industry knowledge.", tags: ["Software Development", "UI/UX Design", "Data Science", "Digital Marketing"], accent: "#2563eb" },
  { num: "04", title: "STEM & Robotics Labs", lead: "Empowering the next generation of engineers and innovators.", desc: "Our STEM labs and robotics programs give students hands-on exposure to hardware, automation, and engineering principles from an early age.", tags: ["Robotics", "Electronics", "3D Printing", "IoT Projects"], accent: "#2563eb" },
  { num: "05", title: "Job Placement Assistance", lead: "From campus to career — we walk with you.", desc: "We help graduates in getting jobs in various MNCs so that they can become a good fit in the organization and land into dream jobs.", tags: ["Resume Building", "Mock Interviews", "MNC Referrals", "Career Coaching"], accent: "#2563eb" },
];

export default function EduTech() {
  const [visBlocks, setVisBlocks] = useState([]);
  const [visLeft,   setVisLeft]   = useState(false);
  const sectionRef = useRef(null);
  const leftRef    = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === leftRef.current) { setVisLeft(true); obs.unobserve(e.target); return; }
        const idx = Number(e.target.dataset.idx);
        setVisBlocks(v => { const n = [...v]; n[idx] = true; return n; });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    if (leftRef.current) obs.observe(leftRef.current);
    sectionRef.current?.querySelectorAll(".et2-block").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#fff", padding: "clamp(80px,10vw,130px) clamp(16px,4vw,80px)", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "clamp(48px,6vw,100px)", alignItems: "start" }} className="et2-inner">

        {/* Left sticky */}
        <div ref={leftRef} style={{
          position: "sticky", top: "100px",
          opacity: visLeft ? 1 : 0,
          transform: visLeft ? "translateY(0)" : "translateY(36px)",
          transition: "opacity .8s ease, transform .8s ease",
        }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            Education with Tech
          </span>
          <h2 style={{
            fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif",
            fontSize: "clamp(36px,4.5vw,54px)",
            fontWeight: 800, color: "#0f172a",
            lineHeight: 1.06, letterSpacing: "-0.03em",
            margin: "0 0 20px",
          }}>
            Shaping <span style={{ color: "#2563eb" }}>Future-Ready</span> Minds
          </h2>
          <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.8, margin: 0, maxWidth: "340px" }}>
            Five programs designed to bridge the gap between classroom learning and real-world impact.
          </p>

          {/* Progress dots */}
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "16px", paddingLeft: "4px" }}>
            {blocks.map((_, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: visBlocks[i] ? "#2563eb" : "#e2e8f0",
                  transition: "background .4s ease",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "12px", color: visBlocks[i] ? "#2563eb" : "#94a3b8", fontWeight: 600, transition: "color .4s ease" }}>{blocks[i].title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right blocks */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {blocks.map((b, i) => (
            <div
              key={i}
              className="et2-block"
              data-idx={i}
              style={{
                borderTop: "1px solid #e2e8f0",
                padding: "clamp(32px,4vw,48px) 0",
                display: "grid", gridTemplateColumns: "52px 1fr", gap: "24px",
                alignItems: "start", position: "relative", overflow: "hidden",
                opacity: visBlocks[i] ? 1 : 0,
                transform: visBlocks[i] ? "translateX(0)" : "translateX(48px)",
                transition: `opacity .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, transform .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s`,
              }}>
              {i === blocks.length - 1 && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "#e2e8f0" }} />}
              <span style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "12px", fontWeight: 800, color: "#2563eb", letterSpacing: "1px", paddingTop: "4px" }}>{b.num}</span>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 800, color: "#0f172a", margin: "0 0 8px", letterSpacing: "-0.02em" }}>{b.title}</h3>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#2563eb", margin: "0 0 12px", lineHeight: 1.5 }}>{b.lead}</p>
                <p style={{ fontSize: "14.5px", color: "#64748b", lineHeight: 1.8, margin: "0 0 18px" }}>{b.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {b.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: "11px", fontWeight: 600, color: "#2563eb", border: "1px solid rgba(37,99,235,0.25)", borderRadius: "6px", padding: "4px 12px", background: "transparent" }}>{t}</span>
                  ))}
                </div>
              </div>
              {/* hover accent */}
              <div className="et2-accent-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #2563eb, transparent)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform .6s cubic-bezier(0.22,1,0.36,1)" }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .et2-block:hover .et2-accent-line { transform: scaleX(1) !important; }
        @media (max-width: 900px) {
          .et2-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
          .et2-inner > div:first-child { position: static !important; }
        }
        @media (max-width: 540px) {
          .et2-block { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>
  );
}
