import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { popupState } from "../../../store/web2";

import { TextButton } from "../../Common/button";
import Line from "../../Common/line";
import { Popup } from "../../Common/popup";

function Lnb(props) {
  const history = useHistory();
  const [popup, setPopup] = useRecoilState(popupState);
  const script = {
    title: ""
  };

  const closeCallback = () => {
    setPopup({
      flag: false,
      warn: false,
      title: "",
      subtitle: ""
    });
  }  

  if (props.subUrl) {
    switch (props.subUrl) {
      case "favorite": script.title = "찜한 내역"; break;
      case "manage": script.title = "회원정보 관리"; break;
      default: script.title = "구매 내역 상세";
    }
  }
  else
    script.title = "마이페이지";

  return (
    <HeaderContainer>
      {popup.flag ? <Popup onClose={closeCallback} warn={popup.warn} title={popup.title} subtitle={popup.subtitle} /> : <></>}
      <TitleContainer>
        <TitleText>My Page</TitleText>
        <SubtitleContainer>
          <SubtitleText>{script.title}</SubtitleText>
          <SubtitleMenu>
            <TextButton onClick={() => history.push("/mypage/favorite")} width={68} height={28} btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-0.04em",
              margin: "10px 0 10px 0",
              color: props.subUrl === "favorite" ? "#FF3D21" : "#CBCBCB"
            }}>찜한 내역</TextButton>
            <Line color="#FF3D21" width="20" height="4" lineStyle={{ borderRadius: "5px", display: (props.subUrl === "favorite" ? "block" : "none") }} />
          </SubtitleMenu>
          <SubtitleMenu>
            <TextButton onClick={() => history.push("/mypage/manage")} width={100} height={28} btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-0.04em",
              margin: "10px 0 10px 0",
              color: props.subUrl === "manage" ? "#FF3D21" : "#CBCBCB"
            }}>회원정보 관리</TextButton>
            <Line color="#FF3D21" width="20" height="4" lineStyle={{ borderRadius: "5px", display: (props.subUrl === "manage" ? "block" : "none") }} />
          </SubtitleMenu>
        </SubtitleContainer>
        <LocationBar subUrl={props.subUrl} />
      </TitleContainer>
    </HeaderContainer>
  )

  function LocationBar(props) {
    return (
      <LocationArea>
        홈
        <CaretRight />
        {props.subUrl ? "마이페이지" : <LocationIndicator>마이페이지</LocationIndicator>}
        {props.subUrl ? <CaretRight /> : <></>}
        {props.subUrl ? <LocationIndicator>{script.title}</LocationIndicator> : <></> }
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
  align-items: center;
  flex-direction: column;
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