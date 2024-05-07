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
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        <div>
          <div className="Continuous-slider-main">
            <h4>Comprehensive Guidance:</h4>
            <p>
              NIST covers various aspects of cybersecurity, including
              identification, protection, detection, response, and recovery.
              This holistic approach aligns well with the multifaceted nature of
              Microsoft 365 and Azure ecosystems, allowing organizations to
              address diverse challenges effectively.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <h4>Risk-Based Approach:</h4>
            <p>
              a key strength of the NIST Framework is its risk-based approach.
              It helps organizations prioritize cybersecurity efforts based on
              risk assessments and business objectives. When applied to
              Microsoft 365 and Azure environments, this approach enables
              organizations to focus resources on protecting high-valued assets
              and address vulnerabilities that pose the greatest risk to the
              business.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <h4>Flexibility and Adaptability:</h4>
            <p>
              The NIST Framework is designed to be flexible and adaptable to
              different organizational structures, sizes, and industries.
              Organizations can tailor the framework to suit their specific
              needs and effectively manage cybersecurity risks within these
              environments.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <h4>Alignment with Industry Standards:</h4>
            <p>
              The NIST Framework aligns closely with other industry standards
              and best practices, such as ISO 27001, CIS Controls, and Right Fit
              for Risk. This facilitates integration with existing cybersecurity
              programs and ensures consistency across different frameworks.
            </p>
          </div>
        </div>
        <div>
          <div className="Continuous-slider-main">
            <h4>Continuous Improvement:</h4>
            <p>
              The NIST Framework promotes a culture of continuous improvement by
              emphasizing the importance of ongoing monitoring, assessment, and
              adaptation. In the dynamic and evolving landscape of Microsoft 365
              and Azure ecosystems, where new threats emerge regularly, this
              focus on continuous improvement is essential.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
