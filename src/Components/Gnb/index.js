/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { HashLink } from "react-router-hash-link";

import { useRecoilState } from "recoil";
import { accountState } from "../../store/web2";
import { useHistory } from 'react-router-dom';
import { TextButton, ImageButton, RectButton } from "../Common/button.js";
import MyInfo from "./MyInfo";

function Gnb() {
  // const [web3, setWeb3] = useRecoilState(web3State);
  const [url, setUrl] = useState(window.location.pathname.split("/")[1]);
  const [over, setOver] = useState(false);
  const handleNav = (e) => {
    setUrl(
      e.target.parentElement.href.substring(
        e.target.parentElement.href.lastIndexOf("/") + 1
      )
    );
  };
  const [account, setAccount] = useRecoilState(accountState);
  // const [isOpenWalletPopup, setIsOpenWalletPopup] = useRecoilState(openWalletPopupState);
  const history = useHistory();
  // const location = useLocation();
  // const isHome = location.pathname === '/'

  return (
    <Container>
      <MainMenu>
        <LogoArea>
          <ImageButton src="/" img="/gnb_logo.svg" width="115.56" height="40" />
        </LogoArea>
        <MenuArea onMouseLeave={() => setOver(false)}>
          <TextButton width="128" height="26" onMouseOver={() => setOver(true)}>
            NFT 소개
          </TextButton>
          <TextButton width="128" height="26" onMouseOver={() => setOver(true)}>
            NFT 리스트
          </TextButton>
          <TextButton width="128" height="26" onMouseOver={() => setOver(true)}>
            아티스트
          </TextButton>
          <TextButton width="128" height="26" onMouseOver={() => setOver(true)}>
            고객센터
          </TextButton>
        </MenuArea>
        { account.logined === true ? <MyInfo name={account.info.name} count={account.info.nftCount}/> : <ButtonBar/> }
      </MainMenu>
      <SubMenu className={over === true ? "on" : ""}>
        <TabArea
          onMouseOver={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
        >
          <SubTab>
            <TextButton
              src="/nft"
              width="128"
              height="26"
              onClick={handleNav}
              className={url === "nft" ? "on" : ""}
            >
              NFT란?
            </TextButton>
            <TextButton
              src="/business"
              width="128"
              height="26"
              onClick={handleNav}
              className={url === "business" ? "on" : ""}
            >
              NFT 사업소개
            </TextButton>
            <TextButton
              src="/benefit"
              width="128"
              height="26"
              onClick={handleNav}
              className={url === "benefit" ? "on" : ""}
            >
              NFT 혜택
            </TextButton>
          </SubTab>
          <SubTab>
            <TextButton
              src="/list"
              width="128"
              height="26"
              onClick={handleNav}
              className={url === "list" ? "on" : ""}
            >
              NFT 리스트
            </TextButton>
          </SubTab>
          <SubTab>
            <TextButton
              src="/artist"
              width="128"
              height="26"
              onClick={handleNav}
              className={url === "artist" ? "on" : ""}
            >
              아티스트
            </TextButton>
          </SubTab>
          <SubTab>
            <TextButton src="/hp/notice" width="128" height="26" onClick={handleNav} className={url === "notice" ? "on" : ""}>공지사항</TextButton>
            <TextButton src="/hp/faq" width="128" height="26" onClick={handleNav} className={url === "faq" ? "on" : ""}>자주 묻는 질문</TextButton>
            <TextButton src="/hp/download" width="128" height="26" onClick={handleNav} className={url === "download" ? "on" : ""}>다운로드</TextButton>
            <TextButton src="/hp/qna" width="128" height="26" onClick={handleNav} className={url === "qna" ? "on" : ""}>1:1 문의</TextButton>
          </SubTab>
        </TabArea>
      </SubMenu>
    </Container>
  );

  function ButtonBar() {
    return (
      <ButtonArea>
        <RectButton
          width="160"
          height="60"
          bdColor="#FF3D21"
          bgColor="var(--white)"
          btnStyle={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#FF3D21",
            borderRadius: "5px",
          }}
          onClick={() => {
            history.push('/account/join')
          }}
        >
          회원가입
        </RectButton>
        <RectButton
          width="160"
          height="60"
          bgColor="#FF3D21"
          btnStyle={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#FFFFFF",
            borderRadius: "5px",
          }}
          onClick={() => {
            history.push('/account/login')
          }}
        >
          로그인
        </RectButton>
      </ButtonArea>      
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .on {
    display: flex;
  }
`;

const MainMenu = styled.div`
  display: flex;
  width: 1920px;
  height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  z-index: 2;
`;

const SubMenu = styled.div`
  display: none;
  width: 1920px;
  height: 230px;
  box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.07),
    0px 40px 30px rgba(0, 0, 0, 0.0503198), 0px 20px 20px rgba(0, 0, 0, 0.04),
    0px 12px 10px rgba(0, 0, 0, 0.03), 0px 4px 4px rgba(0, 0, 0, 0.04),
    0px 2px 2px rgba(0, 0, 0, 0.0196802);
  z-index: 1;
  background-color: #ffffff;
  top: 100px;
  position: absolute;
`;

const TabArea = styled.div`
  display: flex;
  margin: 0 0 0 555px;
  width: 640px;
  height: 190px;
  flex-direction: row;
`;

const SubTab = styled.div`
  display: flex;
  width: 160px;
  height: 190px;
  flex-direction: column;
  font-size: 18px;
  line-height: 28px;
  align-items: center;
  gap: 22px 0;
  margin: 24px 0 0 0;

  a:hover {
    color: #ff3d21;
    font-weight: bold;
  }
  a {
    color: #424242;
  }
  .on {
    color: #ff3d21;
    font-weight: bold;
  }
`;

const LogoArea = styled.div`
  display: flex;
  width: 115.56px;
  margin: 0 445.44px 0 0;
`;

const MenuArea = styled.div`
  display: flex;
  width: 640px;
  height: 100px;
  a {
    color: #000000;
    font-size: 20px;
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    line-height: 26px;
  }
  justify-content: space-between;
  margin: 0 391px 0 0;
  align-items: center;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 370px;
  justify-content: space-evenly;
`;

export default Gnb;
