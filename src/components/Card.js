import React from "react";
import "../style/components/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <Link to={"Logement/" + props.id}>
        <img src={props.cover} alt="Logement" className="cardCover"></img>
        <div className="cardGradient"></div>
        <p className="cardTitle">{props.title}</p>
      </Link>
    </div>
  );
}
