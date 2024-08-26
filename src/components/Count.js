import React from "react";

export default function Count(props) {
  return (
    <div className="countContainer thin">
      <p>
        {props.current}/{props.slideLength}
      </p>
    </div>
  );
}
