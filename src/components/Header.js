import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",         id: "home" },
  { label: "Services",     id: "services" },
  { label: "Products",     id: "products" },
  { label: "Industries",   id: "industries" },
  { label: "Why Us",       id: "why-choose-us" },
  { label: "EduTech",      id: "edu-tech" },
  { label: "About",        id: "about" },
  { label: "Team",         id: "team" },
  { label: "Blogs",        id: "blogs" },
  { label: "R&D",          id: "rd" },
];

function Header() {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [isMobile,     setIsMobile]     = useState(window.innerWidth < 1100);
  const [scrolled,     setScrolled]     = useState(false);
  const [hidden,       setHidden]       = useState(true);
  const [activeId,     setActiveId]     = useState("home");
  const lastY   = useRef(0);
  const navigate  = useNavigate();
  const location  = useLocation();
  const headerRef = useRef(null);

  /* ── resize ── */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── scroll: hide inside hero, show after ── */
  useEffect(() => {
    const HERO_THRESHOLD = window.innerHeight * 0.8;

    const onScroll = () => {
      const y = window.scrollY;
      const isHome = location.pathname === "/";

      if (isHome) {
        setHidden(y < HERO_THRESHOLD);
        setScrolled(y >= HERO_THRESHOLD);
      } else {
        setHidden(false);
        setScrolled(y > 20);
      }
      lastY.current = y;
    };

    onScroll(); // run immediately on mount / route change
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  /* ── active section tracker ── */
  useEffect(() => {
    if (location.pathname !== "/") return;
    const ids = NAV_LINKS.map(l => l.id);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [location.pathname]);

  /* ── close menu on outside click ── */
  useEffect(() => {
    const handler = e => {
      if (headerRef.current && !headerRef.current.contains(e.target))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── close menu on route change ── */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* ── scroll to section (SPA) ── */
  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // wait for Home to mount then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isHome = location.pathname === "/";

  return (
    <header
      ref={headerRef}
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(11,18,32,0.08)" : "none",
      }}
    >
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(16px,3vw,48px)", height: "92px",
        maxWidth: "1400px", margin: "0 auto",
      }}>

        {/* ── Logo ── */}
        <button
          onClick={() => scrollToSection("home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, flexShrink: 0, display: "flex", alignItems: "center" }}
        >
          <img
            src="/images/chronosphere-logo.png"
            alt="Chronosphere"
            style={{ height: "72px", width: "auto", display: "block" }}
          />
        </button>

        {/* ── Desktop Nav ── */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  ...navLinkStyle,
                  color: isHome && activeId === id ? "#2563eb" : "#334155",
                  background: isHome && activeId === id ? "rgba(37,99,235,0.07)" : "transparent",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#2563eb";
                  e.currentTarget.style.background = "rgba(37,99,235,0.07)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = isHome && activeId === id ? "#2563eb" : "#334155";
                  e.currentTarget.style.background = isHome && activeId === id ? "rgba(37,99,235,0.07)" : "transparent";
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        )}

        {/* ── CTA + Burger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!isMobile && (
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                background: "#2563eb", color: "#fff", border: "none",
                padding: "10px 24px", borderRadius: "999px",
                fontSize: "13px", fontWeight: 700, letterSpacing: "0.03em",
                cursor: "pointer", fontFamily: "inherit",
                transition: "transform .2s, box-shadow .2s",
                boxShadow: "0 4px 16px rgba(37,99,235,.3)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,.3)"; }}
            >
              Contact
            </button>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                width: "44px", height: "44px", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: "5px",
                background: "rgba(37,99,235,.08)", border: "1px solid rgba(37,99,235,.15)",
                borderRadius: "10px", cursor: "pointer",
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: "18px", height: "1.5px",
                  background: "#1e3a8a", borderRadius: "2px",
                  transition: "all .25s ease",
                  transform: menuOpen
                    ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                    : i === 1 ? "scaleX(0)"
                    : "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {isMobile && menuOpen && (
        <div style={{
          position: "absolute", top: "92px", left: 0, width: "100%",
          background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(11,18,32,.06)",
          boxShadow: "0 24px 48px rgba(11,18,32,.12)",
          padding: "12px 16px 20px",
          maxHeight: "calc(100vh - 92px)", overflowY: "auto",
        }}>
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "13px 16px", borderRadius: "10px",
                fontSize: "15px", fontWeight: 600,
                color: isHome && activeId === id ? "#2563eb" : "#1e293b",
                background: isHome && activeId === id ? "rgba(37,99,235,.06)" : "transparent",
                border: "none", cursor: "pointer", fontFamily: "inherit",
                transition: "background .15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#f0f7ff"}
              onMouseLeave={e => e.currentTarget.style.background = isHome && activeId === id ? "rgba(37,99,235,.06)" : "transparent"}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              display: "block", width: "100%", marginTop: "8px",
              padding: "14px 16px", borderRadius: "10px",
              fontSize: "15px", fontWeight: 700, color: "#fff",
              background: "#2563eb", border: "none", cursor: "pointer",
              fontFamily: "inherit", boxShadow: "0 4px 16px rgba(37,99,235,.3)",
            }}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

const navLinkStyle = {
  background: "transparent", border: "none", cursor: "pointer",
  color: "#334155", fontSize: "13px", fontWeight: 600,
  padding: "8px 11px", borderRadius: "8px",
  transition: "color .18s, background .18s",
  fontFamily: "inherit", whiteSpace: "nowrap",
  letterSpacing: "0.01em",
};

export default Header;
