import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import "./LVSlider.css";
import YoutubeEmbed from './YoutubeEmbed';
import { multiData } from './data';
import { useState } from 'react';
import { useEffect } from 'react';

const videos = [
  {
    embedUrl: 'fLo7a-GLLCE',
  },
  {
    embedUrl: 'LALIZYKqUzg',
  },
  {
    embedUrl: 'EQdZ54ZdZtA',
  },
  {
    embedUrl: 'NQukm8xz1Ws',
  },
  {
    embedUrl: 'myT1HIO8rAU',
  },
  {
    embedUrl: '6SoqXdY89_o',
  },
  {
    embedUrl: 'Zk5ZzDeYO7A',
  },
  {
    embedUrl: 'ou2Gd8qeFKI',
  },
  {
    embedUrl: '033RuAXlhWk',
  },
  {
    embedUrl: '0H2Tm59BcSw',
  },
  {
    embedUrl: 'hbd_MRSb-p0',
  },
  {
    embedUrl: '-t3Jxx_aiW8',
  },
];


let slidesToShow = 5;


const carouselProperties = {
    dots: true,
  slidesToShow: 5,
  slidesToScroll: 2,
  infinite: false,
  appendDots: (dots) => (
    <div style={{ backgroundColor: 'rgb(241,241,241)' }}>
      <ul style={{ margin: "0px", color: "#DA9532" }}> {dots} </ul>
    </div>
  ),

  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,

        centerMode: false,
      },
    },
    {
      breakpoint: 869,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1630,
      settings: {
        slidesToShow: 4,
        centerMode: false,
      },
    },


  ],
};

const MultiItemCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };


  return (
    <div  className='carousel caro'>
      <Slider {...carouselProperties} className="slidecaro">
        {videos.map((video) => (


          <Card video={video} />


        ))}
      </Slider>
    </div>
  );
};

const Card = ({ video }) => {
  return (
    <>
    <div className = "main" style={{ textAlign: 'center' }}>
    <div className='multi__image'>
    <YoutubeEmbed embedId={video.embedUrl} style={{
      width: "90%",
      height: "340px",
      marginBottom: "10px",
    }}/>
    <div className="lvbreakdiv"></div>
    </div>    </div>
    </>
  );
};

export default MultiItemCarousel;
