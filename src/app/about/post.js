"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Video from "../common/AboutVideo.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../img/about-banner.webp";
import EmpoweringRight from "../img/about-2.png";
import Adam from "../img/Adam.png";
import Cyberops from "../img/Cyberops.png";
import TeamOne from "../img/cal.jpg";
import TeamOneee from "../img/Shivam-Malaviya.png";
import TeamTwwo from "../img/image2.png";
import TeamTwo from "../img/team-2.webp";
import TeamThree from "../img/Shivam.jpg";
import TeamFour from "../img/team-4.png";
import TeamFive from "../img/team-5.png";
import Tom from "../img/tom.jpg";
import TeamSix from "../img/team-6.png";
import TeamSeven from "../img/team-7.png";
import TeamEight from "../img/team-8.png";
import Cybersecurity from "../img/about-3.png";
import ourvalue from "../img/our-value.png";
import CallumGolding from "../img/Callum-Golding.webp";
import ShivamMalaviya from "../img/Shivam-Malaviya.png";
import visionOne from "../img/vision-1.png";
import visionTwo from "../img/vision-2.png";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2></h2>;
  }

  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="About-us-page modernsoc-page-new">
        {posts.map((post) => (
          <div key={post.id}>
            <header>
              <Header />
              <div className="Inner-page-banner-frame">
                <Image src={About} alt="" />
              </div>
              <div className="container">
                <div className="about-bannner-contact new-new">
                  <h3>About Us</h3>
                </div>
                <div className="about-bannner-contact-video-frame">
                  <Video />
                </div>
              </div>
            </header>
            <section className="Empowering-Organizations-top-h none">
              <div className="container">
                <div className="Empowering-Organizations-top-h-middle">
                  <h3>Who We Are</h3>
                  <p>
                    CSP's founder and CEO, Callum Golding, is a seasoned IT and
                    cybersecurity professional with over two decades of
                    experience supporting the business community. CSP has
                    achieved renowned success providing tailored and customer
                    centric IT services to partners across many industries. CSP
                    simplifies and empowers companies with cutting edge threat
                    protection and IT services that keep organizations safe
                    24x7.
                  </p>
                  <h3>
                    <span className="br header-about">
                      {" "}
                      Our Founders Vision{" "}
                    </span>
                  </h3>
                  <p>
                    With our extensive range of Cyber Security services across
                    the entire spectrum, our primary mission is to deliver a
                    tailored and highly personalized service (a reputation we
                    are proudly known for among our clients!). At CSP, we invest
                    time and effort to fully understand each customer's unique
                    requirements and risk profiles. This enables us to craft
                    tailored and robust solutions that are both cost-effective
                    and resilient, allowing clients to concentrate on other
                    important aspects of the business. Our dedicated team of
                    cybersecurity professionals is committed to maximizing the
                    benefits of Microsoft's cloud ecosystem while ensuring
                    world-class security and compliance standards are expertly
                    managed.
                  </p>
                </div>
              </div>
              <div className="Empowering-right-img">
                <Image src={EmpoweringRight} alt="" />
              </div>
            </section>
            <section className="Unlocking-the-Full-Potential new-add">
              <div className="container">
                <div className="Unlocking-the-Full-Potential-middle">
                  <div className="Unlocking-the-Full-Potential-middle-left">
                    <Image src={visionOne} alt="" />

                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.whoweareheading,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.whowearetext,
                      }}
                    />

                    <div className="know-more BOOK-A-MEETING">
                      <a href="https://csp.expert/book" target="_blank">
                        BOOK A MEETING
                      </a>
                    </div>
                  </div>
                  <div className="Unlocking-the-Full-Potential-middle-left">
                    <Image src={visionTwo} alt="" />

                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.ourfounderheading,
                      }}
                    />

                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.foundervisiontext,
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="Callum_Golding_frame_about none">
              <div className="container">
                <div className="Callum_Golding_frame_about-middle">
                  <div className="Callum_Golding_frame_about-middle-left">
                    <h3>Meet Callum Golding and Shivam Malaviya</h3>
                    <h5>
                      <span>Visionary Leaders -</span> Leading the Charge
                      Towards a Secure Digital Future
                    </h5>
                    <ul>
                      <li>
                        <Image src={CallumGolding} alt="" />
                        <h4>Callum Golding</h4>
                      </li>
                      <li>
                        <Image src={ShivamMalaviya} alt="" />
                        <h4>Shivam Malaviya</h4>
                      </li>
                    </ul>
                  </div>
                  <div className="Callum_Golding_frame_about-middle-right">
                    <p>
                      Fueled by an unyielding passion for innovation, Callum
                      Golding and Shivam Malaviya embarked on a remarkable
                      journey that would redefine the security landscape and
                      founded CSP Lighthouse. With over three decades of
                      invaluable experience in the IT industry the pair not only
                      advocated, but also zealously deployed Microsoft's
                      cutting-edge cloud security technology, orchestrating a
                      paradigm shift in the way businesses operated. Under their
                      visionary leadership, enterprises evolved into secure,
                      mobile, and modern workplaces, effectively positioning
                      them for success in the digital age.
                    </p>
                    <p>
                      Their dedication extended beyond mere technological
                      advancements. The pair wholeheartedly embraced the mission
                      to fortify cybersecurity compliance, leveraging
                      established frameworks such as the Essential Eight, Zero
                      Trust, and NIST. This commitment to enhancing digital
                      security has not only safeguarded businesses but also
                      empowered employees to collaborate securely, fostering a
                      culture of trust and efficiency.
                    </p>
                    <p>
                      With a trailblazing legacy of accomplishments behind them,
                      this endeavor was fueled by the resounding success of
                      their previous initiatives, and they were determined to
                      share the benefits of the team's expertise with many more
                      organizations and take CSP global. CSP was rebranded as
                      CSP Global and CSP Lighthouse was born. With a desire to
                      help businesses fully harness the potential of Microsoft's
                      expansive cloud ecosystem while ensuring unwavering
                      security and regulatory compliance the vision was to
                      create a dedicated team of cyber and cloud experts who
                      shared their commitment to safeguarding digital estates
                      and supporting organizations in their quest for success in
                      a fast-evolving digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="Our-Values-middle-section-main">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.ourvaluesection,
                }}
              />
            </section>

            <section className="Unique-Approach-Simple-frame">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.ouruniqueapproach,
                }}
              />
            </section>

            <section className="Ignite-Cybersecurity-frame">
              <div className="Ignite-Cybersecurity-frame-img">
                <Image src={Cybersecurity} alt="" />
              </div>
              <div className="container">
                <div className="Ignite-Cybersecurity-frame-cont">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.achievemorewithless,
                    }}
                  />
                </div>
              </div>
            </section>
            <section className="team-section-about-page" id="our-team-se">
              <div className="container">
                <h3>Leadership Team</h3>
                <div className="team-section-middle top-new-frame">
                  <div className="team-section-middle-inner">
                    <h4>Callum Golding</h4>
                    <h5>Founder & CEO</h5>
                    <Image src={TeamOne} alt="" />
                    <div className="top-new-frame-hover">
                      <div className="top-new-frame-hover-inner2">
                        <h4>Callum Golding</h4>
                        <h5>Founder & CEO</h5>
                        <p>
                          With nearly two decades of experience in the IT
                          industry, Callum has been the driving force behind
                          CSP. His vision was to offer unparalleled IT services,
                          with cybersecurity taking centre stage. Under his
                          leadership, CSP evolved into a holistic service
                          provider delivering enablement and IT support,
                          compliance alignment, and 24x7 Managed Detection and
                          Response (MDR). In addition to managing the day-to-day
                          activities of the business, Callum actively
                          participates in uplifts and compliance projects,
                          staying at the coalface of technology developments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="team-section-middle-inner">
                    <h4>Shivam Malaviya</h4>
                    <h5>CTO & Co-founder</h5>
                    <Image src={TeamOneee} alt="" />
                    <div className="top-new-frame-hover">
                      <div className="top-new-frame-hover-inner2">
                        <h4>Shivam Malaviya</h4>
                        <h5>CTO & Co-founder</h5>
                        <p>
                          With a decade of expertise in cybersecurity, Shivam
                          brings extensive experience to our team. At Open
                          Systems, he successfully led a sizable SOC team before
                          co-founding CSP Lighthouse. As our Chief Technology
                          Officer (CTO), Shivam oversees and leads our Modern
                          Next-Gen Security Operation Centre, contributing his
                          skills and knowledge. He also provides Threat Hunting
                          and Intelligence services for our clients.
                        </p>
                        <p>
                          A dedicated Information Security professional, Shivam
                          has over 10 years of experience in SOC and Threat
                          Hunting. His commitment is evident in his ongoing
                          research, threat hunting strategies, and the
                          implementation of advanced security use cases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="team-section-middle-inner">
                    <h4>Tom Smith </h4>
                    <h5>Director of Sales Operations</h5>
                    <Image src={TeamTwwo} alt="" />
                    <div className="top-new-frame-hover">
                      <div className="top-new-frame-hover-inner2">
                        <h4>Tom Smith </h4>
                        <h5>Director of Sales Operations</h5>
                        <p>
                          Tom Smith is a veteran sales leader in the digital
                          software and consulting ecosystems. With successful
                          tenures leading global sales initiatives for; IBM,
                          Salesforce and Omnicom. His great passion is building
                          long standing relationships with customers through
                          transparent communication, detailed needs analysis and
                          providing valuable solutions that meet and exceed
                          expectation. Whether it be increasing ROI or improving
                          operational business processes for customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <h3>Our Team</h3>
                <div className="team-section-middle">
                  <div className="team-section-middle-inner">
                    <Image src={TeamSix} alt="" />
                    <h4>Tom Penfold</h4>
                    <h5>Senior Microsoft 365 Engineer</h5>
                    <p>
                      Tom is CSP's Senior Microsoft 365 Engineer. He brings a
                      wealth of knowledge to the entire team and supports them
                      as an escalation point. Tom is a Microsoft security and
                      productivity expert and has obtained the AZ-104 Microsoft
                      Azure Administrator qualification. His subject matter
                      expertise, and an incredible eye for high-quality
                      documentation, ensure that our internal and client
                      Knowledge Base is of the highest standard possible.
                    </p>
                  </div>
                  <div className="team-section-middle-inner">
                    <Image src={TeamTwo} alt="" />
                    <h4>Jacinta Ribény</h4>
                    <h5>Executive Assistant</h5>
                    <p>
                      Jacinta is a former elite gymnast and fitness instructor,
                      and is completing a bachelor's degree in journalism and
                      creative writing at the University of Adelaide. Jacinta
                      has been able to transfer her marketing and communication
                      skills to the workforce and apply them to her role as
                      Executive Assistant at CSP.
                    </p>
                  </div>
                  <div className="team-section-middle-inner">
                    <Image src={TeamFour} alt="" />
                    <h4>Jackie Ireland</h4>
                    <h5>Operations Manager</h5>
                    <p>
                      Jackie has 30+ years of experience working with a variety
                      of technology companies. She helps CSP continue to run as
                      efficiently and effectively as possible using a wide range
                      of SaaS automation and integration tools. As the backbone
                      of operations, she helps oversee our 24/7 global MDR
                      service and ensures our SOC team has all the resources
                      they need in their daily fight against cybercrime.
                    </p>
                  </div>
                </div>
                <div className="team-section-middle">
                  <div className="team-section-middle-inner">
                    <Image src={TeamFive} alt="" />
                    <h4>Corey Wilson</h4>
                    <h5>SOC Analyst</h5>
                    <p>
                      Corey is currently studying for a Bachelor of Networking
                      and Cybersecurity at the University of South Australia. He
                      enjoys researching the latest attacks in Cyberspace and
                      learning new mitigation strategies for responding to
                      emerging threats. Corey has been leveraging the Essential
                      Eight framework and learning various network analysis
                      skills during his studies. He is excited to put these
                      skills into action in his first cybersecurity role with
                      CSP.
                    </p>
                  </div>
                  <div className="team-section-middle-inner">
                    <Image src={TeamSeven} alt="" />
                    <h4>Monika Ahalawat</h4>
                    <h5>SOC Engineer </h5>
                    <p>
                      Meet Monika a seasoned cybersecurity professional with a
                      passion for excellence and a proven track record in
                      defending organizations against digital threats. With a
                      wealth of experience and a remarkable skill set, Monika is
                      our trusted guardian in the ever-evolving world of
                      cybersecurity. She specializes in conducting end-to-end
                      security incident investigations, analysis, and triage.
                      Her ability to excel in endpoint forensics and root cause
                      analysis has saved organizations from countless security
                      breaches.
                    </p>
                  </div>
                  <div className="team-section-middle-inner">
                    <Image src={TeamEight} alt="" />
                    <h4>Yashawant Singh</h4>
                    <h5>SOC Engineer</h5>
                    <p>
                      Meet Yashwant, a seasoned Security professional with a
                      passion for ensuring the seamless operation of
                      organizations digital infrastructure. With a wealth of
                      experience in managing user configurations, security, and
                      networking systems, Yashawant is our unwavering defender.
                      With a vigilant eye on incident and event monitoring,
                      Yashwant swiftly identifies and resolves issues to
                      minimize downtime and ensure a smooth operational flow. He
                      leverages Microsoft 365 and Azure security controls with
                      finesse, showcasing his in-depth knowledge of the security
                      landscape.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="Partners-about-sect">
              <div className="container">
                <h3>Partners</h3>
                <div className="Partners-about-sect-middle">
                  <div className="Partners-about-sect-middle-left">
                    <Image src={Adam} alt="" />
                  </div>
                  <div className="Partners-about-sect-middle-right ">
                    <h4
                      dangerouslySetInnerHTML={{
                        __html: post.ourpartnername1,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.ourpartnertext1,
                      }}
                    />
                  </div>
                </div>
                <div className="Partners-about-sect-middle">
                  <div className="Partners-about-sect-middle-left">
                    <a href="https://www.cyberops.com.au/" target="_blank">
                      <Image src={Cyberops} alt="" />
                    </a>
                  </div>
                  <div className="Partners-about-sect-middle-right ">
                    <a href="https://www.cyberops.com.au/" target="_blank">
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: post.ourpartnername2,
                        }}
                      />
                    </a>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.ourpartnertext2,
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        ))}
      </main>
    </>
  );
};

export default Posts;
