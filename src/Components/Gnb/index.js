/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { HashLink } from "react-router-hash-link";

import { useRecoilState } from "recoil";
import WalletConnect from "./mypageWalletPopup";
import { Route, Link } from 'react-router-dom';
import MyNFT from "./myNFT";
import {
  web3State,
  accountState,

} from "../../store/web3";
function Gnb() {
  const [web3, setWeb3] = useRecoilState(web3State);
  const [account, setAccount] = useRecoilState(accountState);
  const [mypageWallet, setMypageWallet] = useState(false)
  return (
    <Container>
      <div onClick={() => { window.location.href = "/" }} >
        <img src="/gnb_logo.png" style={{ width: "162px", height: "56px", cursor: "pointer" }} />
      </div>
      {mypageWallet ? <WalletConnect setMypageWallet={setMypageWallet} /> : null}
      <Setting>
        {/* <Language>KR</Language> */}
        {account ?
          <Link
            to={{
              pathname: "/mypage",

            }}

          >
            <img
              src="/Union2.png"
              style={{ width: "50px", height: "50px" }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            />
          </Link>
          :
          <My>
            <div className="payImg">
              <img
                src="/detail_pay.png"
                style={{ width: "30px", height: "30px" }}
                onClick={() => {
                  setMypageWallet(!mypageWallet)
                }}
              />
              {/* <div className="mouseHover">
              <div>입금 계좌 :</div>
              <div>301-0295-5774-33</div>
              <div>농협은행 예금주 : 아트비글로벌(주)</div>
            </div> */}
            </div>
          </My>
        }
        {/* <img
          src="/detail_pay.png"
          style={{ width: "56px", height: "56px", color: "rgba(230, 71, 36, 0.8)", cursor: "pointer" }}
        /> */}


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
  justify-content:center;
`;

const Language = styled.div`
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

const My = styled.div`
  display:flex;
  flex-direction:column;
  /* justify-content: flex-end;  */
  align-items:center;
  position: relative;
  
  .payImg{
    display:flex;
    justify-content: center; 
    align-items:center;
    margin: auto;
    cursor:pointer;
    padding: 10px;
    border-radius:8px;
    background-color: #E64724CC;
  }

  /* .mouseHover {
    display: none;
  }
  
  .payImg:hover .mouseHover{
    display: flex;
    flex-direction: column;
    background-color: #e2e2e2;
    border-radius:8px;
    padding: 10px;
    width: 250px;
    position: absolute;
    bottom: -70px;
    right: 0; */


`;

export default Gnb;
