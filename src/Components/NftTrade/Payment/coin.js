import Gnb from "../../../Components/Gnb";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function Coin({ }) {

  return (
    <Container className="Container">
      <Gnb />
      <Contents>
        <img className="collectionImg" src="/collection1.png" />
        <div className="Text_Style_27" style={{ padding: "0px 55px" }}>
          <br />NFT 저작권 구매신청이
          <br />완료되었습니다.
        </div>
        <div className="Text_Style_28" style={{ padding: "0px 55px" }}>
          <br />신청하신 수량에 맞는 원화를 입금하시면,
          <br />NFT저작권이 24시간 이내로
          <br />구매자 지갑으로 전송됩니다.
        </div>
        <div className="line"></div>
        <div className="accountInfo">

          <div className="Text_Style_29">입금 계좌 :</div>
          <div className="accountNum">
            <div className="Text_Style_30">301-0295-5774-33</div>
            <div className="Text_Style_31">계좌복사하기</div>
          </div>
          <div className="Text_Style_29">농협은행 예금주 : 아트비글로벌(주)</div>
        </div>
        <div className="line"></div>
        <div className="depositInfo">
          <div className="deposit">
            <div className="Text_Style_32">개당 가격</div>
            <div className="Text_Style_32">신청 수량</div>
            <div className="Text_Style_32">총 가격</div>
            <div className="Text_Style_32">이더리움 네트워크 수수료</div>
          </div>
          <div className="amount">
            <div className="Text_Style_33">45,000</div>
            <div className="Text_Style_33">4</div>
            <div className="Text_Style_34" >180,000</div>
            <div className="Text_Style_34">15,000</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="price">
          <div className="Text_Style_22">총 결제 가격</div>
          <div className="Text_Style_23">₩ 100,000</div>
        </div>
        <HashLink to={"/payment/coin"}>
          <div className="buttonWrapper">
            <div className="button">메인으로 가기</div>
          </div>
        </HashLink>
      </Contents>
    </Container>
  );
}
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
  /* gap: 20px 0; */
  width: 100%;
  margin: 30px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

 .collectionImg{
   width:265px;
   height:261px;
   margin:auto;
   margin-top:50px;
 }

.line{
  border-bottom: 1px dashed #9E9E9E;
  margin:40px 30px;
}
.accountInfo{
padding:0px 55px;
  .accountNum{
    display:flex;
    justify-content: space-between;
  }
}
.depositInfo{
  display:flex;
  gap: 45px;
  margin-right: 55px;
  justify-content: flex-end;
  .deposit{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }
  .amount{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }
}
        .price{
            display:flex;
            justify-content: flex-end;
             align-items: flex-start;
             margin:14px 14px 76px 0px;
             gap:33px;
             margin-right: 55px;
        }
        .buttonWrapper{
            display:flex;
            justify-content:center;
            margin-bottom:42px;
          .button{
              display:flex;
              width: 443px;
              height:86px;
              background: rgba(230, 71, 36, 0.8);
              box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
              border-radius: 10px;
              align-items: center;
              justify-content: center;
              font-family: Noto Sans CJK KR;
              font-size: 25px;
              font-style: normal;
              font-weight: 400;
              color:#FFFFFF;
          }
        }
`;

export default Coin;