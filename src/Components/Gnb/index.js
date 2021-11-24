/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
// import MyNFT from "./myNFT";
function Gnb() {

  return (
    <Container>
      <HashLink to={"/"}>
        <img src="/gnb_logo.png" style={{ width: "162px", height: "56px" }} />
      </HashLink>
      <Setting>
        <Language>KR</Language>
        <HashLink to={"/mypage"}>
          <My>
            <img
              src="/gnb_profile.png"
              style={{ width: "56px", height: "56px" }}
            />
          </My>
        </HashLink>

      </Setting>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 720px;
  height: 130px;
  padding: 0 58px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  z-index: 2;
  a {
    text-decoration: none;
  }
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

const My = styled.div`
  cursor: pointer;
`;

export default Gnb;
