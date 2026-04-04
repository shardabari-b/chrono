import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SERVICES } from "../data/services";

const SLIDES = ["/images/chrono.jpg", "/images/today.jpg", "/images/founder.jpg"];

function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const [slide, setSlide] = useState(0);
  const [modal, setModal] = useState(null);

  // auto-open modal if navigated from header with a service id
  useEffect(() => {
    const id = location.state?.activeId;
    if (id) {
      const found = SERVICES.find(s => s.id === id);
      if (found) setModal(found);
    }
  }, [location.state]);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="sv-wrap">

      {/* ── Hero ── */}
      <div className="sv-hero">
        {/* left copy — padded same as all other pages */}
        <div className="sv-hero-copy">
          <span className="sv-eyebrow">What We Offer</span>
          <h1 className="sv-hero-title">
            Our <span className="sv-blue">Services</span>
          </h1>
          <p className="sv-hero-desc">
            Future-ready programs across technology, innovation, and professional
            excellence — designed to prepare students for the world ahead.
          </p>
        </div>

        {/* right slideshow */}
        <div className="sv-hero-media">
          <div className="sv-hero-wedge" />
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`sv-slide${i === slide ? " sv-slide--on" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="sv-cards-wrap">
        <div className="sv-cards-row">
          {SERVICES.map((s, i) => (
            <button
              key={s.id}
              className="sv-card"
              style={{ "--i": i }}
              onClick={() => setModal(s)}
            >
              <div className="sv-card-bar" />
              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-sub">{s.subtitle}</p>
              <p className="sv-card-desc">{s.desc.slice(0, 100)}…</p>
              <span className="sv-card-cta">
                View Details
                <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="sv-card-hover-bar" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {modal && (
        <div className="sv-overlay" onClick={() => setModal(null)}>
          <div className="sv-modal" onClick={e => e.stopPropagation()}>

            <div className="sv-modal-head">
              <div>
                <span className="sv-modal-eyebrow">{modal.eyebrow}</span>
                <h2 className="sv-modal-title">{modal.title}</h2>
                <p className="sv-modal-subtitle">{modal.subtitle}</p>
              </div>
              <button className="sv-modal-close" onClick={() => setModal(null)} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="sv-modal-body">
              <p className="sv-modal-desc">{modal.desc}</p>
              <div className="sv-modal-tags">
                {modal.tags.map(t => <span key={t} className="sv-modal-tag">{t}</span>)}
              </div>
              <p className="sv-modal-hl-label">This includes</p>
              <div className="sv-modal-hl-grid">
                {modal.highlights.map((h, hi) => (
                  <div key={h.label} className="sv-modal-hl-card" style={{ "--hi": hi }}>
                    <div className="sv-modal-hl-bar" />
                    <div className="sv-modal-hl-name">{h.label}</div>
                    <div className="sv-modal-hl-text">{h.text}</div>
                  </div>
                ))}
              </div>
              <div>
                <button className="sv-modal-btn" onClick={() => { setModal(null); navigate("/contact"); }}>
                  Enroll Now
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        /* ── Page shell ── */
        .sv-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', 'Poppins', -apple-system, sans-serif;
          background: #fff;
        }

        /* ── Hero ── */
        .sv-hero {
          width: 100%;
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 55%, #e0f2fe 100%);
          display: grid;
          grid-template-columns: 1fr 40%;
          align-items: stretch;
          min-height: 420px;
          max-height: 520px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        /* copy side — same padding token as About / RD pages */
        .sv-hero-copy {
          padding: clamp(56px, 7vw, 96px) clamp(24px, 5vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
          position: relative;
          z-index: 2;
        }
        /* diagonal wedge to blend into image */
        .sv-hero-copy::after {
          content: "";
          position: absolute;
          top: 0; right: -56px; bottom: 0;
          width: 112px;
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 55%, #e0f2fe 100%);
          transform: skewX(-6deg);
          z-index: 3;
        }

        .sv-eyebrow {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb;
        }
        .sv-hero-title {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-size: clamp(34px, 4.5vw, 58px);
          font-weight: 800; color: #0b1220;
          line-height: 1.08; letter-spacing: -0.03em;
          margin: 0;
        }
        .sv-blue { color: #2563eb; }
        .sv-hero-desc {
          font-size: clamp(14px, 1.5vw, 16px);
          color: #334155; line-height: 1.8;
          margin: 0; max-width: 500px;
        }

        /* image side */
        .sv-hero-media {
          position: relative;
          overflow: hidden;
        }
        .sv-hero-wedge {
          position: absolute;
          top: 0; left: -56px; bottom: 0;
          width: 112px;
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 55%, #e0f2fe 100%);
          transform: skewX(-6deg);
          z-index: 2;
        }
        .sv-slide {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          opacity: 0; transform: scale(1.04);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .sv-slide--on { opacity: 1; transform: scale(1); }

        /* ── Cards wrapper — same horizontal padding as other pages ── */
        .sv-cards-wrap {
          padding: clamp(36px, 4vw, 56px) clamp(24px, 5vw, 80px);
          display: flex;
          flex-direction: column;
        }

        /* 5-col grid, fills full width inside the padded wrapper */
        .sv-cards-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          height: auto;
          border-left: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .sv-card {
          position: relative;
          padding: clamp(24px, 2.5vw, 40px) clamp(18px, 2vw, 28px);
          background: #fff;
          border: none;
          border-right: 1px solid #e2e8f0;
          border-bottom: 3px solid transparent;
          display: flex; flex-direction: column; gap: 12px;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          overflow: hidden;
          height: auto;
          transition: background 0.2s, border-bottom-color 0.2s;
          animation: sv-in 0.4s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: calc(var(--i) * 65ms);
        }
        .sv-card:last-child { border-right: none; }
        .sv-card:hover {
          background: #f0f7ff;
          border-bottom-color: #2563eb;
        }

        .sv-card-bar {
          width: 32px; height: 3px;
          background: #2563eb; border-radius: 999px;
          flex-shrink: 0;
        }
        .sv-card-title {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 700; color: #334155;
          line-height: 1.2; margin: 0;
        }
        .sv-card-sub {
          font-size: 13px; font-weight: 600;
          color: #2563eb; margin: 0;
        }
        .sv-card-desc {
          font-size: clamp(14px, 1.2vw, 15px);
          color: #64748b; line-height: 1.75;
          margin: 0; flex: 1;
        }
        .sv-card-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700;
          color: #2563eb; margin-top: 4px;
          transition: gap 0.18s;
        }
        .sv-card:hover .sv-card-cta { gap: 10px; }
        .sv-card-hover-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; background: #2563eb;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .sv-card:hover .sv-card-hover-bar { transform: scaleX(1); }

        @keyframes sv-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Modal overlay ── */
        .sv-overlay {
          position: fixed; inset: 0;
          background: rgba(11,18,32,0.6);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
          animation: sv-fade-in 0.2s ease both;
        }
        @keyframes sv-fade-in { from { opacity: 0; } to { opacity: 1; } }

        .sv-modal {
          background: #fff;
          border-radius: 20px;
          width: 100%; max-width: 860px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 32px 80px rgba(11,18,32,0.28);
          animation: sv-modal-in 0.3s cubic-bezier(0.22,1,0.36,1) both;
          display: flex; flex-direction: column;
        }
        @keyframes sv-modal-in {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .sv-modal-head {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 16px;
          padding: 36px 40px 24px;
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
          border-radius: 20px 20px 0 0;
          border-bottom: 1px solid #e2e8f0;
          flex-shrink: 0;
        }
        .sv-modal-eyebrow {
          display: block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #2563eb; margin-bottom: 8px;
        }
        .sv-modal-title {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800; color: #0b1220;
          line-height: 1.15; letter-spacing: -0.02em;
          margin: 0 0 6px;
        }
        .sv-modal-subtitle {
          font-size: 14px; font-weight: 600;
          color: #475569; margin: 0;
        }
        .sv-modal-close {
          flex-shrink: 0;
          width: 38px; height: 38px; border-radius: 50%;
          background: rgba(255,255,255,0.8);
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #475569;
          transition: background 0.18s, color 0.18s;
        }
        .sv-modal-close:hover { background: #fff; color: #0b1220; }

        .sv-modal-body {
          padding: 32px 40px 40px;
          display: flex; flex-direction: column; gap: 24px;
        }
        .sv-modal-desc {
          font-size: clamp(14px, 1.4vw, 15px);
          color: #334155; line-height: 1.85; margin: 0;
        }
        .sv-modal-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .sv-modal-tag {
          font-size: 12px; font-weight: 600;
          color: #2563eb; background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 5px 14px; border-radius: 999px;
        }
        .sv-modal-hl-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: #94a3b8; margin: 0;
        }
        .sv-modal-hl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 14px;
        }
        .sv-modal-hl-card {
          background: #f8faff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 20px;
          animation: sv-in 0.35s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: calc(var(--hi) * 45ms + 80ms);
          transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
        }
        .sv-modal-hl-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 6px 20px rgba(37,99,235,0.09);
          transform: translateY(-3px);
        }
        .sv-modal-hl-bar {
          width: 22px; height: 3px;
          background: #2563eb; border-radius: 999px;
          margin-bottom: 10px;
        }
        .sv-modal-hl-name {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-size: 14px; font-weight: 700;
          color: #0b1220; margin-bottom: 6px;
        }
        .sv-modal-hl-text {
          font-size: 13px; color: #64748b; line-height: 1.7;
        }
        .sv-modal-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px; border-radius: 10px;
          background: #2563eb; color: #fff; border: none;
          font-size: 14px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          box-shadow: 0 6px 18px rgba(37,99,235,0.28);
          transition: background 0.18s, transform 0.18s;
        }
        .sv-modal-btn:hover { background: #1d4ed8; transform: translateY(-2px); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sv-cards-row { grid-template-columns: repeat(3, 1fr); }
          .sv-card:nth-child(3) { border-right: none; }
          .sv-card:nth-child(n+4) { border-top: 1px solid #e2e8f0; }
        }
        @media (max-width: 860px) {
          .sv-hero { grid-template-columns: 1fr; max-height: none; min-height: 0; }
          .sv-hero-copy::after { display: none; }
          .sv-hero-media { height: 220px; }
          .sv-hero-wedge { display: none; }
          .sv-cards-wrap { padding: clamp(20px, 3vw, 32px) clamp(16px, 4vw, 32px); }
          .sv-modal-head { padding: 24px 24px 20px; }
          .sv-modal-body { padding: 24px 24px 32px; }
        }
        @media (max-width: 640px) {
          .sv-cards-row { grid-template-columns: repeat(2, 1fr); }
          .sv-card:nth-child(2n) { border-right: none; }
          .sv-card:nth-child(3) { border-right: 1px solid #e2e8f0; }
          .sv-card:nth-child(n+3) { border-top: 1px solid #e2e8f0; }
          .sv-modal-hl-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) {
          .sv-cards-row { grid-template-columns: 1fr; }
          .sv-card { border-right: none; border-top: 1px solid #e2e8f0; }
          .sv-card:first-child { border-top: none; }
          .sv-modal-hl-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

export default Services;
