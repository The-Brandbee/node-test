"use client";
import { useEffect, useState } from "react";
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

export default function Home() {
  const [dataNew, setDataNew] = useState("");
  // Call the API and log the data to the console
  const fetchData = async () => {
    const response = await fetch(
      ""
    );
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
      <main className="About-us-page">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={About} alt="" />
          </div>
          <div className="about-bannner-contact Contact-Us">
            <div className="container">
              <h3>CONTACT US</h3>
            </div>
          </div>
        </header>
        <section className="contact-us-middle-main">
          <div className="container">
            <div className="contact-us-middle-main-m">
              <div className="contact-us-middle-main-m-right">
                <div className="contact-us-middle-main-m-right-middle">
                  <Contact />
                </div>
              </div>
              <div className="contact-us-middle-main-m-left new-cont">
              <h3>
  How do our <br /> Guardians help <br /> you{/* */} <span>stay ahead?</span>
</h3>
                <div className="Discover-contact-us-page">
                  <h5>Discover:</h5>
                  <p>
  We first want to hear about your most recent cybersecurity and IT challenges.
</p>
                </div>
                <div className="Discover-contact-us-page">
                  <h5>Demo:</h5>
                 <p>
  We then take you on a tour of our{/* */}{" "}
  <a href="/lighthouse-platform">Lighthouse Platform</a>
</p>
                </div>
                <div className="Discover-contact-us-page">
                  <h5>Future:</h5>
                 <div>
  <p>
    We provide personalized ideas for a future with less cyber challenges and
    more IT enablement.
  </p>
  <p>Are we a good fit? Let's find out - complete the form to get started.</p>
</div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us-addrs">
          <div className="container">
            <div className="Australia-min-f">
             <div className="Australia-min-f">
  <h5>Australia (HQ)</h5>
  <p>
    Westpac House, 91 King William <br />
    Street, Adelaide, Australia (HQ)
    <br />
    <a href="Tel:1300199093">1300 199 093</a>
    <br />
    <a href="mailto:info@csp.global">info@csp.global</a>
  </p>
</div>

            </div>
          <div>
  <div className="Australia-min-f">
    <h5>UK Office</h5>
    <p>124 City Road, London, EC1V 2NX</p>
  </div>
</div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
