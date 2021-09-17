import React from "react";
import data from "../../sitedata.json";
import "./Footer.css";

function Subfooter() {
  return (
    <div className="text-center text-white">
      {data.footerlink.map((i) => {
        return (
          <>
            <a className="list" href={i.link}>
              {i.title}
            </a>
            <span className="px-2"></span>
          </>
        );
      })}
    </div>
  );
}

export default Subfooter;
