import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { RectButton } from "../Common/button.js";

function Join() {
  return (
    <>
      <Top>
        <Logo />
        <MenuFrame>
          <MenuDisabled>로그인</MenuDisabled>
        </MenuFrame>
        <MenuFrame>
          <MenuActive>회원가입</MenuActive>
          <ActiveBar />
        </MenuFrame>
      </Top>
      <InputItem>
        <InputName>
          이메일 아이디<span className="necessary">*</span>
        </InputName>
        <InputBox>
          <InputText
            type="text"
            placeholder="이메일을 입력해 주세요."
            style={{ width: 412, marginRight: 4 }}
            className="error"
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
            }}
            onClick={() => {}}
          >
            인증
          </RectButton>
        </InputBox>
      </InputItem>
      <InputItem>
        <InputName>
          비밀번호<span className="necessary">*</span>
        </InputName>
        <InputBox>
          <InputText
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            style={{ width: 496 }}
          />
        </InputBox>
      </InputItem>
      <InputItem>
        <InputName>
          성함<span className="necessary">*</span>
        </InputName>
        <InputBox>
          <InputText
            type="text"
            placeholder="성함을 입력해 주세요."
            style={{ width: 496 }}
          />
        </InputBox>
      </InputItem>
      <InputItem>
        <InputName>
          전화번호<span className="necessary">*</span>
        </InputName>
        <InputBox>
          <InputText
            type="text"
            placeholder="전화번호를 입력해 주세요."
            style={{ width: 496 }}
          />
        </InputBox>
      </InputItem>
      <InputItem>
        <InputName>
          주소<span className="necessary">*</span>
        </InputName>
        <InputBox>
          <InputText
            type="text"
            placeholder="우편 번호"
            style={{ width: 412, marginRight: 4 }}
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
            }}
            onClick={() => {}}
          >
            우편번호
          </RectButton>
        </InputBox>
      </InputItem>
      <AgreementBox>
        <Agreement>
          <span className="link">서비스 이용약관</span> &nbsp;및&nbsp;
          <span className="link">개인정보 취급방침</span>의 내용을 확인하였고,
          동의합니다
        </Agreement>
      </AgreementBox>
      <RectButton
        width="496"
        height="52"
        bgColor="#FF3D21"
        btnStyle={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#FFF",
          borderRadius: "5px"
        }}
        onClick={() => {}}
      >
        회원가입 완료
      </RectButton>
    </>
  );
}

function Login() {
  return (
    <>
      <Top>
        <Logo />
        <MenuFrame>
          <MenuActive>로그인</MenuActive>
          <ActiveBar />
        </MenuFrame>
        <MenuFrame>
          <MenuDisabled>회원가입</MenuDisabled>
        </MenuFrame>
      </Top>
      <InputItem>
        <InputName>
          이메일 아이디
        </InputName>
        <InputBox>
          <InputText
            type="text"
            placeholder="이메일을 입력해 주세요."
            style={{ width: 496 }}
          />
        </InputBox>
      </InputItem>
      <InputItem>
        <InputName>
          비밀번호
        </InputName>
        <InputBox>
          <InputText
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            style={{ width: 496 }}
          />
        </InputBox>
      </InputItem>
      <div style={{marginBottom: 298}} />
      <RectButton
        width="496"
        height="52"
        bgColor="#FF3D21"
        btnStyle={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#FFF",
          borderRadius: "5px"
        }}
        onClick={() => {}}
      >
        로그인
      </RectButton>
      <div style={{marginBottom: 20}} />
      <RectButton
        width="496"
        height="52"
        bgColor="#FFF"
        bdColor="#CBCBCB"
        btnStyle={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#303030",
          borderRadius: "5px"
        }}
        onClick={() => {}}
      >
        아이디 / 비밀번호 찾기
      </RectButton>
    </>
  );
}

function SignDiag({ openDialog, mode }) {
  return (
    <Container className={openDialog ? "show" : "hide"}>
      {mode == "join" ? <Join /> : <Login />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  position: absolute;
  width: 496px;
  height: 714px;
  left: 310px;
  top: 180px;

  background: #ffffff;
  /* shadow new */

  box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.07),
    0px 40px 30px rgba(0, 0, 0, 0.0503198), 0px 20px 20px rgba(0, 0, 0, 0.04),
    0px 12px 10px rgba(0, 0, 0, 0.03), 0px 4px 4px rgba(0, 0, 0, 0.04),
    0px 2px 2px rgba(0, 0, 0, 0.0196802);
  border-radius: 0px 20px;
  &.show {
    display: flex;
  }
  &.hide {
    display: none;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img``;

const MenuFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
`;

const MenuDisabled = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;

  /* light light dark */

  color: #cbcbcb;
`;

const MenuActive = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.04em;

  /* primary */

  color: #ff3d21;
`;

const ActiveBar = styled.div`
  position: static;
  width: 20px;
  height: 4px;
  left: calc(50% - 20px / 2);
  bottom: 0px;

  /* primary */

  background: #ff3d21;
  border-radius: 5px;

  margin: 10px 0 0 0;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputName = styled.span`
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  /* dark-dark */

  color: #303030;
  margin: 0 0 4px 0;

  .necessary {
    color: #d1504b;
  }
`;

const InputText = styled.input`
  padding: 16px;
  height: 52px;
  background: #ffffff;
  /* light light dark */

  border: 1px solid #cbcbcb;
  box-sizing: border-box;
  border-radius: 5px;
  ::placeholder {
    color: #cbcbcb;
  }

  &.error {
    border: 1px solid #D1504B;
  }
`;

const AgreementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 0 20px 0;
`;

const Agreement = styled.span`
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
  .link {
    text-decoration-line: underline;
  }
  margin: 40px 0 0 0;
`;
export default SignDiag;
