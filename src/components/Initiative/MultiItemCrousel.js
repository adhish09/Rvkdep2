import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel1.css";
import { NavLink } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Menu = [
  {
    id: 1,
    image: "../Imgs/I1.jpeg",
    name: "Peace Education Program",
    place: "Delhi",
    redirect: "pep",
  },

  {
    id: 2,
    image: "../Imgs/I2.jpg",
    name: "Food for People",
    place: "Punjab",
    redirect: "humanitarian",
  },
  {
    id: 3,
    image: "../Imgs/I3.jpeg",
    name: "Peace Education Program",
    place: "Jaipur",
    redirect: "pep",
  },
  {
    id: 4,
    image: "../Imgs/I4.jpg",
    name: "COVID Relief Camp",
    place: "Ranchi",
    redirect: "humanitarian",
  },
  {
    id: 5,
    image: "../Imgs/I5.jpg",
    name: "Peace Education Program",
    place: "Delhi",
    redirect: "pep",
  },
];

let slidesToShow = 5;
const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;

  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
    slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  appendDots: (dots) => (
    <div style={{ backgroundColor: "white" }}>
      <ul style={{ margin: "0px", color: "#DA9532" }}> {dots} </ul>
    </div>
  ),

  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 869,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
  ],
};

const MultiItemCarousel1 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { t, i18n } = useTranslation();

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1825) {
    slidesToShow = 4;
  } else {
    slidesToShow = 4;
  }

  return (
    <div className="carousel">
      <div className="bg01">
        <div className="head"> {t('Initiatives')} </div>
        <Slider {...carouselProperties}>
          {Menu.map((curElem) => {
            const { id, image, name, place, redirect} = curElem;

            return (
              <>
                <div><NavLink to={redirect}>
                  <div className="cont">

                    <img className="multi__image0578" src={image} alt="" />
                    <div className="mtext">{name}</div>
                  </div></NavLink>
                </div>
                <div className="colorbreak"></div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MultiItemCarousel1;
