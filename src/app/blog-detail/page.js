"use client";
import React, { Component } from "react";
import Cal from "../img/cla-b.png";
import ArrowOne from "../img/arrow-1.png";
import Arrowtwo from "../img/arrow-2.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Link from "next/link";
import Search from "../img/search.png";
import RecentPosts from "../component/RecentPosts.js";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import { GoogleTagManager } from "@next/third-parties/google";
import BlogmainBanner from "../img/CSP-Blog-Header-Banner.jpg";

class BlogDetail extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("blogid");
    fetch(`https://cms.csplighthouse.com/api/blogs/${blogId}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          item: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, item } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Plese wait some time.... </h1>{" "}
        </div>
      );
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
          </header>
          <div className="pmp-profile-page">
            <section className="presscoverage-main-frame">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 blog-detail">
                    <div key={item._id}>
                      <div className="presscoverage-main-frame-middle">
                        <div className="presscoverage-main-frame-middle-right">
                          <img
                            src={"https://cms.csplighthouse.com/" + item.image}
                          />
                        </div>
                        <div className="presscoverage-main-frame-middle-left">
                          <div className="presscoverage-main-frame-middle-left-heading">
                            <h2>{item.heading}</h2>
                          </div>
                          <div className="presscoverage-main-frame-middle-left-heading-middle">
                            <h5>
                              <Image src={Cal} alt="" /> {item.date}
                            </h5>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.main_desc,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <div className="col-md-12"></div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
export default BlogDetail;
