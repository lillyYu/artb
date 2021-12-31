import styled, { css } from "styled-components";
import React from "react";

function Line(props) {
  return (
    <hr
      style={{
        border: `${props.height ? props.height : 1}px solid ${props.color}`, 
        borderBottom: "none",
        height: props.height ? props.height : 1,
        background: props.color,
        padding: 0,
        width: props.width ? props.width : "100%",
        opacity: props.opacity ? props.opacity : "1",
        ...props.lineStyle
      }} />
  );
}

export default Line;