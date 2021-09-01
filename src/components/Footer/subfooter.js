import React from "react";
import HeaderLink from "../Header/HeaderLink";

function Subfooter() {
  return (
    <div className="text-center text-white">
   
        <HeaderLink className="list" to="ITIwebsite">
          Website Policies
        </HeaderLink>
      
        <span className="px-2" > /
      </span>
        
        <HeaderLink className="list" to="ITIhelp">
          Help
        </HeaderLink>
    
    </div>
  );
}

export default Subfooter;
