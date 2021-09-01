import React from "react";
import data from "../../temp.json";
import { Breadcrumb } from "../Header/Breadcrumb/breadrcrumb";

function help() {
  return (
    <>
    <Breadcrumb title="Help" />
    <div className="container-fluid  p-5">
      {data.help.map((i) => {
        return (
          <>
            <section>
              {i.subdetails.map((e) => {
                return (
                  <>
                    <h4>{e.title}</h4>
                    {e.paragraphs.map((g) => {
                      return (
                        <>
                          <p>{g.p} </p>
                        </>
                      );
                    })}

                  {/* {
                    e.table.map((i) => {
                      return (
                        <>
                        {i.header}
                        </>
                      )
                    })
                  } */}


                  </>
                );
              })}
            </section>
          </>
        );
      })}
    </div>
    </>
  );
}

export default help;



