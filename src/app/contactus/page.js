"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Header from "../common/Header.js";
import Footer from "../common/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../img/contact.jpg";
import Mapnew from "../img/mapnew.png";
import Phone from "../img/phone.png";
import Email from "../img/email.png";

export default function contactus() {
  return (
    <main className="About-us-page">
      <header>
        <Header />
        <div className="Inner-page-banner-frame">
          <Image src={About} alt="" />
        </div>
        <div className="about-bannner-contact Contact-Us">
          <div className="container">
            <h3>Contact Us</h3>
          </div>
        </div>
      </header>
      <section className="contact-us-middle-main">
        <div className="container">
          <div className="contact-us-middle-main-m">
            <div className="contact-us-middle-main-m-left">
              <div className="contact-us-middle-main-m-left-con">
                <Image src={Mapnew} alt="" />
                <p>
                  Westpac house, 91 king william street, adelaide, 5000, south
                  australia
                </p>
              </div>

              <div className="contact-us-middle-main-m-left-con">
                <Image src={Phone} alt="" />
                <p>
                  <a href="tel:+1300199093">1300 199 093</a>
                </p>
              </div>
              <div className="contact-us-middle-main-m-left-con">
                <Image src={Email} alt="" />
                <p>
                  <a href="mailto:info@csp.global">info@csp.global</a>
                </p>
              </div>
            </div>
            <div className="contact-us-middle-main-m-right">
              <div className="contact-us-middle-main-m-right-middle">
                <p>
                  You can also fill out the form below to send us a message.
                  Please provide as much detail as possible about your cyber
                  security needs and goals. We will review your message and
                  contact you with the best solution for your situation.
                </p>
                <form role="form" className="contact-us-page-main-from">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Surname"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Company"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-sect-contactus-page">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.268553712539!2d138.5960411743672!3d-34.9248011745238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced7df642edb%3A0xc9d4dc63940ed7a6!2s91%20King%20William%20St%2C%20Adelaide%20SA%205000%2C%20Australia!5e0!3m2!1sen!2sin!4v1702645514395!5m2!1sen!2sin"></iframe>
      </section>

      <Footer />
    </main>
  );
}
