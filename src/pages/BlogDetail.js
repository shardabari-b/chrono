import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogsData } from "./Blogs";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!blog) {
    return (
      <div style={{ padding: "120px 40px", textAlign: "center", fontFamily: "DM Sans, sans-serif" }}>
        <h2>Blog post not found</h2>
        <button onClick={() => navigate("/blogs")} style={{ marginTop: 16, padding: "10px 24px", background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}>
          Back to Blogs
        </button>
      </div>
    );
  }

  const related = blogsData.filter((b) => b.category === blog.category && b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="bd-page">
      {/* Hero */}
      <div className="bd-hero">
        <div className="bd-hero-img" style={{ backgroundImage: `url(${blog.image})` }} />
        <div className="bd-hero-overlay" />
        <div className="bd-hero-inner">
          <button className="bd-back" onClick={() => navigate("/blogs")}>← Back to Blogs</button>
          <span className="bd-category">{blog.category}</span>
          <h1 className="bd-title">{blog.title}</h1>
          <p className="bd-desc">{blog.desc}</p>
        </div>
      </div>

      {/* Body */}
      <div className="bd-body">
        <div className="bd-article">
          {blog.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="bd-related">
            <h2 className="bd-related-title">More in <span style={{ color: "#2563eb" }}>{blog.category}</span></h2>
            <div className="bd-related-grid">
              {related.map((r) => (
                <article key={r.slug} className="bd-rel-card" onClick={() => navigate(`/blogs/${r.slug}`)}>
                  <div className="bd-rel-img">
                    <img src={r.image} alt={r.title} />
                  </div>
                  <div className="bd-rel-content">
                    <span className="bd-rel-tag">{r.category}</span>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                    <span className="bd-rel-link">Read More →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .bd-page {
          font-family: "DM Sans", "Space Grotesk", sans-serif;
          background: #fff;
          min-height: 100vh;
        }

        /* Hero */
        .bd-hero {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }
        .bd-hero-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1.04);
        }
        .bd-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6,42,74,0.5) 0%, rgba(3,15,35,0.92) 100%);
        }
        .bd-hero-inner {
          position: relative;
          z-index: 1;
          padding: clamp(100px,12vw,140px) clamp(24px,6vw,100px) clamp(48px,6vw,72px);
          max-width: 860px;
        }
        .bd-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 999px;
          cursor: pointer;
          margin-bottom: 24px;
          transition: background .2s, color .2s;
          font-family: inherit;
        }
        .bd-back:hover { background: rgba(255,255,255,0.18); color: #fff; }
        .bd-category {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2563eb;
          margin-bottom: 14px;
        }
        .bd-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .bd-desc {
          font-size: clamp(15px, 1.8vw, 18px);
          color: #ffffff;
          line-height: 1.75;
          margin: 0;
          max-width: 640px;
        }

        /* Body */
        .bd-body {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(48px, 7vw, 80px) clamp(24px, 6vw, 48px);
        }

        .bd-article p {
          font-size: clamp(15px, 1.6vw, 17px);
          color: #334155;
          line-height: 1.9;
          margin: 0 0 24px;
        }

        /* Related */
        .bd-related { margin-top: 64px; padding-top: 48px; border-top: 1px solid #e2e8f0; }
        .bd-related-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 28px;
          letter-spacing: -0.02em;
        }
        .bd-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .bd-rel-card {
          background: #f8faff;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .bd-rel-card:hover { transform: translateY(-5px); box-shadow: 0 16px 32px rgba(15,23,42,0.1); }
        .bd-rel-img { height: 150px; overflow: hidden; }
        .bd-rel-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s ease; }
        .bd-rel-card:hover .bd-rel-img img { transform: scale(1.07); }
        .bd-rel-content { padding: 14px; display: grid; gap: 6px; }
        .bd-rel-tag { font-size: 10px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 1.5px; }
        .bd-rel-content h3 { margin: 0; font-size: 14px; font-weight: 700; color: #0f172a; line-height: 1.4; }
        .bd-rel-content p { margin: 0; font-size: 12px; color: #64748b; line-height: 1.6; }
        .bd-rel-link { font-size: 12px; font-weight: 600; color: #2563eb; }

        @media (max-width: 700px) {
          .bd-related-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default BlogDetail;
