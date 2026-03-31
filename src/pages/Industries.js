import React, { useEffect, useRef, useState } from "react";

const industries = [
  {
    id: "b2b",
    title: "B2B Industries",
    desc: "Empowering tech firms, manufacturers, startups, and financial services with scalable digital solutions.",
    sectors: ["Tech & IT Services", "Manufacturing", "Startups", "Financial Services", "Telecommunication", "Logistics"],
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "b2c",
    title: "B2C Industries",
    desc: "Driving consumer engagement across retail, health, automotive, fashion, and education sectors.",
    sectors: ["Food & Beverage", "Health & Fitness", "Retailers", "Automotive", "Fashion & Beauty", "Education"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "professional",
    title: "Professional Services",
    desc: "Supporting law firms, healthcare providers, architects, and service professionals with smart tools.",
    sectors: ["Law Firms", "Accounting Firms", "Healthcare", "Architects", "Dentists", "Medical Suppliers"],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "enterprise",
    title: "Enterprise & Public Sector",
    desc: "Transforming insurance, government, energy, travel, and e-commerce with enterprise-grade platforms.",
    sectors: ["Insurance", "Government", "Renewable Energy", "Transport", "Healthcare & Pharma", "Hotels"],
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "education",
    title: "Education & EdTech",
    desc: "Revolutionizing learning with LMS platforms, AI tutors, STEM labs, and student lifecycle tools.",
    sectors: ["Schools", "Colleges", "EdTech Startups", "Training Centers", "Online Platforms", "Coaching Institutes"],
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: "media",
    title: "Media & Entertainment",
    desc: "Powering content creators, studios, gaming companies, and digital media platforms.",
    sectors: ["Gaming Studios", "Content Creators", "Digital Media", "Animation Studios", "Streaming Platforms"],
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80&auto=format&fit=crop",
  },
];

function Industries() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const [hovered, setHovered]   = useState(null);
  const [headVis, setHeadVis]   = useState(false);
  const [cardVis, setCardVis]   = useState([]);

  useEffect(() => {
    const headEl = headRef.current;
    const cardEls = sectionRef.current?.querySelectorAll(".in-card") || [];

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === headEl) setHeadVis(true);
        else {
          const idx = Number(e.target.dataset.idx);
          setCardVis(v => { const n = [...v]; n[idx] = true; return n; });
        }
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1 });

    if (headEl) obs.observe(headEl);
    cardEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="in-section" ref={sectionRef}>

      {/* ── Header ── */}
      <div
        className="in-header"
        ref={headRef}
        style={{
          opacity: headVis ? 1 : 0,
          transform: headVis ? "translateY(0)" : "translateY(36px)",
          transition: "opacity .8s ease, transform .8s ease"
        }}
      >
        <div>
          <span className="sh-eyebrow">Industries</span>
          <h2 className="in-title">
            Expertise Across <span className="in-accent">Industries</span>
          </h2>
          <p className="in-header-desc">
            Our expertise spans across industries — from B2B enterprises and professional
            services to consumer brands, education, media, and public sector organizations.
            We deliver technology solutions that drive real impact at every scale.
          </p>
        </div>
      </div>

      {/* ── Cards row ── */}
      <div className="in-row">
        {industries.map((ind, i) => (
          <div
            key={ind.id}
            className="in-card"
            data-idx={i}
            style={{
              opacity: cardVis[i] ? 1 : 0,
              transform: cardVis[i] ? "translateY(0)" : "translateY(48px)",
              transition: `opacity .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`
            }}
            onMouseEnter={() => setHovered(ind.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* background image with Ken Burns */}
            <div
              className={`in-card-img ${hovered === ind.id ? "in-card-img--zoom" : ""}`}
              style={{ backgroundImage: `url(${ind.img})` }}
            />

            {/* dark gradient always on bottom */}
            <div className="in-card-grad" />

            {/* default — title + arrow always visible at bottom */}
            <div className={`in-card-default ${hovered === ind.id ? "in-card-default--hide" : ""}`}>
              <h3 className="in-card-title">{ind.title}</h3>
              <div className="in-card-arrow">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* hover overlay slides up */}
            <div className={`in-card-overlay ${hovered === ind.id ? "in-card-overlay--on" : ""}`}>
              <h3 className="in-overlay-title">{ind.title}</h3>
              <p className="in-overlay-desc">{ind.desc}</p>
              <ul className="in-overlay-sectors">
                {ind.sectors.map((s, j) => (
                  <li key={j} className="in-overlay-sector">
                    <span className="in-sector-dot" />{s}
                  </li>
                ))}
              </ul>
              <div className="in-overlay-cta">
                Explore
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* bottom accent line */}
            <div className="in-card-line" />
          </div>
        ))}
      </div>

      <style>{`
        .in-section {
          background: #ffffff;
          padding: clamp(64px,9vw,112px) clamp(20px,4vw,72px);
          font-family: "DM Sans","Space Grotesk",sans-serif;
        }

        /* ── Header ── */
        .in-header {
          margin-bottom: clamp(48px,6vw,72px);
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
        .in-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #0f172a;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .in-accent { color: #2563eb; }
        .in-header-desc {
          font-size: clamp(14px,1.5vw,16px);
          color: #64748b; line-height: 1.85;
          margin: 16px 0 0;
          max-width: 620px;
        }

        /* ── Cards row ── */
        .in-row {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 0;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
        }

        /* ── Card ── */
        .in-card {
          position: relative;
          min-height: 440px;
          border-right: 1px solid #e2e8f0;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden; cursor: pointer;
        }
        .in-card:last-child { border-right: none; }

        /* background image */
        .in-card-img {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1.06);
          transition: transform 6s ease;
          z-index: 0;
        }
        .in-card-img--zoom {
          transform: scale(1.14);
          transition: transform .8s cubic-bezier(0.22,1,0.36,1);
        }

        /* permanent dark gradient at bottom */
        .in-card-grad {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 65%;
          background: linear-gradient(to top, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.4) 60%, transparent 100%);
          z-index: 1;
          transition: height .5s ease;
        }
        .in-card:hover .in-card-grad { height: 0%; }

        /* default content */
        .in-card-default {
          position: relative; z-index: 2;
          padding: 24px 20px;
          display: flex; flex-direction: column; gap: 16px;
          transition: opacity .35s ease, transform .35s ease;
        }
        .in-card-default--hide {
          opacity: 0; transform: translateY(12px);
        }
        .in-card-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(13px,1.2vw,16px);
          font-weight: 700; color: #ffffff;
          margin: 0; line-height: 1.3;
        }
        .in-card-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.35);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff;
          transition: background .3s, border-color .3s, transform .3s;
        }
        .in-card:hover .in-card-arrow {
          background: #2563eb; border-color: #2563eb; transform: rotate(45deg);
        }

        /* hover overlay */
        .in-card-overlay {
          position: absolute; inset: 0; z-index: 3;
          background: rgba(37,99,235,0.88);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: flex-end; gap: 10px;
          transform: translateY(100%);
          transition: transform .52s cubic-bezier(0.22,1,0.36,1);
        }
        .in-card-overlay--on { transform: translateY(0); }

        .in-overlay-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(13px,1.2vw,16px);
          font-weight: 700; color: #ffffff;
          margin: 0 0 2px; line-height: 1.3;
        }
        .in-overlay-desc {
          font-size: 12px; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin: 0;
        }
        .in-overlay-sectors {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 5px;
        }
        .in-overlay-sector {
          display: flex; align-items: center; gap: 7px;
          font-size: 11.5px; font-weight: 500; color: rgba(255,255,255,0.9);
        }
        .in-sector-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #ffffff; flex-shrink: 0;
        }
        .in-overlay-cta {
          display: flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 700; color: #ffffff;
          margin-top: 4px;
        }

        /* bottom accent line */
        .in-card-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 3px; z-index: 4;
          background: #2563eb;
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(0.22,1,0.36,1);
        }
        .in-card:hover .in-card-line { transform: scaleX(1); }

        @media(max-width:1100px) {
          .in-row { grid-template-columns: repeat(3,1fr); }
          .in-card { border-bottom: 1px solid #e2e8f0; min-height: 320px; }
        }
        @media(max-width:700px) {
          .in-row { grid-template-columns: repeat(2,1fr); }
          .in-card { min-height: 260px; }
          .in-section { padding: 48px 16px; }
        }
        @media(max-width:480px) {
          .in-row { grid-template-columns: 1fr; }
          .in-card { min-height: 220px; }
        }
      `}</style>
    </section>
  );
}

export default Industries;
