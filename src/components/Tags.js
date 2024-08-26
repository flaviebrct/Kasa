import React from "react";

export default function Tags(props) {
  return (
    <div className="tagsContainer">
      {props.tags.map((tag) => {
        return <p className="tag bold" key={tag}>{tag}</p>;
      })}
    </div>
  );
}
