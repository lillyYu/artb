import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { RectButton } from "./button";

function Popup(props) {
  const [pos, setPos] = useState(50);

  useEffect(() => {
    const timerId = setTimeout(() => {
      props.onClose();
    }, 3000);
    return () => clearTimeout(timerId);
  });

  useEffect(() => {
    setPos(0);
  }, []);

  return (
    <Container style={{ marginTop: `${-pos}px` }}>
      <PopupBox style={{ background: props.warn === true ? "#D1504B" : "#303030" }}>
        <PopupArea>
          <PopupIcon src={ props.warn === true ? "/warn_icon.svg" : "/info_icon.svg" } />
          <TextArea>
            <PopupTitle>{props.title}</PopupTitle>
            <PopupSubtitle>{props.subtitle}</PopupSubtitle>
          </TextArea>
          <RectButton onClick={props.onClose}
            width={56}
            height={52}
            bdColor="#FFFFFF"
            btnStyle={{ borderRadius: "5px" }}><CloseIcon />
          </RectButton>
        </PopupArea>
      </PopupBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1920px;
  position: absolute;
  z-index:2;
  justify-content: center;
  transition: 0.4s;
`
const PopupBox = styled.div`
  display: flex;
  width: 1300px;
  height: 92px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);  
  border-radius: 10px;
  margin: 20px 0 0 0;
`

const PopupArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 20px;
`

const PopupIcon = styled.img`
  width: 20px;
  height: 20px;
`

const TextArea = styled.div`
  display: flex;
  width: 1140px;
  flex-direction: row;
  margin: 0 20px 0 22px;
`

const PopupTitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #FFFFFF;
  margin: 0 20px 0 0;
`

const PopupSubtitle = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.5px;
  color: #FFFFFF;
`

const CloseIcon = styled.img`
  width: 21px;
  height: 21px;
  content: url(/close_icon.svg);
`

export default Popup;