import React, { useEffect, useRef } from "react";

const services = [
  { id: "stem",      title: "STEM Courses",     desc: "Hands-on Science, Technology, Engineering & Math programs that build critical thinking and real-world problem-solving skills.",          tags: ["Physics", "Mathematics", "Chemistry", "Engineering"],   num: "01" },
  { id: "trending",  title: "Trending Tech",    desc: "Stay ahead with AI, Blockchain, AR/VR, Cybersecurity, and Cloud Computing — the technologies shaping tomorrow.",                        tags: ["Artificial Intelligence", "Blockchain", "AR/VR", "Cloud"], num: "02" },
  { id: "finishing", title: "Finishing School", desc: "Bridge academics and industry with communication, leadership, professional etiquette, and career readiness training.",                   tags: ["Communication", "Leadership", "Interview Prep", "Soft Skills"], num: "03" },
  { id: "workshops", title: "Workshops",        desc: "Intensive short-format workshops — hackathons, design sprints, robotics builds, and data challenges.",                                  tags: ["Hackathons", "Design Sprints", "Robotics", "Bootcamps"],  num: "04" },
  { id: "mva",       title: "MVA",              desc: "Most Valuable Achievers — an elite accelerator recognizing top talent with mentorship, industry exposure, and exclusive opportunities.", tags: ["Elite Mentorship", "Industry Exposure", "Scholarships", "Networking"], num: "05" },
];



function Services() {
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("sv-head--in"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="sv-section">

      {/* ── Header ── */}
      <div className="sv-head" ref={headRef}>
        <div className="sv-head-left">
           <h2 className="sv-title">Our <span className="sv-blue">Services</span></h2>
          <p className="sv-sub">Empowering students with future-ready skills across technology, innovation, and professional excellence.</p>
        </div>
        <div className="sv-head-bar" />
      </div>

      {/* ── Cards grid ── */}
      <div className="sv-grid-wrap">
        <div className="sv-grid">
          {services.map((s, i) => (
            <div key={s.id} className="sv-card">
              {/* hover overlay */}
              <div className="sv-card-overlay" />

              {/* top accent bar animates on hover */}
              <div className="sv-card-accent" />

              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-desc">{s.desc}</p>

              <div className="sv-card-tags">
                {s.tags.map((t, j) => (
                  <span key={j} className="sv-tag">{t}</span>
                ))}
              </div>

              <div className="sv-card-footer">
                <span className="sv-card-cta">Explore →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Section ── */
        .sv-section {
          width: 100%;
          background: #ffffff;
          padding: clamp(64px,9vw,110px) 0 clamp(64px,9vw,110px);
          font-family: "DM Sans","Space Grotesk",sans-serif;
          overflow: hidden;
        }

        /* ── Header ── */
        .sv-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          padding: 0 clamp(24px,5vw,80px);
          margin-bottom: clamp(40px,5vw,64px);
          opacity: 0;
          transform: translateY(36px);
          transition: opacity .75s ease, transform .75s ease;
        }
        .sv-head.sv-head--in { opacity:1; transform:translateY(0); }

        .sv-head-left { max-width: 640px; }
        .sv-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 14px;
        }
        .sv-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(36px,5vw,64px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.06;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .sv-blue { color: #2563eb; }
        .sv-sub {
          font-size: clamp(14px,1.6vw,16px);
          color: #64748b;
          line-height: 1.75;
          margin: 0;
        }
        .sv-head-bar {
          width: 72px;
          height: 4px;
          background: #2563eb;
          border-radius: 999px;
          flex-shrink: 0;
          margin-bottom: 8px;
        }

        /* ── Grid wrapper ── */
        .sv-grid-wrap {
          padding: 0 clamp(24px,5vw,80px);
        }
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }

        /* Enhanced responsive breakpoints */
        @media (max-width: 1199.98px) {
          .sv-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .sv-card {
            padding: 32px 24px 28px;
          }
        }

        @media (max-width: 991.98px) {
          .sv-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .sv-card {
            padding: 28px 20px 24px;
          }

          .sv-title {
            font-size: 18px;
          }

          .sv-desc {
            font-size: 14px;
          }
        }

        @media (max-width: 767.98px) {
          .sv-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .sv-card {
            padding: 24px 16px 20px;
          }

          .sv-title {
            font-size: 16px;
          }

          .sv-desc {
            font-size: 13px;
          }
        }

        @media (max-width: 575.98px) {
          .sv-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .sv-card {
            padding: 20px 16px 16px;
          }

          .sv-title {
            font-size: 15px;
          }

          .sv-desc {
            font-size: 12px;
          }
        }

        /* Legacy breakpoints for compatibility */
        @media(max-width:1100px){ .sv-grid{ grid-template-columns:repeat(3,1fr); } }
        @media(max-width:700px){  .sv-grid{ grid-template-columns:repeat(2,1fr); } }
        @media(max-width:480px){  .sv-grid{ grid-template-columns:1fr; } }

        /* ── Card ── */
        .sv-card {
          position: relative;
          width: 100%;
          background: #f8faff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 36px 28px 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          box-sizing: border-box;
          transition:
            transform 0.5s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.5s cubic-bezier(0.22,1,0.36,1),
            background 0.5s ease,
            border-color 0.5s ease;
          z-index: 0;
        }

        /* BIG hover — card scales up with smooth animation */
        .sv-card:hover {
          transform: scale(1.06) translateY(-8px);
          box-shadow:
            0 40px 80px rgba(37,99,235,0.22),
            0 0 0 2px #2563eb,
            0 8px 24px rgba(37,99,235,0.12);
          z-index: 10;
          background: #ffffff;
          border-color: #bfdbfe;
        }

        /* blue overlay tint on hover */
        .sv-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.06), rgba(56,189,248,0.03));
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
          z-index: 0;
        }
        .sv-card:hover .sv-card-overlay { opacity: 1; }

        /* top accent bar */
        .sv-card-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #2563eb;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s ease;
          z-index: 1;
        }
        .sv-card:hover .sv-card-accent { transform: scaleX(1); }

        .sv-card-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(16px,1.6vw,20px);
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 14px;
          position: relative;
          z-index: 1;
          transition: color .3s;
        }
        .sv-card:hover .sv-card-title { color: #2563eb; }

        .sv-card-desc {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.8;
          margin: 0 0 20px;
          flex: 1;
          position: relative;
          z-index: 1;
          transition: color .3s;
        }
        .sv-card:hover .sv-card-desc { color: #475569; }

        .sv-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }
        .sv-tag {
          font-size: 11px;
          font-weight: 600;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 3px 10px;
          border-radius: 999px;
          transition: background .3s, border-color .3s;
        }
        .sv-card:hover .sv-tag {
          background: #dbeafe;
          border-color: #93c5fd;
        }

        .sv-card-footer {
          position: relative;
          z-index: 1;
          margin-top: auto;
        }
        .sv-card-cta {
          font-size: 13px;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: 0.5px;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity .3s ease, transform .3s ease;
          display: inline-block;
        }
        .sv-card:hover .sv-card-cta {
          opacity: 1;
          transform: translateX(0);
        }

        @media(max-width:600px) {
          .sv-head { flex-direction:column; align-items:flex-start; gap: 12px; }
          .sv-head-bar { display: none; }
          .sv-card:hover { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  );
}

export default Services;
