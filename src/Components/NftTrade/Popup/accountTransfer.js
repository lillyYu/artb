import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useRecoilState } from "recoil";
//store
import { accountState } from "../../../store/web3";
//daum postcode
import DaumPostcode from "react-daum-postcode";
import { ntfInforState } from "../../../store/ntf";
import { amountBuyState } from "../../../store/wallet";
import { formatNumber } from "../../../utilities/helper"

function AccountTransferPopup() {
  const [account] = useRecoilState(accountState);
  const [nftInfo, _] = useRecoilState(ntfInforState);
  const [amount, setAmount] = useRecoilState(amountBuyState);
  const [name, setName] = useState("");
  const [postAddress, setPostAddress] = useState(" ");
  const [detailAddress1, setDetailAddress1] = useState("");
  const [detailAddress2, setDetailAddress2] = useState("");
  const [middleNum, setMiddleNum] = useState("");
  const [lastNum, setLastNum] = useState("");
  const [postcodePopup, setPostcodePopup] = useState(false);

  const totalValue = amount <= 2 ? 45000 * amount + 15000 : 45000 * amount;

  const postInfo = async () => {
    let data = {
      amount: amount,
      totalPrice: totalValue,
      details: "남관-가을축제",
      name: name,
      address: `${postAddress} ${detailAddress1} ${detailAddress2}`,
      wallet: account,
      phone: `+8210${middleNum}${lastNum}`,
    };
    let result = await axios.post(
      "https://script.google.com/macros/s/AKfycbwwRZwwiFYlbYU_93XO8wcRNp4i60g-Rj6A6sLRAxcckjKRJDFudLJFQTA7WKuua5p7yw/exec",
      JSON.stringify(data)
    );
    console.log(totalValue);
  };

  const postcodeModalStyle = {
    position: "absolute",
    top: "100px",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "100",
    border: "1px solid #000000",
    overflow: "hidden",
  };
  const postcodeHandleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setPostAddress(data.zonecode);
    setDetailAddress1(fullAddress);
    setPostcodePopup(false);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <Container className="Container">
      <Contents>
        <div className="Text_Style_17">주문확인</div>
        <div className="top">
          <img className="collectionImg" src="/collection1.png" />
          <div className="info">
            <div className="Text_Style_18" style={{ marginBottom: "8px" }}>
              {nftInfo[0].address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
                ? "남관"
                : "-"}
            </div>
            <div className="Text_Style_19" style={{ marginBottom: "23px" }}>
              {nftInfo[0].address === "0x31B8696aa951771565EEcC9afBEB6F7eD87e2682"
                ? "가을축제"
                : "-"}
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
          <div className="Text_Style_23">{`₩ ${formatNumber(totalValue)}`}</div>
        </div>
        <div className="Text_Style_24">
          <br />
          NFT를 구매하신 모든분께 드리는
          <br />
          사은품 수령을 위해 주소를 적어 주세요
        </div>

        <div className="userInfo">
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
            <div className="Text_Style_22">배송지*</div>
            <div
              style={{
                display: "flex",
                gap: "0 8px",
                width: "430px",
                justifyContent: "space-between",
              }}
            >
              <input
                className="addressInput"
                placeholder="우편번호"
                value={postAddress}
                onChange={(e) => setPostAddress(e.target.value)}
                readOnly
              />
              <div className="searchCode">
                <div
                  className="Text_Style_25"
                  onClick={() => setPostcodePopup(!postcodePopup)}
                >
                  우편번호 검색
                </div>
              </div>
            </div>
          </div>
          <div className="detail">
            <input
              className="detailInput"
              placeholder="상세 주소 1"
              value={detailAddress1}
              onChange={(e) => setDetailAddress1(e.target.value)}
              readOnly
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

            <div
              style={{
                display: "flex",
                gap: "0 15px",
                width: "430px",
                justifyContent: "space-between",
              }}
            >
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
        {name &&
          postAddress &&
          detailAddress1 &&
          detailAddress2 &&
          middleNum &&
          lastNum ? (
          <Link
            to={{
              pathname: "/payment/coin",
              state: {
                totalValue: totalValue,
                amount: amount,
              },
            }}
          >
            <div
              className="button"
              onClick={() => {
                postInfo();
                window.scrollTo(0, 0);
              }}
            >
              <div className="Text_Style_26">결제하기</div>
            </div>
          </Link>
        ) : (
          <div
            className="button"
            onClick={() => {
              alert("필수 항목을 전부 입력해주시기 바랍니다.");
            }}
          >
            <div className="Text_Style_26">결제하기</div>
          </div>
        )}
      </Contents>

      {postcodePopup ? (
        <div>
          <div
            className="back"
            onClick={() => setPostcodePopup(false)}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              background: "white",
              height: "80px",
              padding: "20px 0 0 10px",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            {"< 닫기"}
          </div>
          <DaumPostcode
            onComplete={postcodeHandleComplete}
            autoClose
            style={postcodeModalStyle}
          />
        </div>
      ) : null}
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
  box-sizing: border-box;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: inherit;
  padding: 150px 63px;

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

  .userInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    input {
      margin: 0px;
      box-sizing: border-box;
      width: 430px;
      border: solid 1px gray;
    }

    .recipient {
      display: flex;
      margin-top: 70px;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

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
        width: 100%;
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
        height: 72px;
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
      width: 430px;
      .detailInput {
        width: 100%;
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
      gap: 20px;

      .contactInput {
        width: 30%;
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
    width: 100vw;
    max-width: 720px;
    margin-left: -63px;
    cursor: pointer;
  }
`;

export default AccountTransferPopup;
