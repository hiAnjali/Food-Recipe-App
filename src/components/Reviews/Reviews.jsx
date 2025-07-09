import React, { useRef } from 'react'
import './Reviews.css'
import next from '../../assets/arrow_right.png'
import back from '../../assets/arrow_back.png'
import user1 from '../../assets/user1.jpg'
import user3 from '../../assets/user3.jpg'
import user2 from '../../assets/user2.jpg'
import user4 from '../../assets/user4.jpg'

const Reviews = () => {

    const slider = useRef();
    let translatex = 0;


    const slideForward = () => {
        if(translatex > -50){
            translatex-=25;
        }
        slider.current.style.transform = `translateX(${translatex}%)`
    }

    const slideBackward = () => {
        if(translatex < 0){
            translatex+=25;
        }
        slider.current.style.transform = `translateX(${translatex}%)`
    }

  return (
    <div className='reviews'>
        <img src={next} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Riya Sharma</h3>
                                <span>Mumbai, India</span>
                            </div>
                        </div>
                        <p>“The biryani recipe was spot on! It reminded me of my grandmother’s cooking. So flavorful and easy to follow.”</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Arjun Mehta</h3>
                                <span>Delhi, India</span>
                            </div>
                        </div>
                        <p>“I tried the paneer tikka and it turned out amazing! The marinade was perfect. Definitely making it again.”</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Neha Kapoor</h3>
                                <span>Bangalore, India</span>
                            </div>
                        </div>
                        <p>“Loved the dosa recipe! Crispy on the outside and soft inside. The coconut chutney suggestion was a great touch.”</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Vikram Joshi</h3>
                                <span>Pune, India</span>
                            </div>
                        </div>
                        <p>“This site is a gem! I’ve bookmarked so many recipes already. The layout is clean and the steps are beginner-friendly.”</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Reviews
