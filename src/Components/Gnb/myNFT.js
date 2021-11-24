import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function MyNFT() {
  const [transterState, setTransferState] = useState(false); //입금상태에 따라 전송완료 혹은 입금확인중
  return (
    <Container className="Container">
      <Contents>
        <div className="hello">
          <img className="unionImg" src="/Union.png" />
          <div className="Text_Style_35">OOO님, 안녕하세요!</div>
        </div>
        <div className="buttonWrapper">
          <img className="icon" src="/buy_icon.png" />
          <div className="button">내 메타마스크 지갑열기</div>
        </div>
        <div className="owner">
          <img className="dot" src="/dot.png" />
          <div className="Text_Style_36">소유권</div>
        </div>

        <div className="top">
          <img className="collectionImg" src="/collection1.png" />
          <div className="info">
            <div className="Text_Style_18" style={{ marginBottom: "8px" }}>
              작가명
            </div>
            <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
              작품명 작품명 작품명
            </div>
            <div className="buyQuantity">
              <div className="Text_Style_20"> 구매 갯수 </div>
              <div className="Text_Style_21">4</div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="complete">
              <div className="Text_Style_20">전송완료</div>
            </div>
            <div className="Text_Style_34">120,000</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="top">
          <img className="collectionImg" src="/collection1.png" />
          <div className="info">
            <div className="Text_Style_18" style={{ marginBottom: "8px" }}>
              작가명
            </div>
            <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
              작품명 작품명 작품명
            </div>
            <div className="buyQuantity">
              <div className="Text_Style_20"> 구매 갯수 </div>
              <div className="Text_Style_21">4</div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="complete">
              <div className="Text_Style_20">입금확인중</div>
            </div>
            <div className="Text_Style_34">120,000</div>
          </div>
        </div>
        <div className="line"></div>
        <HashLink to={"/payment/coin"}>
          <div className="confirmDepositCode">
            <div>입금계좌 확인하러 가기</div>
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
  gap: 20px 0;
  width: 100%;
  margin: 30px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .hello {
    display: flex;
    justify-content: center;
    margin-top: 70px;
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
      width: 26px;
      height: 24px;
    }
    .button {
      display: flex;
      width: 443px;
      height: 86px;
      background: rgba(230, 71, 36, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      align-items: center;
      justify-content: center;
      font-family: Noto Sans CJK KR;
      font-size: 25px;
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
  }
`;
export default MyNFT;
