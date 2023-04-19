import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Images/Logo.png";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Slider from "./ImgSlide/Slider";
import { BsArrowRight } from "react-icons/bs";
import MultiItemCarousel from "./LatestVideo/MultiItemCrousel";
import MultiItemCarousel1 from "./Initiative/MultiItemCrousel";
import MultiItemCarousel2 from "./Events/MultiItemCrousel";
import Text from "./Text/Text";
function NavbarM() {

  const [click, setClick] = useState(false);
  const isMobile = window.innerWidth < 900;
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} alt="img" className="navbar-icon" />
              Raj Vidya Kender
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <IoCloseOutline style={{ color: "#DA9532" }} />
              ) : (
                <RiMenu4Fill style={{ color: "#DA9532" }} />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Initiatives
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Get Involved
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  More
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>

    </>
  );
}

export default NavbarM;
