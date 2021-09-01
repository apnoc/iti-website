import React from "react";
import data from "../../sitedata.json";
import { Breadcrumb } from "../Header/Breadcrumb/breadrcrumb";
 



function About() {
  return (
    <>
        <Breadcrumb title="AboutITI" />

      <div id="text">
        <>
          {data.menu2.map((information) => {
            return (
              <div>
                <section className="container">
                  <h3 className="text-center">{information.title}</h3>
                  {information.paragraph.map((details) => {
                    return (
                      <>
                        <p className="text-justify">{details.p}</p>
                      </>
                    );
                  })}
                </section>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
}

export default About;
