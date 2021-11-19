import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function Privacy({ setPrivacyModal, nftMethods, inputValue }) {
  const [compeleteModal, setCompeleteModal] = useState(false);
  return (
    <Container className="Container">
      <Contents>
        <div
          className="Text_Style_1"
          style={{ paddingBottom: "20px", cursor: "pointer" }}
          onClick={() => {
            setPrivacyModal(false);
          }}
        >
          {"< 이전 페이지로 돌아가기"}
        </div>
        <div className="Text_Style_2" style={{ paddingBottom: "25px" }}>
          Artb 서비스 개인정보처리 방침
        </div>
        {/* <div> */}

        <div className="Text_Style_3">
          {" "}
          *본 약관은 2021년 12월 13일로부터 적용됩니다. <br />
          <br />
          본 약관은 아트비글로벌(주)(이하 ”회사”)가 제공하는 Artb 및 관련 제반
          플랫폼의 서비스(아래 정의) 이용과 관련하여 회사와 "회원"(아래 정의)의
          권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
          <br />
          제2조 약관의 명시, 효력 및 변경
          <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다.
          <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다.
          <br />
          <br />
          제2조 일반
          <br />본 약관은 아트비글로벌(주)(이하 ”회사”)가 제공하는 Artb 및 관련
          제반 플랫폼의 서비스(아래 정의) 이용과 관련하여 회사와 "회원"(아래
          정의)의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
          <br />
          제2조 약관의 명시, 효력 및 변경
          <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다.
          <br />
          회사는 본 약관의 내용을 서비스를 이용하고자 하는 자와 회원이 쉽게 알
          수 있도록 서비스 초기 화면에 게시합니다.
        </div>

        <HashLink to={"/payment/coin"}>
          <AgreeButtonWrapper>
            <AgreeButton className="Text_Style_4" onClick={() => nftMethods.buy(inputValue)}>
              약관에 동의합니다.
            </AgreeButton>
          </AgreeButtonWrapper>
        </HashLink>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  // font-family: Pretendard;
  display: flex;
  width: 720px;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;
`;
const Contents = styled.div`
  padding: 35px 59px;
  box-sizing: border-box;
  position: absolute;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  width: 720px;
  left: 0px;
  top: 0px;
`;
const AgreeButtonWrapper = styled.div`
  padding-top: 31px;
  display: flex;
  justify-content: center;
`;
const AgreeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 443px;
  height: 68px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  color: #000000cc;
  :active {
    background-color: #eb4632;
    color: white;
  }
`;
export default Privacy;
