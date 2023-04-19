import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data, multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import {Link } from "react-router-dom";


// utility functions
const getTime = (date)=>{

  const dateObj = new Date(date);
  const timeString = dateObj.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
  
  return timeString

}

const getDate=(date)=>{
  const dateObj = new Date(date);
  const options = { month: 'long', year: 'numeric' };
  const dateString = dateObj.toLocaleString('en-US', options);
  
  return dateString;

}


let slidesToShow = 5;
const PreviousBtn = (props) => {
  
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
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 746,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

        centerMode: false,
      },
    },
  ],
};
const MultiItemCarousel = ({ events}) => {
 
  const [width, setWidth] = useState(window.innerWidth);
  


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
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 4;
  }

  return (
    <div style={{ margin: "20px" }} className="carousel">
      <div className="headings">
        <div className="h2">Check our Old events</div>
        
      </div>
      <Slider {...carouselProperties}>
        { events.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
 

  return (
    <div style={{ textAlign: "center", padding: "0px", margin: "20px" }}>
      <div className="eve">
        <img
          className="multi__image"
          src={item.event_image}
          alt=""
          style={{
            width: "100%",
            height: "260px",
            marginBottom: "10px",
          }}
        />
        <div className="cardd">
        <h3 style={{textAlign:'left',marginLeft:"15px",paddingTop:"5px"}}>{item.event_name
          }</h3>
          <div className="c2">
            <div className="r1">
              <GoLocation style={{ color: "orange" }} />{item.location}
            </div>
            <div className="r2">
              <AiOutlineClockCircle size={13} style={{ color: "orange" }} />
              {getTime(item.start)} to {getTime(item.end)}
            </div>
          </div>
          <div className="name">{item.name}</div>
          {/* <Link to={`/event/${item.id}/register`}><div className="join">Join with us <BsArrowRight size={16}/> </div></Link> */}

          </div>
        
      </div>
    </div>
  );
};

export default MultiItemCarousel;
