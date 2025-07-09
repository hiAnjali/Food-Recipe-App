import React from 'react'
import './Recipes.css';
import Recipe1 from '../../assets/biryani.jpg';
import Recipe2 from '../../assets/paneer-tikka.jpg';
import Recipe3 from '../../assets/dosa.jpg';


const Recipes = () => {


  return (
    <div className='recipes container'>
        <div className="recipe">
            <img src={Recipe1} alt="" />
            <div className="caption">
                <strong>Biryani</strong>
               <p>A fragrant rice dish layered with 
                marinated meat or vegetables, slow-cooked with spices like saffron, cardamom, and cloves. 
                A royal favorite across India.</p>
            </div>
        </div>
        <div className="recipe">
            <img src={Recipe2} alt="" />
            <div className="caption">
                <strong>Paneer Tikka</strong>
                <p>Cubes of paneer marinated in spiced yogurt, skewered with bell peppers and onions, and grilled to smoky perfection.
                     A vegetarian tandoori classic.</p>
            </div>
        </div>
        <div className="recipe">
            <img src={Recipe3} alt="" />
            <div className="caption">
                <strong>Dosa</strong>
                <p>A crispy, golden South Indian crepe made from fermented rice and lentil batter.
                     Often served with coconut chutney and spicy sambar.</p>
            </div>
        </div>
    </div>
  )
}

export default Recipes
