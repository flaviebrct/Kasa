import React from "react";
import "../style/components/HostInfos.css";

export default function HostInfos(props) {
  return (
    <div className="hostInfos">
      <p>{props.name}</p>
      <img src={props.picture} alt="Propriétaire du logement" />
    </div>
  );
}
