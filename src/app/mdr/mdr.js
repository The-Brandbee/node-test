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
import BenefitsOne from "../img/Benefits-1.png";
import BenefitsTwo from "../img/Benefits-2.png";
import BenefitsThree from "../img/Benefits-3.png";
import BenefitsFour from "../img/Benefits-4.png";
import structured from "../img/Process-1.png";
import BenefitsFive from "../img/Benefits-5.png";
import BenefitsSix from "../img/Benefits-6.png";
import furtherOne from "../img/image003.jpg";
import furtherTwo from "../img/image001.png";
import CountOne from "../Count/CountOne.js";
import CountTwo from "../Count/CountTwo.js";
import CountThree from "../Count/CountThree.js";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main>
        <header>
          <Header />
          <div className="header-video">
            <video playsInline autoPlay loop muted>
              <source
                src={"https://thebrandbee.com/CSP-MDR-Banner-Video.mp4"}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="container Strengthen-cont-main">
            <div className="Strengthen-Your-Cyber-Defenses mdr-page">
              <h4>
                What is <span>MDR?</span>
              </h4>
              <p>Proactive Cybersecurity Explained</p>
            </div>
          </div>
        </header>
        <section className="Detection-Response-page">
          <div className="container">
            <div className="Detection-Response-page-middle">
              <div className="Detection-Response-page-middle-left">
                <p>
                  MDR, or Managed Detection & Response, is a cutting-edge
                  cybersecurity service that takes a proactive approach to
                  safeguarding your digital assets. It's more than just a
                  monitoring system; it's a comprehensive strategy designed to
                  ensure your organization's resilience in the face of
                  ever-evolving cyber threats. CSP Lighthouse is more than a
                  service; it's a proactive approach to safeguard your digital
                  assets.
                </p>
              </div>
              <div className="Detection-Response-page-middle-left">
                <p>
                  Leveraging Microsoft Sentinel, a cloud-native logging
                  solution, CSP Lighthouse provides Security Information and
                  Event Management (SIEM) and Security Orchestration,
                  Automation, and Response (SOAR). This combination provides a
                  single solution for attack detection, threat
                  visibility/intelligence, proactive hunting, and threat
                  response.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="application-guarantees-frame">
          <div className="container">
            <div className="application-guarantees-frame-middle">
              <div className="application-guarantees-left">
                <h4>
                  Harnessing Integrated Mobile Alerts for
                  <span> Comprehensive Cybersecurity</span>
                </h4>
                <p>
                  Our integrated mobile application guarantees round-the-clock
                  alert coverage. It automatically sends SMS and phone alerts to
                  the on-call team, ensuring high-severity alerts are never
                  missed. CSP Lighthouse collaborates seamlessly with integrated
                  security mechanisms throughout Microsoft Defender, Cloud App
                  Security, and Microsoft Endpoint Manager (Intune) portals.
                  CSP's MDR empowers your organization to excel in the
                  ever-evolving landscape of cybersecurity and compliance,
                  taking your digital defense to the next level.
                </p>
              </div>
              <div className="application-guarantees-right">
                <Image src={Leveraging} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="Does-it-Work-frame">
          <div className="container">
            <div className="Does-it-Work-frame-middle">
              <div className="Does-it-Work-frame-middle-left">
                <h2>How</h2>
                <h3>
                  Does it <span>Work?</span>
                </h3>
                <h6>
                  The MDR Operational <br />
                  Framework
                </h6>
                <p>
                  MDR operates by actively monitoring your digital environment,
                  not just for known threats but for any anomalies and unusual
                  patterns of behavior that could signal an impending attack.
                  This proactive approach is what sets MDR apart from
                  traditional cybersecurity solutions.
                </p>
              </div>
              <div className="Does-it-Work-frame-middle-right">
                <Slidemdr />
              </div>
            </div>
          </div>
        </section>
        <section className="Hunting-Rules-frame-number">
          <div className="container">
            <div className="Hunting-Rules-frame-number-middle">
              <div className="Hunting-Rules-frame-number-middle-cont">
                <p>
                  With CSP's MDR operational framework, you gain comprehensive
                  protection, proactive threat management, and the expertise
                  needed to stay one step ahead of cyber adversaries.
                </p>
              </div>
              <div className="Hunting-Rules-frame-number-middle-cont-number">
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountOne />
                  </h3>

                  <p>Hunting Rules</p>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountTwo />
                  </h3>

                  <p>
                    Automation <span>Playbooks</span>
                  </p>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountThree />
                  </h3>

                  <p>
                    User Engagement <span>Cards</span>
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
                  Benefits <span>of MDR</span>
                </h2>
                <h6>Fortifying Your Cybersecurity</h6>
              </div>
              <div className="Benefits-of-mdr-frame-middle-bottom">
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsOne} alt="" />
                  <h4>Complete Threat Visibility</h4>
                  <p>
                    Our MDR service delivers comprehensive awareness of all
                    activities within your network, whether on-premises, in the
                    cloud, or within hybrid environments. You gain unparalleled
                    visibility into your digital landscape.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsTwo} alt="" />
                  <h4>Constant Attack Detection</h4>
                  <p>
                    With our 24x7x365 monitoring and advanced threat
                    intelligence, we ensure continuous attack detection. Our
                    team is always vigilant and ready to identify and respond to
                    threats around the clock.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsThree} alt="" />
                  <h4>Reduce Pressure on your Internal Team</h4>
                  <p>
                    Our team takes on the management and monitoring of your
                    system, including threat investigation and triage. This
                    significantly reduces the workload on your internal security
                    team, allowing them to focus on strategic tasks.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsFour} alt="" />
                  <h4>Rapid Incident Response</h4>
                  <p>
                    By efficiently managing and organizing alerts, we not only
                    reduce the impact of irrelevant incidents but also provide
                    actionable response guidance for real threats. Swift
                    incident response is a cornerstone of our service.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsFive} alt="" />
                  <h4>Elevate Security Capabilities</h4>
                  <p>
                    MDR empowers your organization to swiftly enhance its threat
                    detection and response capabilities without the need for
                    heavy investments in infrastructure and personnel. It's the
                    key to elevating your security posture to new heights.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsSix} alt="" />
                  <h4>Threat Intelligence</h4>
                  <p>
                    Our service delivers advanced, real-time insights into
                    potential threats by aggregating and analysing vast amounts
                    of data from diverse sources, including dark web forums,
                    open-source feeds, and industry-specific repositories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="further-down-section">
          <div className="container">
            <div className="further-down-section-middle">
              <Image src={furtherOne} alt="" />
            </div>
            <div className="further-down-section-middle">
              <Image src={furtherTwo} alt="" />
            </div>
          </div>
        </section>
        <section className="Our-MDR-process">
          <div className="Our-MDR-process-two">
            <div className="container">
              <div className="Our-MDR-process-middle">
                <div className="Our-MDR-process-middle-left">
                  <h3>
                    What Is <span>Our Process?</span>
                  </h3>
                  <h6>
                    Our MDR process <span>follows a structured</span> approach:
                  </h6>
                </div>
                <div className="Our-MDR-process-middle-right">
                  <Image src={structured} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
