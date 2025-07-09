import React from 'react'
import './About.css'
import play from '../../assets/play.png';
import about from '../../assets/about.jpg'

const About = ({setPlay}) => {
  return (
    <div className='about container'>
        <div className="about-left">
            <img src={about} alt="" className='about-img'/>
            <img src={play} alt="" className='play-icon' onClick={() => {setPlay(true)}}/>
        </div>
        <div className="abput-right">
            <h3>About</h3>
            <h2>Bringing Authentic Indian Recipes to Your Kitchen</h2>
            <p>Our mission is to preserve the rich culinary heritage of India by sharing time-tested recipes passed down through generations.</p>
            <p>Whether you're a beginner or a seasoned cook, our step-by-step guides and curated collections make it easy to explore regional flavors and traditional techniques.</p>
            <p>From spicy street food to comforting home-cooked meals, we’re here to inspire your next delicious creation.</p>
        </div>
    </div>
  )
}

export default About
