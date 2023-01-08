import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import { motion} from 'framer-motion'
import images from "./../../constants/images"
import SubHeading from "../../components/SubHeading/SubHeading"
import {MdArrowForwardIos,MdArrowBackIos } from "react-icons/md"

const Gallery = () => {
    const scrollRef = React.useRef(null);
  
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    };
    
    const imagesCarousel = [
        images.plateUp, 
        images.plateUp2,
         images.plateUp3, 
         images.plateUp4, 
         images.plateUp5, 
         images.plateUp6, 
         images.plateUp7, 
         images.chickenFork, 
         images.burger, 
         images.burger2, 
         images.chickenPlate 
        ];


    const carousel = useRef();
    const [width,SetWidth] = useState(0);
    
    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        SetWidth( carousel.current.scrollWidth - carousel.current.offsetWidth )
    },[]);

    return(
    
    <div className='app__gallery section__padding app__bg flex__center'>
        <SubHeading title="Galeria"/>

        <motion.div className='app__gallery__container'> {/*app*/}

            <motion.div className='app__gallery__container-images' ref={carousel} whileTap={{cursor:'grabbing'}}>{/*carousel*/}
                <motion.div 
                className='app__gallery__container-inner'
                drag='x'
                dragConstraints={{ right: 0 , left: - width}}
                initial={{ x:100}}
                animate={{x:0}}
                transition={{duration:0.8}}
                >{/*inner*/}

                    {imagesCarousel.map(image =>(
                        <motion.div className='app__gallery__container-items' key={image}>{/*item*/}
                            <img src={image} alt="Pratos do restaurante" />
                        
                        </motion.div>
                    ))}
                    
                </motion.div>

            </motion.div>
        </motion.div>
        <div className='app__gallery-arrows'>
            <MdArrowBackIos className='gallery__arrow-icon' onClick={() => scroll('left')} />
            <MdArrowForwardIos className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
    </div>
)};

export default Gallery;

{/**inner}
                {[images.plateUp, images.plateUp2, images.plateUp3, images.plateUp4, images.plateUp5, images.plateUp6, images.plateUp7, images.chickenFork, images.burger, images.burger2, images.chickenPlate ].map ((images,index) => (
                     <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                     <img src={images} alt="gallery_image" />
                     
                   </div>
                ))}*/}