import React, { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Mr. Anand Prakash Chouksey",
    role: "Founder & Chairman",
    bio: "Visionary leader driving Chronosphere's mission to build real-world tech products powered by students.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Verma",
    role: "Chief Technology Officer",
    bio: "Full-stack architect with a passion for scalable systems and AI-first product development.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rohan Mehta",
    role: "Lead Engineer",
    bio: "Builds robust backend systems and leads the core engineering team across all product verticals.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sneha Patel",
    role: "Frontend Developer",
    bio: "Crafts pixel-perfect, accessible interfaces with a focus on performance and user delight.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aditya Joshi",
    role: "UI/UX Lead",
    bio: "Designs intuitive product experiences that bridge student creativity with industry standards.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Kavya Nair",
    role: "Product Designer",
    bio: "Translates complex problems into clean, human-centered design systems and prototypes.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Vikram Singh",
    role: "AI Research Lead",
    bio: "Leads applied AI research initiatives, from emotion sensing to adaptive learning algorithms.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Meera Iyer",
    role: "Data Scientist",
    bio: "Turns raw educational data into actionable insights using ML models and predictive analytics.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Karan Dubey",
    role: "DevOps Engineer",
    bio: "Keeps our infrastructure fast, secure, and always on — from CI/CD pipelines to cloud deployments.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ananya Rao",
    role: "Marketing Lead",
    bio: "Builds Chronosphere's brand story and drives growth through content, campaigns, and community.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Siddharth Kulkarni",
    role: "Robotics Engineer",
    bio: "Designs and builds intelligent robotic systems and IoT solutions for real classroom environments.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Riya Desai",
    role: "Content Strategist",
    bio: "Crafts compelling narratives that communicate Chronosphere's vision to students and partners.",
    avatar: "/images/chrono.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

function OurTeam() {
  const [visCards, setVisCards] = useState([]);
  const [visHead, setVisHead] = useState(false);
  const sectionRef = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisHead(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cardEls = sectionRef.current?.querySelectorAll(".ot-card") || [];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setVisCards((v) => { const n = [...v]; n[idx] = true; return n; });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    cardEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="ot-section" ref={sectionRef}>

      {/* ── Header ── */}
      <div
        className="ot-head"
        ref={headRef}
        style={{
          opacity: visHead ? 1 : 0,
          transform: visHead ? "translateY(0)" : "translateY(32px)",
          transition: "opacity .75s ease, transform .75s ease",
        }}
      >
        <span className="ot-eyebrow">Our Team</span>
        <h2 className="ot-title">
          The Minds Behind <span className="ot-accent">Chronosphere</span>
        </h2>
        <p className="ot-subtitle">
          A student-powered collective of engineers, designers, and researchers
          building real products that shape the future of education and technology.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className="ot-grid">
        {team.map((member, i) => (
          <article
            key={member.name}
            className="ot-card"
            data-idx={i}
            style={{
              opacity: visCards[i] ? 1 : 0,
              transform: visCards[i] ? "translateY(0)" : "translateY(48px)",
              transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${(i % 4) * 0.09}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${(i % 4) * 0.09}s`,
            }}
          >
            <img src={member.avatar} alt={member.name} className="ot-photo" />

            {/* Default bottom gradient + name strip */}
            <div className="ot-grad-default" />
            <div className="ot-strip">
              <span className="ot-strip-name">{member.name}</span>
              <span className="ot-strip-role">{member.role}</span>
            </div>

            {/* Hover overlay */}
            <div className="ot-overlay">
              <div className="ot-overlay-inner">
                <h3 className="ot-overlay-name">{member.name}</h3>
                <p className="ot-overlay-role">{member.role}</p>
                <div className="ot-overlay-divider" />
                <p className="ot-overlay-bio">{member.bio}</p>
                <div className="ot-overlay-socials">
                  <a href={member.linkedin} className="ot-soc-btn" aria-label="LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href={member.twitter} className="ot-soc-btn" aria-label="Twitter / X">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap");

        .ot-section {
          background: #060e1e;
          padding: clamp(72px, 10vw, 120px) clamp(24px, 5vw, 80px);
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── Header ── */
        .ot-head {
          text-align: left;
          margin-bottom: clamp(48px, 6vw, 72px);
        }
        .ot-eyebrow {
          display: inline-block;
          font-family: "DM Sans", sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 3.5px; text-transform: uppercase;
          color: #2563eb;
          background: rgba(37,99,235,0.1);
          border: 1px solid rgba(37,99,235,0.25);
          padding: 6px 16px; border-radius: 999px;
          margin-bottom: 20px;
        }
        .ot-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800; color: #f1f5f9;
          line-height: 1.1; letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .ot-accent {
          color: #2563eb;
        }
        .ot-subtitle {
          font-size: clamp(14px, 1.6vw, 17px);
          color: #64748b; line-height: 1.8;
          max-width: 560px; margin: 0;
        }

        /* ── Grid ── */
        .ot-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
        }

        /* ── Card ── */
        .ot-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .ot-photo {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform .7s cubic-bezier(0.22,1,0.36,1);
        }
        .ot-card:hover .ot-photo { transform: scale(1.08); }

        .ot-grad-default {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(3,8,20,0.88) 0%, rgba(3,8,20,0.2) 50%, transparent 75%);
          z-index: 1;
          transition: opacity .4s ease;
        }
        .ot-card:hover .ot-grad-default { opacity: 0; }

        .ot-strip {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: 20px 18px;
          display: flex; flex-direction: column; gap: 4px;
          transition: opacity .3s ease, transform .3s ease;
        }
        .ot-card:hover .ot-strip { opacity: 0; transform: translateY(8px); }
        .ot-strip-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px; font-weight: 700; color: #fff;
        }
        .ot-strip-role {
          font-size: 12px; font-weight: 500;
          color: #2563eb;
        }

        /* ── Hover overlay ── */
        .ot-overlay {
          position: absolute; inset: 0;
          z-index: 3;
          background: linear-gradient(180deg, rgba(6,42,74,0.95) 0%, rgba(3,15,35,0.98) 100%);
          display: flex; align-items: flex-end;
          transform: translateY(100%);
          transition: transform .5s cubic-bezier(0.22,1,0.36,1);
        }
        .ot-card:hover .ot-overlay { transform: translateY(0); }

        .ot-overlay-inner {
          padding: 26px 20px;
          display: flex; flex-direction: column; gap: 8px;
          width: 100%;
        }
        .ot-overlay-name {
          font-family: "Space Grotesk", sans-serif;
          font-size: 18px; font-weight: 800;
          color: #fff; margin: 0;
          transform: translateY(12px); opacity: 0;
          transition: transform .45s ease .1s, opacity .45s ease .1s;
        }
        .ot-card:hover .ot-overlay-name { transform: translateY(0); opacity: 1; }

        .ot-overlay-role {
          font-size: 11px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #2563eb; margin: 0;
          transform: translateY(12px); opacity: 0;
          transition: transform .45s ease .15s, opacity .45s ease .15s;
        }
        .ot-card:hover .ot-overlay-role { transform: translateY(0); opacity: 1; }

        .ot-overlay-divider {
          height: 1px;
          background: rgba(255,255,255,0.12);
          transform: scaleX(0); transform-origin: left;
          transition: transform .4s ease .2s;
        }
        .ot-card:hover .ot-overlay-divider { transform: scaleX(1); }

        .ot-overlay-bio {
          font-size: 13px; color: rgba(255,255,255,0.72);
          line-height: 1.65; margin: 0;
          transform: translateY(12px); opacity: 0;
          transition: transform .45s ease .22s, opacity .45s ease .22s;
        }
        .ot-card:hover .ot-overlay-bio { transform: translateY(0); opacity: 1; }

        .ot-overlay-socials {
          display: flex; gap: 8px; margin-top: 4px;
          transform: translateY(12px); opacity: 0;
          transition: transform .45s ease .28s, opacity .45s ease .28s;
        }
        .ot-card:hover .ot-overlay-socials { transform: translateY(0); opacity: 1; }

        .ot-soc-btn {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: #fff; text-decoration: none;
          transition: background .2s, border-color .2s, transform .2s;
        }
        .ot-soc-btn:hover {
          background: #062a4a; border-color: #2563eb;
          transform: translateY(-2px);
        }

        /* ── Responsive ── */
        /* Enhanced responsive breakpoints */
        @media (max-width: 1199.98px) {
          .ot-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
          .ot-section { padding: clamp(64px, 8vw, 100px) clamp(20px, 4vw, 60px); }
        }

        @media (max-width: 991.98px) {
          .ot-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
          .ot-section { padding: clamp(56px, 7vw, 80px) clamp(20px, 4vw, 50px); }
          .ot-title { font-size: clamp(28px, 5vw, 42px); }
          .ot-subtitle { font-size: clamp(13px, 1.4vw, 16px); }
        }

        @media (max-width: 767.98px) {
          .ot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
          .ot-section { padding: 48px 20px; }
          .ot-head { text-align: center; margin-bottom: clamp(32px, 5vw, 48px); }
          .ot-title { font-size: clamp(24px, 6vw, 36px); }
          .ot-subtitle { font-size: clamp(12px, 1.2vw, 15px); max-width: none; }
          .ot-card { aspect-ratio: 4 / 5; }
          .ot-strip { padding: 16px 16px; }
          .ot-overlay { padding: 20px 16px; }
        }

        @media (max-width: 575.98px) {
          .ot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .ot-section { padding: 40px 16px; }
          .ot-head { margin-bottom: 32px; }
          .ot-title { font-size: clamp(20px, 7vw, 32px); }
          .ot-subtitle { font-size: clamp(11px, 1vw, 14px); }
          .ot-card { aspect-ratio: 1; }
          .ot-strip { padding: 12px 12px; }
          .ot-strip-name { font-size: 12px; }
          .ot-strip-role { font-size: 11px; }
          .ot-overlay { padding: 16px 12px; }
          .ot-overlay-name { font-size: 16px; }
          .ot-overlay-role { font-size: 10px; }
          .ot-overlay-bio { font-size: 12px; }
          .ot-card:hover .ot-overlay { transform: translateY(0); }
        }

        /* Legacy breakpoints for compatibility */
        @media (max-width: 1200px) {
          .ot-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .ot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
          .ot-section { padding: 48px 20px; }
          .ot-head { text-align: left; }
        }
        @media (max-width: 480px) {
          .ot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .ot-strip-name { font-size: 13px; }
          .ot-card:hover .ot-overlay { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default OurTeam;
