/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import React, { useState, useEffect, useRef } from "react";
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
import { ntfInforState } from "../../store/ntf";
import { web3ReaderState } from "../../store/read-web3";

//이용약관
import TermsOfUse from "./Terms/TermsOfUse";
import Privacy from "./Terms/Privacy";
//팝업
import WalletConnect from "./Popup/walletConnect";
import CreditcardPopup from "./Popup/creditCard";
import AccountTransferPopup from "./Popup/accountTransfer";
import NavBottom from "./NavBottom";

import { createContractInstance } from "../../lib/Station";
import { Container, Contents, Header, Info1, Info2, Info3, Info4, Toggle1, Toggle2 } from './index.styles';

function NftTrade() {
  const [payOpen, setPayOpen] = useState(false);
  const [toggle1Open, setToggle1Open] = useState(false);
  const [toggle2Open, setToggle2Open] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
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
  const [nftInfo, setNftInfo] = useRecoilState(ntfInforState);

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
  const inputDerection = useRef(null)


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
              <img src="/detail_share.png" alt="" />
              {/* <img src="/detail_refresh.png" alt="" /> */}
            </div>
          </div>
          <div className="title">가을축제, 남관</div>
          <div className="artist">1984년, 200x300(cm), Oil Painting</div>
          {/* <div className="title">{`작품명 : ${nftInfo[0].address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
            ? "가을축제"
            : "-"
            }`}</div>
          <div className="artist">{`작가명 : ${nftInfo[0].address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
            ? "남관"
            : "-"
            }`}</div> */}
        </Header>

        <Info1>
          <div className="period">
            <div className="title">판매기간</div>
            <div className="time">
              {/* {loadPoolPeriod(nftInfo[0].start_time, nftInfo[0].end_time)} */}
              {/* {loadPoolPeriod(1638331200, 1640271600)} */}
              2021.11.25 15:00 ~ 2021.12.24 23:59
            </div>
          </div>
          <div className="product">
            <img
              src="/detail_product.png"
            />
          </div>
          <div className="info1">
            {/* <div className="left">
              <div className="like">
                <img
                  src="/detail_like.png"
                  style={{ width: "32px", height: "28px" }}
                ></img>
                <div className="amount">15</div>
              </div>
              <div className="look">
                <img
                  src="/detail_look.png"
                  style={{ width: "38px", height: "25px" }}
                ></img>
                <div className="amount">120,000</div>
              </div>
            </div>
            <div className="right">잔여 수량/총 발행량</div> */}
          </div>
          <div className="info2">
            <div className="left">
              <div className="seller">판매자</div>
              <div className="name">(주)아트비글로벌</div>
              {/* <div className="name">{`${nftInfo[0].address ===
                "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
                ? "ArtB"
                : "-"
                }`}</div> */}
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
            <div className="wrapper">
              <div className="top">
                <div className="deadline">판매마감일</div>
                <div className="time">모든 NFT가 판매 될 경우 조기 마감될 수 있습니다.</div> {/* FIX ME */}
              </div>
              <Countdown
                date={new Date(2021, 11, 23, 24).getTime()}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="bottom">
                    <div className="day section">
                      <div className="digit">{zeroPad(days)}</div>
                      <div className="unit">일</div>
                    </div>
                    <div className="time section">
                      <div className="digit">{zeroPad(hours)}</div>
                      <div className="unit">시간</div>
                    </div>
                    <div className="minute section">
                      <div className="digit">{zeroPad(minutes)}</div>
                      <div className="unit">분</div>
                    </div>
                    <div className="second section">
                      <div className="digit">{zeroPad(seconds)}</div>
                      <div className="unit">초</div>
                    </div>
                  </div>
                )}
              />
            </div>
          </Info2>
        )}

        <Info3>
          <div className="title">모든 구매자 분께 NFT 카드 실물을 서비스로 드립니다.</div>
          <div className="image__wrapper">
            <div className="first__section">
              <img className="logo" src="/Artb__only__text.svg" />
              <img
                className="main__image"
                src="/detail_product.png"
              />
              <div className="bottom">남관 · 가을축제 · 1984 · 200 x 300 · Oil Painting</div>
            </div>
            <div className="second__section">
              <img className="logo" src="/Artb__only__text.svg" style={{ width: "18px", height: "11.08px" }} />
              <div className="header__title">남관(南寬), 대한민국의 대표적 추상미술 작가</div>
              <div className="sub__title">동양의 신비한 사상을 서양의 과학적 기법을 융합시킨 선구자적 아티스트</div>
              <div className="stamp__wrapper">
                <div className="header">저작권자</div>
                <img className="signature" src="/친필싸인 1__signature.svg" />
                <div className="sub__title">아트비글로벌</div>
                <img className="stamp" src="/직인 1__stamp.svg" />
              </div>
              <div className="bottom">
                <div className="left">
                  <p>SERIAL NO.HAAIHD-001-0001</p>
                </div>
                <div className="right">
                  <span>(주)아트비글로벌</span>
                  <span>2021년 11월 25일</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom__section">
            <div className="header__title">
              구매 금액에 따라 실물 필름을 초고화질로 스캔하여 <br />
              실물화한 가을축제 액자가 제공됩니다.
            </div>
            <div className="sub__title">
              450만원 구매시 90x60cm <br />
              900만원 구매시 120x90cm
            </div>
            <div className="wrapper__image">
              <div className="image" />
            </div>
          </div>
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
                <div className="info">
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
                </div>
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
        )}
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
      <NavBottom onClickLeft={() => { }} onClickRight={() => { }} />
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


export default NftTrade;
