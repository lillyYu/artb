import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Benefit() {
  return (
    <Container>
      <BenefitBox>
        <TitleBox>Art-B Benefits</TitleBox>
        <SubtitleBox>아트비는 NFT를 구매한 고객님께</SubtitleBox>
        <SubtitleBox>혜택과 가치의 서비스를 제공합니다.</SubtitleBox>
        <ImageArea>
          <Card data={
            [
              { image: "/benefit1.svg", title: "작품카드 앞면", desc: ["아트비글로벌의 인증 도장, 저작권자의 사인, 시리얼번호, 구", "매일자 그리고 작품의 제목과 설명이 담겨있습니다."] },
              { image: "/benefit2.svg", title: "작품카드 뒷면", desc: ["구매한 NFT 작품의 이미지가 함께 프린트되어 가치를 더욱", "느끼게 해줍니다."] },
              { image: "/benefit3.svg", title: "작품 액자", desc: ["450만원 이상 구매 시 해당 작품을 정밀 프린트한 액자를 증", "정해 드립니다. "] }
            ]
          } />
        </ImageArea>
      </BenefitBox>
    </Container>
  );
}

function Card(props) {
  return (
    <CardArea>
    {
      props.data.map((node, index) => {
        return (
          <CardContainer key={index}>
            <CardTop>
              <CardImage src={node.image}/>
            </CardTop>
            <CardBottom>
              <DescBox>
                <NoText>{String(index + 1).padStart(2, '0')}</NoText>
                <TitleText>{node.title}</TitleText>
                {
                  node.desc.map((sub, idx) => {
                  return (
                    <DescText key={idx}>{sub}</DescText>
                  );
                  })
                }
              </DescBox>
            </CardBottom>
          </CardContainer>
        );
      })
    }
    </CardArea>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 954px;
  align-items: center;

  @media (max-width: 767px) {
    display: block;
    height: auto;
    padding: 20px 16px;
  }
`

const BenefitBox = styled.div`
  display: flex;
  width: 1300px;
  height: 646px;
  flex-direction: column;
  
  @media (max-width: 767px) { 
    height: auto;
    overflow: hidden;
    width: 100%;
  }
`

const ImageArea = styled.div`
  margin: 40px 0 0 0;

  @media (max-width: 767px) {
    display: flex;
    overflow-x : scroll;
    white-space: nowrap;
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

const SubtitleBox = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 48px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.05em;
  color: #000000;

  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 36px;
  }

`

const CardArea = styled.div`
  display: flex;
  flex-direction : row;
  justify-content: space-between;

  @media (max-width: 767px) {
  }
`

const CardContainer = styled.div`
  display: flex;
  width: 420px;
  height: 440px;
  flex-direction: column;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));

  @media (max-width:767px) {
    width: 100%;
    max-width: 90vw;
    margin-right: 5%;
    height: auto;
  }
`

const CardTop = styled.div` 
  display: flex;
  width: 420px;
  height: 280px;
  background: #FAFAFA;
  border-radius: 20px 20px 0px 0px;
  justify-content: center;
  align-items: center;
  
  @media (max-width:767px) {
    width: 100%;
    height: auto;
    padding: 16px;
  }
`

const CardBottom = styled.div`
  display: flex;
  width: 420px;
  height: 160px;
  border-radius: 0px 0px 20px 20px;
  background: #FFFFFF;
  
  @media (max-width:767px) {
    width: 100%;
    height: auto;
  }
`

const CardImage = styled.img`
  display: flex;
  width: 380px;
  height: 240px;  

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`

const DescBox = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-direction: column;

  @media (max-width: 767px) {
    box-sizing: border-box;
    margin: 16px;
    width: 100%;
    height: auto;
  }
`

const NoText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  margin: 0 0 10px 0;
`

const TitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.04em;
  margin: 0 0 10px 0;
`

const DescText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;

  @media (max-width: 767px) {
    width: 80vw;
    height: 100%;
    white-space: normal;

  }
`

export default Benefit;