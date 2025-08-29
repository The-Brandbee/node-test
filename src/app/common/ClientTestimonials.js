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
           <h5> “On engaging with CSP, they listened very closely to our unique challenges as a college. They firstly helped increase our Essential Eight maturity, while also bolstering our Microsoft Cloud ecosystem. The team at CSP have a wealth of knowledge and were always ready to explain the more complex configurations in very simple terms so that we can scale our IT operation. We now feel far more confident in defending ourselves against threats than we did before. We will continue to work closely with CSP as we navigate new cyber and IT challenges.”</h5>
           <p>Andrew Larner <span>IT Manager | Trinity College </span></p>
          </div>
          <div className="Next-Gen-middle-frame">
            <h5>“It has been a real pleasure to work with CSP. We embarked on our journey with CSP with the challenge of having many disparate cybersecurity solutions in place, which was both operationally and financially inefficient. Since setting up Microsoft XDR, we now feel far more secure knowing all our assets are protected and visible under one roof. They have helped us improve IT efficiency when it comes to managing devices and data across the entire group, as well as adopt a more robust risk management culture.”</h5>
           <p>IT Manager  <span>Agostino Group   </span></p>
          
          </div>
          <div className="Next-Gen-middle-frame">
           <h5>  “Choosing to work with the CSP team in late 2022 was the single most valuable decision I made for the year. With their support and guidance, they assisted Mobo Group in implementing Essential 8 security controls, along with many others, necessary for us to achieve Right Fit For Risk accreditation to ISO 27001. CSP's proactive, responsive, and supportive manner has captivated the entire team at Mobo Group who have been incredibly impressed by their tireless work in support of our business. I will be forever grateful for CSP's support, guidance, patience and understanding afforded to me in completing the RFFR project and becoming our trusted managed security service provider.” </h5>
           <p>Andrew Ramsey <span> CEO Mobo Group </span></p> 
          </div>
        
        </Carousel> 
      </div>
    );
  }
}
