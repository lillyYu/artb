/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";

function Home() {
  return (
    <Container className="container">
      <Contents>
        <IntroWrapper>
          <img src="test.png"
          // style={{ top: "130px" }} 
          />
          <Intro>
            <div className="Text_Style_5">한국 추상화의 아버지</div>
            <div className="Text_Style_6" style={{ paddingTop: "30px" }}>
              남관
            </div>
            <Bottom>
              <Left>
                <div className="Text_Style_7" style={{ paddingTop: "100px", width: "325px" }}>
                  <br /> 총 183점의
                  <br /> 예술품을
                  <br /> 이제 NFT로 만나보세요
                </div>
                <div className="Text_Style_8" style={{ paddingTop: "30px" }}>
                  남관 컬렉션 저작권 판매
                </div>
                <div
                  className="Text_Style_9"
                  style={{ padding: "15px 0px 20px 0px" }}
                >
                  2021.09.25 - 2021.12.30
                </div>
                <HashLink to={"/payment"} style={{ textDecoration: "none" }}>
                  <ButtonWrapper>
                    <DetailButton>자세히보기</DetailButton>
                  </ButtonWrapper>
                </HashLink>
              </Left>
              <Right>
                <div style={{ display: "flex" }}>

                  <div style={{ paddingBottom: "15px" }}>
                    {" "}
                    #아트비가 추천 저작권
                  </div>
                  <img src="logo.png" style={{ width: "10.42px", height: "12px", margin: "3px" }} />
                </div>
                <img src="recomend_1.png" style={{ boxShadow: "0px 0px 20px gray", blur: "20px" }} />
              </Right>
            </Bottom>
          </Intro>
        </IntroWrapper>

        <RecomendWrapper className="recomendWrapper">
          <img src="recomend.png" />
          <Recomend className="recomend">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "113px",
              }}
            >
              <img src="Line_1.png" style={{ width: "79px" }} />
            </div>
            <div className="Text_Style_10" style={{ padding: "40px 0px" }}>
              ArtB 추천 저작권
            </div>
            <div
              style={{
                display: "flex",
                paddingLeft: "250px",
                overflow: "hidden",
              }}
            >
              <img
                src="recomend_1.png"
                style={{
                  width: "250px",
                  height: "350px",
                  marginRight: "20px",
                }}
              />
              <img
                src="recomend_1.png"
                style={{ width: "250px", height: "350px" }}
              />
            </div>
            <div
              className="Text_Style_11"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
              }}
            >
              컬렉션 작품
            </div>
            <div
              className="Text_Style_12"
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
              }}
            >
              작품명 소개
            </div>
            <div
              className="Text_Style_13"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "54px 50px",
              }}
            >
              세부 작품명 소개자리입니다. 이달의 작가를 소개하고 작품을
              안내합니다. 100자 이내로 작성하고 작품이 잘 드러날 수 있는
              콘텐츠를 작성합니다.
            </div>
          </Recomend>
        </RecomendWrapper>

        <ProjectWrapper >
          <Background src="artB_project.png" />
        </ProjectWrapper>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  width: 720px;
`;

const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 720px;
  /* top: 130px; ; */
`;
const Intro = styled.div`
  position: absolute;
  padding: 0px 82px;
  top: 130px;
`;
const Bottom = styled.div`
  display: flex;
`;
const Left = styled.div``;
const Right = styled.div`
  padding-top: 110px;
  /* margin-left: 25px; */
`;

const RecomendWrapper = styled.div`
  position: relative;
`;



const Recomend = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 720px;
`;

const Background = styled.img`
  display: flex;
  width: 720px;
`;

const ProjectWrapper = styled.div`
margin-top:-5px;
`;

const ArtBProject = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  width: 720px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 33px;
  background: #ffffff;
  border: 1px solid #eb4632;
  box-sizing: border-box;
  border-radius: 25px;
`;
const DetailButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 33px;
  font-family: Malgun Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #eb4632;
`;
export default Home;
