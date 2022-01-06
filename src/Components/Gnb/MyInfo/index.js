import styled from "styled-components";
import React, { useState, useEffect } from "react";

import { ImageButton } from "../../Common/button";

function MyInfo(props) {
  return (
    <Container>
      <StatusBox>
        <StatusContainer>
          <Profile src="/profile_icon.svg" />
          <TitleContainer>
            <TitleText>{props.name} 고객님 진심으로 환영합니다.</TitleText>
            <SubtitleContainer>
              <SubtitleText>구매한 저작권</SubtitleText>
              <TailText>{props.count}개</TailText>
            </SubtitleContainer>
          </TitleContainer>
          <ImageButton src="/myinfo" img="/mypage_icon.svg" width={24} height={24} />
        </StatusContainer>
      </StatusBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 370px;
  height: 100px;
  align-items: center;
  justify-content: center;
`

const StatusBox = styled.div`
  display: flex;
  width: 330px;
  height: 60px;  
  background: #FAFAFA;
`

const StatusContainer = styled.div`
  display: flex;
  flex-direction : row;
  margin: 10px 10px;
  align-items: center;
`

const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 20px 0 0;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 206px;
  height: 40px;
`

const TitleText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;  
  color: #303030;
`

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px 0 0;
`

const SubtitleText = styled.span`
  color: #303030;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`

const TailText = styled.span`
  color: #303030;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
`

export default MyInfo;