import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../data/services";

function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const navigate = useNavigate();
  const active = SERVICES.find(s => s.id === activeId);

  return (
    <section className="os-section">
      <div className="os-container">

        {/* ── Header ── */}
        <div className="os-header">
          <span className="os-eyebrow">What We Offer</span>
          <h2 className="os-title">Our <span className="os-blue">Services</span></h2>
          <p className="os-desc">Empowering students with future-ready skills across technology, innovation, and professional excellence.</p>
        </div>

        {/* ── Body: list + panel ── */}
        <div className="os-body">

          {/* Left: service name list */}
          <div className="os-list">
            {SERVICES.map((s, i) => (
              <button
                key={s.id}
                className={`os-item ${activeId === s.id ? "os-item--on" : ""}`}
                onClick={() => setActiveId(s.id)}
              >
                <div className="os-item-left">
                  <span className="os-item-title">{s.title}</span>
                  <span className="os-item-sub">{s.subtitle}</span>
                </div>
                <span className="os-item-arrow">→</span>
              </button>
            ))}
          </div>

          {/* Right: preview panel */}
          <div className="os-panel" key={activeId}>
            <span className="os-panel-eyebrow">{active.eyebrow}</span>
            <h3 className="os-panel-title">{active.title}</h3>
            <p className="os-panel-subtitle">{active.subtitle}</p>
            <p className="os-panel-desc">{active.desc}</p>

            <div className="os-panel-tags">
              {active.tags.map(t => (
                <span key={t} className="os-tag">{t}</span>
              ))}
            </div>

            <div className="os-actions">
              <button className="os-btn-primary" onClick={() => navigate(`/services/${active.id}`)}>
                Explore Program
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="os-btn-ghost" onClick={() => navigate("/contact")}>Talk to Us</button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .os-section {
          background: #fff;
          padding: clamp(64px, 9vw, 112px) clamp(20px, 4vw, 72px);
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          width: 100%;
        }
        .os-container { width: 100%; }

        /* Header */
        .os-header { margin-bottom: clamp(40px, 5vw, 60px); }
        .os-eyebrow {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 14px;
        }
        .os-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 12px;
        }
        .os-blue { color: #2563eb; }
        .os-desc {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #64748b; line-height: 1.8;
          margin: 0; max-width: 560px;
        }

        /* Body */
        .os-body {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
        }

        /* Left list */
        .os-list {
          display: flex;
          flex-direction: column;
          border-right: 1px solid #e2e8f0;
          background: #f8faff;
        }
        .os-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 20px 22px;
          background: none;
          border: none;
          border-bottom: 1px solid #e2e8f0;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: background 0.18s;
          position: relative;
        }
        .os-item:last-child { border-bottom: none; }
        .os-item::before {
          content: "";
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #2563eb;
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }
        .os-item:hover { background: #eff6ff; }
        .os-item:hover::before { transform: scaleY(1); }
        .os-item--on { background: #ffffff; }
        .os-item--on::before { transform: scaleY(1); }

        .os-item-left {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .os-item-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px; font-weight: 700;
          color: #475569;
          transition: color 0.18s;
        }
        .os-item:hover .os-item-title,
        .os-item--on .os-item-title { color: #2563eb; }

        .os-item-sub {
          font-size: 11px; color: #94a3b8;
          font-style: italic;
        }
        .os-item--on .os-item-sub { color: #60a5fa; }

        .os-item-arrow {
          font-size: 13px; color: #cbd5e1;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.18s;
          flex-shrink: 0;
        }
        .os-item:hover .os-item-arrow,
        .os-item--on .os-item-arrow {
          opacity: 1; transform: translateX(0); color: #2563eb;
        }

        /* Right panel */
        .os-panel {
          padding: clamp(28px, 3vw, 44px);
          background: #ffffff;
          animation: os-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes os-in {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .os-panel-eyebrow {
          display: block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 10px;
        }
        .os-panel-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 800; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.02em;
          margin: 0 0 12px;
        }
        .os-panel-subtitle {
          font-size: 13px; font-style: italic;
          color: #94a3b8; margin: -6px 0 14px;
        }
        .os-panel-desc {
          font-size: clamp(13px, 1.3vw, 15px);
          color: #475569; line-height: 1.85;
          margin: 0 0 20px; max-width: 680px;
        }

        /* Tags */
        .os-panel-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 28px;
        }
        .os-tag {
          font-size: 11px; font-weight: 600;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 12px; border-radius: 999px;
        }

        /* Actions */
        .os-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .os-btn-primary, .os-btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px; border-radius: 8px;
          font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          transition: all 0.18s ease;
        }
        .os-btn-primary {
          background: #2563eb; color: #fff; border: none;
          box-shadow: 0 6px 18px rgba(37,99,235,0.22);
        }
        .os-btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); }
        .os-btn-ghost {
          background: #f1f5f9; color: #0f172a; border: none;
        }
        .os-btn-ghost:hover { background: #e2e8f0; }

        /* Responsive */
        @media (max-width: 860px) {
          .os-body { grid-template-columns: 1fr; }
          .os-list {
            flex-direction: row; flex-wrap: wrap;
            border-right: none; border-bottom: 1px solid #e2e8f0;
          }
          .os-item {
            flex: 1 1 auto; border-bottom: none;
            border-right: 1px solid #e2e8f0;
            padding: 14px 16px;
          }
          .os-item:last-child { border-right: none; }
          .os-item::before { top: auto; bottom: 0; left: 0; right: 0; width: auto; height: 3px; transform: scaleX(0); }
          .os-item:hover::before, .os-item--on::before { transform: scaleX(1); }
          .os-item-sub, .os-item-arrow { display: none; }
        }
        @media (max-width: 560px) {
          .os-highlights { grid-template-columns: 1fr; }
          .os-item { flex: 1 1 50%; }
        }
      `}</style>
    </section>
  );
}

export default Services;
