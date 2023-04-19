import React, { useState, useEffect, useContext, useRef } from "react";
import "./Navbarnew.css";
import { Link, NavLink } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";

import img from './Images/Logo.png';
import { AuthContext } from "../contexts/AuthContext";
function Navbarnew() {
  const { user } = useContext(AuthContext)
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const inputRef = useRef(null);

  const handleClick1 = () => {
    inputRef.current.checked = false;
  };
  return (
    <>
      <br />
      <body>
        <header>
          <a href="#" className="logo486">
            <div className="heading534"> <img src={img} alt="logo" /></div>
            <div className="heading5345">RAJ VIDYA KENDER</div>
          </a>
          <input type="checkbox" id="menu-bar" ref={inputRef} />
          <label for="menu-bar">
            <div className="iconheader">

              <RiMenu4Fill onClick={handleClick} size={30} style={{ color: "#DA9532" }} />

            </div>
          </label>

          <nav className="navbar486">

            <ul>
              <li >
                <label for="menu-bar">
                  <NavLink to="/" onClick={handleClick1}>Home</NavLink></label>
              </li>
              <li>
                <NavLink to="news" onClick={handleClick1}>News</NavLink>
              </li>
              <li>
                <a href="#">Initiatives</a>
                <ul>
                  <li><NavLink to="humanitarian" onClick={handleClick1}>Humanitarian</NavLink></li>
                  <li><NavLink to="pep" onClick={handleClick1}>Peace Education Program</NavLink></li>
                  <li><NavLink to="pek" onClick={handleClick1}>Peace Education and Knowledge</NavLink></li>
                </ul>

              </li>
              <li>
                <a href="#">Get Involved</a>
                <ul> 

                  <li><NavLink to="volunteer" onClick={handleClick1}>Volunteer</NavLink></li>
                  <li><NavLink to="career" onClick={handleClick1}>Career</NavLink></li>
                  <li><NavLink to="donation" onClick={handleClick1}>Donation</NavLink></li>
                </ul>

              </li>
              <li>
                <a href="#">About</a>
                <ul>
                  <li><NavLink to="/rvk" onClick={handleClick1}>RVK</NavLink></li>
                  <li><NavLink to="/pr" onClick={handleClick1}>Prem Rawat</NavLink></li>
                </ul>
              </li>
              <li>
              <li> 
              {!user ? (
                   
                      <NavLink to="login" className="profilemainbut89">Login</NavLink>
                   
                  ) : (
                    <button to="login" className="button587">
                      <Link to="/profile" className="profilemainbut89" >Profile</Link>
                    </button>
                  )}
                 </li>
              </li>
              <li>
                <a href="#">More</a>
                <ul>
                  {user && <li><NavLink to="/profile" onClick={handleClick1}>Profile</NavLink></li>}
                  <li><NavLink to="/gallery" onClick={handleClick1}>Gallery</NavLink></li>
                  <li><NavLink to="/eventsall" onClick={handleClick1}>Events</NavLink></li>
                  <li><NavLink to="/contact" onClick={handleClick1}>Contact</NavLink></li>
                </ul>
              </li>
            </ul>
          </nav>

        </header>
      </body>
    </>
  );
}

export default Navbarnew;
