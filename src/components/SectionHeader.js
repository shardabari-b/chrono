import React from "react";

/**
 * Shared section header.
 * Props: eyebrow (string), title (JSX|string), subtitle (string), light (bool for dark backgrounds)
 */
function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className={`sh-wrap ${light ? "sh-wrap--light" : ""}`}>
      {eyebrow && <span className="sh-eyebrow">{eyebrow}</span>}
      <h2 className="sh-title">{title}</h2>
      {subtitle && <p className="sh-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
