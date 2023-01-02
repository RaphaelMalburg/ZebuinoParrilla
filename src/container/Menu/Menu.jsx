import React from 'react'
import './Menu.css';
import { LogoText, MenuItem, SubHeading } from '../../components';
import { dataMenu } from '../../constants';


const Menu = () => (

    <div className='app__menu  section__padding'>
       <div className='app__menu-title'>
            <LogoText/>
            <SubHeading title="Menu"/>
        </div>

        <div className='app__menu-menulists flex__center'>
            <div className='app__menu__columns'>
                <h1 className='p__cormorant'>LANCHES E BURGUERS</h1>
                {dataMenu.sands.map((sands,index) => (
                <MenuItem key={sands.title + index} title={sands.title} price={sands.price} tags={sands.tag}/>
                ))}
                <h1 className='p__cormorant'>APERITIVOS</h1>
                {dataMenu.apettizers.map((apettizers,index) => (
                    <MenuItem key={apettizers.title + index} title={apettizers.title} price={apettizers.price} tags={apettizers.tag}/>
                ))}
            </div>
            <div className='app__menu__columns'>
                <h1 className='p__cormorant'>ENTRADAS PARA COMPARTILHAR</h1>
                {dataMenu.toShare.map((toShare,index) => (
                    <MenuItem key={toShare.title + index} title={toShare.title} price={toShare.price} tags={toShare.tag}/>
                ))}
                 <h1 className='p__cormorant'>SALSA (Molho)</h1>
                {dataMenu.sauces.map((sauces,index) => (
                    <MenuItem key={sauces.title + index} title={sauces.title} price={sauces.price} tags={sauces.tag}/>
                ))}
                <h1 className='p__cormorant'>POSTRES (Sobremesas)</h1>
                {dataMenu.desserts.map((desserts,index) => (
                    <MenuItem key={desserts.title + index} title={desserts.title} price={desserts.price} tags={desserts.tag}/>
                ))}
               
            </div>
            <div className='app__menu__columns'>
                <h1 className='p__cormorant'>DE LA PARRILLA</h1>
                {dataMenu.grill.map((grill,index) => (
                    <MenuItem key={grill.title + index} title={grill.title} price={grill.price} tags={grill.tag}/>
                ))}
                 <h1 className='p__cormorant' >ACOMPANHAMENTOS</h1>
                {dataMenu.sides.map((sides,index) => (
                    <MenuItem key={sides.title + index} title={sides.title} price={sides.price} tags={sides.tag}/>
                ))}
               
            </div>
            
        </div>
        <button className='custom__button'><a href="#">Faça seu pedido</a></button>
    </div>
)

export default Menu;