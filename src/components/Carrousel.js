import React from "react";
import { useState } from "react";
import "../style/components/Carrousel.css";
import Count from "./Count";
import rightArrow from "../img/rightArrow.svg";
import leftArrow from "../img/leftArrow.svg";

export default function Carrousel(props) {
  const [currentSlide, setcurrentSlide] = useState(0);
  const length = props.photos.length;
  const next = () => setcurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  const previous = () => setcurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);

  return (
    <div className="carrouselContainer">
      <Count current={currentSlide + 1} slideLength={length} />
      <button className={length === 1 ? "hidden" : "leftArrow"} onClick={previous}>
        <img src={leftArrow} alt="Flèche vers la gauche" />
      </button>
      <button className={length === 1 ? "hidden" : "rightArrow"} onClick={next}>
        <img src={rightArrow} alt="Flèche vers la droite" />
      </button>
      {props.photos.map((image, index) => (
        <img className={currentSlide === index ? "slideImg current" : "slideImg"} src={image} alt="Détails du logement" key={image} />
      ))}
    </div>
  );
}
