import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Contacticon = () => {

  return (
    <Wrapper><NavLink to="contact">
        <div className="top-btn" >
          <IoCall className="top-btn--icon" size={30}/>
        </div>
        </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    background:white;
    border:3px solid #DA9532;
    width: 3rem;
    height: 3rem;
    color: #DA9532;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

&:hover {
  .top-btn{}
  background:white;
  border:4px solid #DA9532;
  width: 4rem;
  height: 4rem;
  color: #DA9532;
  bottom: 1.5rem;
  right: 1.5rem;
  border-radius: 50%;
}

}`;
export default Contacticon;