import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function TextButton(props) {
  return (
    <Container>
      {
        props.src ?
        (<Link to={props.src}>
          <TextButtonBody {...props} />
        </Link>) :
        (<a>
          <TextButtonBody {...props} />
        </a>)
      }
    </Container>
  );  
}

function TextButtonBody(props) {
  return (
    <TextBox onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick} className={props.className} style={
      {
        width: `${props.width}px`,
        height: `${props.height}px`,
        ...props.btnStyle
      }
    }>
      {props.children}
    </TextBox>
  );
}

function ImageButton(props) {
  return (
    <Container>
      {
        props.src ?
        (<Link to={props.src}>
          <ImageButtonBody {...props} />
        </Link>) :
        (<a>
          <ImageButtonBody {...props} />
        </a>)
      }
    </Container>
  );
}

function ImageButtonBody(props) {
  return (
    <ImageBox onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick} className={props.className} src={props.img} style={
      {
        width: `${props.width}px`,
        height: `${props.height}px`,
        ...props.btnStyle
      }
    } />
  );
}

function RectButton(props) {
  return (
    <Container>
      {
        props.src ?
        (<Link to={props.src}>
          <RectButtonBody {...props} />
        </Link>) :
        (<a>
          <RectButtonBody {...props} />
        </a>)
      }
    </Container>
  );
}

function RectButtonBody(props) {
  return (
    <RectBox onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut} onClick={props.onClick} className={props.className} style={
      {
        border: `${props.bdColor ? ("solid 1px " + props.bdColor) : ("")}`,
        backgroundColor: `${props.bgColor ? (props.bgColor) : ("none")}`,
        width: `${props.bdColor ? props.width - 2 : props.width}px`,
        height: `${props.width ? props.height - 2 : props.height}px`,
        ...props.btnStyle
      }}>
      {props.children}
    </RectBox>
  );
}

const Container = styled.div`
  a {
    text-decoration: none;
  }
  cursor: pointer;  
`

const TextBox = styled.span`
  display: flex;  
  justify-content: center;
  align-items: center;
`

const ImageBox = styled.img`
  display: flex;  
  justify-content: center;
  align-items: center;    
`

const RectBox = styled.span`
  display: flex;  
  justify-content: center;
  align-items: center;    
`

export { TextButton, ImageButton, RectButton };