import React from "react";
import "./Footer.css";
import Subfooter from "./subfooter";
import ScrollToTopBtn from "./ScrollToTop.js";

function Footer() {
  return (
    <>
      <ScrollToTopBtn />
      <div className="footer">
        <div className="footer_top p-3 text-center">
          <Subfooter />
        </div>
        <div className="footer_bottom">
          <section className="footer_subscription">
            <p className="footer_subscription_heading1">
              © NIC APSC , Developed and hosted by &nbsp;
              <a href="https://www.nic.in/">National Informatics Centre,</a>
              <br />
              <a href="https://www.meity.gov.in/">
                Ministry of Electronics & Information Technology, Government of
                India
              </a>
            </p>
            <p className="footer_subscription_heading2">
              AP State Center, Vijayawada
            </p>
          </section>
          <section className="text-center">
            <div>
              <a className="logo1" href="https://ap.nic.in/">
                <img
                  src="https://ap.nic.in/wp-content/themes/sdo-theme/images/nic.png"
                  alt="logo1"
                />
              </a>
              <a
                className="logo2"
                className="vl"
                href="https://www.digitalindia.gov.in/"
              >
                <img
                  src="https://ap.nic.in/wp-content/themes/sdo-theme/images/digitalIndia.png"
                  alt="logo2"
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Footer;
