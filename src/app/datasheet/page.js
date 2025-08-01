"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from 'next/head';
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/datasheet.css'; 
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

   <div className="datasheet">
  {/* Header Section */}
  <div className="header">
    <div className="header-content">
      <div className="logo-section">
        <div className="logo">
          <img
            src="https://cspblogstorage.blob.core.windows.net/cspblob2/1080x1080.jpg"
            alt="CSP Global Logo"
          />
        </div>
        <div className="tagline">Staying Ahead</div>
      </div>
      <div className="hero-content">
        <h1>Technology Solutions Provider</h1>
        <p>
          Empowering your business with comprehensive technology solutions -
          from advanced cybersecurity and intelligent automation to pro-active
          IT support and governance, we transform digital challenges into
          competitive advantages.
        </p>
      </div>
    </div>
  </div>
  {/* Quote Section */}
  <div className="quote-section">
    <div className="quote">
      "Hackers only need to get it right once, we as defenders need to get it
      right every single time!"
    </div>
    <div className="quote-author">Callum Golding, CEO</div>
  </div>
  {/* Core Principles Section */}
  <div className="principles-section">
    <div className="principles-header">
      <div className="principles-tagline">Eliminate • Simplify • Protect</div>
      <h2>Our Core Principles</h2>
      <p className="principles-description">
        Technology should drive your business forward, not hold it back. As your
        strategic technology partner, we don't just manage systems – we
        transform how you work through three fundamental principles.
      </p>
    </div>
    <div className="principles-grid">
      <div className="principle-card">
        <h3>Eliminate</h3>
        <p>
          Eliminate barriers to growth, risk and downtime. We help you eliminate
          inefficiencies with the right-fit technology stack, eliminate
          vulnerabilities through layered security strategies, and eliminate
          operational disruptions.
        </p>
        <ul className="principle-points">
          <li>Eliminate inefficiencies, outdated systems, licenses/software</li>
          <li>Enhance technology adoption</li>
          <li>Unify disparate security</li>
          <li>Simplify helpdesk support</li>
        </ul>
      </div>
      <div className="principle-card">
        <h3>Simplify</h3>
        <p>
          Simplify complexity through intuitive, user-friendly and integrated
          solutions. We turn intricate technology challenges into streamlined
          solutions that drive results.
        </p>
        <ul className="principle-points">
          <li>Maximize Generative AI usage</li>
          <li>Secure Remote work</li>
          <li>Drive policy compliance</li>
          <li>Streamline IT operations</li>
        </ul>
      </div>
      <div className="principle-card">
        <h3>Protect</h3>
        <p>
          Protect what matters most. We safeguard your business continuity with
          robust disaster recovery and resilience planning, protect sensitive
          data through alignment with Zero Trust and Essential Eight frameworks.
        </p>
        <ul className="principle-points">
          <li>Protect your people, data, and operations</li>
          <li>Robust, modern security</li>
          <li>Ensure measurable ROI</li>
          <li>Business continuity planning</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Main Content */}
  <div className="main-content">
    <div className="content-section">
      <h2>About CSP Global</h2>
      <p>
        At CSP, we pride ourselves on having the brightest and most
        knowledgeable professionals in the IT industry. Our passion for
        technology is matched only by our dedication to making our clients
        happy. We live and breathe tech, which is why we excel at what we do.
      </p>
      <p>
        From day one, we knew we did not fit the traditional Managed Service
        Provider (MSP) mould. We realized that to withstand the pressures of
        running a cloud-based digital ecosystem, organizations needed more than
        just a help desk and occasional site visits. They needed a Technology
        Solutions Provider (TSP).
      </p>
      <p>
        We transform problems into solutions and are proud to be reshaping the
        IT service industry. While generic service providers fall short, we
        stand out as a single source of wisdom with broad capabilities that
        match the challenges of today.
      </p>
      <div className="experience-section">
        <h3>Experience the CSP Approach</h3>
        <ul className="experience-list">
          <li>Copilot Readiness Program</li>
          <li>Microsoft Lists and Loop adoption</li>
          <li>Copilot Studio with Agents</li>
          <li>SharePoint Intranet and Data Security</li>
          <li>Change Advisory Board approval processes</li>
        </ul>
      </div>
      <h2>Our Solutions</h2>
      <div className="solutions-grid">
        <div className="solution-card">
          <h4>Networking</h4>
          <p>
            Internet and WIFI services with top of the range connectivity,
            visibility and uptime
          </p>
        </div>
        <div className="solution-card">
          <h4>Cloud and Infrastructure</h4>
          <p>
            Drive cloud strategies that work for you with state of the art
            expert delivery
          </p>
        </div>
        <div className="solution-card">
          <h4>Cybersecurity</h4>
          <p>
            Managed detection and response 24x7 is included as part of our
            service and available at a fraction of cost. Affordable cyber for
            SME's
          </p>
        </div>
        <div className="solution-card">
          <h4>Data and Gen AI</h4>
          <p>
            Unlock the potential of Generative AI without sacrificing on
            security. Data Security Posture Management is the foundation of
            success
          </p>
        </div>
        <div className="solution-card">
          <h4>Hardware &amp; Software</h4>
          <p>
            Our reseller partnerships stack ensure you get expert sales advice
            whenever you need it
          </p>
        </div>
        <div className="solution-card">
          <h4>Service Desk</h4>
          <p>
            Our state-of-the-art Microsoft Teams integrated service desk app
            eliminates 40% of first level support requirements
          </p>
        </div>
        <div className="solution-card">
          <h4>Embedded IT Specialist</h4>
          <p>
            We recruit and embed on your behalf. As a trusted Microsoft Solution
            Provider (gold partner), our skilling ensures staff retention
          </p>
        </div>
      </div>
    </div>
    <div className="sidebar">
      <div className="benefits-card">
        <h3>Main Benefits</h3>
        <div className="benefit-item">
          <h4>Cost-Effective</h4>
          <p>
            We help you bundle services which translates into savings without
            compromising on quality. We drive business outcomes through
            technology to ensure the best return on your investment.
          </p>
        </div>
        <div className="benefit-item">
          <h4>Strategic Vision</h4>
          <p>
            Our advisory services help you plan ahead and safeguard your future.
            By evaluating the integration of emerging technologies, we
            prioritize the safety of your staff, data, and operations.
          </p>
        </div>
        <div className="benefit-item">
          <h4>Resolution</h4>
          <p>
            Our service level agreements and bespoke client portal empower your
            organization. We resolve threats and IT issues with unparalleled
            speed and accuracy.
          </p>
        </div>
      </div>
      <div className="differentiators-card">
        <h3>Differentiators</h3>
        <div className="differentiator-item">
          <h4>Trusted Partners</h4>
          <p>
            As an ASD network partner and Microsoft Gold partner, we are primed
            with threat intelligence and security controls that keep you safe
            around the clock.
          </p>
        </div>
        <div className="differentiator-item">
          <h4>Industry Expertise</h4>
          <p>
            Being at the helm of multiple customers across many industries means
            we keep pulse on what's happening daily. We unclog bottlenecks and
            open avenues for revenue growth.
          </p>
        </div>
        <div className="differentiator-item">
          <h4>Better Together</h4>
          <p>
            Our 'better together' philosophy means we are partnered with some of
            the best solution providers in Australia. No matter what tech
            problem you are having, we always have someone that can help.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Capabilities Section */}
  <div className="capabilities-section">
    <h2>Our Capabilities</h2>
    <div className="capabilities-grid">
      <div className="capability-item">
        ● Data, Identity and Endpoint Security
      </div>
      <div className="capability-item">● Governance, Risk and Compliance</div>
      <div className="capability-item">● Cyber Awareness Training</div>
      <div className="capability-item">● Identity and Access Management</div>
      <div className="capability-item">● Network and Infrastructure</div>
      <div className="capability-item">● Cloud Security and Architecture</div>
      <div className="capability-item">● Threat Intelligence</div>
      <div className="capability-item">● vCIO and vCAIO advisory</div>
      <div className="capability-item">● Microsoft 365 Management</div>
      <div className="capability-item">● Endpoint Device Management</div>
    </div>
  </div>
  {/* Footer */}
  <div className="footer">
    <div className="contact-info">
      <div className="contact-item">
        <span>📧</span>
        <a href="mailto:info@csp.global">info@csp.global</a>
      </div>
      <div className="contact-item">
        <span>📞</span>
        <a href="tel:1300199093">1300 199 093</a>
      </div>
      <div className="contact-item">
        <span>🌐</span>
        <a href="https://csp.global">csp.global</a>
      </div>
    </div>
    <p>© 2025 CSP Global. All rights reserved. | CSP Lighthouse Pty Ltd</p>
  </div>
</div>


    </>
  );
}
