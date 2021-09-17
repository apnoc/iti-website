import React from 'react'
import data from "../../../temp.json";
import "./styles.css";

function index() {
  return (
    <>
      
       <div>
      {data.Abstract.map((information) => {
        return (
          <section>
            <h3 className="text-center m-4">{information.heading}</h3>

            <section className="container">
              <div>
                {information.content.map((details) => {
                  return (
                    <table className="table table-responsive-lg  table-success table-bordered table-striped table-hover">
                      <thead className="tableheader">
                        {details.heading.map((tables) => {
                          return (
                            <tr>
                              <th scope="col">{tables.h1}</th>
                              <th scope="col">{tables.h2}</th>
                              <th scope="col">{tables.h3}</th>
                              <th scope="col">{tables.h4}</th>
                              <th scope="col">{tables.h5}</th>
                            </tr>
                          );
                        })}
                      </thead>
                      <tbody>
                        {details.Paragraph.map((description) => {
                          return (
                            <tr>
                              <td>{description.p1}</td>
                              <td>{description.p2}</td>
                              <td>{description.p3}</td>
                              <td>{description.p4}</td>
                              <td>{description.p5}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  );
                })}
              </div>
            </section>
          </section>
        );
      })}
    </div>
    </>
  )
}

export default index
