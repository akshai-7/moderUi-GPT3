import React from 'react';
import "./App.css";
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Navbar from './components/navbar/Navbar';

import { Footer,Blog,Possibility,Header,Features,WhatGPT3 } from './container';
const App = () => {
  return (
    <div className='App'> 
      <div className="gradient__bg">
        <Navbar />
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App