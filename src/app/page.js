"use client";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../app/common/Header.js";
import Footer from "../app/common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import testimonial from "../app/img/boy.png";
import Cybersecurity from "../app/img/middle-banner2.png";
import Securityone from "../app/img/it-icon-1.png";
import Securitytwo from "../app/img/it-icon-2.png";
import Securitythree from "../app/img/it-icon-5.png";
import Securityfour from "../app/img/it-icon-4.png";
import Securityfive from "../app/img/it-icon-3.png";
import Securitysix from "../app/img/it-icon-6.png";
import EmpoweringRight from "../app/img/Organizations.png";
import Main from "../app/img/logo.png";

import Advocate from "../app/img/middle-banner.png";

export default function Home() {
  return (
    <main>
      <Head></Head>
      <header>
        <div className="header-video">
          <video playsInline autoPlay loop muted>
            <source
              src={"https://thebrandbee.com/cyber-security.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <Header />
        <div className="Strengthen-Your-Cyber-Defenses">
          <h4>Strengthen Your Cyber Defenses</h4>
          <p>Your Trusted Partner for Cybersecurity Services</p>
          <div className="know-more">
            <Link href="/">Know More</Link>
          </div>
        </div>
      </header>

      <section className="Empowering-Organizations-top-h">
        <div className="container">
          <div className="Empowering-Organizations-top-h-middle">
            <h3>
              Empowering Organizations
              <span className="br">Through Tailored Cybersecurity</span>
              <span className="br">Solutions - Meet CSP, Your</span>
              <span className="br">Trusted Partner</span>
            </h3>
            <p>
              CSP Group is the vanguard of hyper-vigilant cybersecurity, leading
              organizations through the intricacies of the digital age. We
              empower businesses to streamline IT operations, fortify their
              digital workforce, and enhance overall efficiency. In a constantly
              evolving digital landscape, we function as the guiding beacon,
              enabling our clients to chart a proactive course that eliminates
              vulnerabilities, optimizes processes, and ensures security is
              preemptive and seamlessly integrated into their operations.
            </p>
            <div className="know-more">
              <Link href="/">Know More</Link>
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
          <Image src={Advocate} alt="" />
        </div>
        <div className="container">
          <div className="Ignite-Cybersecurity-frame-cont">
            <h3 className="ho-heading">
              Strengthening <span className="br">Cybersecurity with the</span>
              <span className="br">Essential Eight Framework</span>
            </h3>
            <p>
              At CSP, we advocate the use of the Essential Eight (ES8), a
              pragmatic{" "}
              <span className="br">
                framework for enhancing an organisation's overall security
                posture.
              </span>{" "}
            </p>
            <ul>
              <li>
                The Essential Eight (ES8) framework is the foundation for
                improving security, and CSP takes it further with a Zero Trust
                approach.
              </li>
              <li>
                The Essential Eight (ES8) framework is the foundation for
                improving security, and CSP takes it further with a Zero Trust
                approach.
              </li>
              <li>
                CSP rapidly elevates your security maturity, focusing on
                Microsoft 365 and Azure hybrid ecosystems.
              </li>
              <li>
                CSP rapidly elevates your security maturity, focusing on
                Microsoft 365 and Azure hybrid ecosystems.
              </li>
            </ul>
            <div className="know-more">
              <Link href="/">Know More</Link>
            </div>
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
              <h4>Eliminate Complexity and Reduce Costs:</h4>
              <p>
                We harness the Microsoft E5 Security license, a world leader in
                extended detection and response (XDR) solutions. Focusing on
                Zero Trust and Essential Eight frameworks, we optimize critical
                areas to reduce data breach risk by up to 50%.
              </p>
            </div>
          </div>
          <div className="know-more">
            <Link href="/">Know More</Link>
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
            <Link href="/">Know More</Link>
          </div>
        </div>
      </section>
      <section className="Ignite-Cybersecurity-frame">
        <div className="Ignite-Cybersecurity-frame-img">
          <Image src={Cybersecurity} alt="" />
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

      <section className="testimonial-frame">
        <div className="container">
          <div className="testimonial-frame-middle">
            <div className="testimonial-frame-left">
              <Image src={testimonial} alt="" />
              <h4>Andrew Ramsey</h4>
              <p>CEO Mobo Group</p>
            </div>
            <div className="testimonial-frame-right">
              <p>
                Choosing to work with Callum and his team at CSP in late 2022
                was the single most valuable decision I made for the year. With
                the support and guidance of Callum, he has assisted Mobo Group
                in implementing the Essential 8 cyber security controls
                necessary for us to achieve Right Fit For Risk accreditation to
                ISO 27001. His proactive, responsive and supportive manner has
                captivated the entire team at Mobo Group who have been
                incredibly impressed by his work ethic and hard work in support
                of our business. I will be forever grateful for Callum's
                support, guidance, patience and understanding afforded to me in
                completing the RFFR project and becoming our trusted managed
                security service provider. I cannot imagine any IT provider
                being able to match the flexibility and commitment he has made
                to the hours of work needed by my side in this time of need.
                When IT is not a language you speak well, there is nothing
                better than finding someone to work with like Callum and the the
                team at CSP. From my perspective they have demonstrated through
                their actions how much they care for our business, they treat
                the work they do as if it was for themselves and they clearly
                want to see us succeed. This is a partnership which I suspect is
                in its infancy, with much more value to be realised. Looking
                forward to a strong future partnership.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
