import React, { useState, useEffect, useMemo } from "react";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";
import { useHistory, Link, useLocation } from 'react-router-dom';
import {
  web3State,
  accountState,
  providerState
} from "../../store/web3";
import { balanceAmountState } from "../../store/wallet"

import { web3ReaderState } from "../../store/read-web3";

import { createContractInstance } from "../../lib/Station";
import WalletWeb3Controller from "../../utilities/wallet";
import { formatNumber } from "../../utilities/helper"
import copy from 'copy-text-to-clipboard';

import { Container, Contents, NoBalanceWrapper, FooterWrapper, BankDepositInformationWrapper, OrderWrapper, OrderHistoryWrapper, GuideWrapper } from './myNFT.styles';

const BankDepositInformation = () => {
  return <BankDepositInformationWrapper>
    <div className="bank-deposit-infor__title">입금 계좌 :</div>
    <div className="bank-deposit-infor__content">
      <div className="bank__infor">
        <p className="bank__number">317-0024-1598-21</p>
        <p className="bank__name">농협은행 예금주 : 아트비글로벌(주)</p>
      </div>
      <div className="button__copy" onClick={() => {
        const copyText = "317-0024-1598-21";
        copy(copyText);
        // if (!navigator.clipboard) {
        //   console.log('this browser not supported');
        // } else {
        //   const copyElm = document.getElementById("bank-deposit-infor__copy-tooltip");
        //   copyElm.style.visibility = "visible";
        //   copyElm.style.animationName = "disappear";
        //   copyElm.style.animationDuration = "2.5s";
        //   setTimeout(function () {
        //     copyElm.style.animationName = "none";
        //   }, 2400);
        //   navigator.clipboard.writeText(copyText);
        // }
      }} >계좌복사하기
        {/* <span id="bank-deposit-infor__copy-tooltip">Copied!</span> */}
      </div>
    </div>
  </BankDepositInformationWrapper>
}

const initialOrder = {
  id: '1006-id',
  imageUrl: "/detail_product.png",
  author: "작가명",
  titleOfWork: "작품명 작품명 작품명",
  purchaseNumber: 3,
  status: '입금확인중',
}
const Order = ({
  id,
  imageUrl,
  author,
  titleOfWork,
  purchaseNumber,
  status,
} = initialOrder) => {
  const location = useLocation();
  const history = useHistory();

  return <OrderWrapper onClick={() => {
    history.push(`${location.pathname}/orders/${id}`);
  }}>
    <div className="logo" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="content">
      <p className="content__author" >{author}</p>
      <p className="content__title">{titleOfWork}</p>
      <div className="content__bottom">
        <div className="content__count">구매 갯수 <span>{purchaseNumber}</span> </div>
        {/* <div>
          <span className="content__status">{status}</span>
          <span className="content__payment">
            {formatNumber(purchaseNumber <= 2 ? 45000 * purchaseNumber + 15000 : 45000 * purchaseNumber)}
          </span>
        </div> */}
      </div>
    </div>
  </OrderWrapper>
}


const OrderHistory = ({ data }) => {
  return <OrderHistoryWrapper>
    <div className="title">주문내역</div>
    {
      data.map(item => <Order
        key={item}
        {...item}
      />)
    }
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



const Guide = () => {
  return <GuideWrapper>
    <p className="high-line">Q. 결제를 완료 했는데도 주문 내역이 없어요</p>
    <p className="content">
      A. NFT가 전송되기까지 이더리움 네트워크 상황에따라
      1-2일 소요될 수 있습니다. 실제 전송이 완료되면 문자(SMS)
      를 통해 안내드리겠습니다. 만약 2-3일 이상 NFT 수령을
      못받으신 경우 고객센터(02-6953-2364)로 연락 부탁드립니다.
    </p>
  </GuideWrapper>
}

export const WelcomeContent = () => {
  return <>
    <div className="hello">
      <img className="unionImg" src="/Union.png" />
      <div className="Text_Style_35">회원님, 안녕하세요!</div>
    </div>
    <div className="buttonWrapper">
      <div className="button"
      //  onClick={handleOpenWallet}
      ><img className="icon" src="/detail_pay.png" />내 메타마스크 지갑열기</div>
    </div>
  </>
}


const ARTB_COLLECTION_INFO = require("../../lib/contracts/ArtbCollection.json");

export const ARTB_COLLECTION_ABI = ARTB_COLLECTION_INFO.abi;
export const ARTB_COLLECTION_ADDRESS = ARTB_COLLECTION_INFO.networks[1].address;

function MyNFT({ }) {
  const [transterState, setTransferState] = useState(false); //입금상태에 따라 전송완료 혹은 입금확인중

  const [web3, setWeb3] = useRecoilState(web3State);
  const [web3_R] = useRecoilState(web3ReaderState);
  const [account, setAccount] = useRecoilState(accountState);
  const [provider, setProvider] = useRecoilState(providerState);
  const [listOrder, setListOrder] = useState([]);
  const [balanceAmount, setBalanceAmount] = useRecoilState(balanceAmountState);


  const loadAmount = async () => {

    const COLLECTION_INSTANCE = createContractInstance(
      web3_R.mainnet,
      ARTB_COLLECTION_ADDRESS,
      ARTB_COLLECTION_ABI
    );

    const balance = await COLLECTION_INSTANCE.methods.balanceOf(account, "0").call()
    setBalanceAmount(balance);
    setListOrder([{
      ...initialOrder,
      purchaseNumber: balance // this is balance
    }]);
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

  // const handleOpenWallet = async () => {
  //   if (account) {
  //     alert("지갑이 연결됐습니다.");
  //   } else {
  //     const { account: accountResponse, network: neworkResponse } =
  //       await WalletProvider.connect();
  //     setWeb3(WalletProvider.web3);
  //     setProvider(WalletProvider.provider);
  //     if (Boolean(accountResponse)) setAccount(accountResponse);
  //   }
  // }
  return (
    <Container className="Container">
      <Contents>
        <WelcomeContent />
        {
          balanceAmount == 0 ? <NoBalance /> : <OrderHistory data={listOrder} />
        }
      </Contents>
      {
        balanceAmount == 0 && <Guide />
      }
      <BankDepositInformation />
      <Footer />
    </Container>
  );
}


export default MyNFT;
