import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SERVICE_ITEMS = [
  { id: "stem",      label: "STEM Courses",     desc: "Science, Technology, Engineering & Math" },
  { id: "trending",  label: "Trending Tech",    desc: "AI, Blockchain, AR/VR, Cloud" },
  { id: "finishing", label: "Finishing School", desc: "Communication & Career Readiness" },
  { id: "workshops", label: "Workshops",        desc: "Hackathons, Design Sprints, Bootcamps" },
  { id: "mva",       label: "MVA",              desc: "Most Valuable Achievers Program" },
];

const PRODUCT_ITEMS = [
  { id: "lms",          label: "LMS + Courses + STEM" },
  { id: "emotion",      label: "Emotion Sensing" },
  { id: "attendance",   label: "Attendance System" },
  { id: "slm",          label: "SLM" },
  { id: "appdev",       label: "App Development" },
  { id: "gamedev",      label: "Game Development & Animation" },
  { id: "hackathons",   label: "Hackathons" },
  { id: "fdps",         label: "FDPS on AI" },
  { id: "expo",         label: "Expo / World Records" },
  { id: "partnerships", label: "Industries / Partnerships" },
  { id: "robotics",     label: "Robotics & IoT" },
];

function Header() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "services" | "products" | null
  const [isMobile,   setIsMobile]    = useState(window.innerWidth < 992);
  const navigate  = useNavigate();
  const headerRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNav = (id) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollTo(id), 100);
    } else {
      scrollTo(id);
    }
  };

  const handleServiceClick = (serviceId) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    navigate("/services", { state: { activeId: serviceId } });
  };

  const handleProductClick = (productId) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    navigate(`/products/${productId}`);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  const handleMouseEnter = (name) => {
    if (!isMobile) setOpenDropdown(name);
  };

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      // Only close if not moving to the dropdown panel itself
      const related = e.relatedTarget;
      if (!related || !(related instanceof Node)) {
        setOpenDropdown(null);
        return;
      }
      if (!e.currentTarget.contains(related)) {
        setOpenDropdown(null);
      }
    }
  };

  return (
    <header ref={headerRef} className="hdr-root">
      {/* Logo */}
      <Link to="/" className="hdr-logo" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
        <img src="/images/chronosphere-logo.png" alt="Chronosphere" className="hdr-logo-img" />
      </Link>

      {/* Hamburger */}
      {isMobile && (
        <button className="hdr-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={`hdr-bline ${menuOpen ? "hdr-bline--top-open" : ""}`} />
          <span className={`hdr-bline ${menuOpen ? "hdr-bline--mid-open" : ""}`} />
          <span className={`hdr-bline ${menuOpen ? "hdr-bline--bot-open" : ""}`} />
        </button>
      )}

      {/* Nav */}
      <nav className={`hdr-nav ${isMobile ? "hdr-nav--mobile" : ""} ${menuOpen ? "hdr-nav--open" : ""}`}>
        <div className="hdr-rail">

          {/* Home */}
          <button className="hdr-link" onClick={() => handleNav("home")}>Home</button>

          {/* Our Services dropdown */}
          <div
            className="hdr-dropdown-wrap"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`hdr-link hdr-link--arrow ${openDropdown === "services" ? "hdr-link--active" : ""}`}>
              <span className="hdr-link-label" onClick={() => { setMenuOpen(false); setOpenDropdown(null); navigate("/services"); }}>Our Services</span>
              <svg
                className={`hdr-chevron ${openDropdown === "services" ? "hdr-chevron--up" : ""}`}
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                onClick={() => isMobile && toggleDropdown("services")}
                style={{ cursor: "pointer", padding: "2px" }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`hdr-dropdown hdr-dropdown--services ${openDropdown === "services" ? "hdr-dropdown--open" : ""}`}>
              <div className="hdr-dd-bridge" />
              <div className="hdr-dd-grid">
                {SERVICE_ITEMS.map(s => (
                  <button key={s.id} className="hdr-dd-item" onClick={() => handleServiceClick(s.id)}>
                    <span className="hdr-dd-item-title">{s.label}</span>
                    <span className="hdr-dd-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Our Products dropdown */}
          <div
            className="hdr-dropdown-wrap"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`hdr-link hdr-link--arrow ${openDropdown === "products" ? "hdr-link--active" : ""}`}>
              <span className="hdr-link-label" onClick={() => { setMenuOpen(false); setOpenDropdown(null); navigate("/products"); }}>Our Products</span>
              <svg
                className={`hdr-chevron ${openDropdown === "products" ? "hdr-chevron--up" : ""}`}
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                onClick={() => isMobile && toggleDropdown("products")}
                style={{ cursor: "pointer", padding: "2px" }}
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`hdr-dropdown hdr-dropdown--products ${openDropdown === "products" ? "hdr-dropdown--open" : ""}`}>
              <div className="hdr-dd-bridge" />
              <div className="hdr-dd-list">
                {PRODUCT_ITEMS.map((p) => (
                  <button key={p.id} className="hdr-dd-row" onClick={() => handleProductClick(p.id)}>
                    <span className="hdr-dd-row-title">{p.label}</span>
                    <span className="hdr-dd-arrow">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Other links */}
          <button className="hdr-link" onClick={() => { setMenuOpen(false); setOpenDropdown(null); navigate("/industries"); }}>Industries</button>
          <button className="hdr-link" onClick={() => { setMenuOpen(false); setOpenDropdown(null); navigate("/about"); }}>About Us</button>
          <button className="hdr-link" onClick={() => handleNav("team")}>Our Team</button>
          <button className="hdr-link" onClick={() => { setMenuOpen(false); setOpenDropdown(null); navigate("/blogs"); }}>Blogs</button>
        </div>

        <div className="hdr-cta-row">
          <button className="hdr-cta" onClick={() => { setMenuOpen(false); setOpenDropdown(null); navigate("/contact"); }}>Contact</button>
        </div>
      </nav>

      <style>{`
        .hdr-root {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          min-height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px clamp(12px,3vw,36px);
          background: rgba(242,246,255,0.96);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 24px rgba(17,32,45,0.10);
          border-bottom: 1px solid rgba(37,99,235,0.08);
          font-family: "DM Sans","Space Grotesk",sans-serif;
          box-sizing: border-box;
        }

        /* Logo */
        .hdr-logo { display:flex; align-items:center; text-decoration:none; }
        .hdr-logo-img { width: clamp(110px,16vw,150px); display:block; }

        /* Burger */
        .hdr-burger {
          cursor:pointer; width:42px; height:42px;
          border:1px solid rgba(37,99,235,0.2); border-radius:14px;
          background:#edf2ff; display:flex; flex-direction:column;
          justify-content:center; align-items:center; gap:6px; padding:0;
        }
        .hdr-bline { width:20px; height:2px; background:#1e3a8a; border-radius:3px; transition:all .25s ease; }
        .hdr-bline--top-open { transform:translateY(8px) rotate(45deg); }
        .hdr-bline--mid-open { opacity:0; }
        .hdr-bline--bot-open { transform:translateY(-8px) rotate(-45deg); }

        /* Nav */
        .hdr-nav { display:flex; align-items:center; gap:14px; }
        .hdr-nav--mobile {
          position:absolute; top:80px; left:0; width:100%;
          background:rgba(243,247,255,0.98);
          flex-direction:column; align-items:center;
          padding:20px; gap:14px; display:none;
          box-shadow:0 16px 30px rgba(17,32,45,0.12);
          border-top:1px solid rgba(18,42,56,0.08);
          box-sizing:border-box;
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }
        .hdr-nav--open { display:flex !important; }

        /* Rail */
        .hdr-rail {
          display:flex; align-items:center;
          gap:clamp(4px,1.5vw,8px);
          padding:6px 14px; border-radius:999px;
          background:rgba(255,255,255,0.85);
          border:1px solid rgba(37,99,235,0.12);
          box-shadow:0 4px 16px rgba(17,32,45,0.07);
          flex-wrap: wrap;
          justify-content: center;
        }

        /* Nav link */
        .hdr-link {
          position:relative; background:transparent; border:none;
          cursor:pointer; color:#1f3648; font-size:13px; font-weight:600;
          letter-spacing:0.3px; padding:7px 10px; border-radius:8px;
          transition:background .2s, color .2s;
          display:flex; align-items:center; gap:5px;
          font-family:inherit; white-space:nowrap;
        }
        .hdr-link:hover, .hdr-link--active { color:#2563eb; background:rgba(37,99,235,0.07); }

        .hdr-link-label {
          cursor: pointer;
        }
        .hdr-link-label:hover { text-decoration: underline; text-underline-offset: 3px; }

        /* Chevron */
        .hdr-chevron { transition:transform .25s ease; flex-shrink:0; }
        .hdr-chevron--up { transform:rotate(180deg); }

        /* CTA */
        .hdr-cta-row { display:flex; align-items:center; }
        .hdr-cta {
          background: #2563eb;
          border:none; cursor:pointer; color:#fff;
          padding:9px 20px; border-radius:999px;
          font-weight:700; font-size:12px; letter-spacing:0.6px;
          text-transform:uppercase; font-family:inherit;
          box-shadow:0 8px 20px rgba(37,99,235,0.28);
          transition:transform .2s, box-shadow .2s;
        }
        .hdr-cta:hover { transform:translateY(-2px); box-shadow:0 14px 28px rgba(37,99,235,0.35); }

        /* Dropdown wrapper */
        .hdr-dropdown-wrap { position:relative; }

        /* Dropdown panel */
        .hdr-dropdown {
          position:absolute;
          top:calc(100% + 8px);
          left:50%;
          transform:translateX(-50%) translateY(-6px);
          background:#ffffff;
          border:1px solid #e2e8f0;
          border-radius:16px;
          box-shadow:0 24px 64px rgba(15,23,42,0.16);
          z-index:2000;
          overflow:hidden;
          opacity:0;
          visibility:hidden;
          pointer-events:none;
          transition: opacity .2s cubic-bezier(0.22,1,0.36,1), transform .2s cubic-bezier(0.22,1,0.36,1), visibility .2s;
        }
        .hdr-dropdown--open {
          opacity:1;
          visibility:visible;
          pointer-events:auto;
          transform:translateX(-50%) translateY(0);
        }

        /* Invisible bridge fills the gap between trigger and panel */
        .hdr-dd-bridge {
          position:absolute;
          top:-12px; left:0; right:0;
          height:12px;
          background:transparent;
        }

        .hdr-dropdown--services { width: 260px; }
        .hdr-dropdown--products { width: 300px; }

        .hdr-dd-header {
          padding:16px 20px 12px;
          border-bottom:1px solid #f1f5f9;
          background:#f8faff;
        }
        .hdr-dd-label {
          display:block; font-family:"Space Grotesk",sans-serif;
          font-size:13px; font-weight:700; color:#0f172a; margin-bottom:2px;
        }
        .hdr-dd-sub { font-size:11px; color:#94a3b8; }

        /* Services grid */
        .hdr-dd-grid {
          display:flex; flex-direction:column;
          gap:0; padding:8px;
        }
        .hdr-dd-item {
          display:flex; flex-direction:column; align-items:flex-start;
          gap:2px; padding:12px 14px; border-radius:10px;
          background:transparent; border:none; cursor:pointer;
          text-align:left; font-family:inherit;
          transition:background .18s;
          position:relative;
        }
        .hdr-dd-item:hover { background:#f0f7ff; }
        .hdr-dd-item-title {
          font-size:13px; font-weight:700; color:#0f172a;
          transition:color .18s;
        }
        .hdr-dd-item:hover .hdr-dd-item-title { color:#2563eb; }
        .hdr-dd-item-desc { font-size:11px; color:#94a3b8; line-height:1.4; }
        .hdr-dd-arrow {
          position:absolute; right:12px; top:50%; transform:translateY(-50%);
          font-size:14px; color:#2563eb; opacity:0;
          transition:opacity .18s, transform .18s;
        }
        .hdr-dd-item:hover .hdr-dd-arrow { opacity:1; transform:translateY(-50%) translateX(3px); }

        /* Products list */
        .hdr-dd-list { padding:8px; display:flex; flex-direction:column; gap:0; }
        .hdr-dd-row {
          display:flex; align-items:center; gap:12px;
          padding:10px 14px; border-radius:10px;
          background:transparent; border:none; cursor:pointer;
          font-family:inherit; text-align:left;
          transition:background .18s;
        }
        .hdr-dd-row:hover { background:#f0f7ff; }
        .hdr-dd-row-num {
          font-size:11px; font-weight:700; color:#cbd5e1;
          font-family:"Space Grotesk",sans-serif; min-width:22px;
        }
        .hdr-dd-row-title {
          font-size:13px; font-weight:600; color:#0f172a; flex:1;
          transition:color .18s;
        }
        .hdr-dd-row:hover .hdr-dd-row-title { color:#2563eb; }
        .hdr-dd-row .hdr-dd-arrow {
          position:static; transform:none; opacity:0;
          transition:opacity .18s, transform .18s;
          font-size:13px;
        }
        .hdr-dd-row:hover .hdr-dd-arrow { opacity:1; transform:translateX(3px); }
      `}</style>
    </header>
  );
}

export default Header;
