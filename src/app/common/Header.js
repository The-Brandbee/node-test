import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Main from "../img/logo.png";
import MenuImage from "../img/Menu-Image.jpg";
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
                        <div className="dropdown-content-Services-menu-middle-left-top">
                          <h4>Protect & Enable</h4>
                          <p>
                            Professional Services and compliance alignment to
                            mitigate risks and reduce the attack surface area
                          </p>
                        </div>
                        <div className="dropdown-content-Services-menu-middle-left-bottom">
                          <Link href="/security-uplifts">Security Uplifts</Link>

                          <Link href="/frameworks">Cyber Frameworks</Link>
                          <Link href="/enablement">Enablement</Link>
                        </div>
                      </div>
                      <div className="dropdown-content-Services-menu-middle-left">
                        <div className="dropdown-content-Services-menu-middle-left-top">
                          <h4>Detect & Respond (24x7)</h4>
                          <p>
                            Next-generation security operations geared for the
                            Modern Workplace with the latest AI Technology
                          </p>
                        </div>
                        <div className="dropdown-content-Services-menu-middle-left-bottom">
                          <Link href="/mdr">
                            Managed Detection and Response
                          </Link>
                          <Link href="/modern-soc">What is a Modern SOC?</Link>
                        </div>
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
                  <Link href="#">Compliance</Link>
                  <div class="dropdown-content">
                    <Link href="/frameworks#essentialeight">
                      Essential Eight
                    </Link>
                    <Link href="/frameworks#nist">NIST</Link>
                    <Link href="/frameworks#zerotrust">Zero Trust</Link>
                  </div>
                </li>
                <li>
                  <Link href="#">Resources</Link>
                  <div class="dropdown-content max">
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

                <li>
                  <Link href="https://blog.csp.global">Blog</Link>
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
