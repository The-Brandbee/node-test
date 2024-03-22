"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import BenefitsOne from "../img/Dynamic-1.png";
import CybersecurityframeworkTwo from "../img/cybersecurityframework-2.png";
import CybersecurityframeworkThree from "../img/cybersecurityframework-3.png";
import Slidemdr from "../common/SlidemdrTwo.js";
import CybersecurityframeworkFour from "../img/cybersecurityframework-4.png";
import BenefitsThree from "../img/Dynamic-3.png";
import BenefitsFour from "../img/Dynamic-4.png";
import BenefitsFive from "../img/Dynamic-5.png";
import BenefitsSix from "../img/Dynamic-6.png";
import ModernOne from "../img/Modern-1.png";
import ModernTwo from "../img/Modern-2.png";
import ModernThree from "../img/Modern-3.png";
import ModernFour from "../img/Modern-4.png";
import ModernFive from "../img/Modern-5.png";
import Eliminate from "../img/Eliminate.png";
import CountSeven from "../Count/CountSeven.js";
import CountSix from "../Count/CountSix.js";
import Script from "next/script";
import Frameworkbanner from "../img/cybersecurityframework-top-banner.jpg";

import { GoogleTagManager } from "@next/third-parties/google";

export default function cybersecurityframework() {
  return (
    <div className="">
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="cybersecurityframework-main-page">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={Frameworkbanner} alt="" />
          </div>
          <div className="container">
            <div className="about-bannner-contact Modern-SOC-main">
              <h3>
                Next-Gen
                <br /> Cybersecurity
                <br /> Framework
                <br /> <span>Unveiled</span>
              </h3>
            </div>
          </div>
        </header>
        <section className="Detection-Response-page">
          <div className="container">
            <div className="Detection-Response-page-middle">
              <div className="Detection-Response-page-middle-left">
                <p>
                  Explore the tailored cybersecurity framework of CSP Global,
                  uniquely developed to tackle the complexities of digital
                  security and compliance.
                </p>
                <p>
                  In today's world, where digital threats are ever-present,
                  cybersecurity isn't just about following rules; it's about
                  strategically managing risks, strengthening defenses, and
                  building a cyber-savvy workplace culture. As businesses adapt
                  to the digital age, our Cybersecurity Framework stands out as
                  a vital tool, ensuring protection and demonstrating our strong
                  commitment to security excellence.
                </p>
              </div>
              <div className="Detection-Response-page-middle-left">
                <Image src={CybersecurityframeworkTwo} alt="" />
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
                    <CountSix />
                  </h3>

                  <p>
                    increase in password attacks in the last year. It has risen
                    to an estimated 921 attacks per second.
                    <br /> - Microsoft Digital Defence Report
                  </p>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountSeven />
                  </h3>

                  <p>
                    93% of organizations are concerned about insider risks.
                    <br />- Verizon Risk Investigation Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Framework-Deconstructed-frame">
          <div className="container">
            <div className="Framework-Deconstructed-frame-middle">
              <h3>
                The Cybersecurity
                <br />
                Framework <span>Deconstructed</span>
              </h3>
              <ul>
                <li>
                  To assess an organization's cybersecurity posture, especially
                  regarding Microsoft 365 and Azure best practices, we employ a
                  multi-faceted approach that begins with our unique ISR
                  (Initial Security Review). This comprehensive review serves as
                  the cornerstone for understanding the organization's current
                  security landscape.
                </li>
                <li>
                  In certain sectors, we extend the ISR free of charge or offer
                  it at a heavily discounted rate, recognizing the importance of
                  accessible cybersecurity assessments in today's threat
                  landscape. This initiative allows organizations to benefit
                  from critical insights into their security posture without
                  imposing a financial burden.
                </li>
                <li>
                  When an organization has an existing IT department or Managed
                  Service Provider (MSP), we streamline the assessment process
                  by collaborating closely with them. We provide a digital form
                  tailored to gather crucial information about the
                  organization's security controls which can be measured against
                  Australian Cyber Security Centre's, Essential Eight. This
                  collaborative approach ensures that key stakeholders are
                  involved in the assessment process, facilitating a more
                  comprehensive understanding of the organization's security
                  needs and challenges.
                </li>
                <li>
                  Furthermore, we utilize read-only access accounts to conduct a
                  thorough evaluation of the entire Microsoft 365 and Azure
                  environments. This approach allows us to assess
                  configurations, identify potential vulnerabilities, and
                  evaluate adherence to best practices recommended by Microsoft
                  and industry standards. By leveraging read-only access, we can
                  perform a detailed analysis without disrupting ongoing
                  operations or compromising sensitive data.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="Role-of-Essential-Eight" id="essentialeight">
          <div className="container">
            <div className="Role-of-Essential-Eight-top">
              <div className="Role-of-Essential-Eight-top-left">
                <h3>
                  Role of
                  <br />
                  Essential Eight in
                  <br />
                  <span>
                    Cybersecurity
                    <br /> Framework
                  </span>
                </h3>
              </div>
              <div className="Role-of-Essential-Eight-top-right">
                <p>
                  In the cybersecurity framework provided by CSP Global, the
                  Essential Eight are considered the most effective mitigation
                  strategies available. Each strategy plays a distinct role in
                  preventing, limiting, or recovering from potential cyber
                  threats.
                </p>
                <p>
                  When all eight are implemented, even to maturity level 1, your
                  organization will see a significant reduction in the chances
                  of a successful attack. CSP have helped across industries,
                  whether it be not-for-profits attempting to attain a Right Fit
                  for Risk milestones or to rapidly uplift an entity applying
                  for the Defense Industry Security Program (DISP).
                </p>
              </div>
            </div>
            <div className="Role-of-Essential-Eight-bottom">
              <ul>
                <li>
                  <h5>Application Control:</h5>
                  <p>
                    Ensure only approved applications run, preventing the entry
                    of malicious code into your systems.
                  </p>
                </li>
                <li>
                  <h5>Patch Applications:</h5>
                  <p>
                    Regularly update applications and expedite response to
                    emerging CVEs to minimize exploitation.
                  </p>
                </li>
                <li>
                  <h5>Configure Macro Settings:</h5>
                  <p>
                    Block all Microsoft macros unless business justified,
                    thwarting the execution of malicious code.
                  </p>
                </li>
                <li>
                  <h5>User Application Hardening:</h5>
                  <p>
                    Harden your environment with security baselines, increasing
                    resilience against attacks.
                  </p>
                </li>
                <li>
                  <h5>Restrict Administrative Privileges:</h5>
                  <p>
                    Grant access to internal admin accounts only to trusted and
                    authorized individuals. Isolate and protect these privileged
                    accounts.
                  </p>
                </li>
                <li>
                  <h5>Patch Operating Systems:</h5>
                  <p>
                    Promptly patch operating systems using automated scheduling
                    and expedite when urgent.
                  </p>
                </li>
                <li>
                  <h5>Multi-Factor Authentication:</h5>
                  <p>
                    Introduce an additional layer of protection to prevent
                    unauthorized access, particularly when passwords are
                    compromised. Leverage modern access controls like
                    phishing-resistant MFA in the form of FIDO bio-metric or
                    Windows Hello for Business.
                  </p>
                </li>
                <li>
                  <h5>Regular Backups:</h5>
                  <p>
                    Conduct daily backups and keep them secure ensuring the
                    availability of data post-breach.
                  </p>
                </li>
              </ul>
            </div>
            <div className="CybersecurityframeworkThree">
              <Image src={CybersecurityframeworkThree} alt="" />
            </div>
          </div>
        </section>
        <section className="Does-it-Work-frame" id="nist">
          <div className="container">
            <div className="Does-it-Work-frame-middle">
              <div className="Does-it-Work-frame-middle-left">
                <h3>
                  <span>NIST</span> <br />
                  Cyber Security
                  <br /> Framework
                </h3>

                <p>
                  The NIST (National Institute of Standards and Technology)
                  Cybersecurity Framework is widely regarded as a foundational
                  framework for organizations looking to strengthen their
                  cybersecurity posture. Its utility becomes particularly
                  evident when applied to complex environments like Microsoft
                  365 and Azure ecosystems. Here's why:
                </p>
              </div>
              <div className="Does-it-Work-frame-middle-right">
                <Slidemdr />
              </div>
            </div>
          </div>
        </section>
        <section className="Identify-See-the-Unseen">
          <div className="container">
            <div className="Identify-See-the-Unseen-middle">
              <div className="Identify-See-the-Unseen-middle-left">
                <ul>
                  <li>
                    <h5>
                      <span>Identify:</span> See the Unseen
                    </h5>
                    <p>
                      Our journey begins by showing how to gain greater
                      visibility and you identify every asset throughout your
                      ecosystem.
                    </p>
                  </li>
                  <li>
                    <h5>
                      <span>Protect:</span> Essential Eight meets
                      <br /> Zero Trust
                    </h5>
                    <p>
                      Once all assets are identified we can then take a
                      risk-based approach and apply suitable levels of
                      protection to each asset type, Using our expertise to
                      eliminate disparate solutions we can help you realize up
                      to 60% savings by consolidating your vendors.
                    </p>
                  </li>
                  <li>
                    <h5>
                      <span>Detect:</span> Incidents Early
                    </h5>
                    <p>
                      Microsoft XDR consolidates all your cybersecurity
                      solutions into a unified platform, offering a single pane
                      of glass for streamlined management. It enables you to
                      configure a tailored solution for detecting threats that
                      correspond to your unique assets, including email,
                      endpoints, data, applications, identities, and servers.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="Identify-See-the-Unseen-middle-middle">
                <Image src={CybersecurityframeworkFour} alt="" />
              </div>
              <div className="Identify-See-the-Unseen-middle-left">
                <ul>
                  <li>
                    <h5>
                      <span>Respond:</span> Effective
                    </h5>
                    <p>
                      Orchestrate and automate response actions that rapidly
                      respond to threats and evict adversaries before they cause
                      significant harm. Gain insights into your threat landscape
                      with our unique Microsoft Teams integrated platform that
                      leverages Microsoft Sentinel + XDR and ingests your most
                      valuable logs for early detection and visibility.
                    </p>
                  </li>
                  <li>
                    <h5>
                      <span>Recover: </span> Swift
                      <br /> Capability Restoration
                    </h5>
                    <p>
                      Ensure minimal downtime by implementing strategies for
                      swiftly restoring capabilities post-incident, facilitating
                      seamless business continuity and bolstering resilience.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="Role-of-Zero-Trust-Methodology" id="zerotrust">
          <div className="container">
            <div className="Role-of-Zero-Trust-Methodology-top">
              <h3>
                Role of <span>Zero Trust</span> Methodology
                <br /> in Cybersecurity Framework
              </h3>
              <p>
                Zero Trust is a comprehensive and transformative cybersecurity
                approach that challenges the traditional notion of trust within
                a network. In a zero-trust model, no entity, whether inside or
                outside the network perimeter, is automatically trusted.
                Instead, trust is continually verified through rigorous
                authentication processes regardless of the user's location or
                network connection.
              </p>
            </div>
            <div className="Role-of-Zero-Trust-Methodology-bottom">
              <div className="Role-of-Zero-Trust-Methodology-bottom-left">
                <h4>
                  Never Trust
                  <br /> Always Verify:
                </h4>
                <p>
                  Prioritize identity as the primary security perimeter,
                  requiring rigorous verification for all users, devices, and
                  applications.
                </p>
              </div>
              <div className="Role-of-Zero-Trust-Methodology-bottom-left">
                <h4>
                  Least Privilege
                  <br /> Access:
                </h4>
                <p>
                  Assign the minimum necessary access permissions to users,
                  limiting potential damage from a compromised account.
                </p>
              </div>
              <div className="Role-of-Zero-Trust-Methodology-bottom-left">
                <h4>Assume Breach</h4>
                <p>
                  By adopting the "assume breach" mindset, you can minimize the
                  impact of security breaches and invest far more energy in
                  detecting inevitable attacks that with todays sophisitaction
                  can bypass even the most hardened environments. Detecting
                  early warning signs of a breach is paramount.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
