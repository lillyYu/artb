import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilTransaction_UNSTABLE } from "recoil";
import { RectButton } from "../../Common/button.js";
import { ABLabel, ABInput } from "../../Common/form";
import { PopupDialog } from "../../Common/popup";
import { diagState, authState, accountState } from "../../../store/web2";
import PostPopup from "../../Common/postPopup";
import { useRequest } from "../../../utilities/request-hook";
import { useHistory } from "react-router-dom";

function FindId(props) {
  const [type, setType] = useRecoilState(diagState);
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
            style={{ marginRight: 4 }}
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
      </InputItem>
      <WarningBox>
        <WarningMsg>
          이메일 또는 비밀번호를 확인해 주세요.(기획 후 작업예정)
        </WarningMsg>
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
          onClick={() => {
            setType("findIdComplete");
          }}
        >
          아이디 찾기
        </RectButton>
      </ReverseColumn>
    </>
  );
}

function FindIdComplete() {
  return (
    <>
      <HCenter>
        <RoundCheck src="/round_check.svg" style={{ marginTop: 221 }} />
        <CompleteText1 style={{ marginTop: 20 }}>
          회원님의 아이디는
        </CompleteText1>
        <CompleteText1 style={{ marginTop: 20 }}>
          <span className="name">apd**@naver.com</span> 입니다.
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
export { FindId, FindIdComplete };
