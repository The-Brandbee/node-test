"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import Slidemdr from "../common/Slidemdr.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Leveraging from "../img/Leveraging.webp";
import BenefitsOne from "../img/security-icon-1.png";
import BenefitsTwo from "../img/security-icon-2.png";
import BenefitsThree from "../img/security-icon-3.png";
import BenefitsFour from "../img/security-icon-4.png";
import BenefitsFive from "../img/security-icon-5.png";
import BenefitsSix from "../img/security-icon-6.png";
import CountTwo from "../Count/CountFive.js";
import CountThree from "../Count/countFour.js";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="security-uplifts-page-main">
        <header>
          <Header />
          <div className="header-video">
            <video playsInline autoPlay loop muted>
              <source
                src={"https://cdn.thebrandbee.com/video/CSP-Global-Video.mp4"}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="container Strengthen-cont-main">
            <div className="Strengthen-Your-Cyber-Defenses mdr-page">
              <h4>
                Security Uplift
                <span>
                  <strong>at</strong> CSP Global:
                </span>
              </h4>
              <p>Fortifying Your Digital Estate</p>
            </div>
          </div>
        </header>
        <section className="Detection-Response-page">
          <div className="container">
            <div className="Detection-Response-page-middle">
              <div className="Detection-Response-page-middle-left">
                <p>
                  Experience our concept of Security Uplift—a unique initiative
                  developed by CSP to bolster your organization's cybersecurity
                  against evolving threats and vulnerabilities and align your
                  ecosystem with the industry's best practices. As the digital
                  landscape constantly evolves, cyber threats advance in
                  sophistication, demanding a proactive and adaptive
                  cybersecurity approach.
                </p>
              </div>
              <div className="Detection-Response-page-middle-left">
                <p>
                  As a Microsoft Gold partner, now called Microsoft Security
                  Solutions Provider, we have expertise across the entire
                  Microsoft 365 and Azure digital estate. After our Initial
                  Security Review (ISR), we then provide a tailored roadmap to
                  uplift your security posture. This involves the careful
                  implementation of some 1500 settings and controls across the
                  most important aspects of your ecosystem:
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="Hunting-Rules-frame-number">
          <div className="container">
            <div className="Hunting-Rules-frame-number-middle">
              <div className="Hunting-Rules-frame-number-middle-cont-number">
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h4>
                    Did You <span>Know?</span>
                  </h4>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountTwo />
                  </h3>

                  <p>
                    Reduction in the likelihood of a breach by adopting
                    Microsoft Security.
                    <br /> - Forrester, Total Economic Impact of Microsoft
                    Security
                  </p>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountThree />
                  </h3>

                  <p>
                    of all successful ransomware compromises originate through
                    unmanaged devices.
                    <br />- Microsoft Digital Defence Report 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Benefits-of-mdr-frame">
          <div className="container">
            <div className="Benefits-of-mdr-frame-middle">
              <div className="Benefits-of-mdr-frame-middle-top">
                <h2>
                  <span>Key</span> Benefits
                  <br />
                  <span>
                    of Security Uplift
                    <br /> by CSP Global
                  </span>
                </h2>
              </div>
              <div className="Benefits-of-mdr-frame-middle-bottom">
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsOne} alt="" />
                  <h4>
                    Enhanced Security <br />
                    Configuration:
                  </h4>
                  <p>
                    We provide over 1500 baseline security settings to protect
                    devices, emails, data, apps and cloud portals.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsTwo} alt="" />
                  <h4>
                    Advanced Device <br />
                    Management:
                  </h4>
                  <p>
                    Ensure optimal device management through Microsoft Intune
                    MDM and Hybrid enrollment, enhancing control and security
                    across your device fleet and allowing your workforce to
                    realize a potential 60% uptick in productivity and
                    performance and far less IT frustration.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsThree} alt="" />
                  <h4>
                    Unified Cybersecurity <br />
                    Approach:
                  </h4>
                  <p>
                    Centralize your cybersecurity products under the
                    comprehensive umbrella of Microsoft E5 Security or XDR
                    (extended detection and response), streamlining your defense
                    strategy and saving significantly on disparate vendors.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsFour} alt="" />
                  <h4>
                    Cutting-Edge <br />
                    Automation and AI:
                  </h4>
                  <p>
                    Experience the forefront of automation and AI capabilities
                    with Microsoft 365 Copilot, delivering mechanisms for your
                    organization to take advantage of this AI revolution and
                    significantly increase productivity.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsFive} alt="" />
                  <h4>Optimized IT Investments:</h4>
                  <p>
                    Maximize the value of your IT budget by leveraging every
                    program and system to its full capacity, ensuring a
                    significant return on investment. We are experts in
                    Microsoft licensing and help you understand exactly what you
                    get for your Microsoft investment allowing you to eliminate
                    overlapping software.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsSix} alt="" />
                  <h4>Market-Proven Expertise:</h4>
                  <p>
                    Centralize your cybersecurity products under the
                    comprehensive umbrella of Microsoft E5 Security or XDR
                    (extended detection and response), streamlining your defense
                    strategy and saving significantly on disparate vendors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Empowering-Cybersecurity-frame">
          <div className="container">
            <div className="Empowering-Cybersecurity-frame-top">
              <div className="Empowering-Cybersecurity-frame-top-left">
                <h3>
                  <span>Empowering</span>
                  <br /> Cybersecurity
                  <br /> with CSP Global
                </h3>
              </div>
              <div className="Empowering-Cybersecurity-frame-top-right">
                <p>
                  Embark on a journey of fortified cybersecurity and IT
                  enhancement with CSP's Security Uplift. By harnessing the
                  power of Microsoft's cloud technology, we optimize and trailer
                  solutions to your needs, ensuring compliance, proactive threat
                  detection, enhanced productivity, and vulnerability
                  management. On average, we see our client's Microsoft Secure
                  Scores rise by 30-50% after security uplift. This comes from a
                  combination of our unique methodology of Eliminate, Simplify,
                  and Protect, combined with our leading commitment to industry
                  standard
                  <Link href="cybersecurityframework">
                    <span> cyber frameworks.</span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="Empowering-Cybersecurity-frame-bottom">
              <h5>
                Contact us to uplift your digital estate and improve your
                security posture
              </h5>
              <p>
                Copy our “OUR UNIQUE APPROACH IS SIMPLE: Eliminate Simplify
                Protect” section from the About Us page.
              </p>
              <p className="Find_Out_More">
                <Link href="/contact">Find Out More &gt; </Link>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
