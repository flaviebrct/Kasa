import React from "react";
import "../style/pages/Homepage.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerImage from "../img/banner_img.jpg";
import logementsDatas from "../data/data";

export default function Homepage() {
  return (
    <div className="homepageBody">
      <Banner img={bannerImage} h1="Chez vous, partout et ailleurs" />
      <section className="cardsContainer">
        {logementsDatas.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              cover={data.cover}
              title={data.title}
            />
          );
        })}
      </section>
    </div>
  );
}
