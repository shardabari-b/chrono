import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const researchAreas = [
  {
    num: "01",
    title: "Artificial Intelligence in Education",
    desc: "Developing adaptive learning algorithms, emotion-sensing models, and AI-driven personalization engines that respond to each student's unique learning pattern.",
    tags: ["Machine Learning", "NLP", "Adaptive Systems"],
  },
  {
    num: "02",
    title: "Robotics & Embedded Systems",
    desc: "Building intelligent robotic platforms and IoT-integrated classroom tools that give students hands-on exposure to hardware, automation, and real-time control systems.",
    tags: ["IoT", "Embedded C", "Automation"],
  },
  {
    num: "03",
    title: "EdTech Product Research",
    desc: "Researching next-generation LMS architectures, student lifecycle analytics, and gamified learning frameworks that improve engagement and measurable outcomes.",
    tags: ["LMS", "Analytics", "UX Research"],
  },
  {
    num: "04",
    title: "Data Science & Predictive Analytics",
    desc: "Turning raw educational data into actionable insights — identifying at-risk learners, predicting dropout patterns, and optimizing curriculum delivery at scale.",
    tags: ["Python", "ML Models", "Dashboards"],
  },
  {
    num: "05",
    title: "Human-Computer Interaction",
    desc: "Studying how students interact with digital tools to design more intuitive, accessible, and inclusive interfaces for diverse learning environments.",
    tags: ["UX Design", "Accessibility", "Prototyping"],
  },
  {
    num: "06",
    title: "Cybersecurity & Digital Safety",
    desc: "Researching secure-by-design principles for student data platforms, identity management, and safe digital environments for schools and institutions.",
    tags: ["Security", "Privacy", "Compliance"],
  },
];

const collaborationTracks = [
  {
    icon: "🎓",
    title: "Academic Partnerships",
    desc: "Co-research programs with universities and colleges — joint publications, shared labs, and student exchange initiatives.",
  },
  {
    icon: "🏭",
    title: "Industry Collaborations",
    desc: "Working with tech companies to bring real-world problem statements into our research pipeline and co-develop solutions.",
  },
  {
    icon: "🏛️",
    title: "Government & NGOs",
    desc: "Partnering with public bodies and non-profits to pilot AI-first education programs at scale across underserved regions.",
  },
  {
    icon: "🤝",
    title: "Fellowships",
    desc: "Structured fellowship programs for student researchers — mentorship, stipends, and pathways to publish and present.",
  },
  {
    icon: "🔗",
    title: "Joint Initiatives",
    desc: "Cross-institutional projects that combine expertise from multiple domains to tackle complex educational challenges.",
  },
];

const partners = ["Bentley", "Code.org", "NVIDIA", "Software AG", "Celonis", "Unity", "IABAC"];

const stats = [
  { value: "12+", label: "Active Research Projects" },
  { value: "7", label: "Industry Partners" },
  { value: "40+", label: "Student Researchers" },
  { value: "3", label: "Published Papers" },
];

function RD() {
  const navigate = useNavigate();
  const [visAreas, setVisAreas] = useState([]);
  const [visTracks, setVisTracks] = useState([]);
  const [visStats, setVisStats] = useState(false);
  const [visPartners, setVisPartners] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target === statsRef.current) { setVisStats(true); obs.unobserve(e.target); return; }
          if (e.target === partnersRef.current) { setVisPartners(true); obs.unobserve(e.target); return; }
          const idx = Number(e.target.dataset.idx);
          const type = e.target.dataset.type;
          if (type === "area") setVisAreas(v => { const n = [...v]; n[idx] = true; return n; });
          if (type === "track") setVisTracks(v => { const n = [...v]; n[idx] = true; return n; });
          obs.unobserve(e.target);
        });
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    if (partnersRef.current) obs.observe(partnersRef.current);
    sectionRef.current?.querySelectorAll("[data-type]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="rd-section" ref={sectionRef}>

      {/* ── Hero ── */}
      <div className="rd-hero">
        <div className="rd-hero-inner">
          <span className="rd-eyebrow">Research &amp; Development</span>
          <h1 className="rd-hero-title">
            Research that ships to<br />
            <span className="rd-hero-accent">real classrooms</span>
          </h1>
          <p className="rd-hero-sub">
            We collaborate with academic institutions, industry leaders, and government bodies
            to accelerate AI-first education, de-risk pilots, and scale what works.
          </p>
          <div className="rd-hero-actions">
            <button className="rd-btn-primary" onClick={() => navigate("/contact")}>Start a Collaboration</button>
            <button className="rd-btn-outline" onClick={() => navigate("/products")}>View Product Labs</button>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="rd-stats-bar" ref={statsRef}>
        {stats.map((s, i) => (
          <div
            key={i}
            className="rd-stat"
            style={{
              opacity: visStats ? 1 : 0,
              transform: visStats ? "translateY(0)" : "translateY(24px)",
              transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s`,
            }}
          >
            <span className="rd-stat-val">{s.value}</span>
            <span className="rd-stat-lbl">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Research Areas ── */}
      <div className="rd-areas-section">
        <div className="rd-section-head">
          <span className="rd-eyebrow-dark">Research Areas</span>
          <h2 className="rd-section-title">What We're <span className="rd-blue">Building</span></h2>
          <p className="rd-section-sub">Six active research tracks where student teams work alongside mentors to solve real problems in education and technology.</p>
        </div>
        <div className="rd-areas-grid">
          {researchAreas.map((area, i) => (
            <div
              key={i}
              className="rd-area-card"
              data-idx={i}
              data-type="area"
              style={{
                opacity: visAreas[i] ? 1 : 0,
                transform: visAreas[i] ? "translateY(0)" : "translateY(40px)",
                transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${(i % 3) * 0.1}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${(i % 3) * 0.1}s`,
              }}
            >
              <div className="rd-area-top">
                <span className="rd-area-num">{area.num}</span>
                <div className="rd-area-accent-line" />
              </div>
              <h3 className="rd-area-title">{area.title}</h3>
              <p className="rd-area-desc">{area.desc}</p>
              <div className="rd-area-tags">
                {area.tags.map((t, j) => (
                  <span key={j} className="rd-area-tag">{t}</span>
                ))}
              </div>
              <div className="rd-area-hover-bar" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Collaboration Tracks ── */}
      <div className="rd-collab-section">
        <div className="rd-collab-inner">
          <div className="rd-collab-head">
            <span className="rd-eyebrow">Collaboration Tracks</span>
            <h2 className="rd-collab-title">How We <span className="rd-hero-accent">Work Together</span></h2>
            <p className="rd-collab-sub">Structured programs designed for measurable outcomes and shared ownership across every partnership model.</p>
          </div>
          <div className="rd-collab-grid">
            {collaborationTracks.map((track, i) => (
              <div
                key={i}
                className="rd-collab-card"
                data-idx={i}
                data-type="track"
                style={{
                  opacity: visTracks[i] ? 1 : 0,
                  transform: visTracks[i] ? "translateY(0)" : "translateY(40px)",
                  transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
                }}
              >
                <div className="rd-collab-icon">{track.icon}</div>
                <h3 className="rd-collab-card-title">{track.title}</h3>
                <p className="rd-collab-card-desc">{track.desc}</p>
                <span className="rd-collab-cta">Explore →</span>
                <div className="rd-collab-hover-bar" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partners ── */}
      <div className="rd-partners-section" ref={partnersRef}>
        <div className="rd-partners-head">
          <span className="rd-eyebrow-dark">Partners &amp; Accreditors</span>
          <h2 className="rd-section-title">Trusted <span className="rd-blue">Collaborators</span></h2>
          <p className="rd-section-sub">Organizations that amplify our research impact and open doors for our student researchers.</p>
        </div>
        <div className="rd-partners-grid">
          {partners.map((name, i) => (
            <div
              key={name}
              className="rd-partner-tile"
              style={{
                opacity: visPartners ? 1 : 0,
                transform: visPartners ? "translateY(0)" : "translateY(24px)",
                transition: `opacity .6s ease ${i * 0.08}s, transform .6s ease ${i * 0.08}s`,
              }}
            >
              <span>{name}</span>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rd-cta-banner">
          <div className="rd-cta-text">
            <h3>Ready to collaborate?</h3>
            <p>Join our growing network of research partners and help shape the future of education.</p>
          </div>
          <button className="rd-btn-primary" onClick={() => navigate("/contact")}>Get In Touch →</button>
        </div>
      </div>

      <style>{`
        .rd-section {
          width: 100%;
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          overflow: hidden;
        }

        /* ── Hero ── */
        .rd-hero {
          background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          width: 100%;
          padding: clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px) clamp(64px, 9vw, 100px);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        .rd-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 50%, rgba(37,99,235,0.18), transparent 50%),
            radial-gradient(circle at 90% 20%, rgba(37,99,235,0.12), transparent 45%);
          pointer-events: none;
        }
        .rd-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }
        .rd-eyebrow {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          padding: 6px 16px; border-radius: 999px;
          margin-bottom: 24px;
        }
        .rd-hero-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(36px, 6vw, 68px);
          font-weight: 800; color: #f1f5f9;
          line-height: 1.08; letter-spacing: -0.03em;
          margin: 0 0 20px;
        }
        .rd-hero-accent { color: #2563eb; }
        .rd-hero-sub {
          font-size: clamp(15px, 1.8vw, 18px);
          color: rgba(241,245,249,0.7);
          line-height: 1.8; margin: 0 0 36px;
          max-width: 620px;
        }
        .rd-hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .rd-btn-primary {
          background: #2563eb; color: #fff;
          border: none; border-radius: 10px;
          padding: 13px 28px; font-size: 14px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          transition: background .2s, transform .2s, box-shadow .2s;
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .rd-btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 14px 32px rgba(37,99,235,0.4); }
        .rd-btn-outline {
          background: rgba(255,255,255,0.08); color: #f1f5f9;
          border: 1px solid rgba(255,255,255,0.2); border-radius: 10px;
          padding: 13px 28px; font-size: 14px; font-weight: 600;
          cursor: pointer; font-family: inherit;
          transition: background .2s, border-color .2s, transform .2s;
        }
        .rd-btn-outline:hover { background: rgba(255,255,255,0.14); border-color: rgba(255,255,255,0.4); transform: translateY(-2px); }

        /* ── Stats Bar ── */
        .rd-stats-bar {
          background: #0f172a;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          box-sizing: border-box;
        }
        .rd-stat {
          padding: clamp(28px, 4vw, 48px) clamp(20px, 3vw, 40px);
          border-right: 1px solid rgba(255,255,255,0.07);
          display: flex; flex-direction: column; gap: 6px;
          align-items: center; text-align: center;
        }
        .rd-stat:last-child { border-right: none; }
        .rd-stat-val {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(36px, 4vw, 52px);
          font-weight: 800; color: #2563eb; line-height: 1;
        }
        .rd-stat-lbl {
          font-size: 13px; color: #64748b; font-weight: 500;
        }

        /* ── Research Areas ── */
        .rd-areas-section {
          background: #f2f6ff;
          width: 100%;
          padding: clamp(64px, 9vw, 110px) clamp(24px, 5vw, 80px);
          box-sizing: border-box;
        }
        .rd-section-head {
          margin-bottom: clamp(40px, 5vw, 64px);
          max-width: 640px;
        }
        .rd-eyebrow-dark {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 14px;
        }
        .rd-section-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .rd-blue { color: #2563eb; }
        .rd-section-sub {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #64748b; line-height: 1.8; margin: 0;
        }
        .rd-areas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }
        .rd-area-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid #e2e8f0;
          padding: 32px 28px;
          display: flex; flex-direction: column; gap: 14px;
          position: relative; overflow: hidden;
          box-shadow: 0 8px 24px rgba(15,23,42,0.06);
          transition: transform .5s cubic-bezier(0.22,1,0.36,1), box-shadow .5s cubic-bezier(0.22,1,0.36,1), border-color .3s;
        }
        .rd-area-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(15,23,42,0.12);
          border-color: #bfdbfe;
        }
        .rd-area-top { display: flex; align-items: center; gap: 14px; }
        .rd-area-num {
          font-family: "Space Grotesk", sans-serif;
          font-size: 12px; font-weight: 800;
          letter-spacing: 2px; color: #2563eb;
        }
        .rd-area-accent-line {
          flex: 1; height: 1px;
          background: #e2e8f0;
          transition: background .3s;
        }
        .rd-area-card:hover .rd-area-accent-line { background: #bfdbfe; }
        .rd-area-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(17px, 1.8vw, 21px);
          font-weight: 700; color: #0f172a;
          margin: 0; line-height: 1.3;
          transition: color .3s;
        }
        .rd-area-card:hover .rd-area-title { color: #2563eb; }
        .rd-area-desc {
          font-size: 14px; color: #64748b;
          line-height: 1.8; margin: 0; flex: 1;
        }
        .rd-area-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .rd-area-tag {
          font-size: 11px; font-weight: 600;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 12px; border-radius: 999px;
        }
        .rd-area-hover-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: #2563eb;
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(0.22,1,0.36,1);
        }
        .rd-area-card:hover .rd-area-hover-bar { transform: scaleX(1); }

        /* ── Collaboration Tracks ── */
        .rd-collab-section {
          background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          width: 100%;
          box-sizing: border-box;
        }
        .rd-collab-inner {
          padding: clamp(64px, 9vw, 110px) clamp(24px, 5vw, 80px);
        }
        .rd-collab-head {
          margin-bottom: clamp(40px, 5vw, 64px);
          max-width: 640px;
        }
        .rd-collab-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #f1f5f9;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .rd-collab-sub {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #64748b; line-height: 1.8; margin: 0;
        }
        .rd-collab-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          width: 100%;
        }
        .rd-collab-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 28px 22px;
          display: flex; flex-direction: column; gap: 12px;
          position: relative; overflow: hidden;
          transition: background .4s, border-color .4s, transform .5s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .rd-collab-card:hover {
          background: rgba(37,99,235,0.12);
          border-color: rgba(37,99,235,0.4);
          transform: translateY(-6px);
        }
        .rd-collab-icon { font-size: 28px; line-height: 1; }
        .rd-collab-card-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px; font-weight: 700;
          color: #f1f5f9; margin: 0;
          transition: color .3s;
        }
        .rd-collab-card:hover .rd-collab-card-title { color: #2563eb; }
        .rd-collab-card-desc {
          font-size: 13px; color: #64748b;
          line-height: 1.7; margin: 0; flex: 1;
        }
        .rd-collab-cta {
          font-size: 13px; font-weight: 700;
          color: #2563eb;
          opacity: 0; transform: translateX(-8px);
          transition: opacity .3s, transform .3s;
          display: inline-block;
        }
        .rd-collab-card:hover .rd-collab-cta { opacity: 1; transform: translateX(0); }
        .rd-collab-hover-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: #2563eb;
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(0.22,1,0.36,1);
        }
        .rd-collab-card:hover .rd-collab-hover-bar { transform: scaleX(1); }

        /* ── Partners ── */
        .rd-partners-section {
          background: #f2f6ff;
          width: 100%;
          padding: clamp(64px, 9vw, 110px) clamp(24px, 5vw, 80px);
          box-sizing: border-box;
        }
        .rd-partners-head {
          margin-bottom: clamp(40px, 5vw, 56px);
          max-width: 640px;
        }
        .rd-partners-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 16px;
          width: 100%;
          margin-bottom: clamp(48px, 6vw, 80px);
        }
        .rd-partner-tile {
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid rgba(37,99,235,0.2);
          padding: 20px 12px;
          min-height: 80px;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; color: #2563eb;
          box-shadow: 0 8px 24px rgba(15,23,42,0.06);
          transition: transform .5s cubic-bezier(0.22,1,0.36,1), box-shadow .5s, border-color .3s;
          position: relative; overflow: hidden;
          cursor: pointer;
        }
        .rd-partner-tile span {
          font-size: 12px; text-transform: uppercase;
          letter-spacing: 1.5px; position: relative; z-index: 1;
        }
        .rd-partner-tile:hover {
          transform: translateY(-5px);
          border-color: #2563eb;
          box-shadow: 0 20px 40px rgba(37,99,235,0.15);
        }
        .rd-partner-tile::before {
          content: "";
          position: absolute; inset: 0;
          background: rgba(37,99,235,0.05);
          opacity: 0; transition: opacity .3s;
        }
        .rd-partner-tile:hover::before { opacity: 1; }

        /* ── CTA Banner ── */
        .rd-cta-banner {
          background: linear-gradient(135deg, #062a4a 0%, #0f172a 100%);
          border-radius: 20px;
          padding: clamp(32px, 4vw, 52px) clamp(28px, 4vw, 56px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          border: 1px solid rgba(37,99,235,0.2);
          box-shadow: 0 24px 48px rgba(6,42,74,0.2);
        }
        .rd-cta-text h3 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 800; color: #f1f5f9;
          margin: 0 0 8px; letter-spacing: -0.02em;
        }
        .rd-cta-text p {
          font-size: 15px; color: #64748b;
          margin: 0; line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .rd-areas-grid { grid-template-columns: repeat(2, 1fr); }
          .rd-collab-grid { grid-template-columns: repeat(3, 1fr); }
          .rd-partners-grid { grid-template-columns: repeat(4, 1fr); }
          .rd-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .rd-stat { border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
        @media (max-width: 720px) {
          .rd-areas-grid { grid-template-columns: 1fr; }
          .rd-collab-grid { grid-template-columns: repeat(2, 1fr); }
          .rd-partners-grid { grid-template-columns: repeat(2, 1fr); }
          .rd-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .rd-cta-banner { flex-direction: column; align-items: flex-start; }
          .rd-hero { padding: 80px 20px 48px; }
          .rd-areas-section, .rd-partners-section { padding: 48px 20px; }
          .rd-collab-inner { padding: 48px 20px; }
        }
        @media (max-width: 480px) {
          .rd-collab-grid { grid-template-columns: 1fr; }
          .rd-partners-grid { grid-template-columns: repeat(2, 1fr); }
          .rd-hero-actions { flex-direction: column; }
          .rd-btn-primary, .rd-btn-outline { width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
}

export default RD;
