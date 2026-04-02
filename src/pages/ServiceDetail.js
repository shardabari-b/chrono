import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceById, SERVICES } from "../data/services";

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const s = getServiceById(id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!s) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center", fontFamily: "DM Sans, sans-serif" }}>
        <h2>Service not found</h2>
        <button onClick={() => navigate("/services")} style={{ marginTop: 16, padding: "10px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="sd-section">

      {/* ── Page header ── */}
      <div className="sd-header">
        <button className="sd-back" onClick={() => navigate("/services", { state: { activeId: s.id } })}>← All Services</button>
        <span className="sd-eyebrow">{s.eyebrow}</span>
        <h1 className="sd-title">{s.title} <span className="sd-title-sub">— {s.subtitle}</span></h1>
        <p className="sd-sub">{s.desc}</p>
        <div className="sd-tags">
          {s.tags.map(t => <span key={t} className="sd-tag">{t}</span>)}
        </div>
        <div className="sd-actions">
          <button className="sd-btn-primary" onClick={() => navigate("/contact")}>
            Enroll Now
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="sd-btn-ghost" onClick={() => navigate("/contact")}>Talk to Us</button>
        </div>
      </div>

      {/* ── Highlights ── */}
      <div className="sd-hl-strip">
        <p className="sd-hl-label">This includes</p>
        <div className="sd-hl-grid">
          {s.highlights.map((h, i) => (
            <div key={h.label} className="sd-hl-card" style={{ "--i": i }}>
              <div className="sd-hl-bar" />
              <div className="sd-hl-name">{h.label}</div>
              <div className="sd-hl-text">{h.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Other services tab bar ── */}
      <div className="sd-other">
        <p className="sd-other-label">Explore Other Services</p>
        <div className="sd-tabbar">
          {SERVICES.filter(sv => sv.id !== s.id).map(sv => (
            <button
              key={sv.id}
              className="sd-tab"
              onClick={() => navigate("/services", { state: { activeId: sv.id } })}
            >
              <span className="sd-tab-name">{sv.title}</span>
              <span className="sd-tab-hint">{sv.subtitle}</span>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .sd-section {
          background: #fff;
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          width: 100%;
          padding: 52px clamp(16px, 4vw, 64px) 80px;
        }

        /* ── Header ── */
        .sd-header { margin-bottom: 52px; }

        .sd-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          border: none;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          margin-bottom: 28px;
          transition: background 0.18s, color 0.18s;
          font-family: inherit;
        }
        .sd-back:hover { background: #e2e8f0; color: #0f172a; }

        .sd-eyebrow {
          display: block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 14px;
        }
        .sd-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .sd-title-sub {
          font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 600;
          color: #64748b;
          letter-spacing: -0.01em;
        }
        .sd-sub {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #64748b; line-height: 1.85;
          margin: 0 0 22px; max-width: 720px;
        }
        .sd-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 28px;
        }
        .sd-tag {
          font-size: 11px; font-weight: 600;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 12px; border-radius: 999px;
        }
        .sd-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .sd-btn-primary, .sd-btn-ghost {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px; border-radius: 8px;
          font-size: 13px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          transition: all 0.18s ease;
        }
        .sd-btn-primary {
          background: #2563eb; color: #fff; border: none;
          box-shadow: 0 6px 18px rgba(37,99,235,0.22);
        }
        .sd-btn-primary:hover { background: #1d4ed8; transform: translateY(-2px); }
        .sd-btn-ghost { background: #f1f5f9; color: #0f172a; border: none; }
        .sd-btn-ghost:hover { background: #e2e8f0; }

        /* ── Highlights ── */
        .sd-hl-strip {
          border-top: 2px solid #f1f5f9;
          padding-top: 40px;
          margin-bottom: 60px;
        }
        .sd-hl-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #94a3b8; margin: 0 0 24px;
        }
        .sd-hl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
        }
        .sd-hl-card {
          background: #f8faff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 22px 20px;
          transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
          animation: sd-card-in 0.38s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: calc(var(--i) * 55ms + 60ms);
        }
        .sd-hl-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 6px 20px rgba(37,99,235,0.09);
          transform: translateY(-3px);
        }
        @keyframes sd-card-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sd-hl-bar {
          width: 24px; height: 3px;
          background: #2563eb; border-radius: 999px;
          margin-bottom: 12px;
        }
        .sd-hl-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px; font-weight: 700;
          color: #0f172a; margin-bottom: 6px;
        }
        .sd-hl-text { font-size: 13px; color: #64748b; line-height: 1.7; }

        /* ── Other services ── */
        .sd-other {
          border-top: 2px solid #f1f5f9;
          padding-top: 40px;
        }
        .sd-other-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #94a3b8; margin: 0 0 0;
        }
        .sd-tabbar {
          display: flex; flex-wrap: wrap; gap: 0;
          border-bottom: 2px solid #f1f5f9;
          margin-bottom: 0;
        }
        .sd-tab {
          display: flex; flex-direction: column; gap: 2px;
          padding: 14px 22px 16px;
          background: none; border: none;
          border-bottom: 2px solid transparent;
          margin-bottom: -2px;
          cursor: pointer; text-align: left;
          border-radius: 8px 8px 0 0;
          transition: background 0.18s;
          font-family: inherit;
          position: relative;
        }
        .sd-tab:hover { background: #f8fafc; }
        .sd-tab::after {
          content: "";
          position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; background: #2563eb;
          transform: scaleX(0); transition: transform 0.22s ease;
        }
        .sd-tab:hover::after { transform: scaleX(1); }

        .sd-tab-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 13px; font-weight: 700;
          color: #64748b; white-space: nowrap;
          transition: color 0.18s;
        }
        .sd-tab:hover .sd-tab-name { color: #2563eb; }

        .sd-tab-hint {
          font-size: 10px; color: #94a3b8;
          font-style: italic; white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .sd-tab { padding: 10px 14px 12px; }
          .sd-tab-hint { display: none; }
          .sd-section { padding: 40px 16px 60px; }
        }
        @media (max-width: 480px) {
          .sd-hl-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export default ServiceDetail;
