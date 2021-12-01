import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useRecoilState } from "recoil";
//store
import { accountState } from "../../../store/web3";

function AccountTransferPopup({ setTransferPopup, amount, totalValue, address }) {
  const [account] = useRecoilState(accountState);

  const [name, setName] = useState("");
  const [postAddress, setPostAddress] = useState(" ");
  const [detailAddress1, setDetailAddress1] = useState("");
  const [detailAddress2, setDetailAddress2] = useState("");
  const [middleNum, setMiddleNum] = useState("");
  const [lastNum, setLastNum] = useState("");

  const postInfo = async () => {
    let data = {
      amount: amount,
      totalPrice: totalValue,
      details: "남관-가을축제",
      name: name,
      address: `${postAddress} ${detailAddress1} ${detailAddress2}`,
      wallet: account,
      phone: `010${middleNum}${lastNum}`,
    };
    let result = await axios.post(
      "https://script.google.com/macros/s/AKfycbwaZg_d8KRwx2aoOCbzpvCYwK-SGheCJv0xQWeOHP__cCFsa3cb03PA-VN32O1DngO0-g/exec",
      JSON.stringify(data)
    );
    console.log(totalValue);
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
              {address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682" ? "남관" : "-"}
            </div>
            <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
              {address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682" ? "가을축제" : "-"}
            </div>
            <div className="buyQuantity">
              <div className="Text_Style_20">{`신청 수량 ${amount} NFT`}</div>
              {/* <div className="Text_Style_21">{amount}</div> */}
            </div>
          </div>
        </div>

        <div style={{ borderBottom: "1px dashed #9E9E9E" }}></div>
        <div className="price">
          <div className="Text_Style_22">총 결제 가격</div>
          <div className="Text_Style_23">{`₩ ${totalValue.toLocaleString()}`}</div>
        </div>
        <div className="Text_Style_24">
          <br />
          NFT를 구매하신 모든분께 드리는
          <br />
          사은품 수령을 위해 주소를 적어 주세요
        </div>

        <div className="userInfo" >
          <div className="recipient">
            <div className="Text_Style_22">수령인*</div>
            <div>

              <input
                className="nameInput"
                placeholder="수령인 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="address">
            <div className="Text_Style_22" >배송지*</div>
            <div style={{ display: "flex", gap: "0 8px", width: "430px", justifyContent: "space-between" }}>
              <input
                className="addressInput"
                placeholder="우편번호"
                value={postAddress}
                onChange={(e) => setPostAddress(e.target.value)}
              />
              <div className="searchCode" style={{ cursor: "not-allowed" }}>
                <div className="Text_Style_25" >우편번호 검색</div>
              </div>
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
            <div className="Text_Style_22">연락처*</div>
            <div style={{ display: "flex", gap: "0 15px", width: "430px", justifyContent: "space-between" }}>
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
          </div>
        </div>
        {(name && postAddress && detailAddress1 && detailAddress2 && middleNum && lastNum) ?
          <Link to={{
            pathname: "/payment/coin",
            state: {
              totalValue: totalValue,
              amount: amount,
            }
          }}>
            <div className="button"
              onClick={() => {
                postInfo()
                window.scrollTo(0, 0);
              }}>
              <div className="Text_Style_26">결제하기</div>
            </div>
          </Link>
          : <div className="button"
            onClick={() => { alert("필수 항목을 전부 입력해주시기 바랍니다.") }
            }>
            <div className="Text_Style_26">결제하기</div>
          </div>
        }
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
.userInfo{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  input {
    margin:0px;
    box-sizing:border-box;
    width: 430px;
  }

  .recipient {
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
    align-items: center;
    gap:20px;

    .nameInput {
      /* width: 400px; */
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
    gap: 0 20px;
    .addressInput {
      /* width:48%; */
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
      width: 100%;
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
    gap: 20px;
    /* width:400px; */
    .detailInput {
      /* width: 100%; */
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
    margin-bottom: 60px;
    gap:20px;

    .contactInput {
      width:30%;
      height: 72px;
      font-size: 24px;
      padding-left: 27px;
    }
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
