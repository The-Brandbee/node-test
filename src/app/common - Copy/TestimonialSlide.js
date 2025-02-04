import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ticon from "../img/trst-icon.png";
import Trinity from "../img/Trinity-main.png";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TestimonialSlide() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://cms.csplighthouse.com/api/testimonial")
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
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="testimonial-frame-middle">
              <div className="testimonial-frame-left">
                <div className="testimonial-frame-left">
                  <img
                    src={"https://cms.csplighthouse.com/" + testimonial.image}
                  />
                </div>
                <div className="testimonial-frame-left-right">
                  <Image src={Ticon} alt="" />
                </div>
              </div>
              <div className="testimonial-frame-right">
                <div
                  dangerouslySetInnerHTML={{ __html: testimonial.desc }}
                ></div>

                <div className="sob-test">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.shortdesc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
