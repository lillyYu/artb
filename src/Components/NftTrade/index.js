/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
// import { changeNetwork } from "./utils/Wallets";
//store
import {
  web3State,
  providerState,
  accountState,
  networkState,
  requireNetworkState,
} from "../../store/web3";

import TermsOfUse from "./Terms/TermsOfUse";

function NftTrade() {
  const [payOpen, setPayOpen] = useState(false);
  const [toggle1Open, setToggle1Open] = useState(false);
  const [toggle2Open, setToggle2Open] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [inputValue, setInputValue] = useState(0);

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
    console.log("Connect!");
    console.log("asdf", web3Modal);
    let provider = await web3Modal.connect();
    console.log("provicer", provider);
    setProvider(provider);
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    const network = await web3.eth.getChainId();
    setAccount(accounts[0]);
    setNetwork(network);

    connectEventHandler(provider);
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
      console.log(accounts);
      setAccount(accounts[0]);
    });
    provider.on("chainChanged", async (chainId) => {
      console.log(chainId);
      setNetwork(chainId);
    });
    provider.on("disconnect", async (error) => {
      onDisconnect(true);
    });
  }

  return (
    <Container>
      <Contents>
        <Header>
          <HashLink to={"/"}>
            <div
              className="back"
              onClick={() => {
                setPayOpen(false);
              }}
            >
              {payOpen ? "< 페이지로 돌아가기" : "< 이전 페이지로 돌아가기"}
            </div>
          </HashLink>
          <div className="basic">
            <div className="info">
              <div className="status">판매중</div>
              <div className="model">0x5CD9972</div>
            </div>
            <div className="function">
              <img
                src="/detail_share.png"
                style={
                  payOpen
                    ? { display: "none" }
                    : { width: "35px", height: "35px", cursor: "pointer" }
                }
              />
              <img
                src="/detail_refresh.png"
                style={
                  payOpen
                    ? { display: "none" }
                    : { width: "35px", height: "35px", cursor: "pointer" }
                }
              />
            </div>
          </div>
          <div className="title">작품명 : 가을축제</div>
          <div className="artist">작가명 : 남관</div>
        </Header>
        <Info1>
          <div className="period">
            <div className="title">판매기간</div>
            <div className="time">2021.09.26 12:00 ~ 2021.12.30 24:00</div>
          </div>
          <div className="product">
            <img
              src="/detail_product.png"
              style={{ width: "530px", height: "530px" }}
            />
          </div>
          <div className="info1">
            <div className="left">
              <div className="like">
                {/* <img
                  src="/detail_like.png"
                  style={{ width: "32px", height: "28px" }}
                ></img> */}
                {/* <div className="amount">15</div> */}
              </div>
              <div className="look">
                {/* <img
                  src="/detail_look.png"
                  style={{ width: "38px", height: "25px" }}
                ></img> */}
                {/* <div className="amount">120,000</div> */}
              </div>
            </div>
            <div className="right">잔여 수량/총 발행량</div>
          </div>
          <div className="info2">
            <div className="left">
              <div className="seller">판매자</div>
              <div className="name">artB</div>
            </div>
            <div className="right">
              <div className="rest">80,000EA/</div>
              <div className="total">100,000EA</div>
            </div>
          </div>
        </Info1>
        {payOpen ? (
          <></>
        ) : (
          <Info2>
            <div className="top">
              <div className="deadline">판매 마감일</div>
              <div className="time">2021.12.30 24:00</div>
            </div>
            <Countdown
              date={new Date(2021, 11, 30, 24).getTime()}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="bottom">
                  <div className="day">
                    <div className="digit">{zeroPad(days)}</div>
                    <div className="unit">일</div>
                  </div>
                  <div className="time">
                    <div className="digit">{zeroPad(hours)}</div>
                    <div className="unit">시간</div>
                  </div>
                  <div className="minute">
                    <div className="digit">{zeroPad(minutes)}</div>
                    <div className="unit">분</div>
                  </div>
                  <div className="second">
                    <div className="digit">{zeroPad(seconds)}</div>
                    <div className="unit">초</div>
                  </div>
                </div>
              )}
            />
          </Info2>
        )}
        <Info3 style={payOpen ? { marginBottom: "35px" } : {}}>
          <div className="title">개당 저작권 가격</div>
          <div className="info">
            <div className="price">
              <div className="won">￦ 100,000</div>
              <div className="coin">≈ 33.3 ABC</div>
            </div>
            <div className="restTime">
              <img
                src="/detail_clock.png"
                style={{ width: "25px", height: "25px" }}
              />
              <div className="time">3일 남음</div>
            </div>
          </div>
          <div className="inputBox">
            <input
              className="input"
              type="number"
              placeholder="000,000"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <div className="unit">EA</div>
          </div>
          <div className="restAmount">
            <div className="left">잔여수량:</div>
            <div className="right">123,123,123</div>
          </div>

          {/* <HashLink to={"/payment/terms"} > */}
          <div>
            <div
              className="payButton"
              onClick={() => {
                if (account) {
                  alert("지갑이 연결됐습니다.");
                } else {
                  connect();
                  console.log("account: ", account);
                }
              }}
              style={
                account
                  ? { cursor: "not-allowed", opacity: "30%" }
                  : { cursor: "pointer" }
              }
            >
              <img
                src="/detail_pay.png"
                style={{ width: "26px", height: "24px" }}
              />
              <div className="name">
                {account
                  ? account.slice(0, 8) + "..." + account.slice(-6)
                  : "지갑연결"}
              </div>
            </div>
            <div
              className="payButton"
              onClick={() => {
                console.log("asdf");
                setTermsModal(!termsModal);
              }}
              style={
                account
                  ?
                  { cursor: "pointer" }
                  :
                  { cursor: "not-allowed", opacity: "30%" }
              }
            >
              <img
                src="/detail_pay.png"
                style={{ width: "26px", height: "24px" }}
              />
              <div className="name">구매하기</div>
            </div>
          </div>
          {termsModal ? <TermsOfUse setTermsModal={setTermsModal} /> : null}
          {/* </HashLink> */}

          {/* {payOpen ? (
            <div className="buttons">
              <HashLink to={"/payment/coin"}>
                <div
                  className="coinButton"
                  onClick={() => {
                    setPayOpen(!payOpen);
                    console.log(payOpen);
                  }}
                >
                  <div className="name">Artb 구매</div>
                </div>
              </HashLink>
              <HashLink to={"/payment/cash"}>
                <div
                  className="cashButton"
                  onClick={() => {
                    setPayOpen(!payOpen);
                  }}
                >
                  <div className="name">원화 구매</div>
                </div>
              </HashLink>
            </div>
          ) : (
            <div
              className="payButton"
              onClick={() => {
                setPayOpen(!payOpen);
                setToggle1Open(false);
                setToggle2Open(false);
              }}
            >
              <img
                src="/detail_pay.png"
                style={{ width: "26px", height: "24px" }}
              />
              <div className="name">구매하기</div>
            </div>
          )} */}
        </Info3>
        {payOpen ? (
          <></>
        ) : (
          <Toggle1>
            <div
              className="nftToggle"
              onClick={() => {
                setToggle1Open(!toggle1Open);
                setToggle2Open(false);
              }}
              style={
                toggle1Open
                  ? {
                    border: "1px solid rgba(226, 226, 226, 0.7)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                  }
                  : {}
              }
            >
              <div className="title">NFT 정보</div>
              <img
                src={
                  toggle1Open
                    ? "/detail_toggleOpen.png"
                    : "/detail_toggleClose.png"
                }
                style={{ width: "25px", height: "16px" }}
              />
            </div>
            {toggle1Open ? (
              <Info4>
                <div className="info">
                  <div className="title">Blockchain</div>
                  <div className="detail">Ethereum ERC-1155(OpenSea)</div>
                </div>
                <div className="info">
                  <div className="title">Contract</div>
                  <div className="detail">
                    0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9
                  </div>
                </div>
                <div className="info">
                  <div className="title">카테고리</div>
                  <div className="detail">남관_가을축제_저작권</div>
                </div>
                <div className="info">
                  <div className="title">작품관리번호</div>
                  <div className="detail">
                    0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9
                  </div>
                </div>
                <div className="info">
                  <div className="title">등록자</div>
                  <div className="detail">
                    0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9
                  </div>
                </div>
                <div className="info">
                  <div className="title">설명</div>
                  <div className="detail">
                    NFT에 관한 설명란입니다. <br />
                    <br />
                    혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로
                    성립되고 유지되어야 하며, 국가는 이를 보장한다.
                    평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                    민주평화통일자문회의를 둘 수 있다. 국가는 전통문화의
                    계승·발전과 민족문화의 창달에 노력하여야 한다. 국가는
                    대외무역을 육성하며, 이를 규제·조정할 수 있다. 대법원장과
                    대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는
                    바에 의하여 연임할 수 있다. 국무회의는 대통령·국무총리와
                    15인 이상 30인 이하의 국무위원으로 구성한다. 국가는 농지에
                    관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며,
                    농지의 소작제도는 금지된다. 대한민국의 국민이 되는 요건은
                    법률로 정한다. 대통령은 국가의 독립·영토의 보전·국가의
                    계속성과 헌법을 수호할 책무를 진다. 선거운동은 각급
                    선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되,
                    균등한 기회가 보장되어야 한다. 국회의원은 현행범인인 경우를
                    제외하고는 회기중 국회의 동의없이 체포 또는 구금되지
                    아니한다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서
                    심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할
                    수 있다.
                  </div>
                </div>
              </Info4>
            ) : (
              <></>
            )}
          </Toggle1>
        )}
        {payOpen ? (
          <></>
        ) : (
          <Toggle2>
            <div
              className="historyToggle"
              onClick={() => {
                setToggle2Open(!toggle2Open);
                setToggle1Open(false);
              }}
              style={
                toggle2Open
                  ? {
                    border: "1px solid rgba(226, 226, 226, 0.7)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                  }
                  : {}
              }
            >
              <div className="title">저작권 구매기록</div>
              <img
                src={
                  toggle2Open
                    ? "/detail_toggleOpen.png"
                    : "/detail_toggleClose.png"
                }
                style={{ width: "25px", height: "16px" }}
              />
            </div>
            {/* <Info5></Info5> */}
          </Toggle2>
        )}
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  /* position: absolute; */
  position: relative;
  margin-top: 130px;
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

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  padding: 0 70px;
  padding-top: 35px;
  box-sizing: border-box;

  .back {
    font-weight: 500;
    font-size: 20px;
    color: #eb4632;
    cursor: pointer;
  }

  .basic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      display: flex;
      align-items: center;
      margin: 25px 0;
      gap: 0 20px;
      .status {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 30px;
        font-size: 13px;
        color: #eb4632;
        background-color: gray;
        background: rgba(235, 70, 50, 0.2);
        border-radius: 5px;
      }
      .model {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .function {
      display: flex;
      gap: 0 20px;
    }
  }

  .title {
    font-weight: bold;
    font-size: 25px;
  }
  .artist {
    margin-top: 5px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Info1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  margin: 0 70px;
  height: 720px; // 임시
  background-color: #f6f6f6;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .period {
    display: flex;
    gap: 0 10px;
    padding: 15px 0;
    justify-content: center;
    font-size: 20px;
    .title {
      color: rgba(0, 0, 0, 0.8);
    }
    .time {
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .product {
  }

  .info1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
    margin-top: 30px;

    .left {
      display: flex;
      gap: 0 15px;

      .like {
        display: flex;
        align-items: center;
        gap: 0 10px;

        .amount {
          margin-right: 10px;
          font-size: 20px;
          color: rgba(100, 100, 100, 0.8);
        }
      }
      .look {
        display: flex;
        align-items: center;
        gap: 0 10px;

        .amount {
          margin-right: 10px;
          font-size: 20px;
          color: rgba(100, 100, 100, 0.8);
        }
      }
    }

    .right {
      font-size: 20px;
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .info2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
    margin-top: 10px;

    .left {
      display: flex;
      font-size: 25px;
      .seller {
        color: rgba(0, 0, 0, 0.8);
      }
      .name {
        margin-left: 10px;
        color: #eb4632;

      }
    }

    .right {
      display: flex;
      font-size: 25px;
      font-weight: bold;
      .rest {
        color: rgba(0, 0, 0, 0.8);
      }
      .total {
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
`;
const Info2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px 0;
  width: 530px;
  margin: 0 70px;
  padding: 0 50px;
  height: 170px; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .top {
    display: flex;
    justify-content: space-between;

    .deadline {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
    }
    .time {
      font-size: 20px;
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    .day {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .minute {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .second {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
`;
const Info3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 530px;
  margin: 0 70px;
  padding: 0 50px;
  // height: 350px; // 임시
  height: fit-content; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .title {
    margin-top: 40px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      display: flex;
      align-items: center;

      .won {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.8);
      }
      .coin {
        margin-left: 10px;
        font-size: 20px;
        color: #e64724;
      }
    }
    .restTime {
      display: flex;
      align-items: flex-end;
      .time {
        margin-left: 10px;
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }

  .inputBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px;
    height: 70px;
    padding: 0 25px;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .input {
      font-weight: bold;
      font-size: 30px;
      color: rgba(0, 0, 0, 0.2);
      border: 0px;
    }
    input::-webkit-input-placeholder {
      font-weight: bold;
      font-size: 30pt;
      color: rgba(0, 0, 0, 0.2);
    }
    input:-ms-input-placeholder {
      font-weight: bold;
      font-size: 30pt;
      color: rgba(0, 0, 0, 0.2);
    }
    input::placeholder {
      font-weight: bold;
      font-size: 30pt;
      color: rgba(0, 0, 0, 0.2);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .unit {
      font-size: 20px;
      color: #000000;
    }
  }

  .restAmount {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: rgba(100, 100, 100, 0.6);

    .right {
      margin-left: 10px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    margin-bottom: 40px;

    .coinButton {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 430px;
      height: 70px;
      background: rgba(230, 71, 36, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;

      .name {
        margin-left: 10px;
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
      }
    }

    .cashButton {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 430px;
      height: 70px;
      background: rgba(230, 71, 36, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      cursor: pointer;

      .name {
        margin-left: 10px;
        font-weight: bold;
        font-size: 25px;
        color: #ffffff;
      }
    }
  }

  .payButton {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 430px;
    height: 70px;
    background: rgba(230, 71, 36, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    .name {
      margin-left: 10px;
      font-weight: bold;
      font-size: 25px;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

const Toggle1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 70px;
  width: 530px;
  background-color: rgba(191, 191, 191, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .nftToggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    width: 530px;
    height: 80px; // 임시
    background-color: #f6f6f6;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;

    .title {
      font-weight: bold;
      font-size: 25px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

const Info4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  padding: 30px 50px;
  width: 530px;
  //   height: 500px; // 임시
  height: fit-content;
  box-sizing: border-box;

  .info {
    .title {
      font-size: 20px;
      color: #c4c4c4;
    }

    .detail {
      margin-top: 5px;
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 40px;
    }
  }
`;

const Toggle2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 70px 35px;
  width: 530px;
  background-color: rgba(191, 191, 191, 0.2);
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .historyToggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    width: 530px;
    height: 80px; // 임시
    background-color: #f6f6f6;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;

    .title {
      font-weight: bold;
      font-size: 25px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export default NftTrade;
