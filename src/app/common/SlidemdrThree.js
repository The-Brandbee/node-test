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
import Escalating from "../img/enablement-banner-4.jpg";

export default function Home() {
  return (
    <div className="cder-ca-slider">
      <Carousel
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        <div>
          <div className="Continuous-slider-main">
            <Image src={Escalating} alt="" />
            <div className="Continuous-slider-main-bottom">
              <h4>Escalating Data Breach Threats:</h4>
              <p>
                Cyberattacks are on the rise, with hackers targeting
                organizations of all sizes.{" "}
                <span>In 2021, there were 1,862</span> reported data breaches,{" "}
                exposing over 808 million records. CSP Global combats this
                threat through advanced encryption and access controls, ensuring
                data confidentiality and limiting unauthorized access.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <Image src={Escalating} alt="" />
            <div className="Continuous-slider-main-bottom">
              <h4>Preserving Reputation: </h4>
              <p>
                Data breaches can tarnish an organization's reputation and lead
                to significant financial losses. In 2023, the worldwide average
                expense incurred due to a data breach stood at{" "}
                <span>USD 4.45 million,</span>
                marking a notable 15% escalation over the preceding three-year
                period, highlighting the importance of robust protection
                measures. CSP Global mitigates this risk through comprehensive
                employee training, phishing awareness programs, and incident
                response protocols.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <Image src={Escalating} alt="" />
            <div className="Continuous-slider-main-bottom">
              <h4>Securing Intellectual Property:</h4>
              <p>
                Protecting intellectual property and proprietary information is
                crucial. A cyber security report forecasts that cybercrime costs
                are set to soar, <span>reaching $9.5 trillion</span> by 2024 and
                surpassing $10.5 trillion by 2025, underscoring the financial
                impact of intellectual property theft. CSP Global employs
                advanced cybersecurity solutions to safeguard intellectual
                property, detect vulnerabilities, and respond promptly to
                security incidents.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
