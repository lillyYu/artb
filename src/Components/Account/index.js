import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { diagState } from "../../store/web2";
import SignDiag from "./Dialog";

function Account({ mode }) {
  const [diagType, setDiagType] = useRecoilState(diagState);

  useEffect(() => {
    setDiagType(mode);
  }, [mode]);

  return (
    <Container>
      <PopupContainer>
        <SignDiag />
      </PopupContainer>
      <DescArea />
      <ArtsArea style={{ backgroundImage: `url(/login_splash.jpg)` }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 954px;
`;

const PopupContainer = styled.div`
  display: flex;
  width: 1px;
  height: 1px;
`;

const DescArea = styled.div`
  width: 674px;
  background-color: #e6381f;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ArtsArea = styled.div`
  width: 1246px;
`;

export default Account;
