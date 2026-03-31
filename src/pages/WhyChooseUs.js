import React, { useEffect, useRef, useState } from "react";

const reasons = [
  { title: "Experience", desc: "With years of experience in the IT sector, providing scalable and reliable end-user products in India and other parts of the world. Chronosphere is known for the team of experts who knows how to make any industry grow and help in making it fully-functional for the best productivity." },
  { title: "Expert IT Team", desc: "Our team comprises advanced-expertise in software development and IT solutions in India and across the globe. We are dedicated to giving customized results that particularly meet industry standards." },
  { title: "Modern Technology", desc: "Expertise in solving complex problems efficiently with latest technology, we specialize in proactive support and making robust software end-products in India. We have a dedicated team that stays updated and predicts advancements for our SMEs." },
  { title: "Cost-Effective", desc: "Partnering with us helps you save on costs compared to hiring freelancers or in-house teams. With Chronosphere, we provide scalability, easier management of online business, and long-term ROI." },
  { title: "Custom Solutions", desc: "Every business is unique, so our website design is too. We perfectly align every metric of your business with the needs of your website/software — SEO, responsiveness, faster loading times, and more." }
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Expert Team Members" },
  { value: "10+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [visStats, setVisStats] = useState(false);
  const [visRows, setVisRows] = useState([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === statsRef.current) setVisStats(true);
        else {
          const idx = Number(e.target.dataset.idx);
          setVisRows(v => { const n = [...v]; n[idx] = true; return n; });
        }
        obs.unobserve(e.target);
      });
    }, { threshold: 0.15 });

    if (statsRef.current) obs.observe(statsRef.current);
    const rows = sectionRef.current?.querySelectorAll(".wcu-row");
    rows?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wcu-section" ref={sectionRef}>
      <div className="wcu-inner">

        {/* ── Left sticky panel ── */}
        <div className="wcu-left">
          <p className="wcu-eyebrow">WHY CHOOSE US</p>
          <h2 className="wcu-heading">
            Why<br />
            <span className="wcu-blue">Chronosphere?</span>
          </h2>
          <p className="wcu-subtext">
            Chronosphere is dedicated to providing the best outcomes from the online presence of your business.
            We keep you updated and upgraded with the latest technology.
          </p>

          {/* Stats */}
          <div className="wcu-stats" ref={statsRef}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="wcu-stat"
                style={{
                  opacity: visStats ? 1 : 0,
                  transform: visStats ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity .6s ease ${i * 0.1}s, transform .6s ease ${i * 0.1}s`
                }}
              >
                <span className="wcu-stat-val">{s.value}</span>
                <span className="wcu-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right accordion rows ── */}
        <div className="wcu-right">
          {reasons.map((r, i) => (
            <div
              key={i}
              className={`wcu-row ${activeIdx === i ? "wcu-row--open" : ""}`}
              data-idx={i}
              style={{
                opacity: visRows[i] ? 1 : 0,
                transform: visRows[i] ? "translateX(0)" : "translateX(40px)",
                transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`
              }}
              onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
            >
              <div className="wcu-row-top">
                <span className="wcu-num">0{i + 1}</span>
                <h3 className="wcu-row-title">{r.title}</h3>
                <div className="wcu-row-icon">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d={activeIdx === i ? "M4 8l6 6 6-6" : "M4 12l6-6 6 6"}
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="wcu-row-body">
                <p className="wcu-row-desc">{r.desc}</p>
              </div>
              <div className="wcu-row-line" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .wcu-section {
          background: #071020;
          padding: clamp(72px,10vw,120px) clamp(20px,4vw,72px);
          font-family: "DM Sans","Space Grotesk",sans-serif;
          width: 100%;
        }
        .wcu-inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(48px,6vw,96px);
          align-items: start;
        }

        /* Left */
        .wcu-left { position: sticky; top: 120px; }
        .wcu-eyebrow {
          display: inline-block;
          font-family: "DM Sans", sans-serif;
          font-size: 11px; font-weight: 700; letter-spacing: 3.5px;
          text-transform: uppercase; color: #2563eb;
          margin: 0 0 16px;
        }
        .wcu-heading {
          font-family: "Space Grotesk",sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #fff;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 20px;
        }
        .wcu-blue { color: #2563eb; }
        .wcu-subtext {
          font-size: 15px; color: #94a3b8;
          line-height: 1.8; margin: 0 0 40px;
          max-width: 380px;
        }

        /* Stats */
        .wcu-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .wcu-stat {
          border-left: 2px solid #2563eb;
          padding-left: 16px;
        }
        .wcu-stat-val {
          display: block;
          font-family: "Space Grotesk",sans-serif;
          font-size: clamp(28px,3.5vw,40px);
          font-weight: 800; color: #fff;
          line-height: 1;
        }
        .wcu-stat-lbl {
          display: block;
          font-size: 12px; color: #64748b;
          margin-top: 4px; font-weight: 500;
        }

        /* Right rows */
        .wcu-right { display: flex; flex-direction: column; }
        .wcu-row {
          border-top: 1px solid rgba(255,255,255,0.07);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .wcu-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }

        .wcu-row-top {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 0;
          transition: padding .4s ease;
        }
        .wcu-row--open .wcu-row-top { padding-bottom: 12px; }

        .wcu-num {
          font-family: "Space Grotesk",sans-serif;
          font-size: 13px; font-weight: 700;
          color: #2563eb; min-width: 28px;
          transition: color .3s;
        }
        .wcu-row:hover .wcu-num,
        .wcu-row--open .wcu-num { color: #2563eb; }

        .wcu-row-title {
          font-family: "Space Grotesk",sans-serif;
          font-size: clamp(17px,2vw,22px);
          font-weight: 700; color: #f1f5f9;
          margin: 0; flex: 1;
          transition: color .3s;
        }
        .wcu-row:hover .wcu-row-title,
        .wcu-row--open .wcu-row-title { color: #ffffff; }

        .wcu-row-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          transition: background .3s, border-color .3s, color .3s, transform .3s;
          flex-shrink: 0;
        }
        .wcu-row:hover .wcu-row-icon,
        .wcu-row--open .wcu-row-icon {
          background: #2563eb; border-color: #2563eb;
          color: #fff;
        }

        .wcu-row-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height .5s cubic-bezier(0.22,1,0.36,1);
        }
        .wcu-row--open .wcu-row-body { max-height: 200px; }

        .wcu-row-desc {
          font-size: 14.5px; color: #94a3b8;
          line-height: 1.8; margin: 0 0 24px;
          padding-left: 48px;
        }

        /* bottom accent line */
        .wcu-row-line {
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #2563eb;
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(0.22,1,0.36,1);
        }
        .wcu-row--open .wcu-row-line { transform: scaleX(1); }

        @media(max-width:900px) {
          .wcu-inner { grid-template-columns: 1fr; gap: 40px; }
          .wcu-left { position: static; }
          .wcu-subtext { max-width: 100%; }
        }
        @media(max-width:540px) {
          .wcu-section { padding: 48px 20px; }
          .wcu-stats { grid-template-columns: 1fr 1fr; gap: 16px; }
          .wcu-row-top { gap: 12px; padding: 20px 0; }
          .wcu-row-desc { padding-left: 0; }
        }
      `}</style>
    </section>
  );
}
export default WhyChooseUs;
