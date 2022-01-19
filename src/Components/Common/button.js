import React, { useState } from "react";
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
        width: `${props.width}px`,
        height: `${props.height}px`,
        ...props.btnStyle
      }}>
      {props.children}
    </RectBox>
  );
}

function UpDownButton(props) {
  return (
    <UpDownContainer style={{ width: props.width, height: props.height }}>
      <RectButton onClick={() => 0 < props.amount ? props.setAmount(props.amount - 1) : {}}
        width={props.btnBoxStyle.width}
        height={props.btnBoxStyle.height}
        bgColor={props.btnBoxStyle.bgColor}
        bdColor={props.btnBoxStyle.bdColor}
        btnStyle={{borderRadius: "2px 0px 0px 2px"}} >
        <ImageButton img={props.minusSrc} btnStyle={props.btnStyle} />
      </RectButton>
      <StatusText style={props.textStyle}>{props.amount}</StatusText>
      <RectButton onClick={() => props.setAmount(props.amount + 1)}
        width={props.btnBoxStyle.width}
        height={props.btnBoxStyle.height}
        bgColor={props.btnBoxStyle.bgColor}
        bdColor={props.btnBoxStyle.bdColor}
        btnStyle={{borderRadius: "0px 2px 2px 0px"}} >
        <ImageButton img={props.plusSrc} btnStyle={props.btnStyle} />
      </RectButton>
    </UpDownContainer>
  );
}

function UpButton() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <UpButtonContainer onClick={handleTop}>
      <Arrow />
    </UpButtonContainer>    
  )
}

function SwitchButton(props) {
  const [sw, setSw] = useState(0);

  const switchChange = (index) => {
    setSw(index);

    if( props.onChangeCallback )
      props.onChangeCallback(index);
  }

  return (
    <SwitchArea style={{ width: `${props.width}px`, height: `${props.height}px` }}>
      {props.options.map((opt, index) => {
        return (
        <SwitchContainer>
          <SwitchRadio style={{ width: `${props.optionWidth}px`, height: `${props.optionHeight}px`}} checked={sw === index} onChange={() => switchChange(index)} />
          <SwitchShape style={{ width: `${props.optionWidth}px`, height: `${props.optionHeight}px`}} className={sw === index ? "on" : "off"}>{opt}</SwitchShape>
          </SwitchContainer>)
      })
      }
    </SwitchArea>
  )
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
  box-sizing: border-box;
`

const UpDownContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StatusText = styled.span`
`

const UpButtonContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  right: 2%;
  top: 50%;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);  
  justify-content: center;
  align-items: center;    

  @media (max-width:767px) {
    display: none;
  }
`

const Arrow = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  content: url(/arrow_up.svg);
`

const SwitchArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SwitchContainer = styled.div`
  .on {
    background: #FF3D21;
    color: #FFFFFF;    
    font-weight: 700;
  }

  .off{
    background: #FFFFFF;
    color: #656565;    
    border: 1px solid #EEEEEE;
    font-weight: 400;
  }
`

const SwitchRadio = styled.input.attrs({ type: 'radio' })`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 2;
  opacity: 0;
`

const SwitchShape = styled.span`
  position: relative;
  display: flex;
  box-sizing: border-box;
  border-radius: 100px;
  justify-content: center;
  align-items: center;

  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
`

export { TextButton, ImageButton, RectButton, UpDownButton, UpButton, SwitchButton };