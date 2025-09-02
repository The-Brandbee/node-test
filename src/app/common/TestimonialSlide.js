import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ticon from "../img/trst-icon.png";
import Trinity from "../img/Trinity-main.png";
import One from "../img/one.webp";
import Two from "../img/two.webp";
import Three from "../img/three.webp";
import Four from "../img/four.webp";
import Five from "../img/five.png";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TestimonialSlide() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const responsive = {
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

  return (
    <div className="cder-ca-slide">
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        responsive={responsive}
      >
       
          <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                 <Image src={One} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
               <div> <p>
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
                </p></div>

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
                 <Image src={Two} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
            <p>

  It has been a real pleasure to work with CSP. We embarked on our journey with
  CSP with the challenge of having many disparate cybersecurity solutions in
  place, which was both operationally and financially inefficient. Since setting
  up Microsoft XDR, we now feel far more secure knowing all our assets are
  protected and visible under one roof. They have helped us improve IT
  efficiency when it comes to managing devices and data across the entire group,
  as well as adopt a more robust risk management culture.
</p>

                <div className="sob-test">
                  <h4>IT Manager </h4>
                  <p>Agostino Group </p>
                </div>
              </div>
            </div>
          </div>
            <div>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                 <Image src={Three} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
              <p>
  Choosing to work with the CSP team in late 2022 was the single most valuable
  decision I made for the year. With their support and guidance, they assisted
  Mobo Group in implementing Essential 8 security controls, along with many
  others, necessary for us to achieve Right Fit For Risk accreditation to ISO
  27001. CSP's proactive, responsive, and supportive manner has captivated the
  entire team at Mobo Group who have been incredibly impressed by their tireless
  work in support of our business. I will be forever grateful for CSP’s support,
  guidance, patience and understanding afforded to me in completing the RFFR
  project and becoming our trusted managed security service provider.
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
                 <Image src={Four} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
               <p>
  We have found that when working with suppliers in the past, the service tends
  to start out well but drops off over time. With CSP, we are pleased to say
  that this has never happened! The service we received day to day over the last
  two years has been great. This is why we've recently re-signed with them as
  our 24x7 MDR cybersecurity partner and really feel like we couldn't be in
  better hands!
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
                 <Image src={Five} alt="" />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
               <p>
  Late in 2024, CSP Global was engaged to migrate our endpoint, identity, and
  email security to the Microsoft Defender suite of products. Additionally, our
  servers were successfully migrated to the Azure ARC environment. We are
  pleased to share that their product knowledge was excellent, ensuring a smooth
  and efficient transition. CSP Global was able to adapt to our unique
  requirements and seamlessly offboard us from our previous security vendor.
  Their communication throughout the project was also outstanding, keeping us
  informed at every step. The project was completed within scope and timeframe,
  meeting all our expectations. We highly recommend CSP Global for their
  professionalism and expertise.
</p>  


                <div className="sob-test">
                  <h4>Earle Scott</h4>
                  <p>ICT Infrastructure Manager</p>
                </div>
              </div>
            </div>
          </div>
       
      </Carousel>
    </div>
  );
}
