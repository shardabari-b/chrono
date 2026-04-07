import React, { useState } from "react";

const PRODUCTS = [
  {
    id: "lms",
    title: "LMS, Courses & STEM",
    tag: "Platform",
    desc: "A modular learning platform where teachers build courses, track mastery, and deploy hands-on STEM experiences across every grade level — all from one unified dashboard.",
    image: "/images/chrono.jpg",
    features: [
      { label: "Course Builder", text: "Drag-and-drop lesson creation with rich media, quizzes, and branching paths." },
      { label: "Progress Tracking", text: "Real-time mastery dashboards for teachers, students, and administrators." },
      { label: "STEM Modules", text: "Ready-to-deploy science, technology, engineering, and math content packs." },
      { label: "Live Assessments", text: "Instant formative assessments with auto-grading and analytics." },
    ],
  },
  {
    id: "emotion",
    title: "Emotion Sensing AI",
    tag: "AI",
    desc: "AI-powered real-time engagement signals that personalise lessons and support social-emotional learning outcomes for every learner — detecting focus, confusion, and curiosity as it happens.",
    image: "/images/today.jpg",
    features: [
      { label: "Facial Analysis", text: "Non-intrusive computer vision that reads engagement cues during sessions." },
      { label: "Engagement Scoring", text: "Per-student attention scores updated every few seconds." },
      { label: "SEL Insights", text: "Social-emotional learning reports aligned to recognised frameworks." },
      { label: "Live Alerts", text: "Instant teacher notifications when a learner disengages or struggles." },
    ],
  },
  {
    id: "attendance",
    title: "Attendance System",
    tag: "Automation",
    desc: "Automate check-in with QR, biometric, and badge-based systems. Reduce manual work and surface at-risk learner alerts instantly with smart absence pattern detection.",
    image: "/images/chrono.jpg",
    features: [
      { label: "QR Check-in", text: "Students scan a rotating QR code — no hardware required." },
      { label: "Biometric Support", text: "Fingerprint and face-ID integration for secure, contactless entry." },
      { label: "At-risk Alerts", text: "Automated flags when absence patterns indicate a learner needs support." },
      { label: "Reports", text: "Daily, weekly, and term-level attendance exports for compliance." },
    ],
  },
  {
    id: "slm",
    title: "Student Lifecycle Management",
    tag: "Management",
    desc: "Track every learner's journey from enrolment to achievement with smart dashboards and predictive analytics built for educators who want to act before problems arise.",
    image: "/images/today.jpg",
    features: [
      { label: "Enrolment Tracking", text: "Centralised admissions pipeline from application to onboarding." },
      { label: "Predictive Analytics", text: "ML models that flag dropout risk weeks before it becomes critical." },
      { label: "Smart Dashboards", text: "Role-based views for students, parents, teachers, and leadership." },
      { label: "Alumni Records", text: "Lifelong learner profiles that follow graduates into the workforce." },
    ],
  },
  {
    id: "appdev",
    title: "Application Development",
    tag: "Development",
    desc: "End-to-end mobile and web application development — from user research and prototyping to cross-platform publishing and launch, with full post-deployment support.",
    image: "/images/chrono.jpg",
    features: [
      { label: "UI/UX Design", text: "Research-led design sprints that produce intuitive, accessible interfaces." },
      { label: "Cross-platform", text: "React Native and Flutter builds that run natively on iOS and Android." },
      { label: "API Integration", text: "Seamless connection to third-party services, databases, and cloud backends." },
      { label: "App Store Launch", text: "End-to-end submission, review management, and post-launch monitoring." },
    ],
  },
  {
    id: "gamedev",
    title: "Game Dev & Animation",
    tag: "Creative",
    desc: "Project-based courses delivering portfolio-ready games, animations, and motion experiences using industry-standard tools like Unity, Blender, and After Effects.",
    image: "/images/today.jpg",
    features: [
      { label: "Unity & Unreal", text: "Hands-on game development using the world's leading real-time engines." },
      { label: "3D Animation", text: "Character rigging, keyframing, and rendering with Blender." },
      { label: "Motion Graphics", text: "After Effects and Cinema 4D for broadcast-quality motion work." },
      { label: "Portfolio Projects", text: "Every student ships a finished, playable game or animation reel." },
    ],
  },
  {
    id: "robotics",
    title: "Robotics & IoT",
    tag: "Hardware",
    desc: "Hands-on robotics, edge-AI, and IoT projects with plug-and-play hardware kits, simulators, and real-time dashboards that bridge the physical and digital worlds.",
    image: "/images/chrono.jpg",
    features: [
      { label: "Hardware Kits", text: "Curated sensor, actuator, and microcontroller kits shipped to institutions." },
      { label: "Edge AI", text: "On-device machine learning with TensorFlow Lite and NVIDIA Jetson." },
      { label: "IoT Dashboards", text: "Live data visualisation from connected devices in the classroom." },
      { label: "Simulators", text: "Browser-based circuit and robot simulators for remote learners." },
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons",
    tag: "Events",
    desc: "Curated challenge libraries, judging rubrics, virtual expo halls, and media-ready project portfolios for student innovators competing at institutional and global levels.",
    image: "/images/today.jpg",
    features: [
      { label: "Challenge Library", text: "100+ pre-built problem statements across domains and difficulty levels." },
      { label: "Judging Platform", text: "Structured rubrics, mentor scoring, and transparent leaderboards." },
      { label: "Virtual Expo", text: "Immersive online showcase halls with live demo booths." },
      { label: "Media Kits", text: "Auto-generated press packs and social assets for winning teams." },
    ],
  },
  {
    id: "fdps",
    title: "FDPS on AI",
    tag: "Education",
    desc: "Faculty Development Programs on AI — upskilling educators with hands-on workshops, certification tracks, and live labs so they can confidently teach and apply AI in their classrooms.",
    image: "/images/chrono.jpg",
    features: [
      { label: "AI Workshops", text: "Practical, tool-first sessions covering LLMs, computer vision, and more." },
      { label: "Certification Tracks", text: "Nationally recognised credentials on completion of each module." },
      { label: "Live Labs", text: "Cloud-based sandboxes where faculty experiment without setup friction." },
      { label: "Peer Networks", text: "Cross-institution faculty communities for ongoing collaboration." },
    ],
  },
  {
    id: "expo",
    title: "Expo / World Records",
    tag: "Events",
    desc: "Host global showcases and record-breaking events that amplify student innovation and connect with industry leaders, media, and institutions worldwide.",
    image: "/images/today.jpg",
    features: [
      { label: "Global Showcases", text: "Multi-country simultaneous events with unified judging and scoring." },
      { label: "Record Attempts", text: "Officially adjudicated world record bids for student-led achievements." },
      { label: "Industry Connect", text: "Curated matchmaking between student teams and corporate sponsors." },
      { label: "Media Coverage", text: "Press coordination, live streaming, and post-event highlight reels." },
    ],
  },
  {
    id: "partnerships",
    title: "Industries & Partnerships",
    tag: "Network",
    desc: "Co-branded learning pathways, internship pipelines, research collaborations, and award programs with global partners that create real-world opportunities for learners.",
    image: "/images/chrono.jpg",
    features: [
      { label: "Internship Pipelines", text: "Structured placement programs with vetted industry partners." },
      { label: "Co-branded Paths", text: "Joint curriculum development with corporate and government bodies." },
      { label: "Research Collab", text: "Funded R&D projects connecting faculty with industry labs." },
      { label: "Award Programs", text: "Annual recognition programs celebrating institutional excellence." },
    ],
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const p = PRODUCTS[active];

  return (
    <section className="prd-root">

      {/* ── HEADING ── */}
      <div className="prd-heading">
        <div className="prd-heading-left">
          <span className="prd-kicker">What We Build</span>
          <h1 className="prd-h1">
            Our <span className="prd-h1-accent">Products</span>
          </h1>
          <p className="prd-heading-desc">
            Powering learners, educators &amp; innovators — from AI tools and hardware kits to live events and global partnerships.
          </p>
        </div>
        <div className="prd-heading-right" />
      </div>

      {/* ── PRODUCT PILLS ── */}
      <div className="prd-pills-wrap">
        <div className="prd-pills">
          {PRODUCTS.map((item, i) => (
            <button
              key={item.id}
              className={`prd-pill${active === i ? " prd-pill--on" : ""}`}
              onClick={() => setActive(i)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* ── DETAIL ── */}
      <div className="prd-detail" key={p.id}>

        {/* Left: image */}
        <div className="prd-img-wrap">
          <img src={p.image} alt={p.title} className="prd-img" />
          <div className="prd-img-shade" />
        </div>

        {/* Right: content */}
        <div className="prd-content">
          <span className="prd-tag">{p.tag}</span>
          <h2 className="prd-title">{p.title}</h2>
          <p className="prd-desc">{p.desc}</p>
          <div className="prd-divider" />
          <div className="prd-features">
            {p.features.map((f) => (
              <div key={f.label} className="prd-feature">
                <svg className="prd-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#eff6ff"/>
                  <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="prd-feature-label">{f.label}</p>
                  <p className="prd-feature-text">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap");
        * { box-sizing: border-box; }

        .prd-root {
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          background: #ffffff;
          color: #0f172a;
          width: 100%;
        }

        /* ── HEADING ── */
        .prd-heading {
          padding: 64px clamp(24px, 6vw, 80px) 64px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px clamp(40px, 6vw, 96px);
          align-items: center;
          background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          position: relative;
          overflow: hidden;
        }
        .prd-heading::after {
          content: "";
          position: absolute; top: -80px; right: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 65%);
          pointer-events: none;
        }
        .prd-kicker {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #60a5fa; margin-bottom: 16px;
        }
        .prd-kicker::before {
          content: "";
          display: inline-block;
          width: 20px; height: 2px;
          background: #2563eb; border-radius: 2px;
        }
        .prd-h1 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800; color: #f8fafc;
          line-height: 1.05; letter-spacing: -0.035em;
          margin: 0;
        }
        .prd-h1-accent { color: #60a5fa; }
        .prd-heading-right {
          position: relative; z-index: 1;
        }
        .prd-heading-desc {
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(248,250,252,0.6); line-height: 1.8; margin-top: 16px;
        }

        /* ── PILLS ── */
        .prd-pills-wrap {
          padding: 28px clamp(24px, 6vw, 80px) 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .prd-pills-wrap::-webkit-scrollbar { display: none; }
        .prd-pills {
          display: flex; flex-wrap: wrap;
          gap: 8px;
          min-width: max-content;
        }
        .prd-pill {
          padding: 8px 18px;
          border-radius: 999px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          color: #475569;
          font-size: 13px; font-weight: 500;
          cursor: pointer; font-family: inherit;
          white-space: nowrap;
          transition: all .18s;
        }
        .prd-pill:hover {
          border-color: #2563eb;
          color: #2563eb;
          background: #eff6ff;
        }
        .prd-pill--on {
          background: #2563eb;
          border-color: #2563eb;
          color: #fff;
          font-weight: 700;
        }

        /* ── DETAIL ── */
        .prd-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin: 36px clamp(24px, 6vw, 80px) 64px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 40px rgba(15,23,42,0.08);
          animation: prd-in .38s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes prd-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Left image */
        .prd-img-wrap {
          position: relative;
          min-height: 480px;
          overflow: hidden;
        }
        .prd-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          position: absolute; inset: 0;
          transition: transform .7s ease;
        }
        .prd-detail:hover .prd-img { transform: scale(1.04); }
        .prd-img-shade {
          position: absolute; inset: 0;
          background: linear-gradient(120deg, rgba(15,23,42,0.18) 0%, transparent 60%);
        }

        /* Right content */
        .prd-content {
          padding: clamp(36px, 4vw, 56px) clamp(32px, 4vw, 52px);
          display: flex; flex-direction: column;
          justify-content: center;
          background: #fff;
        }
        .prd-tag {
          display: inline-block; align-self: flex-start;
          font-size: 10px; font-weight: 700;
          letter-spacing: 2.5px; text-transform: uppercase;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 12px; border-radius: 999px;
          margin-bottom: 16px;
        }
        .prd-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 800; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.025em;
          margin: 0 0 14px;
        }
        .prd-desc {
          font-size: clamp(14px, 1.3vw, 15.5px);
          color: #475569; line-height: 1.85;
          margin: 0;
        }
        .prd-divider {
          height: 1px; background: #f1f5f9;
          margin: 24px 0;
        }

        /* Features */
        .prd-features {
          display: flex; flex-direction: column; gap: 16px;
        }
        .prd-feature {
          display: flex; gap: 12px; align-items: flex-start;
        }
        .prd-check { flex-shrink: 0; margin-top: 2px; }
        .prd-feature-label {
          font-size: 14px; font-weight: 700;
          color: #0f172a; margin: 0 0 2px;
        }
        .prd-feature-text {
          font-size: 13px; color: #64748b;
          line-height: 1.65; margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .prd-heading { grid-template-columns: 1fr; gap: 12px; padding: 44px 24px 48px; }
          .prd-detail { grid-template-columns: 1fr; margin: 28px 20px 48px; }
          .prd-img-wrap { min-height: 280px; position: relative; height: 280px; }
          .prd-img { position: absolute; }
          .prd-pills-wrap { padding: 24px 20px 0; }
          .prd-pills { flex-wrap: wrap; min-width: unset; }
        }
        @media (max-width: 560px) {
          .prd-heading { padding: 44px 20px 0; }
          .prd-content { padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
}
