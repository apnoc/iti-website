import React from "react";
import "./Nav.css";
import data from "../../sitedata.json";

function Nav() {
  return (
    <div>
      {data.socialicons.map((e) => {
        return (
          <>
            <div className="topBar  d-none d-md-block">
              <div className="row container-fluid">
                <div className="col-lg-10 col-sm-6">
                  <div href={e.link} className=" float-left clearfix ml-5 ">
                    <a
                      href={e.link}
                      className="skipContent"
                      aria-label="Skip to main content"
                    >
                      <span className="m-hide ">{e.title}</span>
                      <span className="icon-skip-to-main m-show"></span>
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 ">
                  <div className="float-right icons">
                    <ul className="socials  ">
                      <li>
                        {e.iconslink.map((f) => {
                          return (
                            <>
                              <a href={f.link}>
                                <i className={f.iconname}></i>
                              </a>
                            </>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Nav;
