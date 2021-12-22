import styled from "styled-components";

export const NavBottomWrapper = styled.div`
  display: ${(props) => (props.hidden ? "hidden" : "flex")};
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: calc(100vw);
  max-width: 720px;
  z-index: 2;

  .shadow {
    width: 100vw;
    height: 100vh;
    max-width: 720px;
    background: #e5e5e5;
    opacity: 0.6;
  }

  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.disabled ? "#A4A4A4" : "#e64724")};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

    .payButton {
      width: 50%;
      padding: 2.875rem 0;
      position: relative;

      .name {
        font-weight: bold;
        font-size: 1.75rem;
        line-height: 1.25rem;
        letter-spacing: 0.375px;
        color: #ffffff;
        text-align: center;
      }
    }

    .payButton.left {
      background: ${(props) => (props.disabled ? "#A4A4A4" : "inherit")};
      cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
      pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
      &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 26px;
        background: rgba(255, 255, 255, 0.8);
        top: calc(50% - 13px);
        right: 0;
      }
    }

    .payButton.right {
      background: ${(props) => (props.disabled ? "#A4A4A4" : "inherit")};
      cursor: ${(props) => (props.disabled ? "auto" : "pointer")};
      pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
      &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 26px;
        background: rgba(255, 255, 255, 0.8);
        top: calc(50% - 13px);
        left: 0;
      }
    }
  }
`;

export const Header = styled.div`
  position: relative;
  background: #ffffff;

  img.arrow {
    width: 18px;
    height: 9px;

    position: absolute;
    top: -45px;
    left: calc(50% - 77px);
    padding: 21px 68px;

    background-color: #ffffff;
    border-radius: 20px 20px 0 0;
    cursor: pointer;
  }
`;

export const WalletModalWrapper = styled.div`
  padding: 80px 40px 40px 40px;

  p {
    margin-bottom: 25px;
  }

  .title {
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    line-height: 26px;
    letter-spacing: -0.7px;
    color: rgba(0, 0, 0, 0.8);
  }

  .content {
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -0.7px;
    color: rgba(0, 0, 0, 0.8);
  }

  .bottom {
    width: 80%;
    margin: 75px auto 0 auto;
    text-align: center;

    p {
      margin-top: 25px;
      color: rgba(100, 100, 100, 0.8);
    }

    a {
      text-decoration: underline;
      color: rgba(100, 100, 100, 0.8);
    }
  }
`;


export const FirstModalWrapper = styled.div`
  padding: 64px 40px;

  .first-modal__header {
    margin-bottom: 60px;
    font-weight: bold;
    font-size: 27px;
    line-height: 33px;
    letter-spacing: -0.7px;
    color: rgba(0, 0, 0, 0.8);
  }

  .first-modal__body {
    margin-bottom: 150px;
    .body__high-line {
      font-weight: bold;
      font-size: 30px;
      line-height: 40px;
      letter-spacing: -0.7px;
      color: rgba(0, 0, 0, 0.8);
    }
    .body__line {
      font-size: 21px;
      line-height: 40px;
      color: rgba(100, 100, 100, 0.8);
    }
  }

  .first-modal__bottom {
    display: grid;
    grid-template-columns: calc(50% - 20px) calc(50% - 20px);
    grid-column-gap: 40px;
    margin-bottom: 120px;

    font-size: 25px;
    line-height: 20px;

    .button--outline {
      padding: 33px 42px;
      border: 2px solid #4b4b4b;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.8);
      cursor: pointer;

      text-align: center;
      letter-spacing: 0.375px;
      color: #434343;
    }

    .button--contained {
      padding: 33px 16px;
      background: rgba(230, 71, 36, 0.8);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      cursor: pointer;

      text-align: center;
      letter-spacing: 0.375px;
      color: #ffffff;
    }
  }
`;
