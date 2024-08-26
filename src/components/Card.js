import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <Link to={"Logement/" + props.id}>
        <img src={props.cover} alt="Logement" className="cardCover"></img>
        <div className="cardGradient"></div>
        <p className="cardTitle bold">{props.title}</p>
      </Link>
    </div>
  );
}
