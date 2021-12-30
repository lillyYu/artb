import React from "react";

function Line(props) {
  return (
    <hr style={
      {
        border: "none",
        color: props.color,
        backgroundColor: props.color,
        width: props.width ? props.width : "100%",
        height: props.height ? props.height : "1px",
        opacity: props.opacity ? props.opacity : "1",
        ...props.lineStyle
      }} />
  );
}

export default Line;