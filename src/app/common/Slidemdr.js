import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Leveraging from "../img/cdr-icon1.png";
import Investigation from "../img/Investigation.png";
import Response from "../img/responce.png";
import Hunting from "../img/Threat-Hunting.png";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="cder-ca-slider">
      <Carousel
        autoPlay
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        <div>
          <div className="Continuous-slider-main">
            <Image src={Leveraging} alt="" />
            <h4>Continuous Monitoring:</h4>
            <p>
              Our MDR service begins with continuous, 24/7 monitoring of your
              digital environment. This vigilant approach ensures real-time
              threat detection and situational awareness.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <Image src={Hunting} alt="" />
            <h4>Advanced Threat Hunting:</h4>
            <p>
              Our cybersecurity experts actively engage in threat hunting,
              proactively searching for hidden threats and vulnerabilities that
              might not be immediately apparent. This proactive stance helps us
              detect emerging threats before they escalate.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <Image src={Investigation} alt="" />
            <h4>Incident Investigation:</h4>
            <p>
              When a potential threat is identified, our experts swiftly
              initiate an incident investigation. This involves a thorough
              analysis to determine the nature, extent, and potential impact of
              the incident, ensuring a well-informed response.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <Image src={Response} alt="" />
            <h4>Swift Incident Response:</h4>
            <p>
              In the event of a confirmed security incident, our team takes
              immediate and decisive action. This includes containment,
              eradication, and recovery measures to mitigate the threat,
              safeguard your digital ecosystem, and ensure business continuity.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
