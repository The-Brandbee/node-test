import React, { Component } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Leveraging from "../img/cdr-icon1.png";
import Investigation from "../img/Investigation.png";
import Response from "../img/responce.png";
import Hunting from "../img/Threat-Hunting.png";
import testimonial from "../img/mobo.jpg";
import Axios from "../img/Axios.jpg";
import Trinity from "../img/Trinity-main.png";
import Ticon from "../img/trst-icon.png";

import None from "../img/none.png";
import Agos from "../img/agos.png";
import Turb from "../img/Turb.png";
import Image from "next/image";
import Head from "next/head";

export default class TestimonialSlide extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  render() {
    return (
      <div className="cder-ca-slide">
        <Carousel
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={500000}
          responsive={this.responsive}
        >
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                  <Image src={Trinity} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
                <p>
                  On engaging with CSP, they listened very closely to our unique
                  challenges as a college. They firstly helped increase our
                  Essential Eight maturity, while also bolstering our Microsoft
                  Cloud ecosystem. The team at CSP have a wealth of knowledge
                  and were always ready to explain the more complex
                  configurations in very simple terms so that we can scale our
                  IT operation. We now feel far more confident in defending
                  ourselves against threats than we did before. We will continue
                  to work closely with CSP as we navigate new cyber and IT
                  challenges.
                </p>
                <div className="sob-test">
                  <h4>Andrew Larner</h4>
                  <p>IT Manager | Trinity College</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                  <Image src={Agos} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>

              <div className="testimonial-frame-right">
                <p>
                  It has been a real pleasure to work with CSP. We embarked on
                  our journey with CSP with the challenge of having many
                  disparate cybersecurity solutions in place, which was both
                  operationally and financially inefficient. Since setting up
                  Microsoft XDR, we now feel far more secure knowing all our
                  assets are protected and visible under one roof. They have
                  helped us improve IT efficiency when it comes to managing
                  devices and data across the entire group, as well as adopt a
                  more robust risk management culture.
                </p>
                <div className="sob-test">
                  <h4>IT Manager</h4>
                  <p>Agostino Group </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                  <Image src={testimonial} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
                <p>
                  Choosing to work with CSP in late 2022 was the single most
                  valuable decision I made for the year. With the support and
                  guidance of the entire team, they helped Mobo Group in
                  implementing a rapid IT uplift, with the Essential 8
                  cybersecurity controls necessary for us to achieve Right Fit
                  for Risk accreditation to ISO 27001. CSP helped us identify
                  and prioritize the most important risks we faced NFP with
                  compliance and regulatory requirements.
                </p>
                <div className="sob-test">
                  <h4>Andrew Ramsey</h4>
                  <p>CEO Mobo Group</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                  <Image src={Axios} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
                <p>
                  We have found that when working with suppliers in the past,
                  the service tends to start out well but drops off over time.
                  With CSP, we are pleased to say that this has never happened!
                  The service we received day to day over the last two years has
                  been great. This is why we've recently re-signed with them as
                  our 24x7 MDR cybersecurity partner and really feel like we
                  couldn't be in better hands!
                </p>
                <div className="sob-test">
                  <h4>Scott Ayton</h4>
                  <p>Technical Director</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                  <Image src={Turb} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
                <p>
                  I can't recommend CSP and the team highly enough - the
                  planning and migration process across from Google to Microsoft
                  365 was seamless. Nothing is too much trouble for their
                  support team and any issues are dealt with very efficiently.
                  We all feel completely confident that our cybersecurity needs
                  are in very safe hands!
                </p>
                <div className="sob-test">
                  <h4>Angela Debenham</h4>
                  <p>Finance and Admin Manager</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
