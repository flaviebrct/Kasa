import React from "react";
import "../style/pages/About.css";
import Banner from "../components/Banner";
import bannerAboutImage from "../img/banner_about.jpg";

export default function About() {
  return (
    <div className="aboutBody">
      <Banner img={bannerAboutImage} />
      <section className="collapse"></section>
    </div>
  );
}
