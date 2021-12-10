import React, { useMemo, useState, useEffect } from "react";

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
import { openWalletPopupState } from "../../../store/wallet";

import WalletWeb3Controller from "../../../utilities/wallet";
import { useHistory } from "react-router";
import {
  NavBottomWrapper,
  Header,
  WalletModalWrapper,
  FirstModalWrapper,
} from "./index.styles";

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

const FirstModal = ({ openWalletPopup, openBankTransfer }) => {
  return (
    <FirstModalWrapper>
      <div className="first-modal__header">
        NFT 수령을 위해, <br />
        먼저 “메타마스크 지갑 연결"이 필요합니다.
      </div>
      <div className="first-modal__body">
        <div className="body__high-line">
          메타마스크 앱(App)이 설치 되어 있습니까?
        </div>
        <div className="body__line">{`왜 메타마스크가 필요한가요? 메타마스크 소개 보기 >`}</div>
      </div>
      <div className="first-modal__bottom">
        <div className="button--outline" onClick={openWalletPopup}>
          아니요
        </div>
        <div className="button--contained" onClick={openBankTransfer}>
          네, 설치 되어 있습니다.
        </div>
      </div>
    </FirstModalWrapper>
  );
};

function NavBottom({ onClickLeft, onClickRight }) {
  const [account, setAccount] = useRecoilState(accountState);
  const [web3, setWeb3] = useRecoilState(web3State);
  const [provider, setProvider] = useRecoilState(providerState);
  const [network, setNetwork] = useRecoilState(networkState);

  const [openWalletModal, setOpenWalletModal] = useState(false);
  const [openBankTransferModal, setOpenBankTransferModal] = useState(false);
  const [openFirstModal, setFirstModal] = useState(false);
  const [isOpenWalletPopup, setIsOpenWalletPopup] =
    useRecoilState(openWalletPopupState);
  const [isHiddenNav, setIsHiddenNav] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!isOpenWalletPopup) setIsHiddenNav(false);
  }, [isOpenWalletPopup]);

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
      setNetwork(neworkResponse);
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

  const handleLeftBtn = () => {
    if (Boolean(openBankTransferModal)) {
      return history.push("/accountTransfer");
    }
    handleOpenBankTransferModal();
    onClickLeft();
  };

  const handleRightBtn = () => {
    if (Boolean(openBankTransferModal)) {
      return alert("카드 결제 기능은 준비 중 입니다.");
    }
    handleOpenWalletModal();
    onClickRight();
  };

  const handleOpenFirstModal = () => {
    setIsDisabled(true);
    setFirstModal(true);
  };

  const handleCloseFirstModal = () => {
    setFirstModal(false);
  };
  return (
    <NavBottomWrapper hidden={isHiddenNav} disabled={isDisabled}>
      {Boolean(openWalletModal || openBankTransferModal || openFirstModal) && (
        <div className="shadow" />
      )}
      {Boolean(openWalletModal || openBankTransferModal || openFirstModal) && (
        <Header>
          <img
            className="arrow"
            src="/detail_toggleClose.png"
            alt="header-toggle"
            onClick={() => {
              handleCloseFirstModal();
              handleCloseWalletModal();
              handleCloseBankTransferModal();
            }}
          />
          {openFirstModal && (
            <FirstModal
              openWalletPopup={() => {
                setIsOpenWalletPopup(true);
                setIsDisabled(false);
                setFirstModal(false);
                setIsHiddenNav(true);
              }}
              openBankTransfer={() => {
                handleCloseFirstModal();
                handleOpenBankTransferModal();
              }}
            />
          )}
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
            const isNotFirstStep = Boolean(
              openWalletModal || openBankTransferModal
            );
            if (!isNotFirstStep) {
              handleOpenFirstModal();
            } else {
              handleLeftBtn();
            }
          }}
        >
          <div className="name">계좌이체 구매</div>
        </div>
        <div
          className="payButton right"
          onClick={() => {
            const isNotFirstStep = Boolean(
              openWalletModal || openBankTransferModal
            );
            if (!isNotFirstStep) {
              handleOpenFirstModal();
            } else {
              handleRightBtn();
            }
          }}
        >
          <div className="name">카드결제 구매</div>
        </div>
      </div>
    </NavBottomWrapper>
  );
}

export default NavBottom;
