import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".about-reveal"));
    if (!("IntersectionObserver" in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const heroSlides = ["/images/chrono.jpg", "/images/today.jpg", "/images/chrono.jpg", "/images/today.jpg"];
  const whatItems = [
    {
      title: "Artificial Intelligence",
      text: "Empowering students with cutting-edge AI technologies, machine learning algorithms, and intelligent systems that solve real-world problems.",
      image: "/images/chrono.jpg",
    },
    {
      title: "Robotics & Automation",
      text: "Building intelligent robots and automated systems that bridge the gap between digital innovation and physical world applications.",
      image: "/images/chrono.jpg",
    },
    {
      title: "Web & Mobile Engineering",
      text: "Creating responsive, scalable, and user-friendly applications that deliver seamless experiences across all platforms.",
      image: "/images/chrono.jpg",
    },
    {
      title: "IoT Systems",
      text: "Connecting the physical and digital worlds through smart devices, sensors, and data-driven insights for intelligent decision-making.",
      image: "/images/chrono.jpg",
    },
    {
      title: "Data Science",
      text: "Transforming raw data into actionable insights using advanced analytics, visualization, and predictive modeling techniques.",
      image: "/images/chrono.jpg",
    },
    {
      title: "Game Development",
      text: "Designing immersive gaming experiences with stunning graphics, engaging gameplay, and innovative mechanics that captivate players.",
      image: "/images/chrono.jpg",
    }
  ];

  return (
    <section className="page-section page-about-v10">
      <section className="about-hero">
        <div className="about-hero-content about-reveal" style={{ "--reveal-delay": "0.05s" }}>
          <div className="about-kicker-row">
            <span className="about-kicker-line" />
            <span className="about-kicker">About Us</span>
          </div>
          <h1>We are <span style={{color:'#2563eb'}}>Chronosphere</span></h1>
          <p>
            We are student-led changemakers—building real products, running research experiments, and helping schools
            adopt AI at meaningful scale. Every sprint is a proving ground for the next generation of engineers and
            founders.
          </p>
          <p>
            We provide full-stack development, product design, and implementation support for education partners. Our
            teams move from research to launch with clarity, rigor, and momentum.
          </p>
        </div>
        <div className="about-hero-media about-reveal" style={{ "--reveal-delay": "0.12s" }} aria-hidden="true">
          <div className="about-media-panel">
            {heroSlides.slice(0, 5).map((src, index) => (
              <img
                key={`${src}-${index}`}
                className="about-media-slide"
                src={src}
                alt=""
                loading="lazy"
                style={{ animationDelay: `${index * 3.6}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="site-container">
          <div className="vision-header">
             
             
          </div>
        </div>
        <div className="vision-full">
          <div className="vision-grid">
            {[
              {
                title: "Purpose",
                text:
                  "Drive positive change in the lives of learners and communities by putting students at the center.",
                img: "/images/chrono.jpg",
                hoverImg: "/images/today.jpg"
              },
              {
                title: "Promise",
                text:
                  "Show up with clarity, care, and craftsmanship so partners can move from ideas to impact.",
                img: "/images/today.jpg",
                hoverImg: "/images/chrono.jpg"
              },
              {
                title: "Mission",
                text:
                  "Build trusted partnerships that turn research, design, and engineering into measurable outcomes.",
                img: "/images/chrono.jpg",
                hoverImg: "/images/today.jpg"
              },
              {
                title: "Values",
                text:
                  "Integrity, curiosity, and inclusion guide how we build—so every product serves people first.",
                img: "/images/today.jpg",
                hoverImg: "/images/chrono.jpg"
              }
            ].map((item, index) => (
              <article
                key={item.title}
                className="vision-card about-reveal"
                style={{ "--reveal-delay": `${index * 0.08 + 0.12}s` }}
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

      <section className="about-what">
        <div className="site-container">
          <div className="what-top">
            <div className="what-header about-reveal" style={{ "--reveal-delay": "0.05s" }}>
              <h2 className="about-reveal">What we do</h2>
              <p className="what-subtitle">Explore our domains of expertise and innovation</p>
            </div>
          </div>
          <div className="what-grid">
            {whatItems.map((item, index) => (
              <article
                key={item.title}
                className="what-slide about-reveal"
                style={{ "--reveal-delay": `${index * 0.08 + 0.12}s` }}
              >
                <div className="what-icon-wrapper">
                  <div className="what-icon-bg"></div>
                  <img src={item.image} alt={item.title} className="what-image" loading="lazy" />
                </div>
                <div className="what-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="what-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="what-border-animation"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap");

          .page-about-v10 {
            font-family: "DM Sans", sans-serif;
            background: #ffffff;
            color: #0f172a;
          }

          .about-hero {
            position: relative;
            min-height: 600px;
            height: 100vh;
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
            align-items: center;
            gap: clamp(24px, 6vw, 64px);
            padding: 0 clamp(16px, 6vw, 80px);
            overflow: hidden;
          }

          .about-hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: radial-gradient(circle at top left, rgba(15, 23, 42, 0.08), transparent 55%),
              radial-gradient(circle at 65% 10%, rgba(37, 99, 235, 0.14), transparent 55%);
            opacity: 0.9;
            pointer-events: none;
            z-index: 0;
          }

          .about-hero::after {
            content: "";
            position: absolute;
            right: -8%;
            top: 0;
            width: 55%;
            height: 100%;
            background: linear-gradient(180deg, rgba(37, 99, 235, 0.12), rgba(56, 189, 248, 0.08));
            pointer-events: none;
            z-index: 0;
          }

          .about-hero-content {
            position: relative;
            z-index: 2;
            max-width: 640px;
          }

          .about-kicker-row {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
          }

          .about-kicker-line {
            width: 22px;
            height: 2px;
            background: #2563eb;
            display: inline-block;
          }

          .about-kicker {
            display: inline-block;
            font-family: "DM Sans", sans-serif;
            font-size: 11px;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            font-weight: 700;
            color: #2563eb;
          }

          .about-hero-content h1 {
            margin: 0 0 12px;
            font-family: "Space Grotesk", sans-serif;
            font-size: clamp(32px, 5vw, 54px);
            font-weight: 800;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: -0.03em;
          }

          .about-hero-content p {
            margin: 0;
            font-size: clamp(16px, 2vw, 20px);
            color: rgba(15, 23, 42, 0.82);
            line-height: 1.7;
            max-width: 520px;
          }

          .about-hero-content p + p {
            margin-top: 16px;
          }

          .about-hero-media {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .about-media-panel {
            width: min(100%, 620px);
            aspect-ratio: 4 / 3;
           
            overflow: hidden;
            box-shadow: 0 30px 70px rgba(15, 23, 42, 0.22), 0 26px 60px rgba(37, 99, 235, 0.25);
            background: #0f172a;
            position: relative;
            z-index: 2;
          }

          .about-media-slide {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            position: absolute;
            inset: 0;
            opacity: 0;
            transform: scale(1.04);
            animation: aboutSlideFade 18s infinite;
          }

          @keyframes aboutSlideFade {
            0% {
              opacity: 0;
              transform: scale(1.04);
            }
            8% {
              opacity: 1;
              transform: scale(1);
            }
            28% {
              opacity: 1;
              transform: scale(1.01);
            }
            36% {
              opacity: 0;
              transform: scale(1.03);
            }
            100% {
              opacity: 0;
              transform: scale(1.04);
            }
          }

          .about-reveal {
            opacity: 0;
            transform: translateY(18px);
            transition: opacity 0.7s ease, transform 0.7s ease;
            transition-delay: var(--reveal-delay, 0s);
          }

          .about-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .about-vision {
            padding-top: clamp(40px, 6vw, 90px);
          }

          .about-vision .site-container {
            max-width: 100%;
            width: 100%;
            padding: 0 clamp(16px, 6vw, 80px);
          }

          .vision-full {
            width: 100%;
          }

          .vision-header {
            max-width: 560px;
            margin-bottom: 28px;
            text-align: left;
            margin-left: 0;
          }

          .vision-header h2 {
            margin: 10px 0 12px;
            font-family: "Space Grotesk", sans-serif;
            font-size: clamp(32px, 5vw, 54px);
            color: #0f172a;
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.03em;
            position: relative;
            display: inline-block;
          }

          .vision-header h2::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 3px;
            background: rgba(37, 99, 235, 0.6);
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0;
          }

          .vision-header h2.about-reveal.is-visible::after {
            animation: visionUnderline 0.8s ease forwards;
          }

          @keyframes visionUnderline {
            from {
              transform: scaleX(0);
              opacity: 0;
            }
            to {
              transform: scaleX(1);
              opacity: 1;
            }
          }

          .vision-header p {
            margin: 0;
            color: rgba(15, 23, 42, 0.7);
            line-height: 1.7;
            font-size: clamp(15px, 1.6vw, 18px);
            font-weight: 400;
          }

          .vision-grid {
            display: flex;
            min-height: clamp(320px, 42vw, 520px);
            border-radius: 0;
            overflow: hidden;
          }

          .vision-card {
            position: relative;
            flex: 1;
            min-width: 0;
            min-height: 320px;
            overflow: hidden;
            background: #0f172a;
            transition: flex 0.7s ease, opacity 0.4s ease;
          }

          .vision-card:not(:last-child) {
            border-right: 1px solid rgba(255, 255, 255, 0.18);
          }

          .vision-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: saturate(0.9) brightness(0.75);
            transform: scale(1.02);
            transition: transform 0.6s ease, filter 0.6s ease, opacity 0.6s ease;
            opacity: 1;
          }

          .vision-bg-hover {
            opacity: 0;
          }

          .vision-overlay {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 28px;
            color: #ffffff;
            background: linear-gradient(90deg, rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.2));
            transition: background 0.4s ease;
          }

          .vision-title {
            font-size: 14px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 12px;
            transition: transform 0.4s ease, opacity 0.4s ease;
          }

          .vision-text {
            margin: 0;
            color: rgba(255, 255, 255, 0.88);
            line-height: 1.6;
            opacity: 0;
            transform: translateY(12px);
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .vision-grid:hover .vision-card {
            flex: 0 0 0%;
            opacity: 0;
            pointer-events: none;
          }

          .vision-grid:hover .vision-card:hover {
            flex: 1 1 100%;
            opacity: 1;
            pointer-events: auto;
          }

          .vision-card:hover .vision-bg {
            transform: scale(1.12);
            filter: saturate(1) brightness(0.95);
          }

          .vision-card:hover .vision-bg:not(.vision-bg-hover) {
            opacity: 0;
          }

          .vision-card:hover .vision-bg-hover {
            opacity: 1;
          }

          .vision-card:hover .vision-overlay {

          }

          .vision-card:hover .vision-text {
            opacity: 1;
            transform: translateY(0);
          }

          .vision-card:hover .vision-title {
            transform: translateY(-2px);
          }

          .about-what {
            padding: clamp(60px, 10vw, 100px) 0;
            display: flex;
            align-items: center;
          }

          .about-what .site-container {
            max-width: 100%;
            width: 100%;
            padding: 0 clamp(16px, 6vw, 80px);
          }

          .what-top {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 20px;
            margin-bottom: 48px;
          }

          .what-header h2 {
            margin: 0 0 12px;
            font-family: "Space Grotesk", sans-serif;
            font-size: clamp(32px, 5vw, 54px);
            font-weight: 800;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: -0.03em;
            position: relative;
            display: inline-block;
          }

          .what-header h2::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 3px;
            background: rgba(37, 99, 235, 0.6);
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0;
          }

          .what-header h2.about-reveal.is-visible::after {
            animation: visionUnderline 0.8s ease forwards;
          }

          .what-subtitle {
            margin: 0;
            font-size: clamp(16px, 1.8vw, 18px);
            color: rgba(15, 23, 42, 0.7);
            line-height: 1.6;
          }

          .what-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            padding: 0 0 clamp(40px, 8vw, 80px);
            align-items: stretch;
          }

          .what-slide {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            border: 2px solid rgba(5, 32, 94, 0.08);
            background: #ffffff;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            opacity: 0;
            display: flex;
            flex-direction: column;
          }

          .what-slide.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            transition-delay: var(--reveal-delay, 0s);
          }

          .what-icon-wrapper {
            position: relative;
            width: 100%;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8faff;
            overflow: hidden;
            transition: all 0.6s ease;
          }

          .what-slide:hover .what-icon-wrapper {
            background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          }

          .what-icon-bg {
            display: none;
          }

          .what-image {
            position: relative;
            
            object-fit: contain;
            z-index: 2;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
          }

          .what-slide:hover .what-image {
            transform: scale(1.15) translateY(-8px);
            filter: drop-shadow(0 8px 20px rgba(255, 255, 255, 0.3)) brightness(1.1);
          }

          .what-overlay {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 32px 28px;
            background: #ffffff;
            color: #0f172a;
            flex: 1;
            transition: all 0.6s ease;
          }



          .what-slide:hover .what-overlay {
            background: linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%);
          }

          .what-overlay h3 {
            margin: 0 0 16px;
            font-size: clamp(20px, 2.2vw, 24px);
            font-weight: 700;
            color: #0f172a;
            line-height: 1.3;
            transition: color 0.6s ease;
          }

          .what-slide:hover .what-overlay h3 {
            color: #ffffff;
          }

          .what-overlay p {
            margin: 0 0 20px;
            line-height: 1.7;
            font-size: 15px;
            color: rgba(15, 23, 42, 0.7);
            flex: 1;
            transition: color 0.6s ease;
          }

          .what-slide:hover .what-overlay p {
            color: rgba(255, 255, 255, 0.85);
          }

          .what-arrow {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #ffffff;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.4s ease;
          }

          .what-slide:hover .what-arrow {
            opacity: 1;
            transform: translateX(0);
          }

          .what-border-animation {
            display: none;
          }

          .what-slide:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25);
            border-color: transparent;
          }

          @media (max-width: 1199.98px) {
            .about-hero {
              padding-top: 120px;
              padding-bottom: 60px;
            }

            .about-hero-content h1 {
              font-size: clamp(42px, 7vw, 52px);
            }

            .about-hero-content p {
              font-size: clamp(16px, 2vw, 18px);
            }

            .vision-grid {
              gap: 32px;
            }

            .what-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
            }
          }

          @media (max-width: 991.98px) {
            .about-hero {
              padding-top: 100px;
              padding-bottom: 50px;
              gap: 40px;
            }

            .about-hero-content h1 {
              font-size: clamp(36px, 8vw, 46px);
            }

            .about-hero-content p {
              font-size: clamp(15px, 1.8vw, 17px);
            }

            .vision-grid {
              gap: 28px;
            }

            .vision-card {
              padding: 28px;
            }

            .what-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }

            .what-card {
              padding: 24px;
            }
          }

          @media (max-width: 767.98px) {
            .about-hero {
              grid-template-columns: 1fr;
              height: auto;
              padding-top: 90px;
              padding-bottom: 40px;
              gap: 32px;
              text-align: center;
            }

            .about-hero-content {
              max-width: 100%;
            }

            .about-hero-content h1 {
              font-size: clamp(32px, 9vw, 40px);
            }

            .about-hero-content p {
              font-size: clamp(14px, 1.6vw, 16px);
              line-height: 1.6;
            }

            .about-hero-media {
              justify-content: center;
            }

            .about-media-panel {
              width: 100%;
              max-width: 400px;
            }

            .vision-grid {
              flex-direction: column;
              gap: 24px;
            }

            .vision-card {
              flex: none;
              padding: 24px 20px;
            }

            .what-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .what-card {
              padding: 20px 16px;
            }
          }

          @media (max-width: 575.98px) {
            .about-hero {
              padding-top: 80px;
              padding-bottom: 32px;
              gap: 24px;
            }

            .about-hero-content h1 {
              font-size: clamp(28px, 10vw, 36px);
            }

            .about-hero-content p {
              font-size: clamp(13px, 1.4vw, 15px);
            }

            .about-media-panel {
              max-width: 320px;
            }

            .vision-card {
              padding: 20px 16px;
            }

            .what-card {
              padding: 16px;
            }
          }

          @media (max-width: 980px) {
            .about-hero {
              grid-template-columns: 1fr;
              height: auto;
              padding-top: 100px;
              padding-bottom: 48px;
              gap: 32px;
            }
            .about-hero-content { max-width: 100%; }
            .about-hero-media { justify-content: flex-start; }
            .about-media-panel { width: 100%; }
            .about-hero::after { display: none; }
            .vision-grid { flex-wrap: wrap; }
            .vision-card { flex: 1 1 50%; }
            .what-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          }

          @media (max-width: 640px) {
            .about-hero { padding-top: 90px; }
            .vision-grid { flex-direction: column; }
            .vision-card { flex: 1 1 auto; min-height: 200px; }
            .what-grid { grid-template-columns: 1fr; gap: 16px; }
            .what-top { flex-direction: column; margin-bottom: 24px; }
            .what-slide:hover { transform: none; box-shadow: 0 4px 20px rgba(15,23,42,0.06); }
          }

          @media (prefers-reduced-motion: reduce) {
            .about-reveal {
              transition: none;
              opacity: 1;
              transform: none;
            }
            .about-media-slide {
              animation: none;
              opacity: 1;
              transform: none;
            }
            .vision-bg,
            .vision-text,
            .vision-overlay {
              transition: none;
            }
            .vision-text {
              opacity: 1;
              transform: none;
            }
            .vision-header h2::after {
              animation: none;
              transform: scaleX(1);
              opacity: 1;
            }
          }

          @media (max-width: 980px) {
            .leadership-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 720px) {
            .leadership-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
}

export default About;
