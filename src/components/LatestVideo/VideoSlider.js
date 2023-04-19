import React from 'react';
import Slider from 'react-slick';

const videos = [
  {
    id: 'video1',
    title: 'Video 1',
    thumbnail: 'https://img.youtube.com/vi/video1/maxresdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/video1',
  },
  {
    id: 'video2',
    title: 'Video 2',
    thumbnail: 'https://img.youtube.com/vi/video2/maxresdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/video2',
  },
  {
    id: 'video3',
    title: 'Video 3',
    thumbnail: 'https://img.youtube.com/vi/video3/maxresdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/video3',
  },
];

function VideoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {videos.map(video => (


        <div key={video.id}>
          <h3>{video.title}</h3>
          <div className="video-wrapper">
            <iframe
              title={video.title}
              width="560"
              height="315"
              src={video.embedUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>


      ))}
    </Slider>
  );
}

export default VideoSlider;