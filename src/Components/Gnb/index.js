/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";

function Gnb() {
  return (
    <Container>
      <Contents>
        <Logo>
          <img src="/gnb_logo.png" style={{ width: "162px", height: "56px" }} />
        </Logo>
        {/* <Language /> */}
        <Setting>
          <Language>KR</Language>
          <My>
            <img
              src="/gnb_profile.png"
              style={{ width: "56px", height: "56px" }}
            />
          </My>
        </Setting>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  width: 720px;
  height: 130px;
  background-color: white;
  z-index: 6;
  a {
    text-decoration: none;
  }
`;

const Contents = styled.div`
  display: flex;
  width: 660px;
  margin: 0 58px;
  align-items: center;
  justify-content: space-between;
`;

const Setting = styled.div`
  display: flex;
  gap: 0 20px;
  align-items: center;
  width: 120px;
`;

const Language = styled.div`
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  width: 162px;
  height: 56px;
  background-color: white;
  cursor: pointer;
`;

const My = styled.div`
  // background-color: red;
  cursor: pointer;
`;

export default Gnb;
