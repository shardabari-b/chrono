import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{
      background: "#060d1a",
      color: "#fff",
      fontFamily: "'Inter', sans-serif",
      paddingTop: "clamp(64px,8vw,100px)",
    }}>
      {/* Top section */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 clamp(16px,4vw,48px)",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1.4fr",
        gap: "clamp(32px,4vw,64px)",
        paddingBottom: "clamp(48px,6vw,80px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }} className="ft-grid footer-grid">

        {/* Brand col */}
        <div>
          <Link to="/">
            <img src="/images/chronosphere-logo.png" alt="Chronosphere"
              style={{ height: "32px", width: "auto", marginBottom: "20px", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
          </Link>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.8, maxWidth: "280px", margin: "0 0 24px" }}>
            A school-led technology venture by Macro Vision Academy where students design,
            build, and present practical AI and digital products.
          </p>
          {/* Social */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="button" disabled aria-label="Facebook" style={socialBtnStyle(true)}>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path fill="currentColor" d="M13.5 8.5V6.8c0-.6.4-1 1-1h1.7V3h-2.4C11.7 3 10.5 4.3 10.5 6.2v2.3H9v2.7h1.5V21h3v-9.8h2.2l.4-2.7h-2.6z" />
              </svg>
            </button>
            <a href="https://www.youtube.com/shorts/IPEYN14fWHg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={socialBtnStyle(false)}>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path fill="currentColor" d="M22.5 7.6a2.9 2.9 0 0 0-2-2C18.9 5 12 5 12 5s-6.9 0-8.5.6a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1 12a30 30 0 0 0 .5 4.4 2.9 2.9 0 0 0 2 2C5.1 19 12 19 12 19s6.9 0 8.5-.6a2.9 2.9 0 0 0 2-2A30 30 0 0 0 23 12a30 30 0 0 0-.5-4.4zM10 15.5V8.5l6 3.5-6 3.5z" />
              </svg>
            </a>
            <a href="https://instagram.com/chronosphere" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialBtnStyle(false)}>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A4.8 4.8 0 1 1 7.2 13 4.8 4.8 0 0 1 12 8.2zm0 2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 10.2zm5-2.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={socialBtnStyle(false)}>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path fill="currentColor" d="M6.5 9.5H3.7V21h2.8zM5.1 3.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM21 13.2c0-2.3-1.2-3.7-3.2-3.7a2.8 2.8 0 0 0-2.5 1.4h0V9.5h-2.7V21h2.7v-6.1c0-1.6.3-3.2 2.2-3.2 1.9 0 2 1.8 2 3.3V21H21z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p style={ftHeadStyle}>Navigate</p>
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/products", label: "Products" },
            { to: "/services", label: "Services" },
            { to: "/blogs", label: "Blogs" },
            { to: "/rd", label: "R&D" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link key={to + label} to={to} style={ftLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
              {label}
            </Link>
          ))}
        </div>

        {/* Domains */}
        <div>
          <p style={ftHeadStyle}>Domains</p>
          {["Artificial Intelligence", "Robotics & Automation", "Web & Mobile Engineering", "IoT Systems", "Data Science", "Game Development"].map(d => (
            <p key={d} style={{ ...ftLinkStyle, cursor: "default" }}>{d}</p>
          ))}
        </div>

        {/* Blogs */}
        <div>
          <p style={ftHeadStyle}>Blogs</p>
          {[
            "Top 10 Web Design Companies in Canada",
            "How Website Design Impacts Online Sales",
            "Website Design Cost in Canada",
            "AI in Education: Future Classrooms",
          ].map(b => (
            <Link key={b} to="/blogs" style={ftLinkStyle}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
              {b}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p style={ftHeadStyle}>Contact</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg style={{ flexShrink: 0, marginTop: "2px", color: "#2563eb" }} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z" /><circle cx="12" cy="11" r="2" />
              </svg>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: 0 }}>
                Macro Vision Academy<br />Near All is Well Hospital,<br />Renuka Mata Road,<br />Burhanpur(M.P.) Pin-450331
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <svg style={{ flexShrink: 0, color: "#2563eb" }} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
              </svg>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>+91 93025 11111</p>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <svg style={{ flexShrink: 0, color: "#2563eb" }} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", margin: 0 }}>Digitalmarketing@mvaburhanpur.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "20px clamp(16px,4vw,48px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
      }}>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
          © 2026 Chronosphere | Powered by Macro Vision Academy
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Service"].map(l => (
            <span key={l} style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

const ftHeadStyle = {
  fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em",
  textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
  marginBottom: "16px",
};
const ftLinkStyle = {
  display: "block", fontSize: "13px", color: "rgba(255,255,255,0.45)",
  marginBottom: "10px", transition: "color .18s", lineHeight: 1.5,
};
const socialBtnStyle = (disabled) => ({
  width: "34px", height: "34px", borderRadius: "8px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  display: "flex", alignItems: "center", justifyContent: "center",
  color: disabled ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.5)",
  cursor: disabled ? "not-allowed" : "pointer",
  transition: "background .18s, color .18s",
  textDecoration: "none",
});

export default Footer;
