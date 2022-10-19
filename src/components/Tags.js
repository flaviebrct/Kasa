import React from "react";

export default function Tags(props) {
  return (
    <>
      {props.tags.map((tag) => {
        return <p key={tag}>{tag}</p>;
      })}
    </>
  );
}
