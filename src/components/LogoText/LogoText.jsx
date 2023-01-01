import React from 'react'
import './LogoText.css';
import images from '../../constants/images'

const LogoText = () => (

    <div className='LogoText__align'>
        <img src={images.logoWhiteNoBg} alt="logo icon" />
        <p className='p__cormorant'>ZEBUINO Parrilla e Fogo</p>
    </div>
)

export default LogoText;