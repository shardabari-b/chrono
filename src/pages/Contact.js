import React from "react";

export default function Contact() {
  return (
    <section style={{ background: "#f0f6ff", fontFamily: "'Inter', sans-serif", padding: "clamp(80px,10vw,130px) clamp(16px,4vw,80px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "clamp(40px,5vw,64px)" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            Get In Touch
          </span>
          <h1 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(36px,5vw,58px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Contact <span style={{ color: "#2563eb" }}>Us</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,1.5vw,16px)", color: "#64748b", lineHeight: 1.8, maxWidth: "560px", margin: 0 }}>
            For general inquiries, partnerships, or media requests, please reach out. Our team is always ready to assist you.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px,4vw,48px)", alignItems: "start" }} className="ct2-grid">

          {/* Form */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "clamp(28px,3vw,40px)", border: "1px solid #e2e8f0", boxShadow: "0 12px 40px rgba(11,18,32,.08)" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "22px", fontWeight: 800, color: "#0f172a", margin: "0 0 24px", letterSpacing: "-0.02em" }}>Get in Touch</h2>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Name",    type: "text",  placeholder: "Your full name" },
                { label: "Email",   type: "email", placeholder: "your.email@example.com" },
              ].map(({ label, type, placeholder }) => (
                <label key={label} style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                  {label}
                  <input type={type} placeholder={placeholder} style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,.12)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }} />
                </label>
              ))}
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                Subject
                <select defaultValue="" style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }}>
                  <option value="" disabled>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Partnerships</option>
                  <option>Media Requests</option>
                  <option>Admissions</option>
                </select>
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                Message
                <textarea placeholder="Tell us about your inquiry..." style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(37,99,235,.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; }} />
              </label>
              <button type="submit" style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: "10px", padding: "14px 24px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 20px rgba(37,99,235,.28)", transition: "background .2s, transform .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = ""; }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { icon: "✉️", title: "General Inquiries", lines: ["Contact forms and communication channels for any questions and support.", "Our team is always ready to assist you with any questions about our programs, technologies, or services."] },
              { icon: "🤝", title: "Partner with Us", lines: ["Submit proposals and collaboration inquiries to expand our reach.", "We are always seeking new partners to help us expand our impact in educational technology and innovation."] },
              { icon: "📰", title: "Media Requests", lines: ["Press contact details and media resources for all media-related inquiries.", "Contact our dedicated media team for interviews, press releases, and media kit requests."] },
              { icon: "📍", title: "Visit Our Headquarters", lines: ["Macro Vision Academy, Burhanpur, Madhya Pradesh", "www.chronosphere.in", "Phone: +91 91235 33416", "Email: chiefaiofficer@mvaburhanpur.com"] },
            ].map(({ icon, title, lines }) => (
              <InfoCard key={title} icon={icon} title={title} lines={lines} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .ct2-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 540px) { .ct2-grid > div:first-child { padding: 20px 16px !important; } }
      `}</style>
    </section>
  );
}

function InfoCard({ icon, title, lines }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid", gridTemplateColumns: "44px 1fr", gap: "14px",
        padding: "20px", borderRadius: "14px",
        background: "#eef4ff", border: `1px solid ${hovered ? "#bfdbfe" : "#dbeafe"}`,
        boxShadow: hovered ? "0 12px 32px rgba(37,99,235,.1)" : "none",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "transform .25s ease, box-shadow .25s ease, border-color .25s ease",
      }}>
      <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", margin: "0 0 8px", color: "#0f172a", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.01em" }}>{title}</h3>
        {lines.map((line, i) => (
          <p key={i} style={{ margin: "0 0 4px", color: "#475569", lineHeight: 1.65, fontSize: "13.5px" }}>{line}</p>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%", padding: "11px 14px", borderRadius: "10px",
  border: "1px solid #e2e8f0", fontSize: "14px", color: "#1e293b",
  background: "#fff", outline: "none", fontFamily: "'Inter', sans-serif",
  transition: "border-color .2s, box-shadow .2s",
};
