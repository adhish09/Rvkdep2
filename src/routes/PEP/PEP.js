import "./PEP.css";
import Map from "./Map.jpg";
import main from "./main.png";
import P1 from "./P1.png";
import P2 from "./P2.png";
import PEP1 from "./PEP1";
import PEP2 from "./PEP2";
import PEP3 from "./PEP3";
import Pep from "./Index";
import { Layout } from "antd";
import React from "react";
const pepmain={
  background:'transparent'
}
const headerStyle  = {
  textAlign: 'center',
  height:"100%",
  backgroundImage: 'linear-gradient(95.09deg, rgba(226, 148, 36, 0.83) 0%, rgba(106, 241, 209, 0.61) 100%)',
  padding:"122px 0px",
  marginTop:"32px"
};
const titleStyle = {
     fontSize:"64px",
     fontWeight:"400",
     fontFamily:"habibi",
     color:"#eeeeee",
     lineHeight:"90px",
     letterSpacing:"1.8px"
}
const textStyle={
  fontSize:"18px",
  fontWeight:"600",
  color:"#ffffff",
  lineHeight:"25px"
}
const First = () => {
   
  return (
      <div className="pep_top_container">
        <Layout style={pepmain}>
        <div style={headerStyle}>
          <h1 style={titleStyle}> Peace Education Program</h1>
          <p style={textStyle}>Helping People Discover Their True Potential of Getting Peace</p>
        </div>
        </Layout>
        <Pep />
        <PEP1 />
        <PEP2 />
        <PEP3 />
      </div>




 
  );
};

export default First;
