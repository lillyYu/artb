import React from "react";
import styled from "styled-components";

const NavBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: calc(100vw - 12.5rem);
  max-width: calc(720px - 12.5rem);
  padding: 2.875rem 6.25rem;

  background: #e64724;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .payButton {
    width: 100%;

    .name {
      font-weight: bold;
      font-size: 1.75rem;
      line-height: 1.25rem;
      letter-spacing: 0.375px;
      color: #ffffff;
      text-align: center;
    }
  }

  .hr {
    width: 38px;
    height: 3px;

    background: rgba(255, 255, 255, 0.8);
    transform: rotate(90deg);
  }
`;

function NavBottom({ account, connect, setTermsModal, termsModal }) {
  return (
    <NavBottomWrapper>
      <div
        className="payButton"
        onClick={() => {
          if (account) {
            alert("지갑이 연결됐습니다.");
          } else {
            // connect();
            console.log("account: ", account);
          }
        }}
        style={
          account
            ? { cursor: "not-allowed", opacity: "30%" }
            : { cursor: "pointer" }
        }
      >
        {/* <img src="/detail_pay.png" style={{ width: "26px", height: "24px" }} /> */}
        <div className="name">
          {account
            ? account.slice(0, 8) + "..." + account.slice(-6)
            : "계좌이체 구매"}
        </div>
      </div>
      <div className="hr" />
      <div
        className="payButton"
        onClick={() => {
          console.log("asdf");
          // setTermsModal(!termsModal);
        }}
        style={{ cursor: "pointer" }}
      >
        {/* <img src="/detail_pay.png" style={{ width: "26px", height: "24px" }} /> */}
        <div className="name">카드결제 구매</div>
      </div>
    </NavBottomWrapper>
  );
}

export default NavBottom;
