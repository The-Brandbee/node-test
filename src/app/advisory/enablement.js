"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Rain } from "react-rainfall";
import Head from "next/head";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import TestimonialSlide from "../common/TestimonialSlide.js";
import EmpoweringOrganizations from "../common/EmpoweringOrganizations.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import Cybersecurity from "../img/enablement-banner-3.jpg";
import CybersecurityMobile from "../img/enablement-banner-3.jpg";
import CybersecurityT from "../img/Adoption.png";
import CybersecurityMobileT from "../img/Adoption.png";
import Securityone from "../img/Microsoft-icon-1.png";
import Securitytwo from "../img/Microsoft-icon-2.png";
import Securitythree from "../img/Microsoft-icon-3.png";
import Securityfour from "../img/Microsoft-icon-4.png";
import Securityfive from "../img/Microsoft-icon-5.png";
import Securitysix from "../img/Microsoft-icon-6.png";
import Securityseven from "../img/Microsoft-icon-7.png";
import Securityeight from "../img/Microsoft-icon-8.png";
import EmpoweringRight from "../img/Organizations.png";
import Main from "../img/logo.png";
import People from "../img/people.jpg";
import EmpoweringRightMail from "../img/CSP-WEBSITE-ILLUSTRATION.jpg";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import Frameworkbanner from "../img/enablement-banner.jpg";
import Slidemdrenablement from "../common/SlidemdrThree.js";

export default function Home() {
  const [dataNew, setDataNew] = useState("");
  // Call the API and log the data to the console
  const fetchData = async () => {
    const response = await fetch("");
    const data = await response.json();
    setDataNew(data[0]);
    console.log(data[0]);
    console.log(data[0].bannerheading);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
      <main className="cybersecurityframework-main-page enablement-main-page-list">
        <header>
          <Header />
          <div className="Inner-page-banner-frame">
            <Image src={Frameworkbanner} alt="" />
          </div>
          <div className="container">
            <div className="about-bannner-contact Modern-SOC-main">
              <h3>Enablement</h3>
            </div>
          </div>
        </header>

        <section className="The-Future-of-ICT-frame">
          <div className="container">
            <div className="The-Future-of-ICT-frame-top">
              <h3>THE FUTURE OF ICT MANAGED SERVICES</h3>
              <h5>Synergistic, Strategic, and Secure</h5>
              <p>
              At CSP, we did do not fit the traditional Managed Service Provider or “MSP” mould. We realize that to withstand the pressures of running a hybrid cloud digital ecosystem, organizations need more than just a help desk and occasional site visits. They need a TSP or Technology Solutions Provider. Here are the key benefits.
              </p>
            </div>
            <div className="The-Future-of-ICT-frame-bottom">
              <ul>
                <li>
                  <h4>Strategic Advice:</h4>
                  <p>
                    Enhanced strategic advice translates technological solutions
                    into solving real business challenges, ensuring alignment
                    with organizational objectives.
                  </p>
                </li>
                <li>
                  <h4>Governance Frameworks:</h4>
                  <p>
                    Utilizing framework-based approaches ensures professionalism
                    and enables clear measurement of compliance and success,
                    establishing a strong foundation for cybersecurity
                    initiatives.
                  </p>
                </li>
                <li>
                  <h4>Transparency:</h4>
                  <p>
                    Embracing transparency fosters trust and collaboration,
                    enabling staff to make well-informed decisions and providing
                    easily accessible reporting and solutions that are
                    sanctioned within the bounds of company policy.
                  </p>
                </li>
                <li>
                  <h4>Productivity Enhancement:</h4>
                  <p>
                    Shifting focus from reactive support to proactive enablement
                    promotes education, self-service, and technology
                    implementation to enhance productivity, such as using new AI
                    (Microsoft Copilot) technology.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="Does-it-Work-frame Enablement-ex" id="nist">
          <div className="container">
            <div className="Does-it-Work-frame-middle">
              <div className="Does-it-Work-frame-middle-left">
                <h3>
                  {/*<span>ENABLEMENT</span> <br /> */}
                  ENABLEMENT
                </h3>
                <h5>Data Security & Information Protection</h5>
                <p>
                  In today's digital landscape, protecting sensitive information
                  is paramount. CSP Global understands the escalating threats
                  and provides comprehensive cybersecurity services to address
                  these challenges effectively.
                </p>
              </div>
              <div className="Does-it-Work-frame-middle-right">
                <Slidemdrenablement />
              </div>
            </div>
          </div>
        </section>

        <section className="Ignite-Cybersecurity-frame">
          <div className="Ignite-Cybersecurity-frame-img">
            <Image src={Cybersecurity} alt="" className="desktop" />
            <Image src={CybersecurityMobile} alt="" className="mobile" />
          </div>
          <div className="container">
            <div className="Ignite-Cybersecurity-frame-cont">
              <h3 class="ho-heading">
                Insider Threats and Data
                <span class="br">Loss Prevention:</span>
              </h3>
              <p>
                Insider risks are often overlooked but pose a significant threat
                to organizational security. While external threats like hackers
                and phishing scams garner attention, nearly two-thirds of data
                breach incidents originate from insiders. These insiders,
                unintentionally or maliciously, compromise data integrity,
                highlighting the importance of addressing internal
                vulnerabilities.
              </p>
            </div>
          </div>
        </section>
        <section className="Understanding-the-Need">
          <div className="container">
            <div className="Understanding-the-Need-top">
              <div className="Understanding-the-Need-top-left">
                <h5>
                  Understanding the Need for Insider Threats and Data Loss
                  Prevention
                </h5>
              </div>
              <div className="Understanding-the-Need-top-right">
                <ul>
                  <li>
                    Insider risks, responsible for nearly two-thirds (63%) of
                    data breach incidents, often take a backseat to external
                    threats, leading to security gaps.
                  </li>
                  <li>
                    External threats like hackers and phishing scams are often
                    prioritized, while insider risks are overlooked, leading to
                    gaps in security protocols.
                  </li>
                  <li>
                    Top indicators of user risk include the use of unauthorized
                    applications, weak password practices, and suspicious data
                    access patterns.
                  </li>
                </ul>
              </div>
            </div>
            <div className="Understanding-the-Need-top">
              <div className="Understanding-the-Need-top-left">
                <h5>
                  CSP Global's Approach to Insider Threats and Data Loss
                  Prevention
                </h5>
              </div>
              <div className="Understanding-the-Need-top-right">
                <ul>
                  <li>
                    At CSP Global, we recognize the criticality of mitigating
                    insider threats and preventing data loss.
                  </li>
                  <li>
                    Our comprehensive approach involves proactive monitoring,
                    threat detection, and behavior analysis to identify and
                    address potential risks from within.
                  </li>
                  <li>
                    Through robust security protocols, user training, and
                    advanced technologies, we empower organizations to safeguard
                    sensitive data and mitigate the impact of insider threats.
                  </li>
                </ul>
              </div>
            </div>

            <div className="Understanding-the-Need-top mbottom">
              <div className="Understanding-the-Need-top-left">
                <h5>Top Indicators of User Risk</h5>
              </div>
              <div className="Understanding-the-Need-top-right">
                <ul>
                  <li>Unauthorized application usage</li>
                  <li>Violations of corporate or regulatory policies</li>
                  <li>Weak password practices</li>
                  <li>Renaming files for concealed exfiltration</li>
                  <li>Involvement in highly confidential projects</li>
                  <li>Recent changes in job roles or responsibilities</li>
                  <li>Suspicious data access patterns</li>
                  <li>Increasing access permissions over time</li>
                  <li>Uploading data to USB or personal drives</li>
                  <li>Recent resignation submissions</li>
                  <li>Data exfiltration attempts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="Security-Posture-frame enablement">
          <div className="container">
            <div className="Security-Posture-frame-top">
              <div className="Security-Posture-frame-top-left">
                <h4>
                  Microsoft <span>365 Copilot</span>
                </h4>
              </div>
              <div className="Security-Posture-frame-top-right">
                <p>
                  At CSP Global, we understand the importance of harnessing
                  cutting-edge technologies to drive innovation and efficiency
                  in your organization. One such transformative tool we offer is
                  Microsoft 365 Copilot, designed to revolutionize the way you
                  manage and optimize your Microsoft 365 environment. Here's how
                  CSP Global enables and leverages Microsoft 365 Copilot to
                  empower your business:
                </p>
              </div>
            </div>
            <div className="Security-Posture-frame-bottom">
              <ul>
                <li>
                  <Image src={Securityone} alt="" />
                  <h4>Revenue Growth:</h4>
                  <p>
                    Implementation of Microsoft Copilot for Microsoft 365 can
                    drive revenue growth by up to 4%, boosting win rates,
                    accelerating time-to-market for new offerings, and
                    expediting the creation of sales proposals. Over three
                    years, this could lead to a net income increase ranging from
                    $7.5 million to $35.6 million.
                  </p>
                </li>
                <li>
                  <Image src={Securitytwo} alt="" />
                  <h4>Operational Efficiency:</h4>
                  <p>
                    Microsoft Copilot for Microsoft 365 enables operational
                    transformations, potentially reducing total expenditures by
                    up to 0.7%. Through improved worker productivity and supply
                    chain efficiencies, organizations can achieve significant
                    cost savings, totaling a projected $27.6 million to $56.7
                    million over three years, thereby increasing the net margin.
                  </p>
                </li>
                <li>
                  <Image src={Securitythree} alt="" />
                  <h4>People and Organizational Transformation:</h4>
                  <p>
                    Adoption of Microsoft Copilot for Microsoft 365 can
                    streamline new-hire onboarding processes by up to 30%,
                    enhancing employee satisfaction and retention. Faster
                    onboarding minimizes managerial time spent on training new
                    hires. Over three years, this could translate to savings
                    ranging from $946,000 to $2.1 million.
                  </p>
                </li>
                <li>
                  <Image src={Securityfour} alt="" />
                  <h4>Enhanced Diversity and Inclusion:</h4>
                  <p>
                    Microsoft Copilot for Microsoft 365 promotes diversity and
                    inclusion by incorporating diverse input and examples into
                    work processes, fostering a more equitable workplace.
                  </p>
                </li>
                <li>
                  <Image src={Securityfive} alt="" />
                  <h4>Improved Work-Life Balance:</h4>
                  <p>
                    By automating mundane tasks, Copilot reduces workloads,
                    allowing employees to allocate more time to meaningful and
                    creative endeavours, thereby improving work-life balance.
                  </p>
                </li>
                <li>
                  <Image src={Securitysix} alt="" />
                  <h4>Enhanced Compliance and Security:</h4>
                  <p>
                    Copilot ensures sensitive information remains within the
                    organization's business tenant, mitigating the risk of
                    proprietary data exposure and ensuring compliance with
                    security protocols.
                  </p>
                </li>
                <li>
                  <Image src={Securityseven} alt="" />
                  <h4>Implementation Expenses:</h4>
                  <p>
                    Initial deployment requires 10 full-time equivalent
                    employees (FTEs) for technical and change management
                    efforts, with ongoing management necessitating six FTEs.
                    Additionally, professional services from Microsoft partners
                    are utilized, resulting in a total implementation cost of
                    $5.5 million over the study period.
                  </p>
                </li>
                <li>
                  <Image src={Securityeight} alt="" />
                  <h4>Training and Employee Development:</h4>
                  <p>
                    Employee training on Copilot usage and best practices incurs
                    a cost of $5.7 million over three years. This includes
                    creating and disseminating training content, as well as user
                    onboarding and subsequent training sessions.
                  </p>
                </li>
              </ul>
            </div>
            <div className="last-p-admis">
              <p>
                These combined benefits, along with careful consideration of
                associated costs, highlight the transformative potential of
                Microsoft Copilot for Microsoft 365 in enhancing organizational
                productivity and efficiency.
              </p>
            </div>
          </div>
        </section>
        <section className="Managed-Detection-frame">
          <div className="container">
            <div className="Managed-Detection-frame-top-heading">
              <h3 className="ho-heading">
                Sharing and Collaboration
                <span className="br">with CSP Global</span>
              </h3>
              <p>
                In today's interconnected digital landscape, secure sharing and
                collaboration are imperative for organizations to thrive. CSP
                Global empowers businesses to leverage sharing and collaboration
                tools while ensuring robust cybersecurity measures. Here's how
                we enable secure sharing and collaboration:
              </p>
            </div>
            <div className="Managed-Detection-frame-middle">
              <div className="Managed-Detection-frame-middle-left">
                <h5>Secure Collaboration Platforms:</h5>
                <p>
                  According to a report, 67% of breaches are caused by
                  credential theft, errors, and social attacks, highlighting the
                  critical need for secure collaboration tools. CSP implements
                  secure collaboration platforms such as Microsoft Teams,
                  SharePoint, and OneDrive, providing a seamless and protected
                  environment for teams to collaborate effectively.
                </p>
              </div>
              <div className="Managed-Detection-frame-middle-left">
                <h5>Data Encryption and Access Controls:</h5>
                <p>
                  We enforce data encryption and access controls to safeguard
                  sensitive information shared across platforms, ensuring that
                  only authorized users can access and interact with data.
                </p>
              </div>
            </div>
            <div className="Managed-Detection-frame-middle">
              <div className="Managed-Detection-frame-middle-left">
                <h5>Threat Detection and Response:</h5>
                <p>
                  The average cost of insider threats per year is $11.45
                  million, emphasizing the need for proactive threat detection
                  mechanisms. CSP Global employs advanced threat detection
                  technologies to monitor sharing and collaboration platforms
                  for suspicious activities or unauthorized access attempts.
                </p>
              </div>
              <div className="Managed-Detection-frame-middle-left">
                <h5>User Training and Awareness:</h5>
                <p>
                  The 2021 Data Breach Investigations Report by Verizon found
                  that 85% of breaches involved a human element, highlighting
                  the importance of user education in mitigating security risks.
                  We conduct regular user training sessions to educate employees
                  about secure sharing practices, raising awareness about
                  potential cybersecurity risks associated with collaboration
                  tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="Leveraging-Microsoft-Adoption">
          <div className="container">
            <div className="Leveraging-Microsoft-Adoption-top">
              <h3>
                Leveraging Microsoft Adoption Score{" "}
                <span>for Measuring Enablement</span>
              </h3>
              <p>
                The Adoption Score comprises a suite of metrics and tools
                designed to provide organizations with comprehensive visibility
                into their utilization of Microsoft 365. It facilitates insights
                into areas for enhancing user experiences and enables proactive
                action through targeted messages delivering tips and best
                practices to users.
              </p>
              <p>
                Microsoft Adoption Score serves as a pivotal tool for CSP Global
                in assessing and measuring enablement within organizations. By
                harnessing the insights provided by Adoption Score, we empower
                businesses to optimize their usage of Microsoft 365, thereby
                maximizing productivity and driving digital transformation.
                Here's how CSP Global utilizes Microsoft Adoption Score to
                measure and elevate enablement:
              </p>
            </div>
            <div className="Leveraging-Microsoft-Adoption-bottom">
              <div className="Leveraging-Microsoft-Adoption-bottom-left">
                <h4>People Experiences</h4>
                <p>
                  The people experiences encompass five categories aimed at
                  quantifying the organization's operational dynamics.
                </p>
                <ul>
                  <li>
                    <span>Communication:</span> Analyze how information flows
                    through email, chat, and community platforms to foster
                    collaboration and cohesion.
                  </li>
                  <li>
                    <span>Content Collaboration:</span> Evaluate cloud-based
                    content creation and collaboration to streamline workflows
                    and enhance efficiency.
                  </li>
                  <li>
                    <span>Mobility: </span> Assess file accessibility and
                    productivity tool usage across platforms, ensuring seamless
                    productivity irrespective of location.
                  </li>
                  <li>
                    <span>Meetings:</span> Examine meeting practices to improve
                    their quality and effectiveness, enhancing overall
                    organizational efficiency.
                  </li>
                  <li>
                    <span>Teamwork:</span> Gauge the utilization of shared
                    workspaces such as SharePoint and Microsoft Teams, promoting
                    cohesive teamwork and collaboration.
                  </li>
                </ul>
              </div>
              <div className="Leveraging-Microsoft-Adoption-bottom-right">
                <Image src={People} alt="" className="" />
              </div>
            </div>
          </div>
        </section>

        <section className="Leveraging-Microsoft-Adoption Group">
          <div className="container">
            <div className="Leveraging-Microsoft-Adoption-bottom">
              <div className="Leveraging-Microsoft-Adoption-bottom-right">
                <Image src={People} alt="" className="" />
              </div>
              <div className="Leveraging-Microsoft-Adoption-bottom-left">
                <h4>Group Level Aggregates</h4>
                <p>
                  Group Level Aggregates provide valuable insights into adoption
                  trends across diverse organizational groups, enabling targeted
                  support and guidance. At CSP Global, we leverage this feature
                  to segment Adoption Score People experiences metrics based on
                  Azure Active Directory attributes, empowering our clients to:
                </p>
                <ul>
                  <li>
                    Compare adoption insights among different groups to identify
                    those excelling in usage best practices and those requiring
                    additional support.
                  </li>
                  <li>
                    Direct attention to specific groups within your organization
                    to pinpoint areas for enhancing the adoption of usage best
                    practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="Leveraging-Microsoft-Adoption">
          <div className="container">
            <div className="Leveraging-Microsoft-Adoption-bottom">
              <div className="Leveraging-Microsoft-Adoption-bottom-left">
                <h4>
                  Organizational Messages and <br />
                  Experience Insights
                </h4>

                <ul>
                  <li>
                    <span>Empowering Users:</span> CSP Global utilizes
                    Organizational Messages to deliver timely and targeted
                    guidance to users, enabling them to leverage best practices
                    and optimize feature utilization seamlessly within their
                    workflow. Empower your workforce with personalized messages
                    tailored to their adoption journey, fostering a culture of
                    continuous learning and productivity enhancement.
                  </li>
                  <li>
                    <span>Enhanced Visibility:</span> With Experience Insights,
                    CSP Global gains comprehensive visibility into user
                    sentiment, helps article consumption, and application usage
                    patterns, empowering proactive identification and resolution
                    of productivity barriers and user frustrations.
                  </li>
                </ul>
              </div>
              <div className="Leveraging-Microsoft-Adoption-bottom-right">
                <Image src={People} alt="" className="" />
              </div>
            </div>
          </div>
        </section>
        <section className="Ignite-Cybersecurity-frame gooter">
          <div className="Ignite-Cybersecurity-frame-img">
            <Image src={CybersecurityT} alt="" className="desktop" />
            <Image src={CybersecurityMobileT} alt="" className="mobile" />
          </div>
          <div className="container">
            <div className="Ignite-Cybersecurity-frame-cont">
              <h3 class="ho-heading">
                Do more with less by leveraging CSP's enablement and adoption
                service here.
              </h3>
              <p>
                <Link href="/contact">Get in Touch</Link>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
