import React from "react";
import "./Header.css";
import Nav from "./Nav";
import NavBar from "./NavBar";
import data from "../../sitedata.json";

function Header() {
  return (
    <>
      <Nav />
      <NavBar />
      <section className=" font-weight-bold  sticky-top navdetails">
        <nav className="navbar navbar-expand-lg  navbar-light ">
          <a className="nav-link d-sm-none" href="ITIhome">
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
          <section
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav navlinkdetails  links">
              {data.Navlink.map((i) => {
                return (
                  <>
                    <li className="nav-item ">
                      <a className="nav-link px-4 " href={i.link}>
                        {i.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>

            <ul className="navbar-nav mr-auto links">
              <li className="nav-item dropdown">
                {data.Navlinkdropdown.map((i) => {
                  return (
                    <>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {i.title}
                      </a>

                      {i.subnavlinks.map((e) => {
                        return (
                          <>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <a
                                className="nav-link-dropdown "
                                href={e.sublink}
                              >
                                {e.subtitle}
                              </a>
                            </div>
                          </>
                        );
                      })}
                    </>
                  );
                })}
              </li>
            </ul>
            <ul className="navbar-nav ml-auto links">
              {data.Navlinkleft.map((i) => {
                return (
                  <>
                    <li className="nav-item ">
                      <a className="nav-link " href={i.link}>
                        {i.title}
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </section>
        </nav>
      </section>
    </>
  );
}

export default Header;
