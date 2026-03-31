import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const blogsData = [
  {
    slug: "top-10-web-design-companies-canada",
    title: "Top 10 Web Design Companies in Canada",
    category: "Web Design",
    image: "/images/today.jpg",
    desc: "Explore the top web design companies delivering modern and high performance websites across Canada.",
    content: `Canada is home to some of the world's most innovative web design agencies. From Vancouver to Toronto, these companies are setting new standards in digital experience design.\n\nThe best agencies combine strong UX research, modern development practices, and a deep understanding of brand identity. Whether you're a startup or an enterprise, finding the right partner can transform your digital presence.\n\nKey factors to consider when choosing a web design company include their portfolio diversity, client testimonials, technology stack, and post-launch support. The top firms in Canada consistently deliver responsive, accessible, and performance-optimized websites that drive real business results.`
  },
  {
    slug: "how-website-design-impacts-online-sales",
    title: "How Website Design Impacts Online Sales",
    category: "Digital Marketing",
    image: "/images/today.jpg",
    desc: "Discover how UI/UX design influences customer behavior and increases online conversions.",
    content: `Your website design is your most powerful sales tool. Studies show that users form an opinion about a website within 50 milliseconds — and that first impression directly impacts whether they stay or leave.\n\nGood UI/UX design reduces friction in the buying journey. Clear call-to-action buttons, intuitive navigation, fast load times, and mobile responsiveness all contribute to higher conversion rates.\n\nBrands that invest in professional design see measurable improvements in bounce rate, session duration, and ultimately, revenue. A well-designed product page alone can increase conversions by 30–40%.`
  },
  {
    slug: "website-design-cost-canada",
    title: "Website Design Cost in Canada",
    category: "Web Design",
    image: "/images/today.jpg",
    desc: "A complete breakdown of website pricing including development, UI/UX, and maintenance.",
    content: `Website design costs in Canada vary widely depending on scope, complexity, and the agency you choose. A basic brochure site might cost $2,000–$5,000, while a full e-commerce platform can run $20,000–$100,000+.\n\nKey cost drivers include the number of pages, custom design vs. templates, CMS integration, e-commerce functionality, and ongoing maintenance agreements.\n\nWhen budgeting, don't forget to factor in hosting, domain registration, SSL certificates, and annual maintenance. The cheapest option rarely delivers the best ROI — investing in quality design pays dividends over time.`
  },
  {
    slug: "wordpress-website-building-guide",
    title: "WordPress Website Building Guide",
    category: "Blog",
    image: "/images/today.jpg",
    desc: "Step-by-step process for building a professional WordPress website.",
    content: `WordPress powers over 40% of all websites on the internet — and for good reason. It's flexible, extensible, and has a massive ecosystem of themes and plugins.\n\nTo build a professional WordPress site, start with a reliable hosting provider, install WordPress, choose a lightweight theme, and install only the plugins you truly need. Performance matters — a bloated plugin stack will slow your site down.\n\nFor serious projects, consider a page builder like Elementor or a headless WordPress setup with a React frontend. Always keep WordPress core, themes, and plugins updated to maintain security.`
  },
  {
    slug: "seo-strategy-2025",
    title: "SEO Strategy for 2025",
    category: "SEO",
    image: "/images/today.jpg",
    desc: "Learn modern SEO strategies including AI search optimization and content authority.",
    content: `SEO in 2025 is fundamentally different from what it was five years ago. Google's AI-powered search (SGE) is changing how results are displayed, and content authority matters more than ever.\n\nFocus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Create comprehensive, well-researched content that genuinely answers user intent. Technical SEO — Core Web Vitals, structured data, and mobile performance — remains critical.\n\nAI-generated content is everywhere, which means original research, unique perspectives, and first-hand experience are your biggest differentiators. Build topical authority by covering subjects deeply rather than broadly.`
  },
  {
    slug: "web-design-pricing-guide-2025",
    title: "Web Design Pricing Guide 2025",
    category: "Web Design",
    image: "/images/today.jpg",
    desc: "Understand how pricing works for website design and development services.",
    content: `Understanding web design pricing helps you make informed decisions and avoid overpaying or underinvesting. In 2025, pricing models have evolved with the rise of subscription-based design services and AI-assisted development.\n\nFreelancers typically charge $50–$150/hour. Boutique agencies range from $5,000–$50,000 per project. Enterprise agencies can charge $100,000+. Subscription services like Webflow or Framer-based builds offer a middle ground.\n\nAlways get a detailed scope of work before signing. Understand what's included — wireframes, revisions, SEO setup, analytics integration, and training — to compare quotes accurately.`
  },
  {
    slug: "ai-in-education-future-classrooms",
    title: "AI in Education: Future Classrooms",
    category: "AI",
    image: "/images/today.jpg",
    desc: "Artificial Intelligence is transforming classrooms with smart assistants and adaptive learning.",
    content: `Artificial Intelligence is no longer a futuristic concept in education — it's here, and it's reshaping how students learn and how teachers teach.\n\nAdaptive learning platforms use AI to personalize content delivery based on each student's pace, strengths, and gaps. Smart tutoring systems provide instant feedback, reducing the need for one-size-fits-all instruction.\n\nAt Chronosphere, we're building AI tools that give teachers real-time insights into classroom engagement, automate administrative tasks, and help identify at-risk students before they fall behind. The future classroom is intelligent, inclusive, and data-driven.`
  },
  {
    slug: "top-10-digital-marketing-tools",
    title: "Top 10 Digital Marketing Tools",
    category: "Top 10",
    image: "/images/today.jpg",
    desc: "These powerful tools help businesses grow traffic, leads, and revenue online.",
    content: `The right digital marketing stack can be the difference between stagnant growth and exponential scale. Here are the tools every marketer should know in 2025.\n\n1. HubSpot — All-in-one CRM and marketing automation. 2. Semrush — SEO and competitive intelligence. 3. Canva — Visual content creation. 4. Mailchimp — Email marketing. 5. Google Analytics 4 — Web analytics. 6. Hootsuite — Social media management. 7. Ahrefs — Backlink analysis. 8. Hotjar — Heatmaps and user behavior. 9. Zapier — Workflow automation. 10. ChatGPT — AI-assisted content creation.\n\nThe best stack depends on your goals, team size, and budget. Start with the essentials and layer in specialized tools as you scale.`
  },
  {
    slug: "how-ai-improves-student-learning",
    title: "How AI Improves Student Learning",
    category: "AI",
    image: "/images/today.jpg",
    desc: "AI powered systems personalize education and help students learn faster.",
    content: `Research consistently shows that personalized learning leads to better outcomes. AI makes personalization scalable — something that was previously only possible with 1-on-1 tutoring.\n\nAI-powered systems analyze how a student interacts with content — where they pause, what they re-read, which questions they get wrong — and adapt the learning path in real time. This reduces frustration and keeps students in their optimal learning zone.\n\nBeyond personalization, AI helps with early intervention. By identifying patterns that precede disengagement or failure, educators can step in proactively. The result: higher completion rates, better test scores, and more confident learners.`
  },
  {
    slug: "best-practices-modern-ui-design",
    title: "Best Practices for Modern UI Design",
    category: "Web Design",
    image: "/images/today.jpg",
    desc: "Clean layout, strong typography and micro interactions are key for modern design.",
    content: `Modern UI design is defined by clarity, speed, and delight. The best interfaces feel invisible — they get out of the way and let users accomplish their goals effortlessly.\n\nKey principles: Use a consistent design system with defined spacing, typography, and color tokens. Prioritize whitespace — it's not empty space, it's breathing room. Choose typefaces that are readable at all sizes. Use micro-interactions to provide feedback and guide attention.\n\nAccessibility is non-negotiable. Design for WCAG 2.1 AA compliance from the start. Test with real users, not just internal teams. And always design mobile-first — the majority of web traffic is now on mobile devices.`
  },
  {
    slug: "ppc-advertising-beginner-guide",
    title: "PPC Advertising Beginner Guide",
    category: "PPC",
    image: "/images/today.jpg",
    desc: "Learn how to launch successful paid advertising campaigns on Google and social media.",
    content: `Pay-per-click advertising is one of the fastest ways to drive targeted traffic to your website. But without the right strategy, it's also one of the fastest ways to burn through your budget.\n\nStart with clear goals — brand awareness, lead generation, or direct sales. Choose your platform based on where your audience spends time: Google Search for high-intent buyers, Meta for awareness and retargeting, LinkedIn for B2B.\n\nWrite compelling ad copy that matches the user's search intent. Build dedicated landing pages — never send paid traffic to your homepage. Set up conversion tracking before you spend a single dollar. Monitor, test, and optimize weekly.`
  },
  {
    slug: "how-iot-is-changing-smart-schools",
    title: "How IoT is Changing Smart Schools",
    category: "AI",
    image: "/images/today.jpg",
    desc: "IoT sensors and smart automation create intelligent learning environments.",
    content: `The Internet of Things is turning school buildings into intelligent environments that respond to the needs of students and staff in real time.\n\nSmart classrooms use IoT sensors to monitor air quality, temperature, and lighting — automatically adjusting conditions for optimal learning. Attendance systems use RFID and facial recognition to eliminate manual roll calls. Energy management systems reduce utility costs by learning usage patterns.\n\nAt Chronosphere, our IoT lab programs give students hands-on experience building these systems — from sensor hardware to cloud dashboards. They're not just learning about the future; they're building it.`
  }
];

function Blogs() {
  const [activeCategory, setActiveCategory] = useState("AI");
  const navigate = useNavigate();

  const categories = ["AI", "Blog", "Digital Marketing", "PPC", "SEO", "Top 10", "Web Design"];
  const filteredBlogs = blogsData.filter((blog) => blog.category === activeCategory);

  return (
    <section className="page-section page-blogs-v2">
      <section className="blogs-hero">
        <div className="site-container">
          <span className="sh-eyebrow">Insights &amp; Stories</span>
          <h1 className="blogs-title">Blogs &amp; <span className="blogs-accent">Insights</span></h1>
          <p className="blogs-subtitle">Expert perspectives on education, innovation, parenting, and student development.</p>
        </div>
      </section>

      <section className="blogs-body">
        <div>
          <div className="blogs-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`blog-tab ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blogs-grid">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.slug}
                className="blog-card"
                onClick={() => navigate(`/blogs/${blog.slug}`)}
              >
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <span className="blog-tag">{blog.category}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  <span className="blog-link">Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-blogs-v2 {
          background: #f5f7fb;
          font-family: "DM Sans", "Space Grotesk", sans-serif;
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

        .blogs-hero {
          background: #ffffff;
          padding: clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px) clamp(32px, 4vw, 48px);
        }

        .blogs-hero .site-container {
          text-align: left;
          max-width: 100%;
          padding: 0;
          margin:0;
        }

        .blogs-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .blogs-accent { color: #2563eb; }

        .blogs-subtitle {
          font-size: clamp(14px, 1.6vw, 17px);
          color: #64748b;
          line-height: 1.8;
          max-width: 580px;
          margin: 0;
        }

        .blogs-body {
          padding: 36px clamp(24px, 5vw, 80px) 70px;
        }

        .blogs-tabs {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .blog-tab {
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #64748b;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background .2s, color .2s, border-color .2s;
        }
        .blog-tab:hover { border-color: #2563eb; color: #2563eb; }
        .blog-tab.active {
          background: #2563eb;
          color: #ffffff;
          font-weight: 600;
          border-color: #2563eb;
          box-shadow: 0 4px 14px rgba(37,99,235,0.25);
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .blog-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.25);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
        }

        .blog-image { height: 180px; overflow: hidden; }
        .blog-image img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .blog-card:hover .blog-image img { transform: scale(1.08); }

        .blog-content {
          padding: 16px;
          display: grid;
          gap: 8px;
          transition: transform 0.35s ease;
        }
        .blog-card:hover .blog-content { transform: scale(1.02); }

        .blog-tag { font-size: 11px; color: #2563eb; font-weight: 600; }

        .blog-content h3 { margin: 0; font-size: 16px; color: #0b1220; }
        .blog-content p { margin: 0; color: #5b6472; line-height: 1.6; font-size: 13px; }

        .blog-link {
          color: #2563eb;
          font-weight: 600;
          font-size: 13px;
          justify-self: flex-start;
        }

        /* Enhanced responsive breakpoints */
        @media (max-width: 1199.98px) {
          .blogs-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
          .blogs-hero { padding: 80px 40px 60px; }
        }

        @media (max-width: 991.98px) {
          .blogs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
          .blogs-hero { padding: 70px 32px 50px; }
          .blogs-body { padding: 40px 32px 60px; }
          .blogs-title { font-size: clamp(32px, 6vw, 42px); }
          .blogs-subtitle { font-size: clamp(16px, 2vw, 18px); }
        }

        @media (max-width: 767.98px) {
          .blogs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
          .blogs-hero { padding: 60px 24px 40px; text-align: center; }
          .blogs-body { padding: 32px 24px 48px; }
          .blogs-title { font-size: clamp(28px, 7vw, 36px); }
          .blogs-subtitle { font-size: clamp(14px, 1.8vw, 16px); }
          .blogs-tabs { flex-wrap: wrap; justify-content: center; gap: 8px; }
          .blog-tab { padding: 8px 16px; font-size: 13px; }
          .blog-card { padding: 20px; }
        }

        @media (max-width: 575.98px) {
          .blogs-grid { grid-template-columns: 1fr; gap: 16px; }
          .blogs-hero { padding: 48px 16px 32px; }
          .blogs-body { padding: 24px 16px 40px; }
          .blogs-title { font-size: clamp(24px, 8vw, 32px); }
          .blogs-subtitle { font-size: clamp(13px, 1.6vw, 15px); }
          .blog-tab { padding: 6px 14px; font-size: 12px; }
          .blog-card { padding: 16px; }
          .blog-title { font-size: 16px; }
          .blog-excerpt { font-size: 13px; }
        }

        /* Legacy breakpoints for compatibility */
        @media (max-width: 960px) { .blogs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) {
          .blogs-grid { grid-template-columns: 1fr; }
          .blogs-hero { padding: 32px 16px 24px; }
          .blogs-body { padding: 24px 16px 48px; }
          .blogs-tabs { gap: 8px; }
          .blog-tab { padding: 6px 14px; font-size: 12px; }
        }
      `}</style>
    </section>
  );
}

export default Blogs;
