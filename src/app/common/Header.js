import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Main from "../img/logo.png";
import MenuImage from "../img/Menu-Image.jpg";
import One from "../img/Strategy-and-Advisory.png";
import Two from "../img/Defence-Industry-Security-Program.png";
import Three from "../img/Cyber-Security-Uplift.png";
import Four from "../img/GovernanceRisk-and-Compliance.png";
import Five from "../img/Vulnerability-Assessments.png";
import Six from "../img/Threat-Intelligence.png";
import MobileMenu from "../common/MobileMenu.js";

function IndexPage() {
  return (
    <>
      <div className="navbar-main-frame">
        <div className="container">
          <div className="navbar-menu">
            <div className="logo-frame-header">
              <Link href="/">
                <Image src={Main} alt="" />
              </Link>
            </div>
            <div className="header-menubar-middle">
              <ul>
                <li>
                  <Link href="/about">About Us </Link>
                  <div class="dropdown-content">
                    <Link href="/about#our-team-se">Meet The Team</Link>
                  </div>
                </li>
                <li>
                  <Link href="/">Services</Link>
                  <div class="dropdown-content Services-menu new">
                    <div className="dropdown-content-Services-menu-middle ">
                      <div className="dropdown-content-Services-menu-middle-left">
                         <ul className="new-droup-down-middle">
                          <li>
                          <Link href="/technology-service-provider">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={One} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Strategy and <br/>Advisory </h3>
                                     <p>Strategic guidance bridging business goals and technology.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                          <li>
                          <Link href="https://blog.csp.global/preparing-for-disp-eligibility-aligning-with-essential-eight-maturity-level-two/">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Two} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Defence Industry <br/>Security Program </h3>
                                     <p>Get DISP-ready with enhanced technology and controls.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                          <li>
                          <Link href="/security-uplifts">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Three} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Cyber Security <br/>Uplift</h3>
                                     <p>Significantly improve device, data and identity posture.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                         
                         </ul>
                      </div>
                      <div className="dropdown-content-Services-menu-middle-left">
                      <ul className="new-droup-down-middle">
                          <li>
                          <Link href="/technology-service-provider">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Four} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Governance, Risk <br/>and Compliance </h3>
                                     <p>Manage risk and meet regulatory compliance obligations.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                          <li>
                          <Link href="/technology-service-provider">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Five} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Vulnerability <br/>Assessments</h3>
                                     <p>Continuously scan for vulnerabilities within your ecosystem.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                          <li>
                          <Link href="/technology-service-provider">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Six} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Threat <br/>Intelligence</h3>
                                     <p>Understand the threat landscape with unparalleled precision.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                         
                         </ul>
                      </div>
                      <div className="dropdown-content-Services-menu-middle-left right-head-menu">
                        <div className="right-head-menu-main-PRODUCT-TOUR">
                          <Image src={MenuImage} alt="" />
                          <div className="text">
                            <p className="eyebrow">Product Tour</p>
                            <p className="title">Lighthouse MXDR Platform</p>

                            <Link
                              className="button button-small"
                              href="/lighthouse-platform"
                            >
                              Take the Tour
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link href="/success-stories">Success Stories</Link>
                </li>
                
                <li>
                  <Link href="#">Resources</Link>
                  <div class="dropdown-content max">
                  <Link href="https://blog.csp.global">Blog</Link>
                    <a
                      target="_blank"
                      href="https://cms.csplighthouse.com/public/uploads/Feature-Comparison-Matrix.pdf"
                    >
                      Feature Comparison Matrix
                    </a>
                    <a
                      target="_blank"
                      href="https://cms.csplighthouse.com/public/uploads/CSP-datasheet.pdf"
                    >
                      Datasheet
                    </a>
                    <a
                      target="_blank"
                      href="https://blog.csp.global/wp-content/uploads/2024/10/South-Australia-Globally-Connected.pdf"
                    >
                      South Australia - Globally Connected
                    </a>
                  </div>
                </li>

              </ul>
            </div>
            <div className="header-menubar-right">
              <Link href="/contact">Contact US</Link>
            </div>
            <div className="Mobile_menu">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
