import React, { Component } from "react";
import Link from "next/link";

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
                      <div className="Menu-underLink">
                        <div className="Menu-underLink-heading">
                          <h4>Detect & Respond (24x7)</h4>
                          <p>
                            Next-generation security operations geared for the
                            Modern Workplace with the latest AI Technology
                          </p>
                        </div>
                        <ul>
                          <li>
                            <Link href="/mdr">
                              Managed Detection and Response
                            </Link>
                          </li>
                          <li>
                            <Link href="/modern-soc">
                              What is a Modern SOC?
                            </Link>
                          </li>
                        </ul>

                        <div className="Menu-underLink-heading">
                          <h4>Protect & Enable</h4>
                          <p>
                            Professional Services and compliance alignment to
                            mitigate risks and reduce the attack surface area
                          </p>
                        </div>

                        <ul>
                          <li>
                            <Link href="/security-uplifts">
                              Security Uplifts
                            </Link>
                          </li>
                          <li>
                            <Link href="/enablement">Enablement</Link>
                          </li>
                          <li>
                            <Link href="/frameworks">Cyber Frameworks</Link>
                          </li>
                        </ul>

                        <div className="Menu-underLink-heading">
                          <h4>Product Tour</h4>
                          <p>
                            <b>Lighthouse MXDR Platform</b>
                          </p>
                        </div>
                        <ul>
                          <li>
                            <Link href="/lighthouse-platform">
                              TAKE THE TOUR
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Compliance</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li>
                            <a href="https://csp.global/frameworks#essentialeight">
                              Essential Eight
                            </a>
                          </li>
                          <li>
                            <a href="https://csp.global/frameworks#nist">
                              NIST
                            </a>
                          </li>
                          <li>
                            <a href="https://csp.global/frameworks#zerotrust">
                              Zero Trust
                            </a>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Resources</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="Menu-underLink">
                        <ul>
                          <li>
                            <a
                              target="_blank"
                              href="https://cms.csplighthouse.com/public/uploads/Feature-Comparison-Matrix.pdf"
                            >
                              Feature Comparison Matrix
                            </a>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <a href="https://blog.csp.global/">
                      <AccordionItemHeading>
                        <AccordionItemButton>Blog</AccordionItemButton>
                      </AccordionItemHeading>
                    </a>
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
