import React from 'react'
import './Chef.css';
import images from "./../../constants/images"
import SubHeading from "../../components/SubHeading/SubHeading"

const Chef = () => (
    
    <div className='app__chef flex__center section__padding app__bg' >
        
        <div className='app__chef-img'>
            <img src={images.chef} alt="chef_image" />
        </div>
        <div className='app__chef__sidetext flex__center'>
            <h1 className='p__opensans '>Palavras do Chef</h1>
            <SubHeading title="Ideais" className="app__chef-subheading"/>

    
            <div className='app__chef__sidetext__quote '>
                
                <p className='p__opensans'>
                    <img src={images.quote} alt="quotation mark" />
                     A gastronomia nos transporta para momentos de conexão 
                     e faz com que 
                     consigamos unir uma memória a um sabor ou aroma. 
                    Na relação mais purista com o alimento surge o Z, que possibilita transparecer o
                    real sabor dos alimentos em seu melhor preparo.
                </p>
            </div>
        

            <div className='app__chef__tags'>
                <p className='p__cormorant'>Hércules Santiago</p>
                <p className='p__opensans'>Chef & Proprietário</p>
            </div>
           <div className="app__chef__container-signature">
                        <img src={images.signature} width={"150px"} className="app__chef-signature" alt="chef signature" />

           </div>
            
        </div>
    </div>
);

export default Chef; 