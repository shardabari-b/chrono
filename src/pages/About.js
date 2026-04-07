import React, { useEffect } from "react";

const whatItems = [
  {
    title: "Artificial Intelligence",
    text: "Building intelligent systems and ML-powered tools that solve real educational and industry challenges.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: "Robotics & Automation",
    text: "Designing intelligent robots and automated systems that bridge digital innovation with physical applications.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M9 11V7a3 3 0 0 1 6 0v4"/>
        <circle cx="9" cy="16" r="1" fill="currentColor"/>
        <circle cx="15" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Web & Mobile Engineering",
    text: "Crafting responsive, scalable applications that deliver seamless experiences across every platform.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8l3 3-3 3"/>
        <path d="M13 14h4"/>
      </svg>
    ),
  },
  {
    title: "IoT Systems",
    text: "Connecting physical and digital worlds through smart devices, sensors, and data-driven decision-making.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/>
        <path d="M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17"/>
      </svg>
    ),
  },
  {
    title: "Data Science",
    text: "Turning raw data into actionable insights through advanced analytics, visualization, and predictive modeling.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M7 16l4-4 4 4 4-6"/>
      </svg>
    ),
  },
  {
    title: "Game Development",
    text: "Creating immersive gaming experiences with engaging mechanics and innovative design that captivate players.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="4"/>
        <path d="M6 12h4M8 10v4"/>
        <circle cx="16" cy="11" r="1" fill="currentColor"/>
        <circle cx="18" cy="13" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

const visionItems = [
  { title: "Purpose", text: "Drive positive change in the lives of learners and communities by putting students at the center.", img: "/images/chrono.jpg", hoverImg: "/images/today.jpg" },
  { title: "Promise", text: "Show up with clarity, care, and craftsmanship so partners can move from ideas to impact.", img: "/images/today.jpg", hoverImg: "/images/chrono.jpg" },
  { title: "Mission", text: "Build trusted partnerships that turn research, design, and engineering into measurable outcomes.", img: "/images/chrono.jpg", hoverImg: "/images/today.jpg" },
  { title: "Values", text: "Integrity, curiosity, and inclusion guide how we build—so every product serves people first.", img: "/images/today.jpg", hoverImg: "/images/chrono.jpg" },
];

function About() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".ab-reveal"));
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("ab-visible")); return; }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("ab-visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ab-page">

      {/* ── HERO: full-width split ── */}
      <section className="ab-hero">
        {/* Left: dark panel */}
        <div className="ab-hero-left ab-reveal" style={{ "--d": "0s" }}>
          <span className="ab-eyebrow">About Us</span>
          <h1>We are<br /><span className="ab-blue">Chronosphere</span></h1>
          <p>
            A student-led innovation lab building real products, running research experiments,
            and helping schools adopt technology at meaningful scale.
          </p>
          <p>
            We deliver full-stack development, product design, and implementation support—moving
            from research to launch with clarity and momentum.
          </p>
          <div className="ab-hero-tags">
            <span>AI & Robotics</span>
            <span>EdTech</span>
            <span>Research</span>
            <span>Student-Led</span>
          </div>
        </div>

        {/* Right: full-bleed image */}
        <div className="ab-hero-right ab-reveal" style={{ "--d": "0.1s" }}>
          <img src="/images/chrono.jpg" alt="Chronosphere" />
          <div className="ab-hero-badge">
            <span className="ab-badge-num">6+</span>
            <span className="ab-badge-txt">Tech Domains</span>
          </div>
        </div>
      </section>

      {/* ── VISION STRIP ── */}
      <section className="ab-vision">
        <div className="vision-full">
          <div className="vision-grid">
            {visionItems.map((item, index) => (
              <article
                key={item.title}
                className="vision-card ab-reveal"
                style={{ "--d": `${index * 0.08 + 0.12}s` }}
              >
                <img className="vision-bg" src={item.img} alt="" loading="lazy" />
                <img className="vision-bg vision-bg-hover" src={item.hoverImg} alt="" loading="lazy" />
                <div className="vision-overlay">
                  <span className="vision-title">{item.title}</span>
                  <p className="vision-text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="ab-what">
        <div className="ab-what-header ab-reveal" style={{ "--d": "0s" }}>
          <div className="ab-what-header-left">
            <span className="ab-eyebrow ab-eyebrow-dark">Capabilities</span>
            <h2>What We Do</h2>
          </div>
          <p className="ab-what-header-desc">Six domains where we research, build, and deploy real solutions.</p>
        </div>

        <div className="ab-what-grid">
          {whatItems.map((item, i) => (
            <div key={item.title} className="ab-what-card ab-reveal" style={{ "--d": `${i * 0.06 + 0.05}s` }}>
              <div className="ab-what-top">
                <div className="ab-what-icon">{item.icon}</div>
                <span className="ab-what-num">0{i + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .ab-page {
          font-family: "DM Sans", sans-serif;
          background: #fff;
          color: #0f172a;
          overflow-x: hidden;
        }

        .ab-reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; transition-delay: var(--d, 0s); }
        .ab-reveal.ab-visible { opacity: 1; transform: none; }

        .ab-eyebrow {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.5); margin-bottom: 16px;
        }
        .ab-eyebrow-dark { color: #2563eb; }
        .ab-blue { color: #3b82f6; }

        /* ── HERO ── */
        .ab-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 480px;
        }

        .ab-hero-left {
          background: #0a0f1e;
          padding: clamp(80px, 8vw, 110px) clamp(32px, 5vw, 72px) clamp(40px, 4vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .ab-hero-left h1 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(28px, 3.5vw, 46px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 16px;
        }

        .ab-hero-left p {
          font-size: clamp(13px, 1.2vw, 15px);
          color: rgba(255,255,255,0.62);
          line-height: 1.8;
          margin: 0;
          max-width: 420px;
        }
        .ab-hero-left p + p { margin-top: 10px; }

        .ab-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }
        .ab-hero-tags span {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.05em;
          color: #93c5fd;
          background: rgba(59,130,246,0.12);
          border: 1px solid rgba(59,130,246,0.25);
          padding: 5px 14px;
          border-radius: 999px;
        }

        .ab-hero-right {
          position: relative;
          overflow: hidden;
          min-height: 380px;
        }
        .ab-hero-right img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88);
        }

        .ab-hero-badge {
          position: absolute;
          bottom: 20px; left: 20px;
          background: rgba(10,15,30,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 12px 18px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ab-badge-num {
          font-family: "Space Grotesk", sans-serif;
          font-size: 24px; font-weight: 800;
          color: #3b82f6; line-height: 1;
        }
        .ab-badge-txt {
          font-size: 11px; color: rgba(255,255,255,0.6);
          font-weight: 500; letter-spacing: 0.04em;
        }

        /* ── VISION ── */
        .ab-vision { width: 100%; margin-top: 48px; }
        .vision-full { width: 100%; }
        .vision-grid {
          display: flex;
          min-height: 260px;
          overflow: hidden;
        }
        .vision-card {
          position: relative;
          flex: 1; min-width: 0; min-height: 260px;
          overflow: hidden;
          background: #0f172a;
          transition: flex 0.7s ease, opacity 0.4s ease;
        }
        .vision-card:not(:last-child) { border-right: 1px solid rgba(255,255,255,0.18); }
        .vision-bg {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          filter: saturate(0.9) brightness(0.75);
          transform: scale(1.02);
          transition: transform 0.6s ease, filter 0.6s ease, opacity 0.6s ease;
          opacity: 1;
        }
        .vision-bg-hover { opacity: 0; }
        .vision-overlay {
          position: relative; z-index: 2;
          height: 100%;
          display: flex; flex-direction: column; justify-content: center;
          padding: 28px;
          color: #fff;
          background: linear-gradient(90deg, rgba(15,23,42,0.65), rgba(15,23,42,0.2));
          transition: background 0.4s ease;
        }
        .vision-title {
          font-size: 14px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #fff;
          font-weight: 700; margin-bottom: 12px;
          transition: transform 0.4s ease;
        }
        .vision-text {
          margin: 0; color: rgba(255,255,255,0.88);
          line-height: 1.6; opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .vision-grid:hover .vision-card { flex: 0 0 0%; opacity: 0; pointer-events: none; }
        .vision-grid:hover .vision-card:hover { flex: 1 1 100%; opacity: 1; pointer-events: auto; }
        .vision-card:hover .vision-bg { transform: scale(1.12); filter: saturate(1) brightness(0.95); }
        .vision-card:hover .vision-bg:not(.vision-bg-hover) { opacity: 0; }
        .vision-card:hover .vision-bg-hover { opacity: 1; }
        .vision-card:hover .vision-text { opacity: 1; transform: translateY(0); }
        .vision-card:hover .vision-title { transform: translateY(-2px); }

        /* ── WHAT WE DO ── */
        .ab-what {
          background: #f8faff;
          padding: clamp(36px, 4vw, 56px) clamp(24px, 5vw, 72px);
          margin-top: 48px;
        }

        .ab-what-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e2e8f0;
        }
        .ab-what-header h2 {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin: 0;
          line-height: 1.1;
        }
        .ab-what-header-desc {
          font-size: 15px;
          color: #64748b;
          line-height: 1.7;
          margin: 0;
          max-width: 320px;
          text-align: right;
        }

        .ab-what-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
        }

        .ab-what-card {
          background: #fff;
          padding: clamp(18px, 2vw, 28px);
          transition: background 0.22s;
          position: relative;
        }
        .ab-what-card:hover { background: #f0f6ff; }

        .ab-what-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .ab-what-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: #eff6ff;
          color: #2563eb;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.22s, color 0.22s;
        }
        .ab-what-card:hover .ab-what-icon { background: #2563eb; color: #fff; }

        .ab-what-num {
          font-family: "Space Grotesk", sans-serif;
          font-size: 13px; font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.05em;
        }

        .ab-what-card h3 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px; font-weight: 700;
          color: #0f172a; margin: 0 0 10px;
        }
        .ab-what-card p {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.75; margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-hero { grid-template-columns: 1fr; min-height: auto; }
          .ab-hero-left { padding-top: 80px; }
          .ab-hero-right { min-height: 320px; }
          .ab-what-header { flex-direction: column; align-items: flex-start; }
          .ab-what-header-desc { text-align: left; max-width: 100%; }
          .ab-what-grid { grid-template-columns: repeat(2, 1fr); }
          .vision-grid { flex-wrap: wrap; }
          .vision-card { flex: 1 1 50%; }
        }
        @media (max-width: 560px) {
          .ab-what-grid { grid-template-columns: 1fr; }
          .vision-grid { flex-direction: column; }
          .vision-card { flex: 1 1 auto; min-height: 200px; }
        }
      `}</style>
    </section>
  );
}

export default About;
