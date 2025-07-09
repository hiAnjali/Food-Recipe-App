import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Mrecipe from './components/Main/Mrecipe'
import Recipes from './components/Recipes/Recipes'
import Title from './components/Title/Title'
import About from './components/About/About'
import Categories from './components/Categories/Categories'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [play, setPlay] = useState(false);



  return (
    <div>
        <Navbar/>
        <Mrecipe/>
        {/* <div className="container">
          <Recipes/>
        </div> */}
        <Title subTitle='Recipes' title='From Our Kitchen to Yours'/>
        <Recipes/>
        <About setPlay={setPlay}/>
        <Title subTitle='Categories' title='Pick a Path to Flavor'/>
        <Categories/>
        <Title subTitle='Reviews' title='Dished Out by Our Users'/>
        <Reviews/>
        <Title subTitle='Contact Us' title='Let’s Cook Up a Conversation'/>
        <Contact/>
        <Footer/>
       <VideoPlayer play={play} setPlay={setPlay}/>
    </div>

    
  )
}

export default App

