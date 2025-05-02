"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Rain } from "react-rainfall";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import TestimonialSlide from "../app/common/TestimonialSlide.js";
import EmpoweringOrganizations from "../app/common/EmpoweringOrganizations.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Cybersecurity from "../app/img/middle-banner2.png";
import CybersecurityMobile from "../app/img/CSP-1-mobile.png";
import Securityone from "../app/img/it-icon-1.png";
import Securitytwo from "../app/img/it-icon-2.png";
import Securitythree from "../app/img/it-icon-5.png";
import Securityfour from "../app/img/it-icon-4.png";
import Compass from "../app/img/Compass.png";
import Autopilot from "../app/img/Autopilot.png";
import Lighthouse from "../app/img/Lighthouse.png";
import Main from "../app/img/logo.png";
import Guardian from "../app/img/Guardian.png";
import EmpoweringRightMail from "../app/img/CSP-WEBSITE-ILLUSTRATION.jpg";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import VideoIcon from "../app/img/csp-video-icon.png";

export default function Home() {
  const [dataNew, setDataNew] = useState("");
  // Call the API and log the data to the console
  const fetchData = async () => {
    const response = await fetch("https://cms.csplighthouse.com/api/overview");
    const data = await response.json();
    setDataNew(data[0]);
    console.log(data[0]);
    console.log(data[0].bannerheading);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main>
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta name="description" content="=" />
        </Head>

        <header>
          <Header />
          <div className="header-video desktop">
            <video playsInline autoPlay loop muted>
              <source
                src={
                  "https://cdn.thebrandbee.com/video/WebsiteHomepage-new.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>
          <div className="header-video mobile">
            <video playsInline autoPlay loop muted>  
              <source
                src={
                  "https://cdn.thebrandbee.com/video/WebsiteHomepage-new.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>
          <div className="container">
            <div className="Strengthen-Your-Cyber-Defenses">
              <h4 dangerouslySetInnerHTML={{ __html: dataNew.bannerheading }} />
              <p dangerouslySetInnerHTML={{ __html: dataNew.bannertext }} />
              <div className="know-more">
                <Link href="/contact"> Get started &gt; </Link>
              </div>
            </div>
            <div className="video-icon-img-video-home-page">
              <a
                href="https://www.youtube.com/watch?v=FD62mAyg6Pk"
                target="_blank"
              >
                <div className="video-icon-img-video-home-page-middle">
                  <h4>
                    Watch Our <span>Video</span>
                  </h4>
                  <Image src={VideoIcon} alt="icon" className="" />
                </div>
              </a>
            </div>
          </div>
        </header>


<section className="home-new-add-service-main">
<div className="container">
<div className="testimonial-frame-heading-main n">
             
              <h3>It Services</h3>
            </div>
    <div className="home-new-add-service-main-middle">
           <div className="team-section-middle top-new-frame">
                            <div className="team-section-middle-inner"> 
                            <Image src={Guardian} alt="icon" className="" />
                              <h4>MANAGED SERVICE</h4>
                              <p>Our Next-Gen <span>Managed Services</span> lets you navigate the IT landscape confidently. We provide comprehensive cybersecurity, compliance, helpdesk, advisory, and technology mangement.</p>
                              
                              <div className="top-new-frame-hover">
                                <div className="top-new-frame-hover-inner2">
                                <h4>MANAGED SERVICE</h4>
                                  
                                  <p>
                                  Let us transform your IT Management and guide you through the Tech Jungle. Our team of qualified professionals in advisory, compliance, cybersecurity, and our dedicated helpdesk with a bespoke client portal. We resolve bottlenecks and eliminate technical frustrations from day one. Whether you need full IT management or targeted support, we handle the technology so you can focus on growing your business. Entrust us with your IT operations and experience the freedom of having an innovative and highly responsive partner by your side.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="team-section-middle-inner">
                            <Image src={Lighthouse} alt="icon" className="" />
                              <h4>CYBERSECURITY</h4>
                              <p>Our <span>Cybersecurity</span> expert detection and response team are armed with Threat Intel and resources that guarantee enhanced security posture.</p>
                              
                              <div className="top-new-frame-hover">
                                <div className="top-new-frame-hover-inner2">
                                <h4>CYBERSECURITY</h4>
                                  
                                  <p>
                                  Our layered defences and rapid response times (SLAs) give you unparalleled insights and protection. We have a dedicated Threat Hunting and Intelligence team that guarantee the confidentiality, integrity, and availability of your data around the clock. We also run regular staff cyber awareness training so your team are well prepared to spot any early warning signs. 
                                 </p>
                                </div>
                              </div>
                            </div>
          
                            <div className="team-section-middle-inner">
                            <Image src={Autopilot} alt="icon" className="" />
                              <h4>AUTOMATION & INNOVATION</h4>
                              <p> 
                              Our <span>automation</span> experts transform business operations using Microsoft's AI and Power Platform, delivering custom solutions that streamline workflows, reduce manual tasks, and empower employees with intelligent automation tools.
                              </p>
                              
                              <div className="top-new-frame-hover">
                                <div className="top-new-frame-hover-inner2">
                                <h4>AUTOMATION & INNOVATION</h4>
                                  
                                  <p>
                                  Our automation team make dreams come true by reducing repetitive tasks, including user onboarding, device management, HR workflows, and security threat response, and many more. We take Microsoft's leading automation /AI platforms - including Copilot Studio and Power Automate – and deliver crystal-clear outcomes. We ensure your staff become Microsoft Copilot (Gen AI-powered) experts through education and innovation workshops, minimizing human error and maximizing productivity, efficiency, and job satisfaction.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="team-section-middle-inner">
                            <Image src={Compass} alt="icon" className="" />
                              <h4>STRATEGIC ADVISORY</h4>
                              <p><span>Strategic</span> technology guidance that bridges business and IT. Our virtual advisory service aligns technology investments with your goals, delivering clear, actionable insights that drive security, compliance, governance, and operational efficiency.</p>
                              
                              <div className="top-new-frame-hover">
                                <div className="top-new-frame-hover-inner2">
                                <h4>STRATEGIC ADVISORY</h4>
                                  
                                  <p>  
                                  Strategic IT planning, gap analysis, technology roadmaps and digital transformation guidance. Your vCIO will evaluate your technology landscape holistically, creating an action plan that is aligned with your budget, company mission, industry requirements, organizational structure, and business goals. Our assessment covers critical areas including security posture, risk management, operational efficiency, and IT governance - all supported by industry-leading tools like Microsoft Purview, Vanta GRC and our own bespoke client self-service portal. 
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
    </div>
  </div>
</section>
        <section className="testimonial-frame desktop" id="Testimonialsall">
          <div className="container">
            <div className="testimonial-frame-heading-main n">
              <p className="Testimonials-sub-m">Testimonials</p>
              <h3>WHAT OUR CUSTOMERS SAY</h3>
            </div>
            <div className="rain-main-images-main">
              <div className="rain-main-images">
                <Rain />
              </div>
              <TestimonialSlide />
            </div>
          </div>
        </section>

        <section className="Empowering-Organizations-top-h new-addhome-ne">
          <div className="Empowering-Organizations-top-h-new-addhome-ne-top">
            <Image src={EmpoweringRightMail} alt="" />
          </div>
          <div className="Empowering-Organizations-top-h-new-addhome-ne-top-middle-con">
            <div className="container">
              <div className="Empowering-Organizations-top-h-middle new-all">
                <EmpoweringOrganizations />
              </div>
            </div>
          </div>
        </section>
        <section className="Security-Posture-frame">
          <div
            dangerouslySetInnerHTML={{ __html: dataNew.enhancingyousecurity }}
          />
        </section>
        <section className="Managed-Detection-frame">
          <div
            dangerouslySetInnerHTML={{ __html: dataNew.transformingsecurity }}
          />
        </section>
        <section className="Excellence-in-Three-Steps">
          <div
            dangerouslySetInnerHTML={{
              __html: dataNew.cybersecurityexcellence,
            }}
          />
        </section>
        {/*  <section className="Ignite-Cybersecurity-frame Eight-Framework">
          <div className="Ignite-Cybersecurity-frame-img">
            <Image src={Advocate} alt="" className="desktop" />
            <Image src={AdvocateMobile} alt="" className="mobile" />
          </div>
          <div className="container">
            <div className="Ignite-Cybersecurity-frame-cont">
              <h3 className="ho-heading">
                Strengthening{" "}
                <span className="br">Cybersecurity with the </span>
                <span className="br">Essential Eight Framework</span>
              </h3>
              <p>
                At CSP, we advocate the use of the Essential Eight (ES8), a
                pragmatic
                <span className="br">
                  framework for enhancing an organisation's overall security
                  posture.
                </span>
              </p>
              <ul>
                <li>
                  The Essential Eight (ES8) framework is the foundation for
                  improving security, and CSP takes that one step further by
                  building a Zero Trust foundation.
                </li>
                <li>
                  CSP provide ES8 assessments along with bespoke reports and
                  roadmaps, that set you on a path to mitigating increasing
                  levels of tradecraft (i.e. tools, tactics, techniques and
                  procedures).
                </li>
                <li>
                  CSP uses the Microsoft 365 cloud as its foundation along with
                  other strategic vendors for Application Control and App
                  Patching, and ensures you have everything you need to mature.
                </li>
                <li>
                  CSP takes you on a cybersecurity journey where increasing your
                  productivity and ROI are the forefront of every compliance
                  decision we make. Security and productivity are always
                  considered in tandem.
                </li>
              </ul>*/}
        {/* 
            <div className="know-more">
              <Link href="/">Know More</Link>
            </div>
            */}
        {/*  </div>
          </div>
        </section>*/}

        <section className="Ignite-Cybersecurity-frame">
          <div className="Ignite-Cybersecurity-frame-img">
            <Image src={Cybersecurity} alt="" className="desktop" />
            <Image src={CybersecurityMobile} alt="" className="mobile" />
          </div>
          <div className="container">
            <div className="Ignite-Cybersecurity-frame-cont">
              <div
                dangerouslySetInnerHTML={{
                  __html: dataNew.ignitecybersecurity,
                }}
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
