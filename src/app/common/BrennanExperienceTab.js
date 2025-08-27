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
import ArrowOneNew from "../img/ainew.jpg";
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
     
            <Accordion>
            <AccordionItem uuid={'a'} >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Experience the CSP approach 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="phase-main-middle-frame-cont">
                     <p>Our Copilot Quick Start offers a pre-priced and pre-scoped solution that includes an environment readiness and enablement assessment to address areas of concern, including identifying and protecting your organisation’s sensitive information, where it’s housed, and how it moves in your organisation; reducing your risk and exposure to amassed and/or accumulated data; and protecting your brand from data breaches. 

</p>
<p>And our Purview DLP Quick Start prepares you for the next phase of an Information Governance exercise or Copilot rollout, including whole-of-business data classification, sensitivity labelling and data lifecycle management. 


</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'b'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                   Copilot Readiness Program 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="phase-main-middle-frame-cont">
                     <p>Our approach to Microsoft 365 migrations is to take a holistic view of how your organisation can best leverage the broader set of functionalities offered by Microsoft – such as OneDrive, Microsoft Teams, and SharePoint Online.


</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid={'c'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                  Microsoft Lists and Loop adoption

                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <div className="phase-main-middle-frame-cont">
                   <p>With capabilities that extend far beyond functioning as a simple file repository, unlocking the real potency of SharePoint hinges on knowing how to design, govern, and support your environment. Be it on-premise or in the Cloud, we can help you identify the best SharePoint deployment model for your business, and design ongoing support plans. 
</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
             <AccordionItem uuid={'D'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                 Copilot Studio with Agents 


                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <div className="phase-main-middle-frame-cont">
                   <p>Offering an up-to-date and ‘out-of-the-box’ intranet that’s quick to deploy, easy to adopt, and full of flexible functionality, our SharePoint Intranet QuickStart offers an easy on-ramp to SharePoint, minus the overheads and workload. 
</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
               <AccordionItem uuid={'E'}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                 SharePoint Intranet and Data Security 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <div className="phase-main-middle-frame-cont">
                   <p>To help you transition from a paper-based to paperless environment, our advisory expertise can define comprehensive digital form and workflow roadmaps. We also specialise in creating organisation-wide Forms Centres that combine all the technologies you use to ensure a streamlined employee experience. 

                   </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
             <AccordionItem uuid={'F'}>     
                <AccordionItemHeading>
                    <AccordionItemButton>
                Change Advisory Board approval processes 
</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                 <div className="phase-main-middle-frame-cont">
                   <p>While organisational familiarity with Microsoft 365 services runs wide, understanding it’s full functionality to maximise its value needs to run deep, too. That’s why we offer a range of change management and user adoption solutions to help with your cloud adoption journey, ensuring your teams get the most out of your Microsoft Modern Workplace solutions. 

                   </p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
           
    </>
  );
};

export default Posts;
