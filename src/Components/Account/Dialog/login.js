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

function Login(props) {
  const [type, setType] = useRecoilState(diagState);
  const [token, setToken] = useRecoilState(authState);
  const [account, setAccount] = useRecoilState(accountState);
  const login = useRequest({ url: "/user/login", method: "POST" });
  const profile = useRequest({ url: "/user/profile", method: "GET" });
  const [form, setForm] = useState({});
  const [warnMsg, setWarnMsg] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [warning, setWarning] = useState({});
  const history = useHistory();

  const idCallback = (value) => {
    setForm({
      ...form,
      email: value,
    });
  };
  const passCallback = (value) => {
    setForm({
      ...form,
      password: value,
    });
  };
  const loginProc = () => {
    if (!validation(true)) {
      return false;
    }
    login.fetch(
      {
        data: {
          username: form.email,
          password: form.password,
        },
      },
      (res) => {
        if (res && res.status == 201) {
          setWarnMsg("");
        } else {
          setWarnMsg("로그인이 실패하였습니다.");
          return;
        }
        setToken(res.data.access_token);

        profile.fetch({}, (res) => {
          if(res.status == 200){
            setAccount({
              logined: true,
              info: {
                email: res.data.email,
                name: res.data.name,
                phone: res.data.phone,
                post: res.data.post,
                addr1: res.data.addr1,
                addr2: res.data.addr2,
                nftCount: 0,
              },
            });
          }
        });

        history.push('/')
      }
    );
  };
  const validation = (submit = false) => {
    if(submit) setIsSubmited(submit);
    if (!submit && !isSubmited) return;
    let isValid = true;
    let tempWarning = {};
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(form.email) == false) {
      isValid = false;
      setWarnMsg("이메일 또는 비밀번호를 확인해 주세요.");
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
    
    if (form.password == undefined || form.password == "") {
      isValid = false;
      setWarnMsg("이메일 또는 비밀번호를 확인해 주세요.");
      tempWarning = {
        ...tempWarning,
        password: true,
      };
    }else{
      tempWarning = {
        ...tempWarning,
        password: false,
      };
    }
    if (isValid) {
      setWarnMsg("");
    }
    setWarning(tempWarning);
    return isValid;
  };

  return (
    <>
      <InputItem>
        <ABLabel>이메일 아이디</ABLabel>
        <InputBox>
          <ABInput
            type="text"
            placeholder="이메일을 입력해 주세요."
            width={496}
            height={52}
            warning={warning.email}
            onChangeCallback={idCallback}
            onBlur={() => {
              validation();
            }}
          />
        </InputBox>
      </InputItem>
      <InputItem>
        <ABLabel>비밀번호</ABLabel>
        <InputBox>
          <ABInput
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            width={496}
            height={52}
            pass={true}
            warning={warning.password}
            onChangeCallback={passCallback}
            onBlur={() => {
              validation();
            }}
          />
        </InputBox>
      </InputItem>
      {warnMsg == "" ? null : (
        <WarningBox>
          <WarningMsg>{warnMsg}</WarningMsg>
        </WarningBox>
      )}
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
            setType("findId");
          }}
        >
          아이디 / 비밀번호 찾기
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
          onClick={loginProc}
        >
          로그인
        </RectButton>
      </ReverseColumn>
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


const ReverseColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`;

export default Login;
