import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Popup from "../../Common/popup";
import { RectButton } from "../../Common/button";

import Purchase from "../Purchase";

function Complete(props) {
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    warn: false,
    title: '',
    subtitle: ''
  });

  useEffect(() => {
    setPopupData({
      warn: false,
      title: "이메일 전송완료",
      subtitle: "회원가입 이메일로 전송되었습니다."
    });
    setPopup(true);
  }, []);  

  const closeCallback = () => {
    setPopup(false);
  }

  return (
    <Container>
      {popup ? <Popup onClose={closeCallback} warn={popupData.warn} title={popupData.title} subtitle={popupData.subtitle} /> : <></>}
      <CompleteHeader/>
      <Purchase id={props.match.params.id} showImage={false} />
    </Container>
  );

  function LocationBar() {
    return (
      <LocationArea>
        홈
        <CaretRight />
        NFT 리스트
        <CaretRight />
        결제
        <CaretRight />
        결제완료
      </LocationArea>
    );
  }  

  function CompleteHeader() {
    return (
      <HeaderContainer>
        <LocationContainer>
          <LocationBar />
        </LocationContainer>
        <HeaderImage/>
      </HeaderContainer>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 1920px;
  flex-direction: column;
`

const HeaderContainer = styled.div`
  display: flex;
  height: 300px;
  background-image: url(/complete_background.png);
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
`

const LocationContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 32px;
  margin: 40px 0 40px 0;
`

const LocationArea = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  align-items: center;
  height: 32px;
  color: #A6A6A6;
`

const CaretRight = styled.img`
  width: 24px;
  height: 24px;
  content: url(/caret_right_gray.svg);
`

const HeaderImage = styled.img`
  content: url(/complete_top.png);
  width: 300px;
  height: 300px;
`

export default Complete;