"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import LighthouseSlide from "../common/lighthouseSlide.js";
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
  return (
    <>
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main>
        <header>
          <Header />
          <div className="lighthouseplatform-header">
            <div className="container">
              <div className="lighthouseplatform-header-middle">
                <h1>View the Lighthouse Platform in Action</h1>
                <p>
                  CSP Lighthouse is powered by AI with Microsoft expert
                  guardians overlooking your ecosystem around the clock.
                  Next-generation SecOps. We <span>eliminate</span> redundant
                  processes, alerts, and fatigue. We <span>simplify</span> our
                  platform, so your cybersecurity posture and risks actually
                  make sense. We
                  <span> protect</span> your digital workers around the clock by
                  detecting threats early.
                </p>
              </div>
            </div>
          </div>
        </header>
        <section className="LighthouseSlide-main-frame0slide">
          <LighthouseSlide />
        </section>
        <Footer />
      </main>
    </>
  );
}
