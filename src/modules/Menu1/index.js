import React from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
import data from "../../sitedata.json";

function Home() {
  return (
    <div>
      <section className="rowa">
        <div className="announcements row d-sm-block">
          <p className="announcements__text col-lg-2  col-xs-2 text-center">
            Announcements
          </p>
          <marquee className="col-lg-8 col-xs-8 d-sm-block" behavior="scroll">
            <div className="announcements__list">
              <a>
                <a className="list" href="itinotifications">
                  Item 1
                </a>
              </a>
            </div>
            <div className="announcements__list">
              <a>
                <a className="list" href="itinotifications">
                  Item 2
                </a>
              </a>
            </div>
            <div className="announcements__list">
              <a>
                <a className="list" href="itinotifications">
                  Item 3
                </a>
              </a>
            </div>
            <div className="announcements__list">
              <a>
                <a className="list" href="itinotifications">
                  Item 4
                </a>
              </a>
            </div>
          </marquee>
        </div>
      </section>
      <section>
        {data.menu1.map((home) => {
          return (
            <>
              <section>
                {home.section1.map((e) => {
                  return (
                    <>
                      <section id={home.title1} className="testimonials ">
                        <Carousel>
                          <Carousel.Item interval={1000}>
                            {e.carousel1.map((details) => {
                              return (
                                <>
                                  <img
                                    className="d-block w-100"
                                    src={details.img}
                                    alt={details.imgalt}
                                  />
                                </>
                              );
                            })}
                          </Carousel.Item>
                          <Carousel.Item interval={1000}>
                            {e.carousel2.map((details) => {
                              return (
                                <>
                                  <img
                                    className="d-block w-100"
                                    src={details.img}
                                    alt={details.imgalt}
                                  />
                                </>
                              );
                            })}
                          </Carousel.Item>
                        </Carousel>
                      </section>
                    </>
                  );
                })}
              </section>

              <section className="bg-light" id={home.title2}>
                {home.section2.map((details) => {
                  return (
                    <>
                      <section>
                        <div className="about">
                          <section className="container py-5">
                            <h3 className="font-weight-bold text-white text-center">
                              <section clasName="underline mr-auto"></section>
                              {details.title}
                            </h3>
                            <div className="row">
                              <div className="col-lg-7 text-start text-white py-4">
                                {details.paragraph.map((e) => {
                                  return <p className="text-justify">{e.p}</p>;
                                })}

                                <a
                                  className="btn btn-danger btn-sm"
                                  href={details.button_link}
                                >
                                  {details.button}
                                </a>
                              </div>
                              <div className="col-lg-5 centered  p-4 container-fluid ">
                                <img
                                  className="img-thumbnail d-none d-lg-block  "
                                  style={{ width: "500px", height: "350px" }}
                                  alt=""
                                  src={details.imgsrc}
                                />
                              </div>
                            </div>
                          </section>
                        </div>
                      </section>
                    </>
                  );
                })}
              </section>

              <section className="" id={home.title3}>
                <div className="schemes py-5">
                  {home.section3.map((details) => {
                    return (
                      <>
                        <h3 className="text-center text-white py-3">
                          {details.title}
                        </h3>
                      </>
                    );
                  })}

                  <Carousel className="container d-flex justify-content-center">
                    <Carousel.Item interval={1000}>
                      {home.section3.map((details) => {
                        return (
                          <>
                            <section>
                              <div className="container d-flex justify-content-center">
                                <div className="row">
                                  {details.card1.map((e) => {
                                    return (
                                      <>
                                        <div className="col-xs-12 col-sm-12 col-md-4 ">
                                          <div className="card p-3 text-start">
                                            <img
                                              src={e.imgsrc}
                                              alt={e.imgalt}
                                              className="card-img-top"
                                            />
                                            <h5 className="card-title font-weight-bold py-3">
                                              {e.title}
                                            </h5>
                                            <p className="card-text  text-justify ">
                                              {e.description}
                                            </p>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </section>
                          </>
                        );
                      })}
                    </Carousel.Item>
                    <Carousel.Item className="container" interval={1000}>
                      {home.section3.map((details) => {
                        return (
                          <>
                            <section>
                              <div className="container d-flex justify-content-center">
                                <div className="row">
                                  {details.card2.map((e) => {
                                    return (
                                      <>
                                        <div className="col-xs-4 col-sm-4 col-md-4 ">
                                          <div className="card p-3 text-start">
                                            <img
                                              src={e.imgsrc}
                                              alt={e.imgalt}
                                              className="card-img-top "
                                            />
                                            <h5 className="card-title font-weight-bold py-3">
                                              {e.title}
                                            </h5>
                                            <p className="card-text  text-justify ">
                                              {e.description}
                                            </p>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </section>
                          </>
                        );
                      })}
                    </Carousel.Item>
                  </Carousel>
                </div>
              </section>

              <section className="updates" id={home.title4}>
                {home.section4.map((details) => {
                  return (
                    <>
                      <section className="container py-5">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5  m-4  card p-3 text-start">
                            {details.subsection1.map((e) => {
                              return (
                                <>
                                  <div>
                                    <h6 className="card-title font-weight-bold py-3">
                                      {e.title}
                                    </h6>
                                    <marquee direction="up">
                                      <div className="text-justify">
                                        {e.paragraph.map((details) => {
                                          return (
                                            <>
                                              <p>
                                                <i className="fa fa-check" />
                                                {details.p}
                                              </p>
                                              <hr />
                                            </>
                                          );
                                        })}
                                      </div>
                                    </marquee>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5  d-none d-md-block  m-4 card p-3 text-start">
                            {details.subsection2.map((e) => {
                              return (
                                <>
                                  <div>
                                    <h6 className="card-title font-weight-bold py-3">
                                      {e.title}
                                    </h6>
                                    <img
                                      src={e.imgsrc}
                                      alt={e.imgalt}
                                      className="card-img-top"
                                    />
                                    <p className="card-text text-justify ">
                                      {e.description}
                                    </p>
                                    <a
                                      href={e.button_link}
                                      className="btn btn-danger btn-sm"
                                    >
                                      {e.button}
                                    </a>
                                  </div>
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
            </>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
