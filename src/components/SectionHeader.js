import React from "react";

/**
 * Shared section header — left-aligned, consistent font/size across all pages.
 * Props: eyebrow (string), title (JSX|string), subtitle (string), light (bool — white text for dark bg)
 */
function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={`sh-wrap ${light ? "sh-wrap--light" : ""}`}>
      {eyebrow && <span className="sh-eyebrow">{eyebrow}</span>}
      <h2 className="sh-title">{title}</h2>
      {subtitle && <p className="sh-subtitle">{subtitle}</p>}

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap");

        .sh-wrap {
          text-align: left;
          margin-bottom: clamp(40px, 5vw, 64px);
        }

        .sh-eyebrow {
          display: inline-block;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 14px;
        }
        .sh-wrap--light .sh-eyebrow {
          color: #38bdf8;
        }

        .sh-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .sh-wrap--light .sh-title {
          color: #f1f5f9;
        }

        .sh-subtitle {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(14px, 1.6vw, 17px);
          color: #64748b;
          line-height: 1.8;
          max-width: 580px;
          margin: 0;
        }
        .sh-wrap--light .sh-subtitle {
          color: #94a3b8;
        }
      `}</style>
    </div>
  );
}

export default SectionHeader;
