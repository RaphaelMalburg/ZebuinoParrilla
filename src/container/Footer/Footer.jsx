import React from 'react'
import './Footer.css';
import { LogoText, SubHeading } from '../../components';
import { BsWhatsapp,BsFacebook,BsInstagram } from 'react-icons/bs';


const Footer = () => (
    
    <div className='app__footer app__bg section__padding' id='footer'>
        <LogoText/>
        <div className='app__footer__container flex__center'>
            <div className='app__footer__container-side'>
                <SubHeading title='Contato'/>
                <p className='p__opensans'>R. José Paulo da Silva, 179 - Centro, Itajaí - SC, 88302-110, Brasil</p>
                <p className='app__footer-headtext'>Horário de funcionamento</p>
                <p className='p__opensans'>Qua - Sab: 11:30  - 14:00  |  9:00  -  23:00</p>
                <p className='p__opensans'>Dom: 11:30  - 15:00</p>
                <p className='p__opensans'>+55 47 99147-4775</p>
                <div className='app__footer-links_icons'>
                    <a href="https://www.facebook.com/zebuinoparrilla/"><BsFacebook/></a>
                    <a href="https://www.instagram.com/zebuinoparrilla/"><BsInstagram/></a>
                    <a href="https://api.whatsapp.com/message/MCAB63GBMTWEJ1?autoload=1&app_absent=0"><BsWhatsapp/></a>
                </div>
            </div >
            <div className='app__footer__container-map'>
                <iframe width="600" height="436" id="gmap_canvas" src="https://maps.google.com/maps?q=R.%20Jos%C3%A9%20Paulo%20da%20Silva,%20179%20-%20Centro,%20Itaja%C3%AD%20-%20SC,%2088302-110,%20Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0">
                </iframe>
            </div>
           
        </div> 
        <p className='p__opensans flex__center'>2023 Zebuino . Todos direitos reservados.</p>
    </div>
);

export default Footer;