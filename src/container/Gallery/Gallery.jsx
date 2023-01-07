import React from 'react'
import './Gallery.css';
import images from "./../../constants/images"
import SubHeading from "../../components/SubHeading/SubHeading"
import {MdArrowForwardIos,MdArrowBackIos } from "react-icons/md"

const Gallery = () => {
    
    
    return(
    
    <div className='app__gallery app__bg section__padding '>
        <SubHeading title="Galeria"/>
        <div className='app__gallery__content flex__center'>
            <div className='app__gallery__content-images'>
                <img src={images.plateUp} alt="" />
                <img src={images.plateUp2} alt="" />
                <img src={images.plateUp3} alt="" />
                images
            </div>


        </div>

        <div className='app__gallery-arrows'>
            <MdArrowBackIos/>
            <MdArrowForwardIos/>
        </div>
    </div>
)};

export default Gallery;




              {/*div  {[images.plateUp, images.plateUp2, images.plateUp3, images.plateUp4, images.plateUp5, images.plateUp6, images.plateUp7, images.chickenFork, images.burger, images.burger2, images.chickenPlate ].map ((iamge,index) => (
                     <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                     <img src={images} alt="gallery_image" />
                     
                   </div>

              ))}*/}