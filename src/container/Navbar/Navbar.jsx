import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import ToggleVidAud from '../../components/ToggleVidAud/ToggleVidAud'

import images from '../../constants/images'

import './Navbar.css';
const Navbar = () => {
    
    const [toggleMenu,setToggleMenu] = useState(false);
    
    return(
    
    <nav className='app__navbar '>
        <div className='app__navbar-logo '>
            <a href="#"><img src={images.brandLogoNoBg} alt="Logo-image" /></a>
        </div>

        <div className='app__navbar__items'>
            <ul className='app__navbar__items-links'>
                <li className='p__opensans'><a href="#">Home</a></li>
                <li className='p__opensans'><a href="#sobre">Sobre</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#galeria">Galeria</a></li>
                <li className='p__opensans'><a href="#contato">Contato</a></li>
            </ul>

        </div>

        <div className='app__navbar__toggle'>
            <div className='app__navbar__toggle-icon'>
                <img src={images.toggleGolden} alt="toggle video" onClick={() => setToggleVid(false)}/>
                <p className='p__opensans'>Video</p>
            </div>
           
            <div className='app__navbar__toggle-icon '>
                <img src={images.toggleGrey} alt="Toggle audio" onClick={() => setToggleAud(false)} />
                <p className='p__opensans'>Audio</p>
            </div>
        </div>


        <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

            {toggleMenu && (
            <div className='app__navbar-smallscreen__overlay flex__center'>
                 <MdOutlineRestaurantMenu  className='overlay__close'  onClick={()=>setToggleMenu(false)} />
                <ul className='app__navbar-smallscreen__items-links'  onClick={()=>setToggleMenu(false)}  >
                    <li className='p__opensans'><a href="#">Home</a></li>
                    <li className='p__opensans'><a href="#sobre">Sobre</a></li>
                    <li className='p__opensans'><a href="#menu">Menu</a></li>
                    <li className='p__opensans'><a href="#galeria">Galeria</a></li>
                    <li className='p__opensans'><a href="#contato">Contato</a></li>
                </ul>

            </div>
            )}
        </div>
    </nav>
)};

export default Navbar;