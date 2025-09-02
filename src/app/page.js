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
    const response = await fetch("");
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
             <h4>
  NEXT-GEN IT <br />
  MANAGED SERVICE<span>.</span> 
</h4>

              
              <p>Driving Innovation, Delivering Excellence</p>

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
                            <Image src={Guardian} alt="icon" className="Services-home" /> 
                              <h4>MANAGED SERVICES</h4>
                              <p>Our Next-Gen <span>Managed Services</span> lets you navigate the IT landscape confidently. We provide comprehensive cybersecurity, compliance, helpdesk, advisory, and technology mangement.</p>
                              
                              <div className="top-new-frame-hover">
                                <div className="top-new-frame-hover-inner2">
                                <h4>MANAGED SERVICES</h4>
                                  
                                  <p>
                                  Let us transform your IT Management and guide you through the Tech Jungle. Our team of qualified professionals in advisory, compliance, cybersecurity, and our dedicated helpdesk with a bespoke client portal. We resolve bottlenecks and eliminate technical frustrations from day one. Whether you need full IT management or targeted support, we handle the technology so you can focus on growing your business. Entrust us with your IT operations and experience the freedom of having an innovative and highly responsive partner by your side.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="team-section-middle-inner">
                            <Image src={Lighthouse} alt="icon" className="Services-home" />
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
                            <Image src={Autopilot} alt="icon" className="Services-home" />
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
                            <Image src={Compass} alt="icon" className="Services-home" />
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
        <div className="container">
  <div className="Security-Posture-frame-top">
    <div className="Security-Posture-frame-top-left">
      <h4>Enhancing Your Security Posture and Productivity</h4>
    </div>
    <div className="Security-Posture-frame-top-right">
      <p>
        Our services are designed to protect your organization, streamline
        processes, and ensure compliance with industry standards.
      </p>
    </div>
  </div>
  <div className="Security-Posture-frame-bottom">
    <ul>
      <li>
        <img
          alt=""
          loading="lazy"
          width={75}
          height={73}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-1.dae262b2.png&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-1.dae262b2.png&w=256&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-1.dae262b2.png&w=256&q=75"
        />
        <h4>HOLISTIC IT SERVICE</h4>
        <p>
          While generic service providers fall short, we stand out as a single
          source of wisdom with capabilities that match the challenges of today.
          Providing end-to-end technology support that streamline operations,
          improve efficiency, and support growth.
        </p>
      </li>
      <li>
        <img
          alt=""
          loading="lazy"
          width={71}
          height={71}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-2.222f3958.png&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-2.222f3958.png&w=256&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-2.222f3958.png&w=256&q=75"
        />
        <h4>MORE FOR LESS</h4>
        <p>
          You get a technologically-diverse team at your disposal with one fixed
          and predicatable cost. Either you get to eliminate the expense of a
          FTE or we supplement your IT team to provide the holistic support your
          organization requires.
        </p>
      </li>
      <li>
        <img
          alt=""
          loading="lazy"
          width={69}
          height={69}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-5.ebd3c901.png&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-5.ebd3c901.png&w=256&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-5.ebd3c901.png&w=256&q=75"
        />
        <h4>INSTANTANEOUS</h4>
        <p>
          We never stop working, so that you can. Our support team prioritizes
          our SLA customers at all times. If the problem cannot be fixed
          remotely, a technician will be sent to you on that day. We don't quit
          until you are satisfied and the issue or incident is under control.
        </p>
      </li>
      <li>
        <img
          alt=""
          loading="lazy"
          width={74}
          height={71}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-4.47d76a7d.png&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-4.47d76a7d.png&w=256&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-4.47d76a7d.png&w=256&q=75"
        />
        <h4>CYBER EXPERTS</h4>
        <p>
          Our team of qualified experts know exactly how to deal with cyber
          threats and we react with unparalled speed and accuracy. Our processes
          also ensure the right stakeholders are informed before any action is
          taken during a critical incident that might impact operations.
        </p>
      </li>
      <li>
        <img
          alt=""
          loading="lazy"
          width={70}
          height={70}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-3.4351eec7.png&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-3.4351eec7.png&w=256&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-3.4351eec7.png&w=256&q=75"
        />
        <h4>GRC</h4>
        <p>
          We are a reseller of one of the leading Grovernance, Risk and
          Compliance platforms on the market. This not only helps you automate
          your compliance journey and deliver policies around IT use, but will
          demonstrate progress to key stakeholders with a comprehensive
          reporting page. Your customers will now be able to trust that you take
          security and compliance seriously.
        </p>
      </li>
      <li>
        <img
          alt=""
          loading="lazy"
          width={67}
          height={67}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-6.bf036ed8.png&w=96&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-6.bf036ed8.png&w=256&q=75 2x"
          src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fit-icon-6.bf036ed8.png&w=256&q=75"
        />
        <h4>OPERATIONAL EFFICIENCY</h4>
        <p>
          Let us help you navigate the tech jungle. With software updates and
          proactive maintenance, we keep IT systems running faster and more
          stable, leading to more productive employees and happier customers. We
          unlock digital success through AI, automation, and digital
          transformation.
        </p>
      </li>
    </ul>
  </div>
</div>

        </section>
        <section className="Managed-Detection-frame">
        <div className="container">
  <div className="Managed-Detection-frame-top-heading">
    <h3 className="ho-heading">WHAT IS A TECHNOLOGY SOLUTION PROVIDER?</h3>
  </div>
  <div className="Managed-Detection-frame-middle">
    <div className="Managed-Detection-frame-middle-left">
      <h5>More than tech support</h5>
      <p>
        Modern service providers should not only deliver holistic IT and vendor
        management but also digital transformation. Our managed service company
        based our of Adelaide works closely with organizations to identify pain
        points, design roadmaps, and implement new technologies that drive
        growth and productivity. Our ‘better together’ philosophy means we are
        partnered with some of the best solution providers in Australia. If your
        requirement is outside our expertise we have the ability to always say
        YES and have someone onhand to your vision to life.
      </p>
    </div>
    <div className="Managed-Detection-frame-middle-left">
      <h5>Driving Innovation</h5>
      <p>
        We unclog bottlenecks and open avenues for revenue growth and
        operational efficiency. Our quarterly business reviews bring are the
        catalyst for driving innovation. We bring you up to speed and share
        relevant success stories from other clients. The most important role
        over the next 10 years will be the Chief AI officer and our virtual
        advisory service has already helped many customers start adopting AI
        securely and develop governance policies for fair usage.{" "}
      </p>
    </div>
  </div>
  <div className="know-more">
    <a href="/contact">LEARN MORE</a>
  </div>
</div>

        </section>
        <section className="Excellence-in-Three-Steps">
          <div className="container">
  <div className="Excellence-in-Three-Steps-top">
    <div className="Excellence-in-Three-Steps-top-left">
      <h3 className="ho-heading">Cybersecurity Excellence in Three Steps</h3>
    </div>
    <div className="Excellence-in-Three-Steps-top-right">
      <p>
        Our approach to cybersecurity revolves around three key principles:
        Eliminate, Simplify, and Protect. We enable you to achieve more with
        less and unlock the full potential of cloud technology while
        safeguarding your digital estate.
      </p>
    </div>
  </div>
  <div className="Eliminate-Complexity-main">
    <div className="Eliminate-Complexity-main-left">
      <h2>1</h2>
      <h4>Eliminate Complexity and Reduce Costs:</h4>
      <p>
        We help organizations streamline their complex licensing structures and
        eliminate unnecessary IT products, reducing patchwork solution costs by
        up to 60%.
      </p>
    </div>
    <div className="Eliminate-Complexity-main-left">
      <h2>2</h2>
      <h4>Simplify Workflows for Efficiency:</h4>
      <p>
        We streamline IT workflows and reduce device management overhead,
        enabling a focus on higher-value tasks such as defence and response.
        Leveraging automation and modern technologies, we cut device management
        by up to 25%.
      </p>
    </div>
    <div className="Eliminate-Complexity-main-left">
      <h2>3</h2>
      <h4>Protect Modern Digital Worker:</h4>
      <p>
        We harness the Microsoft E5 Security license, a world leader in extended
        detection and response (XDR) solutions. Focusing on Zero Trust and
        Essential Eight frameworks, we optimize critical areas to reduce data
        breach risk by up to 50%.
      </p>
    </div>
  </div>
</div>

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
             <div>

  <h3 className="ho-heading">
    Ignite Cybersecurity Transformation with<span className="br">CSP</span>
  </h3>
  <p>
    Your Trusted Partner for Comprehensive Cybersecurity
    <span className="br">Solutions, Empowering Your Digital Future</span>
  </p>
  <p>
    <a href="/contact">Take Command of Your Security Now!</a>
  </p>
</div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
