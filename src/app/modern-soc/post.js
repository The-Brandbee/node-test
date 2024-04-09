"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../img/modern-soc-banner.jpg";
import BenefitsOne from "../img/Dynamic-1.png";
import BenefitsTwo from "../img/Dynamic-2.png";
import BenefitsThree from "../img/Dynamic-3.png";
import BenefitsFour from "../img/Dynamic-4.png";
import BenefitsFive from "../img/Dynamic-5.png";
import BenefitsSix from "../img/Dynamic-6.png";
import ModernOne from "../img/Modern-1.png";
import ModernTwo from "../img/Modern-2.png";
import ModernThree from "../img/Modern-3.png";
import ModernFour from "../img/Modern-4.png";
import ModernFive from "../img/Modern-5.png";
import Eliminate from "../img/Eliminate.png";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2></h2>;
  }

  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="About-us-page modernsoc-page-new">
        {posts.map((post) => (
          <div key={post.id}>
            <header>
              <Header />
              <div className="Inner-page-banner-frame">
                <Image src={About} alt="" />
              </div>
              <div className="container">
                <div className="about-bannner-contact Modern-SOC-main">
                  <h3>Modern SOC</h3>
                </div>
              </div>
            </header>
            <section className="Detection-Response-page">
              <div className="container">
                <div className="Detection-Response-page-middle">
                  <div className="Detection-Response-page-middle-left">
                    <p>{post.heading}</p>
                  </div>
                  <div className="Detection-Response-page-middle-left">
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="classic-approach-yielded-frame">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.pointsection,
                }}
              />
            </section>
            <section className="Human-Centric-Security-frame">
              <div className="Eliminate-img">
                <Image src={Eliminate} alt="" />
              </div>
              <div className="container">
                <div className="Human-Centric-Security-frame-top">
                  <div className="Human-Centric-Security-frame-top-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.soc2heading,
                      }}
                    />
                  </div>
                  <div className="Human-Centric-Security-frame-top-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.socsidetext,
                      }}
                    />
                  </div>
                </div>
                <div className="Inspired-by-Various-Disciplines">
                  <div className="Inspired-by-Various-Disciplines-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.textbox1,
                      }}
                    />
                  </div>
                  <div className="Inspired-by-Various-Disciplines-right">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.textbox2,
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="Transforming-Cybersecurity-Investigations">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.modernsoc,
                }}
              />
            </section>
            <section className="Benefits-of-mdr-frame">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.lastsection,
                }}
              />
            </section>
            <Footer />
          </div>
        ))}
      </main>
    </>
  );
};

export default Posts;
