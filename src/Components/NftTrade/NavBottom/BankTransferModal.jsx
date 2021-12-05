import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 40px;
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
  }
`;

const BottomSection = styled.div`
  background: #e5e5e5;
  padding: 41px 60px 11px 60px;

  .term__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    img {
      width: 12px;
      height: 6px;
      transform: rotate(-90deg);
      cursor: pointer;
    }
  }
`;

const CheckBox = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 24px;
  line-height: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  a {
    color: #e64724;
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  & input:checked ~ .checkmark {
    background-color: #e64724;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

const BankTransferModal = () => {
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
          <div className="quantity">잔여 수량 : 123,123,123</div>
          <div className="calculator">
            <div className="calculator__button-group">
              <div className="decrease">-</div>
              <input type="number" />
              <div className="increase">+</div>
            </div>
            <div className="calculator__unit">
              <p className="unit__title">수량 1개</p>
              <p className="unit__count">100,000</p>
            </div>
          </div>
          <PriceAndFee>
            <div className="price__row">
              <p className="label">총 가격</p>
              <p className="count">100,000</p>
            </div>
            <div className="fee__row">
              <p className="label">
                이더리움 네트워크 수수료
                <span>3개 이상 구매시 무료</span>
              </p>
              <p className="count">15,000</p>
            </div>
          </PriceAndFee>
          <div className="result">
            <p className="label">총 결제 가격</p>
            <p className="count">₩ 115,000</p>
          </div>
        </BodySection>
      </ContentWrapper>
      <BottomSection>
        <div className="term__row">
          <CheckBox htmlFor="terms-and-conditions">
            Artb 이용약관 <a href="#">(필수)</a>
            <input type="checkbox" id="terms-and-conditions" />
            <span className="checkmark"></span>
          </CheckBox>
          <img src="/detail_toggleClose.png" alt="arrow-right" />
        </div>
        <div className="term__row">
          <CheckBox htmlFor="infor-collection-and-term-of-use">
            Artb 개인정보 수집 및 이용약관 <a href="#">(필수)</a>
            <input type="checkbox" id="infor-collection-and-term-of-use" />
            <span className="checkmark"></span>
          </CheckBox>
          <img src="/detail_toggleClose.png" alt="arrow-right" />
        </div>
      </BottomSection>
    </>
  );
};

export default BankTransferModal;
