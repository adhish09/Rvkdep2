import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import "./main.css";
import styled from "styled-components";
const Button = styled.button`
  padding: 7px 15px;
  margin-top: 24px;
  margin-bottom:35px;
  background-color: #da9532;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: orange;
  }
  height: 50px;
`;
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_main">
            <h4
              style={{
                paddingBottom: "4px",
                fontSize: "18px",
                fontFamily: "raleway",
                fontWeight: "800",
                color: "rgb(209,209,209)",
              }}
            >
              Subscribe Now
            </h4>

            <div style={{ paddingTop: "1px", fontFamily: "raleway" }}>
              Subscribe to our newsletter to get more information
            </div>
            <div className="input footer-inputs">
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => props.setEmail(e.target.value)}
                style={{ paddingLeft: "15px" }}
              />
              <Button onClick={() => props.handleSubscribe()}>Subscribe</Button>
            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4>Links</h4>
            <br />
            <a
              href="https://www.premrawat.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Prem Rawat</p>
            </a>
            <a
              href="https://www.rvkproducts.com/"
              target="_blank"
              rel="noreferrer"
            >
              <p>Rvk products</p>
            </a>
            <a href="https://www.anjan.tv/" target="_blank" rel="noreferrer">
              <p>Anjan TV</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Getting involved</h4>
            <br />
            <a href="career">
              <p>Career</p>
            </a>
            <a href="eventsall">
              <p>Events</p>
            </a>
            <a href="gallery">
              <p>Gallery</p>
            </a>
            <a href="volunteer">
              <p>Volunteer</p>
            </a>
            <a href="donation">
              <p>Donate</p>
            </a>
            <a href="humanitarian">
              <p>Humantarian</p>
            </a>
            <a href="/">
              <p>Policies</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Address:</h4>
            <br />
            <a href="/">
              <p>Chattarpur, Chandanhula, New Delhi - 110074</p>
            </a>
            <a href="/">
              <p>+91 011-35009190</p>
            </a>
            <a href="/">
              <p>Rvkender@rvk.in</p>
            </a>
          </div>
        </div>

        <div className="socialmedia">
          <p>
            <a
              href="https://www.youtube.com/@rajvidyakender"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube
                size={25}
                style={{
                  color: "rgb(226,195,148)",
                  hover: { color: "rgb(226,195,148)" },
                }}
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/rajvidyakender"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare
                size={23}
                style={{
                  color: "rgb(226,195,148)",
                  hover: { color: "rgb(226,195,148)" },
                }}
              />
            </a>
          </p>
        </div>

        <hr style={{ margin: "2px 0px" }} />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              © Copyright {new Date().getFullYear()} Raj Vidya Kender Policy
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
