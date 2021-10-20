/* Components */
// import Language from "../../lib/Language";

/* Libraries */
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { HashLink } from "react-router-hash-link";
import { useRecoilState } from "recoil";

function NftTrade() {
  return (
    <Container>
      <Contents>
        <Header>
          <div className="back">목록으로 돌아가기</div>
          <div className="basic">
            <div className="info">
              <div className="status">판매중</div>
              <div className="model">0x5CD9972</div>
            </div>
            <div className="function">
              <img
                src="/detail_share.png"
                style={{ width: "35px", height: "35px" }}
              />
              <img
                src="/detail_refresh.png"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          </div>
          <div className="title">작품명 작품명 작품명</div>
          <div className="artist">작가명</div>
        </Header>
        <Info1>
          <div className="period">
            <div className="title">판매기간</div>
            <div className="time">2021.09.26 12:00 ~ 2021.12.30 24:00</div>
          </div>
          <div className="product">
            <img
              src="/detail_product.png"
              style={{ width: "530px", height: "530px" }}
            />
          </div>
          <div className="info1">
            <div className="left">
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
            <div className="right">잔여 수량/총 발행량</div>
          </div>
          <div className="info2">
            <div className="left">
              <div className="seller">판매자</div>
              <div className="name">artB</div>
            </div>
            <div className="right">
              <div className="rest">80,000EA/</div>
              <div className="total">100,000EA</div>
            </div>
          </div>
        </Info1>
        <Info2>
          <div className="top">
            <div className="deadline">판매 마감일</div>
            <div className="time">2021.12.30 24:00</div>
          </div>
          <Countdown
            date={new Date(2021, 11, 30, 24).getTime()}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="bottom">
                <div className="day">
                  <div className="digit">{zeroPad(days)}</div>
                  <div className="unit">일</div>
                </div>
                <div className="time">
                  <div className="digit">{zeroPad(hours)}</div>
                  <div className="unit">시간</div>
                </div>
                <div className="minute">
                  <div className="digit">{zeroPad(minutes)}</div>
                  <div className="unit">분</div>
                </div>
                <div className="second">
                  <div className="digit">{zeroPad(seconds)}</div>
                  <div className="unit">초</div>
                </div>
              </div>
            )}
          />
        </Info2>
        <Info3>
          <div className="title">개당 저작권 가격</div>
          <div className="info">
            <div className="price">
              <div className="won">￦ 100,000</div>
              <div className="coin">≈ 33.3 ABC</div>
            </div>
            <div className="restTime">
              <img
                src="/detail_clock.png"
                style={{ width: "25px", height: "25px" }}
              />
              <div className="time">3일 남음</div>
            </div>
          </div>
          <div className="inputBox">
            <input className="input" type="number" placeholder="000,000" />
            <div className="unit">EA</div>
          </div>
          <div className="restAmount">
            <div className="left">잔여수량:</div>
            <div className="right">123,123,123</div>
          </div>
          <div className="payButton">
            <img
              src="/detail_pay.png"
              style={{ width: "26px", height: "24px" }}
            />
            <div className="name">구매하기</div>
          </div>
        </Info3>
        <Info4></Info4>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 130px;
  display: flex;
  flex-direction: column;
  width: 720px;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 670px;
  margin: 30px 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  padding: 0 70px;
  padding-top: 35px;
  box-sizing: border-box;

  .back {
    font-weight: 500;
    font-size: 20px;
    color: #eb4632;
  }

  .basic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info {
      display: flex;
      align-items: center;
      margin: 25px 0;
      gap: 0 20px;
      .status {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55px;
        height: 30px;
        font-size: 13px;
        color: #eb4632;
        background-color: gray;
        background: rgba(235, 70, 50, 0.2);
        border-radius: 5px;
      }
      .model {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .function {
      display: flex;
      gap: 0 20px;
    }
  }

  .title {
    font-weight: bold;
    font-size: 25px;
  }
  .artist {
    margin-top: 5px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Info1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  margin: 0 70px;
  height: 720px; // 임시
  background-color: #f6f6f6;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .period {
    display: flex;
    gap: 0 10px;
    padding: 15px 0;
    justify-content: center;
    font-size: 20px;
    .title {
      color: rgba(0, 0, 0, 0.8);
    }
    .time {
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .product {
  }

  .info1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
    margin-top: 30px;

    .left {
      display: flex;
      gap: 0 15px;

      .like {
        display: flex;
        align-items: center;
        gap: 0 10px;

        .amount {
          margin-right: 10px;
          font-size: 20px;
          color: rgba(100, 100, 100, 0.8);
        }
      }
      .look {
        display: flex;
        align-items: center;
        gap: 0 10px;

        .amount {
          margin-right: 10px;
          font-size: 20px;
          color: rgba(100, 100, 100, 0.8);
        }
      }
    }

    .right {
      font-size: 20px;
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .info2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 25px;
    margin-top: 10px;

    .left {
      display: flex;
      font-size: 25px;
      .seller {
        color: rgba(0, 0, 0, 0.8);
      }
      .name {
        margin-left: 10px;
        color: #eb4632;
      }
    }

    .right {
      display: flex;
      font-size: 25px;
      font-weight: bold;
      .rest {
        color: rgba(0, 0, 0, 0.8);
      }
      .total {
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
`;
const Info2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px 0;
  width: 530px;
  margin: 0 70px;
  padding: 0 50px;
  height: 170px; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .top {
    display: flex;
    justify-content: space-between;

    .deadline {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
    }
    .time {
      font-size: 20px;
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    .day {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .minute {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
    .second {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;

      .digit {
        font-size: 30px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
`;
const Info3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 530px;
  margin: 0 70px;
  padding: 0 50px;
  height: 350px; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .title {
    margin-top: 40px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      display: flex;
      align-items: center;

      .won {
        font-size: 30px;
        color: rgba(0, 0, 0, 0.8);
      }
      .coin {
        margin-left: 10px;
        font-size: 20px;
        color: #e64724;
      }
    }
    .restTime {
      display: flex;
      align-items: flex-end;
      .time {
        margin-left: 10px;
        font-size: 20px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }

  .inputBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 430px;
    height: 70px;
    padding: 0 25px;
    background-color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .input {
      font-weight: bold;
      font-size: 30px;
      color: rgba(0, 0, 0, 0.2);
      border: 0px;
    }
    input::-webkit-input-placeholder {
      font-weight: bold;
      font-size: 30pt;
      color: rgba(0, 0, 0, 0.2);
    }
    input:-ms-input-placeholder {
      font-weight: bold;
      font-size: 30pt;
      color: rgba(0, 0, 0, 0.2);
    }
    input::placeholder {
      font-weight: bold;
      font-size: 30pt;
      color: rgba(0, 0, 0, 0.2);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .unit {
      font-size: 20px;
      color: #000000;
    }
  }

  .restAmount {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: rgba(100, 100, 100, 0.6);

    .right {
      margin-left: 10px;
    }
  }

  .payButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    height: 70px;
    background: rgba(230, 71, 36, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    .name {
      margin-left: 10px;
      font-weight: bold;
      font-size: 25px;
      color: #ffffff;
    }
  }
`;
const Info4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  margin: 0 70px;
  height: 1900px; // 임시
  background-color: #f6f6f6;
  border-radius: 10px;
  border: 1px solid rgba(226, 226, 226, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export default NftTrade;
