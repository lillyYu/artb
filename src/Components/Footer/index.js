import styled from "styled-components";
import React, { useState, useEffect } from "react";

import Line from "../Common/line.js";
import { RectButton } from "../Common/button.js";

function Footer() {
  return (
    <Container>
      <TopArea>
        <InfoBox>
          <InfoHeader>
            <Logo src="Footer_logo.svg" />
            <Tail>
              <TailBox>
                <TextBox>이용약관</TextBox>
                <TextBox>·</TextBox>
                <TextBox>개인정보 취급방침</TextBox>
              </TailBox>
              <RectButton width="160" height="52" bgColor="#FF3D21" btnStyle={
                {
                  borderRadius: "5px",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily: "Spoqa Han Sans Neo"
                }}>
                문의하기
              </RectButton>
            </Tail>
          </InfoHeader>
          <Line color="#A6A6A6" opacity="0.2" lineStyle={{margin: "20px 0", padding: "0 0"}} />
          <InfoBody>
            <InfoTable>
              <TableHeader>회사정보</TableHeader>
              <TableData>대표 : 이건용</TableData>
              <TableData>상호 : 아트비샵</TableData>
              <TableData>사업자등록번호 : 521-88-02293</TableData>
            </InfoTable>
            <InfoTable>
              <TableHeader>계좌 정보</TableHeader>
              <TableData>계좌 : 농협 301-0295-5774-31</TableData>
              <TableData>아트비글로벌(주)</TableData>
            </InfoTable>
            <InfoTable>
              <TableHeader>주소</TableHeader>
              <TableLayer>
                <TableTitle>한국 본사 주소</TableTitle>
                <TableData>서울시 강남구 테헤란로 64길 16-8, 2층</TableData>
              </TableLayer>
              <TableTitle>필리핀 법인 주소</TableTitle>
              <TableData>The Penthouse 8F, Zeta Bldg 191. Salcedo</TableData>
              <TableData>St, Legaspi Village, Makati, Metro Manila,</TableData>
              <TableData>Philippines</TableData>
            </InfoTable>
            <InfoTable>
              <TableHeader>전화번호</TableHeader>
              <TableLayer>
                <TableTitle>한국</TableTitle>
                <TableData>02-6953-2364</TableData>
                <TableData>AM 9:00 - PM 6:00 (주말 및 공휴일 휴무)</TableData>
              </TableLayer>
              <TableTitle>필리핀</TableTitle>
              <TableData>+63-916-640-9947</TableData>
              <TableData>AM 9:00 - PM 6:00 (주말 및 공휴일 휴무)</TableData>
            </InfoTable>            
          </InfoBody>
        </InfoBox>
      </TopArea>
      <BottomArea>
        <Line color="#A6A6A6" opacity="0.2" lineStyle={{margin: "0 0", padding: "0 0"}} />
        <BottomBox>Copyright ⓒ 2022 by Artb global</BottomBox>
      </BottomArea>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
`;

const TopArea = styled.div`
  display: flex;
  width: 100%;
  height: 450px;
  align-items: center;
  justify-content: center;  
`

const BottomArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  color: #424242;
  align-items: center;
  justify-content: center;
`

const BottomBox = styled.span`
  display: flex;
  font-size: 14px;
  height: 59px;
  line-height: 20px;
  align-items: center;
  margin: 10px 10px;
`

const InfoBox = styled.div`
  display: flex;
  width: 1300px;
  height: 290px;
  flex-direction: column;
`

const InfoHeader = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  justify-content: space-between;
`

const InfoBody = styled.div`
  display: flex;
  width: 100%;
  height: 196px;
  flex-direction: row;
  justify-content: space-between;
`

const Logo = styled.img`
  display: flex;
`;

const Tail = styled.div`
  display: flex;
  width: 405px;
`

const TailBox = styled.div`
  display: flex;
  width: 205px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 24px;
  align-items: center;
  color: #A6A6A6;
  margin: 0 40px 0 0;
  justify-content: space-between;
`

const TextBox = styled.span`
  display: flex;
`

const InfoTable = styled.div`
  display: flex;
  width: 265px;
  flex-direction: column;
`

const TableHeader = styled.span`
  display: flex;
  width: 100%;
  height: 24px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #A6A6A6;
  margin: 0 0 10px;
`

const TableTitle = styled.span`
  display: flex;
  width: 100%;
  height: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #656565;
  margin: 0 0 4px;
`

const TableData = styled.span`
  display: flex;
  width: 100%;
  height: 20px;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #656565;
  margin: 0 0 4px;
`

const TableLayer = styled.span`
  display: flex;
  width: 100%;
  height: 68px;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 0 20px;
  margin: 0 0 10px;
`

export default Footer;
