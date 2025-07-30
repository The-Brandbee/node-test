"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from 'next/head';
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/disp.css'; 
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

   <div class="datasheet">
      
        <div class="header">
            <div class="header-content">
                <div class="logo-section">
                    <a href="https://csp.global" >
                        <div class="logo">
                            <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/1080x1080.jpg" alt="CSP Global Logo" />
                        </div>
                        <div class="tagline">Staying Ahead</div>
                    </a>
                </div>
                <div class="hero-content">
                    <h1>Essential Eight DISP Implementation</h1>
                    <div class="subtitle">Microsoft-Native Security Solutions</div>
                    <p>Achieve Essential Eight maturity and DISP compliance with CSP Global's Microsoft-focused approach. We leverage native Microsoft security features for 6 of the 8 mitigation strategies, complemented by ThreatLocker for comprehensive protection.</p>
                </div>
            </div>
        </div>

       
        <div class="stats-highlight">
            <h2>Microsoft Security Excellence</h2>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="number">6/8</div>
                    <div class="label">Native Microsoft Solutions</div>
                </div>
                <div class="stat-item">
                    <div class="number">#1</div>
                    <div class="label">ThreatLocker Reseller Australia</div>
                </div>
                <div class="stat-item">
                    <div class="number">Gold</div>
                    <div class="label">Microsoft Security Partner</div>
                </div>
                <div class="stat-item">
                    <div class="number">ML3</div>
                    <div class="label">Maturity Level Support</div>
                </div>
            </div>
        </div>

      
        <div class="essential-eight-section">
            <div class="section-header">
                <div class="section-tagline">ACSC Essential Eight Framework</div>
                <h2>Microsoft-Native Implementation</h2>
                <p class="section-description">CSP Global specializes in implementing Essential Eight controls using Microsoft's native security capabilities. Our approach reduces complexity, improves integration, and provides cost-effective compliance for organizations in the Microsoft ecosystem.</p>
            </div>
            
            <div class="mitigation-grid">
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">1</span>
                        Application Control
                        <span class="threatlocker-badge">ThreatLocker</span>
                    </h3>
                    <p>Advanced allowlisting using ThreatLocker's Zero Trust platform complemented by Microsoft Defender for Cloud Apps for SaaS application governance. As Australia's largest ThreatLocker reseller, we provide comprehensive application control.</p>
                    <span class="solution-tag">ThreatLocker Application Allowlisting</span>
                    <span class="solution-tag">Defender for Cloud Apps</span>
                    <span class="solution-tag">Ringfencing™ Technology</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">2</span>
                        Patch Applications
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Automated patching using Microsoft Intune and Windows Update for Business. Comprehensive patch management across your Microsoft ecosystem.</p>
                    <span class="solution-tag">Microsoft Intune</span>
                    <span class="solution-tag">Windows Update for Business</span>
                    <span class="solution-tag">Microsoft Update Catalog</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">3</span>
                        Configure Office Macros
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Native Microsoft 365 macro controls and Attack Surface Reduction rules through Microsoft Defender for Endpoint.</p>
                    <span class="solution-tag">Microsoft 365 Security</span>
                    <span class="solution-tag">Defender for Endpoint</span>
                    <span class="solution-tag">Attack Surface Reduction</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">4</span>
                        User Application Hardening
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Browser security and application hardening using Microsoft Edge security features and Intune application policies.</p>
                    <span class="solution-tag">Microsoft Edge Security</span>
                    <span class="solution-tag">Application Guard</span>
                    <span class="solution-tag">SmartScreen Filter</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">5</span>
                        Restrict Admin Privileges
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Privileged Identity Management using Microsoft Entra ID and Just-In-Time access controls.</p>
                    <span class="solution-tag">Microsoft Entra PIM</span>
                    <span class="solution-tag">Just-In-Time Access</span>
                    <span class="solution-tag">Conditional Access</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">6</span>
                        Patch Operating Systems
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Comprehensive OS patching using Microsoft's native update mechanisms and centralized management through Intune.</p>
                    <span class="solution-tag">Windows Update</span>
                    <span class="solution-tag">Microsoft Intune</span>
                    <span class="solution-tag">System Center</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">7</span>
                        Multi-Factor Authentication
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Enterprise-grade MFA using Microsoft Entra ID with conditional access policies and risk-based authentication.</p>
                    <span class="solution-tag">Microsoft Entra ID</span>
                    <span class="solution-tag">Conditional Access</span>
                    <span class="solution-tag">Risk-Based Auth</span>
                </div>
                
                <div class="mitigation-card microsoft-native">
                    <h3>
                        <span class="mitigation-number">8</span>
                        Regular Backups
                        <span class="microsoft-badge">Microsoft Native</span>
                    </h3>
                    <p>Cloud-native backup solutions using Microsoft 365 Backup, Azure Backup, and on-premises Data Protection Manager.</p>
                    <span class="solution-tag">Microsoft 365 Backup</span>
                    <span class="solution-tag">Azure Backup</span>
                    <span class="solution-tag">System Center DPM</span>
                </div>
            </div>
        </div>

       
        <div class="main-content">
            <div class="content-section">
                <h2>Why Choose CSP Global for Essential Eight?</h2>
                <p>As a <strong>Microsoft Security Solutions Provider</strong> and Australia's largest ThreatLocker reseller, CSP Global brings unparalleled expertise in implementing Essential Eight using proven Microsoft technologies. Our approach reduces complexity while ensuring robust security across all maturity levels.</p>
                
                <p><strong>Microsoft-Native Advantage:</strong> By leveraging native Microsoft security features for 6 of the 8 controls, we ensure seamless integration, reduced licensing costs, and simplified management. Our clients benefit from single-vendor support and unified security operations.</p>

                <h2>DISP Compliance Expertise</h2>
                <p><strong>Defence Industry Security Program (DISP) Focus:</strong> We understand the unique requirements of DISP membership and help organizations achieve the cyber security standards required for defence contracting. Our Essential Eight implementation supports DISP Level 1, 2, and 3 requirements.</p>
                
                <p><strong>ThreatLocker Integration:</strong> For comprehensive application control, we deploy ThreatLocker's industry-leading allowlisting technology for endpoint protection, complemented by Microsoft Defender for Cloud Apps for SaaS application governance and shadow IT discovery. As one of Australia's largest ThreatLocker resellers, we provide expert implementation and ongoing support for this critical security control.</p>
                
                <p><strong>Maturity Level Progression:</strong> Our structured approach helps organizations progress through Essential Eight maturity levels systematically, ensuring sustainable security improvements that align with business operations and compliance requirements.</p>

                <h2>Comprehensive Gap Analysis Process</h2>
                <p>Our detailed assessment methodology evaluates your current security posture against Essential Eight requirements, identifies gaps, and provides a clear roadmap for implementation. We focus on practical, cost-effective solutions that leverage your existing Microsoft investments.</p>
            </div>

            <div class="sidebar">
                <div class="partner-showcase">
                    <h3>Strategic Partnerships</h3>
                    <div class="partner-logos">
                        <div class="partner-logo">
                            <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/MicrosoftGoldPartner.png" 
                                 alt="Microsoft Gold Partner" 
                                 />
                        </div>
                        <div class="partner-logo" >
                            ThreatLocker<br/><span>Largest AU Reseller</span>
                        </div>
                    </div>
                    <p >Combining Microsoft's enterprise security platform with ThreatLocker's Zero Trust application control for comprehensive Essential Eight compliance.</p>
                </div>

                <div class="process-card">
                    <h3>Our Implementation Process</h3>
                    <ul class="process-steps">
                        <li>Current State Assessment & Gap Analysis</li>
                        <li>Maturity Level Target Definition</li>
                        <li>Microsoft Security Stack Optimization</li>
                        <li>ThreatLocker Application Control Deployment</li>
                        <li>Policy Configuration & Testing</li>
                        <li>Staff Training & Documentation</li>
                        <li>Compliance Validation & Reporting</li>
                        <li>Ongoing Support & Maintenance</li>
                    </ul>
                </div>
            </div>
        </div>

       
        <div class="maturity-levels">
            <h2>Essential Eight Maturity Levels</h2>
            <div class="maturity-grid">
                <div class="maturity-card">
                    <h4>Maturity Level 1</h4>
                    <p>Basic cyber hygiene designed to protect against opportunistic attacks. Implements fundamental controls across all eight mitigation strategies using Microsoft native capabilities.</p>
                </div>
                <div class="maturity-card" >
                    <div >
                        DISP Members
                    </div>
                    <h4>Maturity Level 2</h4>
                    <p>Enhanced protection against more sophisticated targeted attacks. Required for DISP membership and government contracting. Advanced Microsoft security features deployed.</p>
                </div>
                <div class="maturity-card">
                    <h4>Maturity Level 3</h4>
                    <p>Maximum protection against advanced persistent threats and nation-state actors. Comprehensive logging, monitoring, and response capabilities across the Microsoft ecosystem.</p>
                </div>
            </div> 
            <p >CSP Global helps organizations achieve their target maturity level through a structured, risk-based approach that leverages Microsoft's comprehensive security platform.</p>
        </div>

       
        <div class="cta-section">
            <div class="cta-content">
                <h2>Ready to Achieve Essential Eight Compliance?</h2>
                <p>Let our Microsoft security experts conduct a comprehensive gap analysis and develop your Essential Eight implementation roadmap using proven Microsoft technologies.</p>
                <div class="cta-buttons">
                    <a href="https://csp.global/contact" class="cta-button">GET DISP M2</a>
                    <a href="https://csp.global/contact" class="cta-button secondary">Schedule Consultation</a>
                </div>
            </div>
        </div>

       
        <div class="footer">
            <p>&copy; 2025 CSP Global. All rights reserved. | Microsoft Security Solutions Provider | Essential Eight Implementation Specialists</p>
        </div>
    </div>

    </>
  );
}
