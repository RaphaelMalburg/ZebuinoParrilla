import React from 'react'
import './AboutUs.css';
import images from '../../constants/images'
import SubHeading from "../../components/SubHeading/SubHeading"

const AboutUs = () => (
    
    <div className='app__aboutus flex__center app__wrapper app__bg section__padding' >
        <div className='app__aboutus__item flex__center'>
            <SubHeading title="Chef"/>
            <p className='p__opensans'>
                 Hércules Santiago, com suas origens na Bahia, faz com sua gastronomia uma conexão dos ingredientes com a técnica adiquirida para extrair o melhor deles. 
            </p>
            <button className='custom__button'><a href="#">Saiba mais</a></button>
        </div>

        <img src={images.knifeImg} alt=" knife image" />

        <div className='app__aboutus__item  flex__center app__bg'>
            <SubHeading title="Z"/>
            <p className='p__opensans'>
                O Zebuino trás uma forma mais simplista porém muito atenta em servir. Poucos ingredientes com exelente qualidade e técnica na execução faz da sua comida uma experiência única.
            </p>
            <button className='custom__button '><a href="#">Venha conhecer</a></button>
        </div>
    </div>
);

export default AboutUs;