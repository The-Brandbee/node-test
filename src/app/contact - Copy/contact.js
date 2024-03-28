"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../img/contact.jpg";
import Mapnew from "../img/mapnew.png";
import Phone from "../img/phone.png";
import Mi from "../img/Microsoft-Gold-Partner-Wizard-Cyber-small.png.png";
import Email from "../img/email.png";
import Contact from "../common/Contact";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function contact() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="About-us-page">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={About} alt="" />
          </div>
          <div className="about-bannner-contact Contact-Us">
            <div className="container">
              <h3>Contact Us</h3>
            </div>
          </div>
        </header>
        <section className="contact-us-middle-main">
          <div className="container">
            <div className="contact-us-middle-main-m">
              <div className="mi-image-last-cont mobile-contact">
                <Image src={Mi} alt="" />
              </div>
              <div className="contact-us-middle-main-m-right">
                <div className="contact-us-middle-main-m-right-middle">
                  <p>
                    You can also fill out the form below to send us a message.
                    Please provide as much detail as possible about your cyber
                    security needs and goals. We will review your message and
                    contact you with the best solution for your situation.
                  </p>

                  <Contact />
                </div>
              </div>
              <div className="contact-us-middle-main-m-left">
                <div className="contact-us-middle-main-m-left-con dektop-contact">
                  <Image className="dektop-contactimg" src={Mapnew} alt="" />
                  <p>
                    Westpac House, 91 King William Street, Adelaide, Australia
                    (HQ)
                  </p>
                </div>
                <div className="contact-us-middle-main-m-left-con">
                  <Image src={Mapnew} alt="" />
                  <p>124 City Road, London, EC1V 2NX</p>
                </div>

                <div className="contact-us-middle-main-m-left-con">
                  <Image src={Phone} alt="" />
                  <p>
                    <a href="tel:+1300199093">1300 199 093</a>
                  </p>
                </div>
                <div className="contact-us-middle-main-m-left-con">
                  <Image src={Email} alt="" />
                  <p>
                    <a href="mailto:info@csp.global">info@csp.global</a>
                  </p>
                </div>
                <div className="mi-image-last-cont desktop">
                  <Image src={Mi} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map-sect-contactus-page">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2675875233617!2d-0.09084038959127419!3d51.52665170918149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca60a8508e1%3A0x67693b0427fb6d46!2s124%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e0!3m2!1sen!2sin!4v1703856117789!5m2!1sen!2sin"></iframe>
        </section>

        <Footer />
      </main>
    </>
  );
}
