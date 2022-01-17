import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilTransaction_UNSTABLE } from "recoil";
import { RectButton } from "../../Common/button.js";
import { ABLabel, ABInput } from "../../Common/form";
import { PopupDialog } from "../../Common/popup";
import { diagState, authState, accountState } from "../../../store/web2";
import PostPopup from "../../Common/postPopup";
import { useRequest } from "../../../utilities/request-hook";
import { useHistory } from 'react-router-dom';

function FindPass() {
  const [type, setType] = useRecoilState(diagState);
  const [form, setForm] = useState({});
  const [warnMsg, setWarnMsg] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [warning, setWarning] = useState({});

  const findPassProc = () => {
    if (!validation(true)) {
      return false;
    }
    setType("findPassComplete");
  }
  const validation = (submit = false) => {
    if(submit) setIsSubmited(submit);
    if (!submit && !isSubmited) return;
    let isValid = true;
    let tempWarning = {};
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(form.email) == false) {
      isValid = false;
      setWarnMsg("이메일을 확인해 주세요.");
      tempWarning = {
        ...tempWarning,
        email: true,
      };
    }else{
      tempWarning = {
        ...tempWarning,
        email: false,
      };
    }
    if (isValid) {
      setWarnMsg("");
    }
    setWarning(tempWarning);
    return isValid;
  }
  return (
    <>
      <InputItem>
        <ABLabel>이메일</ABLabel>
        <InputBox>
          <ABInput
            type="text"
            placeholder="이메일을 입력해 주세요."
            width={412}
            height={52}
            require={true}
            warning={warning.email}
            style={{ marginRight: 4 }}
            onChangeCallback={(value) => {
              setForm({
                ...form,
                email: value,
              });
            }}
            onBlur={() => {
              validation();
            }}
          />
          <RectButton
            width="80"
            height="52"
            bgColor="#FF3D21"
            btnStyle={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#FFF",
              borderRadius: "5px",
              marginRight: 30,
            }}
            onClick={() => {}}
          >
            전송
          </RectButton>
        </InputBox>
        <InputBox>
          <ABInput
            type="text"
            placeholder="인증코드를 입력해 주세요."
            width={412}
            height={52}
            require={true}
            style={{ marginRight: 4, marginTop: 10 }}
            onChangeCallback={(value) => {
              setForm({
                ...form,
                authCode: value,
              });
            }}
          />
          <RectButton
            width="80"
            height="52"
            bgColor="#FF3D21"
            btnStyle={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#FFF",
              borderRadius: "5px",
              marginRight: 30,
              marginTop: 10,
            }}
            onClick={() => {}}
          >
            인증
          </RectButton>
        </InputBox>
        <CheckMsg>인증이 완료되었습니다.</CheckMsg>
      </InputItem>
      <InputItem>
        <ABLabel>새로운 비밀번호</ABLabel>
        <InputBox>
          <ABInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            width={496}
            height={52}
            require={true}
            pass={true}
            onChangeCallback={(value) => {
              setForm({
                ...form,
                newPassword: value,
              });
            }}
          />
        </InputBox>
      </InputItem>
      <WarningBox>
        <WarningMsg>{warnMsg}</WarningMsg>
      </WarningBox>
      <ReverseColumn>
        <RectButton
          width="496"
          height="52"
          bgColor="#FFF"
          bdColor="#CBCBCB"
          btnStyle={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#303030",
            borderRadius: "5px",
          }}
          onClick={() => {
            setType("login");
          }}
        >
          로그인
        </RectButton>
        <div style={{ marginBottom: 20 }} />
        <RectButton
          width="496"
          height="52"
          bgColor="#FF3D21"
          btnStyle={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#FFF",
            borderRadius: "5px",
          }}
          onClick={findPassProc}
        >
          비밀번호 변경
        </RectButton>
      </ReverseColumn>
    </>
  );
}

function FindPassComplete() {
  return (
    <>
      <HCenter>
        <RoundCheck src="/round_check.svg" style={{ marginTop: 221 }} />
        <CompleteText1 style={{ marginTop: 20 }}>
          비밀번호가 변경되었습니다.
        </CompleteText1>
        <ReverseColumn>
          <RectButton
            width="496"
            height="52"
            bgColor="#FF3D21"
            btnStyle={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#FFF",
              borderRadius: "5px",
            }}
            onClick={() => {}}
          >
            로그인
          </RectButton>
        </ReverseColumn>
      </HCenter>
    </>
  );
}

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const WarningBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 0;
`;

const WarningMsg = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  /* warning */

  color: #d1504b;
`;

const CheckMsg = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* light light dark */

  color: #cbcbcb;
  margin: 2px 0 0 16px;
`;

const RoundCheck = styled.img`
  display: flex;
  width: 80px;
  height: 80px;
`;

const HCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const CompleteText1 = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: -0.04em;

  /* primary */
  .name {
    color: #ff3d21;
  }
`;

const ReverseColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`;

export { FindPass, FindPassComplete };