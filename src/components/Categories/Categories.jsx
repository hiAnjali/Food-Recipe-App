import React from 'react'
import './Categories.css'
import cat1 from '../../assets/cat1.jpg';
import cat2 from '../../assets/cat2.jpg';
import cat5 from '../../assets/cat5.jpg';
import cat4 from '../../assets/cat4.jpg';


const Categories = () => {
  return (
    <div className='categories'>
        <div className="category">
            <img src={cat1} alt="" />
            <img src={cat2} alt="" />
            <img src={cat5} alt="" />
            <img src={cat4} alt="" />
        </div>
        <button className='btn'>More Here </button>
    </div>
  )
}

export default Categories
