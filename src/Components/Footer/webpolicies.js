import React from "react";
import data from "../../temp.json";

function webpolicies() {
  return (
    <div className="container-fluid  p-5">
      {data.websitepolicies.map((i) => {
        return (
          <>
            <section>
              <h2>{i.header}</h2>
              {i.subdetails.map((e) => {
                return (
                  <>
                    <h4>{e.title}</h4>
                    {e.paragraphs.map((g) => {
                      return <p>{g.p}</p>;
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

export default webpolicies;
