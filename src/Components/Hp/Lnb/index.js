/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { TextButton } from "../../Common/button";
import Line from "../../Common/line";

function Lnb(props) {
  return (
    <Container>
      <TitleText>Help Center</TitleText>
      <MenuArea>
        <SubtitleText>{props.subUrl === 'download' ? "다운로드" : props.subUrl === 'notice' ? "공지사항" : props.subUrl === 'faq' ? "자주 묻는 질문" : "1:1 문의"}</SubtitleText>
        <MenuTab>
          <ButtonTab>
            <TextButton src="/hp/notice" width="106" height="26" className={props.subUrl === "notice" ? "on" : "off"}>공지사항</TextButton>
            <Line color="#FFFFFF" width="20" lineStyle={{ borderRadius: "5px", display: (props.subUrl === "notice" ? "block" : "none") }} />
          </ButtonTab>
          <ButtonTab>
            <TextButton src="/hp/faq" width="145" height="26" className={props.subUrl === "faq" ? "on" : "off"}>자주 묻는 질문</TextButton>
            <Line color="#FFFFFF" width="20" lineStyle={{ borderRadius: "5px", display: (props.subUrl === "faq" ? "block" : "none") }} />
          </ButtonTab>
          <ButtonTab>
            <TextButton src="/hp/download" width="106" height="26" className={props.subUrl === "download" ? "on" : "off"}>다운로드</TextButton>
            <Line color="#FFFFFF" width="20" lineStyle={{ borderRadius: "5px", display: (props.subUrl === "download" ? "block" : "none") }} />
          </ButtonTab>
          <ButtonTab>
            <TextButton src="/hp/qna" width="102" height="26" className={props.subUrl === "qna" ? "on" : "off"}>1:1 문의</TextButton>
            <Line color="#FFFFFF" width="20" lineStyle={{ borderRadius: "5px", display: (props.subUrl === "qna" ? "block" : "none") }} />
          </ButtonTab>
        </MenuTab>
      </MenuArea>
      <LocationTab>
        <LocationText>
          홈 <CaretRight /> 고객센터 <CaretRight /> {props.subUrl === 'download' ? "다운로드" : props.subUrl === 'notice' ? "공지사항" : props.subUrl === 'faq' ? "자주 묻는 질문" : "1:1 문의"}
        </LocationText>
      </LocationTab>      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1300px;
  height: 263px;
  flex-direction: column;
`

const TitleText = styled.span`
  color: #FF3D21;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.02em;
`

const MenuArea = styled.div`
  display: flex;
  flex-direction: row;
`

const SubtitleText = styled.span`
  display: flex;
  width: 629px;
  height: 75px;
  font-family: Spoqa Han Sans Neo;
  font-size: 60px;
  font-weight: 700;
  line-height: 75px;
  letter-spacing: -0.05em;
  margin: 0 111px 0 91px;
  color: #FFFFFF;
`

const MenuTab = styled.div`
  display: flex;
  width: 489px;
  height: 75px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;

  a {
    font-family: Spoqa Han Sans Neo;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    
  }

  .on {
    font-family: Spoqa Han Sans Neo;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }  
`

const ButtonTab = styled.div`
  display: flex;
  height: 52px;
  flex-direction: column;
  padding: 20px 0 0 0;
  align-items: center;
`

const LocationTab = styled.div`
  display: flex;
  height: 32px;
`

const LocationText = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  align-items: center;
`

const CaretRight = styled.img`
  content:url("/caret_right_white.svg");
`

export default Lnb;