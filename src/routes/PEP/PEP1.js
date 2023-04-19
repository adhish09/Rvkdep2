import React from "react";
import "./PEP1.css";
import main from "./Map.jpg";

function PEP1() {
  return (
    <div className="pep0"> 
        <div style={{width:"100%"}}>
        <img src={main} alt="loading ..." style={{width:"100%",height:"100%"}}/>
        </div>
       <p className="map-text">
       The Prem Rawat Foundation (TPRF) provides access to the course
              materials to organizations and volunteers free of charge, making
              the Peace Education Program readily available to diverse
              populations in more than 80 countries and in 40 languages.
            
       </p>
       <p className="map-text2">
       Each workshop features video excerpts of renowned author Prem
                Rawat’s inspiring presentations on one of ten themes: Peace,
                Appreciation, Inner Strength, Self-awareness, Clarity,
                Understanding, Dignity, Choice, Hope, and Contentment.
              
       </p>
    </div>
  );
}

export default PEP1;
