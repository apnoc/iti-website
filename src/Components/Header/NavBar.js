import React from "react";
import data from "../../sitedata.json";

function NavBar() {
  return (
    <div>
      <section>
        {data.Header.map((home) => {
          return (
            <>
              <section className="d-sm-none ">
                <div>
                  {home.description.map((details) => {
                    return (
                      <>
                        <div className="selected ">
                          <h5 style={{ fontSize: "4.5vw" }}>{details.title}</h5>
                        </div>
                      </>
                    );
                  })}
                </div>
              </section>
              <section className="d-none d-sm-block m-3">
                <div className="box ">
                  <div>
                    {home.img1.map((details) => {
                      return (
                        <>
                          <a href={details.link}>
                            <img
                              src={details.imgsrc}
                              className="d-none img-fluid d-sm-block"
                              alt={details.imgalt}
                            />
                          </a>
                        </>
                      );
                    })}
                  </div>
                  <div>
                    {home.description.map((details) => {
                      return (
                        <>
                          <div className="selected ">
                            <h5 style={{ fontSize: "1.5vw" }}>
                              {details.title}
                            </h5>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  <div>
                    {home.img2.map((details) => {
                      return (
                        <>
                          <img
                            src={details.imgsrc}
                            className="d-none img-fluid d-sm-block"
                            alt={details.imgalt}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </section>
    </div>
  );
}

export default NavBar;
