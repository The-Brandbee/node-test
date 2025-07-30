"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from 'next/head';
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/nce.css'; 
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
           
            <div class="office-visual">
                <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/Office1.png" alt=""  />
            </div>
            <div class="header-content">
                <div class="logo-section">
                    <div class="logo">
                        <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/1080x1080.jpg" alt="CSP Global Logo" />
                    </div>
                    <div class="tagline">Staying Ahead</div>
                </div>
                <div class="hero-content">
                    <h1>Maximize Your Microsoft Licensing ROI</h1>
                    <div class="subtitle">New Commerce Experience (NCE) Benefits</div>
                    <p>Unlock significant cost savings and enhanced flexibility with Microsoft's New Commerce Experience through CSP Global. Our expert guidance ensures you get the best ROI from your Microsoft investments.</p>
                </div>
            </div>
        </div>

      
        <div class="roi-highlight">
            <h2>Proven ROI with Microsoft NCE</h2>
            <div class="roi-stats">
                <div class="roi-stat">
                    <div class="number">20%</div>
                    <div class="label">Cost Savings with Annual Commitment</div>
                </div>
                <div class="roi-stat">
                    <div class="number">7 Days</div>
                    <div class="label">Risk-Free Cancellation Window</div>
                </div>
                <div class="roi-stat">
                    <div class="number">3 Year</div>
                    <div class="label">Price Protection Available</div>
                </div>
                <div class="roi-stat">
                    <div class="number">24/7</div>
                    <div class="label">Expert CSP Support</div>
                </div>
            </div>
        </div>

       
        <div class="nce-section">
            <div class="nce-header">
                <h2>Microsoft New Commerce Experience</h2>
                <div class="nce-tagline">Simplified • Flexible • Cost-Effective</div>
                <p class="nce-description">The New Commerce Experience (NCE) revolutionizes how you purchase and manage Microsoft licenses. With enhanced flexibility, predictable pricing, and significant cost savings opportunities, NCE through CSP Global maximizes your technology investment ROI.</p>
            </div>
            
            <div class="commitment-options">
                <div class="commitment-card">
                    <h3>Monthly Commitment</h3>
                    <div class="price-info">
                        <div class="price-penalty">+20% Premium Pricing</div>
                    </div>
                    <ul class="benefits-list">
                        <li>Maximum flexibility for workforce changes</li>
                        <li>Scale up or down monthly</li>
                        <li>Perfect for seasonal businesses</li>
                        <li>Cancel anytime after first month</li>
                    </ul>
                    <ul class="benefits-list cons">
                        <li>Higher monthly costs</li>
                        <li>Budget unpredictability</li>
                    </ul>
                </div>
                
                <div class="commitment-card recommended">
                    <h3>Annual Commitment</h3>
                    <div class="price-info">
                        <div class="price-savings">Save 20% vs Monthly</div>
                    </div>
                    <ul class="benefits-list">
                        <li>Significant cost savings</li>
                        <li>Price protection for 12 months</li>
                        <li>Predictable budgeting</li>
                        <li>Increase licenses anytime</li>
                        <li>Monthly or annual billing options</li>
                    </ul>
                    <ul class="benefits-list cons">
                        <li>Cannot reduce licenses mid-term</li>
                    </ul>
                </div>
                
                <div class="commitment-card">
                    <h3>3-Year Commitment</h3>
                    <div class="price-info">
                        <div class="price-savings">Maximum Long-Term Savings</div>
                    </div>
                    <ul class="benefits-list">
                        <li>Lowest per-license cost</li>
                        <li>3-year price lock protection</li>
                        <li>Ultimate budget predictability</li>
                        <li>Flexible billing options</li>
                        <li>Best for stable organizations</li>
                    </ul>
                    <ul class="benefits-list cons">
                        <li>Longest commitment period</li>
                        <li>Cannot reduce licenses</li>
                    </ul>
                </div>
            </div>
        </div>

      
        <div class="main-content">
            <div class="content-section">
                <h2>Why Choose CSP Global for Microsoft NCE?</h2>
                <p>As your trusted <strong>top-tier Microsoft Solutions Provider</strong>, CSP Global brings deep expertise in navigating the New Commerce Experience to maximize your licensing ROI. Our Microsoft Gold Partner status ensures you receive premium support and preferential pricing that translates directly to your bottom line.</p>
                
                <p><strong>Legacy CSP Migration:</strong> Microsoft is automatically migrating all legacy CSP subscriptions to NCE. This transition presents a critical opportunity to optimize your licensing strategy and realize significant cost savings. Our expert team ensures you're positioned for maximum benefit during this transition.</p>

                <h2>NCE Key Benefits</h2>
                <p><strong>Simplified Management:</strong> Consolidate all your Microsoft subscriptions under one streamlined platform, reducing administrative overhead and improving operational efficiency.</p>
                
                <p><strong>Enhanced Flexibility:</strong> Choose from monthly, annual, or 3-year commitment terms that align with your business planning cycles and cash flow requirements.</p>
                
                <p><strong>Price Protection:</strong> Lock in current pricing for your commitment term, protecting against future Microsoft price increases that can impact your budget.</p>
                
                <p><strong>Mid-Term Upgrades:</strong> Unlike legacy CSP, NCE allows seamless license upgrades without paying for both old and new licenses simultaneously. Upgrade from Microsoft 365 E3 to E5 and only pay the difference.</p>

                <h2>Migration Timeline & Opportunities</h2>
                <p>Microsoft began auto-migrating legacy subscriptions in January 2024, with all commercial customers transitioning by their renewal dates. This creates urgency but also opportunity for strategic planning with a trusted Microsoft Gold Partner.</p>
            </div>

            <div class="sidebar">
                <div class="calculation-card">
                    <h3>ROI Calculation Example</h3>
                    <p><strong>Scenario:</strong> 100 users, Microsoft 365 Business Premium</p>
                    
                    <div class="calc-example">
                        <div class="calc-line">
                            <span>Monthly Plan (100 users × $39.48):</span>
                            <span>$3,948/month</span>
                        </div>
                        <div class="calc-line">
                            <span>Annual Cost (Monthly Plan):</span>
                            <span>$47,376</span>
                        </div>
                        <div class="calc-line">
                            <span>NCE Annual Plan (100 users × $34.95):</span>
                            <span>$41,940</span>
                        </div>
                        <div class="calc-line savings">
                            <span>Annual Savings:</span>
                            <span>$5,436</span>
                        </div>
                        <div class="calc-line total">
                            <span>3-Year Total Savings:</span>
                            <span>$16,308+</span>
                        </div>
                    </div>
                    
                    <p><small>*Based on Microsoft 365 Business Premium NCE pricing. Actual savings may vary based on specific licensing needs and Microsoft pricing updates.</small></p>
                </div>

                <div class="benefits-section">
                    <h3>CSP Global Advantages</h3>
                    
                    <div class="microsoft-partner-badge" >
                        <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/MicrosoftGoldPartner.png" 
                             alt="Microsoft Gold Partner" 
                              />
                        <p>Top-Tier Microsoft Solutions Provider</p>
                    </div>
                    
                    <div class="benefit-item">
                        <h4>Expert Guidance</h4>
                        <p>Our Microsoft-certified specialists analyze your usage patterns and growth projections to recommend the optimal commitment strategy.</p>
                    </div>
                    
                    <div class="benefit-item">
                        <h4>Seamless Migration</h4>
                        <p>We manage the entire transition process from legacy CSP to NCE, ensuring zero disruption to your operations.</p>
                    </div>
                    
                    <div class="benefit-item">
                        <h4>Ongoing Optimization</h4>
                        <p>Regular license reviews and recommendations ensure you're always getting maximum value from your Microsoft investments.</p>
                    </div>
                    
                    <div class="benefit-item">
                        <h4>Gold Partner Benefits</h4>
                        <p>Leverage our Microsoft Gold Partner status for preferred pricing, exclusive promotional offers, and direct Microsoft support escalation.</p>
                    </div>
                </div>
            </div>
        </div>

       
        <div class="migration-section">
            <h2>Critical NCE Migration Timeline</h2>
            <div class="migration-timeline">
                <div class="timeline-item">
                    <h4>Legacy Migration Started</h4>
                    <p>Microsoft began auto-migrating legacy subscriptions in January 2024. Action required before renewal dates.</p>
                </div>
                <div class="timeline-item">
                    <h4>7-Day Change Window</h4>
                    <p>After migration, you have exactly 7 days to modify or cancel subscriptions without penalty.</p>
                </div>
                <div class="timeline-item">
                    <h4>Pricing Updates</h4>
                    <p>Monthly billing for annual terms will see 5% increase from April 2025. Plan your strategy now.</p>
                </div>
                <div class="timeline-item">
                    <h4>Optimization Opportunity</h4>
                    <p>This transition is the perfect time for license audits and right-sizing your Microsoft investments.</p>
                </div>
            </div>
            <p >Don't let this opportunity pass. Contact CSP Global today to ensure your Microsoft licensing strategy maximizes ROI while meeting your operational needs.</p>
        </div>

      
        <div >
            <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/Office2.png" 
                 alt="CSP Global Office" 
                 />
        </div>

       
        <div class="cta-section">
            <div class="cta-content">
                <h2>Ready to Optimize Your Microsoft Licensing ROI?</h2>
                <p>Let our experts conduct a comprehensive license audit and develop a strategic NCE migration plan tailored to your business needs and budget.</p>
                <div class="cta-buttons">
                    <a href="#contact" class="cta-button">Get License Audit</a>
                    <a href="#contact" class="cta-button secondary">Schedule Consultation</a>
                </div>
            </div>
        </div>

       
        <div class="footer">
          
            <div class="footer-visual">
                <img src="https://cspblogstorage.blob.core.windows.net/cspblob2/Office1.png" alt=""  />
            </div>
            <p>&copy; 2025 CSP Global. All rights reserved. | Microsoft Gold Partner & Top-Tier Solutions Provider | Maximize Your Technology ROI</p>
        </div>
    </div>

    </>
  );
}
