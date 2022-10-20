import React from "react";
import "../style/components/Tags.css";

export default function Tags(props) {
  return (
    <div className="tagsContainer">
      {props.tags.map((tag) => {
        return <p key={tag}>{tag}</p>;
      })}
    </div>
  );
}
