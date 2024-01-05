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
                            <Link href="/About">About Us</Link>
                          </li>
                          <li>
                            <Link href="/About#our-team-se">Meet The Team</Link>
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
                          <h4>Protect</h4>
                          <p>
                            Professional Services and compliance alignment to
                            mitigate risks and reduce the attack surface area
                          </p>
                        </div>

                        <ul>
                          <li>
                            <Link href="#">Security Uplifts</Link>
                          </li>
                          <li>
                            <Link href="#">Essential Eight</Link>
                          </li>
                          <li>
                            <Link href="#">Microsoft Cloud + Managed IT</Link>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <a href="/contactus">
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
