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
import { fromWei, toWei } from "web3-utils";
import axios from "axios";
// import { changeNetwork } from "./utils/Wallets";
//store
import {
  web3State,
  providerState,
  accountState,
  networkState,
  requireNetworkState,
} from "../../store/web3";
import { web3ReaderState } from "../../store/read-web3";

//이용약관
import TermsOfUse from "./Terms/TermsOfUse";
import Privacy from "./Terms/Privacy";
//팝업
import WalletConnect from "./Popup/walletConnect";
import CreditcardPopup from "./Popup/creditCard";
import AccountTransferPopup from "./Popup/accountTransfer";

import { createContractInstance } from "../../lib/Station";

function NftTrade() {
  const [payOpen, setPayOpen] = useState(false);
  const [toggle1Open, setToggle1Open] = useState(false);
  const [toggle2Open, setToggle2Open] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [midValue, setMidValue] = useState(undefined);
  const [totalValue, setTotalValue] = useState(undefined);
  const [isArtB, setIsArtB] = useState(false); //아트비구매 클릭시
  const [buyButton, setBuyButton] = useState(false);
  const [walletPopup, setWalletPopup] = useState(false);
  const [creditcardPopup, setCreditcardPopup] = useState(false);
  const [transferPopup, setTransferPopup] = useState(false);
  const [userInfo, setUserInfo] = useState({
    allowance: 0,
  });
  const [nftMethods, setNftMethods] = useState({
    approve: () => {
      return;
    },
    buy: () => {
      return;
    },
  });
  const [nftInfo, setNftInfo] = useState([
    {
      tokenId: "0",
      address: "0x00",
      quantity: "0",
      sold: "0",
      inventory: "0",
      start_time: "1632625200000",
      end_time: "1640876400000",
      is_active: true,
      price: "0",
      payTokenAddress: "0x00",
    },
  ]);

  const [web3, setWeb3] = useRecoilState(web3State);
  const [web3_R] = useRecoilState(web3ReaderState);
  const [account, setAccount] = useRecoilState(accountState);

  /* SETTING INSTANCE */
  const ABC_TOKEN_INFO = require("../../lib/contracts/ABCToken.json");
  const ARTB_COLLECTION_INFO = require("../../lib/contracts/ArtbCollection.json");
  const ARTB_COLLECTION_SELLER_INFO = require("../../lib/contracts/CollectionSeller.json");

  const ERC20_ABI = require("../../lib/contracts/ERC20.json");
  const ABC_TOKEN_ABI = ABC_TOKEN_INFO.abi;
  const ABC_TOKEN_ADDRESS = ABC_TOKEN_INFO.networks[4].address;

  const ARTB_COLLECTION_ABI = ARTB_COLLECTION_INFO.abi;
  const ARTB_COLLECTION_ADDRESS = ARTB_COLLECTION_INFO.networks[1].address;

  const ARTB_COLLECTION_SELLER_ABI = ARTB_COLLECTION_SELLER_INFO.abi;
  const ARTB_COLLECTION_SELLER_ADDRESS =
    ARTB_COLLECTION_SELLER_INFO.networks[4].address;

  /* READ CONTRACT */
  // abc abi -> allowance, name, symbol, totalSupply
  // seller abi -> PRICE, STARTWHEN, STOPWHEN, MINTER

  /* WRITE CONTRACT */
  // abc abi -> approve, balanceOf,
  // collection abi -> uri, balanceOf,
  // seller abi -> buy

  const loadUserInfo = async () => {
    let result = {};
    const ABC_TOKEN_INSTANCE = createContractInstance(
      web3_R.testnet,
      ABC_TOKEN_ADDRESS,
      ABC_TOKEN_ABI
    );
    let allowance = await ABC_TOKEN_INSTANCE.methods
      .allowance(account, ARTB_COLLECTION_SELLER_ADDRESS)
      .call();

    result = {
      allowance: allowance,
      // address: info.address,
      // available: fromWei(available, "ether"),
      // balance: balance,
      // share: share,
      // reward: reward,
    };
    setUserInfo(result);
  };

  const loadNftInfo = async () => {
    // const ABC_TOKEN_INSTANCE = createContractInstance(web3_R.testnet, ABC_TOKEN_ADDRESS, ABC_TOKEN_ABI);
    const SELLER_INSTANCE = createContractInstance(
      web3_R.testnet,
      ARTB_COLLECTION_SELLER_ADDRESS,
      ARTB_COLLECTION_SELLER_ABI
    );
    const COLLECTION_INSTANCE = createContractInstance(
      web3_R.mainnet,
      ARTB_COLLECTION_ADDRESS,
      ARTB_COLLECTION_ABI
    );

    const nftInformation = await SELLER_INSTANCE.methods.Goods("0").call();
    const artInfoUri = await COLLECTION_INSTANCE.methods.uri("0").call(); // not using for now

    // const totalSupply = await COLLECTION_INSTANCE.methods.totalSupply().call();
    const totalSupply = await COLLECTION_INSTANCE.methods
      .balanceOf(
        "0x6f052fc672d33061972ebe3cb0c509fba13858ff",
        nftInformation.collection.tokenId
      )
      .call(); // FIX ME
    // const remainedNFT = await COLLECTION_INSTANCE.methods.balanceOf(ARTB_COLLECTION_ADDRESS, nftInformation.collection.tokenId).call();

    // console.log("remainedNFT", remainedNFT)

    let result = [
      {
        tokenId: nftInformation.collection.tokenId,
        address: "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682",
        quantity: 100000,
        sold: nftInformation.collection.SOLD,
        inventory: totalSupply,
        start_time: nftInformation.start_time,
        end_time: nftInformation.end_time,
        is_active: nftInformation.is_active,
        price: fromWei(nftInformation.payment.amount, "ether"),
        payTokenAddress: nftInformation.payment.token,
      },
    ];

    setNftInfo(result);
  };

  const loadMethods = () => {
    let result = {};
    const ABC_TOKEN_INSTANCE = createContractInstance(
      web3,
      ABC_TOKEN_ADDRESS,
      ABC_TOKEN_ABI
    );
    const SELLER_INSTANCE = createContractInstance(
      web3,
      ARTB_COLLECTION_SELLER_ADDRESS,
      ARTB_COLLECTION_SELLER_ABI
    );
    let tokenId, amount;

    // approve
    const approve = async (tokenM, to, amount, account) => {
      if (typeof amount != "string") amount = String(amount);
      await tokenM.approve(to, toWei(amount, "ether")).send({ from: account });
      loadUserInfo();
    };
    const buy = async (nftM, amount, tokenId) => {
      if (typeof amount != "string") amount = String(amount);

      await nftM.buy(tokenId, amount).send({ from: account });
      // loadUserInfo();
    };

    result = {
      approve: async () =>
        await approve(
          ABC_TOKEN_INSTANCE.methods,
          ARTB_COLLECTION_SELLER_ADDRESS,
          "999999999",
          account
        ),
      buy: async (amount, tokenId = "0") =>
        await buy(SELLER_INSTANCE.methods, amount, tokenId),
    };
    return setNftMethods(result);
  };

  useEffect(() => {
    if (account) {
      loadMethods();
      loadUserInfo();
    }
  }, [account]);

  useEffect(() => {
    loadNftInfo();
  }, []);
  console.log("buyButton", buyButton);
  return (
    <Container>
      <Contents>
        <Header>
          <HashLink to={"/"}>
            <div
              className="back"
              onClick={() => {
                setBuyButton(false);
                setCheck1(false);
                setCheck2(false);
              }}
            >
              {buyButton ? "< 이전 페이지로 돌아가기" : ""}
            </div>
          </HashLink>

          <div className="basic">
            <div className="info">
              <div className="status">
                {nftInfo[0].is_active ? "판매중" : "판매완료"}
              </div>{" "}
              {/* FIX ME by tokenId */}
              <div className="model">
                {nftInfo[0].address.slice(0, 8) +
                  "..." +
                  nftInfo[0].address.slice(-6)}
              </div>{" "}
              {/* FIX ME */}
            </div>
            <div className="function">
              {/* <img src="/detail_share.png" alt="" /> */}
              {/* <img src="/detail_refresh.png" alt="" /> */}
            </div>
          </div>
          <div className="title">{`작품명 : ${
            nftInfo[0].address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
              ? "가을축제"
              : "-"
          }`}</div>
          <div className="artist">{`작가명 : ${
            nftInfo[0].address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
              ? "남관"
              : "-"
          }`}</div>
        </Header>

        <Info1>
          <div className="period">
            <div className="title">판매기간</div>
            <div className="time">
              {/* {loadPoolPeriod(nftInfo[0].start_time, nftInfo[0].end_time)} */}
              {loadPoolPeriod(1638331200, 1640271600)}
            </div>
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
              <div className="name">{`${
                nftInfo[0].address ===
                "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
                  ? "ArtB"
                  : "-"
              }`}</div>
            </div>
            <div className="right">
              <div className="rest">
                {nftInfo[0].inventory != 0
                  ? Number(nftInfo[0].inventory - 60000).toLocaleString()
                  : 0}{" "}
                NFT/
              </div>
              <div className="total">
                {Number(nftInfo[0].quantity).toLocaleString()} NFT
              </div>
            </div>
          </div>
        </Info1>

        {payOpen ? (
          <></>
        ) : (
          <Info2>
            <div className="top">
              <div className="deadline">판매 마감일</div>
              <div className="time">{"2021.12.24 00:00"}</div> {/* FIX ME */}
            </div>
            <Countdown
              date={new Date(2021, 11, 23, 24).getTime()}
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

        <Info3>
          <div className="title">개당 저작권 가격</div>
          <div className="info">
            <div className="price">
              <div className="won">
                {`￦ ${
                  nftInfo[0].address ===
                  "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
                    ? Number("45000").toLocaleString()
                    : "-"
                }`}
                {/* ￦{Number(data.price).toLocaleString()} */}
              </div>{" "}
              {/* FIX ME */}
              {/* <div className="coin">
                ≈{" "}
                {String(Number(data.price) / Number(data.abcTokenValue)).slice(
                  0,
                  4
                )}{" "}
                ABC
              </div> */}
            </div>
            <div className="restTime">
              <img
                src="/detail_clock.png"
                style={{ width: "25px", height: "25px" }}
              />
              <Countdown
                date={new Date(2021, 11, 23, 24).getTime()}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="time">{zeroPad(days)}일 남음</div>
                )}
              />
            </div>
          </div>
          <div className="inputBox">
            <input
              className="input"
              type="number"
              placeholder="구매할 수량을 입력해주세요"
              value={inputValue}
              onChange={(e) => {
                if (Number(e.target.value) < 0) {
                  setInputValue("0");
                }
                if (
                  Number(e.target.value) > Number(nftInfo[0].inventory - 60000)
                ) {
                  setInputValue(Number(nftInfo[0].inventory - 60000));
                } else {
                  setMidValue(45000 * e.target.value);
                  setTotalValue(45000 * e.target.value + 15000);
                  setInputValue(e.target.value);
                }
              }}
              style={{ height: "50px" }}
            />
            <div className="unit" style={{ paddingLeft: "10px" }}>
              NFT
            </div>
          </div>

          <div className="restAmount">
            <div className="left">총 금액:</div>
            <div className="right">
              {(inputValue ? midValue.toLocaleString() : "-") + "원"}
            </div>
          </div>

          <div className="restAmount">
            <div className="left">이더리움 네트워크 수수료:</div>
            <div className="right">15,000원</div>
          </div>

          <div className="restAmount">
            <div className="left">총 결제 금액:</div>
            <div className="right">
              {(inputValue ? totalValue.toLocaleString() : "-") + "원"}
            </div>
          </div>

          {!buyButton ? (
            <>
              <div className="buttons">
                <div
                  className="coinButton"
                  onClick={() => {
                    if (!inputValue) {
                      alert("수량을 기입해주시기 바랍니다.");
                    } else if (check1 && check2) {
                      setIsArtB(true);
                      setBuyButton(!buyButton);
                    } else alert("필수 이용약관에 동의해주시기 바랍니다.");
                  }}
                  style={
                    inputValue && check1 && check2
                      ? {}
                      : { cursor: "not-allowed", opacity: "30%" }
                  }
                >
                  <img className="icon" src="buy_icon.png" />
                  <div className="name">구매하기</div>
                </div>
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  className="box"
                  onClick={() => {
                    setCheck1(!check1);
                    console.log(check1);
                  }}
                />
                <span>Artb 이용약관 </span>
                <span style={{ color: "red" }}>(필수)</span>
                <img
                  className="arrow"
                  src="arrow-right.png"
                  onClick={async () => {
                    setTermsModal(!termsModal);
                    window.scrollTo(0, 0);
                  }}
                />
              </div>
              <div className="checkbox">
                <input
                  type="checkBox"
                  className="box"
                  onClick={() => {
                    setCheck2(!check2);
                    console.log(check2);
                  }}
                />
                <span>Artb 개인정보 수집 및 이용약관 </span>
                <span style={{ color: "red" }}>(필수)</span>
                <img
                  className="arrow"
                  src="arrow-right.png"
                  onClick={async () => {
                    setPrivacyModal(!privacyModal);
                    window.scrollTo(0, 0);
                  }}
                />
                {termsModal ? (
                  <TermsOfUse
                    setTermsModal={setTermsModal}
                    nftMethods={nftMethods}
                    inputValue={inputValue}
                  />
                ) : null}
                {privacyModal ? (
                  <Privacy
                    setPrivacyModal={setPrivacyModal}
                    nftMethods={nftMethods}
                    inputValue={inputValue}
                  />
                ) : null}
              </div>
            </>
          ) : (
            <div className="buttons">
              <div
                className="coinButton"
                onClick={
                  account ? () => {} : () => setWalletPopup(!walletPopup)
                }
                style={
                  account
                    ? { cursor: "not-allowed", opacity: "30%" }
                    : { cursor: "pointer" }
                }
              >
                <div className="name">
                  {" "}
                  {account ? "지갑연결 완료" : "지갑연결"}
                </div>
              </div>

              <div
                className="coinButton"
                onClick={() => {
                  if (!inputValue || inputValue < 1) {
                    alert("수량을 기입해주시기 바랍니다.");
                  } else if (!account) {
                    alert("지갑연결이 필요합니다");
                  } else {
                    setTransferPopup(!transferPopup);
                    window.scrollTo(0, 0);
                  }
                }}
                // onClick={
                //   account
                //     ? () => {
                //       setTransferPopup(!transferPopup);
                //       window.scrollTo(0, 0);
                //     }
                //     : () => {
                //       alert("먼저 지갑을 연결해주시기 바랍니다.");

                //     }
                // }
                style={
                  !account
                    ? { cursor: "not-allowed", opacity: "30%" }
                    : { cursor: "pointer" }
                }
              >
                <div className="name">계좌 이체로 구매</div>
              </div>

              <div
                className="coinButton"
                onClick={() => {
                  setCreditcardPopup(!creditcardPopup);
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="name">카드 결제로 구매</div>
              </div>
            </div>
          )}
          {console.log("input", inputValue)}
          {/* {!isArtB ?
            <div className="buttons">
              <div
                className="coinButton"
                onClick={() => {
                  // console.log("value", inputValue)
                  // inputValue == 0 ?
                  //   alert("수량을 입력해주세요")
                  //   :
                  setIsArtB(true)

                }}
              >
                <div className="name">Artb 구매</div>
              </div>
              <div
                className="cashButton"
                onClick={() => {

                }}
              >
                <div className="name">원화 구매</div>
              </div>
            </div>
            :
            <div className="buttons">
              <div
                className="payButton"
                onClick={async () => {
                  if (account) {
                    alert("지갑이 연결됐습니다.");
                  } else {
                    await connect();
                  }
                }}
                style={
                  account
                    ? { cursor: "not-allowed", opacity: "30%" }
                    : { cursor: "pointer" }
                }
              >
                <div className="name">
                  {account
                    ? account.slice(0, 8) + "..." + account.slice(-6)
                    : "지갑연결"}</div>
              </div>
              <div
                className="payButton"
                onClick={async () => {
                  if (account) {
                    if (userInfo.allowance > 0) {
                      setTermsModal(!termsModal);
                    } else {
                      nftMethods.approve();
                    }
                    window.scrollTo(0, 0);
                  } else {
                    alert("지갑을 연결해 주세요");
                  }
                }}
                style={
                  account
                    ? { cursor: "pointer" }
                    : { cursor: "not-allowed", opacity: "30%" }
                }
              >
                <div className="name">구매하기</div>
              </div>
            </div> */}

          {/* {termsModal ? <TermsOfUse setTermsModal={setTermsModal} nftMethods={nftMethods} inputValue={inputValue} /> : null} */}
        </Info3>

        {/* <Info3 style={payOpen ? { marginBottom: "35px" } : {}}>
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
                if (account) {
                  setTermsModal(!termsModal);
                  window.scrollTo(0, 0);
                } else {
                  alert("지갑을 연결해 주세요");
                }
              }}
              style={
                account
                  ? { cursor: "pointer" }
                  : { cursor: "not-allowed", opacity: "30%" }
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
        </Info3> */}

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
                  <div className="detail">Etehreum ERC-1155 (OpenSea)</div>
                </div>
                <div className="info">
                  <div className="title">Contract</div>
                  <div className="detail">
                    0x31B8696aa951771565EEcC9afBEB6F7eD87e2682
                  </div>
                </div>
                <div className="info">
                  <div className="title">카테고리</div>
                  <div className="detail">남관_가을축제_저작권</div>
                </div>
                {/* <div className="info">
                  <div className="title">작품관리번호</div>
                  <div className="detail">
                    0x8998f4097170970bA9D5Ef07A0d703C37f2d5657
                  </div>
                </div>
                <div className="info">
                  <div className="title">등록자</div>
                  <div className="detail">
                    0x8998f4097170970bA9D5Ef07A0d703C37f2d5657
                  </div>
                </div> */}
                <div className="info">
                  {/* <div className="title">설명</div> */}
                  {/* <div className="detail">
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
                  </div> */}
                </div>
              </Info4>
            ) : (
              <></>
            )}
          </Toggle1>
        )}
        {/* {payOpen ? (
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
  
          </Toggle2>
        )} */}
      </Contents>
      {transferPopup ? (
        <AccountTransferPopup
          setTransferPopup={setTransferPopup}
          amount={inputValue}
          totalValue={totalValue}
          address={nftInfo[0].address}
        />
      ) : null}
      {creditcardPopup ? (
        <CreditcardPopup setCreditcardPopup={setCreditcardPopup} />
      ) : null}
      {walletPopup ? (
        <WalletConnect
          setWalletPopup={setWalletPopup}
          setBuyButton={setBuyButton}
        />
      ) : null}
    </Container>
  );
}

const loadPoolPeriod = (startTime, endTime) => {
  let ret = "21.01.01 00:00:00 ~ 21.01.30 00:00:00((UTC+9)+9)";
  const formatter = (timestamp) => {
    var d = new Date(Number(timestamp.toString()) * 1000);
    const z = (x) => {
      return x.toString().padStart(2, "0");
    };
    return `${new String(d.getFullYear()).substr(2, 3)}.${z(
      d.getMonth() + 1
    )}.${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}:${z(
      d.getSeconds()
    )}`;
  };
  ret = `${formatter(startTime)} ~ ${formatter(endTime)}`;
  return ret;
};

const Container = styled.div`
  display: flex;
  position: relative;
  margin-top: 130px;
  width: 100%;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 100%;
  margin: 30px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 35px 70px 0 70px;
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
      img {
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
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
  padding: 28px 50px 43px 50px;
  // height: 350px; // 임시
  height: fit-content; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .title {
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
    justify-content: flex-end;
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
      font-size: 18px;
      border: 0px;
      text-align: right;
      width: 330px;
      /* margin:auto;
      margin-left:0; */
    }
    input::-webkit-input-placeholder {
      font-weight: bold;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.2);
      padding-right: 150px;
    }
    input:-ms-input-placeholder {
      font-weight: bold;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.2);
    }
    input::placeholder {
      font-weight: bold;
      font-size: 18px;
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
    margin-bottom: 32px;

    .coinButton {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 430px;
      height: 70px;
      background: rgba(230, 71, 36, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      cursor: pointer;
      .icon {
        width: 26px;
        height: 24px;
      }
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
      /* cursor: pointer; */
    }
  }
  .checkbox {
    display: flex;

    .box {
      margin-right: 19px;
    }
    .arrow {
      margin: auto;
      margin-right: 15px;
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
  margin-bottom: 30px;
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
