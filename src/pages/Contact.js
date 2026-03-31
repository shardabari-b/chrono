import React from "react";

function Contact() {
  return (
    <section className="contact-page-v2 page-section page-contact">
      <div className="contact-shell">
        <header className="contact-header">
          <span className="sh-eyebrow">Get In Touch</span>
          <h1 className="contact-title">Contact <span className="contact-accent">Us</span></h1>
          <p>
            For general inquiries, partnerships, or media requests, please reach out. Our team is always ready to assist
            you.
          </p>
        </header>

        <div className="contact-grid">
          <div className="contact-form-panel">
            <h2>Get in Touch</h2>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" placeholder="Your full name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="your.email@example.com" />
              </label>
              <label>
                Subject
                <select defaultValue="">
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option>General Inquiry</option>
                  <option>Partnerships</option>
                  <option>Media Requests</option>
                  <option>Admissions</option>
                </select>
              </label>
              <label>
                Message
                <textarea placeholder="Tell us about your inquiry..." />
              </label>
              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info-panel">
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h3>General Inquiries</h3>
                <p>Contact forms and communication channels for any questions and support.</p>
                <p>
                  Our team is always ready to assist you with any questions about our programs, technologies, or
                  services.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">🤝</div>
              <div>
                <h3>Partner with Us</h3>
                <p>Submit proposals and collaboration inquiries to expand our reach.</p>
                <p>
                  We are always seeking new partners to help us expand our impact in educational technology and
                  innovation.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📰</div>
              <div>
                <h3>Media Requests</h3>
                <p>Press contact details and media resources for all media-related inquiries.</p>
                <p>Contact our dedicated media team for interviews, press releases, and media kit requests.</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h3>Visit Our Headquarters</h3>
                <p>Macro Vision Academy, Burhanpur, Madhya Pradesh</p>
                <p>www.chronosphere.in</p>
                <p>Phone: +91 91235 33416</p>
                <p>Email: chiefaiofficer@mvaburhanpur.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .contact-page-v2 {
            padding: 110px clamp(24px, 5vw, 80px) 90px;
            background: #f2f6ff;
            color: #0f172a;
            font-family: "DM Sans", "Space Grotesk", sans-serif;
            width: 100%;
            box-sizing: border-box;
          }

          .contact-shell {
            width: 100%;
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

          .contact-header {
            text-align: left;
            margin-bottom: 40px;
          }

          .contact-title {
            font-family: "Space Grotesk", sans-serif;
            font-size: clamp(32px, 5vw, 54px);
            font-weight: 800;
            color: #0f172a;
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin: 0 0 14px;
          }
          .contact-accent { color: #2563eb; }

          .contact-header p {
            margin: 0;
            max-width: 580px;
            color: #475569;
            line-height: 1.7;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: clamp(24px, 5vw, 48px);
            align-items: start;
          }

          .contact-form-panel {
            background: #ffffff;
            border-radius: 18px;
            padding: 26px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .contact-form-panel:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 44px rgba(15, 23, 42, 0.12);
          }

          .contact-form-panel h2 {
            margin: 0 0 16px;
            color: #0f172a;
          }

          .contact-form {
            display: grid;
            gap: 16px;
          }

          .contact-form label {
            display: grid;
            gap: 8px;
            font-size: 14px;
            color: #0f172a;
          }

          .contact-form input,
          .contact-form select,
          .contact-form textarea {
            width: 100%;
            padding: 12px 14px;
            border-radius: 10px;
            border: 1px solid #c7d2fe;
            font-size: 14px;
            color: #1e293b;
            background: #ffffff;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
          }

          .contact-form input:hover,
          .contact-form select:hover,
          .contact-form textarea:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 14px rgba(37, 99, 235, 0.12);
          }

          .contact-form textarea {
            min-height: 140px;
            resize: vertical;
          }

          .contact-form input:focus,
          .contact-form select:focus,
          .contact-form textarea:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
          }

          .contact-submit {
            border: none;
            background: #2563eb;
            color: #ffffff;
            padding: 12px 16px;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .contact-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);
          }

          .contact-info-panel {
            display: grid;
            gap: 18px;
          }

          .info-card {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 14px;
            padding: 18px;
            border-radius: 16px;
            background: #eef4ff;
            border: 1px solid #dbeafe;
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }

          .info-card:hover {
            transform: translateY(-4px);
            border-color: #bfdbfe;
            box-shadow: 0 18px 36px rgba(37, 99, 235, 0.12);
          }

          .info-icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: #dbeafe;
            display: grid;
            place-items: center;
            font-size: 18px;
          }

          .info-card h3 {
            margin: 0 0 8px;
            color: #0f172a;
            font-size: 16px;
          }

          .info-card p {
            margin: 0 0 6px;
            color: #475569;
            line-height: 1.6;
            font-size: 14px;
          }

          /* Enhanced responsive breakpoints */
          @media (max-width: 1199.98px) {
            .contact-page-v2 { padding: 100px 40px 80px; }
            .contact-grid { gap: 48px; }
          }

          @media (max-width: 991.98px) {
            .contact-page-v2 { padding: 90px 32px 70px; }
            .contact-grid { gap: 40px; }
            .contact-title { font-size: clamp(32px, 6vw, 42px); }
            .contact-subtitle { font-size: clamp(16px, 2vw, 18px); }
            .contact-form-panel { padding: 32px; }
            .info-grid { gap: 24px; }
          }

          @media (max-width: 767.98px) {
            .contact-page-v2 { padding: 80px 24px 60px; text-align: center; }
            .contact-grid { grid-template-columns: 1fr; gap: 32px; }
            .contact-title { font-size: clamp(28px, 7vw, 36px); }
            .contact-subtitle { font-size: clamp(14px, 1.8vw, 16px); }
            .contact-form-panel { padding: 24px 20px; }
            .info-grid { grid-template-columns: 1fr; gap: 20px; }
            .info-card { padding: 20px; }
          }

          @media (max-width: 575.98px) {
            .contact-page-v2 { padding: 70px 16px 50px; }
            .contact-title { font-size: clamp(24px, 8vw, 32px); }
            .contact-subtitle { font-size: clamp(13px, 1.6vw, 15px); }
            .contact-form-panel { padding: 20px 16px; }
            .info-card { padding: 16px; grid-template-columns: 1fr; }
            .info-icon { width: 32px; height: 32px; font-size: 14px; }
            .info-title { font-size: 16px; }
            .info-text { font-size: 13px; }
          }

          /* Legacy breakpoints for compatibility */
          @media (max-width: 960px) {
            .contact-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 540px) {
            .contact-page-v2 { padding: 90px 16px 60px; }
            .contact-form-panel { padding: 20px 16px; }
            .info-card { grid-template-columns: 1fr; }
            .info-icon { width: 36px; height: 36px; font-size: 16px; }
          }
        `}
      </style>
    </section>
  );
}

export default Contact;
