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

const DepositConfirmNotificationWrapper = styled.div`
margin: 18px 42px;
background: #F7F7F7;
border-radius: 5px;
padding: 22px 30px;

.notification__title {
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -1px;
  color: rgba(0, 0, 0, 0.8);
}

.notification__content {
  margin-top: 22px;
  display: flex;
  align-items: flex-end;
  
  line-height: 40px;
  letter-spacing: -1px;
  color: rgba(0, 0, 0, 0.8);

  .bank__number {
    font-size: 32px;
    font-weight: bold;
  }
  .bank__name {
    font-size: 24px;
  }

  .button__copy {
    font-weight: 500;
    font-size: 26px;
    line-height: 40px;
    letter-spacing: -1px;
    color: rgba(230, 71, 36, 0.8);
    cursor: pointer;
  }
}
`

const DepositConfirmNotification = () => {
  return <DepositConfirmNotificationWrapper>
    <div className="notification__title">입금 계좌 :</div>
    <div className="notification__content">
      <div className="bank__infor">
        <p className="bank__number">301-0295-5774-33</p>
        <p className="bank__name">농협은행 예금주 : 아트비글로벌(주)</p>
      </div>
      <div className="button__copy" >계좌복사하기</div>
    </div>
  </DepositConfirmNotificationWrapper>
}

const OrderWrapper = styled.div`
display: flex;
padding: 33px 0;
margin: 0 56px;

cursor: pointer;
border-bottom:  1px dashed #9E9E9E;

.logo {
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
}

.content {
  margin-left: 13px;
  padding: 10px 0;

  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;

  .content__author {
    font-size: 24px;
    letter-spacing: -0.7px;
    color: #646464;
    margin-bottom: 8px;
  }

  .content__title {
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -1px;
    text-align: left;
    color: rgba(0, 0, 0, 0.9);
  }

  .content__bottom {
    flex-grow: 1;
    display:flex;
    align-items: flex-end;
    justify-content: space-between;

    .content__count {
      font-size: 24px;
      letter-spacing: -0.7px;
      color: rgba(0, 0, 0, 0.8);

      span {
        font-weight: bold;
      }
    }

    .content__status {
      padding: 5px 10px;
      margin-right: 12px;

      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;

      color: #E64724;
      background: rgba(230, 71, 36, 0.1);
      border-radius: 5px;
    }

    .content__payment {
      font-weight: bold;
      font-size: 26px;
      text-align: right;
      letter-spacing: -0.7px;
      color: rgba(230, 71, 36, 0.8);
    }
  }
}
`
const Order = () => {
  return <OrderWrapper>
    <div className="logo" style={{ backgroundImage: `url(${"/detail_product.png"})` }} />
    <div className="content">
      <p className="content__author" >작가명</p>
      <p className="content__title">작품명 작품명 작품명</p>
      <div className="content__bottom">
        <div className="content__count">구매 갯수 <span>4</span> </div>
        <div><span className="content__status">입금확인중</span>
          <span className="content__payment">120,000</span></div>
      </div>
    </div>
  </OrderWrapper>
}

const OrderHistoryWrapper = styled.div`
.title {
  font-weight: 500;
  font-size: 32px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 50px;
}

.footer {
  padding: 27px 72px;
  

  .high-line {
    font-weight: 600;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.6px;
    color: #1D1D1D;
  }

  .content {
    margin-top: 21px;
    font-size: 22px;
    line-height: 36px;
    letter-spacing: -1.6px;
    color: rgba(64, 64, 64, 0.8);
  }
}
`;
const OrderHistory = () => {
  return <OrderHistoryWrapper>
    <div className="title">주문내역</div>
    {
      [1, 2].map(item => <Order key={item} />)
    }
    {
      true && <DepositConfirmNotification />
    }
    <div className="footer">
      <p className="high-line">NFT 저작권 실물 카드 및 액자는 12월15일 부터 순차 배송 됩니다.</p>
      <p className="content">
        NFT 저작권이 실제 메타마스크에 전송되기 까지 <br />
        이더리움 네트워크 상황에 따라 1~3일 정도 소요될 수 있습니다.<br />
        NFT 소유권 카드 또는 필름 액자는 <br />
        제작 상황에따라 3일 ~ 10일 소요될 수 있습니다.<br />
      </p>
    </div>
  </OrderHistoryWrapper>
}

const NoBalance = () => {
  return <NoBalanceWrapper>
    <img src="/artb.png" alt="no-balance" className="banner" />
    <div className="title">아직 구매한 가을축제 NFT가 없습니다.</div>
    <div className="button-wrapper">
      <Link to="/">
        <div className="button">구매하러 가기</div>
      </Link>
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

    // setBalanceAmount(balance)
    setBalanceAmount('1') // fake api
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
        <div className="hello">
          <img className="unionImg" src="/Union.png" />
          <div className="Text_Style_35">회원님, 안녕하세요!</div>
        </div>
        <div className="buttonWrapper">
          <div className="button" onClick={handleOpenWallet}><img className="icon" src="/detail_pay.png" />내 메타마스크 지갑열기</div>
        </div>

        {
          balanceAmount == "0" ? <NoBalance /> : <OrderHistory />
        }
      </Contents>
      <Footer />
    </Container>
  );
}


export default MyNFT;
