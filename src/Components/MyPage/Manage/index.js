import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import Line from "../../Common/line";
import { ABInput, ABLabel, ABCheckBox } from "../../Common/form";
import { TextButton, RectButton } from "../../Common/button";
import { PopupDialog } from "../../Common/popup";

import { popupState } from "../../../store/web2";

function Manage() {
  const [agree, setAgree] = useState(false);
  const history = useHistory();
  const [popup, setPopup] = useRecoilState(popupState);
  const [popupDialog, setPopupDialog] = useState({
    flag: false,
    mode: 0,
  });
  const myData = {
    name: "김아름",
    phone: "01012341234",
    post: "06192",
    addr1: "서울특별시 강남구 테헤란로64길 16-8",
    addr2: "금척빌딩 2층",
    wallet: "0x2131345645645654545",
    email: "paoijdpfjaopjf@naver.com",
    password: "potjpoejaopjdfpojapodjfpo"
  }
  const [manageInfo, setManageInfo] = useState(myData);

  const setAgreeCallback = (value) => {
    setAgree(value);
  }

  const changeWallet = (value) => {
    manageInfo.wallet = value;
  }

  const changeName = (value) => {
    manageInfo.name = value;
  }
  
  const changePhone = (value) => {
    manageInfo.phone = value;
  }
  
  const changePost = (value) => {
    manageInfo.post = value;
  }  

  const changeAddr1 = (value) => {
    manageInfo.addr1 = value;
  }  

  const changeAddr2 = (value) => {
    manageInfo.addr2 = value;
  }    

  const closePopup = () => {
    setPopupDialog({
      flag: false,
      mode: 0
    });
  }

  const validForm = () => {
    if (0 < manageInfo.name.length &&
      0 < manageInfo.phone.length &&
      0 < manageInfo.post.length &&
      0 < manageInfo.addr1.length &&
      0 < manageInfo.addr2.length &&
      0 < manageInfo.wallet.length) {
      return true;
    }

    return false;
  }

  const modify = () => {
    if (!agree) {
      setPopup({
        flag: true,
        warn: true,
        title: "유의사항 동의 필요",
        subtitle: "유의사항에 동의해주시기 바랍니다."
      });
    }
    else if (!validForm()) {
      setPopup({
        flag: true,
        warn: true,
        title: "입력사항 확인 필요",
        subtitle: "입력사항을 확인해주시기 바랍니다."
      });      
    }
    else {

    }
  }

  const callSignout = () => {
    setPopupDialog({ flag: true, mode: 2 });
  }

  return (
    <Container>
      <ManageForm>
        <MemberInfo />
        <WalletAddr />
        {
          popupDialog.flag === true ? 
            <OpenPopup /> :
            <></>
        }
      </ManageForm>
    </Container>
  )

  function MemberInfo() {
    return (
      <MemberInfoArea>
        <TitleBox>회원정보</TitleBox>
        <ABLabel require={true}>이메일 아이디</ABLabel>
        <ABInput value={manageInfo.email} readOnly={true} width={640} height={52} style={{ margin: "0 0 20px 0" }} />
        <ABLabel require={true}>비밀번호</ABLabel>
        <FormRow style={{margin: "0 0 20px 0"}}>
          <ABInput value={manageInfo.password} readOnly={true} pass={true} width={556} height={52} style={{ margin: "0 4px 0 0" }} />        
          <RectButton width={80} height={52} bgColor="#FF3D21" onClick={() => setPopupDialog({flag: true, mode: 0}) } btnStyle={{
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            borderRadius: "5px"
          }}>변경</RectButton>
        </FormRow>
        <ABLabel require={true}>성함</ABLabel>
        <ABInput value={manageInfo.name} charOnly={true} width={640} height={52} style={{ margin: "0 0 20px 0" }} onChangeCallback={changeName} />        
        <ABLabel require={true}>전화번호</ABLabel>
        <ABInput value={manageInfo.phone} size={11} number={true} width={640} height={52} style={{ margin: "0 0 20px 0" }} onChangeCallback={changePhone} />                
        <ABLabel require={true}>주소</ABLabel>
        <FormRow style={{margin: "0 0 10px 0"}}>
          <ABInput value={manageInfo.post} readOnly={true} number={true} width={556} height={52} style={{ margin: "0 4px 0 0" }} onChangeCallback={changePost} />        
          <RectButton width={80} height={52} bgColor="#FF3D21" btnStyle={{
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            borderRadius: "5px"
          }}>우편번호</RectButton>
        </FormRow>
        <ABInput value={manageInfo.addr1} width={640} height={52} style={{ margin: "0 0 10px 0" }} onChangeCallback={changeAddr1} />
        <ABInput value={manageInfo.addr2} width={640} height={52} style={{ margin: "0 0 40px 0" }} onChangeCallback={changeAddr2} />
      </MemberInfoArea>
    )
  }

  function WalletAddr() {
    return (
      <WalletAddrArea>
        <TitleBox>NFT 지갑 주소</TitleBox>
        <ABLabel>NFT 지갑 주소</ABLabel>
        <ABInput value={manageInfo.wallet} wallet={true} width={640} height={52} style={{ margin: "0 0 20px 0" }} onChangeCallback={changeWallet} />
        <AgreeBox onClick={() => setAgree(!agree)}>
          <AgreeContainer>
            <AgreeHeader>
              <AgreeHeaderText>아래의 유의사항에 동의합니다.</AgreeHeaderText>
              <ABCheckBox checked={agree} onChangeCallback={setAgreeCallback} />
            </AgreeHeader>
            <AgreeDescBox>
              <AgreeDesc>
                <AgreeRow>
                  <AgreeLI />
                  <AgreeText>디지털 자산의 특성상 구매 후 취소할 수 없습니다. 보내기전 주소와 수량을 꼭 확인 하세요.</AgreeText>
                </AgreeRow>
                <AgreeRow>
                  <AgreeLI />
                  <AgreeText>아트비의 NFT는 이더리움 기반(ERC-1155)으로, 이더리움을 지원하는 지갑으로만 수령 가능합니다.</AgreeText>
              </AgreeRow>
              <AgreeRow>
                  <AgreeLI style={{visibility: "hidden"}}/>
                  <AgreeText>그렇지 않은 지갑으로 송금하는 경우 아트비에서 도와드릴 수 있는 부분이 없습니다.</AgreeText>
              </AgreeRow>
                <AgreeRow>
                  <AgreeLI />
                  <AgreeText>구매 후 NFT 송금 과정은 블록체인 네트워크에서 처리됩니다. 네트워크 상황에 따라 송금이 지연될수</AgreeText>
                </AgreeRow>
                <AgreeRow>
                  <AgreeLI style={{visibility: "hidden"}}/>
                  <AgreeText>있으며 통상 1~3일 정도 소요 됩니다.</AgreeText>
                </AgreeRow>
              </AgreeDesc>
            </AgreeDescBox>
          </AgreeContainer>
        </AgreeBox>
        <BottomArea>
          <RectButton width={160} height={52} bgColor="#FF3D21" onClick={modify} btnStyle={{
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            borderRadius: "5px",
          }}>수정 완료</RectButton>
          <TextButton width={128} height={32} onClick={() => setPopupDialog({flag: true, mode: 1})} btnStyle={{
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#303030",
            textDecorationLine: "underline",
            margin: "30px 0 0 0"
          }}>회원탈퇴</TextButton>
        </BottomArea>
      </WalletAddrArea>
    )
  }

  function TitleBox(props) {
    return (
      <TitleArea>
        <Line color="#FF3D21" align="left" height={4} width={40} lineStyle={{ margin: "0 0 20px 0", borderRadius: "5px" }} />
        <TitleText>{props.children}</TitleText>
      </TitleArea>
    )
  }

  function OpenPopup() {
    return (
      <>
        { (() => {
          switch (popupDialog.mode) {
            case 0: return <ChangePassword />
            case 1: return <Signout />
            case 2: return <Signouted />
            default: return null
          }
        })()}
      </>
    )
  }

  function ChangePassword() {
    return (
      <PopupDialog title="비밀번호 변경" subtitle={["변경하실 비밀번호를 입력해주세요."]} buttons={
        [
          {
            name: "취소", click: closePopup, bgColor:"#FFFFFF", bdColor:"#CBCBCB",
            style: {
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#303030",
              borderRadius: "5px",
            }
          },
          {
            name: "변경", click: closePopup, bgColor: "#FF3D21",
            style: {
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              borderRadius: "5px"              
            }
          }
        ]
      }>
        <ABLabel require={true}>새로운 비밀번호</ABLabel>
        <ABInput pass={true} require={true} width={560} height={52} placeholder="새로운 비밀번호를 입력해 주세요."/>
      </PopupDialog>
    )
  }

  function Signout() {
    return (
      <PopupDialog icon="/singout_icon.svg" title="회원탈퇴" subtitle={["사용하시는 지갑에 NFT가 전송되지 않은 상태로 회원탈퇴 시", "NFT 구매내역이 사라질수 있며 탈퇴 후 계정은 복구할 수 없습니다."]} buttons={
        [
          {
            name: "회원 탈퇴", click: callSignout, bgColor:"#FFFFFF", bdColor:"#CBCBCB",
            style: {
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#303030",
              borderRadius: "5px",
            }
          },
          {
            name: "취소", click: closePopup, bgColor: "#FF3D21",
            style: {
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              borderRadius: "5px"              
            }
          }
        ]
      }/>
    )
  }

  function Signouted() {
    return (
      <PopupDialog icon="/signouted_icon.svg" title="탈퇴 완료되었습니다." subtitle={["그 동안 이용해주셔서 감사합니다.", "다음에는 더 훌륭한 서비스로 만나뵙겠습니다.", "NFT 구매내역이 사라질수 있며 탈퇴 후 계정은 복구할 수 없습니다."]} buttons={
        [
          {
            name: "홈으로", click: () => history.replace("/"), bgColor: "#FF3D21",
            style: {
              fontFamily: "Spoqa Han Sans Neo",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              borderRadius: "5px"              
            }
          }
        ]
      }/>
    )
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const ManageForm = styled.div`
  display: flex;
  width: 640px;
  margin: 80px 0;
  flex-direction: column;
`

const MemberInfoArea = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleArea = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0 0 20px 0;
`

const TitleText = styled.span`
  display: flex;
  font-family: Spoqa Han Sans Neo;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.04em;
  color: #000000;
  flex-direction: column;
`

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
`

const WalletAddrArea = styled.div`
  display: flex;
  flex-direction: column;
`

const AgreeBox = styled.div`
  height: 204px;
  width: 640px;
  border-radius: 5px;
  border: 1px solid #C5C5C5;
  background: #FFFFFF;
  margin: 0 0 80px 0;
`
const AgreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  align-items: center;
`

const AgreeHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 600px;
  margin: 0 0 20px 0;
`

const AgreeHeaderText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #303030;
`

const AgreeDescBox = styled.div`
  display: flex;
  height: 120px;
  width: 600px;
  background: #FAFAFA;
`

const AgreeDesc = styled.div`
  flex-direction : column;
  margin: 10px 10px;
`
const AgreeRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AgreeLI = styled.li`
  width: 16px;
  height: 16px;
  font-size:10px;
`

const AgreeText = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #424242;
`
const BottomArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Manage;