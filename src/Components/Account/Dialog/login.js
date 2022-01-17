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


const Top = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 156px;
  height: 52px;
`;

const MenuFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 0px 0 50px;
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
  cursor: pointer;
`;

const ScrollFrame = styled.div`
  height: 500px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbcbcb;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
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
    border: 1px solid #d1504b;
  }
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

const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 0;
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
  margin: 10px 0 0 0;
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

const CompleteText2 = styled.span`
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

  /* dark-dark */

  color: #303030;
`;

const AgreementContent = styled.div`
  height: 372px;
  overflow: auto;
  background: #fafafa;
  border-radius: 5px;
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbcbcb;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const ReverseColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`;

const ReverseRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
`;


export default Login;
