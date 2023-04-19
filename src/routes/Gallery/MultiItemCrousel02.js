import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { multiData } from './data01';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ModalSlider from './ModalSlider';
 

let slidesToShow = 5;
const PreviousBtn = (props) => {
 
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ArrowBackIos style={{ color: '#a5a5a5', fontSize: '30px' }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
 
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ArrowForwardIos style={{ color: '#a5a5a5', fontSize: '30px' , marginRight: '-15px'}} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
    slidesToShow: 5,
  slidesToScroll: 3,
  infinite: false,
  appendDots: (dots) => (
    <div style={{ backgroundColor: 'rgb(241,241,241)' }}>
      <ul style={{ margin: "0px", color: "#DA9532" }}> {dots} </ul>
    </div>
  ),

  // slidesToScroll={3}
  responsive: [
    {
      breakpoint:  600 ,
    settings: {
      slidesToShow: 1,
      infinite: true,
    },
  },
  {
    breakpoint:  850 ,
  settings: {
    slidesToShow: 2,
    centerMode: false,
    infinite: false,
  },
},
{
  breakpoint:  1024 ,
settings: {
  slidesToShow: 3,
  centerMode: false,
  infinite: false,
},
},
  {
    breakpoint:  1920 ,
  settings: {
    slidesToShow: 4,
    centerMode: false,
    infinite: false,
  },
}
  ],
};

const MultiItemCarousel02 = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  const [visible, setVisible] = useState(false);

  const [value,setValue] = useState(null);
  const handleModal = (data)=>{
  
       setValue(data)
       setVisible(true);
  }
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const menu = props.g.filter(item=>item.category===2)
  return (
    <div className="carousel">
        <Slider {...carouselProperties}>
          {menu.map((curElem) => {
            const { id, image,   title } = curElem;

            return (
              <div style={{width:"100%", margin:"0 auto"}}>
             <div onClick={()=>handleModal(image)}>
                <div className="main5769" style={{ textAlign: 'center', marginLeft: "20px" }}>
                  <NavLink to=""><img
                    className='multi__image784'
                    src={image}
                    alt=''
                  /></NavLink>
                   
                </div>
                <p className="gallerycont"><h3>{title}</h3></p>
                
              </div>
              </div>
            );
          })}
        </Slider>
        <ModalSlider value={value} handleCancel={handleCancel} visible={visible}/>
    </div>
  );
};

export default MultiItemCarousel02;
