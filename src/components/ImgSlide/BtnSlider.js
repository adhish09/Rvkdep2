import React, { useState } from "react";
import "./Slider.css";
import leftArrow from "./icons/left.png";
import rightArrow from "./icons/right.png";
import leftArrow1 from "./icons/leftmm.png";
import rightArrow1 from "./icons/rightmm.png";
export default function BtnSlider({ direction, moveSlide }) {
  
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="img" />
    </button>
  );
}
