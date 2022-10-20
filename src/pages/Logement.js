import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "../style/pages/Logement.css";
import Data from "../data/data";
import Carrousel from "../components/Carrousel";
import HostInfos from "../components/HostInfos";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

export default function Logement() {
  const params = useParams();
  const validProperty = Data.find((property) => property.id === params.id);

  if (!validProperty) {
    return <Navigate to="/404" />;
  }

  return (
    <section className="logementContainer">
      <Carrousel photos={validProperty.pictures} />
      <div className="infoContainer">
        <div className="logementTitle">
          <h1>{validProperty.title}</h1>
          <p>{validProperty.location}</p>
        </div>
        <HostInfos name={validProperty.host.name} picture={validProperty.host.picture} />
      </div>
      <div className="tagsRatingWrapper">
        <Tags tags={validProperty.tags} />
        <Rating star={validProperty.rating} />
      </div>
      <div className="collapseContainerLogement">
        <Collapse title="Description" content={validProperty.description} />
        <Collapse title="Équipments" content={validProperty.equipments} />
      </div>
    </section>
  );
}
