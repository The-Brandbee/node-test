"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Frameworkbanner from "../img/success-stories-banner.jpg";
import TopCollage from "../success-stories/TopCollage.js";
export default function Home() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="success-stories-main-page">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={Frameworkbanner} alt="" />
          </div>
          <div className="container">
            <div className="about-bannner-contact Modern-SOC-main">
              <h3>Privacy Policy</h3>
            </div>
          </div>
        </header>
        <section className="About-The-Company-sto-bottom PrivacyPolicy-main-page">
          <div className="container">
            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Introduction</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  Welcome to CSP Global (“we,” “our,” or “us“). We value your
                  privacy and are committed to protecting your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and protect your personal information when you visit
                  our website.
                </p>
                <p>
                  By using our website, you consent to the practices described
                  in this Privacy Policy. Please read this document carefully
                  and feel free to contact us with any questions or concerns.
                </p>
              </div>
            </div>

            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Information We Collect</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  Personal Information: We may collect personal information that
                  you voluntarily provide when using our services, such as your
                  name, email address, postal address, phone number, and other
                  data. This includes information provided during account
                  registration, subscription to newsletters, or contact
                  inquiries.
                </p>
                <p>
                  Automatically Collected Information: We automatically collect
                  certain information when you visit our website, such as your
                  IP address, browser type, operating system, referring URLs,
                  and pages visited. This data is used to improve our website
                  and enhance your user experience.
                </p>
              </div>
            </div>
            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>How We Use Your Information</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>We may use your information for the following purposes:</p>
                <ul>
                  <li>To provide and improve our services.</li>
                  <li>To personalize your experience on our website.</li>
                  <li>
                    To communicate with you, respond to your inquiries, and send
                    you updates.
                  </li>
                  <li>
                    {" "}
                    To monitor and analyze usage patterns to enhance our
                    website's functionality and security.
                  </li>
                </ul>
              </div>
            </div>
            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Data Security Measures</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  We take data security seriously. We implement reasonable and
                  appropriate security measures to protect your personal
                  information from unauthorized access, disclosure, alteration,
                  or destruction. These measures include encryption, access
                  controls, and regular security assessments.
                </p>
              </div>
            </div>
            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Sharing of Information</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent. However, we
                  may share your information with trusted service providers who
                  assist us in operating our website, subject to strict
                  confidentiality agreements.
                </p>
              </div>
            </div>
            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>
                  Cookies and Tracking <br />
                  Technologies
                </h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  Our website may use cookies and similar tracking technologies
                  to collect information about your browsing behavior. You can
                  manage your cookie preferences through your browser settings.
                  Please review our Cookie Policy [link to Cookie Policy] for
                  more information.
                </p>
              </div>
            </div>
            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Your Rights</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  Access: You have the right to access the personal information
                  we hold about you. You can request a copy of your information
                  by contacting us.
                </p>
                <p>
                  Correction: If you believe the personal information we hold
                  about you is inaccurate or incomplete, you can request
                  corrections.
                </p>
                <p>
                  Deletion: You have the right to request the deletion of your
                  personal information.
                </p>
                <p>
                  Objection: You can object to the processing of your personal
                  information for certain purposes, such as direct marketing.
                </p>
                <p>
                  Data Portability: You have the right to receive your personal
                  information in a structured, commonly used, and
                  machine-readable format.
                </p>
              </div>
            </div>

            <div className="About-The-Company-sto-bottom-two one">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Changes to this Privacy Policy</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or for legal reasons. We will notify
                  you of any significant changes by posting the revised Privacy
                  Policy on our website.
                </p>
              </div>
            </div>
            <div className="About-The-Company-sto-bottom-two">
              <div className="About-The-Company-sto-bottom-two-left">
                <h3>Contact Us</h3>
              </div>
              <div className="About-The-Company-sto-bottom-two-right">
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our data practices, please contact us.
                  This Privacy Policy was last updated on 03/04/2024.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
