import styled from "styled-components";
import React, { useState, useEffect, useMemo } from "react";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
import { Route, Link } from 'react-router-dom';
import {
  web3State,
  accountState,
  providerState
} from "../../store/web3";

import { web3ReaderState } from "../../store/read-web3";

import { createContractInstance } from "../../lib/Station";
import WalletWeb3Controller from "../../utilities/wallet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 130px;
  width: 100%;
  min-height: calc(100vh - 130px);
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px 0;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  .back {
    font-weight: 500;
    font-size: 20px;
    color: #eb4632;
    cursor: pointer;
    padding:35px 70px;
  }
  .hello {
    display: flex;
    justify-content: center;
    margin: 34px 0;
    .unionImg {
      width: 31px;
      height: 35px;
      padding-right: 30px;
    }
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    cursor: pointer;
    .icon {
      width: 24px;
      height: 22px;
      margin-right: 5px;
    }
    .button {
      padding: 33px 81px;
      background: rgba(230, 71, 36, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      vertical-align: middle;
      font-family: Noto Sans CJK KR;
      font-size: 25px;
      line-height: 22px;
      font-style: normal;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .owner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
    .dot {
      width: 10px;
      height: 10px;
    }
  }
  .top {
    display: flex;
    justify-content: space-evenly;
    .collectionImg {
      width: 150px;
      height: 146px;
      padding: 35px 30px 53px 0px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .buyQuantity {
        display: flex;
        margin-bottom: 7px;
      }
    }
  }
  .line {
    border-bottom: 1px dashed #9e9e9e;
    margin: 0px 30px;
  }
  
  .text__content {
    width: 80%;
    max-width: 670px;
    margin: auto;
    padding-top: 35px;

    font-size: 25px;

    .text__header {
      font-weight: bold;
      margin-bottom: 25px;
    }
    .text__line {
      margin-bottom: 25px;
    }
  }
  .rightContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .complete {
      width: 120px;
      height: 39px;
      background-color: #c4c4c4;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .confirmDepositCode {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 900;
    cursor: pointer;
    margin: 80px 0;

    text-decoration: none;

  }
`;

const NoBalanceWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;

.banner {
  width: 165px;
  height: 65px;
  margin: 150px auto 50px auto;
}

.title {
  font-size: 26px;
  line-height: 40px;
  text-align: center;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 78px;
}

.button-wrapper {
  width: 63%;
  max-width: 453.5px;
  .button {
    background: rgba(145, 145, 145, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 33px 81px;
    text-align: center;
    font-weight: 500;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: 0.375px;
    color: #FFFFFF;
  }
}
`

const FooterWrapper = styled.div`
background: #525252;
height: 90px;
display: flex;
justify-content: flex-end;
align-items: center;
padding: 0 25px;

.label {
  font-weight: 500;
font-size: 24px;
line-height: 49px;
letter-spacing: -1px;
color: rgba(255, 255, 255, 0.9);
margin-right: 13px;
}
.phone {
  font-size: 26px;
line-height: 38px;
color: #FFFFFF;
}
`

const NoBalance = () => {
  return <NoBalanceWrapper>
    <img src="/artb.png" alt="no-balance" className="banner" />
    <div className="title">아직 구매한 가을축제 NFT가 없습니다.</div>
    <div className="button-wrapper">
      <div className="button">구매하러 가기</div>
    </div>
  </NoBalanceWrapper>
}

const Footer = () => {
  return <FooterWrapper>
    <p className="label">고객센터 </p>
    <p className="phone"> 02-6953-2364</p>
  </FooterWrapper>
}

function MyNFT({ }) {
  const [transterState, setTransferState] = useState(false); //입금상태에 따라 전송완료 혹은 입금확인중
  const [balanceAmount, setBalanceAmount] = useState("0")


  const [web3, setWeb3] = useRecoilState(web3State);
  const [web3_R] = useRecoilState(web3ReaderState);
  const [account, setAccount] = useRecoilState(accountState);
  const [provider, setProvider] = useRecoilState(providerState);


  const ARTB_COLLECTION_INFO = require("../../lib/contracts/ArtbCollection.json");

  const ARTB_COLLECTION_ABI = ARTB_COLLECTION_INFO.abi;
  const ARTB_COLLECTION_ADDRESS = ARTB_COLLECTION_INFO.networks[1].address;

  const loadAmount = async () => {

    const COLLECTION_INSTANCE = createContractInstance(
      web3_R.mainnet,
      ARTB_COLLECTION_ADDRESS,
      ARTB_COLLECTION_ABI
    );

    const balance = await COLLECTION_INSTANCE.methods.balanceOf(account, "0").call()

    setBalanceAmount(balance)

  }

  useEffect(() => {
    if (account) {
      loadAmount();
    }
  }, [account]);

  const WalletProvider = useMemo(
    () =>
      new WalletWeb3Controller(),
    []
  );

  const handleOpenWallet = async () => {
    if (account) {
      alert("지갑이 연결됐습니다.");
    } else {
      const { account: accountResponse, network: neworkResponse } =
        await WalletProvider.connect();
      setWeb3(WalletProvider.web3);
      setProvider(WalletProvider.provider);
      if (Boolean(accountResponse)) setAccount(accountResponse);
    }
  }
  return (
    <Container className="Container">
      <Contents>
        {/* <Link to={{
          pathname: "/",

        }}>

          <div className="back">
            {"< 이전 페이지로 돌아가기"}
          </div>
        </Link> */}
        <div className="hello">
          <img className="unionImg" src="/Union.png" />
          <div className="Text_Style_35">회원님, 안녕하세요!</div>
        </div>
        <div className="buttonWrapper">
          <div className="button" onClick={handleOpenWallet}><img className="icon" src="/detail_pay.png" />내 메타마스크 지갑열기</div>
        </div>

        {
          balanceAmount == "0" ? <NoBalance /> : <div>data</div>
        }
      </Contents>
      <Footer />
    </Container>
  );
}


export default MyNFT;

{/* <div className="owner">
          <img className="dot" src="/dot.png" />
          <div className="Text_Style_36">회원님의 소유권</div>
        </div> */}
// {balanceAmount == "0" ?
//           <div className="top Text_Style_36" style={{ marginTop: "25px", opacity: "50%" }}>보유 중인 NFT가 없습니다.</div>
//           :
//           <div className="top">
//             <img className="collectionImg" src="/collection1.png" />
//             <div className="info">
//               <div className="Text_Style_18" style={{ marginBottom: "8px" }}>
//                 남관
//               </div>

//               <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
//                 가을축제
//               </div>
//               <div className="buyQuantity">
//                 <div className="Text_Style_20"> 구매 갯수 </div>
//                 {/* <div className="Text_Style_21" style={{ marginLeft: "15px" }}>{`${balanceAmount} NFT`}</div> */}
//                 <div className="Text_Style_21" style={{ marginLeft: "15px" }}>{`${balanceAmount} NFT`}</div>

//               </div>
//             </div>
//             {/* <div className="rightContainer"> */}
//             {/* <div className="complete">
//               <div className="Text_Style_20">전송완료</div>
//             </div> */}
//             {/* <div className="Text_Style_34">120,000</div> */}
//             {/* </div> */}
//           </div>
//         }
//         <div className="line"></div>
//         <div className="text__content">
//           <p className="text__header">Q. 대금 이체(결제) 완료했는데 구매내역이 안보여요</p>
//           <p className="text__line">먼저 영업일 기준 1일 이내 담당자가 대금 이체 결과를 확인합니다. </p>
//           <p className="text__line">확인 된 이후 실제 NFT가 전송되기 시작하며 이더리움 네트워크 상황에 따라 24시간 정도 추가 소요가 될 수 있습니다. </p>
//           <p className="text__line">약 2일 정도 후 다시 확인해보시기 바라며, NFT 전송이 완료되면 따로 문자(SMS)도 전송 드리겠습니다.</p>
//         </div>
//         {/* <div className="top">
//           <img className="collectionImg" src="/collection1.png" />
//           <div className="info">
//             <div className="Text_Style_18" style={{ marginBottom: "8px" }}>
//               작가명
//             </div>
//             <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
//               작품명 작품명 작품명
//             </div>
//             <div className="buyQuantity">
//               <div className="Text_Style_20"> 구매 갯수 </div>
//               <div className="Text_Style_21">4</div>
//             </div>
//           </div>
//           <div className="rightContainer">
//             {/* <div className="complete">
//               <div className="Text_Style_20">입금확인중</div>
//             </div> */}
//         {/* <div className="Text_Style_34">120,000</div>
//           </div>
//         </div> */}
//         {/* <div className="line"></div> */}
//         <Link to={{
//           pathname: "/mypage/check",
//         }}>
//           <div className="confirmDepositCode" onClick={() => { window.scrollTo(0, 0); }}>
//             <div>입금계좌 확인하기</div>
//           </div>
//         </Link>