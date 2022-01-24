import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { RectButton } from "../../Common/button";

import Arts from "../../NftList/Arts";

function NFtList() {
  return (
    <Container>
      <NftBox>
        <TitleBox>NFT</TitleBox>
        <SubtitleArea>
          <SubtitleBox>NFT 리스트</SubtitleBox>
          <ButtonArea>
            <RectButton width="52" height="52" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} onClick={() => alert('왼쪽')}><Arrow src="/left_arrow.svg" /></RectButton>
            <RectButton width="52" height="52" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} onClick={() => alert('오른쪽')}><Arrow src="/right_arrow.svg" /></RectButton>
            <RectButton width="160" height="52" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} src="/list">
              <ButtonText>More</ButtonText>
            </RectButton>
          </ButtonArea>
        </SubtitleArea>
        <ArtsArea>
          <Arts width="1300" height="481" cols="4" rows="1" colWidth="310" rowHeight="481" data={
            [
              { id: 1, type: 0, data: { image: "/arts.svg", artist: "남0관", title: "가을축제1", year: 1984, width: 201, height: 300, tech: "Oil painting", price: 43000, total: 100000, remain: 38900 } },
              { id: 2, type: 0, data: { image: "/arts.svg", artist: "남1관", title: "가을축제2", year: 1985, width: 202, height: 300, tech: "Oil painting", price: 43001, total: 200000, remain: 38901 } },
              { id: 3, type: 0, data: { image: "/arts.svg", artist: "남2관", title: "가을축제3", year: 1986, width: 203, height: 300, tech: "Oil painting", price: 43002, total: 300000, remain: 38902 } },
              { id: 4, type: 0, data: { image: "/arts.svg", artist: "남3관", title: "가을축제4", year: 1987, width: 204, height: 300, tech: "Oil painting", price: 43003, total: 400000, remain: 38903 } }
            ]
          } />
        </ArtsArea>
      </NftBox>      
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-image : url(/nftlist_background.svg);
  height: 954px;
  justify-content: center;
  align-items: center;
`

const NftBox = styled.div`
  display: flex;
  width: 1300px;
  height: 627px;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`

const TitleBox = styled.span`
  display: flex;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #FF3D21;
  margin: 0 0 20px 0;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const SubtitleArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ButtonArea = styled.div`
  display: flex;
  width: 284px;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 767px) {
    width: 100%;
  }
`

const SubtitleBox = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.05em;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`

const ArtsArea = styled.div`
  margin: 40px 0 0 0;

  @media (max-width: 767px) {
    width: 100%;
    overflow-x: scroll;
  }
`

const Arrow = styled.img`
  display: flex;
  width: 10px;
  height: 10px;
`

const ButtonText = styled.span`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #303030;
`

export default NFtList;