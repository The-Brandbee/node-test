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
      "https://cms.csplighthouse.com/api/leadershippage"
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
              <h3 dangerouslySetInnerHTML={{ __html: dataNew.bannerheading }} />
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
                <h3 dangerouslySetInnerHTML={{ __html: dataNew.mainheading }} />
                <div className="Discover-contact-us-page">
                  <h5>Discover:</h5>
                  <p
                    dangerouslySetInnerHTML={{ __html: dataNew.discovertext }}
                  />
                </div>
                <div className="Discover-contact-us-page">
                  <h5>Demo:</h5>
                  <p dangerouslySetInnerHTML={{ __html: dataNew.demotext }} />
                </div>
                <div className="Discover-contact-us-page">
                  <h5>Future:</h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: dataNew.futuretext }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us-addrs">
          <div className="container">
            <div className="Australia-min-f">
              <p
                dangerouslySetInnerHTML={{ __html: dataNew.australiaaddress }}
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: dataNew.ukaddress }} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
