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

function PopupDialog(props) {
  const width = props.width ? props.width : 640;

  return (
    <DialogContainer>
      <DialogCard style={{ width: `${width}px` }}>
        <DialogArea style={{ width: `${width - 80}px` }}>
          <DialogTitleArea style={{margin: `0 0 ${props.children ? 20 : 0}px 0`}}>
            {props.icon ? <DialogTitleIcon src={props.icon} /> : <></>}
            <DialogTitleText>{props.title}</DialogTitleText>
            {props.subtitle ? props.subtitle.map((line) => {
              return <DialogSubtitleText>{line}</DialogSubtitleText>
            }) : <></>}
          </DialogTitleArea>
          {props.children}
          <DialogButtonContainer>
            <DialogButtonArea style={{ width: `${props.buttons.length * 160 + (props.buttons.length - 1) * 10}px`}}>
              {props.buttons.map((button) => {
                return (
                  <RectButton width={160} height={52} bgColor={button.bgColor} bdColor={button.bdColor} onClick={button.click} btnStyle={button.style}>
                    {button.name}
                  </RectButton>
                )
              })}
            </DialogButtonArea>
          </DialogButtonContainer>
        </DialogArea>
      </DialogCard>
    </DialogContainer>
  )
}

function PopupDialogCustom(props) {
  return (
    <DialogContainer>
      {props.children}
    </DialogContainer>
  )
}

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 1920px) {
    width: 100vw;
  }

  @media (max-width:1023px) {
    width: 100vw;
  }

  position: absolute;
  z-index: 50;
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

const DialogContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow:hidden;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`

const DialogCard = styled.div`
  display: flex;
  background: #FFFFFF;
  box-shadow: 0px -4px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;  
  justify-content: center;
`

const DialogArea = styled.div`
  display: flex;
  margin: 40px 0;
  flex-direction: column;
`

const DialogTitleIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 0 20px 0;
`

const DialogTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DialogTitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.04em;
  color: #000000;
  margin: 0 0 10px 0;
`

const DialogSubtitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.04em;
  color: #656565;
`

const DialogButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0 0;
`

const DialogButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export { Popup, PopupDialog, PopupDialogCustom };