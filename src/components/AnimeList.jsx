import './AnimeList.css'
import axios from 'axios'
import AnimePlay from './AnimePlay';
import Navbar from '../navbar/Navbar';
import Loader from '../Loader/Loader';
import SkeletonCard from '../skeletonCard/SkeletonCard';
import React, { useEffect, useState } from 'react'
import Slider from '../slider/Slider';
import TopanimeList from '../TopAnimeList/TopanimeList';
import Footer from '../Footer/Footer';

const AnimeList = () => {
  const [anime, setAnime] = useState([]);
  const [ search , setsearch] = useState("");
  const [loading , setloading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null); 
  const [visibleCount , setVisibleCount] = useState(15);


  const [shwoTopAnime , setShowTopAnime] = useState(true);

  useEffect(() => {
    setloading(true);
    axios.get('https://api.jikan.moe/v4/top/anime')
      .then((response) => {
        console.log(response.data.data)
        setAnime(response.data.data)
        setloading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setloading(false);
      })
  }, []);

  const filteredAnime = anime.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const handleShowmore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <>
      <Navbar search={search} setsearch={setsearch} 

      
      
      />
      
      <Slider />

      <div className="animelayout">
        {/* <Slider/> */}


        {/* Left Layout (Anime List) */}
        <div className='anime-container'>

          {/* <h1 className="section-title">Animes</h1> */}
          {
            loading ? ( 
              [...Array(10)].map((_, i) => <SkeletonCard key={i} />)
            ) : (
              filteredAnime.slice(0,visibleCount).map((item) => (
                <div 
                  className='anime-card' 
                  key={item.mal_id}
                  onClick={() => setSelectedAnime(item)} // open trailer when clicked
                >
                  <img src={item.images.jpg.large_image_url} alt={item.title} />
                  <h2>{item.title}</h2>
                  <p className='score-badge'>⭐ {item.score}</p>
                  <p>📺 {item.type}</p>
                  <p> Episodes [ {item.episodes} ]</p>
                </div>
              ))
            )
          }

          {/* Show More Button */}
          {!loading && visibleCount < filteredAnime.length && (
            <div className="show-more-container">
              <button className="show-more-btn" onClick={handleShowmore}>
                Show More
              </button>
            </div>
          )}

          {selectedAnime && (
            <AnimePlay anime={selectedAnime} onClose={() => setSelectedAnime(null)} />
          )}
        </div>

        {/* Right Layout (Top Anime List) */}
        <div className="rightlayout">
          <h1 className="section-title">Top Anime</h1>
          <TopanimeList />
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
};

export default AnimeList;
