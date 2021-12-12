import styled from "styled-components";
import { React, useState, useMemo } from "react";
import { useRecoilState } from "recoil";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { fromWei, toWei } from "web3-utils";

import WalletWeb3Controller from "../../../utilities/wallet";

//store
import {
  web3State,
  providerState,
  accountState,
  networkState,
  requireNetworkState,
} from "../../../store/web3";
import { openWalletPopupState } from "../../../store/wallet";

function WalletConnect({ setWalletPopup, setBuyButton, connectWallet }) {
  const [web3, setWeb3] = useRecoilState(web3State);
  const [provider, setProvider] = useRecoilState(providerState);
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [isOpenWalletPopup, setIsOpenWalletPopup] =
    useRecoilState(openWalletPopupState);
  /* Setting WalletConnect */

  const WalletProvider = useMemo(
    () =>
      new WalletWeb3Controller({
        callbackConnect: (res) => {
          setIsOpenWalletPopup(false);
        },
        callbackDisconnect: () => {
          console.log("wallet disconnected");
        },
      }),
    []
  );
  const handleConnectWallet = async () => {
    if (account) {
      alert("지갑이 연결됐습니다.");
      setIsOpenWalletPopup(false);
    } else {
      const { account: accountResponse, network: neworkResponse } =
        await WalletProvider.connect();
      setWeb3(WalletProvider.web3);
      setProvider(WalletProvider.provider);
      setNetwork(neworkResponse)
      if (Boolean(accountResponse)) setAccount(accountResponse);
      setIsOpenWalletPopup();
    }
  };


  function openAndroidMetaMaskLink() {
    window.open('https://play.google.com/store/apps/details?id=io.metamask')
  }
  function openIosMetaMaskLink() {
    window.open('https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=875919044007830634&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D')
  }

  return (
    <Container>
      <div className="background" onClick={() => { setWalletPopup(false) }}></div>
      <div className="modal2">
        <div className={"Text_Style_14"} style={{ marginBottom: "46px" }}>
          메타마스크 지갑 앱 설치
        </div>

        <div style={{
          paddingLeft: "45px",
          paddingRight: "45px",
          width: "calc( 100% - 90px )"
        }}>
          <h1 style={{
            fontSize: "24px",
            fontWeight: 700,
            paddingBottom: "20px"
          }}>1. 아래 버튼을 통해 설치 부탁드립니다.</h1>
          <div style={{
            display: "flex",
            paddingBottom: '13px'
          }}>
            <Button
              className={"Text_Style_15"}
              style={{
                marginRight: "12px",
                padding: '16px 0'
              }}
              onClick={() => {
                openAndroidMetaMaskLink();
              }}
            >
              안드로이드
            </Button>
            <Button
              className={"Text_Style_15"}
              style={{
                marginLeft: "12px",
                padding: '16px 0'
              }}
              onClick={() => {
                openIosMetaMaskLink();
              }}
            >
              아이폰
            </Button>
          </div>

          {/* <div style={{
            fontWeight: 700,
            fontSize: '15px'
          }}>앱 설치 및 지갑 생성 후 아래 지갑 연결 버튼을 클릭 해주세요.</div> */}

          <div style={{
            paddingTop: '39px'
          }}>
            <h1 style={{
              fontSize: "24px",
              fontWeight: 700,
              paddingBottom: "20px"
            }}>2. 메타마스크 설치 완료 후 아래 버튼을 누르세요.</h1>

            <div style={{
              display: "flex",
            }}>

              <Button
                className={"Text_Style_15"}
                onClick={() => {
                  if (Boolean(connectWallet)) {
                    connectWallet();
                  } else {
                    handleConnectWallet()
                  }
                }}
                style={{
                  padding: '16px 0'
                }}
              >
                메타마스크(NFT지갑) 연결
              </Button>
            </div>
          </div>
        </div>

        <div className={"Text_Style_16"} style={{
          padding: "60px 45px 30px 45px",
          fontSize: '23px',
          lineHeight: '27px',
          color: '#000000',
        }}>
          메타마스크란 1천만명 이상이 사용하는 글로벌 암호화폐 지갑이며, 프라이빗 키(Private Key)를 생성해주기 때문에 여러분의 NFT를 가장 안전하게 보관할 수 있는 방법입니다.
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* opacity: 75%; */
    z-index: 2;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
  }
  .modal2 {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 596px;
    // height: 536px;
    background-color: white;
    border-radius: 10px;
    opacity: 1;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    padding: 50px 0px;
    box-sizing: border-box;
    align-items: center;
  }
`;

export const Button = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  // width: 443px;
  height: 68px;
  cursor: pointer;
  background: rgba(230, 71, 36, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
`;

export default WalletConnect;
