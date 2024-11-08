"use client";
import React from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";


// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { GoogleTagManager } from "@next/third-parties/google";
export default function Home() {
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
                <div className="Strengthen-Your-Cyber-Defenses mdr-page ai-readiness">
                <h4>AI READINESS</h4>
                <p>Preparing Your Business for AI Adoption</p>
                </div>
              </div>
            </header>
          
           
            <Footer />
          </div>
       
      </main>
    </> 
  );
}
