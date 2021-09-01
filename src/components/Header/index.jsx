import React from "react";
import Nav from "./Nav";
import NavBar from "./NavBar";
import Header from "./Header";

function SiteHeader() {
  return (
    <>
      <div>
        <Nav />
        <NavBar />
        <Header />
      </div>
    </>
  );
}

export default SiteHeader;
