

import styled from "styled-components";

export const Container = styled.div`
display: flex;
position: relative;
margin-top: 130px;
width: 100%;
background-color: #e2e2e2;
a {
  text-decoration: none;
}
`;
export const Contents = styled.div`
display: flex;
flex-direction: column;
gap: 20px 0;
width: 100%;
margin: 30px 25px;
background-color: white;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
export const Header = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 35px 70px 0 70px;
box-sizing: border-box;

.back {
  font-weight: 500;
  font-size: 20px;
  color: #eb4632;
  cursor: pointer;
}

.basic {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: flex;
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
    img {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
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

export const Info1 = styled.div`
display: flex;
flex-direction: column;
width: 530px;
margin: 0 70px;
padding-bottom: 50px;
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
export const Info2 = styled.div`
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
export const Info3 = styled.div`
display: flex;
flex-direction: column;
gap: 10px 0;
width: 530px;
margin: 0 70px;
padding: 28px 50px 43px 50px;
// height: 350px; // 임시
height: fit-content; // 임시
background-color: #f6f6f6;
box-sizing: border-box;
border-radius: 10px;
border: 1px solid rgba(226, 226, 226, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

.title {
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
  justify-content: flex-end;
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
    font-size: 18px;
    border: 0px;
    text-align: right;
    width: 330px;
    /* margin:auto;
    margin-left:0; */
  }
  input::-webkit-input-placeholder {
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.2);
    padding-right: 150px;
  }
  input:-ms-input-placeholder {
    font-weight: bold;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.2);
  }
  input::placeholder {
    font-weight: bold;
    font-size: 18px;
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

.buttons.notBuy {
  margin-bottom: 0;
  padding-top: 32px;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  margin-bottom: 32px;

  .coinButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    height: 70px;
    background: rgba(230, 71, 36, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    cursor: pointer;
    .icon {
      width: 26px;
      height: 24px;
    }
    .name {
      margin-left: 10px;
      font-weight: bold;
      font-size: 25px;
      color: #ffffff;
    }
  }

  .cashButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 430px;
    height: 70px;
    background: rgba(230, 71, 36, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    cursor: pointer;

    .name {
      margin-left: 10px;
      font-weight: bold;
      font-size: 25px;
      color: #ffffff;
    }
  }
}

.payButton {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
    /* cursor: pointer; */
  }
}
.checkbox {
  display: flex;

  .box {
    margin-right: 19px;
  }
  .arrow {
    margin: auto;
    margin-right: 15px;
    cursor: pointer;
  }
}
`;

export const Toggle1 = styled.div`
display: flex;
flex-direction: column;
margin: 0 70px;
width: 530px;
background-color: rgba(191, 191, 191, 0.2);
border-radius: 10px;
border: 1px solid rgba(226, 226, 226, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
margin-bottom: 30px;
.nftToggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  width: 530px;
  height: 80px; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;

  .title {
    font-weight: bold;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.8);
  }
}
`;

export const Info4 = styled.div`
display: flex;
flex-direction: column;
gap: 10px 0;
padding: 30px 50px;
width: 530px;
//   height: 500px; // 임시
height: fit-content;
box-sizing: border-box;

.info {
  .title {
    font-size: 20px;
    color: #c4c4c4;
  }

  .detail {
    margin-top: 5px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 40px;
  }
}
`;

export const Toggle2 = styled.div`
display: flex;
flex-direction: column;
margin: 0 70px 35px;
width: 530px;
background-color: rgba(191, 191, 191, 0.2);
border-radius: 10px;
border: 1px solid rgba(226, 226, 226, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

.historyToggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  width: 530px;
  height: 80px; // 임시
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;

  .title {
    font-weight: bold;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.8);
  }
}
`;