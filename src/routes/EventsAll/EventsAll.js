import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MultiItemCarousel from "./MultiItemCrousel";
import Galleryrvk from "./eventsrvk.png";
import "./EventsAll.css";
import { BsShare } from "react-icons/bs";
import { MdArrowForward } from "react-icons/md";
import { CgMailForward } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import item from "./item.png";
import axios from "../../services/apiService";
import MultiItemCarousel2 from "../../components/Events/MultiItemCrousel";

const Image = styled.img`
  width: 100%;
  height: auto;
  align-items: center;
`;

const Div = styled.div`
  padding: 25px;
  color: #d9d9d;
`;

// utility functions
const getTime = (date) => {
  const dateObj = new Date(date);
  const timeString = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return timeString;
};

const getDate = (date) => {
  const dateObj = new Date(date);
  const options = { month: "long", year: "numeric" };
  const dateString = dateObj.toLocaleString("en-US", options);

  return dateString;
};

function Events() {
  window.scrollTo(0,0)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [events, setEvents] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    // Submit form data to server
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/events/");
        
        const filter = response.data.filter(item=>item.is_event_complete===true)
       
        setEvents(filter);
      } catch (error) {
       
      }
    };

    fetchEvents();
  }, []);

  return (
    <div  >
      {" "}
      <Div>
        <Image src={Galleryrvk} />
      </Div>
      <div className="eventsallhead">
        <MultiItemCarousel2/></div>
      <div className="latest">
        <div className="break"></div>
        <MultiItemCarousel  events={events } />
      </div>
    </div>
  );
}

export default Events;
