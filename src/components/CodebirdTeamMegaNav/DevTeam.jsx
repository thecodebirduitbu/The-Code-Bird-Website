import React from "react";
import OurTechTeam from "../Team/OurTechTeam";
import '../Team/OurTechTeam.css'
function DevTeam() {
  return (
    <div className="py-[10rem]">
      <h1 className="text-[3rem] text-center text-white">
        Developers of{" "}
        <span className="thisWev">
          this Website
        </span>
      </h1>
      <div className="pt-10">
        <OurTechTeam />
      </div>
    </div>
  );
}

export default DevTeam;
