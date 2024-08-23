import React from "react";
import { useParams, Navigate } from "react-router-dom";
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
        <div className="titleTags">
          <h1 className="thin">{validProperty.title}</h1>
          <p className="thin">{validProperty.location}</p>
          <Tags tags={validProperty.tags} />
        </div>
        <div className="hostRating">
          <HostInfos name={validProperty.host.name} picture={validProperty.host.picture} />
          <Rating star={validProperty.rating} />
        </div>
      </div>
      <div className="collapseContainerLogement">
        <Collapse title="Description" content={validProperty.description} />
        <Collapse title="Équipments" content={validProperty.equipments} />
      </div>
    </section>
  );
}
