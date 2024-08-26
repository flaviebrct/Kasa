import React from "react";
import redStar from "../img/redStar.svg";
import greyStar from "../img/greyStar.svg";

export default function Rating(props) {
  return (
    <div className="ratingContainer">
      <img className="star" src={props.star >= 1 ? redStar : greyStar} alt="Note de ce logement." />
      <img className="star" src={props.star >= 2 ? redStar : greyStar} alt="Note de ce logement." />
      <img className="star" src={props.star >= 3 ? redStar : greyStar} alt="Note de ce logement." />
      <img className="star" src={props.star >= 4 ? redStar : greyStar} alt="Note de ce logement." />
      <img className="star" src={props.star >= 5 ? redStar : greyStar} alt="Note de ce logement." />
    </div>
  );
}
