import React from "react";
import "../style/components/Banner.css";

export default function Banner(props) {
  return (
    <section className="banner">
      <h1>{props.h1}</h1>
      <div className="blackBaground">
        <img src={props.img} alt="banner" className="bannerImg"></img>
      </div>
    </section>
  );
}
