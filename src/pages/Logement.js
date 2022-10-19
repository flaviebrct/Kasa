import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "../style/pages/Logement.css";
import Data from "../data/data";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

export default function Logement() {
  const params = useParams();
  const validProperty = Data.find((property) => property.id === params.id);

  if (!validProperty) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <h1>{validProperty.title}</h1>
      <p>{validProperty.location}</p>
      <Tags content={validProperty.tags} />
      <div className="collapseContainer">
        <Collapse title="Description" content={validProperty.description} />
        <Collapse title="Équipments" content={validProperty.equipments} />
      </div>
    </>
  );
}
