import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LighthouseSlideOne from "../img/lighthouse-slide-1.jpg";
import LighthouseSlideTwo from "../img/lighthouse-slide-2.jpg";
import LighthouseSlidethree from "../img/lighthouse-slide-3.jpg";
import LighthouseSlidefour from "../img/lighthouse-slide-4.jpg";
import LighthouseSlidefive from "../img/lighthouse-slide-5.jpg";
import LighthouseSlidefiveN from "../img/lighthouse-slide-5-n.jpg";
import LighthouseSlidesix from "../img/lighthouse-slide-6.jpg";
import LighthouseSlideseven from "../img/lighthouse-slide-7.jpg";
import LighthouseSlideeight from "../img/lighthouse-slide-8.jpg";
import Image from "next/image";
import Link from "next/link";

function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="container">
      <div className="slider-container-mainframe">
        <Slider {...settings}>
          <div>
            <Image src={LighthouseSlideOne} />
          </div>
          <div>
            <Image src={LighthouseSlideTwo} />
          </div>
          <div>
            <Image src={LighthouseSlidethree} />
          </div>
          <div>
            <Image src={LighthouseSlidefour} />
          </div>
          <div>
            <Image src={LighthouseSlidefive} />
          </div>
          <div>
            <Image src={LighthouseSlidefiveN} />
          </div>
          <div>
            <Image src={LighthouseSlidesix} />
          </div>
          <div>
            <Image src={LighthouseSlideseven} />
          </div>
          <div>
            <Link href="/contact">
              <Image src={LighthouseSlideeight} />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Fade;
