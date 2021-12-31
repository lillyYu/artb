import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { TextButton, ImageButton } from "../Common/button";

function Slider(props) {
  const [pos, setPos] = useState(0)
  const [index, setIndex] = useState(0)
  const moveSlider = (idx) => {
    setIndex(idx)
    setPos(idx * props.height)
  }
  
  return (
    <Container style={{ width: `${props.width}px`, height: `${props.height}px` }}>
      <SliderArea style={{ height: `${props.height}px` }}>
        {
          props.children.map((item, idx) => {
            return (
              <SlideRadioNode circleColor={props.dotColors[index]}>
                <SlideRadio onChange={() => moveSlider(idx)} checked={index === idx} className={index === idx ? "on" : ""} />
                <SlideCircle style={index === idx ? { border: `1px solid ${props.dotColors[index]}` } : {}} />
              </SlideRadioNode>
            );
          })
        }
      </SliderArea>
      <MoveDownArea style={index === (props.children.length - 1) ? {display: "none"} : {display: "flex"} }>
        <MoveText style={{color: props.textColors[index]}}>Scorll Down</MoveText>
        <ImageButton width="24" height="24" img="/scrolldown.svg" onClick={() => moveSlider(index + 1)} />
      </MoveDownArea>
      <SliderBody style={{ marginTop: `${-pos}px` }}>
        {props.children}
      </SliderBody>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`

const SliderBody = styled.div`
  z-index: 3;
  transition: 0.5s;
`

const SliderArea = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 40px;
`

const SlideRadioNode = styled.div.attrs(props => ({circleColor: props.circleColor}))`
  width: 24px;
  height: 24px;
  margin: 0 0 10px 0;

  span:after {
    width: 10px;
    height: 10px;
    content: "";
    position: absolute;
    border-radius: 8px;
    background-Color: ${props => props.circleColor};
    left: 6px;
    top: 6px;
  }
`

const SlideRadio = styled.input.attrs({ type: 'radio' })`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  opacity: 0;
  width: 24px; 
  height: 24px;
  z-index: 3;
  margin: 0;
`

const SlideCircle = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  border-radius: 12px;
`

const MoveDownArea = styled.div`
  position: absolute;
  z-index: 2;
  width: 270px;
  height: 60px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 854px 0 0 840px;
`

const MoveText = styled.span`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.02em;
`

export default Slider;