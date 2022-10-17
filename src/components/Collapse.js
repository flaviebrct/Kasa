import React, { useState } from "react";
import dropDownArrow from "../img/dropDownArrow.svg";
import "../style/components/Collapse.css";

function Collapse(props) {
  const [collapseOpen, setCollapseOpen] = useState(null);
  const collapseState = () => setCollapseOpen(!collapseOpen);

  return (
    <div className="dropDownBox">
      <button className="dropDownBtn" onClick={collapseState}>
        {props.title}
        <img
          className={collapseOpen ? "arrow open" : "arrow"}
          src={dropDownArrow}
          alt="fleche menu déroulant"
        ></img>
      </button>

      <div className={collapseOpen ? "boxContent" : "boxContent hidden"}>
        {props.content}
      </div>
    </div>
  );
}

export default Collapse;
