"use client";
import React from "react";
import ArrowOne from "../img/phase-one-icon-1.png";
import Arrowtwo from "../img/business-person-futuristic-business-environment.jpg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import Slidemdr from "../common/Slidemdr.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Leveraging from "../img/Path-icon.png";
import BenefitsOne from "../img/data-management.png";  
import BenefitsTwo from "../img/business-person.png";
import BenefitsThree from "../img/Path-37.png";
import BenefitsFour from "../img/futuristic-computer.png";
import BenefitsFive from "../img/Web_Optimizatio.png";
import BenefitsSix from "../img/Ai-ready.jpg";
import CountTwo from "../Count/CountFive.js";
import CountThree from "../Count/countFour.js";
import Script from "next/script";


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
                      "http://blog.csp.global/wp-content/uploads/2024/11/CSP-AI-Banner-Video-2.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="container Strengthen-cont-main">
                <div className="Strengthen-Your-Cyber-Defenses mdr-page">
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
                          <h4>Risk Identification and Mitigation</h4>
                          <p>AI introduces several security vulnerabilities, such as leakage and compliance risks. It is very crucial to have an AI Readiness security roadmap before moving ahead with implementation. According to expert professionals, ignoring the assessment of AI risk may lead to unexpected reversals in operations, along with huge losses in terms of money or data. Early detection of a threat ensures seamless integration and stability for the long term.</p>
                          <ul>
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
                          </ul>
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
                                  <p>Engage expert companies, such as CSP Global and our trusted channel partners, to get the most out of your technology investments and have SLA support around the clock.</p>
                                </div>
                                <div className="Recommended-Solutions-main-frame-middle-right">
                                  <h5>AI Adoption</h5>
                                  <p>Once you are clear about data security and have a roadmap in place, you will be ready to take AI to the next level. Our channel partner delivers a free introductory session, and a four-week intensive sprint geared specifically for your business and your industry with resources.</p>
                                  <p><a href="#">Watch the video</a></p>
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
                       <h3>Infrastructure and Data Preparation</h3>
                       <div className="phase-main-middle-frame-middle">
                       <div className="phase-main-middle-frame-middle-right">
                        <Image src={BenefitsFour} alt="" />
                        </div>
                        <div className="phase-main-middle-frame-middle-left">
                          <h4>Establishing a Firm Foundation</h4>
                          <p>AI needs an upgraded infrastructure. Making sure that all hardware, software, and networking elements are fine-tuned will help reduce potential bottlenecks. Many enterprises simply avoid upgrading their infrastructure, which causes various inefficiencies in performance once AI is deployed. Scalable infrastructure offers the promise that companies will have seamless AI operations across all departments.</p>
                          <ul>
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
                            <li>
                              <div className="phase-main-middle-frame-middle-left-img">
                                <div className="phase-main-middle-frame-middle-left-img-two">
                                <Image src={BenefitsOne} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Centralized Device Management</h5>
                                <p>
                                Centrally manage and monitor devices, IoT, and mobile using Microsoft Intune.
                                 </p>
                              </div>

                            </li>
                           
                          </ul>
                        </div>
                        

                       </div>
                       <div className="Recommended-Solutions-main-frame">
                           <h3>Tools to Consider</h3>
                           <div className="Recommended-Solutions-main-frame-middle">
                                <div className="Recommended-Solutions-main-frame-middle-left">
                                  <h5>Intune by Microsoft</h5>
                                  <p>This helps in managing everything centrally so that policies keep the devices secure, minimizing the risk of vulnerabilities. It also allows for remote management and updating of policies across a distributed environment.</p>
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
                          <h4>Ensure Secure AI Operations</h4>
                          <p>Industry regulations aim to ensure that one doesn't get fined, while on the other hand, they help rebuild trust. Given that 73% of businesses remain worried about the risks AI poses to cybersecurity, one needs to have a solid governance structure. Being out of compliance could mean one risks very heavy fines and reputational damage, and continuous checks will be important. Strong governance engenders consumer confidence in how an organization applies AI.</p>
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
                                <Image src={ArrowOne} alt="" />
                                </div>
                              </div>
                              <div className="phase-main-middle-frame-middle-left-img-right">
                                <h5>Ongoing Monitoring</h5>
                                <p>Perform ongoing monitoring of the data access and usage of AI to prevent data leakage and non-compliant activities.</p>
                              </div>

                            </li>
                          </ul>
                        </div>
                        <div className="phase-main-middle-frame-middle-right">
                        <Image src={BenefitsTwo} alt="" />
                        </div>

                       </div>
                       <div className="Recommended-Solutions-main-frame">
                           <h3>Compliance Tools</h3>
                           <div className="Recommended-Solutions-main-frame-middle">
                                <div className="Recommended-Solutions-main-frame-middle-left">
                                  <h5>Copilot for Microsoft 365</h5>
                                  <p>This tool offers end-to-end governance by automating data labelling and classification across systems. It helps organizations stay compliant with evolving regulations while managing sensitive data efficiently.</p>
                                  <p><b>Additional Benefits:</b> Copilot inherits all existing labels and protections applied to files, ensuring AI-generated content maintains the same security protocols. It also supports real-time monitoring of data usage, helping organizations prevent unauthorized access and comply with data regulations.</p>
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