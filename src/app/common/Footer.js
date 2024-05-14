import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footerlogo from "../img/footer.png";
import Footerright from "../img/footer-cut.png";
import rightarrow from "../img/right-arrow.png";
import Mi from "../img/Microsoft-Gold-Partner-Wizard-Cyber-small.png.png";
import SoulMachinesWidget from "../SoulMachinesWidget.js";
import Script from "next/script";

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
            <div className="footer-left-mi">
              <Image src={Mi} alt="" />
            </div>
          </div>
          <div className="footer-left">
            <ul>
              <li>Company</li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/about#our-team-se">Meet The Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
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
              <li>
                <a
                  href="https://www.youtube.com/channel/UCn2zfMTAc-S3oxgko0nFE1w"
                  target="_blank"
                >
                  Youtube
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

      <script
        data-sm-greeting="Got questions? Speak to Cymone our digital human."
        src="https://static.soulmachines.com/widget-snippet-1.12.0.min.js"
        data-sm-api-key="eyJzb3VsSWQiOiJkZG5hLWNzcC1nbG9iYWxhZDhjLS1leHBsb3JlciIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxXzA2N2NjOTRlLTM5MjYtNDlhNC1iMDVjLTU1YzhiYWU3MjkxNCJ9"
        async
      />
    </footer>
  );
}

export default IndexPage;
