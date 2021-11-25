import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useRecoilState } from "recoil";
//store
import { accountState } from "../../../store/web3";

function AccountTransferPopup({ setTransferPopup, amount, totalValue, address }) {
  const [account] = useRecoilState(accountState);

  const [name, setName] = useState("");
  const [postAddress, setPostAddress] = useState("");
  const [detailAddress1, setDetailAddress1] = useState("");
  const [detailAddress2, setDetailAddress2] = useState("");
  const [middleNum, setMiddleNum] = useState("");
  const [lastNum, setLastNum] = useState("");

  const postInfo = async () => {
    let data = {
      amount: "4",
      details: "남관-가을축제",
      name: name,
      address: `${postAddress} ${detailAddress1} ${detailAddress2}`,
      wallet: account,
      phone: `010${middleNum}${lastNum}`,
    };
    let result = await axios.post(
      "https://script.google.com/macros/s/AKfycbzNSxnPTUqdnQuOYEa5PCqKJdTXjW03TFmsnXZwtZvKbtua9qkJMACXDILVP-g8X4yvtw/exec",
      JSON.stringify(data)
    );
    console.log(result);
  };

  return (
    <Container className="Container">
      <Contents>
        <div className="back" onClick={() => setTransferPopup(false)}>
          {"< 이전 페이지로 돌아가기"}
        </div>
        <div className="Text_Style_17">주문확인</div>
        <div className="top">
          <img className="collectionImg" src="/collection1.png" />
          <div className="info">
            <div className="Text_Style_18" style={{ marginBottom: "8px" }}>
              {address === "0x3b97D5c76311A57C56F8aDF043089823B8bb763a" ? "남관" : "-"}
            </div>
            <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
              {address === "0x3b97D5c76311A57C56F8aDF043089823B8bb763a" ? "가을축제" : "-"}
            </div>
            <div className="buyQuantity">
              <div className="Text_Style_20">{`구매 갯수 ${amount}`}</div>
              {/* <div className="Text_Style_21">{amount}</div> */}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: "1px dashed #9E9E9E" }}></div>
        <div className="price">
          <div className="Text_Style_22">총 결제 가격</div>
          <div className="Text_Style_23">₩ {totalValue.toLocaleString()}</div>
        </div>
        <div className="Text_Style_24">
          <br />
          NFT를 구매하신 모든분께 드리는
          <br />
          사은품 수령을 위해 주소를 적어 주세요
        </div>

        <div className="recipient">
          <div className="Text_Style_22">수령인*</div>
          <input
            className="nameInput"
            placeholder="수령인 이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="address">
          <div className="Text_Style_22">배송지명*</div>
          <input
            className="addressInput"
            placeholder="우편번호"
            value={postAddress}
            onChange={(e) => setPostAddress(e.target.value)}
          />
          <div className="searchCode">
            <div className="Text_Style_25">우편번호 검색</div>
          </div>
        </div>
        <div className="detail">
          <input
            className="detailInput"
            placeholder="상세 주소 1"
            value={detailAddress1}
            onChange={(e) => setDetailAddress1(e.target.value)}
          />
          <input
            className="detailInput"
            placeholder="상세 주소 2"
            value={detailAddress2}
            onChange={(e) => setDetailAddress2(e.target.value)}
          />
        </div>
        <div className="contact">
          <div className="Text_Style_22">연락처 1*</div>
          <input className="contactInput" />
          <input
            className="contactInput"
            value={middleNum}
            onChange={(e) => setMiddleNum(e.target.value)}
          />
          <input
            className="contactInput"
            value={lastNum}
            onChange={(e) => setLastNum(e.target.value)}
          />
        </div>
        <div className="button" onClick={postInfo}>
          <HashLink to={"/payment/coin"}>
            <div className="Text_Style_26">결제하기</div>
          </HashLink>
        </div>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 720px;
  height: 96%;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;
`;
const Contents = styled.div`
  padding: 35px 59px;
  box-sizing: border-box;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 672px;
  left: 26px;
  top: 30px;
  height: inherit;
  border-radius: 10px;

  .back {
    font-weight: 500;
    font-size: 20px;
    color: #eb4632;
    cursor: pointer;
    margin-bottom: 50px;
  }

  .top {
    display: flex;
    .info {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .buyQuantity {
        display: flex;
        margin-bottom: 7px;
      }
    }
    .collectionImg {
      width: 150px;
      height: 146px;
      padding: 35px 30px 53px 0px;
    }
  }
  .price {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 14px 14px 76px 0px;
    gap: 33px;
  }

  .recipient {
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
    align-items: center;

    .nameInput {
      width: 425px;
      height: 72px;
      font-size: 24px;
      padding-left: 27px;
    }
    input::-webkit-input-placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    input:-ms-input-placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    input::placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
  }
  .address {
    display: flex;
    align-items: center;
    margin: 15px 0px;
    gap: 8px;
    .addressInput {
      width: 195px;
      height: 72px;
      font-size: 24px;
      padding-left: 27px;
    }
    input::-webkit-input-placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    input:-ms-input-placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    input::placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    .searchCode {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 220px;
      height: 74px;
      background-color: #e64724;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    .detailInput {
      width: 425px;
      height: 72px;
      font-size: 24px;
      padding-left: 27px;
    }
    input::-webkit-input-placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    input:-ms-input-placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
    input::placeholder {
      font-weight: bold;
      font-size: 24px;
      color: #cccccccc;
    }
  }
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 0px 60px 0px;
    .contactInput {
      width: 110px;
      height: 72px;
      font-size: 24px;
      padding-left: 27px;
    }
  }
  .button {
    display: flex;
    height: 113px;
    background: #e64724;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    align-items: center;
    justify-content: center;
    width: 672px;
    margin: 0px 0px 0px -59px;
    cursor: pointer;
  }
`;

export default AccountTransferPopup;
