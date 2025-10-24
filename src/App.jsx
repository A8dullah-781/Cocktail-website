import React, { useEffect } from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.main'),
      smooth: true,
      multiplier: 1,
      lerp: 0.5
    });

    return () => {
      scroll.destroy(); 
    };
  }, []);

  return (
    <main className="main" data-scroll-container>
      <Navbar />
      <Hero />
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
    </main>
  );
};

export default App;
