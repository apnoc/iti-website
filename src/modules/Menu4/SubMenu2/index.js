import React from 'react'
import data from "../../../temp.json";
import { Breadcrumb } from "../../../components/Header/Breadcrumb/breadrcrumb";
import "./jobs.css"

function index() {
  return (
    <>
       <Breadcrumb title="Placements > Jobs Report" />
       <div>
      {data.JobSeekers.map((information) => {
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
                              <th scope="col">{tables.h6}</th>
                              <th scope="col">{tables.h7}</th>
                              <th scope="col">{tables.h8}</th>
                              <th scope="col">{tables.h9}</th>
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
                              <td>{description.p6}</td>
                              <td>{description.p7}</td>
                              <td>{description.p8}</td>
                              <td>{description.p9}</td>
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

export default index;
