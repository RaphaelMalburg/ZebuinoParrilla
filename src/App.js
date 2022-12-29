import React from 'react';
import './App.css';
import {AboutUs, Chef, Footer, Gallery, Hero, Menu, Navbar} from './container';


const App = () => (
  <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Gallery/>
      <Footer/>

  </div>


);

export default App;
