import './AnimePlay.css'
import React from 'react'

const AnimePlay = ({ anime, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{anime.title}</h2>

        {anime.trailer?.embed_url ? (
          <iframe 
            width="100%" 
            height="400" 
            src={anime.trailer.embed_url} 
            title={anime.title} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <p>No trailer available.</p>
        )}

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default AnimePlay
