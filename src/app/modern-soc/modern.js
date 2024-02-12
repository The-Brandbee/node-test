"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../img/modern-soc-banner.jpg";
import BenefitsOne from "../img/Dynamic-1.png";
import BenefitsTwo from "../img/Dynamic-2.png";
import BenefitsThree from "../img/Dynamic-3.png";
import BenefitsFour from "../img/Dynamic-4.png";
import BenefitsFive from "../img/Dynamic-5.png";
import BenefitsSix from "../img/Dynamic-6.png";
import ModernOne from "../img/Modern-1.png";
import ModernTwo from "../img/Modern-2.png";
import ModernThree from "../img/Modern-3.png";
import ModernFour from "../img/Modern-4.png";
import ModernFive from "../img/Modern-5.png";
import Eliminate from "../img/Eliminate.png";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function modernsoc() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="About-us-page modernsoc-page-new">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={About} alt="" />
          </div>
          <div className="container">
            <div className="about-bannner-contact Modern-SOC-main">
              <h3>Modern SOC</h3>
            </div>
          </div>
        </header>
        <section className="Detection-Response-page">
          <div className="container">
            <div className="Detection-Response-page-middle">
              <div className="Detection-Response-page-middle-left">
                <p>
                  The Classic Approach to Security Operations and its Challenges
                </p>
              </div>
              <div className="Detection-Response-page-middle-left">
                <p>
                  In the classic approach to security operations, the focus was
                  primarily on accumulating vast amounts of activity and event
                  data from the digital environment. This data was funnelled
                  into Security Incident & Event Management (SIEM) systems, an
                  essential foundational step. However, it often led to a
                  significant challenge: "Collection is not detection."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="classic-approach-yielded-frame">
          <div className="container">
            <div className="Eliminate-Complexity-main">
              <div className="Eliminate-Complexity-main-left">
                <h4>Issue:</h4>
                <p>
                  The classic approach yielded extensive datasets but often
                  lacked actionable insights.
                </p>
              </div>
              <div className="Eliminate-Complexity-main-left">
                <h4>Queries:</h4>
                <p>
                  Human analysts created queries to identify malicious attacks.
                </p>
              </div>
              <div className="Eliminate-Complexity-main-left">
                <h4>Drawback:</h4>
                <p>
                  Static queries struggled to keep up with dynamic cyber
                  threats.
                </p>
              </div>
            </div>
            <div className="Eliminate-Complexity-main">
              <div className="Eliminate-Complexity-main-left">
                <h4>False Positives:</h4>
                <p>These queries generated numerous false positive alerts.</p>
              </div>
              <div className="Eliminate-Complexity-main-left">
                <h4>Impact:</h4>
                <p>
                  False alarms consumed valuable analyst time, diverting them
                  from real security incidents.
                </p>
              </div>
              <div className="Eliminate-Complexity-main-left"></div>
            </div>
          </div>
        </section>
        <section className="Human-Centric-Security-frame">
          <div className="Eliminate-img">
            <Image src={Eliminate} alt="" />
          </div>
          <div className="container">
            <div className="Human-Centric-Security-frame-top">
              <div className="Human-Centric-Security-frame-top-left">
                <h3>
                  SOC <span>2.0</span>
                </h3>
                <h5>
                  Where Human-Centric <br />
                  Security Operations <br />
                  Meets
                  <span> Modern Threats</span>
                </h5>
              </div>
              <div className="Human-Centric-Security-frame-top-right">
                <p>
                  SOC 2.0 represents the evolution of security operations,
                  rooted in a human-centric approach that leverages technology
                  to augment human capabilities. It acknowledges the dynamic
                  nature of multi-cloud and hybrid environments and the constant
                  threat posed by adaptable human attackers and their automated
                  tools.
                </p>
              </div>
            </div>
            <div className="Inspired-by-Various-Disciplines">
              <div className="Inspired-by-Various-Disciplines-left">
                <h3>Human-Centric:</h3>
                <p>
                  Empowers security professionals with technology rather than
                  replacing them.
                </p>
                <h3>Key Metrics:</h3>
                <p>
                  Introduces metrics for aligning security operations with
                  organizational risk goals:
                </p>
                <p>
                  <span>Effectiveness (MTTR):</span> Mean Time to Remediate
                  (MTTR) measures the speed of risk mitigation.
                </p>
                <p>
                  <span>Responsiveness (MTTA):</span> Mean Time to Acknowledge
                  (MTTA) tracks human response time to detection alerts.
                </p>
                <p>
                  <span>Alert Quality:</span> Focuses on maintaining
                  high-quality alert feeds to prevent false positives.
                </p>
              </div>
              <div className="Inspired-by-Various-Disciplines-right">
                <h3>Inspired by Various Disciplines:</h3>
                <p>
                  Draws inspiration from military doctrine, fighter combat,
                  psychology, and more.
                </p>
                <h3>Proactive Threat Hunting:</h3>
                <p>
                  Involves hypothesis-driven exploration of data sources to seek
                  undetected adversaries, enhancing overall security posture.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Transforming-Cybersecurity-Investigations">
          <div className="container">
            <div className="Transforming-Cybersecurity-Investigations-top">
              <h2>Modern SOC:</h2>
              <h3>Transforming Cybersecurity Investigations</h3>
              <p>
                In the constantly evolving world of cybersecurity, the Modern
                Security Operations Center (SOC) represents a significant
                paradigm shift in how we approach and address security
                challenges. Unlike its predecessors, the Modern SOC isn't just
                about tools and processes; it's a holistic transformation in how
                we investigate and respond to security threats, and it promises
                to be a game-changer. Modern SOC is a transformative evolution
                in security operations, emphasizing agility, integration,
                collaboration, visibility, and proactive threat prevention. With
                its ability to respond swiftly to emerging threats, it offers
                organizations a resilient defence against the ever-evolving
                landscape of cyber risks.
              </p>
              <h6>
                This new model takes into account the realities of a Modern
                Workplace:
              </h6>
            </div>
            <div className="Transforming-Cybersecurity-Investigations-middle">
              <ul>
                <li>
                  <Image src={ModernOne} alt="" />
                  <p>
                    Global and distributed <br />
                    workforces
                  </p>
                </li>
                <li>
                  <Image src={ModernTwo} alt="" />
                  <p>
                    Multiple home/office <br />
                    networks
                  </p>
                </li>
                <li>
                  <Image src={ModernThree} alt="" />
                  <p>
                    Sharing and external <br />
                    Collaboration
                  </p>
                </li>
                <li>
                  <Image src={ModernFour} alt="" />
                  <p>
                    Multi-cloud <br />
                    access
                  </p>
                </li>
                <li>
                  <Image src={ModernFive} alt="" />
                  <p>
                    Abundance of <br />
                    devices and IoT
                  </p>
                </li>
              </ul>
            </div>
            <div className="Transforming-Cybersecurity-Investigations-bottom">
              <p>
                At CSP we are constantly evolving while remaining true to our
                mission: which is to empower you to do more with less. The next
                paradigm shift, and our vision for the future, is combining
                Microsoft Security Copilot with user-engagement. Taking lessons
                from nudge theory and choice architecture we have evolved modern
                methods for SOC to user interation and transformed the way our
                cyberteam interact and protect the digital worker.
              </p>
              <p>
                CSP have developed an end user-integrated system. This can be
                run by our security analysts to prompt workers within Microsoft
                Teams and email and verify if the worker did perform certain
                activities, such as This gives the workforce greater to
                possibilities to engage with the Modern Workplace, while giving
                the IT team the ability to verify and distinguish legitimate and
                known actions from malicious anomolies.
              </p>
            </div>
          </div>
        </section>
        <section className="Benefits-of-mdr-frame">
          <div className="container">
            <div className="Benefits-of-mdr-frame-middle">
              <div className="Benefits-of-mdr-frame-middle-top">
                <h6>
                  Here's how Modern SOC is different and better than previous
                  approaches:
                </h6>
              </div>
              <div className="Benefits-of-mdr-frame-middle-bottom">
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsOne} alt="" />
                  <h4>Dynamic Adaptability:</h4>
                  <p>
                    Modern SOC stands out by its inherent flexibility and
                    adaptability. Unlike traditional security operations that
                    often rely on static procedures, Modern SOC thrives in a
                    dynamic environment. It's designed to evolve with the
                    ever-changing threat landscape, ensuring that organizations
                    remain prepared for new and emerging threats.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsTwo} alt="" />
                  <h4>Integrated Approach:</h4>
                  <p>
                    One of the key distinctions of Modern SOC is its integration
                    of advanced technologies. It leverages state-of-the-art
                    solutions like Microsoft Security Copilot to create a
                    unified and seamless approach to cybersecurity
                    investigations. This integration eliminates the need to jump
                    between multiple tools, simplifying the investigative
                    process and improving efficiency.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsThree} alt="" />
                  <h4>Real-time Collaboration:</h4>
                  <p>
                    Collaboration is at the heart of Modern SOC. The Copilot
                    introduces real-time collaboration features, allowing
                    security teams to work together efficiently. This real-time
                    collaboration is crucial in responding to advanced threats,
                    ensuring that insights are shared promptly and enabling a
                    united response to potential security incidents.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsFour} alt="" />
                  <h4>Enhanced Visibility:</h4>
                  <p>
                    Modern SOC ensures comprehensive visibility across an
                    organization's security landscape. By consolidating data
                    from various sources, it offers an extensive view of
                    potential threats. This heightened visibility streamlines
                    the identification of security issues, enabling security
                    teams to proactively detect and mitigate risks.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsFive} alt="" />
                  <h4>Proactive Threat Detection:</h4>
                  <p>
                    Leveraging advanced technologies such as artificial
                    intelligence (AI) and machine learning, Modern SOC enhances
                    threat detection. By analyzing historical data and patterns,
                    it allows for the proactive identification of anomalies and
                    security risks. This approach paves the way for a robust
                    threat prevention strategy.
                  </p>
                </div>
                <div className="Benefits-of-mdr-frame-middle-bottom-left">
                  <Image src={BenefitsSix} alt="" />
                  <h4>Efficient Incident Response:</h4>
                  <p>
                    In the fast-paced world of cybersecurity, time is of the
                    essence. Modern SOC streamlines workflows, automating manual
                    tasks and enabling faster responses to security incidents.
                    This not only reduces potential damage but also fortifies an
                    organization's overall security posture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
