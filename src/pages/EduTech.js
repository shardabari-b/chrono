import React, { useEffect, useRef, useState } from "react";

const blocks = [
  {
    num: "01",
    title: "Finishing School",
    lead: "Bridging the gap between academic education and industry readiness.",
    desc: "An institution which prepares individuals with etiquette, soft skills, and social styling graces for a polished entry into the corporate world.",
    tags: ["Soft Skills Training", "Etiquette & Grooming", "Career Readiness", "Personality Transformation"],
    accent: "#2563eb",
  },
  {
    num: "02",
    title: "Workshops & Hackathons",
    lead: "Hands-on learning experiences that build real-world problem-solving skills.",
    desc: "We run intensive workshops and hackathons where students tackle live challenges, collaborate across disciplines, and build products that matter.",
    tags: ["Design Thinking", "AI & ML Sprints", "Product Builds", "Team Challenges"],
    accent: "#2563eb",
  },
  {
    num: "03",
    title: "Internships",
    lead: "Real work. Real impact. Real experience.",
    desc: "We provide internships in several modern courses so that anyone who reaches out learns from the best and polishes themselves with industry knowledge.",
    tags: ["Software Development", "UI/UX Design", "Data Science", "Digital Marketing"],
    accent: "#2563eb",
  },
  {
    num: "04",
    title: "STEM & Robotics Labs",
    lead: "Empowering the next generation of engineers and innovators.",
    desc: "Our STEM labs and robotics programs give students hands-on exposure to hardware, automation, and engineering principles from an early age.",
    tags: ["Robotics", "Electronics", "3D Printing", "IoT Projects"],
    accent: "#2563eb",
  },
  {
    num: "05",
    title: "Job Placement Assistance",
    lead: "From campus to career — we walk with you.",
    desc: "We help graduates in getting jobs in various MNCs so that they can become a good fit in the organization and land into dream jobs.",
    tags: ["Resume Building", "Mock Interviews", "MNC Referrals", "Career Coaching"],
    accent: "#2563eb",
  },
];

function EduTech() {
  const sectionRef = useRef(null);
  const [visBlocks, setVisBlocks] = useState([]);
  const [visLeft, setVisLeft] = useState(false);
  const leftRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target === leftRef.current) { setVisLeft(true); obs.unobserve(e.target); return; }
        const idx = Number(e.target.dataset.idx);
        setVisBlocks(v => { const n = [...v]; n[idx] = true; return n; });
        obs.unobserve(e.target);
      });
    }, { threshold: 0.12 });

    if (leftRef.current) obs.observe(leftRef.current);
    sectionRef.current?.querySelectorAll(".et-block").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="et-section" ref={sectionRef}>
      <div className="et-inner">

        {/* ── Left sticky ── */}
        <div
          className="et-left"
          ref={leftRef}
          style={{
            opacity: visLeft ? 1 : 0,
            transform: visLeft ? "translateY(0)" : "translateY(36px)",
            transition: "opacity .8s ease, transform .8s ease"
          }}
        >
          <p className="et-eyebrow">EDUCATION WITH TECH</p>
          <h2 className="et-heading">
            Shaping <span className="et-cyan">Future-Ready</span> Minds
          </h2>
           

          {/* Pill badges */}
           

          {/* Progress line */}
          <div className="et-progress-track">
            <div className="et-progress-line" />
            {blocks.map((_, i) => (
              <div
                key={i}
                className={`et-progress-dot ${visBlocks[i] ? "et-progress-dot--on" : ""}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          
        </div>

        {/* ── Right scrolling blocks ── */}
        <div className="et-right">
          {blocks.map((b, i) => (
            <div
              key={i}
              className="et-block"
              data-idx={i}
              style={{
                opacity: visBlocks[i] ? 1 : 0,
                transform: visBlocks[i] ? "translateX(0)" : "translateX(48px)",
                transition: `opacity .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s, transform .7s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s`
              }}
            >
              <div className="et-block-num" style={{ color: b.accent }}>{b.num}</div>
              <div className="et-block-body">
                <h3 className="et-block-title">{b.title}</h3>
                <p className="et-block-lead" style={{ color: b.accent }}>{b.lead}</p>
                <p className="et-block-desc">{b.desc}</p>
                <div className="et-tags">
                  {b.tags.map((t, j) => (
                    <span key={j} className="et-tag" style={{ borderColor: `${b.accent}40`, color: b.accent }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="et-block-accent-line" style={{ background: `linear-gradient(90deg, ${b.accent}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .et-section {
          background: #ffffff;
          padding: clamp(24px,3vw,40px) clamp(20px,4vw,72px) clamp(24px,3vw,40px);
          font-family: "DM Sans","Space Grotesk",sans-serif;
          width: 100%;
          overflow: hidden;
        }
	        .et-inner {
	         
	          grid-template-columns: 1fr 1.5fr;
	          gap: clamp(48px,6vw,96px);
	          align-items: start;
	        }

        /* Left */
        .et-left {
          position: sticky;
        
          align-self: start;
        }
	        .et-eyebrow {
	          display: inline-block;
	          font-family: "DM Sans", sans-serif;
	          font-size: 11px; font-weight: 700; letter-spacing: 3.5px;
	          text-transform: uppercase; color: #2563eb;
	          margin: 0 0 16px;
	        }
	        .et-heading {
	          font-family: "Space Grotesk",sans-serif;
	          font-size: clamp(32px, 5vw, 54px);
	          font-weight: 800; color: #0f172a;
	          line-height: 1.1; letter-spacing: -0.03em;
	          margin: 0 0 20px;
	        }
        .et-cyan { color: #2563eb; }
        .et-subtext {
          font-size: 15px; color: #475569;
          line-height: 1.8; margin: 0 0 28px;
          max-width: 360px;
        }

        /* Badges */
        .et-badges {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 36px;
        }
        .et-badge {
          font-size: 12px; font-weight: 600;
          color: #2563eb;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 999px;
          padding: 6px 14px;
          transition: background .3s, border-color .3s;
        }
        .et-badge:hover {
          background: #dbeafe;
          border-color: #2563eb;
        }

        /* Progress */
	        .et-progress-track {
	          position: relative;
	          display: flex;
	          flex-direction: column;
	          gap: 20px;
	          padding-left: 8px;
	          width: fit-content;
            display:none;
	        }
        .et-progress-line {
          position: absolute;
          left: 15px; top: 8px; bottom: 8px;
          width: 2px;
          background: #e2e8f0;
          border-radius: 2px;
          z-index: 0;
        }
        .et-progress-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 2px solid #cbd5e1;
          background: #ffffff;
          position: relative; z-index: 1;
          flex-shrink: 0;
          transition: border-color .4s, background .4s, transform .4s;
        }
        .et-progress-dot--on {
          border-color: #2563eb;
          background: #2563eb;
          transform: scale(1.2);
        }

        /* Right blocks */
        .et-right {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .et-block {
          position: relative;
          border-top: 1px solid #e2e8f0;
          padding: 40px 0 40px 0;
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 24px;
          align-items: start;
          overflow: hidden;
        }
        .et-block:last-child { border-bottom: 1px solid #e2e8f0; }

        .et-block-num {
          font-family: "Space Grotesk",sans-serif;
          font-size: 13px; font-weight: 800;
          letter-spacing: 1px;
          padding-top: 4px;
        }
        .et-block-title {
          font-family: "Space Grotesk",sans-serif;
          font-size: clamp(18px,2.2vw,26px);
          font-weight: 800; color: #0f172a;
          margin: 0 0 8px; letter-spacing: -0.02em;
        }
        .et-block-lead {
          font-size: 14px; font-weight: 600;
          margin: 0 0 12px; line-height: 1.5;
          color: #2563eb;
        }
        .et-block-desc {
          font-size: 14.5px; color: #475569;
          line-height: 1.8; margin: 0 0 18px;
        }

        /* Tags */
        .et-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .et-tag {
          font-size: 12px; font-weight: 600;
          border: 1px solid;
          border-radius: 6px;
          padding: 5px 12px;
          background: transparent;
        }

        /* accent line at bottom of block */
        .et-block-accent-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          transform: scaleX(0); transform-origin: left;
          transition: transform .6s cubic-bezier(0.22,1,0.36,1);
        }
        .et-block:hover .et-block-accent-line { transform: scaleX(1); }

        @media(max-width:900px) {
          .et-inner { grid-template-columns: 1fr; gap: 32px; }
          .et-left { position: static; margin-bottom: 8px; }
          .et-progress-track { display: none; }
        }
        @media(max-width:540px) {
          .et-section { padding: 40px 20px; }
          .et-block { grid-template-columns: 1fr; gap: 8px; }
          .et-block-num { font-size: 11px; }
          .et-tags { gap: 6px; }
        }
      `}</style>
    </section>
  );
}
export default EduTech;
