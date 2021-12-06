import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  web3State,
  providerState,
  accountState,
  networkState,
  requireNetworkState,
} from "../../../store/web3";
import { Button } from "../Popup/walletConnect";
import BankTransferModal from "./BankTransferModal";

import WalletWeb3Controller from "../../../utilities/wallet";
import { useHistory } from "react-router";

const NavBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: calc(100vw);
  max-width: 720px;

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

const Header = styled.div`
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

const WalletModalWrapper = styled.div`
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

const WalletModal = ({ connect }) => {
  return (
    <WalletModalWrapper>
      <p className="title">최초 구매시 “지갑연결"을 완료해야합니다</p>
      <p className="content">
        왜 메타마스크가 필요한가요? <br /> 메타마스크란 1천만명 이상이 사용하는
        글로벌 암호화폐 지갑이며, 프라이빗 키(Private Key)를 생성해주기 때문에
        여러분의 NFT를 가장 안전하게 보관할 수 있는 방법입니다. <br />
        아래 버튼을 통해 메타마스크를 연결해주세요.
      </p>

      <div className="bottom">
        <Button className="Text_Style_15" onClick={connect}>
          지갑 연결
        </Button>
        <p>연결에 어려움이 있으시면.</p>
        <p>
          <a href="#">여기를 클릭</a> 해 사용법을 참고해주세요
        </p>
      </div>
    </WalletModalWrapper>
  );
};

function NavBottom({ onClickLeft, onClickRight }) {
  const [account, setAccount] = useRecoilState(accountState);
  const [web3, setWeb3] = useRecoilState(web3State);
  const [provider, setProvider] = useRecoilState(providerState);
  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openBankTransferModal, setOpenBankTransferModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();

  const WalletProvider = useMemo(
    () =>
      new WalletWeb3Controller({
        callbackConnect: (res) => {
          setOpenWalletModal(false);
        },
        callbackDisconnect: () => {
          console.log("wallet disconnected");
        },
      }),
    []
  );

  const handleOpenWalletModal = () => {
    setIsDisabled(true);
    setOpenWalletModal(true);
  };

  const handleCloseWalletModal = () => {
    setIsDisabled(false);
    setOpenWalletModal(false);
  };

  const handleConnectWallet = async () => {
    if (account) {
      alert("지갑이 연결됐습니다.");
      handleCloseWalletModal();
    } else {
      const { account: accountResponse, network: neworkResponse } =
        await WalletProvider.connect();
      setWeb3(WalletProvider.web3);
      setProvider(WalletProvider.provider);
      if (Boolean(accountResponse)) setAccount(accountResponse);
      handleCloseWalletModal();
    }
  };

  const handleOpenBankTransferModal = () => {
    setIsDisabled(true);
    setOpenBankTransferModal(true);
  };

  const handleCloseBankTransferModal = () => {
    setIsDisabled(false);
    setOpenBankTransferModal(false);
  };

  const handleValidateTerm = (checked) => {
    if (Boolean(checked.term1 && checked.term2)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <NavBottomWrapper disabled={isDisabled}>
      {Boolean(openWalletModal || openBankTransferModal) && (
        <div className="shadow" />
      )}
      {Boolean(openWalletModal || openBankTransferModal) && (
        <Header>
          <img
            className="arrow"
            src="/detail_toggleClose.png"
            alt="header-toggle"
            onClick={() => {
              handleCloseWalletModal();
              handleCloseBankTransferModal();
            }}
          />
          {openWalletModal && <WalletModal connect={handleConnectWallet} />}
          {openBankTransferModal && (
            <BankTransferModal handleValidateTerm={handleValidateTerm} />
          )}
        </Header>
      )}
      <div className="button-group">
        <div
          className="payButton left"
          onClick={() => {
            if (Boolean(openBankTransferModal)) {
              return history.push("/accountTransfer");
            }
            handleOpenBankTransferModal();
            onClickLeft();
          }}
        >
          <div className="name">계좌이체 구매</div>
        </div>
        <div
          className="payButton right"
          onClick={() => {
            if (Boolean(openBankTransferModal)) {
              return alert("카드 결제 기능은 준비 중 입니다.");
            }
            handleOpenWalletModal();
            onClickRight();
          }}
        >
          <div className="name">카드결제 구매</div>
        </div>
      </div>
    </NavBottomWrapper>
  );
}

export default NavBottom;
