import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SERVICES } from "../data/services";

function ServicesPage() {
  const location = useLocation();
  const [activeId, setActiveId] = useState(
    location.state?.activeId || SERVICES[0].id
  );
  const navigate = useNavigate();
  const active = SERVICES.find(s => s.id === activeId);

  // sync if navigated from header with a different service
  useEffect(() => {
    if (location.state?.activeId) {
      setActiveId(location.state.activeId);
    }
  }, [location.state]);

  return (
    <section className="svp-section">

      {/* ── Page header ── */}
      <div className="svp-header">
        <span className="svp-eyebrow">What We Offer</span>
        <h1 className="svp-title">Our <span className="svp-blue">Services</span></h1>
        <p className="svp-sub">
          Empowering students with future-ready skills across technology,
          innovation, and professional excellence.
        </p>
      </div>

      {/* ── Tab bar ── */}
      <div className="svp-tabbar">
        {SERVICES.map(s => (
          <button
            key={s.id}
            className={`svp-tab ${activeId === s.id ? "svp-tab--on" : ""}`}
            onClick={() => setActiveId(s.id)}
          >
            <span className="svp-tab-name">{s.title}</span>
            <span className="svp-tab-hint">{s.subtitle}</span>
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="svp-content" key={activeId}>

        {/* Top row: copy left, image right */}
        <div className="svp-top">
          <div className="svp-copy">
            <span className="svp-copy-eyebrow">{active.eyebrow}</span>
            <h2 className="svp-copy-title">{active.hero}</h2>
            <p className="svp-copy-desc">{active.desc}</p>
            <div className="svp-tags">
              {active.tags.map(t => <span key={t} className="svp-tag">{t}</span>)}
            </div>
            <div className="svp-actions">
              <button className="svp-btn-primary" onClick={() => navigate(`/services/${active.id}`)}>
                Explore Program
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="svp-btn-ghost" onClick={() => navigate("/contact")}>Talk to Us</button>
            </div>
          </div>

          <div className="svp-img-wrap">
            <img src={active.image} alt={active.title} className="svp-img" />
          </div>
        </div>

        {/* Highlights strip */}
        <div className="svp-hl-strip">
          <p className="svp-hl-label">This includes</p>
          <div className="svp-hl-grid">
            {active.highlights.map((h, i) => (
              <div key={h.label} className="svp-hl-card" style={{ "--i": i }}>
                <div className="svp-hl-bar" />
                <div className="svp-hl-name">{h.label}</div>
                <div className="svp-hl-text">{h.text}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .svp-section {
          background: #fff;
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          width: 100%;
          padding: 0 clamp(16px, 4vw, 64px) 80px;
        }

        /* Header */
        .svp-header { margin-bottom: 36px; padding-top: 52px; }
        .svp-eyebrow {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 14px;
        }
        .svp-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 10px;
        }
        .svp-blue { color: #2563eb; }
        .svp-sub {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #64748b; line-height: 1.8;
          margin: 0; max-width: 560px;
        }

        /* Tab bar */
        .svp-tabbar {
          display: flex; flex-wrap: wrap; gap: 0;
          border-bottom: 2px solid #f1f5f9;
          margin-bottom: 48px;
        }
        .svp-tab {
          display: flex; flex-direction: column; gap: 2px;
          padding: 14px 22px 16px;
          background: none; border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          cursor: pointer; text-align: left;
          border-radius: 8px 8px 0 0;
          transition: background 0.18s;
          font-family: inherit;
        }
        .svp-tab:hover { background: #f8fafc; }
        .svp-tab::after {
          content: "";
          position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: #2563eb;
          transform: scaleX(0); transition: transform 0.22s ease;
        }
        .svp-tab { position: relative; }
        .svp-tab:hover::after, .svp-tab--on::after { transform: scaleX(1); }
        .svp-tab--on { background: #f8fafc; }

        .svp-tab-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 13px; font-weight: 700;
          color: #64748b; white-space: nowrap;
          transition: color 0.18s;
        }
        .svp-tab:hover .svp-tab-name,
        .svp-tab--on .svp-tab-name { color: #2563eb; }

        .svp-tab-hint {
          font-size: 10px; color: #94a3b8;
          font-style: italic; white-space: nowrap;
          display:none;
        }
        .svp-tab--on .svp-tab-hint { color: #93c5fd; }

        /* Content */
        .svp-content {
          animation: svp-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes svp-in {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Top row */
        .svp-top {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
          margin-bottom: 52px;
        }

        .svp-copy-eyebrow {
          display: block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 10px;
        }
        .svp-copy-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(22px, 2.8vw, 38px);
          font-weight: 800; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.02em;
          margin: 0 0 14px;
        }
        .svp-copy-desc {
          font-size: clamp(13px, 1.3vw, 15px);
          color: #64748b; line-height: 1.85;
          margin: 0 0 20px;
        }
        .svp-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 24px;
        }
        .svp-tag {
          font-size: 11px; font-weight: 600;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 12px; border-radius: 999px;
        }
        .svp-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .svp-btn-primary, .svp-btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px; border-radius: 8px;
          font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          transition: all 0.18s ease;
        }
        .svp-btn-primary {
          background: #2563eb; color: #fff; border: none;
          box-shadow: 0 6px 18px rgba(37,99,235,0.22);
        }
        .svp-btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); }
        .svp-btn-ghost { background: #f1f5f9; color: #0f172a; border: none; }
        .svp-btn-ghost:hover { background: #e2e8f0; }

        /* Image */
        .svp-img-wrap {
          border-radius: 16px; overflow: hidden;
          background: #f8faff; border: 1px solid #e2e8f0;
          box-shadow: 0 16px 48px rgba(15,23,42,0.08);
        }
        .svp-img {
          width: 100%; height: 300px;
          object-fit: contain; display: block; padding: 20px;
        }

        /* Highlights strip */
        .svp-hl-strip {
          border-top: 2px solid #f1f5f9;
          padding-top: 40px;
        }
        .svp-hl-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #94a3b8; margin: 0 0 24px;
        }
        .svp-hl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .svp-hl-card {
          background: #f8faff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 20px 20px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
          animation: svp-card-in 0.38s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: calc(var(--i) * 55ms + 60ms);
        }
        .svp-hl-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 6px 20px rgba(37,99,235,0.09);
          transform: translateY(-3px);
        }
        .svp-hl-bar {
          width: 24px; height: 3px;
          background: #2563eb; border-radius: 999px;
          margin-bottom: 12px;
        }
        .svp-hl-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px; font-weight: 700;
          color: #0f172a; margin-bottom: 6px;
        }
        .svp-hl-text {
          font-size: 13px; color: #64748b; line-height: 1.7;
        }
        @keyframes svp-card-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .svp-top { grid-template-columns: 1fr; }
          .svp-img-wrap { display: none; }
        }
        @media (max-width: 700px) {
          .svp-tab { padding: 10px 14px 12px; }
          .svp-tab-hint { display: none; }
          .svp-section { padding: 40px 16px 60px; }
        }
        @media (max-width: 480px) {
          .svp-hl-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export default ServicesPage;
