import React, { useEffect, useRef, useState } from "react";

const team = [
  { name: "Mr. Anand Prakash Chouksey", role: "Founder & Chairman", bio: "Visionary leader driving Chronosphere's mission to build real-world tech products powered by students.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Priya Verma", role: "Chief Technology Officer", bio: "Full-stack architect with a passion for scalable systems and AI-first product development.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Rohan Mehta", role: "Lead Engineer", bio: "Builds robust backend systems and leads the core engineering team across all product verticals.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Sneha Patel", role: "Frontend Developer", bio: "Crafts pixel-perfect, accessible interfaces with a focus on performance and user delight.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Aditya Joshi", role: "UI/UX Lead", bio: "Designs intuitive product experiences that bridge student creativity with industry standards.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Kavya Nair", role: "Product Designer", bio: "Translates complex problems into clean, human-centered design systems and prototypes.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Vikram Singh", role: "AI Research Lead", bio: "Leads applied AI research initiatives, from emotion sensing to adaptive learning algorithms.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Meera Iyer", role: "Data Scientist", bio: "Turns raw educational data into actionable insights using ML models and predictive analytics.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Karan Dubey", role: "DevOps Engineer", bio: "Keeps our infrastructure fast, secure, and always on — from CI/CD pipelines to cloud deployments.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Ananya Rao", role: "Marketing Lead", bio: "Builds Chronosphere's brand story and drives growth through content, campaigns, and community.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Siddharth Kulkarni", role: "Robotics Engineer", bio: "Designs and builds intelligent robotic systems and IoT solutions for real classroom environments.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
  { name: "Riya Desai", role: "Content Strategist", bio: "Crafts compelling narratives that communicate Chronosphere's vision to students and partners.", avatar: "/images/chrono.jpg", linkedin: "#", twitter: "#" },
];

export default function OurTeam() {
  const [visCards, setVisCards] = useState([]);
  const [visHead,  setVisHead]  = useState(false);
  const sectionRef = useRef(null);
  const headRef    = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisHead(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (headRef.current) obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const cardEls = sectionRef.current?.querySelectorAll(".ot2-card") || [];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx);
          setVisCards(v => { const n = [...v]; n[idx] = true; return n; });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    cardEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="dark-bg" style={{ background: "#060d1a", padding: "clamp(80px,10vw,130px) clamp(16px,4vw,80px)", fontFamily: "'Inter', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div ref={headRef} style={{
          marginBottom: "clamp(48px,6vw,72px)",
          opacity: visHead ? 1 : 0,
          transform: visHead ? "translateY(0)" : "translateY(32px)",
          transition: "opacity .75s ease, transform .75s ease",
        }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            Our Team
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(36px,5vw,58px)", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            The Minds Behind <span style={{ color: "#2563eb" }}>Chronosphere</span>
          </h2>
          <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: "560px", margin: 0 }}>
            A student-powered collective of engineers, designers, and researchers
            building real products that shape the future of education and technology.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="ot2-grid">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} i={i} visible={visCards[i]} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .ot2-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .ot2-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; } }
        @media (max-width: 480px)  { .ot2-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } }
      `}</style>
    </section>
  );
}

function TeamCard({ member, i, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className="ot2-card"
      data-idx={i}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: "14px", overflow: "hidden",
        aspectRatio: "3/4", cursor: "pointer",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.05)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity .65s cubic-bezier(0.22,1,0.36,1) ${(i % 4) * 0.09}s, transform .65s cubic-bezier(0.22,1,0.36,1) ${(i % 4) * 0.09}s`,
      }}>
      <img src={member.avatar} alt={member.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.08)" : "scale(1)", transition: "transform .7s cubic-bezier(0.22,1,0.36,1)" }} />

      {/* Default gradient + name */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(3,8,20,0.9) 0%, rgba(3,8,20,0.2) 50%, transparent 75%)", zIndex: 1, opacity: hovered ? 0 : 1, transition: "opacity .4s ease" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, padding: "20px 16px", opacity: hovered ? 0 : 1, transform: hovered ? "translateY(8px)" : "translateY(0)", transition: "opacity .3s ease, transform .3s ease" }}>
        <span style={{ display: "block", fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "15px", fontWeight: 700, color: "#fff" }}>{member.name}</span>
        <span style={{ display: "block", fontSize: "11px", fontWeight: 600, color: "#2563eb", marginTop: "3px" }}>{member.role}</span>
      </div>

      {/* Hover overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        background: "linear-gradient(180deg, rgba(6,42,74,0.95) 0%, rgba(3,15,35,0.98) 100%)",
        display: "flex", alignItems: "flex-end",
        transform: hovered ? "translateY(0)" : "translateY(100%)",
        transition: "transform .5s cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{ padding: "24px 18px", width: "100%" }}>
          <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', sans-serif", fontSize: "17px", fontWeight: 800, color: "#fff", margin: "0 0 4px", transform: hovered ? "translateY(0)" : "translateY(12px)", opacity: hovered ? 1 : 0, transition: "transform .45s ease .1s, opacity .45s ease .1s" }}>{member.name}</h3>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#60a5fa", margin: "0 0 12px", transform: hovered ? "translateY(0)" : "translateY(12px)", opacity: hovered ? 1 : 0, transition: "transform .45s ease .15s, opacity .45s ease .15s" }}>{member.role}</p>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", transform: hovered ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform .4s ease .2s", marginBottom: "12px" }} />
          <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: "0 0 14px", transform: hovered ? "translateY(0)" : "translateY(12px)", opacity: hovered ? 1 : 0, transition: "transform .45s ease .22s, opacity .45s ease .22s" }}>{member.bio}</p>
          <div style={{ display: "flex", gap: "8px", transform: hovered ? "translateY(0)" : "translateY(12px)", opacity: hovered ? 1 : 0, transition: "transform .45s ease .28s, opacity .45s ease .28s" }}>
            {[
              { href: member.linkedin, label: "LinkedIn", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              { href: member.twitter, label: "X", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} aria-label={label} style={{ width: "30px", height: "30px", borderRadius: "7px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "background .2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(37,99,235,0.4)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
