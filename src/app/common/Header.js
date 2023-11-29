import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Main from "../img/logo.png";

function IndexPage() {
  return (
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
                <Link href="/">Company </Link>
                <div class="dropdown-content">
                  <Link href="/About">About Us</Link>
                  <Link href="/About#our-team-se">Meet The Team</Link>
                </div>
              </li>
              <li>
                <Link href="/">Cyber Lighthouse</Link>
                <div class="dropdown-content">
                  <Link href="/mdr">Managed Detection and Response</Link>
                  <Link href="/About#our-team-se">What is a Modern SOC?</Link>
                </div>
              </li>
              <li>
                <Link href="/">Contact US</Link>
              </li>
            </ul>
          </div>
          <div className="header-menubar-right">
            <Link href="/"> Get in Touch </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
