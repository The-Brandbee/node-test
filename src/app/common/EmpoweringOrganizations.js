import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

export default class TestimonialSlide extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
          autoPlaySpeed={6000}
          responsive={this.responsive}
        >
          <div className="Next-Gen-middle-frame">
            <h3>Next-Gen Managed XDR</h3>
            <p>
              AI powered Technology. Human Guardians.
              <br /> Microsoft Experts. Tailored for you!
            </p>
            <div className="know-more">
              <Link href="/mdr">LEARN MORE</Link>
            </div>
          </div>
          <div className="Next-Gen-middle-frame">
            <h3>Early Signs</h3>
            <p>
              We don't snooze so you don't lose. <br /> Early detection is
              crucial.
            </p>
            <div className="know-more">
              <Link href="/about">LEARN MORE</Link>
            </div>
          </div>
          <div className="Next-Gen-middle-frame">
            <h3>Beyond Technology</h3>
            <p>
              Executive cyber reports that make sense. Analysts can verify risk
              activity directly via Microsoft Teams with CSP "engage cards".
            </p>
            <div className="know-more">
              <Link href="/about">LEARN MORE</Link>
            </div>
          </div>
          <div className="Next-Gen-middle-frame">
            <h3>Think Globally Act Locally</h3>
            <p>
              Finger on the pulse. Threat intelligence <br /> designed for you!
            </p>
            <div className="know-more">
              <Link href="/modern-soc">LEARN MORE</Link>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
