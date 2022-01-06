import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { TextButton } from "../../Common/button";

function Lnb(props) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleText>My Page</TitleText>
        <SubtitleContainer>
          <SubtitleText>마이페이지</SubtitleText>
          <SubtitleMenu>
            <TextButton width={68} height={28} btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-0.04em",
              color: "#CBCBCB"                
            }}>찜한 내역</TextButton>
          </SubtitleMenu>
          <SubtitleMenu>
            <TextButton width={100} height={28} btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-0.04em",
              color: "#CBCBCB"
            }}>회원정보 관리</TextButton>
          </SubtitleMenu>
        </SubtitleContainer>
        <LocationBar />
      </TitleContainer>
    </HeaderContainer>
  )

  function LocationBar() {
    return (
      <LocationArea>
        홈
        <CaretRight />
        <LocationIndicator>마이페이지</LocationIndicator>
      </LocationArea>
    );
  }
}

const HeaderContainer = styled.div`
  display: flex;
  height: 300px;
  background-image: url(/complete_background.png);
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  width: 1300px;
  height: 96px;
  margin: 80px 0 0 0;
  flex-direction: column;
`

const TitleText = styled.span`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #FF3D21;
  margin: 0 0 10px 0;
`

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 40px 0;
`

const SubtitleText = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.05em;
  color: #FFFFFF;
  height: 60px;
  width: 1042px;
`

const SubtitleMenu = styled.div`
  display: flex;
  width: 140px;
  height: 52px;
  justify-content: center;
  align-items: center;
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
  color: #CBCBCB;
`

const LocationIndicator = styled.span`
  color: #FFFFFF;
`

const CaretRight = styled.img`
  width: 24px;
  height: 24px;
  content: url(/caret_right_gray.svg);
`

export default Lnb;