import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import Text from './term1'

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
          <Text />
        </div>

        <AgreeButtonWrapper>
          <AgreeButton
            className="Text_Style_4"
            style={{ cursor: "pointer" }}
            onClick={() =>
              //  nftMethods.buy(inputValue)
              setPrivacyModal(false)
            }>
            약관에 동의합니다.
          </AgreeButton>
        </AgreeButtonWrapper>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  // font-family: Pretendard;
  display: flex;
  width: 720px;
  height: 100%;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;
`;
const Contents = styled.div`
  padding: 35px 59px;
  box-sizing: border-box;
  position: absolute;
  /* top: 130px; */
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  width: 720px;
  left: 0px;
  top: 0px;
  height: inherit;
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
