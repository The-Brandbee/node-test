"use client";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import BlogPost from "../component/BlogPost";
import RecentPosts from "../component/RecentPosts.js";
import Script from "next/script";
import Search from "../img/search.png";
import BlogmainBanner from "../img/CSP-Blog-Header-Banner.jpg";
import { GoogleTagManager } from "@next/third-parties/google";

export default function blog() {
  return (
    <>
      <Head></Head>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main>
        <header>
          <Header />
          <div className="header-video">
            <Image src={BlogmainBanner} alt="" />
          </div>

          <div className="container Strengthen-cont-main">
            <div className="Strengthen-Your-Cyber-Defenses mdr-page">
              <h4>
                <span>Blog</span>
              </h4>
              <p></p>
            </div>
          </div>
        </header>
        <section className="presscoverage-main-frame">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <BlogPost />
              </div>
              <div className="col-md-4">
                <div className="search-box-blog-right-main">
                  <div className="search-box-blog none">
                    <form action="#">
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="SEARCH"
                        required
                      />
                      <button>
                        <Image src={Search} alt="" />
                      </button>
                    </form>
                  </div>

                  <div className="blog-list-frame-right bottom">
                    <h4>Recent posts</h4>

                    <RecentPosts />
                  </div>
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
