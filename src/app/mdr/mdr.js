"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import Slidemdr from "../common/Slidemdr.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Leveraging from "../img/Leveraging.webp";
import BenefitsOne from "../img/Benefits-1.png";
import BenefitsTwo from "../img/Benefits-2.png";
import BenefitsThree from "../img/Benefits-3.png";
import BenefitsFour from "../img/Benefits-4.png";
import structured from "../img/Process-1.png";
import BenefitsFive from "../img/Benefits-5.png";
import BenefitsSix from "../img/Benefits-6.png";
import furtherOne from "../img/image003.jpg";
import furtherTwo from "../img/image001.png";
import CountOne from "../Count/CountOne.js";
import CountTwo from "../Count/CountTwo.js";
import CountThree from "../Count/CountThree.js";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  const [dataNew, setDataNew] = useState("");
  // Call the API and log the data to the console
  const fetchData = async () => {
    const response = await fetch("https://cms.csplighthouse.com/api/corporate");
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
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main>
        <header>
          <Header />
          <div className="header-video">
            <video playsInline autoPlay loop muted>
              <source
                src={
                  "https://cdn.shopify.com/videos/c/o/v/05ddb15ceb464f44af3a59e80f28d099.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>

          <div className="container Strengthen-cont-main">
            <div className="Strengthen-Your-Cyber-Defenses mdr-page">
              <h4 dangerouslySetInnerHTML={{ __html: dataNew.bannerheading }} />
              <p
                dangerouslySetInnerHTML={{ __html: dataNew.bannersubheading }}
              />
            </div>
          </div>
        </header>
        <section className="Detection-Response-page">
          <div className="container">
            <div className="Detection-Response-page-middle">
              <div className="Detection-Response-page-middle-left">
                <p dangerouslySetInnerHTML={{ __html: dataNew.lefttextbox }} />
              </div>
              <div className="Detection-Response-page-middle-left">
                <p dangerouslySetInnerHTML={{ __html: dataNew.righttextbox }} />
              </div>
            </div>
          </div>
        </section>
        <section className="application-guarantees-frame">
          <div className="container">
            <div className="application-guarantees-frame-middle">
              <div className="application-guarantees-left">
                <h4
                  dangerouslySetInnerHTML={{ __html: dataNew.harnessheading }}
                />
                <p dangerouslySetInnerHTML={{ __html: dataNew.harnesstext }} />
              </div>
              <div className="application-guarantees-right">
                <Image src={Leveraging} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="Does-it-Work-frame">
          <div className="container">
            <div className="Does-it-Work-frame-middle">
              <div className="Does-it-Work-frame-middle-left">
                <div
                  dangerouslySetInnerHTML={{ __html: dataNew.howworkheading }}
                />
                <h6
                  dangerouslySetInnerHTML={{ __html: dataNew.howsubheading }}
                />
                <p dangerouslySetInnerHTML={{ __html: dataNew.howtext }} />
              </div>
              <div className="Does-it-Work-frame-middle-right">
                <Slidemdr />
              </div>
            </div>
          </div>
        </section>
        <section className="Hunting-Rules-frame-number">
          <div className="container">
            <div className="Hunting-Rules-frame-number-middle">
              <div className="Hunting-Rules-frame-number-middle-cont">
                <p>
                  With CSP's MDR operational framework, you gain comprehensive
                  protection, proactive threat management, and the expertise
                  needed to stay one step ahead of cyber adversaries.
                </p>
              </div>
              <div className="Hunting-Rules-frame-number-middle-cont-number">
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountOne />
                  </h3>

                  <p>Hunting Rules</p>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountTwo />
                  </h3>

                  <p>
                    Automation <span>Playbooks</span>
                  </p>
                </div>
                <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                  <h3>
                    <CountThree />
                  </h3>

                  <p>
                    User Engagement <span>Cards</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Benefits-of-mdr-frame">
          <div dangerouslySetInnerHTML={{ __html: dataNew.benefitofmdr }} />
        </section>
        <section className="further-down-section">
          <div className="container">
            <div className="further-down-section-middle">
              <Image src={furtherOne} alt="" />
            </div>
            <div className="further-down-section-middle">
              <Image src={furtherTwo} alt="" />
            </div>
          </div>
        </section>
        <section className="Our-MDR-process">
          <div className="Our-MDR-process-two">
            <div className="container">
              <div className="Our-MDR-process-middle">
                <div className="Our-MDR-process-middle-left">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: dataNew.ourprocessheading,
                    }}
                  />
                  <h6
                    dangerouslySetInnerHTML={{ __html: dataNew.ourprocesstext }}
                  />
                </div>
                <div className="Our-MDR-process-middle-right">
                  <Image src={structured} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
