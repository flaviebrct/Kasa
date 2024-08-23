import React from "react";

export default function Banner(props) {
  return (
    <section className="banner">
      <h1 className="bannerTitle bold">{props.h1}</h1>
      <div className="blackBackground">
        <img src={props.img} alt="banner" className="bannerImg"></img>
      </div>
    </section>
  );
}
