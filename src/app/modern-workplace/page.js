"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Rain } from "react-rainfall";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import TestimonialSlide from "../common/TestimonialSlide.js";
import BrennanExperienceTab from "../common/BrennanExperienceTab.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Contact from "../common/Contact";
import Cybersecurity from "../img/enablement-banner-3.jpg";
import CybersecurityMobile from "../img/enablement-banner-3.jpg";
import CybersecurityT from "../img/Adoption.png";
import culm from "../img/Callum-new.png";
import Securityone from "../img/Microsoft-icon-1.png";
import Securitytwo from "../img/Microsoft-icon-2.png";
import Securitythree from "../img/Microsoft-icon-3.png";
import Securityfour from "../img/Microsoft-icon-4.png";
import Securityfive from "../img/Microsoft-icon-5.png";
import Securitysix from "../img/Microsoft-icon-6.png";
import Securityseven from "../img/Microsoft-icon-7.png";
import Securityeight from "../img/Microsoft-icon-8.png";
import EmpoweringRight from "../img/Organizations.png";
import Main from "../img/logo.png";
import People from "../img/people.jpg";
import EmpoweringRightMail from "../img/CSP-WEBSITE-ILLUSTRATION.jpg";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Frameworkbanner from "../img/modern-workplace-banner.jpg";
import Slidemdrenablement from "../common/SlidemdrThree.js";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'; 

export default function Home() {
  const [dataNew, setDataNew] = useState("");
  // Call the API and log the data to the console
  const fetchData = async () => {
    const response = await fetch("https://cms.csplighthouse.com/api/overview");
    const data = await response.json();
    setDataNew(data[0]);
    console.log(data[0]);
    console.log(data[0].bannerheading);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="modern-workplace-main-page">
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="cybersecurityframework-main-page enablement-main-page-list">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={Frameworkbanner} alt="" />
          </div>
          <div className="container">
            <div className="about-bannner-contact Modern-SOC-main">
              <h3>Modern Workplace</h3>
            </div>
          </div>
        </header>

       <section className="Modern-Workplace-top-frame-main">
         <ul>
            <Link href="#">Overview</Link>
            <Link href="#">Brennan Experience</Link>
           <Link href="#">Customer Success Stories</Link>
           <Link href="#">Other Solutions</Link>
         </ul>   
       </section>
       <div className="container">

       <div className="ct-section-inner-wrap">
  <div
    id="div_block-502-167"
    className="ct-div-block aos-init aos-animate"
    data-aos="fade-up"
  >
    <h2
      id="headline-504-167"
      className="ct-headline sec-h2 sol-main-sec-title aos-init aos-animate"
      data-aos-enable="true"
      data-aos="fade-up"
    >
      Engaged. Efficient. Empowered. <br />
    </h2>
    <div id="_rich_text-506-167" className="oxy-rich-text sol-main-sec-copy">
      <p>
        Technology has always been inseparable from industriousness. But the
        modern workplace isn't solely about technology as a tool. It's about
        technology as a goal, and how users experience, adopt, and adapt it to
        meet your organisation's objectives.
      </p>
      <p>
        At Brennan, we give you the time, tools and skills that enable you to
        collaborate, innovate, and drive long-term success across the board -
        inside your organisation, with other key stakeholders, and for your
        customers.
      </p>
    </div>
  </div>
  <div
    id="div_block-508-167"
    className="ct-div-block aos-init aos-animate"
    data-aos="fade-up"
  >
    <div
      id="div_block-509-167"
      className="ct-div-block curve-box curve-box-90 solcurve-box-0"
    >
      <div id="text_block-510-167" className="ct-text-block">
        Support hybrid working&nbsp;
      </div>
    </div>
    <div
      id="div_block-511-167"
      className="ct-div-block curve-box curve-box-90 solcurvebg-1"
    >
      <div id="text_block-512-167" className="ct-text-block">
        Enhance employee
        <br />
        engagement &amp; efficiency
      </div>
    </div>
    <div
      id="div_block-513-167"
      className="ct-div-block curve-box curve-box-90 solcurvebg-2"
    >
      <div id="text_block-514-167" className="ct-text-block">
        Improve internal &amp; external collaboration <br />
      </div>
    </div>
    <div
      id="div_block-517-167"
      className="ct-div-block curve-box curve-box-120 curve-box-90 solcurvebg-4"
    >
      <div id="text_block-518-167" className="ct-text-block">
        Reduce operational costs
      </div>
    </div>
    <div
      id="div_block-929-180"
      className="ct-div-block curve-box curve-box-120 curve-box-90 solcurvebg-5"
    >
      <div id="text_block-930-180" className="ct-text-block">
        Simplify IT support
      </div>
    </div>
  </div>
</div>
</div>      



<section id="section-528-167" className="ct-section">
    <div className="container">
  <div className="ct-section-inner-wrap">
    <div
      id="div_block-529-167"
      className="ct-div-block director-steven aos-init aos-animate"
      data-aos="fade-up"
    >
      <div id="div_block-530-167" className="ct-div-block">
        
        <Image id="image-531-167" src={culm} alt="" className="ct-image"/>
        <div id="div_block-532-167" className="ct-div-block">
          <div id="text_block-533-167" className="ct-text-block">
            Callum Golding
          </div>
          <div id="text_block-534-167" className="ct-text-block body-ls">
            Founder & CEO
          </div>
        </div>
      </div>
      <div id="div_block-535-167" className="ct-div-block">
        <div id="_rich_text-536-167" className="oxy-rich-text the-quote">
          <p>
            As true in today's digital era as it was in the Bronze Age, it's not
            just about having the right tools that make a tangible impact, but
            how they're used. With our integrated approach to the modern
            workplace, we help companies create unified, efficient, and
            empowering environments, making it easier for people to focus on
            what's always mattered most: collaboration, innovation, and
            success.”
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<section className="Brennan-Experience-main-frame">
    <div className="container">
        <div className="Brennan-Experience-main-frame-middle">
            <div className="Brennan-Experience-main-frame-middle-left">
                <p>Brennan Experience</p>
                <h4>Modern tools,<br/> operational<br/> excellence</h4>
            </div>
             <div className="Brennan-Experience-main-frame-middle-right">
                  <BrennanExperienceTab/>
             </div>
        </div>
    </div>
</section>


<section id="section-946-180" className=" ct-section">
  <div className="ct-section-inner-wrap">
    <div id="new_columns-947-180" className="ct-new-columns">
      <div
        id="div_block-2428-213"
        className="ct-div-block aos-init aos-animate"
        data-aos="fade"
      />
      <div id="div_block-949-180" className="ct-div-block">
        <div id="div_block-950-180" className="ct-div-block right-box-content">
          <h3 id="headline-951-180" className="ct-headline sec-h-32">
            Making work 'work'
          </h3>
          <div id="_rich_text-952-180" className="oxy-rich-text body-text">
            <p>
              Whether it’s extending investment value, empowering collaboration,
              consolidating legacy infrastructure, applications and technology
              sprawl, reducing internal and external support via a simplified
              infrastructure and business application portfolio, or enhancing
              the employee experience for remote, office and hybrid profiles,
              our Modern Workplace solutions are laser-focussed on making work
              ‘work’.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="new_columns-965-180" className="ct-new-columns">
      <div id="div_block-966-180" className="ct-div-block">
        <div id="div_block-967-180" className="ct-div-block left-box-content">
          <h3 id="headline-968-180" className="ct-headline sec-h-32">
            Digital transformation, brilliantly deployed
          </h3>
          <div id="_rich_text-969-180" className="oxy-rich-text body-text">
            <p>
              Through modern business applications, familiar Microsoft platforms
              and a simplified employee technology experience, we ensure
              employees have access to the latest collaboration and productivity
              tools; employers benefit from robust security features; and
              everyone benefits from digital transformation – wherever and
              however they work.
            </p>
          </div>
        </div>
      </div>
      <div
        id="div_block-970-180"
        className="ct-div-block aos-init aos-animate"
        data-aos="fade"
      />
    </div>
  </div>
</section>

<section id="section-541-167" className=" ct-section">
    <div className="container">
  <div className="ct-section-inner-wrap">
    <div
      id="div_block-542-167"
      className="ct-div-block aos-init aos-animate"
      data-aos="fade"
    >
      <div id="div_block-543-167" className="ct-div-block">
        <div id="text_block-544-167" className="ct-text-block">
          Get in touch. Tell us what you need help with, and we’ll send the
          right expert your way.
        </div>
      </div>
      <a
        id="link_button-546-167"
        className="ct-link-button btn btn-ol-black"
        href="https://csp.global/contact"
      >
        Contact us
        <br />
      </a>
    </div>
  </div>
  </div>        
</section>



<section id="other-solutions" className=" ct-section">
    <div className="container">
  <div className="ct-section-inner-wrap">
    <h2
      id="headline-2302-213"
      className="ct-headline sec-h2 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-enable="true"
    >
      Explore our solutions
    </h2>
    <div
      id="div_block-2303-213"
      className="ct-div-block explore-solution-wrap aos-init aos-animate"
      data-aos="fade-up"
    >
      <div
        id="div_block-2304-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2305-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2306-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/networking.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 40px) 100vw, 40px"
          />
        </div>
        <div id="text_block-2307-213" className="ct-text-block exsol-title">
          Advanced Networking
        </div>
        <div id="text_block-2308-213" className="ct-text-block exsol-copy">
          From business-grade internet to next-gen data security, unified
          connectivity expertise starts here.
        </div>
       
      </div>
      <div
        id="div_block-2310-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2311-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2312-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/cloud.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 47px) 100vw, 47px"
          />
        </div>
        <div id="text_block-2313-213" className="ct-text-block exsol-title">
          Cloud &amp; Infrastructure
        </div>
        <div id="text_block-2314-213" className="ct-text-block exsol-copy">
          Engineer a future-proofed cloud strategy, without compromising on
          performance or security.
        </div>
       
      </div>
      <div
        id="div_block-2316-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2317-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2318-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/cybersecurity.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 55px) 100vw, 55px"
          />
        </div>
        <div id="text_block-2319-213" className="ct-text-block exsol-title">
          Cybersecurity
        </div>
        <div id="text_block-2320-213" className="ct-text-block exsol-copy">
          Protection that is as continuous, comprehensive and uncompromising as
          the risks you face.
        </div>
        
      </div>
      <div
        id="div_block-2322-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2323-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2324-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/data-ai.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 32px) 100vw, 32px"
          />
        </div>
        <div id="text_block-2325-213" className="ct-text-block exsol-title">
          Data and AI
        </div>
        <div id="text_block-2326-213" className="ct-text-block exsol-copy">
          Innovate, grow and gain market advantage by unlocking the true value
          of your data.
        </div>
      
      </div>
      <div
        id="div_block-2328-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2329-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2330-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/hardware.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 36px) 100vw, 36px"
          />
        </div>
        <div id="text_block-2331-213" className="ct-text-block exsol-title">
          Hardware &amp; Software
        </div>
        <div id="text_block-2332-213" className="ct-text-block exsol-copy">
          Cost-effective and customer-first solutions grounded in expert advice.
        </div>
        
      </div>
      <div
        id="div_block-2334-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2335-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2336-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/mdynamics-icon.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 34px) 100vw, 34px"
          />
        </div>
        <div id="text_block-2337-213" className="ct-text-block exsol-title">
          Microsoft Dynamics
        </div>
        <div id="text_block-2338-213" className="ct-text-block exsol-copy">
          Harness the full potential of the Microsoft toolset and master true
          productivity.
        </div>
       
      </div>
      <div
        id="div_block-2346-213"
        className="ct-div-block explore-solution-box"
      >
        <div
          id="div_block-2347-213"
          className="ct-div-block explore-solution-icon"
        >
          <img
            id="image-2348-213"
            alt=""
            src="https://www.brennanit.com.au/wp-content/uploads/2024/12/helpdesk.svg"
            className="ct-image exsol-icon"
            srcSet=""
            sizes="(max-width: 42px) 100vw, 42px"
          />
        </div>
        <div id="text_block-2349-213" className="ct-text-block exsol-title">
          Service Desk
        </div>
        <div id="text_block-2350-213" className="ct-text-block exsol-copy">
          Continuously improving, highly systemised, world-leading customer
          support.
        </div>
     
      </div>
    </div>
  </div>
    </div>
</section>

<section className="">
     
</section>

<section
  className="contact-us-middle-main"
  style={{ paddingTop: 0 }}
>
          <div className="container">
            <div className="contact-us-middle-main-m">
              <div className="contact-us-middle-main-m-right">
                <div className="contact-us-middle-main-m-right-middle">
                  <Contact />
                </div>
              </div>
              <div className="contact-us-middle-main-m-left new-cont">
                <h3 dangerouslySetInnerHTML={{ __html: dataNew.mainheading }} />
                <div className="Discover-contact-us-page">
                  <h3>Boost your
business efficiency</h3>
            <p>Partner with us for reliable IT support. Contact us now and find out how we can streamline your IT needs!

</p>
                </div>
             
               
              </div>
            </div>
          </div>
        </section>



        <Footer />
      </main>
    </div> 
  );
}
