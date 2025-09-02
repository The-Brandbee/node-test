"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Rain } from "react-rainfall";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import TestimonialSlide from "../common/TestimonialSlide.js";
import EmpoweringOrganizations from "../common/EmpoweringOrganizations.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Cybersecurity from "../img/enablement-banner-3.jpg";
import CybersecurityMobile from "../img/enablement-banner-3.jpg";
import CybersecurityT from "../img/Adoption.png";
import CybersecurityMobileT from "../img/Adoption.png";
import Securityone from "../img/Microsoft-icon-1.png";
import Securitytwo from "../img/Microsoft-icon-2.png";
import Securitythree from "../img/Microsoft-icon-3.png";
import Securityfour from "../img/Microsoft-icon-4.png";
import Securityfive from "../img/Microsoft-icon-5.png";
import Securitysix from "../img/Microsoft-icon-6.png";
import Securityseven from "../img/Microsoft-icon-7.png";
import StreamlinedIcon from "../img/StreamlinedIcon.png";
import EmpoweringRight from "../img/Organizations.png";
import Main from "../img/logo.png";
import People from "../img/people.jpg";
import EmpoweringRightMail from "../img/CSP-WEBSITE-ILLUSTRATION.jpg";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Frameworkbanner from "../img/enablement-banner.jpg";
import Slidemdrenablement from "../common/SlidemdrThree.js";

export default function Home() {
  const [dataNew, setDataNew] = useState("");
  // Call the API and log the data to the console
  const fetchData = async () => {
    const response = await fetch("");
    const data = await response.json();
    setDataNew(data[0]);
    console.log(data[0]);
    console.log(data[0].bannerheading);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="portal-main-page-home">
        <header>
          <Header />
         
        
        </header>

        <section className="self-service-portal-main-section">
             <div className="container">
                 <div className="self-service-portal-main-section-middle">
                      <div className="self-service-portal-main-section-left">
                        <h4>Experience our Microsoft Teams integrated Service Desk</h4>
<ul>
                    <li>
                        <div className="Developed-left">
                            <Image src={StreamlinedIcon} alt="" className="" />
                        </div>
                      <div className="Developed-right">
                          <h6> Ease of Access</h6>
                          <p>More convenient than traditional phone and email methods.</p>
                      </div>
                     
                    </li>
                      <li>
                        <div className="Developed-left">
                            <Image src={StreamlinedIcon} alt="" className="" />
                        </div>
                      <div className="Developed-right">
                          <h6>Quick Connection</h6>
                          <p>Faster access to real people for immediate assistance.</p>
                      </div>
                     
                    </li>
                     <li>
                        <div className="Developed-left">
                            <Image src={StreamlinedIcon} alt="" className="" />
                        </div>
                      <div className="Developed-right">
                          <h6>Workplace Integration</h6>
                          <p>More convenient than traditional phone and email methods</p>
                      </div>
                     
                    </li>
                     <li>
                        <div className="Developed-left">
                            <Image src={StreamlinedIcon} alt="" className="" />
                        </div>
                      <div className="Developed-right">
                          <h6>Efficient Problem Resolution</h6>
                          <p>Solve issues and monitor progress in real-time.</p>
                      </div>
                     
                    </li>   
                     <li>
                        <div className="Developed-left">
                            <Image src={StreamlinedIcon} alt="" className="" />
                        </div>
                      <div className="Developed-right">
                          <h6>Uninterrupted Productivity</h6>
                          <p>Address support needs without the disruption of prolonged phone calls.</p>
                      </div>
                     
                    </li>
                  
                   
                    </ul>
                      </div>
                      <div className="self-service-portal-main-section-right">
                         <h3>Our world-class <br/>self-service portal</h3>
                         <p>We believe our executive portal is second to none and we continually invest in innovations and reports that give our customers unparalleled insights into their ecosystem with real-time reporting and services. Clients can view status and performance data, review assets, and track changes. Through the portal customers also benefit from:</p>
                         <ul>
                            <li>Transparency of active and closed tickets </li> 
                             <li>Full and live asset library</li>
                             
                               <li>Service Level Agreement performance </li>
                                <li>Site-to-site network visibility</li>

                         </ul>
                         <div className="LOGIN-TO-PORTAL-link">
                             <Link target="_blank" href="https://csplighthouse.halopsa.com/portal">LOGIN TO PORTAL</Link> 
                         </div>    
                      </div> 
                 </div>
             </div>
        </section>

        <section className="Teams-integrated-heading">
              <div className="container">
                   <div className="Teams-integrated-heading-k">
                       <h3>Teams-integrated Help Desk App</h3>
                   </div>
              </div>
              <div className="Teams-integrated-heading-video">
                  <div className="container">
                      <div className="Teams-integrated-heading-video-link">
                           <iframe  src="https://www.youtube.com/embed/qMfK32WKE1Q?si=6LHYQzEXXzEeTSL9" title="YouTube video player" frameborder="0"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                  </div>
              </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
