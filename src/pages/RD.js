import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const researchAreas = [
  { num: "01", title: "Artificial Intelligence in Education", desc: "Developing adaptive learning algorithms, emotion-sensing models, and AI-driven personalization engines that respond to each student's unique learning pattern.", tags: ["Machine Learning", "NLP", "Adaptive Systems"] },
  { num: "02", title: "Robotics & Embedded Systems", desc: "Building intelligent robotic platforms and IoT-integrated classroom tools that give students hands-on exposure to hardware, automation, and real-time control systems.", tags: ["IoT", "Embedded C", "Automation"] },
  { num: "03", title: "EdTech Product Research", desc: "Researching next-generation LMS architectures, student lifecycle analytics, and gamified learning frameworks that improve engagement and measurable outcomes.", tags: ["LMS", "Analytics", "UX Research"] },
  { num: "04", title: "Data Science & Predictive Analytics", desc: "Turning raw educational data into actionable insights — identifying at-risk learners, predicting dropout patterns, and optimizing curriculum delivery at scale.", tags: ["Python", "ML Models", "Dashboards"] },
  { num: "05", title: "Human-Computer Interaction", desc: "Studying how students interact with digital tools to design more intuitive, accessible, and inclusive interfaces for diverse learning environments.", tags: ["UX Design", "Accessibility", "Prototyping"] },
  { num: "06", title: "Cybersecurity & Digital Safety", desc: "Researching secure-by-design principles for student data platforms, identity management, and safe digital environments for schools and institutions.", tags: ["Security", "Privacy", "Compliance"] },
];

const collaborationTracks = [
  {  title: "Academic Partnerships", desc: "Co-research programs with universities and colleges — joint publications, shared labs, and student exchange initiatives." },
  {  title: "Industry Collaborations", desc: "Working with tech companies to bring real-world problem statements into our research pipeline and co-develop solutions." },
  {  title: "Government & NGOs", desc: "Partnering with public bodies and non-profits to pilot AI-first education programs at scale across underserved regions." },
  {  title: "Fellowships", desc: "Structured fellowship programs for student researchers — mentorship, stipends, and pathways to publish and present." },
  {  title: "Joint Initiatives", desc: "Cross-institutional projects that combine expertise from multiple domains to tackle complex educational challenges." },
];

const partners = [
  { name: "Bentley", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Bentley_Systems_logo.svg" },
  { name: "Code.org", logo: "https://code.org/_next/static/media/cdo-logo-inverse.062eac04.svg" },
  { name: "NVIDIA", logo: "https://iprsoftwaremedia.com/219/files/202512/692f56b83d6332f881bbc58b_nvidia-logo-horiz-blk-16x9%201/nvidia-logo-horiz-blk-16x9%201_3b6e36c5-dc74-4a75-86f4-5faefc2a7f7d-prv.png" },
  { name: "Software AG", logo: "https://www.softwareag.com/app/uploads/2025/09/software-gmbh-light-bg-logo.svg" },
  { name: "Celonis", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Celonis_Logo.png" },
  { name: "Unity", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png" },
  { name: "IABAC", logo: "https://iabac.org/resource/images/logo.png" },
  { name: "TCS", logo: "https://www.tcs.com/content/dam/global-tcs/en/images/home/tcs-logo-1.svg" },
  { name: "Infosys", logo: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/26/carlos-alcaraz-lead.jpg" },
  { name: "Wipro", logo: "https://www.wipro.com/content/dam/nexus/en/brand/images/wipro-logo-white.svg" },
  { name: "HCL", logo: "https://www.hcltech.com/themes/custom/hcltech/images/logo.svg" },
  { name: "Tech Mahindra", logo: "https://www.techmahindra.com/themes/custom/tech_mahindra/logo.svg" },
  { name: "Accenture", logo: "https://www.accenture.com/content/dam/accenture/final/images/icons/symbol/Acc_Logo_Black_Purple_RGB.png" },
  { name: "IBM", logo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5/8f4e3cc2b5-logo.svg" },
  { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png" },
  { name: "Adobe", logo: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" },
  { name: "Oracle", logo: "https://www.oracle.com/a/ocom/img/cb71/oracle-logo.jpg" },
  { name: "SAP", logo: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg" },
  { name: "Cisco", logo: "https://www.cisco.com/c/dam/c/en/us/td/i/300001_400000/300001_310000/300001_300010/cisco_logo_white_300010.png" },
  { name: "Dell", logo: "https://www.dell.com/_astro/dell-logo.D8r5Kv8Z_Z1pQXvN.svg" },
  { name: "HP", logo: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/HP%20Logo%20White%20Text%20on%20Transparent%20Background%201200x630.png" },
];

const stats = [
  { value: "12+", label: "Active Research Projects" },
  { value: "7",   label: "Industry Partners" },
  { value: "40+", label: "Student Researchers" },
  { value: "3",   label: "Published Papers" },
];

export default function RD() {
  const navigate = useNavigate();
  const [visAreas,    setVisAreas]    = useState([]);
  const [visTracks,   setVisTracks]   = useState([]);
  const [visStats,    setVisStats]    = useState(false);
  const [visPartners, setVisPartners] = useState(false);
  const sectionRef  = useRef(null);
  const statsRef    = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === statsRef.current)    { setVisStats(true);    obs.unobserve(e.target); return; }
        if (e.target === partnersRef.current) { setVisPartners(true); obs.unobserve(e.target); return; }
        const idx  = Number(e.target.dataset.idx);
        const type = e.target.dataset.type;
        if (type === "area")  setVisAreas(v  => { const n = [...v]; n[idx] = true; return n; });
        if (type === "track") setVisTracks(v => { const n = [...v]; n[idx] = true; return n; });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1 });
    if (statsRef.current)    obs.observe(statsRef.current);
    if (partnersRef.current) obs.observe(partnersRef.current);
    sectionRef.current?.querySelectorAll("[data-type]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>

      {/* ── Hero ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "520px" }} className="rd-hero-grid">
        {/* Left dark panel */}
        <div className="dark-bg" style={{
          background: "linear-gradient(180deg, #060d1a 0%, #0a1628 100%)",
          padding: "clamp(60px,8vw,100px) clamp(32px,5vw,80px)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 10% 50%, rgba(37,99,235,.15), transparent 50%), radial-gradient(circle at 90% 20%, rgba(37,99,235,.1), transparent 45%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
              Research & Development
            </span>
            <h1 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(36px,4.5vw,58px)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
              Research that ships to<br /><span style={{ color: "#2563eb" }}>real classrooms</span>
            </h1>
            <p style={{ fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(241,245,249,.55)", lineHeight: 1.8, margin: "0 0 12px", maxWidth: "420px" }}>
              We collaborate with academic institutions, industry leaders, and government bodies
              to accelerate AI-first education, de-risk pilots, and scale what works.
            </p>
            <p style={{ fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(241,245,249,.55)", lineHeight: 1.8, margin: "0 0 28px", maxWidth: "420px" }}>
              We deliver full-stack development, product design, and implementation support—moving
              from research to launch with clarity and momentum.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button onClick={() => navigate("/contact")} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: "10px", padding: "13px 28px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 8px 24px rgba(37,99,235,.35)", transition: "background .2s, transform .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = ""; }}>
                Start a Collaboration
              </button>
              <button onClick={() => navigate("/products")} style={{ background: "rgba(255,255,255,.07)", color: "#f1f5f9", border: "1px solid rgba(255,255,255,.18)", borderRadius: "10px", padding: "13px 28px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "background .2s, transform .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.13)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.07)"; e.currentTarget.style.transform = ""; }}>
                View Product Labs
              </button>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div style={{ position: "relative", overflow: "hidden", minHeight: "400px" }}>
          <img src="/images/chrono.jpg" alt="Research and development"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85)" }} />
          <div style={{
            position: "absolute", bottom: "24px", left: "24px",
            background: "rgba(6,13,26,0.88)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px", padding: "14px 20px",
            display: "flex", flexDirection: "column", gap: "2px",
          }}>
            <span style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "26px", fontWeight: 800, color: "#60a5fa", lineHeight: 1 }}>12+</span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.04em" }}>Active Projects</span>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div ref={statsRef} className="rd2-stats dark-bg" style={{ background: "#0f172a", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: "clamp(28px,4vw,48px) clamp(20px,3vw,40px)", borderRight: i < 3 ? "1px solid rgba(255,255,255,.07)" : "none", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center", textAlign: "center", opacity: visStats ? 1 : 0, transform: visStats ? "translateY(0)" : "translateY(24px)", transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s` }}>
            <span style={{ fontFamily: "'Space Grotesk', 'Poppins', 'sans-serif", fontSize: "clamp(36px,4vw,52px)", fontWeight: 800, color: "#2563eb", lineHeight: 1 }}>{s.value}</span>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", fontWeight: 500 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Research Areas ── */}
      <div style={{ background: "#f0f6ff", padding: "clamp(64px,9vw,110px) clamp(16px,4vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(40px,5vw,64px)", maxWidth: "640px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
              Research Areas
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
              What We're <span style={{ color: "#2563eb" }}>Building</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
              Six active research tracks where student teams work alongside mentors to solve real problems in education and technology.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="rd2-areas">
            {researchAreas.map((area, i) => (
              <ResearchCard key={i} area={area} i={i} visible={visAreas[i]} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Collaboration Tracks ── */}
      <div className="dark-bg" style={{ background: "linear-gradient(180deg, #060d1a 0%, #0a1628 100%)", padding: "clamp(64px,9vw,110px) clamp(16px,4vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(40px,5vw,64px)", maxWidth: "640px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
              Collaboration Tracks
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
              How We <span style={{ color: "#2563eb" }}>Work Together</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, margin: 0 }}>
              Structured programs designed for measurable outcomes and shared ownership across every partnership model.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }} className="rd2-collab">
            {collaborationTracks.map((track, i) => (
              <CollabCard key={i} track={track} i={i} visible={visTracks[i]} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Partners ── */}
      <div ref={partnersRef} style={{ background: "#f0f6ff", padding: "clamp(64px,9vw,110px) clamp(16px,4vw,80px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(40px,5vw,56px)", maxWidth: "640px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
              Partners & Accreditors
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
              Trusted <span style={{ color: "#2563eb" }}>Collaborators</span>
            </h2>
            <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#64748b", lineHeight: 1.8, margin: 0 }}>
              Organizations that amplify our research impact and open doors for our student researchers.
            </p>
          </div>
          {/* Partners Carousel - Row 1 (Left to Right) */}
          <div style={{ marginBottom: "clamp(48px,6vw,80px)", overflow: "hidden" }}>
            <div className="rd-partners-scroll rd-scroll-ltr" style={{ display: "flex", gap: "14px", animation: "scroll-ltr 30s linear infinite", opacity: visPartners ? 1 : 0.3, transition: "opacity .6s ease" }}>
              {[...partners, ...partners].map((partner, i) => (
                <div key={`ltr-${i}`} style={{ background: "#fff", borderRadius: "12px", border: "1px solid rgba(37,99,235,.18)", padding: "20px 12px", minHeight: "76px", minWidth: "120px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(11,18,32,.06)", cursor: "pointer", transition: "transform .5s cubic-bezier(0.22,1,0.36,1), box-shadow .5s, border-color .3s", flexShrink: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(37,99,235,.15)"; e.currentTarget.style.borderColor = "#2563eb"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(11,18,32,.06)"; e.currentTarget.style.borderColor = "rgba(37,99,235,.18)"; }}>
                  <img src={partner.logo} alt={partner.name} style={{ maxWidth: "100%", maxHeight: "40px", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Partners Carousel - Row 2 (Right to Left) */}
          <div style={{ marginBottom: "clamp(48px,6vw,80px)", overflow: "hidden" }}>
            <div className="rd-partners-scroll rd-scroll-rtl" style={{ display: "flex", gap: "14px", animation: "scroll-rtl 30s linear infinite", opacity: visPartners ? 1 : 0.3, transition: "opacity .6s ease" }}>
              {[...partners, ...partners].map((partner, i) => (
                <div key={`rtl-${i}`} style={{ background: "#fff", borderRadius: "12px", border: "1px solid rgba(37,99,235,.18)", padding: "20px 12px", minHeight: "76px", minWidth: "120px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(11,18,32,.06)", cursor: "pointer", transition: "transform .5s cubic-bezier(0.22,1,0.36,1), box-shadow .5s, border-color .3s", flexShrink: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(37,99,235,.15)"; e.currentTarget.style.borderColor = "#2563eb"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(11,18,32,.06)"; e.currentTarget.style.borderColor = "rgba(37,99,235,.18)"; }}>
                  <img src={partner.logo} alt={partner.name} style={{ maxWidth: "100%", maxHeight: "40px", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="dark-bg" style={{ background: "linear-gradient(135deg, #060d1a 0%, #0f172a 100%)", borderRadius: "20px", padding: "clamp(32px,4vw,52px) clamp(28px,4vw,56px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", border: "1px solid rgba(37,99,235,.2)", boxShadow: "0 24px 48px rgba(6,13,26,.2)" }}>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 800, color: "#f1f5f9", margin: "0 0 8px", letterSpacing: "-0.02em" }}>Ready to collaborate?</h3>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.6 }}>Join our growing network of research partners and help shape the future of education.</p>
            </div>
            <button onClick={() => navigate("/contact")} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: "10px", padding: "13px 28px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 8px 24px rgba(37,99,235,.35)", transition: "background .2s, transform .2s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = ""; }}>
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .rd-hero-grid { min-height: 520px; }
        @keyframes scroll-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .rd-partners-scroll { will-change: transform; }
        .rd-partners-scroll:hover { animation-play-state: paused; }
        @media (max-width: 768px) {
          .rd-hero-grid { grid-template-columns: 1fr; min-height: auto; }
          .rd-hero-grid > :first-child { order: 2; padding: clamp(40px,6vw,80px) clamp(24px,4vw,60px); }
          .rd-hero-grid > :last-child { order: 1; min-height: 300px; }
        }
        @media (max-width: 1100px) { .rd2-areas { grid-template-columns: repeat(2, 1fr) !important; } .rd2-collab { grid-template-columns: repeat(3, 1fr) !important; } .rd2-stats { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 720px)  { .rd2-areas { grid-template-columns: 1fr !important; } .rd2-collab { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .rd2-collab { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ResearchCard({ area, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-idx={i} data-type="area"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: "16px", border: `1px solid ${hovered ? "#bfdbfe" : "#e2e8f0"}`,
        padding: "28px", display: "flex", flexDirection: "column", gap: "14px",
        position: "relative", overflow: "hidden",
        boxShadow: hovered ? "0 20px 48px rgba(11,18,32,.12)" : "0 4px 16px rgba(11,18,32,.06)",
        transform: hovered ? "translateY(-8px)" : visible ? "translateY(0)" : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${(i % 3) * 0.1}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${(i % 3) * 0.1}s, box-shadow .3s, border-color .3s`,
      }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "11px", fontWeight: 800, color: "#2563eb", letterSpacing: "2px" }}>{area.num}</span>
        <div style={{ flex: 1, height: "1px", background: hovered ? "#bfdbfe" : "#e2e8f0", transition: "background .3s" }} />
      </div>
      <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(16px,1.8vw,20px)", fontWeight: 700, color: hovered ? "#2563eb" : "#0f172a", margin: 0, lineHeight: 1.3, transition: "color .3s" }}>{area.title}</h3>
      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.8, margin: 0, flex: 1 }}>{area.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {area.tags.map((t, j) => <span key={j} style={{ fontSize: "11px", fontWeight: 600, color: "#2563eb", background: "#eff6ff", border: "1px solid #bfdbfe", padding: "4px 12px", borderRadius: "999px" }}>{t}</span>)}
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "#2563eb", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .5s cubic-bezier(0.22,1,0.36,1)" }} />
    </div>
  );
}

function CollabCard({ track, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      data-idx={i} data-type="track"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(37,99,235,.1)" : "rgba(255,255,255,.04)",
        border: `1px solid ${hovered ? "rgba(37,99,235,.35)" : "rgba(255,255,255,.07)"}`,
        borderRadius: "16px", padding: "24px 20px",
        display: "flex", flexDirection: "column", gap: "12px",
        position: "relative", overflow: "hidden", cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : visible ? "translateY(0)" : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, background .3s, border-color .3s`,
      }}>
      <span style={{ fontSize: "26px", lineHeight: 1 }}>{track.icon}</span>
      <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "15px", fontWeight: 700, color: hovered ? "#2563eb" : "#f1f5f9", margin: 0, transition: "color .3s" }}>{track.title}</h3>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0, flex: 1 }}>{track.desc}</p>
      <span style={{ fontSize: "13px", fontWeight: 700, color: "#2563eb", opacity: hovered ? 1 : 0, transform: hovered ? "translateX(0)" : "translateX(-8px)", transition: "opacity .3s, transform .3s", display: "inline-block" }}>Explore →</span>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "#2563eb", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .5s cubic-bezier(0.22,1,0.36,1)" }} />
    </div>
  );
}
