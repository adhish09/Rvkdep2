import React from "react";
import Logo from "./Logo.png";
import "./FooterM.css";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import styled from "styled-components";
const Button = styled.button`
  padding: 7px 15px;
  margin-top: -1px;
  margin-bottom:35px;
  background-color: #da9532;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: orange;
  }
  height: 45px;
`;
function FooterM(props) {
  return (
    <div>
      <br />
      <div className="footermobile">
        <div className="footermainhead" style={{paddingBottom:"4px",fontSize:"18px",fontFamily:"raleway",fontWeight:"800",color:"rgb(209,209,209)"}}>Subscribe Now</div>
        <div className="footermaincont"  style={{paddingTop:"1px", fontFamily:"raleway",color:"rgb(209,209,209)",paddingLeft:"0px"}}>
          Subscribe to our newsletter to get more information
        </div>
        <div className="subscribefooter9">
          <div className="footermaincont67">
            <input className="footermaincont" placeholder="Email" onChange={(e)=>props.setEmail(e.target.value)} />
          </div>
          <div className="footermaincont978">
            <Button className="footermaincont98" onClick={()=>props.handleSubscribe()}>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="break5947"></div>
      <div className="subscribelastmain34">
        <div className="footeraddress87" style={{paddingTop:"35px",paddingBottom:"25px"}}>
          Address: Chattarpur, Chandanhula New Delhi-110074
        </div> 
        <div className="subscribelast75" style={{paddingTop:"25px" }}>
          <div className="footernumber86">+91 011-3500 9190</div>
          <div className="footernumber86">Rvkender@rvk.in</div>
        </div>
        <div className="subscribelast735">
          <div className="footerlogo8347">
            <BsYoutube size={30} style={{ color: "rgb(226,195,148)",hover:{color:"rgb(226,195,148)" },padding:"3px 0px" }} />
          </div>
          <div className="footer245"></div>
          <div className="footerlogo83457">
            <FaFacebookSquare size={30} style={{ color: "rgb(226,195,148)",hover:{color:"rgb(226,195,148)" }, padding:"3px 0px"  }} />
          </div>
        </div>
        <div className="copyrightlast87">
        <div className="copyright746">
          <p>
            © Copyright {new Date().getFullYear()} Raj Vidya Kender Policy Terms
            & Conditions
          </p>
        </div></div>
      </div>
    </div>
  );
}

export default FooterM;
