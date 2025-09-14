import './Overlay.css'

import React from 'react'

const Overlay = ( {title , synopsis, title_japanese , aired , status , generes }) => {
  return (
    <div className='anime-overlay'>
        <h3>{title}</h3>
      
        <p>{synopsis}</p>
          <h4>{title_japanese}</h4>
        <p>Aired: {aired}</p>
        <p>Status: {status}</p>
        <p>Generes: {generes}</p>




    </div>

  )
}

export default Overlay