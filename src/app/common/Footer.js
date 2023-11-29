import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footerlogo from "../img/footer.png";
import Footerright from "../img/footer-cut.png";
import rightarrow from "../img/right-arrow.png";

function IndexPage() {
  return (
    <footer>
      <div className="footer-right-img">
        <Image src={Footerright} alt="" />
      </div>
      <div className="container">
        <div className="footer-middle">
          <div className="footer-left">
            <Link href="/">
              <Image src={Footerlogo} alt="" />
            </Link>
          </div>
          <div className="footer-left">
            <ul>
              <li>Company</li>
              <li>
                <Link href="/About">About Us</Link>
              </li>
              <li>
                <Link href="/About#our-team-se">Meet The Team</Link>
              </li>
              <li>
                <Link href="">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-left">
            <ul>
              <li>Socials</li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cspglobal1"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-left">
            <ul>
              <li>Privacy Statement</li>
              <li>
                <Link href="javascript:void(0)">Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="arrow-top-top"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <Image src={rightarrow} alt="" />
      </button>
    </footer>
  );
}

export default IndexPage;
