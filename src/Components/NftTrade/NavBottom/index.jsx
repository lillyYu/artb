import React from "react";
import styled from "styled-components";

const NavBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: calc(100vw - 4.5rem);
  max-width: calc(720px - 4.5rem);
  padding: 2.875rem 2.25rem;

  background: #e64724;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  .payButton {
    width: 100%;
    cursor: pointer;

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

function NavBottom({ onClickLeft, onClickRight }) {
  return (
    <NavBottomWrapper>
      <div className="payButton" onClick={onClickLeft}>
        <div className="name">계좌이체 구매</div>
      </div>
      <div className="hr" />
      <div className="payButton" onClick={onClickRight}>
        <div className="name">카드결제 구매</div>
      </div>
    </NavBottomWrapper>
  );
}

export default NavBottom;
