import React from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import "./layout.css";
import { withRouter } from "react-router-dom";
import Layout from "./Layout";

function Main() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <section className="content">
          <Layout />
        </section>
        <div className="mt-auto ">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Main);
