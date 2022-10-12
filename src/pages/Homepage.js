import React from "react";
import Banner from "../components/Banner";
import bannerImage from "../img/banner_img.jpg";

export default function Homepage() {
  return (
    <div>
      <Banner img={bannerImage} h1="Chez vous, partout et ailleurs" />
    </div>
  );
}
