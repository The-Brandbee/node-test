"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../img/about-banner.jpg";
import EmpoweringRight from "../img/about-2.png";
import Adam from "../img/Adam.png";
import Cyberops from "../img/Cyberops.png";
import TeamOne from "../img/team-1.png";
import TeamTwo from "../img/team-2.png";
import TeamThree from "../img/team-3.png";
import TeamFour from "../img/team-4.png";
import TeamFive from "../img/team-5.png";
import TeamSix from "../img/team-6.png";
import TeamSeven from "../img/team-7.png";
import TeamEight from "../img/team-8.png";
import Cybersecurity from "../img/about-3.png";
import ourvalue from "../img/our-value.png";
import CallumGolding from "../img/Callum-Golding.webp";
import ShivamMalaviya from "../img/Shivam-Malaviya.png";
import visionOne from "../img/vision-1.png";
import visionTwo from "../img/vision-2.png";

export default function about() {
  return (
    <main className="About-us-page">
      <header>
        <Header />
        <div className="Inner-page-banner-frame">
          <Image src={About} alt="" />
        </div>
        <div className="about-bannner-contact">
          <h3>Schedule online</h3>
        </div>
      </header>

      <Footer />
    </main>
  );
}
