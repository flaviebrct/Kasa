import React from "react";
import "../style/components/Carrousel.css";
import rightArrow from "../img/rightArrow.svg";
import leftArrow from "../img/leftArrow.svg";

export default function Carrousel(props) {
  return (
    <div className="carrouselContainer">
      {Array.isArray(props.src) ? (
        <div className="slides">
          <img
            className="leftArrow"
            src={leftArrow}
            alt="Flèche vers la gauche"
          />
          {props.src.map((image) => (
            <img src={image} alt="Détails du logement" key={image} />
          ))}
          <img
            className="rightArrow"
            src={rightArrow}
            alt="Flèche vers la droite"
          />
        </div>
      ) : (
        <img src={props.src} alt="Détails du logement" key={props.src} />
      )}
    </div>
  );
}
