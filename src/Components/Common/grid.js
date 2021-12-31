import styled, { css } from "styled-components";
import React from "react";

function Grid(props) {
  return (
    <GridBox style={
      {
        width: `${props.width}px`,
        height: `${props.height}px`,
        gridTemplateColumns: `repeat(${props.cols}, ${props.colWidth}px)`,
        gridTemplateRows: `repeat(${props.rows}, ${props.rowHeight}px)`,
        rowGap: `${(props.height - (props.rows * props.rowHeight)) / (props.rows-1)}px`,
        columnGap: `${(props.width - (props.cols * props.colWidth)) / (props.cols-1)}px`
      }
    }>
      {props.gridData.map((data, index) => (
        <GridNode data={data} />
      ))}
    </GridBox>
  );
}

function GridNode(props) {
  return (
    <div>{props.data}</div>
  );
}

const GridBox = styled.div`
    display: grid;
`

export default Grid;