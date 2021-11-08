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
    <Container>
      <Contents>
        <Intro></Intro>
        <Recommend></Recommend>
        <Project></Project>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 130px;
  display: flex;
  flex-direction: column;
  width: 720px;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 670px;
  margin: 30px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  height: 600px;
  padding: 0 70px;
  padding-top: 35px;
  box-sizing: border-box;
  background-color: gray;
`;

const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  height: 600px;
  padding: 0 70px;
  padding-top: 35px;
  box-sizing: border-box;
  background-color: gray;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  height: 600px;
  padding: 0 70px;
  padding-top: 35px;
  box-sizing: border-box;
  background-color: gray;
`;

export default Home;
