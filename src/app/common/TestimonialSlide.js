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
import None from "../img/none.png";
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
          autoPlaySpeed={5000}
          responsive={this.responsive}
        >
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <Image src={testimonial} alt="" />
              </div>
              <div className="testimonial-frame-right">
                <p>
                  Choosing to work with Callum and his team at CSP in late 2022
                  was the single most valuable decision I made for the year.
                  With the support and guidance of the CSP team, they assisted
                  Mobo Group in implementing a rapid IT uplift, with the
                  Essential 8 cybersecurity controls necessary for us to achieve
                  Right Fit For Risk accreditation to ISO 27001.
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
                <Image src={None} alt="" />
              </div>
              <div className="testimonial-frame-right">
                <p>
                  CSP helped guide us through our Essential Eight journey and
                  significantly increased our overall maturity. Callum and his
                  team had such a wealth of knowledge with a great ability to
                  explain the most complex configurations in a simple way. We
                  feel we are now in a much better position to defend ourselves
                  than we were before! We look forward to working together in
                  the future to navigate new Cyber Security challenges.
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
                <Image src={None} alt="" />
              </div>
              <div className="testimonial-frame-right">
                <p>
                  I can't recommend Callum and his team at CSPA highly enough -
                  the planning and migration process was seamless, nothing is
                  too much trouble and any issues are dealt with so efficiently.
                  We all feel confident that our cybersecurity needs are in very
                  safe hands
                </p>
                <div className="sob-test">
                  <h4>Angela Debenham</h4>
                  <p>Finance and Admin Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <Image src={Axios} alt="" />
              </div>
              <div className="testimonial-frame-right">
                <p>
                  CSP were able to help us apply industry-standard hardening
                  best practices to our Office 365 instance, our internal
                  network and all of our devices and servers. They were also
                  able to assist in organising our licenses to make sure we are
                  getting the best value for money. They are always willing to
                  help and we will continue to rely on their services.
                </p>
                <div className="sob-test">
                  <h4>Alistair Brierley - CTO</h4>
                  <p>Axiosdev</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
