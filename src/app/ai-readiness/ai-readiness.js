"use client";
import React from "react";
import ArrowOne from "../img/phase-one-icon-1.png";
import Arrowtwo from "../img/business-person-futuristic-business-environment.jpg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Leveraging from "../img/Path-icon.png";
import BenefitsOne from "../img/data-management.png";  
import BenefitsTwo from "../img/business-person.png";
import BenefitsThree from "../img/Path-37.png";
import ArrowOneNew from "../img/AI-Framework.png";
import BenefitsFour from "../img/futuristic-computer.png";
import BenefitsFive from "../img/Web_Optimizatio.png";
import BenefitsSix from "../img/Ai-ready.jpg";



import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { GoogleTagManager } from "@next/third-parties/google";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2></h2>;
  }

  return (
    <>
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="security-uplifts-page-main ai-readiness">
      
          <div>
            <header>
              <Header />
              <div className="header-video ai-readiness">
                <video playsInline autoPlay loop muted>
                  <source
                    src={
                      "https://blog.csp.global/wp-content/uploads/2024/11/CSP-AI-Banner-Video-2.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="container Strengthen-cont-main">
                <div className="Strengthen-Your-Cyber-Defenses mdr-page ai-readiness">
                <h4>AI READINESS</h4>
                <p>Preparing Your Business for AI Adoption</p>
                </div>
              </div>
            </header>
          
            <section className="Detection-Response-page">
              <div className="container">
                <div className="Detection-Response-page-middle">
                  <div className="Detection-Response-page-middle-left">
                    <p>The year 2024 has been monumental for AI. A growing number of organizations are integrating AI into their business workflows, and with a whopping 75% of knowledge workers using AI at work today, the benefits are getting attention. Unfortunately, many organizations don’t have the visibility needed to prevent sensitive data from going to unsanctioned places. Some organizations are reacting out of fear, with approximately 48 percent blocking AI entirely. Even if your organization hasn’t yet adopted or deployed AI at the enterprise level, your employees are actively bringing their own AI tools to work today.</p>
                  </div>
                 
                </div>
              </div>
            </section>


            <section className="ai-readiness-tab-frame">
            <div className="container">
            <Accordion preExpanded={['a']}>
            <AccordionItem uuid={'a'} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    PHASE 1
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="phase-main-middle-frame">
                       <h3>AI Risk Assessment</h3>
                       <div className="phase-main-middle-frame-middle">
                        <div className="phase-main-middle-frame-middle-left">
                          <h4>AI Unified Framework </h4>
                          <p>AI introduces several security vulnerabilities, such as leakage and compliance risks. Ignoring the assessment of AI risk may lead to unexpected reversals in operations, along with huge losses in terms of money or data. That is why it is crucial to have an AI Framework and security roadmap before moving ahead with any implementation. This can be done in parallel with Innovation. We recommend starting with a cybersecurity assessment along with a 4-week innovation sprint.</p>
                          
                          <div class="introduces-New">
                          
                            <Link href="/contact">
                        <Image src={ArrowOneNew} alt="" />
                        </Link>
                          </div>
                         {/* <ul>
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={ArrowOne} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Assess your cybersecurity</h5>
                                <p>
                                Assess the current IT ecosystem and security posture across your digital landscape. Plan to align with at least two industry standard frameworks. For Australian clients, we recommend Zero Trust + Essential Eight.
                                </p>
                              </div>

                            </li>
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={Leveraging} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Optimize your Data</h5>
                                <p>
                                More than 80% of business executives believe data leakage is among the biggest threats. Review your permissions at scale and use optimization for removing ROT data (redundant, obsolete and trivial) to a more secure and cost-effective location.
                                </p>
                              </div>

                            </li>
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={BenefitsOne} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Device Management</h5>
                                <p>In more than 90% of cases where attacks progressed to ransom stage, the attacker had leveraged unmanaged devices in the network. Ensure only compliant and corporate-managed devices can access your resources. This also improves the end user experience.</p>
                              </div>

                            </li>
                          </ul>*/}
                        </div>
                        <div className="phase-main-middle-frame-middle-right">
                        <Image src={Arrowtwo} alt="" />
                        </div>

                       </div>
                       <div className="Recommended-Solutions-main-frame">
                           <h3>Recommended Solutions</h3>
                           <div className="Recommended-Solutions-main-frame-middle">
                                <div className="Recommended-Solutions-main-frame-middle-left">
                                  <h5>Technology partnerships</h5>
                                  <p>Engage expert companies - such as CSP Global and their AI delivery partner - and find ways to get the most out of your technology investments. Make sure you consider device, data and endpoint security, and look at options for SLA support around the clock before implementing AI products. Your partner should be able to find Shadow AI in your organization and help create AI fair use policies.</p>
                                  <p><a href="https://outlook.office365.com/owa/calendar/MeetUsCopy@csp.global/bookings/" target="_blank">Book Discussion</a></p>
                                </div>
                                <div className="Recommended-Solutions-main-frame-middle-right">
                                  <h5>AI Adoption</h5>
                                  <p>
                                  Develop strategic aims and the capacity to continually report on achieved outcomes. Begin with the “art of the possible”, our free AI education session. Then, move into a more intensive sprint involving key stakeholders and get into the weeds with high impact areas/use cases, aimed at your specific business objectives.</p>
                                  <p><a href="https://clarity.video/watch/83fd155d-7abe-44f1-b7ab-0a5f8fde16c8" target="_blank">Watch the video</a></p>
                                </div>
                           </div>
                       </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    PHASE 2
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame PHASE-2">
                       <h3>Device Management and Monitoring </h3>
                       <div className="phase-main-middle-frame-middle">
                       <div className="phase-main-middle-frame-middle-right">
                        <Image src={BenefitsFour} alt="" />
                        </div>
                        <div className="phase-main-middle-frame-middle-left">
                          <h4>Endpoint Security and Monitoring </h4>
                          <p>AI systems often handle sensitive data, making them attractive targets for cyberattacks. Effective device management and security monitoring help ensure that all devices accessing AI systems are secure and compliant with regulatory standards. AI can introduce new vulnerabilities and attack surfaces. By maintaining strong security monitoring, organizations can detect and mitigate potential threats early, reducing the risk of data breaches and other security incidents.</p>
                          <ul>
                          <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={ArrowOne} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Ongoing Monitoring</h5>
                                <p>Perform ongoing monitoring of the data access and usage of AI to prevent data leakage and non-compliant activities.</p>
                              </div>

                            </li>
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={BenefitsOne} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Centralized Device Management</h5>
                                <p>
                                In more than 90% of cases where attacks progressed to ransom stage, the attacker had leveraged unmanaged devices in the network. Ensure only compliant and corporate-managed devices can access your resources. This also improves the end user experience.
                                 </p>
                              </div>

                            </li>
                           
                          </ul>
                        </div>
                        

                       </div>
                       <div className="Recommended-Solutions-main-frame">
                           <h3>Recommended Solutions</h3>
                           <div className="Recommended-Solutions-main-frame-middle">
                                <div className="Recommended-Solutions-main-frame-middle-left">
                                  <h5>Microsoft Intune</h5>
                                  <p>This helps in managing everything centrally so that policies keep the devices secure, minimizing the risk of vulnerabilities. It also allows for remote management, updating of policies, standardization, and compliance, across a distributed ecosystem.</p>
                                </div>
                                <div className="Recommended-Solutions-main-frame-middle-right">
                                  <h5>Microsoft Sentinel</h5>
                                  <p>This is real-time threat detection providing deep visibility into AI systems. Sentinel will neatly integrate with existing infrastructure, offering enriching analytics and reporting.</p>
                                  
                                </div>
                           </div>
                       </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    PHASE 3
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame">
                       <h3>Governance and Compliance</h3>
                       <div className="phase-main-middle-frame-middle">
                        <div className="phase-main-middle-frame-middle-left">
                          <h4>Frameworks and Data Security</h4>
                          <p>The Zero Trust model forms a crucial foundation for the use of AI in the corporate context. In an era where data is both a valuable resource and a potential security risk, Zero Trust’s “never trust, always verify” philosophy guarantees the security and integrity of data. This minimizes the risk of unauthorized access and data breaches. It is essential to store, manage and categorise your data effectively and prevent unintended access to sensitive information. This includes revoking outdated permissions, identifying and protecting sensitive data, and monitoring for anomalies and potential risks.</p>
                          <ul>
                           
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={BenefitsThree} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Data Governance</h5>
                                <p>
                                Classify and protect data with the help of solutions like Microsoft Purview, which make this entire operation compliant.
                                 </p>
                              </div>

                            </li>
                          
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={BenefitsFive} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Data Optimization</h5>
                                <p>
                                Revise access rights to data, classify data according to sensitivity, and eliminate permissions on data that are no longer current.
                                </p>
                              </div>

                            </li>
                          </ul>
                        </div>
                        <div className="phase-main-middle-frame-middle-right">
                        <Image src={BenefitsTwo} alt="" />
                        </div>

                       </div>
                       <div className="Recommended-Solutions-main-frame">
                           <h3>Recommended Solutions</h3>
                           <div className="Recommended-Solutions-main-frame-middle">
                                <div className="Recommended-Solutions-main-frame-middle-left">
                                  <h5>Data Optimization</h5>
                                  <p>More than 80% of business executives believe data leakage is among the biggest threats. Powered by advanced AI, Data Optimization is the next generation of information lifecycle management allowing you to have complete control from creation to archive through a central interface. Successfully govern by deleting or retaining ROT data (Redundant, Obsolete and Trivial) before introducing AI into your environment.</p>
                                </div>
                                <div className="Recommended-Solutions-main-frame-middle-right">
                                  <h5>Microsoft Purview</h5>
                                  <p>This tool offers end-to-end governance by automating data labelling and classification across systems. It helps organizations stay compliant with evolving regulations while managing sensitive data efficiently.</p>
                                
                                </div>
                           </div>
                       </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
              </div>
            </section>

            <section className="Ignite-Cybersecurity-frame">
              <div className="Ignite-Cybersecurity-frame-img">
                <Image src={BenefitsSix} alt="" />
              </div>
              <div className="container">
                <div className="Ignite-Cybersecurity-frame-cont">
                <div className="Building-an-AI-Ready-Culture">  
                  <h3 class="ho-heading">
                  Building an AI-Ready Culture
                </h3>
           <p>McKinsey has produced a report for 2024 revealing that 78% of employees are deploying AI applications intelligently to improve performance despite no official culture supporting it. Organisations that return to structured Artificial Intelligence training and development increase tool use by 63% translating to a 42% increase in productivity. AI parity entails practising acts of skill in maintaining conducive conditions for AI whereby 67% of the firms attributed improved cross-functional collaboration as one of the impacts of AI.</p>
           <p>Businesses that go through a systematic approach in AI application gain 35% improvement in implementation and 40% fewer problems in compliance. AI preparedness investments in the early stages contribute to operation cost savings of up to 20% along with business responsiveness of up to 25% more, thus leading to a sustainable competitive advantage.</p>
   </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
       
      </main>
    </>
  );
};

export default Posts;
