import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import Image from "next/image";
import CollageOne from "../img/collage-icon-1.png";
import CollagTwo from "../img/collage-icon-2.png";
import CollagThree from "../img/collage-icon-3.png";
import Cybersecurity from "../img/success-stories-banner-2.jpg";
import CybersecurityMobile from "../img/success-stories-banner-3.png";
import StreamlinedIcon from "../img/StreamlinedIcon.png";

export default function TopCollage() {
  return (
    <>
      <Tabs>
        <div className="tab-col-middle-logo">
          <div className="container">
            <TabList>
              <Tab>
                <Image src={CollageOne} alt="" />
              </Tab>
              <Tab>
                <Image src={CollagTwo} alt="" />
              </Tab>
              <Tab>
                <Image src={CollagThree} alt="" />
              </Tab>
            </TabList>
          </div>
        </div>
        <div className="tab-col-middle-logo-con">
          <TabPanel>
            <section className="About-The-Company-sto">
              <div className="container">
                <div className="About-The-Company-sto-bo">
                  <div className="About-The-Company-sto-bo-left">
                    <h3>Trinity College</h3>
                    <p>Industry: Education</p>
                  </div>
                  <div className="About-The-Company-sto-bo-right">
                    <h4>About The Company</h4>
                    <p>
                      The Trinity College story began in 1984 when a small group
                      of committed families from Gawler began operation with 27
                      students in the hall at St George's Anglican Church. The
                      vision and pioneering spirit of dedicated staff, parents
                      and students has seen Trinity College grow into an
                      extraordinary educational institution offering preschool
                      to Year 12. Now into its third decade of operation,
                      Trinity College has become widely recognised for the
                      realisation of its stated ethos - excellence for all.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="About-The-Company-sto-bottom">
              <div className="container">
                <div className="About-The-Company-sto-bottom-two one">
                  <div className="About-The-Company-sto-bottom-two-left">
                    <h3>The Challenge:</h3>
                    <h4>
                      Navigating <br />
                      Fragmented IT <br />
                      Systems
                    </h4>
                  </div>
                  <div className="About-The-Company-sto-bottom-two-right">
                    <ul>
                      <li>
                        Enhancing security posture across diverse user personas
                        presented a complex challenge, requiring tailored
                        strategies to address varying levels of access and risk.
                      </li>
                      <li>
                        Conducting an evaluation and assessment of Essential
                        Eight security controls revealed gaps and areas for
                        improvement, necessitating proactive measures to bolster
                        cybersecurity defences.
                      </li>
                      <li>
                        Implementing co-management deployment facilitated
                        seamless integration between SCCM and Intune, harnessing
                        the combined power of both platforms to optimize device
                        management and security protocols.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="About-The-Company-sto-bottom-two">
                  <div className="About-The-Company-sto-bottom-two-left">
                    <h3>Services Offered:</h3>
                    <h4>
                      Enhancing <br />
                      Technological
                      <br /> Infrastructure
                    </h4>
                  </div>
                  <div className="About-The-Company-sto-bottom-two-right">
                    <ul>
                      <li>
                        Aligned Trinity College's infrastructure with Essential
                        Eight standards for <br />
                        robust cybersecurity.
                      </li>
                      <li>
                        Enhanced Trinity College's digital ecosystem with
                        Microsoft 365 and <br />
                        Azure uplift.
                      </li>
                      <li>
                        Implemented efficient Intune Hybrid Device Management
                        for seamless <br />
                        device control.
                      </li>
                      <li>
                        Streamlined Trinity College's vendor landscape through
                        consolidation for <br />
                        optimized operations.
                      </li>
                    </ul>
                  </div>
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
                  <h2>Our Solution:</h2>
                  <h3 class="ho-heading">
                    Tailored IT Strategy
                    <span class="br">Implementation</span>
                  </h3>
                  <p>
                    CSP Global devised a comprehensive strategy tailored to
                    Trinity College's needs, integrating Essential Eight
                    alignment, Microsoft 365 and Azure uplift, Intune Hybrid
                    Device Management, and vendor consolidation to address their
                    IT challenges effectively.
                  </p>
                </div>
              </div>
            </section>
            <section className="Streamlined-IT-Infrastructure-frame">
              <div className="container">
                <div className="Streamlined-IT-Infrastructure-frame-top">
                  <h2>The Result</h2>
                  <h5>Streamlined IT Infrastructure</h5>
                </div>
                <div className="Streamlined-IT-Infrastructure-frame-bottom">
                  <ul>
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      Developed and implemented an Essential Eight roadmap,
                      providing strategic guidance to enhance cybersecurity
                      measures and align with industry standards.
                    </li>
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      Successfully provisioned Intune and SCCM co-management,
                      streamlining device onboarding processes and optimizing
                      device management capabilities.
                    </li>
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      Deployed baseline security measures and CSP's Essential
                      Eight configuration profile across the organization,
                      fortifying defenses against cyber threats.
                    </li>
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      Enforced Zero Trust and Essential Eight compliance
                      protocols, ensuring robust security measures and adherence
                      to best practices.
                    </li>
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      Achieved cost savings by consolidating cybersecurity
                      solutions under a single XDR platform, optimizing
                      operational efficiency and reducing overhead costs.
                    </li>
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      Seamlessly migrated from a patchwork of vendors to a
                      unified cybersecurity platform, extending protection
                      across all assets including email, devices, data, network,
                      and identity, thereby enhancing overall security posture
                      and resilience.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="About-The-Company-sto">
              <div className="container">
                <div className="About-The-Company-sto-bo">
                  <div className="About-The-Company-sto-bo-left">
                    <h3>Agostino Group</h3>
                    <p>Industry: Oil & Gas</p>
                  </div>
                  <div className="About-The-Company-sto-bo-right">
                    <h4>About The Company</h4>
                    {/*<h5>The Challenge: IT System Fragmentation</h5>
                    <p>
                      Navigating fragmented IT systems and cybersecurity
                      vulnerabilities posed significant hurdles for the
                      organization's efficiency and security.
                    </p>*/}
                    <p>
                      Agostino Group has become one of South Australia's more
                      significant operations. All businesses operate within -
                      and are motivated by - highly competitive environments ,
                      resulting in the delivery of consistent quality and a keen
                      appreciation of customer service and enduring
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="About-The-Company-sto-bottom">
              <div className="container">
                <div className="About-The-Company-sto-bottom-two">
                  <div className="About-The-Company-sto-bottom-two-left">
                    <h3>Services Offered:</h3>
                    <h4>
                      Complete IT <br />
                      Services <br />
                      Offering
                    </h4>
                  </div>
                  <div className="About-The-Company-sto-bottom-two-right">
                    <ul>
                      <li>
                        Essential Eight Alignment: Ensuring robust cybersecurity
                        measures aligned with industry standards.
                      </li>
                      <li>
                        Microsoft 365 and Azure uplift: Enhancing digital
                        infrastructure and cloud capabilities for improved
                        productivity.
                      </li>
                      <li>
                        Intune Hybrid Device Management: Implementing seamless
                        control and management of devices across the
                        organization.
                      </li>
                      <li>
                        Active Directory hardening: Strengthening security
                        measures within the organization's Active Directory
                        environment.
                      </li>
                      <li>
                        Vendor consolidation: Streamlining operations and
                        reducing complexity by consolidating vendor
                        relationships.
                      </li>
                      <li>
                        DLP (Data Loss Prevention): Implementing measures to
                        prevent unauthorized access and leakage of sensitive
                        data.
                      </li>
                    </ul>
                  </div>
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
                  <h2>OUR SOLUTIONS:</h2>
                  <h3 class="ho-heading">
                    COMPREHENSIVE
                    <span class="br">IT STRATEGY</span>
                  </h3>
                  <p>
                    CSP Global devised a comprehensive strategy tailored to
                    address the organization's IT challenges effectively,
                    integrating Essential Eight alignment, Microsoft 365 and
                    Azure uplift, Intune Hybrid Device Management, Active
                    Directory hardening, vendor consolidation, and DLP
                    implementation.
                  </p>
                </div>
              </div>
            </section>
            <section className="Streamlined-IT-Infrastructure-frame">
              <div className="container">
                <div className="Streamlined-IT-Infrastructure-frame-top">
                  <h2>The Result</h2>
                  <h5>Streamlined Infrastructure & Enhanced Security</h5>
                </div>
                <div className="Streamlined-IT-Infrastructure-frame-bottom">
                  <ul className="collaborative-middle-frame-main">
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      The collaborative efforts between CSP Global and the
                      organization yielded a streamlined IT infrastructure,
                      bolstering efficiency, enhancing cybersecurity, and
                      reducing complexities, marking a significant success in
                      optimizing operations and securing sensitive data.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="About-The-Company-sto">
              <div className="container">
                <div className="About-The-Company-sto-bo">
                  <div className="About-The-Company-sto-bo-left">
                    <h3>Mobo Group</h3>
                    <p>Industry: Non-Profit Organization</p>
                  </div>
                  <div className="About-The-Company-sto-bo-right">
                    <h4>About The Company</h4>
                    <h5>The Challenges: Cybersecurity Risk Management</h5>
                    <p>
                      Navigating cybersecurity risks while ensuring the right
                      fit for risk management posed significant hurdles for the
                      organization.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="About-The-Company-sto-bottom">
              <div className="container">
                <div className="About-The-Company-sto-bottom-two">
                  <div className="About-The-Company-sto-bottom-two-left">
                    <h3>Services Offered:</h3>
                    <h4>
                      Complete Cybersecurity <br />
                      Services <br />
                      Suite
                    </h4>
                  </div>
                  <div className="About-The-Company-sto-bottom-two-right">
                    <ul>
                      <li>
                        ISO 27001 (Right Fit For Risk): Tailored implementation
                        of ISO 27001 standards to match the organization's risk
                        profile.
                      </li>
                      <li>
                        Essential Eight alignment: Aligning cybersecurity
                        measures with Essential Eight framework for enhanced
                        protection.
                      </li>
                      <li>
                        Microsoft 365 and Azure uplift: Enhancing digital
                        infrastructure and cloud capabilities with Microsoft 365
                        and Azure.
                      </li>
                      <li>
                        Intune Hybrid Device Management: Implementing seamless
                        control and management of devices across the
                        organization.
                      </li>
                      <li>
                        Managed Detection and Response: Proactive monitoring and
                        response services to detect and mitigate security
                        threats.
                      </li>
                      <li>
                        Vendor consolidation: Streamlining operations and
                        reducing complexity by consolidating vendor
                        relationships.
                      </li>
                    </ul>
                  </div>
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
                  <h2>Our Solutions:</h2>
                  <h3 class="ho-heading">
                    Tailored Cybersecurity
                    <span class="br">Strategies</span>
                  </h3>
                  <p>
                    CSP Global devised tailored strategies, integrating ISO
                    27001 implementation, Essential Eight alignment, Microsoft
                    365 and Azure uplift, Intune Hybrid Device Management,
                    Managed Detection and Response, and vendor consolidation to
                    address the organization's cybersecurity challenges
                    effectively.
                  </p>
                </div>
              </div>
            </section>
            <section className="Streamlined-IT-Infrastructure-frame">
              <div className="container">
                <div className="Streamlined-IT-Infrastructure-frame-top">
                  <h2>The Result</h2>
                  <h5>Enhanced Security & Efficiency</h5>
                </div>
                <div className="Streamlined-IT-Infrastructure-frame-bottom">
                  <ul className="collaborative-middle-frame-main">
                    <li>
                      <span>
                        <Image src={StreamlinedIcon} alt="" className="" />
                      </span>
                      The collaborative efforts between CSP Global and the
                      organization resulted in strengthened cybersecurity
                      measures, optimized operations, and enhanced risk
                      management capabilities, marking a significant success in
                      safeguarding sensitive data and mitigating security
                      threats.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
}
