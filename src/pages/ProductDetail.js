import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const productData = {
  lms: {
    title: "LMS + Courses + STEM",
    eyebrow: "Platform · Learning Management",
    hero: "The Complete Learning Platform",
    desc: "A modular learning platform where teachers build courses, track mastery, and deploy hands-on STEM experiences — all in one place.",
    color: "#2563eb",
    highlights: [
      { icon: "📚", label: "Course Builder", text: "Drag-and-drop course creation with multimedia support, quizzes, and assignments." },
      { icon: "📊", label: "Mastery Tracking", text: "Real-time dashboards showing student progress, completion rates, and skill gaps." },
      { icon: "🔬", label: "STEM Labs", text: "Integrated virtual and physical STEM lab modules with guided experiments." },
      { icon: "🏆", label: "Certifications", text: "Auto-generated certificates and badges on course completion." },
    ],
  },
  emotion: {
    title: "Emotion Sensing",
    eyebrow: "AI · Social-Emotional Learning",
    hero: "AI That Reads the Room",
    desc: "AI-powered real-time engagement signals that personalize lessons and support social-emotional learning outcomes.",
    color: "#2563eb",
    highlights: [
      { icon: "😊", label: "Engagement Detection", text: "Real-time facial and behavioral cues to measure student attention and mood." },
      { icon: "🎯", label: "Adaptive Content", text: "Lessons automatically adjust difficulty and pace based on emotional signals." },
      { icon: "📈", label: "SEL Reports", text: "Weekly social-emotional learning reports for teachers and counselors." },
      { icon: "🔒", label: "Privacy First", text: "On-device processing ensures student data never leaves the classroom." },
    ],
  },
  attendance: {
    title: "Attendance System",
    eyebrow: "Automation · Smart Check-in",
    hero: "Zero-Effort Attendance",
    desc: "Automate check-in with QR, biometric, and badge-based systems. Reduce manual work and surface at-risk learner alerts.",
    color: "#2563eb",
    highlights: [
      { icon: "📱", label: "QR Check-in", text: "Students scan a QR code on entry — attendance logged instantly." },
      { icon: "👆", label: "Biometric Support", text: "Fingerprint and face-ID integration for secure, contactless attendance." },
      { icon: "🚨", label: "At-Risk Alerts", text: "Automatic alerts to parents and counselors when attendance drops below threshold." },
      { icon: "📋", label: "Compliance Reports", text: "One-click export of attendance records for regulatory compliance." },
    ],
  },
  slm: {
    title: "Student Lifecycle Management",
    eyebrow: "Management · Analytics",
    hero: "Every Student's Journey, Mapped",
    desc: "Track every learner's journey from enrollment to achievement with smart dashboards and predictive analytics.",
    color: "#2563eb",
    highlights: [
      { icon: "🎓", label: "Enrollment Tracking", text: "Manage admissions, onboarding, and document collection in one workflow." },
      { icon: "🔮", label: "Predictive Analytics", text: "AI flags students at risk of dropping out before it happens." },
      { icon: "📅", label: "Milestone Management", text: "Set and track academic milestones, goals, and intervention plans." },
      { icon: "🤝", label: "Parent Portal", text: "Real-time visibility for parents into their child's academic journey." },
    ],
  },
  appdev: {
    title: "App Development",
    eyebrow: "Development · Mobile & Web",
    hero: "From Idea to App Store",
    desc: "End-to-end mobile and web app development — from user research and prototyping to cross-platform publishing.",
    color: "#2563eb",
    highlights: [
      { icon: "🎨", label: "UI/UX Design", text: "User research, wireframes, and high-fidelity prototypes before a line of code." },
      { icon: "📱", label: "Cross-Platform", text: "React Native and Flutter apps that run on iOS and Android from one codebase." },
      { icon: "🌐", label: "Web Apps", text: "Responsive React and Next.js web applications with modern architecture." },
      { icon: "🚀", label: "Publishing Support", text: "App Store and Play Store submission, review, and launch support." },
    ],
  },
  gamedev: {
    title: "Game Development & Animation",
    eyebrow: "Creative · Games & Motion",
    hero: "Build Games. Tell Stories.",
    desc: "Project-based courses delivering portfolio-ready games, animations, and motion experiences using industry tools.",
    color: "#2563eb",
    highlights: [
      { icon: "🎮", label: "Unity & Unreal", text: "Hands-on projects using industry-standard game engines from day one." },
      { icon: "🎬", label: "3D Animation", text: "Character rigging, motion capture basics, and cinematic storytelling." },
      { icon: "🖼️", label: "2D & Pixel Art", text: "Sprite creation, tilemaps, and 2D physics for indie game development." },
      { icon: "💼", label: "Portfolio Projects", text: "Every student ships a complete, playable game to their portfolio." },
    ],
  },
  hackathons: {
    title: "Hackathons",
    eyebrow: "Events · Innovation Challenges",
    hero: "Build Fast. Ship Real.",
    desc: "Curated challenge libraries, judging rubrics, virtual expo halls, and media-ready project portfolios for student innovators.",
    color: "#2563eb",
    highlights: [
      { icon: "⚡", label: "Challenge Library", text: "100+ curated problem statements across AI, sustainability, health, and more." },
      { icon: "⚖️", label: "Judging Platform", text: "Structured rubrics, mentor scoring, and live leaderboards." },
      { icon: "🏛️", label: "Virtual Expo Hall", text: "Students present projects to industry judges in a live virtual showcase." },
      { icon: "📰", label: "Media Portfolios", text: "Auto-generated project pages shareable with colleges and employers." },
    ],
  },
  fdps: {
    title: "FDPS on AI",
    eyebrow: "Education · Faculty Development",
    hero: "Upskill the Educators",
    desc: "Faculty Development Programs on AI — upskilling educators with hands-on workshops and certification tracks.",
    color: "#2563eb",
    highlights: [
      { icon: "🤖", label: "AI Fundamentals", text: "From machine learning basics to prompt engineering — no prior experience needed." },
      { icon: "🏫", label: "Classroom Integration", text: "Practical strategies for embedding AI tools into existing curricula." },
      { icon: "📜", label: "Certification", text: "Industry-recognized certificates on completion of each module." },
      { icon: "👥", label: "Peer Learning", text: "Cohort-based learning with faculty from institutions across the country." },
    ],
  },
  expo: {
    title: "Expo / World Records",
    eyebrow: "Events · Global Showcases",
    hero: "Showcase Innovation at Scale",
    desc: "Host global showcases and record-breaking events that amplify student innovation and connect with industry leaders.",
    color: "#2563eb",
    highlights: [
      { icon: "🌍", label: "Global Reach", text: "Events streamed and attended by participants from 20+ countries." },
      { icon: "🏅", label: "World Records", text: "Guinness and India Book of Records attempts organized for student teams." },
      { icon: "🤝", label: "Industry Connect", text: "Direct networking with CXOs, investors, and innovation leaders." },
      { icon: "📡", label: "Live Broadcast", text: "Professional production and live streaming for maximum visibility." },
    ],
  },
  partnerships: {
    title: "Industries & Partnerships",
    eyebrow: "Network · Collaborations",
    hero: "Where Education Meets Industry",
    desc: "Co-branded learning pathways, internship pipelines, research collaborations, and award programs with global partners.",
    color: "#2563eb",
    highlights: [
      { icon: "🏢", label: "Co-branded Pathways", text: "Custom learning tracks built with and endorsed by industry partners." },
      { icon: "💼", label: "Internship Pipelines", text: "Direct placement pipelines connecting top students with partner companies." },
      { icon: "🔬", label: "Research Collaborations", text: "Joint R&D projects between student teams and corporate innovation labs." },
      { icon: "🥇", label: "Award Programs", text: "Partner-sponsored awards recognizing outstanding student achievements." },
    ],
  },
  robotics: {
    title: "Robotics & IoT",
    eyebrow: "Hardware · Edge AI",
    hero: "Build the Physical Future",
    desc: "Hands-on robotics, edge-AI, and IoT projects with plug-and-play hardware kits, simulators, and real-time dashboards.",
    color: "#2563eb",
    highlights: [
      { icon: "🤖", label: "Robotics Kits", text: "Plug-and-play hardware kits with Arduino, Raspberry Pi, and custom PCBs." },
      { icon: "🌐", label: "IoT Projects", text: "Build connected devices that send real data to cloud dashboards." },
      { icon: "🧠", label: "Edge AI", text: "Deploy machine learning models directly on microcontrollers and edge devices." },
      { icon: "📊", label: "Real-time Dashboards", text: "Live sensor data visualization and remote device control interfaces." },
    ],
  },
};

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = productData[id];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!p) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center", fontFamily: "DM Sans, sans-serif" }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/products")} style={{ marginTop: 16, padding: "10px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
          View All Products
        </button>
      </div>
    );
  }

  return (
    <div className="pd-page">
      <div className="pd-hero" style={{ "--c": p.color }}>
        <div className="pd-hero-bg" />
        <div className="pd-hero-inner">
          <button className="pd-back" onClick={() => navigate("/products")}>← All Products</button>
          <span className="pd-eyebrow">{p.eyebrow}</span>
          <h1 className="pd-hero-title">{p.hero}</h1>
          <p className="pd-hero-desc">{p.desc}</p>
        </div>
      </div>

      <div className="pd-body">
        <div className="pd-section-label">Key Features</div>
        <div className="pd-grid">
          {p.highlights.map((h, i) => (
            <div key={i} className="pd-card" style={{ "--d": `${i * 0.1}s`, "--c": p.color }}>
              <div className="pd-card-icon">{h.icon}</div>
              <h3 className="pd-card-title">{h.label}</h3>
              <p className="pd-card-text">{h.text}</p>
              <div className="pd-card-bar" />
            </div>
          ))}
        </div>

        <div className="pd-cta">
          <h2 className="pd-cta-title">Interested in <span style={{ color: p.color }}>{p.title}</span>?</h2>
          <p className="pd-cta-sub">Get in touch and we'll walk you through a live demo.</p>
          <div className="pd-cta-actions">
            <button className="pd-btn-primary" onClick={() => navigate("/contact")}>Get a Demo</button>
            <button className="pd-btn-outline" onClick={() => navigate("/products")}>← Back to Products</button>
          </div>
        </div>
      </div>

      <style>{`
        .pd-page { font-family: "DM Sans","Space Grotesk",sans-serif; background:#fff; min-height:100vh; }

        .pd-hero {
          position:relative;
          background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          padding: clamp(100px,12vw,160px) clamp(24px,6vw,100px) clamp(64px,8vw,100px);
          overflow:hidden;
        }
        .pd-hero-bg {
          position:absolute; inset:0;
          background: radial-gradient(ellipse at 70% 50%, rgba(37,99,235,0.25), transparent 65%);
          pointer-events:none;
        }
        .pd-hero-inner { position:relative; z-index:1; max-width:800px; }
        .pd-back {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15);
          color:#94a3b8; font-size:13px; font-weight:600;
          padding:8px 16px; border-radius:999px; cursor:pointer;
          margin-bottom:28px; transition:background .2s,color .2s; font-family:inherit;
        }
        .pd-back:hover { background:rgba(255,255,255,0.14); color:#fff; }
        .pd-eyebrow {
          display:block; font-size:11px; font-weight:700;
          letter-spacing:3px; text-transform:uppercase;
          color:#2563eb; margin-bottom:16px;
        }
        .pd-hero-title {
          font-family:"Space Grotesk",sans-serif;
          font-size:clamp(36px,6vw,72px); font-weight:800;
          color:#fff; line-height:1.06; letter-spacing:-0.03em; margin:0 0 20px;
        }
        .pd-hero-desc {
          font-size:clamp(15px,1.8vw,18px); color:#ffffff;
          line-height:1.8; margin:0; max-width:640px;
        }

        .pd-body { max-width:1200px; margin:0 auto; padding:clamp(56px,8vw,100px) clamp(24px,6vw,80px); }
        .pd-section-label {
          font-size:11px; font-weight:700; letter-spacing:3px;
          text-transform:uppercase; color:#2563eb; margin-bottom:32px;
        }
        .pd-grid {
          display:grid; grid-template-columns:repeat(2,1fr);
          gap:24px; margin-bottom:72px;
        }
        .pd-card {
          position:relative; background:#f8faff;
          border:1px solid #e2e8f0; border-radius:20px;
          padding:36px 32px; overflow:hidden;
          animation:pdCardIn .6s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay:var(--d,0s);
          transition:transform .3s,box-shadow .3s,border-color .3s;
        }
        .pd-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(37,99,235,.12); border-color:#bfdbfe; }
        @keyframes pdCardIn { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        .pd-card-icon {
          font-size:40px; width:72px; height:72px;
          background:#fff; border:1px solid #e2e8f0; border-radius:16px;
          display:flex; align-items:center; justify-content:center;
          margin-bottom:20px; transition:transform .3s;
        }
        .pd-card:hover .pd-card-icon { transform:scale(1.1) rotate(-4deg); }
        .pd-card-title { font-family:"Space Grotesk",sans-serif; font-size:20px; font-weight:700; color:#0f172a; margin:0 0 10px; }
        .pd-card-text { font-size:14px; color:#64748b; line-height:1.75; margin:0; }
        .pd-card-bar {
          position:absolute; bottom:0; left:0; right:0; height:3px;
          background:#2563eb;
          transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
        }
        .pd-card:hover .pd-card-bar { transform:scaleX(1); }

        .pd-cta { background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%); border-radius:24px; padding:clamp(40px,6vw,72px); text-align:center; }
        .pd-cta-title { font-family:"Space Grotesk",sans-serif; font-size:clamp(24px,3.5vw,40px); font-weight:800; color:#fff; margin:0 0 14px; letter-spacing:-0.02em; }
        .pd-cta-sub { font-size:16px; color:#ffffff; margin:0 0 32px; line-height:1.7; }
        .pd-cta-actions { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .pd-btn-primary { padding:14px 32px; border-radius:999px; color:#fff; border:none; font-size:15px; font-weight:700; cursor:pointer; font-family:inherit; transition:opacity .2s,transform .2s; }
        .pd-btn-primary:hover { opacity:.88; transform:translateY(-2px); }
        .pd-btn-outline { padding:14px 32px; border-radius:999px; background:transparent; border:1px solid rgba(255,255,255,0.2); color:#fff; font-size:15px; font-weight:600; cursor:pointer; font-family:inherit; transition:background .2s; }
        .pd-btn-outline:hover { background:rgba(255,255,255,0.08); }

        @media(max-width:700px) {
          .pd-grid { grid-template-columns:1fr; }
          .pd-hero { padding:100px 24px 56px; }
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
