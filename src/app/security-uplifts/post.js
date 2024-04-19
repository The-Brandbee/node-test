"use client";
import React from "react";
import Cal from "../img/cla-b.png";
import ArrowOne from "../img/arrow-1.png";
import Arrowtwo from "../img/arrow-2.png";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import Slidemdr from "../common/Slidemdr.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Leveraging from "../img/Leveraging.webp";
import BenefitsOne from "../img/security-icon-1.png";
import BenefitsTwo from "../img/security-icon-2.png";
import BenefitsThree from "../img/security-icon-3.png";
import BenefitsFour from "../img/security-icon-4.png";
import BenefitsFive from "../img/security-icon-5.png";
import BenefitsSix from "../img/security-icon-6.png";
import CountTwo from "../Count/CountFive.js";
import CountThree from "../Count/countFour.js";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2></h2>;
  }

  return (
    <>
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="security-uplifts-page-main">
        {posts.map((post) => (
          <div key={post.id}>
            <header>
              <Header />
              <div className="header-video">
                <video playsInline autoPlay loop muted>
                  <source
                    src={
                      "https://cdn.thebrandbee.com/video/CSP-Global-Video.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="container Strengthen-cont-main">
                <div className="Strengthen-Your-Cyber-Defenses mdr-page">
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: post.bannerheading,
                    }}
                  />
                  <p>{post.bannertext}</p>
                </div>
              </div>
            </header>
            <section className="Detection-Response-page">
              <div className="container">
                <div className="Detection-Response-page-middle">
                  <div className="Detection-Response-page-middle-left">
                    <p>{post.subsection1}</p>
                  </div>
                  <div className="Detection-Response-page-middle-left">
                    <p>{post.subsection2}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="Hunting-Rules-frame-number">
              <div className="container">
                <div className="Hunting-Rules-frame-number-middle">
                  <div className="Hunting-Rules-frame-number-middle-cont-number">
                    <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                      <h4>
                        Did You <span>Know?</span>
                      </h4>
                    </div>
                    <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                      <h3>
                        <CountTwo />
                      </h3>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.section72,
                        }}
                      />
                    </div>
                    <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                      <h3>
                        <CountThree />
                      </h3>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.section80,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              dangerouslySetInnerHTML={{
                __html: post.keybenefitsection,
              }}
            />
            <section className="Empowering-Cybersecurity-frame">
              <div className="container">
                <div className="Empowering-Cybersecurity-frame-top">
                  <div className="Empowering-Cybersecurity-frame-top-left">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.empowering,
                      }}
                    />
                  </div>
                  <div className="Empowering-Cybersecurity-frame-top-right">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.empoweringtext,
                      }}
                    />
                    <div class="know-more">
                      <Link href="/contact"> GET SECURED &gt; </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="Empowering-Cybersecurity-frame-bottom">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.lastsection,
                    }}
                  />
                </div>*/}
              </div>
            </section>
            <Footer />
          </div>
        ))}
      </main>
    </>
  );
};

export default Posts;
