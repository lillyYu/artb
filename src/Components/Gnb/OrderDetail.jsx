import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { WelcomeContent } from "./myNFT";

import { web3State, accountState, providerState } from "../../store/web3";
import { web3ReaderState } from "../../store/read-web3";
import { balanceAmountState } from "../../store/wallet";
import { createContractInstance } from "../../lib/Station";
import { ARTB_COLLECTION_ABI, ARTB_COLLECTION_ADDRESS } from "./myNFT";

import { Container, Contents } from "./myNFT.styles";

const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.7px;
  color: rgba(0, 0, 0, 0.8);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: calc(50% - 5px);
    top: -25px;
    background: rgba(230, 71, 36, 0.8);
    border-radius: 100%;
  }
`;

const OrderFrame = styled.div`
  background: #ededed;
  border-radius: 20px;
  margin: 60px 114px;
  padding-top: 43px;
  padding-bottom: 167px;

  .order-detail__logo {
    margin-bottom: 31px;
    img {
      display: block;
      margin: auto;
      width: 105px;
      height: 42px;
    }
  }

  .order-detail__body {
    img {
      width: 100%;
    }

    .order-detail__label {
      margin-top: 21px;

      font-size: 24px;
      line-height: 36px;
      text-align: center;
      letter-spacing: -1px;
      color: #5d5d5d;
    }

    .order-detail__purchase {
      margin-top: 31px;

      font-size: 26px;
      line-height: 36px;
      text-align: center;
      letter-spacing: -1px;
      color: #2e2e2e;
    }
  }
`;

function OrderDetail(props) {
  const [balanceAmount, setBalanceAmount] = useRecoilState(balanceAmountState);
  const [web3_R] = useRecoilState(web3ReaderState);
  const [account, setAccount] = useRecoilState(accountState);
  const [provider, setProvider] = useRecoilState(providerState);
  const [listOrder, setListOrder] = useState([]);

  const loadAmount = async () => {
    const COLLECTION_INSTANCE = createContractInstance(
      web3_R.mainnet,
      ARTB_COLLECTION_ADDRESS,
      ARTB_COLLECTION_ABI
    );

    const balance = await COLLECTION_INSTANCE.methods
      .balanceOf(account, "0")
      .call();
    setBalanceAmount(balance);
  };

  useEffect(() => {
    if (account) {
      loadAmount();
    }
  }, [account]);
  return (
    <Container className="Container">
      <Contents>
        <WelcomeContent />
        <Title>주문내역</Title>
        <OrderFrame>
          <div className="order-detail__logo">
            <img src="/Artb__only__text.svg" alt="artb-logo" />
          </div>
          <div className="order-detail__body">
            <img src="/detail_product.png" alt="artb-detail-image" />
            <div className="order-detail__label">
              남관 · 가을축제 · 1984 <br />
              200 x 300 · Oil Painting
            </div>
            <div className="order-detail__purchase">
              구매 갯수 {balanceAmount}
            </div>
          </div>
        </OrderFrame>
      </Contents>
    </Container>
  );
}

export default OrderDetail;
