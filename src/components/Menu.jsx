import React, { useRef, useState } from "react";
import { cocktailLists, sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from 'gsap'

const Menu = () => {

    const contentRef = useRef()

  const [currentIndex, setCurrentIndex] = useState(0);


  useGSAP(()=>{
    gsap.fromTo('#title',{opacity:0}, {opacity:1, duration:1, ease:'power1.inOut'})
    gsap.fromTo('.cocktail img', {opacity:0, xPercent:-100}, {xPercent:0, opacity:1, duration:1, ease:'power1.inOut' })
    gsap.fromTo('.details h2',{yPercent:100, opacity:0},{ yPercent:0, opacity:1, ease:'power1.inOut'})
    gsap.fromTo('.details p',{yPercent:100, opacity:0},{ yPercent:0, opacity:1, ease:'power1.inOut'})


       
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'#menu',
            scrub: true
        }
    })
    tl.from('#m-right-leaf',{
        x:100, y:200
    })
    tl.from('#m-left-leaf',{
        x:0, y:-100
    })

  }, [currentIndex])



  const totalCocktails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt =(indexOffSet)=>{
    return sliderLists[(currentIndex + indexOffSet + totalCocktails) % totalCocktails]
  }

  const nowCocktail = getCocktailAt(0)
  const prevCocktail = getCocktailAt(-1)
  const nextCocktail = getCocktailAt(1)

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" id="m-left-leaf" alt="" />
      <img src="/images/slider-right-leaf.png" id="m-right-leaf" alt="" />
      <h2 id="menu-heading" className="sr-only">
        {" "}
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" aria-hidden="true" alt="" />
          </button>

          <button
            className="text-right "
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span >{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" aria-hidden="true" alt="" />
          </button>
        </div>

        <div className="cocktail">
            <img src={nowCocktail.image} alt="" className="object-contain" />
        </div>

<div className="recipe">
    <div ref={contentRef} className="info">
      <p>Recipe For</p>
      <p id="title">{nowCocktail.name}</p>
    </div>
    <div className="details">
        <h2>{nowCocktail.title}</h2>
        <p>{nowCocktail.description}</p>
    </div>
</div>
      </div>
    </section>
  );
};

export default Menu;
