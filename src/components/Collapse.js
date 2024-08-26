import React, { useState } from "react";
import dropDownArrow from "../img/dropDownArrow.svg";

function Collapse(props) {
  const [collapseOpen, setCollapseOpen] = useState(null);
  const collapseState = () => setCollapseOpen(!collapseOpen);

  return (
    <div className="dropDownBox">
      <button className="dropDownBtn bold" onClick={collapseState}>
        {props.title}
        <img className={collapseOpen ? "arrow open" : "arrow"} src={dropDownArrow} alt="fleche menu déroulant"></img>
      </button>

      <div className={collapseOpen ? "boxContent" : "boxContent hidden"}>
        {Array.isArray(props.content) ? (
          <ul>
            {props.content.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        ) : (
          <p>{props.content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
