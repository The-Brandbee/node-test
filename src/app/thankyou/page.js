"use client";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import Slidemdr from "../common/Slidemdr.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import About from "../img/Thank-CSP.jpg";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Head></Head>
      <header>
        <Header />
        <div className="Inner-page-banner-frame">
          <Image src={About} alt="" />
        </div>
        <div className="about-bannner-contact Thank you for">
          <h3>
            Thank you for connecting with us. <br />
            Our team will contact you soon.
          </h3>
        </div>
      </header>
      <Footer />
    </main>
  );
}
