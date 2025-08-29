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
            <AccordionItem  >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Experience the CSP approach 
                    </AccordionItemButton>
                </AccordionItemHeading>
            
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                   Copilot Readiness Program 
                    </AccordionItemButton>
                </AccordionItemHeading>
           
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                  Microsoft Lists and Loop adoption

                    </AccordionItemButton>
                </AccordionItemHeading>
             
            </AccordionItem>
             <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                 Copilot Studio with Agents 


                    </AccordionItemButton>
                </AccordionItemHeading>
               
            </AccordionItem>
               <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                 SharePoint Intranet and Data Security 
                    </AccordionItemButton>
                </AccordionItemHeading>
             
            </AccordionItem>
             <AccordionItem >     
                <AccordionItemHeading>
                    <AccordionItemButton>
                Change Advisory Board approval processes 
</AccordionItemButton>
                </AccordionItemHeading>
             
            </AccordionItem>
        </Accordion>
           
    </>
  );
};

export default Posts;
