import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="topBar  d-none d-md-block">
        <div className="row container-fluid">
          <div className="col-lg-10 col-sm-6">
            <div href="#home" className=" float-left clearfix ml-5 ">
              <a
                href="/#home"
                className="skipContent"
                aria-label="Skip to main content"
                title="Skip to main content"
              >
                <span className="m-hide ">Skip to main content</span>
                <span className="icon-skip-to-main m-show"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-2 ">
            <div className="float-right icons">
              <ul className="socials  ">
                <li>
                  <a href="">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
               
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li> */}
                <li>
                  <a
                    type="link"
                    href=""
                    onClick="document.getElementById('text').styles.fontSize='1rem'"
                  >
                    ☾
                  </a>
                </li>
                <li>
                  <a
                    type="link"
                    href=""
                    onClick="document.getElementById('text').styles.fontSize='25rem'"
                    className=""
                  >
                    ☀
                  </a>
                </li>
                <li>
                  <Link to="/sitemap">
                    <i className="fa fa-sitemap"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
