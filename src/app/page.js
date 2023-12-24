"use client";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import TestimonialSlide from "../app/common/TestimonialSlide.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Cybersecurity from "../app/img/middle-banner2.png";
import CybersecurityMobile from "../app/img/CSP-1-mobile.png";
import Securityone from "../app/img/it-icon-1.png";
import Securitytwo from "../app/img/it-icon-2.png";
import Securitythree from "../app/img/it-icon-5.png";
import Securityfour from "../app/img/it-icon-4.png";
import Securityfive from "../app/img/it-icon-3.png";
import Securitysix from "../app/img/it-icon-6.png";
import EmpoweringRight from "../app/img/Organizations.png";
import Main from "../app/img/logo.png";

import Advocate from "../app/img/middle-banner.png";
import AdvocateMobile from "../app/img/CSP-2-mobile.png";

export default function Home() {
  return (
    <main>
      <Head></Head>
      <header>
        <Header />
        <div className="header-video desktop">
          <video playsInline autoPlay loop muted>
            <source
              src={"https://thebrandbee.com/cyber-security.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="header-video mobile">
          <video playsInline autoPlay loop muted>
            <source
              src={"https://thebrandbee.com/CSP-mobile.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="Strengthen-Your-Cyber-Defenses">
          <h4>Strengthen Your Cyber Defenses</h4>
          <p>Your Trusted Partner for Cybersecurity Services</p>
          <div className="know-more">
            <Link href="/About">Know More</Link>
          </div>
        </div>
      </header>

      <section className="Empowering-Organizations-top-h">
        <div className="container">
          <div className="Empowering-Organizations-top-h-middle">
            <h3>
              Empowering Organizations
              <span className="br"> Through Tailored Cybersecurity </span>
              <span className="br"> Solutions - Meet CSP, Your </span>
              <span className="br"> Trusted Partner </span>
            </h3>
            <p>
              CSP Group is the vanguard of hyper-vigilant cybersecurity, leading
              organizations through the intricacies of the digital age. We
              empower businesses to streamline IT operations, fortify their
              digital workforce, and enhance overall efficiency. In a constantly
              evolving digital landscape, we function as the guiding beacon,
              enabling our clients to chart a proactive course that eliminates
              vulnerabilities, optimizes processes, and ensures security is
              preemptive and seamlessly integrated into their operation.
            </p>
            <div className="know-more">
              <Link href="/About">Know More</Link>
            </div>
          </div>
        </div>
        <div className="Empowering-right-img">
          <Image src={EmpoweringRight} alt="" />
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
                Our services are designed to protect your organization,
                streamline processes, and ensure compliance with industry
                standards.
              </p>
            </div>
          </div>
          <div className="Security-Posture-frame-bottom">
            <ul>
              <li>
                <Image src={Securityone} alt="" />
                <h4>IT Partner</h4>
                <p>Hybrid, Cloud and Modern Workplace Support</p>
              </li>
              <li>
                <Image src={Securitytwo} alt="" />
                <h4>Endpoint Protection</h4>
                <p>
                  Endpoint Detection & Response (EDR) Microsoft Defender XDR
                </p>
              </li>
              <li>
                <Image src={Securitythree} alt="" />
                <h4>Cloud Mobility</h4>
                <p>Mobility Firewall (SGN) Device Management (MDM) & BYOD</p>
              </li>
              <li>
                <Image src={Securityfour} alt="" />
                <h4>ES8 Compliance</h4>
                <p>Essential Eight alignment Crafted hardening policies</p>
              </li>
              <li>
                <Image src={Securityfive} alt="" />
                <h4>Information Protection</h4>
                <p>Encrypt and Protect Sensitive Info Know your Data & DLP</p>
              </li>
              <li>
                <Image src={Securitysix} alt="" />
                <h4>Cloud App Security</h4>
                <p>SaaS App Protection Shadow IT Threats</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Ignite-Cybersecurity-frame Eight-Framework">
        <div className="Ignite-Cybersecurity-frame-img">
          <Image src={Advocate} alt="" className="desktop" />
          <Image src={AdvocateMobile} alt="" className="mobile" />
        </div>
        <div className="container">
          <div className="Ignite-Cybersecurity-frame-cont">
            <h3 className="ho-heading">
              Strengthening <span className="br">Cybersecurity with the </span>
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
                roadmaps, that set you on a path to mitigating increasing levels
                of tradecraft (i.e. tools, tactics, techniques and procedures).
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
            </ul>
            {/* 
            <div className="know-more">
              <Link href="/">Know More</Link>
            </div>
            */}
          </div>
        </div>
      </section>
      <section className="Excellence-in-Three-Steps">
        <div className="container">
          <div className="Excellence-in-Three-Steps-top">
            <div className="Excellence-in-Three-Steps-top-left">
              <h3 className="ho-heading">
                Cybersecurity Excellence in Three Steps
              </h3>
            </div>
            <div className="Excellence-in-Three-Steps-top-right">
              <p>
                Our approach to cybersecurity revolves around three key
                principles: Eliminate, Simplify, and Protect. We enable you to
                achieve more with less and unlock the full potential of cloud
                technology while safeguarding your digital estate.
              </p>
            </div>
          </div>
          <div className="Eliminate-Complexity-main">
            <div className="Eliminate-Complexity-main-left">
              <h2>1</h2>
              <h4>Eliminate Complexity and Reduce Costs:</h4>
              <p>
                We help organizations streamline their complex licensing
                structures and eliminate unnecessary IT products, reducing
                patchwork solution costs by up to 60%.
              </p>
            </div>
            <div className="Eliminate-Complexity-main-left">
              <h2>2</h2>
              <h4>Simplify Workflows for Efficiency:</h4>
              <p>
                We help organizations streamline their complex licensing
                structures and eliminate unnecessary IT products, reducing
                patchwork solution costs by up to 60%.
              </p>
            </div>
            <div className="Eliminate-Complexity-main-left">
              <h2>3</h2>
              <h4>Protect Modern Digital Worker:</h4>
              <p>
                We harness the Microsoft E5 Security license, a world leader in
                extended detection and response (XDR) solutions. Focusing on
                Zero Trust and Essential Eight frameworks, we optimize critical
                areas to reduce data breach risk by up to 50%.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Managed-Detection-frame">
        <div className="container">
          <div className="Managed-Detection-frame-top-heading">
            <h3 className="ho-heading">
              Transforming Security with Managed Detection
              <span className="br">& Response (MDR) and Modern SOC</span>
            </h3>
          </div>
          <div className="Managed-Detection-frame-middle">
            <div className="Managed-Detection-frame-middle-left">
              <h5>Managed Detection & Response (MDR):</h5>
              <p>
                Our MDR services continuously monitor your environment, detect
                anomalies, and respond swiftly to emerging threats. We ensure
                your organization remains resilient through advanced threat
                hunting and incident response.
              </p>
            </div>
            <div className="Managed-Detection-frame-middle-left">
              <h5>Modern SOC (Security Operations Center):</h5>
              <p>
                Our Modern SOC, equipped with cutting-edge technology and expert
                analysts, proactively defends your digital assets. Together, MDR
                and Modern SOC form an impenetrable barrier against the evolving
                threat landscape.
              </p>
            </div>
          </div>
          <div className="know-more">
            <Link href="/mdr">Know More</Link>
          </div>
        </div>
      </section>
      <section className="Ignite-Cybersecurity-frame">
        <div className="Ignite-Cybersecurity-frame-img">
          <Image src={Cybersecurity} alt="" className="desktop" />
          <Image src={CybersecurityMobile} alt="" className="mobile" />
        </div>
        <div className="container">
          <div className="Ignite-Cybersecurity-frame-cont">
            <h3 className="ho-heading">
              Ignite Cybersecurity Transformation with
              <span className="br">CSP</span>
            </h3>
            <p>
              Your Trusted Partner for Comprehensive Cybersecurity
              <span className="br">
                Solutions, Empowering Your Digital Future
              </span>
            </p>
            <p>
              <Link href="/">Take Command of Your Security Now!</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-frame desktop">
        <div className="container">
          <div className="testimonial-frame-heading-main">
            <h3>Client Experiences that Define Our Tech Legacy</h3>
          </div>
          <TestimonialSlide />
        </div>
      </section>
      <Footer />
    </main>
  );
}
