import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal } from 'antd';
import {ImYoutube } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import './carousel.css';
import youtube from './youtube.png';
const YoutubeEmbed = ({ embedId }) => {

  const [visible, setVisible] = useState(false);
  const modalStyle = {
    paddingLeft: '0px',
    backgroundColor: 'transparent',

  };

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
  const handleCancel = async () => {
    await setIsPlaying(false);
   await setVisible(false);
  };
  return (
  <div className="video-responsive" >

   <img alt="loading ..." src={embedId.thumbnail}    style={{width:"100%",height:"250px",borderRadius:'12px'}}/>
    <>
      <Button  onClick={() => setVisible(true)} style={{border:"none",color:"red",fontSize:"62px",backgroundColor:"blue", position:"absolute",top:"-9%",left:'27%'}}> <img src={youtube}/></Button>

      <Modal
      visible={visible}
      onCancel={handleCancel}
      closable={true}
      footer={null}
      style={modalStyle}
      width={1000}
      height={600}
      centered={true}
    >
            <ReactPlayer
            url={embedId.play_list_link}
            onPlay={handlePlay}
            onPause={handlePause}
            playing={isPlaying}
            width="100%"
            height="600px"
          />

    <a target="_blank" href={embedId.play_list_link}  style={{marginBottom:"14px",textAlign:"center",background:"#00000008"}}>
    <div   style={{marginBottom:"14px",textAlign:"center",background:"rgb(0 0 0 / 9%)"}}>
     <Button   style={{  marginBottom:"14px",marginTop:"7px"}}  >  Go To Playlist</Button>
     </div>
     </a>
    </Modal>
    </>
  </div>
);
        }
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

