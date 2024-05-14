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
              <h3>Success Story</h3>
            </div>
          </div>
        </header>

        <section className="College-top-list-su">
          <TopCollage />
        </section>

        <Footer />
      </main>
    </>
  );
}
