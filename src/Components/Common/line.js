import styled, { css } from "styled-components";
import React from "react";

function Line(props) {
  return (
    <hr
      style={{
        border: `${props.height ? props.height : 1}px solid ${props.color}`, 
        borderBottom: "none",
        background: props.color,
        padding: 0,
        width: props.width ? `${props.width}px` : "100%",
        opacity: props.opacity ? props.opacity : "1",
        ...props.lineStyle
       
      ,"@media (max-width: 767px)": {
        opacity: "0",
      }}
    } />
  );
}

export default Line;