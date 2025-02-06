import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "../img/Strategy-and-Advisory.png";
import Two from "../img/Defence-Industry-Security-Program.png";
import Three from "../img/Cyber-Security-Uplift.png";
import Four from "../img/GovernanceRisk-and-Compliance.png";
import Five from "../img/Vulnerability-Assessments.png";
import Six from "../img/Threat-Intelligence.png";
import Seven from "../img/Managed-IT-Services.png";
import Eight from "../img/Managed-SOC.png";
import Nine from "../img/AI-Readiness.png";
import { slide as Menu } from "react-burger-menu";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

class MobileMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="mobile-menu-header">
        <div className="container--">
          <div className="col-md-10--">
            <div className="dropdown mobilemenu-new">
              <Menu>
                <Accordion allowZeroExpanded>
                  <AccordionItem>
                    <Link href="/">
                      <AccordionItemHeading>
                        <AccordionItemButton>Home</AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>About Us</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/about#our-team-se">Meet The Team</Link>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Services</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <ul className="new-droup-down-middle mobile">
                    <li>
                          <Link href="/technology-service-provider">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Seven} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Managed IT Services </h3>
                                     <p>Technology support and IT management that drives innovation.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                          <li>
                          <Link href="/mdr">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Eight} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>Managed Detection and Response</h3>
                                     <p>Protect your assets with managed detection and response.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
                          <li>
                          <Link href="/ai-readiness">
                              <div className="new-droup-down-main">
                                  <div className="new-droup-down-main-left">
                                     <Image src={Nine} alt="" />
                                  </div>
                                  <div className="new-droup-down-main-right">
                                     <h3>AI Readiness </h3>
                                     <p>Prepare for AI and Intelligent Automation within your industry.</p>
                                  </div>
                              </div>
                            </Link> 
                          </li>
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
                    
                     
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <Link href="https://csp.global/success-stories">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Success Stories
                        </AccordionItemButton>
                      </AccordionItemHeading>
                    </Link>
                  </AccordionItem>

                  

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Resources</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li>
                          <a href="https://blog.csp.global/">
                          Blog
                    </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://cms.csplighthouse.com/public/uploads/Feature-Comparison-Matrix.pdf"
                            >
                              Feature Comparison Matrix
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://cms.csplighthouse.com/public/uploads/CSP-datasheet.pdf"
                            >
                              Datasheet
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://blog.csp.global/wp-content/uploads/2024/10/South-Australia-Globally-Connected.pdf"
                            >
                              South Australia - Globally Connected
                            </a>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                   
                  </AccordionItem>
                  <AccordionItem>
                    <a href="/contact">
                      <AccordionItemHeading>
                        <AccordionItemButton>Contact US</AccordionItemButton>
                      </AccordionItemHeading>
                    </a>
                  </AccordionItem>
                </Accordion>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
