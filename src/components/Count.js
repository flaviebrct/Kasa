import React from "react";
import "../style/components/Count.css";

export default function Count(props) {
  return (
    <div className="countContainer">
      <p>
        {props.current}/{props.slideLength}
      </p>
    </div>
  );
}
