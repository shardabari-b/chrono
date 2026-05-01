import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../data/services";

function ServicesPage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null); // "stemhighlights[0]" etc

  const toggleHighlight = (key) =>
    setExpanded(prev => (prev === key ? null : key));

  return (
    <section className="svp-root">

      {/* ── Header ── */}
      <div className="svp-header">
        <span className="svp-eyebrow">What We Offer</span>
        <h2 className="svp-title">
          Our <span className="svp-blue">Services</span>
        </h2>
        <p className="svp-sub">
          Empowering students with future-ready skills across technology,
          innovation, and professional excellence.
        </p>
      </div>

      {/* ── Timeline ── */}
      <div className="svp-timeline">
        <div className="svp-spine" aria-hidden="true" />

        {SERVICES.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={s.id} className={`svp-row${isEven ? "" : " svp-row--flip"}`} style={{ "--i": i }}>

              {/* Image side */}
              <div className="svp-media-col">
                <div className="svp-media-frame">
                  <div className="svp-media-glow" aria-hidden="true" />
                  <img src={s.image} alt={s.title} className="svp-media-img" />
                  <div className="svp-media-badge">{s.subtitle}</div>
                </div>
              </div>

              {/* Spine node */}
              <div className="svp-node-col" aria-hidden="true">
                <div className="svp-node">
                  <span className="svp-node-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Content side */}
              <div className="svp-copy-col">
                <div className="svp-copy-inner">
                  <span className="svp-copy-eyebrow">{s.eyebrow}</span>
                  <h3 className="svp-copy-title">{s.hero}</h3>
                  <p className="svp-copy-desc">{s.desc}</p>

                  {/* Expandable highlights */}
                  <div className="svp-pills">
                    {s.highlights.map((h, hi) => {
                      const key = `${s.id}-${hi}`;
                      const open = expanded === key;
                      return (
                        <button
                          key={key}
                          className={`svp-pill${open ? " svp-pill--open" : ""}`}
                          onClick={() => toggleHighlight(key)}
                          aria-expanded={open}
                        >
                          <span className="svp-pill-dot" aria-hidden="true" />
                          <span className="svp-pill-label">{h.label}</span>
                          <svg
                            className={`svp-pill-chevron${open ? " svp-pill-chevron--up" : ""}`}
                            width="12" height="12" viewBox="0 0 12 12" fill="none"
                            aria-hidden="true"
                          >
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {open && (
                            <span className="svp-pill-text">{h.text}</span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="svp-tags">
                    {s.tags.slice(0, 3).map(t => (
                      <span key={t} className="svp-tag">{t}</span>
                    ))}
                    {s.tags.length > 3 && (
                      <span className="svp-tag svp-tag--more">+{s.tags.length - 3} more</span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="svp-actions">
                    <button
                      className="svp-btn-primary"
                      onClick={() => navigate(`/services/${s.id}`)}
                    >
                      Explore Program
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button className="svp-btn-ghost" onClick={() => navigate("/contact")}>
                      Talk to Us
                    </button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      <style>{`
        /* ─── Root ─── */
        .svp-root {
          width: 100%;
          background: #ffffff;
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          padding-bottom: clamp(64px, 8vw, 112px);
          overflow: hidden;
        }

        /* ─── Header ─── */
        .svp-header {
          padding: clamp(40px, 6vw, 76px) clamp(24px, 6vw, 96px) clamp(32px, 4vw, 56px);
          max-width: 680px;
        }
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
          margin: 0 0 14px;
        }
        .svp-blue { color: #2563eb; }
        .svp-sub {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #64748b; line-height: 1.8; margin: 0;
        }

        /* ─── Timeline shell ─── */
        .svp-timeline {
          position: relative;
          padding: 0 clamp(16px, 4vw, 64px);
        }

        /* Vertical spine line */
        .svp-spine {
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          background: linear-gradient(180deg,
            transparent 0%,
            #bfdbfe 8%,
            #bfdbfe 92%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 0;
        }

        /* ─── Row ─── */
        .svp-row {
          display: grid;
          grid-template-columns: minmax(320px, 1.3fr) 80px minmax(320px, 0.95fr);
          gap: 0;
          align-items: center;
          padding: clamp(40px, 5vw, 72px) 0;
          position: relative;
          animation: svp-row-in 0.6s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: calc(var(--i) * 100ms);
        }
        .svp-row + .svp-row {
          border-top: 1px solid #f1f5f9;
        }
        @keyframes svp-row-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Flip: image right, copy left */
        .svp-row--flip .svp-media-col { order: 3; }
        .svp-row--flip .svp-node-col  { order: 2; }
        .svp-row--flip .svp-copy-col  { order: 1; }

        /* ─── Media column ─── */
        .svp-media-col {
          padding: 0 clamp(16px, 3vw, 48px);
        }
        .svp-media-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f2ff 50%, #dbeafe 100%);
          border: 1px solid #e2e8f0;
          aspect-ratio: 4/3;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .svp-row:hover .svp-media-frame {
          border-color: #bfdbfe;
          box-shadow: 0 24px 56px rgba(37,99,235,0.10);
        }
        .svp-media-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .svp-row:hover .svp-media-glow { opacity: 1; }
        .svp-media-img {
          width: 70%; height: 70%;
          object-fit: contain;
          position: relative; z-index: 1;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .svp-row:hover .svp-media-img { transform: scale(1.06); }
        .svp-media-badge {
          position: absolute;
          bottom: 16px; left: 16px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.5px;
          color: #2563eb; background: rgba(255,255,255,0.92);
          border: 1px solid #bfdbfe;
          padding: 5px 12px; border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        /* ─── Spine node ─── */
        .svp-node-col {
          display: flex; align-items: center; justify-content: center;
          position: relative; z-index: 2;
        }
        .svp-node {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #bfdbfe;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 6px #ffffff, 0 0 0 7px #e0eeff;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .svp-row:hover .svp-node {
          border-color: #2563eb;
          box-shadow: 0 0 0 6px #ffffff, 0 0 0 7px #bfdbfe;
        }
        .svp-node-num {
          font-family: "Space Grotesk", sans-serif;
          font-size: 13px; font-weight: 800;
          color: #2563eb; letter-spacing: 0.5px;
        }

        /* ─── Copy column ─── */
        .svp-copy-col {
          padding: 0 clamp(16px, 3vw, 48px);
        }
        .svp-copy-inner {
          display: flex; flex-direction: column; gap: 16px;
          max-width: 520px;
        }
        .svp-row--flip .svp-copy-inner { margin-left: auto; }

        .svp-copy-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #2563eb;
        }
        .svp-copy-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(22px, 2.6vw, 34px);
          font-weight: 800; color: #0f172a;
          line-height: 1.15; letter-spacing: -0.02em;
          margin: 0;
        }
        .svp-copy-desc {
          font-size: clamp(13px, 1.3vw, 15px);
          color: #64748b; line-height: 1.85; margin: 0;
        }

        /* ─── Expandable pills ─── */
        .svp-pills {
          display: flex; flex-direction: column; gap: 6px;
        }
        .svp-pill {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 14px;
          background: #f8faff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          cursor: pointer; text-align: left;
          font-family: inherit;
          transition: background 0.2s, border-color 0.2s;
          flex-wrap: wrap;
        }
        .svp-pill:hover,
        .svp-pill--open {
          background: #eff6ff;
          border-color: #bfdbfe;
        }
        .svp-pill-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #2563eb;
          flex-shrink: 0;
          margin-top: 5px;
          transition: transform 0.2s;
        }
        .svp-pill--open .svp-pill-dot {
          transform: scale(1.4);
        }
        .svp-pill-label {
          font-size: 13px; font-weight: 700;
          color: #0f172a; flex: 1;
          transition: color 0.2s;
        }
        .svp-pill--open .svp-pill-label { color: #2563eb; }
        .svp-pill-chevron {
          flex-shrink: 0; color: #94a3b8;
          margin-top: 2px;
          transition: transform 0.25s ease;
        }
        .svp-pill-chevron--up { transform: rotate(180deg); }
        .svp-pill-text {
          width: 100%;
          font-size: 12px; color: #64748b;
          line-height: 1.7;
          padding: 6px 0 2px 17px;
          animation: svp-expand 0.22s ease both;
        }
        @keyframes svp-expand {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── Tags ─── */
        .svp-tags {
          display: flex; flex-wrap: wrap; gap: 7px;
        }
        .svp-tag {
          font-size: 11px; font-weight: 600;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 12px; border-radius: 999px;
        }
        .svp-tag--more {
          color: #64748b; background: #f1f5f9;
          border-color: #e2e8f0;
        }

        /* ─── Actions ─── */
        .svp-actions {
          display: flex; gap: 10px;
          flex-wrap: wrap; align-items: center;
          padding-top: 4px;
        }
        .svp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 999px;
          background: #2563eb; color: #fff; border: none;
          font-size: 13px; font-weight: 700;
          font-family: inherit; cursor: pointer;
          box-shadow: 0 8px 20px rgba(37,99,235,0.28);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.3px;
        }
        .svp-btn-primary:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 14px 28px rgba(37,99,235,0.35);
        }
        .svp-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 999px;
          background: transparent; color: #0f172a;
          border: 1px solid #e2e8f0;
          font-size: 13px; font-weight: 700;
          font-family: inherit; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .svp-btn-ghost:hover {
          background: #f8faff;
          border-color: #bfdbfe;
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .svp-spine { display: none; }
          .svp-row,
          .svp-row--flip {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            padding: clamp(32px, 4vw, 48px) 0;
          }
          .svp-row--flip .svp-media-col,
          .svp-row--flip .svp-node-col,
          .svp-row--flip .svp-copy-col { order: unset; }
          .svp-node-col { display: none; }
          .svp-media-col { padding: 0; margin-bottom: 24px; }
          .svp-media-frame { aspect-ratio: 16/7; }
          .svp-copy-col { padding: 0; }
          .svp-copy-inner { max-width: 100%; }
          .svp-row--flip .svp-copy-inner { margin-left: 0; }
        }
        @media (max-width: 600px) {
          .svp-timeline { padding: 0 clamp(16px, 4vw, 24px); }
          .svp-header { padding: 48px 16px 36px; }
          .svp-media-frame { aspect-ratio: 16/9; }
          .svp-actions { flex-direction: column; align-items: flex-start; }
          .svp-btn-primary, .svp-btn-ghost { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

export default ServicesPage;
