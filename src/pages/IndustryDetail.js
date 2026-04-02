import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const industryData = {
  b2b: {
    title: "B2B Industries",
    eyebrow: "Business-to-Business Solutions",
    hero: "Empowering Tech Firms, Manufacturers & Enterprises",
    desc: "We deliver scalable digital solutions for B2B industries, helping tech firms, manufacturers, startups, and financial services optimize operations, enhance customer experiences, and drive growth through innovative technology.",
    highlights: [
      { icon: "🏭", label: "Manufacturing", text: "Digital transformation for production lines, supply chain optimization, and quality control systems." },
      { icon: "💻", label: "Tech & IT Services", text: "Custom software development, cloud migration, and cybersecurity solutions." },
      { icon: "🚀", label: "Startups", text: "MVP development, scaling infrastructure, and product-market fit acceleration." },
      { icon: "💰", label: "Financial Services", text: "Fintech solutions, payment processing, and regulatory compliance platforms." },
      { icon: "📡", label: "Telecommunication", text: "Network infrastructure, IoT solutions, and communication platforms." },
      { icon: "🚛", label: "Logistics", text: "Supply chain management, fleet tracking, and warehouse automation." },
    ],
    tags: ["Manufacturing", "Tech & IT", "Startups", "Financial Services", "Telecom", "Logistics"],
    color: "#2563eb",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
  },
  b2c: {
    title: "B2C Industries",
    eyebrow: "Business-to-Consumer Solutions",
    hero: "Driving Consumer Engagement & Experience",
    desc: "We create engaging digital experiences for consumer-facing businesses, helping retail, health, automotive, fashion, and education sectors connect with customers through innovative technology solutions.",
    highlights: [
      { icon: "🍽️", label: "Food & Beverage", text: "Online ordering systems, delivery apps, and restaurant management platforms." },
      { icon: "🏃", label: "Health & Fitness", text: "Fitness tracking apps, telemedicine platforms, and wellness management systems." },
      { icon: "🛍️", label: "Retailers", text: "E-commerce platforms, inventory management, and customer loyalty programs." },
      { icon: "🚗", label: "Automotive", text: "Vehicle tracking, dealership management, and automotive service platforms." },
      { icon: "👗", label: "Fashion & Beauty", text: "Virtual try-on, styling apps, and beauty service booking systems." },
      { icon: "🎓", label: "Education", text: "Learning management systems, virtual classrooms, and educational content platforms." },
    ],
    tags: ["Food & Beverage", "Health & Fitness", "Retail", "Automotive", "Fashion", "Education"],
    color: "#2563eb",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80&auto=format&fit=crop",
  },
  professional: {
    title: "Professional Services",
    eyebrow: "Expert Solutions for Service Professionals",
    hero: "Supporting Law Firms, Healthcare & Service Providers",
    desc: "We provide smart technology tools for professional service providers, enabling law firms, healthcare providers, architects, and other service professionals to streamline operations and deliver exceptional client experiences.",
    highlights: [
      { icon: "⚖️", label: "Law Firms", text: "Case management systems, legal research tools, and client portal solutions." },
      { icon: "🧮", label: "Accounting Firms", text: "Tax preparation software, financial reporting, and client management platforms." },
      { icon: "🏥", label: "Healthcare", text: "Patient management systems, telemedicine, and healthcare administration tools." },
      { icon: "📐", label: "Architects", text: "CAD software, project management, and client presentation tools." },
      { icon: "🦷", label: "Dentists", text: "Practice management, appointment scheduling, and patient record systems." },
      { icon: "🏥", label: "Medical Suppliers", text: "Inventory management, order processing, and supplier network platforms." },
    ],
    tags: ["Law Firms", "Accounting", "Healthcare", "Architecture", "Dentistry", "Medical Supplies"],
    color: "#2563eb",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
  },
  enterprise: {
    title: "Enterprise & Public Sector",
    eyebrow: "Large-Scale Solutions & Government Services",
    hero: "Transforming Insurance, Government & Large Enterprises",
    desc: "We build enterprise-grade platforms for insurance companies, government agencies, energy providers, and large organizations, delivering robust, scalable solutions that meet the highest standards of security and performance.",
    highlights: [
      { icon: "🛡️", label: "Insurance", text: "Claims processing, risk assessment, and customer service platforms." },
      { icon: "🏛️", label: "Government", text: "Citizen services, data management, and public administration systems." },
      { icon: "⚡", label: "Renewable Energy", text: "Grid management, renewable monitoring, and energy optimization platforms." },
      { icon: "🚆", label: "Transport", text: "Fleet management, route optimization, and transportation logistics." },
      { icon: "💊", label: "Healthcare & Pharma", text: "Drug development, clinical trials, and pharmaceutical supply chain." },
      { icon: "🏨", label: "Hotels", text: "Property management, booking systems, and guest experience platforms." },
    ],
    tags: ["Insurance", "Government", "Energy", "Transport", "Healthcare", "Hospitality"],
    color: "#2563eb",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&auto=format&fit=crop",
  },
  education: {
    title: "Education & EdTech",
    eyebrow: "Revolutionizing Learning & Education Technology",
    hero: "Transforming Education Through Technology",
    desc: "We revolutionize learning with cutting-edge LMS platforms, AI-powered tutors, virtual STEM labs, and comprehensive student lifecycle management tools that enhance educational outcomes.",
    highlights: [
      { icon: "🏫", label: "Schools", text: "Student information systems, learning management, and parent communication platforms." },
      { icon: "🎓", label: "Colleges", text: "Campus management, online learning, and student engagement systems." },
      { icon: "🚀", label: "EdTech Startups", text: "Educational app development, learning analytics, and content management." },
      { icon: "📚", label: "Training Centers", text: "Course management, certification tracking, and assessment platforms." },
      { icon: "💻", label: "Online Platforms", text: "E-learning portals, video streaming, and interactive learning tools." },
      { icon: "👨‍🏫", label: "Coaching Institutes", text: "Test preparation, progress tracking, and personalized learning paths." },
    ],
    tags: ["Schools", "Colleges", "EdTech", "Training", "Online Learning", "Coaching"],
    color: "#2563eb",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80&auto=format&fit=crop",
  },
  media: {
    title: "Media & Entertainment",
    eyebrow: "Content Creation & Digital Media Solutions",
    hero: "Powering Content Creators & Entertainment Platforms",
    desc: "We power content creators, studios, gaming companies, and digital media platforms with innovative technology solutions that enhance content production, distribution, and audience engagement.",
    highlights: [
      { icon: "🎮", label: "Gaming Studios", text: "Game development tools, multiplayer platforms, and gaming analytics." },
      { icon: "🎬", label: "Content Creators", text: "Content management, social media tools, and creator economy platforms." },
      { icon: "📺", label: "Digital Media", text: "Video streaming, content delivery, and media management systems." },
      { icon: "🎨", label: "Animation Studios", text: "Animation software, rendering pipelines, and visual effects tools." },
      { icon: "🎵", label: "Streaming Platforms", text: "Video/audio streaming, recommendation engines, and user engagement." },
      { icon: "📱", label: "Social Media", text: "Content platforms, community management, and social analytics." },
    ],
    tags: ["Gaming", "Content Creation", "Digital Media", "Animation", "Streaming", "Social Media"],
    color: "#2563eb",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80&auto=format&fit=crop",
  },
};

function IndustryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const industry = industryData[id];

  useEffect(() => {
    if (!industry) {
      navigate("/industries", { replace: true });
    }
  }, [industry, navigate]);

  if (!industry) {
    return null;
  }

  return (
    <div style={{ padding: "80px 20px", fontFamily: "DM Sans, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Hero Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          marginBottom: "80px",
          alignItems: "center"
        }}>
          <div>
            <span style={{
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#2563eb",
              marginBottom: "20px",
              display: "inline-block"
            }}>
              {industry.eyebrow}
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: "800",
              color: "#0f172a",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              margin: "0 0 20px 0"
            }}>
              {industry.hero}
            </h1>
            <p style={{
              fontSize: "18px",
              color: "#64748b",
              lineHeight: "1.7",
              margin: "0"
            }}>
              {industry.desc}
            </p>
          </div>
          <div>
            <img
              src={industry.img}
              alt={industry.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
        </div>

        {/* Highlights Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#0f172a",
            textAlign: "center",
            marginBottom: "60px"
          }}>
            Our Solutions
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px"
          }}>
            {industry.highlights.map((highlight, index) => (
              <div key={index} style={{
                background: "#f8fafc",
                borderRadius: "12px",
                padding: "30px",
                textAlign: "center",
                border: "1px solid #e2e8f0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>
                  {highlight.icon}
                </div>
                <h3 style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#0f172a",
                  marginBottom: "15px"
                }}>
                  {highlight.label}
                </h3>
                <p style={{
                  fontSize: "16px",
                  color: "#64748b",
                  lineHeight: "1.6",
                  margin: "0"
                }}>
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tags Section */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#0f172a",
            marginBottom: "40px"
          }}>
            Industries We Serve
          </h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px"
          }}>
            {industry.tags.map((tag, index) => (
              <span key={index} style={{
                background: "rgba(37, 99, 235, 0.1)",
                color: "#2563eb",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid rgba(37, 99, 235, 0.3)"
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustryDetail;