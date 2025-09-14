import './slider.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    axios.get('https://api.jikan.moe/v4/top/anime')
      .then((response) => {
        setAnime(response.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      })
  }, [])

  return (
    <div className="anime-carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 9000 }}
        spaceBetween={20}
        slidesPerView={1}
    
      >
        {anime.map((item) => (
          <SwiperSlide key={item.mal_id}>
            <div 
              className='anime-cardSlider'
              style={{
                backgroundImage: `url(${item.images.jpg.large_image_url})`,
              }}
            >
                <img
                className="anime-image"
                src={item.images.jpg.large_image_url}
                alt={item.title}
              />
              
              <div className="discriptions">

                <h2>{item.title}</h2>
                <p>{item.synopsis ? item.synopsis.slice(0, 350) + "..." : "No description"}</p>
                <p>⭐ {item.score}</p>
                <p>📺 {item.type}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider;
