import React from "react";

export default function HostInfos(props) {
  return (
    <div className="hostInfos">
      <p className="hostName thin">{props.name}</p>
      <img src={props.picture} alt="Propriétaire du logement" />
    </div>
  );
}
