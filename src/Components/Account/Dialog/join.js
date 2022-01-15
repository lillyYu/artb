import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilTransaction_UNSTABLE } from "recoil";
import { RectButton } from "../../Common/button.js";
import { ABLabel, ABInput } from "../../Common/form";
import { PopupDialog } from "../../Common/popup";
import { diagState, authState, accountState } from "../../../store/web2";
import PostPopup from "../../Common/postPopup";
import { useRequest } from "../../../utilities/request-hook";

function Join() {
  const [type, setType] = useRecoilState(diagState);
  const [showAgree, setShowAgree] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [form, setForm] = useState({});
  const [warnMsg, setWarnMsg] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const joinReq = useRequest({ url: "/user/join", method: "POST" });
  const [warning, setWarning] = useState({});

  const msg = {
    email: {
      1: "이메일을 확인해 주세요.",
    },
    authCode: {
      1: "인증번호를 확인해 주세요",
    },
    password: {
      1: "패스워드를 확인해 주세요.",
    },
    name: {
      1: "성함을 확인해주세요.",
    },
    phone: {
      1: "전화번호를 확인해주세요.",
    },
    addr1: {
      1: "기본주소를 확인해주세요.",
    },
    addr2: {
      1: "상세주소를 확인해주세요.",
    },
  };

  const closePopup = useCallback(() => {
    setShowAgree(false);
  });

  const addressCallback = (post, addr1, addr2) => {
    setForm({
      ...form,
      post,
      addr1,
      addr2,
    });
    validation({
      post,
      addr1,
    });
  };

  const validation = (obj = {}, submit = false) => {
    if(submit) setIsSubmited(submit);
    if (!submit && !isSubmited) return;
    let isValid = true;
    let tempWarning = {};
    for (const k in msg) {
      if (k == "email") {
        const regEmail =
          /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if (regEmail.test(form.email) == false) {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            email: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            email: false,
          };
        }
      }
      if (k == "authCode") {
        if (form.authCode == "" || form.authCode == undefined) {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            authCode: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            authCode: false,
          };
        }
      }
      if (k == "password") {
        if (form.password == "" || form.password == undefined) {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            password: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            password: false,
          };
        }
      }
      if (k == "name") {
        if (form.name == "" || form.name == undefined) {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            name: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            name: false,
          };
        }
      }
      if (k == "phone") {
        const regPhone1 = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        const regPhone2 = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
        if (
          regPhone1.test(form.phone) == false &&
          regPhone2.test(form.phone) == false
        ) {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            phone: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            phone: false,
          };
        }
      }
      if (k == "addr1") {
        if (
          (obj.addr1 == undefined || obj.addr1 == "") &&
          (form.addr1 == undefined || form.addr1 == "")
        ) {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            post: true,
            addr1: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            post: false,
            addr1: false,
          };
        }
      }
      if (k == "addr2") {
        if (form.addr2 == undefined || form.addr2 == "") {
          if (isValid) {
            setWarnMsg(msg[k][1]);
          }
          isValid = false;
          tempWarning = {
            ...tempWarning,
            addr2: true,
          };
        } else {
          tempWarning = {
            ...tempWarning,
            addr2: false,
          };
        }
      }
    }
    setWarning(tempWarning);
    if (isValid) setWarnMsg("");
    return isValid;
  };

  const joinProc = () => {
    if (!validation({}, true)) return;
    joinReq.fetch(
      {
        data: form,
      },
      (res) => {
        if (res && res.status == 201) {
          setWarnMsg("");
          setType("joinComplete");
        } else {
          setWarnMsg("회원 가입이 실패했습니다.");
        }
      }
    );
  };

  return (
    <>
      <ScrollFrame>
        <InputItem>
          <ABLabel require={true}>이메일 아이디</ABLabel>
          <InputBox>
            <ABInput
              type="text"
              placeholder="이메일을 입력해 주세요."
              width={412}
              height={52}
              require={true}
              warning={warning.email}
              style={{ marginRight: 4 }}
              value={form.email}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  email: value,
                });
              }}
              onBlur={(e) => {
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
              인증
            </RectButton>
          </InputBox>
          <InputBox>
            <ABInput
              type="text"
              placeholder="인증번호를 입력해 주세요."
              width={412}
              height={52}
              require={true}
              warning={warning.authCode}
              style={{ marginRight: 4, marginTop: 10 }}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  authCode: value,
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
          <ABLabel require={true}>비밀번호</ABLabel>
          <InputBox>
            <ABInput
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              width={496}
              height={52}
              require={true}
              warning={warning.password}
              pass={true}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  password: value,
                });
              }}
              onBlur={() => {
                validation();
              }}
            />
          </InputBox>
        </InputItem>
        <InputItem>
          <ABLabel require={true}>성함</ABLabel>
          <InputBox>
            <ABInput
              type="text"
              placeholder="성함을 입력해 주세요."
              width={496}
              height={52}
              require={true}
              warning={warning.name}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  name: value,
                });
              }}
              onBlur={() => {
                validation();
              }}
            />
          </InputBox>
        </InputItem>
        <InputItem>
          <ABLabel require={true}>전화번호</ABLabel>
          <InputBox>
            <ABInput
              type="text"
              placeholder="전화번호를 입력해 주세요."
              width={496}
              height={52}
              require={true}
              warning={warning.phone}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  phone: value,
                });
              }}
              onBlur={() => {
                validation();
              }}
            />
          </InputBox>
        </InputItem>
        <InputItem>
          <ABLabel require={true}>주소</ABLabel>
          <InputBox>
            <ABInput
              type="text"
              placeholder="우편 번호"
              width={412}
              height={52}
              style={{ marginRight: 4 }}
              readOnly={true}
              require={true}
              warning={warning.post}
              value={form.post}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  post: value,
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
              }}
              onClick={() => {
                setIsOpenPost(true);
              }}
            >
              우편번호
            </RectButton>
            {isOpenPost ? (
              <PostPopup
                onAddress={addressCallback}
                popupFlag={isOpenPost}
                setPopupFlag={setIsOpenPost}
              />
            ) : null}
          </InputBox>
          <InputBox>
            <ABInput
              type="text"
              placeholder="기본 주소"
              width={496}
              height={52}
              style={{ marginTop: 10 }}
              readOnly={true}
              require={true}
              warning={warning.addr1}
              value={form.addr1}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  addr1: value,
                });
              }}
            />
          </InputBox>
          <InputBox>
            <ABInput
              type="text"
              placeholder="상세 주소"
              width={496}
              height={52}
              style={{ marginTop: 10 }}
              require={true}
              warning={warning.addr2}
              onChangeCallback={(value) => {
                setForm({
                  ...form,
                  addr2: value,
                });
              }}
              onBlur={() => {
                validation();
              }}
            />
          </InputBox>
        </InputItem>
      </ScrollFrame>
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
          onClick={joinProc}
        >
          회원가입 완료
        </RectButton>
        <CenterBox>
          <Agreement>
            <span
              className="link"
              onClick={() => {
                setShowAgree(true);
              }}
            >
              서비스 이용약관
            </span>{" "}
            &nbsp;및&nbsp;
            <span
              className="link"
              onClick={() => {
                setShowAgree(true);
              }}
            >
              개인정보 취급방침
            </span>
            의 내용을 확인하였고, 동의합니다
          </Agreement>
          {showAgree ? <ShowAgreement closePopup={closePopup} /> : <></>}
        </CenterBox>
        {warnMsg == "" ? null : (
          <CenterBox>
            <WarningMsg>{warnMsg}</WarningMsg>
          </CenterBox>
        )}
      </ReverseColumn>
    </>
  );
}

function ShowAgreement(props) {
  return (
    <PopupDialog
      title="서비스 이용약관"
      width={1024}
      height={600}
      buttons={[
        {
          name: "동의 후 확인",
          click: props.closePopup,
          bgColor: "#FF3D21",
          style: {
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: "16px",
            fontWeight: "bold",
            lineHeight: "24px",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            borderRadius: "5px",
          },
        },
      ]}
    >
      <AgreementContent>
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
        hihdfdfdfadadf
        <br />
      </AgreementContent>
    </PopupDialog>
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


export default Join
