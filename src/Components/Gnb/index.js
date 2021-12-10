/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
// import { HashLink } from "react-router-hash-link";

import { useRecoilState } from "recoil";
import WalletConnect from "../NftTrade/Popup/walletConnect";
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  web3State,
  accountState,

} from "../../store/web3";
import { openWalletPopupState } from "../../store/wallet";

function Gnb() {
  // const [web3, setWeb3] = useRecoilState(web3State);
  const [account, setAccount] = useRecoilState(accountState);
  const [isOpenWalletPopup, setIsOpenWalletPopup] = useRecoilState(openWalletPopupState);
  const history = useHistory();
  const location = useLocation();
  const isHome = location.pathname === '/'
  return (
    <Container>
      <div className="Gnb__left">
        {!isHome && <img className="Gnb__goBack" src="/detail_toggleClose.png" onClick={() => { history.goBack(); }} />}
        <img className="Gnb__logo" src="/gnb_logo.png" style={!isHome ? {
          position: "absolute",
          left: 'calc(50% - 81px)'
        } : {}} onClick={() => { history.push('/') }} />
      </div>
      {/* <Setting>
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
      </Setting> */}
      {isOpenWalletPopup ? <WalletConnect setWalletPopup={setIsOpenWalletPopup} /> : null}
      <Setting>
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
                  setIsOpenWalletPopup(!isOpenWalletPopup)
                }}
              />
            </div>
          </My>
        }
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

  .Gnb__goBack {
    transform: rotate(90deg);
    width: 26px; 
    height: 16px; 
    cursor: pointer;
  }
  .Gnb__logo {
    width: 162px; 
    height: 56px; 
    cursor: pointer;
  }

  .Gnb__left {
    display: flex;
    align-items: center;
  }
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
