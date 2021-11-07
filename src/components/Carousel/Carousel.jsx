import React, { useRef } from "react";
import { Card } from "..";
import { ArrowButtonRight, ArrowButtonLeft } from "../../assets";

import "./carousel.css";
const Carousel = ({ typeofCard, data }) => {
  const carouselRef = useRef(null);

  const prevClick = () => {
    const slide = carouselRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    slide.style.transition = "all 0.2s ease-in-out";
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = carouselRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };
  return (
    <div className="container-carousel">
      <div className="carousel-info" ref={carouselRef}>
        {data.map((card) => (
          <Card key={card.id} card={card} typeofCard={typeofCard} />
        ))}
      </div>

      <div className="carousel-arrow">
        <div className="prev" onClick={prevClick}>
          <ArrowButtonLeft />
        </div>
        <div className="next" onClick={nextClick}>
          <ArrowButtonRight />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
