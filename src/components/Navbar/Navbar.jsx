import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu1.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  } ,[]);

  const [Menu,setMenu] = useState(false);
  const toggleMenu = () => {
    Menu ? setMenu(false) : setMenu(true);
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={Menu ? '' : 'hide-menu'}>
            <li><Link to='m-recipe' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li> <Link to='recipe' smooth={true} offset={-260} duration={500}>Recipes</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li> <Link to='categories' smooth={true} offset={-260} duration={500}>Categories</Link></li>
            <li><Link to='reviews' smooth={true} offset={-260} duration={500}>Reviews</Link> </li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
