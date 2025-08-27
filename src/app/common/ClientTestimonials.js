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
      <div className="cder-ca-slide ClientTestimonials-main-page-m">
        <Carousel
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={6000}
          responsive={this.responsive}
        >
          <div className="Next-Gen-middle-frame">
           <h5>“We now have a far better support turnaround. The Brennan team is so much more knowledgeable, visible and responsive, helping both our team and our broader people.”</h5>
           <p>Shrija Pradhan <span>Business Operations Manager, Elanor Investors Group </span></p>
          </div>
          <div className="Next-Gen-middle-frame">
            <h5>“Brennan had the in-depth experience to do this project and provided really detailed planning of what needed to be done, from day one to day one hundred. They were very good, very professional and very knowledgeable.”</h5>
           <p>Franz Tanamal <span>Group Systems Analyst, Elanor Investors Group  </span></p>
          
          </div>
          <div className="Next-Gen-middle-frame">
           <h5>“With Brennan, we have finally found a partner who can lead us in the right technology direction and give us the performance we need. We are a family-owned and -operated business that is now future-proofed and ready for the 21st century.” </h5>
           <p>Heather Cross <span>Chief Financial Officer, Priestley's Gourmet Delights </span></p> 
          </div>
        
        </Carousel> 
      </div>
    );
  }
}
