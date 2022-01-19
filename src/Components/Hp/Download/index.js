/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Line from "../../Common/line";
import { RectButton } from "../../Common/button";

function Download() {
  return (
    <Container>
      <PictureArea>
        <PictureRow>
          <BackSide />
          <BackSide />
        </PictureRow>
        <CenterSide src="/download_center.png" />
      </PictureArea>
      <DescBox>
        <TitleText>아트비는 NFT를 활용한 문화플랫폼을 지향합니다.</TitleText>
        <SubtitleText>게임, 음악, 쇼핑, 미디어 컨텐츠 등 문화산업 전반에 블록체인 기술을 접목하여 투명하고 용이한 플랫폼을 구현합니다.</SubtitleText>
        <SubtitleText>아트비 백서를 통해 더 자세한 설명을 보실수 있으며 아트비 지갑을통해 토큰을 사용하고</SubtitleText>
        <SubtitleText>전자도록으로 아트비가 보유한 예술품을 확인할 수 있습니다</SubtitleText>
      </DescBox>
      <Line color="#656565"/>
      <LinkTable />
    </Container>
  );

  function LinkTable() {
    return (
      <TableContainer>
        <TableBox>
          <TableRow>
            <TableIcon src="/file_icon.svg" />
            <TableTitle>아트비 백서</TableTitle>
            <TableSubtitle>Artb프로젝트에 대한 세부적인 설명을 확인 하실 수 있습니다.</TableSubtitle>
            <RectButton src="/download/pdf/en"
              className='mobileLeft'
              height={52} bgColor="#FF3D21" btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              borderRadius: "5px",
              color: "#FFFFFF",
            }}>다운로드 (En)</RectButton>
            <RectButton src="/download/pdf/kor"
              className='mobileRight'
              height={52} bgColor="#FF3D21" btnStyle={{
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              borderRadius: "5px",
              color: "#FFFFFF"
            }}>다운로드 (Kor)</RectButton>            
          </TableRow>
        </TableBox>
        <TableBox>
          <TableRow>
            <TableIcon src="/paper_icon.svg" />
            <TableTitle>전자도록</TableTitle>
            <TableSubtitle>아트비 글로버(주)가 보유한 예술품 리스트를 전자도록을 통해 확인 하실 수 있습니다.</TableSubtitle>
            <RectButton src="/download/pdf/en" className='mobileButton'>더 알아보기</RectButton>      
          </TableRow>
        </TableBox>
        <TableBox>
          <TableRow>
            <TableIcon src="/home_icon.svg" />
            <TableTitle>회사 홈페이지</TableTitle>
            <TableSubtitle>아트비 글로버(주)가 보유한 예술품 리스트를 전자도록을 통해 확인 하실 수 있습니다.</TableSubtitle>
            <RectButton src="/download/pdf/en" className='mobileButton'>더 알아보기</RectButton>      
          </TableRow>
        </TableBox>
      </TableContainer>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const PictureArea = styled.div`
  display: flex;
  width: 1300px;
  height: 451px;
  margin: 0 0 80px 0;
  flex-direction: column;

  @media (max-width: 767px) {
    position:relative;
    width: 100%;
    height: 250px;
    margin: 0;
  }
`

const PictureRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BackSide = styled.div`
  display: flex;
  width: 330px;
  height: 310px;
  margin: 0 120px;
  background-image: url(/download_left.png);
  filter: drop-shadow(0px 40px 40px rgba(0, 0, 0, 0.07)) drop-shadow(0px 40px 30px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.04)) drop-shadow(0px 12px 10px rgba(0, 0, 0, 0.03)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.0196802));

  @media (max-width: 767px) {
    margin: 0;
    width: 40%;
    height: 150px;
    background-size: contain;
  }
`

const CenterSide = styled.img`
  position: relative;
  width: 640px;
  height: 400px;
  top: -265px;
  left: 340px;
  z-index: 2;

  @media (max-width: 767px) {
    position:absolute;
    width: 70%;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const DescBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 0 40px 0;
`

const TitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin: 0 0 20px 0;

  @media (max-width: 767px){
    font-size: 18px;
    text-align: center;
    word-break: keep-all;
  }
`

const SubtitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #FFFFFF;

  @media (max-width:767px) {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }
`

const TableContainer = styled.div`
  display: flex;
  margin: 40px 0 80px 0;
  align-items: center;
  flex-direction: column;
`

const TableBox = styled.div` 
  width: 1300px;
  height: 92px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: inset 0px 0px 30px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  border-radius: 5px;    
  margin: 0 0 20px 0;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 16px;

    ::after {
      content: "";
      display: block;
      clear: both;
    }
  }
`

const TableRow = styled.div` 
  display: flex;  
  width: 1260px;
  flex-direction: row;
  margin: 20px 20px 20px 40px;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
    flex-direction: column;
    margin: 0;
    width: 100%;
    align-items: flex-start;
  }
`

const TableIcon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  margin: 0 20px 0 0;

  @media (max-width: 767px) {
    float: left;
    margin: 0 10px 0 0;

  }
`

const TableTitle = styled.span`
  color: #FFFFFF;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  width: 116px;
  margin: 0 20px 0 0;

  @media (max-width: 767px) {
    float:left;
    margin: 0;
    font-size: 16px;
  }
`

const TableSubtitle = styled.span`
  flex:2;
  color: #FFFFFF;
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.04em;
  margin: 0 20px 0 0;

  @media (max-width: 767px) {
    float: left;
    width: 100%;
    margin: 10px 0 20px 0 ;
    font-size: 14px;
    font-weight: 300;
  }
`

export default Download;