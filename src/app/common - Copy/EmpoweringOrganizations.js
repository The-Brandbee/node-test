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
            <h3>RESOLUTION</h3>
            <p>      
            Our SLA's and subject matter expertise, arm your organization with the power to resolve threats and IT problems with unparalleled speed and accuracy. 
            </p>
            <div className="know-more">
              <Link href="/mdr">LEARN MORE</Link>
            </div>
          </div>
          <div className="Next-Gen-middle-frame">
            <h3>THREAT INTEL</h3>
            <p>
            As an ASD network partner and Microsoft Security Solutions Provider, we are primed with threat intelligence and security controls that will keep you safe around the clock. We present the 'what if' possibilities and show you how to tackle them.
            </p>
            <div className="know-more">
              <Link href="/about">LEARN MORE</Link>
            </div>
          </div>
          <div className="Next-Gen-middle-frame">
            <h3>COST-EFFECTIVE</h3>
            <p>
            We bundle and tailor services which translates into savings without compromising on quality. We drive business outcomes through technology to ensure the greatest return on your investment.
            </p>
            <div className="know-more">
              <Link href="/about">LEARN MORE</Link>
            </div>
          </div>
          <div className="Next-Gen-middle-frame">
            <h3>STRATEGIC VISION</h3>
            <p>
            Our vCIO and AI advisory services safeguard your future. We evaluate the integration of emerging technologies and prioritize the safety of your data and operations.
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
