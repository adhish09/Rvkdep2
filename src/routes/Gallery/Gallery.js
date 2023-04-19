import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MultiItemCarousel01 from "./MultiItemCrousel01";
import MultiItemCarousel02 from "./MultiItemCrousel02";
import MultiItemCarousel03 from "./MultiItemCrousel03";
import MultiItemCarousel04 from "./MultiItemCrousel04";
import Galleryrvk from "./Galleryrvk.png";
import "./Gallery.css";
import axios from "../../services/apiService";

const Image = styled.img`
  width: 100%;
  height: 400px;
  align-items: center;
`;

const Div = styled.div`
  color: #d9d9d;
`;

function Gallery() {
  window.scrollTo(0,0)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }
  let [des,setDes] = useState([])
  useEffect(()=>{
   axios.get('/api/gallerycategory/' )
   .then(res=>{
     setDes(res.data )
    
   })
  },[])
  let [g,setG] = useState([])
  useEffect(()=>{
   axios.get('/api/mediaview/' )
   .then(res=>{
     setG(res.data )
     console.log(res.data);
   })
  },[])
   
  return (
    <div>
      {" "}
      <div className="eventallimage"  >
        <Image src={Galleryrvk} />
        
      </div>
      <div className="gallery097">
      <div className="latest">
        <div className="lat1">  {des[0]?.title}  </div>
        <MultiItemCarousel01 g={g}/>
        <div className="break"></div>
        <div className="lat1">  {des[1]?.title} </div>
        <MultiItemCarousel02 g={g}/>
        <div className="break"></div>
        <div className="lat1">{des[2]?.title} </div>
        <MultiItemCarousel03 g={g} />
        <div className="break"></div>
        <div className="lat1">{des[3]?.title} </div>
        <MultiItemCarousel04
        g={g} />
        <div className="break"></div>
      </div></div>
    </div>
  );
}

export default Gallery;
