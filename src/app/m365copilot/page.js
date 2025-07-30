"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from 'next/head';
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/m365copilot.css'; 
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Frameworkbanner from "../img/success-stories-banner.jpg";
import TopCollage from "../success-stories/TopCollage.js";
export default function Home() {
  return (
    <>
    <Head>
        <title>Maximize Your Microsoft Licensing ROI with CSP Global</title>
      </Head>
<>
  <div className="bg-animation" />
  <div className="page-container">
    {/* Hero Section */}
    <div className="hero-section">
      <div className="hero-content">
        <div className="logo-section">
          <a href="https://csp.global" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img
                src="https://cspblogstorage.blob.core.windows.net/cspblob2/1080x1080.jpg"
                alt="CSP Global Logo"
              />
            </div>
            <div className="company-tagline">Staying Ahead</div>
          </a>
        </div>
        <div className="hero-text">
          <h1>Microsoft Copilot</h1>
          <div className="subtitle">Executive AI Companion</div>
          <p>
            Transform your leadership workflow with intelligent AI assistance.
            Unlock productivity, accelerate decision-making, and lead your
            organization into the future of work.
          </p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">70%</div>
              <div className="stat-label">Leaders Want AI Delegation</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">300K+</div>
              <div className="stat-label">Microsoft Users Deployed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3x</div>
              <div className="stat-label">Faster Strategic Planning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Quick Access Banner */}
    <div className="quick-access">
      <div className="quick-access-content">
        <h2>🚀 Ready to Lead with AI?</h2>
        <p>
          Access Copilot instantly across your Microsoft 365 ecosystem. Your
          AI-powered executive assistant is just one click away.
        </p>
        <div className="access-buttons">
          <a href="https://copilot.microsoft.com" className="access-btn">
            Launch Copilot Web
          </a>
          <a href="#access-points" className="access-btn">
            Find in Your Apps
          </a>
          <a href="#examples" className="access-btn">
            See Examples
          </a>
        </div>
      </div>
    </div>
    {/* Prompt Mastery Section */}
    <div className="content-section">
      <div className="section-header">
        <div className="section-tagline">Executive Prompt Mastery</div>
        <h2>Command AI Like a Leader</h2>
        <p className="section-description">
          Master the art of AI communication with our proven three-pillar
          framework. Transform complex challenges into clear, actionable AI
          instructions that deliver executive-level results.
        </p>
      </div>
      <div className="prompt-structure">
        <div className="prompt-card">
          <h3>
            <div className="prompt-icon">🎯</div>
            Define Your Goal
          </h3>
          <p>
            <strong>Be specific and action-oriented:</strong>
          </p>
          <ul>
            <li>"Create 3 strategic arguments for AI adoption"</li>
            <li>"Summarize key insights from board documents"</li>
            <li>"Draft executive communication about [initiative]"</li>
            <li>"Outline solution steps for [business challenge]"</li>
          </ul>
        </div>
        <div className="prompt-card">
          <h3>
            <div className="prompt-icon">🧭</div>
            Provide Context
          </h3>
          <p>
            <strong>Set the strategic backdrop:</strong>
          </p>
          <ul>
            <li>"For upcoming board presentation"</li>
            <li>"To communicate with stakeholders about [topic]"</li>
            <li>"For competitive analysis in [industry]"</li>
            <li>"To drive organizational transformation"</li>
          </ul>
        </div>
        <div className="prompt-card">
          <h3>
            <div className="prompt-icon">📌</div>
            Set Expectations
          </h3>
          <p>
            <strong>Define tone and format:</strong>
          </p>
          <ul>
            <li>"Executive summary format, professional tone"</li>
            <li>"Technical but accessible to non-experts"</li>
            <li>"Match my leadership communication style"</li>
            <li>"Optimized for C-suite audience"</li>
          </ul>
        </div>
        <div
          className="prompt-card"
          style={{
            gridColumn: "1 / -1",
            background: "linear-gradient(135deg, #05334A 0%, #064a6b 100%)",
            color: "white",
            border: "none"
          }}
        >
          <h3 style={{ color: "#EB5E26", justifyContent: "center" }}>
            <div className="prompt-icon" style={{ background: "#EB5E26" }}>
              ✨
            </div>
            Complete Example
          </h3>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: 16,
              padding: "2rem",
              margin: "1.5rem 0",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 10,
                left: 15,
                fontSize: "2.5rem",
                color: "#EB5E26",
                opacity: "0.4"
              }}
            >
              "
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                fontStyle: "italic",
                lineHeight: "1.8",
                margin: "1rem 0",
                textAlign: "center",
                color: "white"
              }}
            >
              Create 3 strategic arguments for AI adoption for our upcoming
              board presentation and use an executive summary format with a
              professional yet compelling tone
            </p>
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 15,
                fontSize: "2.5rem",
                color: "#EB5E26",
                opacity: "0.4",
                transform: "rotate(180deg)"
              }}
            >
              "
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              fontSize: "0.9rem"
            }}
          >
            <div
              style={{
                background: "rgba(235, 94, 38, 0.2)",
                padding: "1rem",
                borderRadius: 8,
                border: "1px solid rgba(235, 94, 38, 0.3)",
                textAlign: "center"
              }}
            >
              <strong style={{ color: "#EB5E26" }}>🎯 Goal:</strong>
              <br />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>
                Create 3 strategic arguments for AI adoption
              </span>
            </div>
            <div
              style={{
                background: "rgba(235, 94, 38, 0.2)",
                padding: "1rem",
                borderRadius: 8,
                border: "1px solid rgba(235, 94, 38, 0.3)",
                textAlign: "center"
              }}
            >
              <strong style={{ color: "#EB5E26" }}>🧭 Context:</strong>
              <br />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>
                For our upcoming board presentation
              </span>
            </div>
            <div
              style={{
                background: "rgba(235, 94, 38, 0.2)",
                padding: "1rem",
                borderRadius: 8,
                border: "1px solid rgba(235, 94, 38, 0.3)",
                textAlign: "center"
              }}
            >
              <strong style={{ color: "#EB5E26" }}>📌 Expectations:</strong>
              <br />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>
                Executive summary format, professional yet compelling tone
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Executive Examples Section */}
    <div className="content-section" id="examples">
      <div className="section-header">
        <div className="section-tagline">Executive Command Center</div>
        <h2>AI-Powered Leadership in Action</h2>
        <p className="section-description">
          Deploy these battle-tested prompts to accelerate strategic
          decision-making, drive organizational change, and maintain competitive
          advantage through intelligent automation.
        </p>
      </div>
      <div className="examples-grid">
        <div className="example-card">
          <h4>🏛️ Strategic AI Business Case</h4>
          <div className="prompt-display">
            Give me three compelling arguments for our board about implementing
            AI across core business processes. Focus on ROI, competitive
            advantage, and risk mitigation. Use authoritative but accessible
            language.
          </div>
          <div className="use-case-tag">
            <strong>Impact:</strong> Board approvals, strategic planning,
            technology investment justification
          </div>
        </div>
        <div className="example-card">
          <h4>⚡ Innovation Catalyst</h4>
          <div className="prompt-display">
            Suggest three transformative yet achievable innovation initiatives
            for our teams. Make them inspiring for leaders while remaining
            practical for implementation across diverse departments.
          </div>
          <div className="use-case-tag">
            <strong>Impact:</strong> Cultural transformation, team engagement,
            competitive differentiation
          </div>
        </div>
        <div className="example-card">
          <h4>🤝 Stakeholder Intelligence</h4>
          <div className="prompt-display">
            Analyze my recent communications with [Key Partner/Client].
            Summarize relationship status, pending actions, and strategic
            opportunities. Prepare me for our upcoming executive meeting.
          </div>
          <div className="use-case-tag">
            <strong>Impact:</strong> Relationship management, meeting
            preparation, strategic partnerships
          </div>
        </div>
        <div className="example-card">
          <h4>📊 Market Intelligence</h4>
          <div className="prompt-display">
            Research our top 3 competitors' recent strategic moves and market
            positioning. Identify threats, opportunities, and gaps we can
            exploit. Present as executive briefing.
          </div>
          <div className="use-case-tag">
            <strong>Impact:</strong> Competitive strategy, market positioning,
            strategic planning
          </div>
        </div>
        <div className="example-card">
          <h4>📢 Leadership Communication</h4>
          <div className="prompt-display">
            Draft a company-wide announcement about [major initiative]. Balance
            executive authority with approachable leadership. Address potential
            concerns while building excitement.
          </div>
          <div className="use-case-tag">
            <strong>Impact:</strong> Change management, organizational
            alignment, leadership presence
          </div>
        </div>
        <div className="example-card">
          <h4>🎯 Strategic Planning</h4>
          <div className="prompt-display">
            Create a comprehensive business plan for [new venture/market].
            Include market analysis, risk assessment, and implementation
            timeline. Focus on scalability and competitive advantage.
          </div>
          <div className="use-case-tag">
            <strong>Impact:</strong> Business development, market expansion,
            strategic initiatives
          </div>
        </div>
      </div>
    </div>
    {/* Executive Success Tips */}
    <div className="tips-section">
      <div className="section-header">
        <div className="section-tagline">Leadership Excellence</div>
        <h2>Executive AI Success Framework</h2>
      </div>
      <div className="tips-grid">
        <div className="tip-card">
          <h4>
            <span className="tip-emoji">🎯</span> Start Strategic
          </h4>
          <p>
            Begin with high-impact, low-risk tasks like market analysis and
            communication drafting. Build confidence before tackling complex
            strategic planning.
          </p>
        </div>
        <div className="tip-card">
          <h4>
            <span className="tip-emoji">🔄</span> Iterate Intelligently
          </h4>
          <p>
            Refine AI outputs through follow-up prompts. Ask for different
            perspectives, adjust tone, or request deeper analysis to achieve
            executive-quality results.
          </p>
        </div>
        <div className="tip-card">
          <h4>
            <span className="tip-emoji">🔐</span> Leverage Your Data
          </h4>
          <p>
            Copilot excels when accessing your organization's emails, documents,
            and meetings. Grant appropriate permissions for personalized,
            context-aware assistance.
          </p>
        </div>
        <div className="tip-card">
          <h4>
            <span className="tip-emoji">🔗</span> Ecosystem Integration
          </h4>
          <p>
            Use Copilot across Microsoft 365 apps seamlessly. Start a strategy
            document in Word, analyze data in Excel, present findings in
            PowerPoint.
          </p>
        </div>
        <div className="tip-card">
          <h4>
            <span className="tip-emoji">👥</span> Lead by Example
          </h4>
          <p>
            Your AI adoption encourages organizational transformation.
            Demonstrate AI-enhanced productivity to drive company-wide adoption
            and competitive advantage.
          </p>
        </div>
        <div className="tip-card">
          <h4>
            <span className="tip-emoji">📈</span> Measure Impact
          </h4>
          <p>
            Track time savings, decision velocity, and outcome quality. Use
            metrics to justify further AI investment and optimize your
            leadership workflow.
          </p>
        </div>
      </div>
    </div>
    {/* CSP Global AI Services Section */}
    <div
      className="content-section"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"
      }}
    >
      <div className="section-header">
        <div className="section-tagline">Microsoft Solutions Provider</div>
        <h2>Enterprise AI Deployment Excellence</h2>
        <p className="section-description">
          CSP Global leads Microsoft Copilot deployments across Adelaide and
          Australia, helping organizations unlock AI-powered productivity. As a
          certified Microsoft Solutions Provider specializing in AI
          implementation, we accelerate your journey from strategy to successful
          adoption.
        </p>
      </div>
      <div className="examples-grid">
        <div
          className="example-card"
          style={{ borderLeft: "5px solid #05334A" }}
        >
          <h4>🚀 AI Readiness Assessment</h4>
          <p>
            Comprehensive evaluation of your organization's AI readiness,
            infrastructure requirements, and strategic opportunities. Our proven
            roadmap ensures successful Microsoft Copilot deployment aligned with
            business objectives.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a
              href="https://csp.global/ai-readiness"
              className="access-btn"
              style={{
                background: "#05334A",
                color: "white",
                padding: "0.8rem 1.5rem",
                borderRadius: 25,
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-block",
                transition: "all 0.3s ease"
              }}
            >
              Explore AI Readiness Roadmap →
            </a>
          </div>
        </div>
        <div
          className="example-card"
          style={{ borderLeft: "5px solid #EB5E26" }}
        >
          <h4>🎓 GenAI Training Programs</h4>
          <p>
            Transform your workforce with our partner-delivered comprehensive
            GenAI training. Four-week intensive sprint workshops designed for
            enterprise teams, covering practical AI application, prompt
            engineering, and productivity optimization.
          </p>
          <div
            style={{
              marginTop: "1rem",
              padding: "1rem",
              background: "linear-gradient(135deg, #EB5E26, #d54e1f)",
              color: "white",
              borderRadius: 8,
              fontSize: "0.9rem"
            }}
          >
            <strong>Company-Wide Training Available:</strong> Accelerate AI
            adoption across all departments with expert-led workshops
          </div>
        </div>
        <div
          className="example-card"
          style={{ borderLeft: "5px solid #00A4EF" }}
        >
          <h4>🏆 Deployment Leadership</h4>
          <p>
            Leading Microsoft Copilot implementations across Australia with
            proven methodologies. Our Adelaide-based team provides end-to-end
            support from planning through adoption, ensuring maximum ROI and
            user satisfaction.
          </p>
          <div
            style={{ marginTop: "1rem", color: "#6c757d", fontStyle: "italic" }}
          >
            Trusted by enterprises across Adelaide and Australia for AI
            transformation
          </div>
        </div>
      </div>
    </div>
  </div>
</>


    </>
  );
}
