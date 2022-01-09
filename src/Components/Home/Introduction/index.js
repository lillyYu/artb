import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Line from "../../Common/line";
import { RectButton } from "../../Common/button";

function Introduction() {
  const total = 183;
  const data = {
    id: 1,
    image: "/sample.png",
    artist: "남관",
    title: "가을축제",
    year: 1984,
    width: 200,
    height: 300,
    tech: "Oil painting",
    price: 43000,
    total: 100000,
    remain: 38900
  };
  
  return (
    <Container>
      <DescArea>
        <ContentsArea>
          <Board />
          <Description />
          <ButtonBar />
        </ContentsArea>
      </DescArea>
      <ArtsArea style={{ backgroundImage : `url(${data.image})` }}></ArtsArea>
    </Container>
  );

  function Board() {
    return (
      <TitleBoard>
        <TitleContainer>
          <TextBox style={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "700", lineHeight: "26px", letterSpacing: "-0.02em" }}>
            <Logo src="/small_logo.svg" />Art Block Chain Platform
          </TextBox>
          <TitleText style={{ fontSize: "56px", lineHeight: "75px", letterSpacing: "-0.05em", color: "#000000"}}>
            총 {total}점의 예술품을
          </TitleText>
          <TitleText style={{ fontSize: "56px", lineHeight: "75px", letterSpacing: "-0.05em", color: "#FF3D21"}}>
            NFT로 만나보세요!
          </TitleText>
        </TitleContainer>
      </TitleBoard>
    );
  }

  function Description() {
    return (
      <DescContainer>
        <TitleText style={{ fontSize: "24px", lineHeight: "36px", letterSpacing: "-0.04em", color: "#FFFFFF", margin: "0 0 20px 0" }}>
          {data.title}
        </TitleText>
        <TableRow>
          <HeaderText>아티스트</HeaderText>
          <DataText>{data.artist}</DataText>
        </TableRow>
        <TableRow>
          <HeaderText>작품년도</HeaderText>
          <DataText>{data.year}년도</DataText>
        </TableRow>
        <TableRow>
          <HeaderText>작품크기</HeaderText>
          <DataText>{data.width}x{data.height}(cm)</DataText>
        </TableRow>
        <TableRow>
          <HeaderText>작품기법</HeaderText>
          <DataText>{data.tech}</DataText>
        </TableRow>
        <Line color="#FFFFFF" lineStyle={{ margin: "20px 0" }} />
        <TableRow>
          <TextBox>
            <Gem src="/gem_white.svg" />
            <HeaderText>{Intl.NumberFormat().format(data.remain)} / {Intl.NumberFormat().format(data.total)}</HeaderText>
          </TextBox>
          <TitleText style={{ fontSize: "18px", lineHeight: "28px", letterSpacing: "-0.04em", color: "#FFFFFF" }}>{Intl.NumberFormat().format(data.price)}원</TitleText>
        </TableRow>
      </DescContainer>
    );
  }

  function ButtonBar() {
    return (
      <ButtonContainer>
        <RectButton width="52" height="52" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} onClick={() => alert('왼쪽')}><Arrow src="/left_arrow.svg" /></RectButton>
        <RectButton width="52" height="52" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} onClick={() => alert('오른쪽')}><Arrow src="/right_arrow.svg" /></RectButton>
        <RectButton src={`/detail/${data.id}`} width="160" height="52" bgColor="#FFFFFF" btnStyle={{ borderRadius: "5px" }} >
          <TitleText style={{ fontSize: "16px", lineHeight: "24px", letterSpacing: "-0.02em", color: "#FF3D21" }}>
            더 알아보기
          </TitleText>
        </RectButton>
      </ButtonContainer>
    );
  }  
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 954px;
`

const DescArea = styled.div`
  width: 674px;
  background-color: #E6381F;
  display: flex;
  justify-content: end;
  align-items: center;
`

const ArtsArea = styled.div`
  width: 1246px;
`

const ContentsArea = styled.div`
  display: flex;
  width: 284px;
  margin: 0 80px 0 0;
  flex-direction: column;
`

const TitleBoard = styled.div`
  display: flex;
  width: 576px;
  height: 264px;
  background: #FFFFFF;  
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);  
  border-radius: 0px 20px;
  margin: 0 0 40px 0;
`

const TitleContainer = styled.div`
  display: flex;
  width: 496px;
  height: 184px;
  margin: 40px 40px;
  flex-direction: column;
`

const Logo = styled.img`
  display: flex;
  width: 20.81px;
  height: 24px;
  margin: 0 10px 0 0;
`

const TitleText = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Spoqa Han Sans Neo;
  font-weight: 700;
`

const TextBox = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 4px 0;
`

const HeaderText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`

const DataText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  color: #FFFFFF;
`

const DescContainer = styled.div`
  display: flex;
  width: 284px;
  height: 209px;
  flex-direction: column;
  margin: 0 0 80px 0;
`

const Gem = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
  margin: 0 4px 0 0;
`

const ButtonContainer = styled.div`
  display: flex;   
  width: 284px;
  height: 52px;
  flex-direction: row;
  justify-content: space-between;
`

const Arrow = styled.img`
  display: flex;
  width: 10px;
  height: 10px;
`

export default Introduction;