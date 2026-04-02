import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import OurTeam from "./OurTeam";
import Products from "./Products";
import ServicesPage from "./ServicesPage";
import Industries from "./Industries";
import WhyChooseUs from "./WhyChooseUs";
import EduTech from "./EduTech";
import Blogs from "./Blogs";
import RD from "./RD";
import Contact from "./Contact";

const Home = () => {
  const heroVideoRef = useRef(null);
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Chronosphere\nAhead of Time Tech Venture";
  const highlightText = "Ahead of Time Tech Venture";
  const titlePrefix = fullTitle.replace(highlightText, "");

  useEffect(() => {
    if (!heroVideoRef.current) return;
    heroVideoRef.current.playbackRate = 0.75;
    const playPromise = heroVideoRef.current.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  }, []);

  useEffect(() => {
    let index = 0;
    const speed = 38;
    const timer = setInterval(() => {
      index += 1;
      setTypedTitle(fullTitle.slice(0, index));
      if (index >= fullTitle.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const insights = [
    {
      label: "Research Report | Banking",
      title: "Building the AI-Driven Bank of Tomorrow",
      desc: "Global banks are operationalizing AI to modernize legacy systems and elevate customer experience."
    },
    {
      label: "Whitepaper",
      title: "Demystifying AI in Telecom",
      desc: "Discover how AI and 6G converge to build adaptive, resilient telecom ecosystems."
    },
    {
      label: "Research Report | Retail",
      title: "Unlocking Retail Innovation with Store of the Future",
      desc: "Retail leaders are prioritizing tech that modernizes operations and improves loyalty."
    }
  ];

  const updates = [
    {
      label: "News | February 11, 2026",
      title: "Tech Mahindra & SynaXG Partner to Advance AI-Native, 6G-Ready Networks"
    },
    {
      label: "News | February 04, 2026",
      title: "Tech Mahindra Named a Leader in Healthcare Digital Services"
    },
    {
      label: "Press Release | January 29, 2026",
      title: "Tech Mahindra & FICO Partner to Accelerate AI-Driven Decisioning"
    }
  ];

  const capabilities = [
    "Artificial Intelligence",
    "Cloud and Infrastructure Services",
    "Digital Enterprise Applications",
    "Business Process Services",
    "Engineering Services",
    "TechM Consulting",
    "Experience Services",
    "Network Services"
  ];

  const industries = [
    "Banking & Financial Services",
    "Communications",
    "Education",
    "Energy & Utilities",
    "Healthcare & Life Sciences",
    "Hi Tech",
    "Insurance",
    "Manufacturing",
    "Media & Entertainment",
    "Oil & Gas",
    "Private Equity",
    "Professional Services",
    "Retail & Consumer Goods",
    "Travel, Transportation, Logistics & Hospitality"
  ];

  return (
    <section className="page-section page-home-v2" id="home">
      <section className="home-hero-v2">
        <video
          ref={heroVideoRef}
          className="home-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/chrono.jpg"
          aria-hidden="true"
        >
          <source src="/video/chronosphere.webm" type="video/webm" />
          <source src="/video/chronos.mp4" type="video/mp4" />
        </video>
        <div className="home-hero-overlay" />
        <div className="site-container hero-content">
          <div className="hero-copy">
            <h1 className="hero-animate hero-title hero-typewriter" aria-label={fullTitle}>
              {typedTitle.slice(0, titlePrefix.length)}
              <span className="hero-highlight">{typedTitle.slice(titlePrefix.length)}</span>
              <span className="type-caret" aria-hidden="true" />
            </h1>

            <p className="hero-intro hero-animate hero-subtitle">
              Chronosphere is a student-powered tech venture built on the belief that innovation doesn't wait for graduation.
              We design, build, and launch real-world technology products — from AI tools to digital platforms —
              driven by the next generation of thinkers, creators, and engineers.
            </p>
          </div>
        </div>
      </section>

      <section className="page-anchor" id="services">
        <ServicesPage />
      </section>

      <section className="page-anchor" id="products">
        <Products />
      </section>

      <section className="page-anchor" id="industries">
        <Industries />
      </section>

      <section className="page-anchor" id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section className="page-anchor" id="edu-tech">
        <EduTech />
      </section>

      <section className="page-anchor" id="about">
        <About />
      </section>

      <section className="page-anchor" id="team">
        <OurTeam />
      </section>

      <section className="page-anchor" id="blogs">
        <Blogs />
      </section>

      <section className="page-anchor" id="rd">
        <RD />
      </section>

      <section className="page-anchor" id="contact">
        <Contact />
      </section>

      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap");

          .page-home-v2 {
            font-family: "DM Sans", "Space Grotesk", sans-serif;
            background: #ffffff;
            color: #0b1220;
          }

          .page-anchor {
            scroll-margin-top: 96px;
          }

          .page-home-v2 h1,
          .page-home-v2 h2,
          .page-home-v2 h3 {
            font-family: "Space Grotesk", "DM Sans", sans-serif;
            letter-spacing: -0.02em;
          }

          .home-hero-v2 {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .home-hero-video {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
          }

          .home-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(5, 8, 16, 0.2) 0%, rgba(5, 8, 16, 0.85) 75%);
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            color: white;
            width: 100%;
            max-width: 100%;
            margin: 0;
            padding-left: clamp(16px, 4vw, 48px);
            padding-right: clamp(16px, 4vw, 48px);
            padding-top:380px;
            height: 100%;
          }

          .hero-copy {
         
            text-align: left;
            max-width: 720px;
          }

          .hero-kicker {
            display: inline-flex;
            padding: 6px 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.15);
            color: #ffffff;
            font-size: 12px;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 14px;
          }

          .hero-copy h1 {
            margin: 0 0 14px;
            font-size: clamp(48px, 7.5vw, 90px);
            line-height: 1.12;
            color: #ffffff;
            text-shadow: 0 10px 30px rgba(2, 6, 23, 0.65);
            letter-spacing: -0.01em;
            font-weight: 700;
          }

          .hero-typewriter {
            min-height: calc(2 * 1.12em);
            white-space: pre-wrap;
          }

          .hero-highlight {
            display: block;
            white-space: nowrap;
            font-size: clamp(27px, 5vw, 60px);
            font-weight: 600;
          }

          .type-caret {
            display: none;
          }

          @keyframes caretBlink {
            50% {
              opacity: 0;
            }
          }

          .hero-copy p {
            margin: 0 0 24px;
            line-height: 1.65;
            font-size: 17px;
            color: #ffffff;
            text-shadow: 0 8px 26px rgba(2, 6, 23, 0.55);
            max-width: 1000px;
          }

          .hero-animate {
            opacity: 0;
            transform: translateX(-26px);
            filter: blur(6px);
            animation: heroReveal 1.05s cubic-bezier(0.22, 0.8, 0.22, 1) forwards;
          }

          .hero-title {
            animation-delay: 0.15s;
          }

          .hero-subtitle {
            animation-delay: 0.3s;
          }

          .hero-contact {
            animation-delay: 0.5s;
          }

          .hero-actions {
            animation-delay: 0.7s;
          }

          @keyframes heroReveal {
            to {
              opacity: 1;
              transform: translateX(0);
              filter: blur(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-animate {
              animation: none;
              opacity: 1;
              transform: none;
              filter: none;
            }
          }

          .hero-kicker {
            color: #f1f5f9;
            text-shadow: 0 8px 20px rgba(2, 6, 23, 0.55);
          }

          .hero-contact {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #e5e7eb;
          }

          .hero-contact-number {
            color: #facc15;
            font-weight: 700;
          }

          .hero-actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
          }

          .hero-actions .btn-primary {
            background: #2563eb;
            border: 1px solid #2563eb;
            color: #ffffff;
          }

          .hero-actions .btn-outline {
            background: linear-gradient(180deg, rgb(6, 42, 74) 0%, rgb(4, 31, 58) 60%, rgb(3, 23, 44) 100%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #ffffff;
            font-weight: 700;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .hero-actions .btn-outline:hover {
            transform: none;
            box-shadow: none;
          }

          .home-feature,
          .home-about,
          .home-insights,
          .home-updates,
          .home-capabilities,
          .home-industries {
            padding: clamp(48px, 7vw, 80px) 0;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 28px;
            align-items: center;
          }

          .feature-media img {
            width: 100%;
            border-radius: 18px;
            box-shadow: 0 24px 50px rgba(15, 23, 42, 0.2);
          }

          .section-kicker {
            display: inline-flex;
            padding: 6px 12px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.08);
            color: #0f172a;
            font-size: 12px;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .feature-copy h2 {
            margin: 0 0 12px;
            font-size: clamp(28px, 4vw, 40px);
          }

          .feature-copy p {
            margin: 0 0 18px;
            color: #475569;
            line-height: 1.7;
          }

          .feature-link {
            background: transparent;
            border: none;
            color: #0f172a;
            font-weight: 600;
            cursor: pointer;
            padding: 0;
          }

          .about-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: clamp(24px, 6vw, 64px);
            align-items: center;
          }

          .about-media {
            position: relative;
          }

          .about-media img {
            width: 100%;
            border-radius: 22px;
            box-shadow: 0 26px 60px rgba(15, 23, 42, 0.18);
          }

          .about-stat {
            position: absolute;
            left: 18px;
            bottom: 18px;
            padding: 14px 18px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 18px 36px rgba(15, 23, 42, 0.15);
            display: grid;
            gap: 4px;
          }

          .about-stat-label {
            font-size: 11px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #0f172a;
            font-weight: 700;
          }

          .about-stat strong {
            font-size: 14px;
          }

          .about-copy h2 {
            margin: 0 0 14px;
            font-size: clamp(28px, 4vw, 40px);
          }

          .about-copy p {
            margin: 0 0 20px;
            color: #475569;
            line-height: 1.7;
          }

          .about-highlights {
            display: grid;
            gap: 14px;
            margin-bottom: 24px;
          }

          .about-highlights h3 {
            margin: 0 0 6px;
            font-size: 16px;
          }

          .about-highlights p {
            margin: 0;
            color: #64748b;
            font-size: 14px;
          }

          .about-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }

          .section-header {
            display: grid;
            gap: 8px;
            margin-bottom: 24px;
          }

          .section-header h2 {
            margin: 0;
            font-size: clamp(26px, 4vw, 36px);
          }

          .section-header p {
            margin: 0;
            color: #64748b;
          }

          .insights-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .insight-card {
            background: #ffffff;
            border-radius: 18px;
            padding: 20px;
            border: 1px solid rgba(148, 163, 184, 0.3);
            box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
            display: grid;
            gap: 10px;
          }

          .insight-card span {
            font-size: 11px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #0f172a;
            font-weight: 700;
          }

          .insight-card h3 {
            margin: 0;
            font-size: 18px;
          }

          .insight-card p {
            margin: 0;
            color: #475569;
            line-height: 1.6;
          }

          .insight-link {
            background: transparent;
            border: none;
            color: #0f172a;
            font-weight: 600;
            cursor: pointer;
            padding: 0;
            justify-self: flex-start;
          }

          .updates-list {
            display: grid;
            gap: 16px;
          }

          .update-row {
            display: grid;
            grid-template-columns: minmax(0, 220px) minmax(0, 1fr) auto;
            gap: 16px;
            align-items: center;
            padding: 16px;
            border-radius: 16px;
            border: 1px solid rgba(148, 163, 184, 0.3);
            background: #ffffff;
          }

          .update-row span {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            font-weight: 700;
            color: #0f172a;
          }

          .update-row h3 {
            margin: 0;
            font-size: 16px;
          }

          .update-link {
            background: transparent;
            border: none;
            color: #0f172a;
            font-weight: 600;
            cursor: pointer;
            padding: 0;
          }

          .cap-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
          }

          .cap-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 18px;
            border: 1px solid rgba(148, 163, 184, 0.3);
          }

          .cap-card h3 {
            margin: 0 0 8px;
            font-size: 16px;
          }

          .cap-card p {
            margin: 0;
            color: #64748b;
            line-height: 1.6;
            font-size: 13px;
          }

          .industry-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .industry-pill {
            padding: 8px 14px;
            border-radius: 999px;
            background: rgba(15, 23, 42, 0.08);
            color: #0f172a;
            font-size: 13px;
            font-weight: 600;
          }

          .page-home-v2 .btn-primary {
            background: #0b1220;
            border: 1px solid #0b1220;
            color: #ffffff;
          }

          .page-home-v2 .btn-outline {
            // background: transparent;
            // border: 1px solid #0b1220;
            // color: #0b1220;
          }

          @media (max-width: 1199.98px) {
            .hero-content {
              grid-template-columns: 1fr;
              gap: 48px;
            }

            .hero-title {
              font-size: clamp(36px, 6vw, 48px);
            }

            .hero-subtitle {
              font-size: clamp(16px, 2.5vw, 18px);
            }
          }

          @media (max-width: 991.98px) {
            .hero-section {
              padding: 120px 24px 80px;
            }

            .hero-content {
              gap: 40px;
            }

            .hero-title {
              font-size: clamp(32px, 7vw, 42px);
            }

            .hero-subtitle {
              font-size: clamp(15px, 2.2vw, 17px);
            }

            .feature-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .about-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }

            .cap-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 24px;
            }

            .insights-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }

          @media (max-width: 767.98px) {
            .hero-section {
              padding: 100px 20px 60px;
              text-align: center;
            }

            .hero-content {
              gap: 32px;
            }

            .hero-title {
              font-size: clamp(28px, 8vw, 36px);
            }

            .hero-subtitle {
              font-size: clamp(14px, 2vw, 16px);
              line-height: 1.6;
            }

            .hero-cta-group {
              flex-direction: column;
              gap: 16px;
              align-items: center;
            }

            .hero-cta-primary,
            .hero-cta-secondary {
              width: 100%;
              max-width: 280px;
            }

            .feature-grid {
              gap: 24px;
            }

            .feature-card {
              padding: 24px 20px;
            }

            .about-grid {
              gap: 24px;
            }

            .about-card {
              padding: 24px 20px;
            }

            .cap-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .insights-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .insights-card {
              padding: 20px;
            }

            .update-row {
              grid-template-columns: 1fr;
              gap: 16px;
              text-align: center;
            }
          }

          @media (max-width: 575.98px) {
            .hero-section {
              padding: 80px 16px 50px;
            }

            .hero-content {
              gap: 24px;
            }

            .hero-title {
              font-size: clamp(24px, 9vw, 32px);
            }

            .hero-subtitle {
              font-size: clamp(13px, 1.8vw, 15px);
            }

            .hero-cta-primary,
            .hero-cta-secondary {
              padding: 12px 24px;
              font-size: 14px;
            }

            .feature-card {
              padding: 20px 16px;
            }

            .feature-icon {
              width: 48px;
              height: 48px;
            }

            .about-card {
              padding: 20px 16px;
            }

            .insights-card {
              padding: 16px;
            }

            .cap-grid,
            .insights-grid {
              gap: 16px;
            }
          }

          @media (max-width: 1100px) {
            .hero-content {
              grid-template-columns: 1fr;
            }

            .feature-grid {
              grid-template-columns: 1fr;
            }

            .about-grid {
              grid-template-columns: 1fr;
            }

            .cap-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 720px) {
            .insights-grid {
              grid-template-columns: 1fr;
            }

            .update-row {
              grid-template-columns: 1fr;
              justify-items: start;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home;
