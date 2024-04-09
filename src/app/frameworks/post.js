"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import BenefitsOne from "../img/Dynamic-1.png";
import CybersecurityframeworkTwo from "../img/cybersecurityframework-2.png";
import CybersecurityframeworkThree from "../img/cybersecurityframework-3.png";
import Slidemdr from "../common/SlidemdrTwo.js";
import CybersecurityframeworkFour from "../img/cybersecurityframework-4.png";
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
import CountSeven from "../Count/CountSeven.js";
import CountSix from "../Count/CountSix.js";
import Script from "next/script";
import Frameworkbanner from "../img/cybersecurityframework-top-banner.jpg";

import { GoogleTagManager } from "@next/third-parties/google";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2></h2>;
  }

  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="cybersecurityframework-main-page">
        {posts.map((post) => (
          <div key={post.id}>
            <header>
              <Header />
              <div className="Inner-page-banner-frame">
                <Image src={Frameworkbanner} alt="" />
              </div>
              <div className="container">
                <div className="about-bannner-contact Modern-SOC-main">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: post.bannerheading,
                    }}
                  />
                </div>
              </div>
            </header>
            <section className="Detection-Response-page">
              <div className="container">
                <div className="Detection-Response-page-middle">
                  <div className="Detection-Response-page-middle-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.firstsectiontext,
                      }}
                    />
                  </div>
                  <div className="Detection-Response-page-middle-left">
                    <Image src={CybersecurityframeworkTwo} alt="" />
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
                        <CountSix />
                      </h3>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.section74,
                        }}
                      />
                    </div>
                    <div className="Hunting-Rules-frame-number-middle-cont-number-left">
                      <h3>
                        <CountSeven />
                      </h3>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.section94,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="Framework-Deconstructed-frame">
              <div className="container">
                <div className="Framework-Deconstructed-frame-middle">
                  <h3>
                    The Cybersecurity
                    <br />
                    Framework <span>Deconstructed</span>
                  </h3>
                  <ul>
                    <li>{post.textbox1}</li>
                    <li>{post.textbox2}</li>
                    <li>{post.textbox3}</li>
                    <li>{post.textbox4}</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="Role-of-Essential-Eight" id="essentialeight">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description,
                }}
              />
            </section>
            <section className="Does-it-Work-frame" id="nist">
              <div className="container">
                <div className="Does-it-Work-frame-middle">
                  <div className="Does-it-Work-frame-middle-left">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.nistheading,
                      }}
                    />

                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.nisttext,
                      }}
                    />
                  </div>
                  <div className="Does-it-Work-frame-middle-right">
                    <Slidemdr />
                  </div>
                </div>
              </div>
            </section>
            <section className="Identify-See-the-Unseen">
              <div className="container">
                <div className="Identify-See-the-Unseen-middle">
                  <div className="Identify-See-the-Unseen-middle-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.leftsectiontext,
                      }}
                    />
                  </div>
                  <div className="Identify-See-the-Unseen-middle-middle">
                    <Image src={CybersecurityframeworkFour} alt="" />
                  </div>
                  <div className="Identify-See-the-Unseen-middle-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.rightsectiontext,
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="Role-of-Zero-Trust-Methodology" id="zerotrust">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.zerotrust,
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
