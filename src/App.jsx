import React, { useEffect } from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';

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
      scroll.destroy(); // cleanup jab component unmount ho
    };
  }, []);

  return (
    <main className="main" data-scroll-container>
      <Navbar />
      <Hero />
      <Cocktails/>
    </main>
  );
};

export default App;
