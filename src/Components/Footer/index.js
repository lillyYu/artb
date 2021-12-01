import styled from "styled-components";
import React, { useState, useEffect } from "react";

function Footer() {
  return (
    <Container>
      <div>
        <Logo src="Footer_logo.png" />
      </div>
      <InfoWrapper>
        <Info>{"법인명 : (주)아트비글로벌 | 대표자 : 이건용"}</Info>
        <Info>{"주소 : 서울특별시 강남구 테헤란로 64길 16-8, 2층"}</Info>
        <Info>{" 대표번호 : 02-6953-2364"}</Info>
      </InfoWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #111111;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InfoWrapper = styled.div``;
const Info = styled.div`
  color: #8c8c8c;
`;
const Logo = styled.img`
  width: 150px;
`;
export default Footer;
