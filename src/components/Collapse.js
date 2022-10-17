import React, { useState } from "react";
import dropDownArrow from "../img/dropDownArrow.svg";
import "../style/components/Collapse.css";

function Collapse(props) {
  return (
    <div className="dropDownBox">
      <button className="dropDownBtn">
        {props.title}
        <img
          className="dropDownArrow"
          src={dropDownArrow}
          alt="fleche menu déroulant"
        ></img>
      </button>

      <div className="boxContent">{props.content}</div>
    </div>
  );
}

export default Collapse;
