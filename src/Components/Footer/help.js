import React from "react";
import data from "../../temp.json";

function help() {
  return (
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
                  </>
                );
              })}
            </section>
          </>
        );
      })}
    </div>
  );
}

export default help;
