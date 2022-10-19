import React from "react";

export default function Carrousel(props) {
  return (
    <div>
      {Array.isArray(props.src) ? (
        <div>
          {props.src.map((image) => (
            <img src={image} alt="Détails du logement" key={image} />
          ))}
        </div>
      ) : (
        <img src={props.src} alt="Détails du logement" key={props.src} />
      )}
    </div>
  );
}
