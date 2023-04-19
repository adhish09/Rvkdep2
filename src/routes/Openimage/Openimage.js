import React, { useState, useContext, useReducer } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import img from "./4.jpeg";
import "./Openimage.css";
function Openimage() {
  return (
    <div>
      <div className="modal1015">
        <div className="overlay1015"></div>
        <div className="modalBackground1015">
          <div className="modalContainer1015">
            <div className="titleCloseBtn1015">
              <button>
                <NavLink to="/gallery">
                  <IoCloseOutline style={{ color: "black" }} />
                </NavLink>
              </button>
            </div>
            <img src={img} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Openimage;
