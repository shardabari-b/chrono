import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { id: "lms",          num: "01", title: "LMS + Courses + STEM",          desc: "A modular learning platform where teachers build courses, track mastery, and deploy hands-on STEM experiences.",                                       tag: "Platform",    img: "/images/chrono.jpg"          },
  { id: "emotion",      num: "02", title: "Emotion Sensing",                desc: "AI-powered real-time engagement signals that personalize lessons and support social-emotional learning outcomes.",                                      tag: "AI",          img: "/images/chrono.jpg"      },
  { id: "attendance",   num: "03", title: "Attendance System",              desc: "Automate check-in with QR, biometric, and badge-based systems. Reduce manual work and surface at-risk learner alerts.",                                tag: "Automation",  img: "/images/chrono.jpg"   },
  { id: "slm",          num: "04", title: "Student Lifecycle Management",   desc: "Track every learner's journey from enrollment to achievement with smart dashboards and predictive analytics.",                                          tag: "Management",  img: "/images/chrono.jpg"          },
  { id: "appdev",       num: "05", title: "App Development",                desc: "End-to-end mobile and web app development — from user research and prototyping to cross-platform publishing.",                                          tag: "Development", img: "/images/chrono.jpg"       },
  { id: "gamedev",      num: "06", title: "Game Development & Animation",   desc: "Project-based courses delivering portfolio-ready games, animations, and motion experiences using industry tools.",                                      tag: "Creative",    img: "/images/chrono.jpg"      },
  { id: "hackathons",   num: "07", title: "Hackathons",                     desc: "Curated challenge libraries, judging rubrics, virtual expo halls, and media-ready project portfolios for student innovators.",                          tag: "Events",      img: "/images/chrono.jpg"   },
  { id: "fdps",         num: "08", title: "FDPS on AI",                     desc: "Faculty Development Programs on AI — upskilling educators with hands-on workshops and certification tracks.",                                           tag: "Education",   img: "/images/chrono.jpg"         },
  { id: "expo",         num: "09", title: "Expo / World Records",           desc: "Host global showcases and record-breaking events that amplify student innovation and connect with industry leaders.",                                   tag: "Events",      img: "/images/chrono.jpg"         },
  { id: "partnerships", num: "10", title: "Industries & Partnerships",      desc: "Co-branded learning pathways, internship pipelines, research collaborations, and award programs with global partners.",                                tag: "Network",     img: "/images/chrono.jpg" },
  { id: "robotics",     num: "11", title: "Robotics & IoT",                 desc: "Hands-on robotics, edge-AI, and IoT projects with plug-and-play hardware kits, simulators, and real-time dashboards.",                                tag: "Hardware",    img: "/images/chrono.jpg"     },
];

function Products() {
  const [selected, setSelected] = useState(null);
  const [visible, setVisible]   = useState(false);
  const detailRef = useRef(null);
  const navigate  = useNavigate();

  const handleSelect = (p) => {
    if (selected?.id === p.id) {
      setVisible(false);
      setTimeout(() => setSelected(null), 300);
      return;
    }
    setVisible(false);
    setTimeout(() => {
      setSelected(p);
      setVisible(true);
      setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 60);
    }, selected ? 250 : 0);
  };

  const idx     = selected ? products.findIndex(p => p.id === selected.id) : 0;
  const imgLeft = idx % 2 === 0;

  return (
    <section className="pg-wrap">

      {/* Hero */}
      <div className="pg-hero">
        <span className="sh-eyebrow">Our Products</span>
        <h1 className="pg-title">Built for the <span className="pg-accent">Next Generation</span></h1>
        <p className="pg-sub">11 products powering learners, educators &amp; innovators.</p>
      </div>

      {/* ── Tab Headings Row ── */}
      <div className="pg-tabs-outer">
        <div className="pg-tabs">
          {products.map((p) => (
            <button
              key={p.id}
              className={`pg-tab${selected?.id === p.id ? " pg-tab--on" : ""}`}
              onClick={() => handleSelect(p)}
            >
              <span className="pg-tab-num">{p.num}</span>
              <span className="pg-tab-label">{p.title}</span>
              <span className="pg-tab-tag">{p.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Detail Panel ── */}
      <div
        ref={detailRef}
        className="pg-panel-wrap"
        style={{
          maxHeight: selected ? "600px" : "0",
          opacity:   visible  ? 1 : 0,
          transition: "max-height 0.45s ease, opacity 0.35s ease",
          overflow: "hidden",
        }}
      >
        {selected && (
          <div className="pg-panel">
            <div className={`pg-panel-inner${imgLeft ? "" : " pg-panel-inner--rev"}`}>

              <div className="pg-panel-img-wrap"
                style={{
                  transform: visible ? "translateX(0)" : `translateX(${imgLeft ? "-40px" : "40px"})`,
                  opacity: visible ? 1 : 0,
                  transition: "transform 0.5s ease 0.1s, opacity 0.5s ease 0.1s",
                }}
              >
                <img src={selected.img} alt={selected.title} className="pg-panel-img" />
              </div>

              <div className="pg-panel-text"
                style={{
                  transform: visible ? "translateX(0)" : `translateX(${imgLeft ? "40px" : "-40px"})`,
                  opacity: visible ? 1 : 0,
                  transition: "transform 0.5s ease 0.2s, opacity 0.5s ease 0.2s",
                }}
              >
                <div className="pg-panel-meta">
                  <span className="pg-panel-num">{selected.num}</span>
                  <span className="pg-panel-badge">{selected.tag}</span>
                </div>
                <h2 className="pg-panel-title">{selected.title}</h2>
                <p className="pg-panel-desc">{selected.desc}</p>
                <div className="pg-panel-actions">
                  <button className="pg-panel-btn" onClick={() => navigate(`/products/${selected.id}`)}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="pg-panel-close" onClick={() => handleSelect(selected)}>✕</button>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      <style>{`
        .pg-wrap {
          background: #fff;
          font-family: "DM Sans","Space Grotesk",sans-serif;
          width: 100%;
        }

        /* Hero */
        .pg-hero {
          text-align: left;
          padding: 52px clamp(16px,4vw,64px) 36px;
        }
        .sh-eyebrow {
          display: inline-block;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 14px;
        }
        .pg-title {
          font-family: "Space Grotesk",sans-serif;
          font-size: clamp(32px,5vw,54px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.03em; margin: 0 0 10px;
        }
        .pg-accent { color: #2563eb; }
        .pg-sub { font-size: 14px; color: #94a3b8; margin: 0; }

        /* Tabs outer */
        .pg-tabs-outer {
          padding: 0 clamp(16px,4vw,64px) 0;
          border-bottom: 2px solid #f1f5f9;
         padding-bottom: 40px;
        }
        .pg-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        /* Tab */
        .pg-tab {
          display: flex; align-items: center; gap: 6px;
          background: none; border: none;
          padding: 14px 16px 12px;
          cursor: pointer;
          position: relative;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          transition: background 0.2s;
          border-radius: 8px 8px 0 0;
        }
        .pg-tab:hover { background: #f8fafc; }
        .pg-tab::after {
          content: "";
          position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: #2563eb;
          transform: scaleX(0);
          transition: transform 0.25s ease;
        }
        .pg-tab:hover::after,
        .pg-tab--on::after { transform: scaleX(1); }
        .pg-tab--on { background: #f8fafc; }

        .pg-tab-num {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          color: #cbd5e1;
        }
        .pg-tab--on .pg-tab-num { color: #93c5fd; }

        .pg-tab-label {
          font-family: "Space Grotesk",sans-serif;
          font-size: 13px; font-weight: 700;
          color: #64748b; white-space: nowrap;
          transition: color 0.2s;
        }
        .pg-tab:hover .pg-tab-label,
        .pg-tab--on .pg-tab-label { color: #2563eb; }

        .pg-tab-tag {
          font-size: 9px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase;
          background: #f1f5f9; color: #94a3b8;
          padding: 2px 7px; border-radius: 999px;
          transition: background 0.2s, color 0.2s;
        }
        .pg-tab--on .pg-tab-tag {
          background: #eff6ff; color: #2563eb;
        }

        /* Detail panel */
        .pg-panel-wrap {
          padding: 0 clamp(16px,4vw,64px);
        }
        .pg-panel {
          padding: 40px 0 48px;
        }
        .pg-panel-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px,5vw,72px);
          align-items: center;
        }
        .pg-panel-inner--rev {
          direction: rtl;
        }
        .pg-panel-inner--rev > * { direction: ltr; }

      
        .pg-panel-img {
           object-fit: contain;
          transition: transform 0.35s ease;
        }
        .pg-panel-img-wrap:hover .pg-panel-img { transform: scale(1.07); }

        .pg-panel-text {
          display: flex; flex-direction: column; gap: 12px;
        }
        .pg-panel-meta {
          display: flex; align-items: center; gap: 10px;
        }
        .pg-panel-num {
          font-size: 11px; font-weight: 700; letter-spacing: 3px; color: #2563eb;
        }
        .pg-panel-badge {
          font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #2563eb;
          background: #eff6ff; border: 1px solid #bfdbfe;
          padding: 3px 12px; border-radius: 999px;
        }
        .pg-panel-title {
          font-family: "Space Grotesk",sans-serif;
          font-size: clamp(22px,2.8vw,36px);
          font-weight: 800; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.02em; margin: 0;
        }
        .pg-panel-desc {
          font-size: clamp(13px,1.2vw,15px);
          color: #64748b; line-height: 1.8; margin: 0;
        }
        .pg-panel-actions {
          display: flex; align-items: center; gap: 12px; margin-top: 4px;
        }
        .pg-panel-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #2563eb; color: #fff;
          border: none; border-radius: 8px;
          padding: 10px 22px; font-size: 13px; font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .pg-panel-btn:hover { background: #1d4ed8; transform: translateY(-2px); }
        .pg-panel-close {
          background: #f1f5f9; border: none;
          width: 36px; height: 36px; border-radius: 50%;
          font-size: 13px; color: #64748b;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .pg-panel-close:hover { background: #fee2e2; color: #ef4444; }

        @media(max-width: 700px) {
          .pg-panel-inner { grid-template-columns: 1fr; }
          .pg-panel-inner--rev { direction: ltr; }
          .pg-tab-tag { display: none; }
          .pg-panel-wrap { max-height: none !important; }
          .pg-tabs { gap: 8px; }
          .pg-tab { padding: 10px 10px 8px; }
          .pg-tab-label { font-size: 12px; }
          .pg-hero { padding: 40px 16px 24px; }
          .pg-tabs-outer { padding: 0 16px 24px; }
          .pg-panel-wrap { padding: 0 16px; }
        }
      `}</style>
    </section>
  );
}

export default Products;
