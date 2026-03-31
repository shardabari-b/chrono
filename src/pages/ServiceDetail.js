import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const serviceData = {
  stem: {
    title: "STEM Courses",
    eyebrow: "Science · Technology · Engineering · Math",
    hero: "Building Tomorrow's Problem Solvers",
    desc: "Our STEM programs are designed to ignite curiosity and build real-world skills. From physics experiments to engineering challenges, students learn by doing — not just reading.",
    highlights: [
      { icon: "🔭", label: "Physics & Astronomy", text: "Hands-on experiments, telescope sessions, and real-world physics applications." },
      { icon: "📐", label: "Mathematics", text: "From algebra to calculus — problem-solving techniques used in industry." },
      { icon: "⚗️", label: "Chemistry", text: "Lab-based learning with safety protocols and real chemical reactions." },
      { icon: "⚙️", label: "Engineering", text: "Design, prototype, and test — the full engineering cycle in every project." },
    ],
    tags: ["Physics", "Mathematics", "Chemistry", "Engineering"],
    color: "#2563eb",
  },
  trending: {
    title: "Trending Tech",
    eyebrow: "AI · Blockchain · AR/VR · Cloud",
    hero: "Stay Ahead of the Curve",
    desc: "Technology moves fast. Our Trending Tech programs keep students at the cutting edge — learning the tools and frameworks that are shaping the next decade of innovation.",
    highlights: [
      { icon: "🤖", label: "Artificial Intelligence", text: "Machine learning, neural networks, and real AI project builds." },
      { icon: "🔗", label: "Blockchain", text: "Decentralized systems, smart contracts, and Web3 fundamentals." },
      { icon: "🥽", label: "AR / VR", text: "Immersive experience design using Unity, Unreal, and Meta SDKs." },
      { icon: "☁️", label: "Cloud Computing", text: "AWS, Azure, and GCP — deploy real apps on real infrastructure." },
    ],
    tags: ["Artificial Intelligence", "Blockchain", "AR/VR", "Cloud"],
    color: "#2563eb",
  },
  finishing: {
    title: "Finishing School",
    eyebrow: "Communication · Leadership · Career Readiness",
    hero: "Bridge the Gap Between Campus and Career",
    desc: "Technical skills get you in the door — soft skills keep you in the room. Our Finishing School program prepares students for the professional world with confidence, clarity, and presence.",
    highlights: [
      { icon: "🗣️", label: "Communication", text: "Public speaking, business writing, and presentation mastery." },
      { icon: "👑", label: "Leadership", text: "Team dynamics, conflict resolution, and decision-making frameworks." },
      { icon: "💼", label: "Interview Prep", text: "Mock interviews, resume reviews, and LinkedIn profile optimization." },
      { icon: "🤝", label: "Soft Skills", text: "Emotional intelligence, time management, and professional etiquette." },
    ],
    tags: ["Communication", "Leadership", "Interview Prep", "Soft Skills"],
    color: "#2563eb",
  },
  workshops: {
    title: "Workshops",
    eyebrow: "Hackathons · Design Sprints · Bootcamps",
    hero: "Intensive Learning. Real Results.",
    desc: "Short, sharp, and impactful — our workshops are built for students who want to go deep fast. From 24-hour hackathons to weekend design sprints, every session ends with something built.",
    highlights: [
      { icon: "💻", label: "Hackathons", text: "24–48 hour challenges with real problem statements from industry partners." },
      { icon: "🎨", label: "Design Sprints", text: "Google Ventures-style sprints — ideate, prototype, and test in 5 days." },
      { icon: "🤖", label: "Robotics Builds", text: "Hardware + software integration with Arduino, Raspberry Pi, and sensors." },
      { icon: "📊", label: "Data Bootcamps", text: "Python, pandas, and visualization — from raw data to insight in days." },
    ],
    tags: ["Hackathons", "Design Sprints", "Robotics", "Bootcamps"],
    color: "#2563eb",
  },
  mva: {
    title: "MVA",
    eyebrow: "Most Valuable Achievers",
    hero: "Elite Recognition for Exceptional Talent",
    desc: "MVA is Chronosphere's flagship accelerator for top-performing students. Selected achievers receive mentorship from industry leaders, exclusive exposure, and opportunities that go far beyond the classroom.",
    highlights: [
      { icon: "🧠", label: "Elite Mentorship", text: "1-on-1 sessions with founders, CTOs, and senior industry professionals." },
      { icon: "🏢", label: "Industry Exposure", text: "Site visits, internship pipelines, and live project collaborations." },
      { icon: "🎓", label: "Scholarships", text: "Merit-based financial support for continued education and certifications." },
      { icon: "🌐", label: "Networking", text: "Access to Chronosphere's global alumni and partner network." },
    ],
    tags: ["Elite Mentorship", "Industry Exposure", "Scholarships", "Networking"],
    color: "#2563eb",
  },
};

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const s = serviceData[id];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!s) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center", fontFamily: "DM Sans, sans-serif" }}>
        <h2>Service not found</h2>
        <button onClick={() => navigate("/")} style={{ marginTop: 16, padding: "10px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="sd-page">

      {/* ── Hero ── */}
      <div className="sd-hero" style={{ "--c": s.color }}>
        <div className="sd-hero-bg" />
        <div className="sd-hero-inner">
          <button className="sd-back" onClick={() => navigate(-1)}>← Back</button>
          <span className="sd-eyebrow">{s.eyebrow}</span>
          <h1 className="sd-hero-title">{s.hero}</h1>
          <p className="sd-hero-desc">{s.desc}</p>
          <div className="sd-hero-tags">
            {s.tags.map((t, i) => <span key={i} className="sd-htag">{t}</span>)}
          </div>
        </div>
      </div>

      {/* ── Highlights grid ── */}
      <div className="sd-body">
        <div className="sd-section-label">What You'll Learn</div>
        <div className="sd-grid">
          {s.highlights.map((h, i) => (
            <div key={i} className="sd-card" style={{ "--d": `${i * 0.1}s`, "--c": s.color }}>
              <div className="sd-card-icon">{h.icon}</div>
              <h3 className="sd-card-title">{h.label}</h3>
              <p className="sd-card-text">{h.text}</p>
              <div className="sd-card-bar" />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="sd-cta">
          <h2 className="sd-cta-title">Ready to get started with <span style={{ color: s.color }}>{s.title}</span>?</h2>
          <p className="sd-cta-sub">Join hundreds of students already building their future with Chronosphere.</p>
          <div className="sd-cta-actions">
            <button className="sd-btn-primary" onClick={() => navigate("/#contact")}>Enroll Now</button>
            <button className="sd-btn-outline" onClick={() => navigate(-1)}>← Back to Services</button>
          </div>
        </div>
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap");

        .sd-page {
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          background: #ffffff;
          min-height: 100vh;
        }

        /* Hero */
        .sd-hero {
          position: relative;
          background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          padding: clamp(100px,12vw,160px) clamp(24px,6vw,100px) clamp(64px,8vw,100px);
          overflow: hidden;
        }
        .sd-hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.25), transparent 65%);
          pointer-events: none;
        }
        .sd-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .sd-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #94a3b8;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 999px;
          cursor: pointer;
          margin-bottom: 28px;
          transition: background .2s, color .2s;
          font-family: inherit;
        }
        .sd-back:hover { background: rgba(255,255,255,0.14); color: #fff; }
        .sd-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 16px;
        }
        .sd-hero-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(36px,6vw,72px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.06;
          letter-spacing: -0.03em;
          margin: 0 0 20px;
        }
        .sd-hero-desc {
          font-size: clamp(15px,1.8vw,18px);
          color: #94a3b8;
          line-height: 1.8;
          margin: 0 0 28px;
          max-width: 640px;
        }
        .sd-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .sd-htag {
          font-size: 12px;
          font-weight: 600;
          color: #2563eb;
          background: rgba(37,99,235,0.12);
          border: 1px solid rgba(37,99,235,0.25);
          padding: 5px 14px;
          border-radius: 999px;
        }

        /* Body */
        .sd-body {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(56px,8vw,100px) clamp(24px,6vw,80px);
        }
        .sd-section-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 32px;
        }

        /* Grid */
        .sd-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 72px;
        }
        .sd-card {
          position: relative;
          background: #f8faff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 36px 32px;
          overflow: hidden;
          animation: sdCardIn .6s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: var(--d, 0s);
          transition: transform .3s, box-shadow .3s, border-color .3s;
        }
        .sd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(37,99,235,.12);
          border-color: #bfdbfe;
        }
        @keyframes sdCardIn {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .sd-card-icon {
          font-size: 40px;
          width: 72px; height: 72px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: transform .3s;
        }
        .sd-card:hover .sd-card-icon { transform: scale(1.1) rotate(-4deg); }
        .sd-card-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 10px;
        }
        .sd-card-text {
          font-size: 14px;
          color: #64748b;
          line-height: 1.75;
          margin: 0;
        }
        .sd-card-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: #2563eb;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s ease;
        }
        .sd-card:hover .sd-card-bar { transform: scaleX(1); }

        /* CTA */
        .sd-cta {
          background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          border-radius: 24px;
          padding: clamp(40px,6vw,72px);
          text-align: center;
        }
        .sd-cta-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(24px,3.5vw,40px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 14px;
          letter-spacing: -0.02em;
        }
        .sd-cta-sub {
          font-size: 16px;
          color: #94a3b8;
          margin: 0 0 32px;
          line-height: 1.7;
        }
        .sd-cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .sd-btn-primary {
          padding: 14px 32px;
          border-radius: 999px;
          color: #fff;
          background: #2563eb;
          border: none;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          transition: opacity .2s, transform .2s;
        }
        .sd-btn-primary:hover { opacity: .88; transform: translateY(-2px); }
        .sd-btn-outline {
          padding: 14px 32px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: background .2s;
        }
        .sd-btn-outline:hover { background: rgba(255,255,255,0.08); }

        @media(max-width:700px) {
          .sd-grid { grid-template-columns: 1fr; }
          .sd-hero { padding: 100px 24px 56px; }
        }
      `}</style>
    </div>
  );
}

export default ServiceDetail;
