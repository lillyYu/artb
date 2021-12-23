import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 130px;
  padding-bottom: 110px;
  width: 100%;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 20px 0;
  padding-bottom: 20px;

  background-color: #ffffff;
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
      margin: 49px 0;
      gap: 0 20px;
      .status {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 5px;
        font-size: 20px;
        color: #eb4632;
        background: rgba(235, 70, 50, 0.2);
        border-radius: 5px;
      }
      .model {
        font-size: 24px;
        display: flex;
        align-items: center;
        color: #646464;
      }
    }
    .function {
      display: flex;
      gap: 0 20px;
      position: relative;

      #copy__tooltip {
        opacity: 0;
        text-align: center;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: -25px;
        left: -10px;
      }
      @keyframes disappear {
        20% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      img {
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
    }
  }

  .title {
    font-weight: bold;
    font-size: 34px;
    color: rgba(0, 0, 0, 0.9);
  }
  .artist {
    margin-top: 15px;
    font-size: 24px;
    color: #646464;
  }
`;

export const Info1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
  background-color: #ffffff;

  .period {
    display: flex;
    gap: 0 22px;
    padding: 30px 70px;
    justify-content: flext-start;
    align-items: center;
    .title {
      color: rgba(0, 0, 0, 0.8);
      font-size: 24px;
      letter-spacing: -1px;
      font-weight: bold;
    }
    .time {
      color: #646464;
      font-size: 28px;
      line-height: 28px;
      letter-spacing: -0.7px;
    }
  }

  .product {
    width: 100%;
    img {
      width: 100%;
    }
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
    margin: 0 70px;
    margin-top: 10px;

    .left {
      display: flex;
      font-size: 26px;
      .seller {
        letter-spacing: -0.7px;
        color: rgba(0, 0, 0, 0.8);
      }
      .name {
        margin-left: 10px;
        color: #eb4632;
        letter-spacing: -1px;
        font-weight: bold;
      }
    }

    .right {
      display: flex;
      font-size: 25px;
      letter-spacing: -1px;
      text-align: right;
      .rest {
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
      }
      .total {
        font-weight: 500;
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
`;
export const Info2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  background-color: #ffffff;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 6px;
    background: #e64724;
    left: calc(50% - 25px);
    right: auto;
  }

  .wrapper {
    padding: 20px;
    border: 1px solid rgba(226, 226, 226, 0.7);
    box-sizing: border-box;
    border-radius: 15px;
  }

  .top {
    letter-spacing: -0.7px;
    .deadline {
      font-size: 25px;
      color: #000000;
    }
    .time {
      margin-top: 15px;
      font-size: 25px;
      color: #646464;
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 27px;
    gap: 20px;

    .section {
      display: flex;
      align-items: center;
      gap: 5px;
      .digit {
        font-weight: bold;
        font-size: 32px;
        line-height: 32px;
        color: rgba(230, 71, 36, 0.8);
      }
      .unit {
        font-size: 24px;
        line-height: 24px;
        color: rgba(100, 100, 100, 0.8);
      }
    }
  }
`;
export const Info3 = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  .title {
    margin-top: 1.25rem;
    font-size: 1.625rem;
    line-height: 2.375rem;
    text-align: center;
    letter-spacing: -0.7px;
    color: #646464;
  }

  .image__wrapper {
    margin-top: 3.125rem;
    padding-bottom: 9.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    background: #ffffff;

    .first__section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 1rem;
      padding: 1rem;
      border-radius: 10px;
      background: #ededed;
      width: 338px;
      box-shadow: 0px 20px 20px rgb(44 44 44 / 20%);

      .logo {
        width: 18px;
        height: 11.08px;
        margin-bottom: 6px;
      }
      .main__image {
        width: 228.53px;
        height: 146.81px;
        box-shadow: 0px 8px 30px rgba(44, 44, 44, 0.5);
      }

      .bottom {
        margin-top: 7.21px;
        color: #5d5d5d;
        font-size: 10.45px;
      }
    }

    .second__section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2.5rem;
      padding: 1rem 1rem 0.75rem 1rem;
      border-radius: 10px;
      background: #ededed;
      width: 338px;
      box-shadow: 0px 20px 20px rgb(44 44 44 / 20%);

      .logo {
        margin-bottom: 8px;
        width: 28px;
        height: 14.08px;
      }
      .header__title {
        color: #222222;
        font-size: 0.75rem;
        font-weight: bold;
      }
      .sub__title {
        color: #616161;
        font-size: 0.6rem;
      }

      .stamp__wrapper {
        margin-top: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .header {
          color: #616161;
          font-size: 0.5rem;
          margin-bottom: 4px;
        }
        .signature {
        }
        .sub__title {
          margin-top: 0.3rem;
        }
        .stamp {
          width: 40px;
          height: 40px;
        }
      }

      .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.125rem;

        font-size: 0.5rem;
        font-weight: bold;
        .left {
          width: 50%;
          padding-right: 10px;
          display: flex;
          justify-content: flex-end;
          p {
            background: #f9f9f9;
            width: fit-content;
            padding: 8.25px 12px;
            border-radius: 20px;
            margin: 0;
          }
        }
        .right {
          width: 50%;
          padding-left: 10px;
          letter-spacing: -1px;
        }
      }
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 50px;
      height: 6px;
      background: #e64724;
      left: calc(50% - 25px);
      right: auto;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    margin-bottom: 40px;

    .coinButton {
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

  .bottom__section {
    margin-top: 1.125rem;
    margin-bottom: 2rem;

    .header__title {
      font-size: 26px;
      line-height: 38px;
      text-align: center;
      letter-spacing: -0.7px;

      color: #646464;
    }

    .sub__title {
      margin-top: 2.1875rem;
      margin-bottom: 1.25rem;
      font-size: 1.5rem;
      line-height: 1.875rem;

      text-align: center;
      letter-spacing: -0.7px;

      color: #454545;
    }

    .wrapper__image {
      display: flex;
      align-items: center;
      justify-content: center;

      .image {
        border: 20px solid #ededed;
        border-radius: 5px;
        box-shadow: -10px 10px 20px rgb(44 44 44 / 50%), inset 3px -3px #fefefe;
        width: 504px;
        height: 335px;
        background-image: url("/detail_product.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
`;

export const Toggle1 = styled.div`
  display: flex;
  flex-direction: column;
  background: #f6f6f6;

  .nftToggle {
    display: flex;
    align-items: center;
    padding: 0 70px;
    justify-content: space-between;
    height: 80px;

    cursor: pointer;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: rgba(226, 226, 226, 0.7);

    .title {
      font-weight: normal;
      font-size: 26px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const Info4 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  gap: 10px 0;
  padding: 30px 80px;
  width: 100%;
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

  .historyToggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 70px;
    height: 80px;
    background-color: #f6f6f6;
    cursor: pointer;

    cursor: pointer;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: rgba(226, 226, 226, 0.7);

    .title {
      font-weight: normal;
      font-size: 26px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
