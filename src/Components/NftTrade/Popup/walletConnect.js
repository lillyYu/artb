import styled from "styled-components";
import { React, useState } from "react";
import { useRecoilState } from "recoil";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { fromWei, toWei } from "web3-utils";

//store
import {
  web3State,
  providerState,
  accountState,
  networkState,
  requireNetworkState,
} from "../../../store/web3";

function WalletConnect({ setWalletPopup, setBuyButton }) {
  const [web3, setWeb3] = useRecoilState(web3State);
  const [provider, setProvider] = useRecoilState(providerState);
  const [account, setAccount] = useRecoilState(accountState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [requireNetwork] = useRecoilState(requireNetworkState);
  /* Setting WalletConnect */
  const providerOptions = {
    metamask: {
      id: "injected",
      name: "MetaMask",
      type: "injected",
      check: "isMetaMask",
    },
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        rpc: {
          1: "https://eth-mainnet.alchemyapi.io/v2/2wgBGtGnTm3s0A0o23RY0BtXxgow1GAn",
          3: "https://eth-ropsten.alchemyapi.io/v2/vn-ib6FVXaweiMUDJkOmOkXQm1jPacAj",
        },
        infuraId: "3fc11d1feb8944229a1cfba7bd62c8bc", // Required
        network: "mainnet",
        qrcodeModalOptions: {
          mobileLinks: [
            "rainbow",
            "metamask",
            "argent",
            "trust",
            "imtoken",
            "pillar",
          ],
        },
      },
    },
  };
  let web3Modal = new Web3Modal({
    // network: "mainnet",
    // network: "ropsten",
    cacheProvider: true,
    providerOptions,
  });
  async function connect() {
    while (
      window.document.querySelectorAll("[id=WEB3_CONNECT_MODAL_ID]").length > 1
    ) {
      window.document
        .querySelectorAll("[id=WEB3_CONNECT_MODAL_ID]")[1]
        .remove();
    }
    let provider = await web3Modal.connect();
    setProvider(provider);
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    const network = await web3.eth.getChainId();
    setAccount(accounts[0]);
    setNetwork(network);

    connectEventHandler(provider);
  }

  function openAndroidMetaMaskLink() {
    window.open('https://play.google.com/store/apps/details?id=io.metamask')
  }
  function openIosMetaMaskLink() {
    window.open('https://apps.apple.com/us/app/metamask/id1438144202?_branch_match_id=875919044007830634&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWL8529DB2SnSztAQA5G46IyQAAAA%3D')
  }
  // function getAccount() {
  //   if (text) return text;
  //   // console.log(network, requireNetwork);
  //   let ret = account.slice(0, 8) + "..." + account.slice(-6);
  //   return ret;
  // }
  async function onDisconnect(event) {
    if (!event && web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    setAccount(undefined);
    setProvider(undefined);
    setNetwork(undefined);
    await web3Modal.clearCachedProvider();

    // let els = document.querySelectorAll('[id=WEB3_CONNECT_MODAL_ID]')
    // while (els.length>1) {
    //     document.querySelectorAll('[id=WEB3_CONNECT_MODAL_ID]')[1].remove();
    // }
  }
  function connectEventHandler(provider) {
    if (!provider.on) {
      return;
    }
    provider.on("open", async (info) => {
      console.log("info", info);
    });
    provider.on("accountsChanged", async (accounts) => {
      setAccount(accounts[0]);
    });
    provider.on("chainChanged", async (chainId) => {
      setNetwork(chainId);
    });
    provider.on("disconnect", async (error) => {
      onDisconnect(true);
    });
  }
  return (
    <Container>
      <div className="background" onClick={() => { setWalletPopup(false) }}></div>
      <div className="modal2">
        <div className={"Text_Style_14"} style={{ paddingBottom: "20px" }}>
          <br />
          NFT 수령을 위해
          <br />
          METAMASK 지갑 연결이 필요합니다
        </div>
        <div className={"Text_Style_16"} style={{
          paddingBottom: "40px",
          paddingLeft: "26px",
          paddingRight: "26px"
        }}>
          <br />왜 메타마스크가 필요한가요?
          <br />
          <br />
          메타마스크란 1천만명 이상이 사용하는 글로벌 암호화폐 지갑이며, 프라이빗 키(Private Key)를 생성해주기 때문에 여러분의 NFT를 가장 안전하게 보관할 수 있는 방법입니다.
          <br />
          <br />
          아래 버튼을 통해 메타마스크를 연결해주세요.
        </div>
        <div style={{
          paddingLeft: "45px",
          paddingRight: "45px",
          width: "calc( 100% - 90px )"
        }}>
          <h1 style={{
            fontSize: "24px",
            fontWeight: 700,
            paddingBottom: "14px"
          }}>1. 메타마스크 지갑 앱 설치</h1>
          <div style={{
            display: "flex",
            paddingBottom: '13px'
          }}>
            <Button
                className={"Text_Style_15"}
                style={{
                  marginRight: "14px",
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
                  marginLeft: "14px",
                }}
                onClick={() => {
                  openIosMetaMaskLink();
                }}
            >
              아이폰
            </Button>
          </div>

          <div style={{
            fontWeight: 700,
            fontSize: '15px'
          }}>앱 설치 및 지갑 생성 후 아래 지갑 연결 버튼을 클릭 해주세요.</div>

          <div style={{
            paddingTop: '39px'
          }}>
            <h1 style={{
              fontSize: "24px",
              fontWeight: 700,
              paddingBottom: "14px"
            }}>2. 메타마스크 연결</h1>

            <div style={{
              display: "flex",
              paddingBottom: '13px'
            }}>

              <Button
                  className={"Text_Style_15"}
                  onClick={async () => {
                    if (account) {
                      await alert("지갑이 연결됐습니다.");
                      await setWalletPopup(false);

                    } else {
                      await connect();
                      await setWalletPopup(false);
                    }
                  }}
              >
                지갑 연결
              </Button>
            </div>
          </div>
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
    padding: 30px 0px;
    box-sizing: border-box;
    align-items: center;
  }
`;

const Button = styled.div`
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