import React, { useState } from 'react'
import './Hero.css';
import images from '../../constants/images'
import {BsToggleOff,BsToggleOn} from "react-icons/bs"

const Hero = () => {

    const [playVideo,setPlayVideo] = useState(true); 
    const [playAudio,setPlayAudio] = useState(true); 

    const vidRef = React.useRef();
    const audRef = React.useRef();

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if(playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

    const handleAudio = () => {
        setPlayAudio((prevPlayAudio) => !prevPlayAudio)

        if(playAudio) {
            audRef.current.pause();
        } else {
            audRef.current.play();
        }
    }

    return(

    <div className='app__hero section__padding flex__center'>
        <div className='app__navbar__toggle'>
            <div className='app__navbar__toggle-icon'>
                <div onClick={handleVideo}>
                    {playVideo 
                    ? <BsToggleOn color='var(--color-golden)' fontSize={25}/> 
                    : <BsToggleOff color='var(--color-grey)' fontSize={25}/>}
                    
                </div>
               
                <p className='p__opensans'>Video</p>
            </div>
           
            <div className='app__navbar__toggle-icon '>
               <div>
               <div onClick={handleAudio}>
                    {playAudio 
                    ? <BsToggleOn color='var(--color-golden)' fontSize={25}/> 
                    : <BsToggleOff color='var(--color-grey)' fontSize={25}/>}
                    
                </div>
               </div>
                
                <p className='p__opensans'>Audio</p>
            </div>
        </div>
        <div className='app__hero-main flex__center'>
            <button className='custom__button' ><a href="#menu">Explore o Menu</a></button>
            <img src={images.logoWhiteNoBg} className="flex__center"  alt="logo" />
            <video 
            src={images.fireVideo} 
            ref={vidRef} 
            type="video/mp4" 
             muted autoPlay loop></video>

            <audio 
            src={images.fireAudio}  
            ref={audRef}  
            type="audio/mp3" 
             autoPlay loop></audio>
        </div>
        
    </div>
)};

export default Hero;