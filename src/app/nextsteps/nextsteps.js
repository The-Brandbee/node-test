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
import About from "../img/r-banner.png";
import Inconone from "../img/nextsteps-con-1.png";
import InconTwo from "../img/nextsteps-con-2.png";  
import InconThree from "../img/nextsteps-con-3.png";
import InconFour from "../img/nextsteps-con-4.png";
import InconFive from "../img/nextsteps-con-5.png";
import InconSIx from "../img/nextsteps-con-6.png";
import InconSeven from "../img/nextsteps-con-7.png";
import InconEight from "../img/nextsteps-con-8.png";
import BenefitsSixx from "../img/insentra.png";



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
      <main className="security-uplifts-page-main ai-readiness nextsteps-frame">
      
          <div>
            <header>
              <Header />
              <div className="Inner-page-banner-frame">
                <Image src={About} alt="" />
              </div>
              <div className="container Strengthen-cont-main">
                <div className="Strengthen-Your-Cyber-Defenses mdr-page ai-readiness">
                <h4>EXCLUSIVE 4-WEEK GENERATIVE AI SPRINT AGENDA</h4>
                <div className="BenefitsSixx-main">  
                <p><a target="_blank" href="https://buy.stripe.com/00g3dBbSGbSY7y8aEF">Buy Now</a></p>
                <Image src={BenefitsSixx} alt="" />
                </div>
               
                </div>
                <div className="Strengthen-Your-Cyber-Defenses mdr-page ai-readiness right">
                <video controls>
                  <source
                    src={
                      "https://blog.csp.global/wp-content/uploads/2024/11/Webinar-Landing-Page.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
                </div>
              </div>
            </header>
          
            <section className="Detection-Response-page">
              <div className="container">
                <div className="Detection-Response-page-middle">
                  <div className="Detection-Response-page-middle-left">
                    <p>Buy now to guarantee your team a place in our December sprint</p>
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
                    WEEK 1
                    <span>FULL IMMERSION - TEACHING, ENABLEMENT & SHOW-AND-TELL</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="inner-page-mhg">
                       <h4>Objective:</h4>
                       <p>Provide a foundational understanding of generative AI tools, especially Microsoft Copilot, ChatGPT, and Custom GPTs, and how they can be leveraged for productivity.</p>
                       <h4>Agenda:</h4>
                       <h5>Introduction & Objectives</h5>
                       <ul>
                        <li>Overview of the sprint, focusing on how Microsoft Copilot, ChatGPT, and Custom GPTs can enhance productivity and client value</li>
                       </ul>
                       <h5>Overview of Generative AI Tools</h5>
                       <ul>
                        <li>Introduction to key tools: Microsoft Copilot, ChatGPT, Custom GPTs, and Anthropic Claude</li>
                        <li>Discuss practical applications of tools like DALL-E, Veed.io, and Synthesia</li>
                       </ul>
                       <h5>Hands-on Demonstration</h5>
                       <ul>
                        <li>Show-and-tell: Practical use cases, emphasising Microsoft Copilot for document creation, task automation, and meeting preparation</li>
                        <li>Demonstration of stored prompts for repeatable outcomes, including handling data, financial reports, meeting management, and using generative ai tools to drive business results.</li>
                        <li>Introduction to Custom GPTs and agents tailored for specific roles</li>
                       </ul>
                       <h5>Q&A and Discussion</h5>
                       <ul>
                        <li>Interactive session focused on how Copilot, ChatGPT, and Custom GPTs can integrate into participants' workflows</li>
                        <li>Set expectations for the week ahead</li>
                       </ul>
                      
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    WEEK 2
                    <span>Q&A - FOCUSED ON COPILOT, CHATGPT, AND CUSTOM GPTS</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="inner-page-mhg">
                       
                       <p><a target="_blank" href="https://buy.stripe.com/00g3dBbSGbSY7y8aEF">Buy Now</a></p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    WEEK 3
                    <span>NEXT LEVEL OF DETAIL - DEEP DIVE & ADVANCED USE CASES</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="inner-page-mhg">
                      
                       <p><a target="_blank" href="https://buy.stripe.com/00g3dBbSGbSY7y8aEF">Buy Now</a></p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'D'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    WEEK 4
                    <span>Q&A AND FINAL GUIDANCE - FOCUS ON COPILOT, CHATGPT, CUSTOM GPTS & GENERATIVE AI</span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="inner-page-mhg">
                      
                       <p><a target="_blank" href="https://buy.stripe.com/00g3dBbSGbSY7y8aEF">Buy Now</a></p> 
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
              </div>
            </section>
            <section className="Detection-Response-page">
              <div className="container">
                <div className="Detection-Response-page-middle">
                  <div className="Detection-Response-page-middle-left">
                    <p>Click below to get your free Zero Trust report. You can also purchase a 3 hour workshop where we help you develop your own custom roadmap based on the reports findings.</p>
                  </div>
                 
                </div>
              </div>
            </section>
            <section className="Key-benefits-workshop">
              
              <div className="container">
                 <div className="Key-benefits-workshop-middle">
                    <h3>Key benefits of our Zero Trust report</h3>
                    <ul>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                       
                          <Image src={Inconone} alt="" />
                          <p><span>Create</span> a detailed, customized zero trust roadmap that is relevant to your organization</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconTwo} alt="" />
                          <p><span>Measure</span> progress and impact of your ZT journey</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconThree} alt="" />
                          <p><span>Highlight</span> cross-product integrations that are both valuable and may not always be considered by siloed teams</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconFour} alt="" />
                          <p><span>Utilize</span> fully the Microsoft Security features/products you own</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconFive} alt="" />
                          <p><span>Improve</span> your end-to-end security posture</p>
                        </div> 
                      </li>
                    </ul>
                 </div>
                 <div className="Key-benefits-workshop-middle bottom">
                    <h3>Who should attend our Zero Trust workshop</h3>
                    <ul>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconSIx} alt="" />
                          <p><span>Zero Trust Lead</span> Leads the zero trust strategy and implementation across the organization</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconSeven} alt="" />
                          <p><span>Enterprise Architects</span> Drive the design and architecture of end-to-end solutions, ensuring security integration</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconEight} alt="" />
                          <p><span>Pillar Architects, Leads, and Experts</span> Ensure specific business or technical pillars are aligned with the zero trust strategy</p>
                        </div> 
                      </li>
                      <li>
                        <div className="Key-benefits-workshop-middle-cr">
                        <Image src={InconFive} alt="" />
                          <p><span>Cybersecurity Team Members</span> Responsible for implementing and managing security measures</p>
                        </div> 
                      </li>
                     
                    </ul>
                 </div>

                 <div className="Key-benefits-workshop-middle bottom">
                    <p><a href="https://outlook.office365.com/book/AIInnovationSecurity@csp.global/">Free Report</a></p>
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
