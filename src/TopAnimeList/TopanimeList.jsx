import './TopAnimeList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AnimePlay from '../components/AnimePlay';
import React from 'react'
import Footer from '../Footer/Footer';

const TopanimeList = () => {
    const [anime, setAnime] = useState([]);
      // const [selectedAnime, setSelectedAnime] = useState(null); 


      useEffect(() => {
    // setloading(true);
    axios.get('https://api.jikan.moe/v4/top/anime')
      .then((response) => {
        console.log(response.data.data)
        setAnime(response.data.data)
        // setloading(false);
      })
      .catch((error) => {
        console.log("error", error);
        // setloading(false);
      })
  }, []);
  return (
     <>
    <div className='TopanimeList-container'
    //  onClick={() => setSelectedAnime(item)}
    >
        {/* <div className="listtitle">
 <h3>Top Anime List</h3>
        </div> */}
       
     

  {
       
      anime.slice(0,10).map((item) => (
       <div className="anime-table" key={item.mal_id}>
  <div className="anime-img">
    <img src={item.images.jpg.large_image_url} alt={item.title} />
  </div>

  <div className="anime-info">
    <p>#{item.rank}</p>
  
    <h2>{item.title}</h2>
      <h2>⭐ {item.score}</h2>
  </div>
</div>

     ) )}

     {/* <AnimePlay anime={selectedAnime} onClose={() => setSelectedAnime(null)} /> */}


    </div>
      {/* <Footer/> */}
     </>
  )
}

export default TopanimeList