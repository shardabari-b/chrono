import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="footer-grid" style={styles.container}>

        <div style={styles.column}>
          <Link to="/" style={styles.logoLink}>
            <img src="/images/chronosphere-logo.png" alt="Chronosphere" style={styles.footerLogo} />
          </Link>
          <p style={styles.text}>
            A school-led technology venture by Macro Vision Academy where students design,
            build, and present practical AI and digital products.
          </p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Navigate</h3>
          <Link className="ft-link" style={styles.link} to="/">Home</Link>
          <Link className="ft-link" style={styles.link} to="/about">About</Link>
          <Link className="ft-link" style={styles.link} to="/products">Products</Link>
          <Link className="ft-link" style={styles.link} to="/services">Services</Link>
          <Link className="ft-link" style={styles.link} to="/blogs">Blogs</Link>
          <Link className="ft-link" style={styles.link} to="/rd">R&D</Link>
          <Link className="ft-link" style={styles.link} to="/contact">Contact</Link>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Domains</h3>
          <p style={styles.text}>Artificial Intelligence</p>
          <p style={styles.text}>Robotics & Automation</p>
          <p style={styles.text}>Web & Mobile Engineering</p>
          <p style={styles.text}>IoT Systems</p>
          <p style={styles.text}>Data Science</p>
          <p style={styles.text}>Game Development</p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Blogs</h3>
          <Link className="ft-link" style={styles.link} to="/blogs">Top 10 Web Design Companies in Canada</Link>
          <Link className="ft-link" style={styles.link} to="/blogs">How Website Design Impacts Online Sales</Link>
          <Link className="ft-link" style={styles.link} to="/blogs">Website Design Cost in Canada</Link>
          <Link className="ft-link" style={styles.link} to="/blogs">AI in Education: Future Classrooms</Link>
        </div>

        <div style={styles.column}>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.text}> <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z"/>
      <circle cx="12" cy="11" r="2"/>
    </svg>Macro Vision Academy
Near All is Well Hospital,
Renuka Mata Road,
Burhanpur(M.P.) Pin-450331</p>
          {/* <p style={styles.text}>chiefaiofficer@mvaburhanpur.com</p> */}
          <p style={styles.text}> <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/>
    </svg>+91 93025 11111</p>
          <p style={styles.text}> <svg style={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16v16H4z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>Digitalmarketing@mvaburhanpur.com</p>
          <h3 style={{ ...styles.heading, marginTop: "20px" }}>Follow Us</h3>
          <div style={styles.socialRow}>
            <button type="button" aria-label="Facebook (link coming soon)" style={styles.socialBtnDisabled} disabled>
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M13.5 8.5V6.8c0-.6.4-1 1-1h1.7V3h-2.4C11.7 3 10.5 4.3 10.5 6.2v2.3H9v2.7h1.5V21h3v-9.8h2.2l.4-2.7h-2.6z" />
              </svg>
            </button>
            <a
              className="ft-social"
              href="https://www.youtube.com/shorts/IPEYN14fWHg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={styles.socialBtn}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M22.5 7.6a2.9 2.9 0 0 0-2-2C18.9 5 12 5 12 5s-6.9 0-8.5.6a2.9 2.9 0 0 0-2 2A30 30 0 0 0 1 12a30 30 0 0 0 .5 4.4 2.9 2.9 0 0 0 2 2C5.1 19 12 19 12 19s6.9 0 8.5-.6a2.9 2.9 0 0 0 2-2A30 30 0 0 0 23 12a30 30 0 0 0-.5-4.4zM10 15.5V8.5l6 3.5-6 3.5z"/>
              </svg>
            </a>
            <a
              className="ft-social"
              href="https://instagram.com/chronosphere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={styles.socialBtn}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2A4.8 4.8 0 1 1 7.2 13 4.8 4.8 0 0 1 12 8.2zm0 2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 10.2zm5-2.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
              </svg>
            </a>
            <a
              className="ft-social"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={styles.socialBtn}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path fill="currentColor" d="M6.5 9.5H3.7V21h2.8zM5.1 3.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM21 13.2c0-2.3-1.2-3.7-3.2-3.7a2.8 2.8 0 0 0-2.5 1.4h0V9.5h-2.7V21h2.7v-6.1c0-1.6.3-3.2 2.2-3.2 1.9 0 2 1.8 2 3.3V21H21z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div style={styles.bottom}>
        © 2026 Chronosphere | Powered by Macro Vision Academy
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        .ft-link:hover {
          color: #ffffff !important;
        }
        .ft-social:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.14) !important;
        }
      `}</style>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(180deg, #062a4a 0%, #041f3a 60%, #03172c 100%)",
    color: "white",
    paddingTop: "60px",
   
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "'DM Sans', 'Fira Sans', sans-serif"
  },

  container: {
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1.5fr 2fr 1.5fr",
    padding: "0 clamp(24px, 5vw, 80px)",
    gap: "40px",
    boxSizing: "border-box"
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },

  logoLink: {
    display: "inline-block",
    marginBottom: "12px"
  },

  footerLogo: {
    width: "160px",
    display: "block",
    filter: "brightness(0) invert(1)"
  },

  heading: {
    margin: "0 0 10px",
    fontSize: "16px",
    color: "#f8fbff",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    fontWeight: "700"
  },

  text: {
    margin: 0,
    fontSize: "13px",
    color: "#c6d6e7",
    lineHeight: "1.8"
  },

  link: {
    textDecoration: "none",
    color: "#c6d6e7",
    fontSize: "13px",
    lineHeight: "1.8",
    transition: "color 0.2s ease"
  },

  socialRow: {
    display: "flex",
    gap: "10px",
    marginTop: "4px",
    flexWrap: "wrap"
  },

  socialBtn: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    background: "rgba(255, 255, 255, 0.08)",
    color: "#f8fbff",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease, background 0.2s ease"
  },
  socialBtnDisabled: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.12)",
    background: "rgba(255, 255, 255, 0.06)",
    color: "#f8fbff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "not-allowed",
    opacity: 0.7,
  },
  icon: {
  width: "22px",
  height: "22px",
  minWidth: "22px",
  color: "#cbd5e1", // light gray like your screenshot
  marginTop: "4px"
},

  bottom: {
    textAlign: "center",
    padding: "18px",
    marginTop: "40px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "13px",
    color: "#a9bdd1"
  }
};

export default Footer;
