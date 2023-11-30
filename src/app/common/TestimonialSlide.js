import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Leveraging from "../img/cdr-icon1.png";
import Investigation from "../img/Investigation.png";
import Response from "../img/responce.png";
import Hunting from "../img/Threat-Hunting.png";
import testimonial from "../img/mobo.jpg";
import Axios from "../img/Axios.jpg";
import None from "../img/none.png";
import Image from "next/image";
import Head from "next/head";

export default function TestimonialSlide() {
  return (
    <div className="cder-ca-slider home-tston">
      <Carousel>
        <div>
          <div className="testimonial-frame-middle">
            <div className="testimonial-frame-left">
              <Image src={testimonial} alt="" />
              <h4>Andrew Ramsey</h4>
              <p>CEO Mobo Group</p>
            </div>
            <div className="testimonial-frame-right">
              <p>
                Choosing to work with Callum and his team at CSP in late 2022
                was the single most valuable decision I made for the year. With
                the support and guidance of Callum, he has assisted Mobo Group
                in implementing the Essential 8 cyber security controls
                necessary for us to achieve Right Fit For Risk accreditation to
                ISO 27001. His proactive, responsive and supportive manner has
                captivated the entire team at Mobo Group who have been
                incredibly impressed by his work ethic and hard work in support
                of our business. I will be forever grateful for Callum's
                support, guidance, patience and understanding afforded to me in
                completing the RFFR project and becoming our trusted managed
                security service provider. I cannot imagine any IT provider
                being able to match the flexibility and commitment he has made
                to the hours of work needed by my side in this time of need.
                When IT is not a language you speak well, there is nothing
                better than finding someone to work with like Callum and the the
                team at CSP. From my perspective they have demonstrated through
                their actions how much they care for our business, they treat
                the work they do as if it was for themselves and they clearly
                want to see us succeed. This is a partnership which I suspect is
                in its infancy, with much more value to be realised. Looking
                forward to a strong future partnership.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="testimonial-frame-middle">
            <div className="testimonial-frame-left">
              <Image src={None} alt="" />
              <h4>Andrew Larner</h4>
              <p>IT Manager | Trinity College</p>
            </div>
            <div className="testimonial-frame-right">
              <p>
                CSP helped guide us through our Essential Eight journey and
                significantly increased our overall maturity. Callum and his
                team had such a wealth of knowledge with a great ability to
                explain the most complex configurations in a simple way. We feel
                we are now in a much better position to defend ourselves than we
                were before! We look forward to working together in the future
                to navigate new Cyber Security challenges.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="testimonial-frame-middle">
            <div className="testimonial-frame-left">
              <Image src={None} alt="" />
              <h4>Angela Debenham</h4>
              <p>Finance and Admin Manager</p>
            </div>
            <div className="testimonial-frame-right">
              <p>
                I can't recommend Callum and his team at CSPA highly enough -
                the planning and migration process was seamless, nothing is too
                much trouble and any issues are dealt with so efficiently. We
                all feel confident that our cybersecurity needs are in very safe
                hands
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="testimonial-frame-middle">
            <div className="testimonial-frame-left">
              <Image src={Axios} alt="" />
              <h4>Alistair Brierley - CTO</h4>
              <p>Axiosdev</p>
            </div>
            <div className="testimonial-frame-right">
              <p>
                CSP were able to help us apply industry-standard hardening best
                practices to our Office 365 instance, our internal network and
                all of our devices and servers. They were also able to assist in
                organising our licenses to make sure we are getting the best
                value for money. They are always willing to help and we will
                continue to rely on their services.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
