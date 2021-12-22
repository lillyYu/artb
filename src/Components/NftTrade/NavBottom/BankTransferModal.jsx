import styled from "styled-components";

import { useRecoilState } from "recoil";
import { useEffect, useMemo, useState } from "react";

import { formatNumber } from "../../../utilities/helper";
import { useHistory } from "react-router";
import { ntfInforState } from "../../../store/ntf";
import { amountBuyState } from "../../../store/wallet";

const ContentWrapper = styled.div`
  padding: 40px;
  padding-bottom: 0;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;

  .left {
    letter-spacing: -0.7px;

    .title {
      font-size: 24px;
      line-height: 40px;
    }

    .count {
      font-size: 26px;
      line-height: 26px;
      font-weight: bold;
    }
  }
  .right {
    display: flex;
    align-items: center;

    img {
      width: 27px;
      height: 27px;
    }

    .deadline {
      margin-left: 12px;
      font-size: 24px;
      line-height: 24px;
      text-align: right;
      color: rgba(100, 100, 100, 0.8);
    }
  }
`;

const BodySection = styled.div`
  .quantity {
    margin-bottom: 53px;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: rgba(100, 100, 100, 0.6);
  }

  .calculator {
    padding: 0 60px 30px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 50px;

    border-bottom-width: 1px;
    border-style: dashed;
  }

  .calculator__button-group {
    position: relative;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #5e5e5e;
    background: #ffffff;
    padding: 0 81px;

    input {
      text-align: center;
      width: 148px;
      height: 84px;
      outline: none;
      border: none;
      padding: 0 10px;

      font-weight: 500;
      font-size: 28px;
      line-height: 26px;

      letter-spacing: -1px;
    }
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    .decrease,
    .increase {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 81px;
      height: 100%;
      font-size: 25px;
      text-align: center;
      cursor: pointer;
    }

    .decrease {
      left: 0;
      border-right: 1px solid #5e5e5e;
    }

    .increase {
      top: 0;
      right: 0;
      border-left: 1px solid #5e5e5e;
    }
  }

  .calculator__unit {
    text-align: right;
    .unit__title {
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -0.7px;
      color: rgba(0, 0, 0, 0.8);
    }

    .unit__count {
      font-weight: bold;
      font-size: 28px;
      line-height: 32px;
      text-align: right;
      letter-spacing: -0.7px;
      color: #000000;
    }
  }

  .result {
    padding: 30px;
    display: flex;
    justify-content: flex-end;

    text-align: right;
    .label {
      flex-grow: 1;
      font-size: 24px;
      line-height: 40px;
      letter-spacing: -0.7px;

      color: rgba(0, 0, 0, 0.8);
    }
    .count {
      min-width: 30%;
      font-weight: bold;
      font-size: 36px;
      line-height: 32px;
      letter-spacing: -0.7px;

      color: #e64724;
    }
  }
`;

const PriceAndFee = styled.div`
  padding: 35px;
  border-bottom-width: 1px;
  border-style: dashed;

  .price__row,
  .fee__row {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
    line-height: 40px;
    text-align: right;
    letter-spacing: -0.7px;
    color: rgba(0, 0, 0, 0.8);

    .label {
      flex-grow: 1;

      span {
        display: block;
        font-size: 20px;
        line-height: 16px;
      }
    }
    .count {
      min-width: 20%;
      margin-left: 10px;
      font-weight: bold;
    }
    .line-through {
      text-decoration: line-through;
    }
  }
`;

const BottomSection = styled.div`
  background: #e5e5e5;
  padding: 41px 60px 12px 60px;

  .term__row {
  }
`;

const CheckBox = styled.div`
  position: relative;
  padding-left: 65px;
  cursor: pointer;
  font-size: 24px;
  line-height: 30px;
  height: 30px;
  margin-bottom: 30px;

  .title {
    display: flex;
    align-items: center;

    span {
      flex-grow: 1;
    }

    img {
      width: 12px;
      height: 6px;
      transform: rotate(-90deg);
      cursor: pointer;
    }
  }

  .high-light {
    color: #e64724;
  }

  & label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 20px;
    position: absolute;
    top: 0px;
    width: 28px;
  }

  & label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }

  & input[type="checkbox"] {
    display: none;
  }

  & input[type="checkbox"]:checked + label {
    background-color: #000000;
    border-color: #000000;
  }

  & input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;

const BankTransferModal = ({ handleValidateTerm }) => {
  const [nftInfo, _] = useRecoilState(ntfInforState);
  const [count, setCount] = useRecoilState(amountBuyState);
  const [checked, setChecked] = useState({
    term1: false,
    term2: false,
  });
  const history = useHistory();

  useEffect(() => {
    handleValidateTerm(checked);
  }, [checked.term1, checked.term2]);

  const ntfInventory = useMemo(
    () =>
      nftInfo[0].inventory != 0
        ? formatNumber(nftInfo[0].inventory - 72000)
        : 0,
    [nftInfo]
  );

  const handleDecrease = () => {
    setCount((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  const handleIncrease = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleChange = (event) => {
    event.stopPropagation();
    setChecked((prev) => ({
      ...prev,
      [event.target.name]: !prev[event.target.name],
    }));
  };
  return (
    <>
      <ContentWrapper>
        <HeaderSection>
          <div className="left">
            <p className="title">개당 저작권 가격</p>{" "}
            <p className="count">₩ 45,000</p>
          </div>
          <div className="right">
            <img src="/detail_clock.png" alt="clock" />
            <p className="deadline">3일 남음</p>
          </div>
        </HeaderSection>

        <BodySection>
          <div className="quantity">잔여 수량 : {ntfInventory}</div>
          <div className="calculator">
            <div className="calculator__button-group">
              <div className="decrease" onClick={handleDecrease}>
                -
              </div>
              <input type="number" value={count} onChange={(event) => {}} />
              <div className="increase" onClick={handleIncrease}>
                +
              </div>
            </div>
            <div className="calculator__unit">
              <p className="unit__title">수량 1개</p>
              <p className="unit__count">{formatNumber(45000 * count)}</p>
            </div>
          </div>
          <PriceAndFee>
            <div className="price__row">
              <p className="label">총 가격</p>
              <p className="count">{formatNumber(45000 * count)}</p>
            </div>
            <div className="fee__row">
              <p className="label">
                이더리움 네트워크 수수료
                <span>3개 이상 구매시 무료</span>
              </p>
              <p className={count <= 2 ? "count" : "count line-through"}>
                15,000
              </p>
            </div>
          </PriceAndFee>
          <div className="result">
            <p className="label">총 결제 가격</p>
            <p className="count">
              ₩{" "}
              {formatNumber(count <= 2 ? 45000 * count + 15000 : 45000 * count)}
            </p>
          </div>
        </BodySection>
      </ContentWrapper>
      <BottomSection>
        <CheckBox>
          <div
            className="title"
            onClick={() => {
              history.push("/term1");
            }}
          >
            <span>
              Artb 이용약관 <span className="high-light">(필수)</span>
            </span>
            <img src="/detail_toggleClose.png" alt="arrow-right" />
          </div>
          <input
            name="term1"
            checked={checked.term1}
            type="checkbox"
            id="terms-and-conditions"
            onChange={handleChange}
          />
          <label htmlFor="terms-and-conditions"></label>
        </CheckBox>

        <CheckBox>
          <div
            className="title"
            onClick={() => {
              history.push("/term2");
            }}
          >
            <span>
              Artb 개인정보 수집 및 이용약관{" "}
              <span className="high-light">(필수)</span>
            </span>
            <img src="/detail_toggleClose.png" alt="arrow-right" />
          </div>
          <input
            name="term2"
            type="checkbox"
            checked={checked.term2}
            onChange={handleChange}
            id="infor-collection-and-term-of-use"
          />
          <label htmlFor="infor-collection-and-term-of-use"></label>
        </CheckBox>
      </BottomSection>
    </>
  );
};

export default BankTransferModal;
