import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const blogsData = [
  { slug: "top-10-web-design-companies-canada", title: "Top 10 Web Design Companies in Canada", category: "Web Design", image: "/images/today.jpg", desc: "Explore the top web design companies delivering modern and high performance websites across Canada.", content: `Canada is home to some of the world's most innovative web design agencies. From Vancouver to Toronto, these companies are setting new standards in digital experience design.\n\nThe best agencies combine strong UX research, modern development practices, and a deep understanding of brand identity. Whether you're a startup or an enterprise, finding the right partner can transform your digital presence.\n\nKey factors to consider when choosing a web design company include their portfolio diversity, client testimonials, technology stack, and post-launch support. The top firms in Canada consistently deliver responsive, accessible, and performance-optimized websites that drive real business results.` },
  { slug: "how-website-design-impacts-online-sales", title: "How Website Design Impacts Online Sales", category: "Digital Marketing", image: "/images/today.jpg", desc: "Discover how UI/UX design influences customer behavior and increases online conversions.", content: `Your website design is your most powerful sales tool. Studies show that users form an opinion about a website within 50 milliseconds — and that first impression directly impacts whether they stay or leave.\n\nGood UI/UX design reduces friction in the buying journey. Clear call-to-action buttons, intuitive navigation, fast load times, and mobile responsiveness all contribute to higher conversion rates.\n\nBrands that invest in professional design see measurable improvements in bounce rate, session duration, and ultimately, revenue. A well-designed product page alone can increase conversions by 30–40%.` },
  { slug: "website-design-cost-canada", title: "Website Design Cost in Canada", category: "Web Design", image: "/images/today.jpg", desc: "A complete breakdown of website pricing including development, UI/UX, and maintenance.", content: `Website design costs in Canada vary widely depending on scope, complexity, and the agency you choose. A basic brochure site might cost $2,000–$5,000, while a full e-commerce platform can run $20,000–$100,000+.\n\nKey cost drivers include the number of pages, custom design vs. templates, CMS integration, e-commerce functionality, and ongoing maintenance agreements.\n\nWhen budgeting, don't forget to factor in hosting, domain registration, SSL certificates, and annual maintenance. The cheapest option rarely delivers the best ROI — investing in quality design pays dividends over time.` },
  { slug: "wordpress-website-building-guide", title: "WordPress Website Building Guide", category: "Blog", image: "/images/today.jpg", desc: "Step-by-step process for building a professional WordPress website.", content: `WordPress powers over 40% of all websites on the internet — and for good reason. It's flexible, extensible, and has a massive ecosystem of themes and plugins.\n\nTo build a professional WordPress site, start with a reliable hosting provider, install WordPress, choose a lightweight theme, and install only the plugins you truly need. Performance matters — a bloated plugin stack will slow your site down.\n\nFor serious projects, consider a page builder like Elementor or a headless WordPress setup with a React frontend. Always keep WordPress core, themes, and plugins updated to maintain security.` },
  { slug: "seo-strategy-2025", title: "SEO Strategy for 2025", category: "SEO", image: "/images/today.jpg", desc: "Learn modern SEO strategies including AI search optimization and content authority.", content: `SEO in 2025 is fundamentally different from what it was five years ago. Google's AI-powered search (SGE) is changing how results are displayed, and content authority matters more than ever.\n\nFocus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Create comprehensive, well-researched content that genuinely answers user intent. Technical SEO — Core Web Vitals, structured data, and mobile performance — remains critical.\n\nAI-generated content is everywhere, which means original research, unique perspectives, and first-hand experience are your biggest differentiators. Build topical authority by covering subjects deeply rather than broadly.` },
  { slug: "web-design-pricing-guide-2025", title: "Web Design Pricing Guide 2025", category: "Web Design", image: "/images/today.jpg", desc: "Understand how pricing works for website design and development services.", content: `Understanding web design pricing helps you make informed decisions and avoid overpaying or underinvesting. In 2025, pricing models have evolved with the rise of subscription-based design services and AI-assisted development.\n\nFreelancers typically charge $50–$150/hour. Boutique agencies range from $5,000–$50,000 per project. Enterprise agencies can charge $100,000+. Subscription services like Webflow or Framer-based builds offer a middle ground.\n\nAlways get a detailed scope of work before signing. Understand what's included — wireframes, revisions, SEO setup, analytics integration, and training — to compare quotes accurately.` },
  { slug: "ai-in-education-future-classrooms", title: "AI in Education: Future Classrooms", category: "AI", image: "/images/today.jpg", desc: "Artificial Intelligence is transforming classrooms with smart assistants and adaptive learning.", content: `Artificial Intelligence is no longer a futuristic concept in education — it's here, and it's reshaping how students learn and how teachers teach.\n\nAdaptive learning platforms use AI to personalize content delivery based on each student's pace, strengths, and gaps. Smart tutoring systems provide instant feedback, reducing the need for one-size-fits-all instruction.\n\nAt Chronosphere, we're building AI tools that give teachers real-time insights into classroom engagement, automate administrative tasks, and help identify at-risk students before they fall behind. The future classroom is intelligent, inclusive, and data-driven.` },
  { slug: "top-10-digital-marketing-tools", title: "Top 10 Digital Marketing Tools", category: "Top 10", image: "/images/today.jpg", desc: "These powerful tools help businesses grow traffic, leads, and revenue online.", content: `The right digital marketing stack can be the difference between stagnant growth and exponential scale. Here are the tools every marketer should know in 2025.\n\n1. HubSpot — All-in-one CRM and marketing automation. 2. Semrush — SEO and competitive intelligence. 3. Canva — Visual content creation. 4. Mailchimp — Email marketing. 5. Google Analytics 4 — Web analytics. 6. Hootsuite — Social media management. 7. Ahrefs — Backlink analysis. 8. Hotjar — Heatmaps and user behavior. 9. Zapier — Workflow automation. 10. ChatGPT — AI-assisted content creation.\n\nThe best stack depends on your goals, team size, and budget. Start with the essentials and layer in specialized tools as you scale.` },
  { slug: "how-ai-improves-student-learning", title: "How AI Improves Student Learning", category: "AI", image: "/images/today.jpg", desc: "AI powered systems personalize education and help students learn faster.", content: `Research consistently shows that personalized learning leads to better outcomes. AI makes personalization scalable — something that was previously only possible with 1-on-1 tutoring.\n\nAI-powered systems analyze how a student interacts with content — where they pause, what they re-read, which questions they get wrong — and adapt the learning path in real time. This reduces frustration and keeps students in their optimal learning zone.\n\nBeyond personalization, AI helps with early intervention. By identifying patterns that precede disengagement or failure, educators can step in proactively. The result: higher completion rates, better test scores, and more confident learners.` },
  { slug: "best-practices-modern-ui-design", title: "Best Practices for Modern UI Design", category: "Web Design", image: "/images/today.jpg", desc: "Clean layout, strong typography and micro interactions are key for modern design.", content: `Modern UI design is defined by clarity, speed, and delight. The best interfaces feel invisible — they get out of the way and let users accomplish their goals effortlessly.\n\nKey principles: Use a consistent design system with defined spacing, typography, and color tokens. Prioritize whitespace — it's not empty space, it's breathing room. Choose typefaces that are readable at all sizes. Use micro-interactions to provide feedback and guide attention.\n\nAccessibility is non-negotiable. Design for WCAG 2.1 AA compliance from the start. Test with real users, not just internal teams. And always design mobile-first — the majority of web traffic is now on mobile devices.` },
  { slug: "ppc-advertising-beginner-guide", title: "PPC Advertising Beginner Guide", category: "PPC", image: "/images/today.jpg", desc: "Learn how to launch successful paid advertising campaigns on Google and social media.", content: `Pay-per-click advertising is one of the fastest ways to drive targeted traffic to your website. But without the right strategy, it's also one of the fastest ways to burn through your budget.\n\nStart with clear goals — brand awareness, lead generation, or direct sales. Choose your platform based on where your audience spends time: Google Search for high-intent buyers, Meta for awareness and retargeting, LinkedIn for B2B.\n\nWrite compelling ad copy that matches the user's search intent. Build dedicated landing pages — never send paid traffic to your homepage. Set up conversion tracking before you spend a single dollar. Monitor, test, and optimize weekly.` },
  { slug: "how-iot-is-changing-smart-schools", title: "How IoT is Changing Smart Schools", category: "AI", image: "/images/today.jpg", desc: "IoT sensors and smart automation create intelligent learning environments.", content: `The Internet of Things is turning school buildings into intelligent environments that respond to the needs of students and staff in real time.\n\nSmart classrooms use IoT sensors to monitor air quality, temperature, and lighting — automatically adjusting conditions for optimal learning. Attendance systems use RFID and facial recognition to eliminate manual roll calls. Energy management systems reduce utility costs by learning usage patterns.\n\nAt Chronosphere, our IoT lab programs give students hands-on experience building these systems — from sensor hardware to cloud dashboards. They're not just learning about the future; they're building it.` },
];

const categories = ["AI", "Blog", "Digital Marketing", "PPC", "SEO", "Top 10", "Web Design"];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("AI");
  const navigate = useNavigate();
  const filtered = blogsData.filter(b => b.category === activeCategory);

  return (
    <section style={{ background: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>

      {/* Hero */}
      <div style={{ background: "#fff", padding: "clamp(64px,8vw,100px) clamp(16px,4vw,80px) clamp(40px,5vw,64px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2563eb", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "20px", height: "2px", background: "#2563eb", display: "inline-block", borderRadius: "2px" }} />
            Insights & Stories
          </span>
          <h1 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
            Blogs & <span style={{ color: "#2563eb" }}>Insights</span>
          </h1>
          <p style={{ fontSize: "clamp(14px,1.6vw,17px)", color: "#64748b", lineHeight: 1.8, maxWidth: "560px", margin: 0 }}>
            Expert perspectives on education, innovation, parenting, and student development.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "clamp(40px,5vw,64px) clamp(16px,4vw,80px) clamp(64px,8vw,100px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                padding: "8px 18px", borderRadius: "999px",
                border: `1px solid ${activeCategory === cat ? "#2563eb" : "#e2e8f0"}`,
                background: activeCategory === cat ? "#2563eb" : "#fff",
                color: activeCategory === cat ? "#fff" : "#64748b",
                fontSize: "13px", fontWeight: activeCategory === cat ? 700 : 500,
                cursor: "pointer", transition: "all .2s",
                boxShadow: activeCategory === cat ? "0 4px 14px rgba(37,99,235,.25)" : "none",
                fontFamily: "inherit",
              }}
                onMouseEnter={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.color = "#2563eb"; } }}
                onMouseLeave={e => { if (activeCategory !== cat) { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#64748b"; } }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p style={{ color: "#94a3b8", fontSize: "15px", textAlign: "center", padding: "48px 0" }}>No posts in this category yet.</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="bl2-grid">
              {filtered.map((blog, i) => (
                <BlogCard key={blog.slug} blog={blog} i={i} onClick={() => navigate(`/blogs/${blog.slug}`)} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .bl2-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 580px) { .bl2-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function BlogCard({ blog, i, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff", borderRadius: "14px", overflow: "hidden",
        border: "1px solid rgba(148,163,184,.2)",
        boxShadow: hovered ? "0 20px 48px rgba(11,18,32,.12)" : "0 2px 12px rgba(11,18,32,.06)",
        display: "flex", flexDirection: "column", cursor: "pointer",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform .35s cubic-bezier(0.22,1,0.36,1), box-shadow .35s cubic-bezier(0.22,1,0.36,1)",
        animation: `bl2CardIn .5s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms both`,
      }}>
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img src={blog.image} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.06)" : "scale(1)", transition: "transform .6s ease" }} />
      </div>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2563eb" }}>{blog.category}</span>
        <h3 style={{ fontFamily: "'Space Grotesk', 'Poppins', 'Inter', sans-serif", margin: 0, fontSize: "16px", fontWeight: 700, color: "#0b1220", lineHeight: 1.35, letterSpacing: "-0.01em" }}>{blog.title}</h3>
        <p style={{ margin: 0, color: "#64748b", lineHeight: 1.65, fontSize: "13.5px", flex: 1 }}>{blog.desc}</p>
        <span style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
          Read More
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>
      <style>{`@keyframes bl2CardIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </article>
  );
}
