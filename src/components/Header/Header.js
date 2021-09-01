import React from "react";
import HeaderLink from "./HeaderLink";
import "./Header.css";

function Header() {
  return (
    <div className="">
      <section id="home" className=" font-weight-bold  sticky-top navdetails">
        <nav className="navbar navbar-expand-lg  navbar-light ">
          <a className="nav-link d-sm-none" href="/#ITIhome">
            <i
              class="fa fa-home"
              aria-hidden="true"
              style={{ fontSize: "28px", color: " #009048e6" }}
            />
            <span className="sr-only">(current)</span>
          </a>
          <button
            className="navbar-toggler  ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon my-toggler toggle"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto links">
              <li className="nav-item ">
                <a className="nav-link " href="/#ITIaboutus">
                  About<span className="sr-only">(current)</span>
                </a>
              
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#ITIschemes">
                  Schemes of ITI<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#ITInewsupdates">
                  News & Updates<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <HeaderLink className="nav-link" to="ITIorganization">
                  Organization Structure
                </HeaderLink>
              </li>
              <li className="nav-item">
                <HeaderLink className="nav-link" to="ITIProfile">
                  ITI Profile
                </HeaderLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Placements
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <HeaderLink className="nav-link-dropdown" to="ITIabstraction">
                    Abstract Report
                  </HeaderLink>

                  <HeaderLink className="nav-link-dropdown" to="ITIjobs">
                    Job Seekers Report
                  </HeaderLink>
                </div>
              </li>
              <li className="nav-item">
                <HeaderLink className="nav-link" to="ITIcontact">
                  Contact Us
                </HeaderLink>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto links">
              <li className="nav-item">
                <a class="nav-link" href="ITIstudentLogin">
                  <img
                    src="/images/student_login.png"
                    className="img-fluid  "
                    alt=""
                  />
                  Student Area
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="https://iti.nic.in/login.jsp">
                  <img
                    src="/images/employee_login.png"
                    className="img-fluid "
                    alt=""
                  />
                  Employee Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}
export default Header;
