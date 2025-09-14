

import './App.css'

import React from 'react'
import Navbar from './navbar/Navbar'
import AnimeList from './components/AnimeList'
import Slider from './slider/Slider'
import Footer from './Footer/Footer'
import Loader from './Loader/Loader'








const App = () => {
  return (
  <div className="app-layout">
  
{/* <Slider/> */}
    
      <main className="content">
        
        <AnimeList />
      </main>
      <Footer />
    </div>
  )
}

export default App


