import styled from "styled-components";
import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilTransaction_UNSTABLE } from "recoil";
import { RectButton } from "../../Common/button.js";
import { ABLabel, ABInput } from "../../Common/form";
import { PopupDialog } from "../../Common/popup";
import { diagState, authState, accountState } from "../../../store/web2";
import PostPopup from "../../Common/postPopup";
import { useRequest } from "../../../utilities/request-hook";
import Join from "./join"
import Login from "./login"
import FindId from "./findId"
import FindPass from "./findPass"


function SignDiag(props) {
  const [diagType, setDiagType] = useRecoilState(diagState);
  const loginDiag = ["join", "login", "joinComplete"];

  const closeDiaglog = () => {
    if (props.closeCallback) props.closeCallback();
  };
  return (
    <>
      {loginDiag.indexOf(diagType) >= 0 ? (
        <LoginDiag closeCallback={props.closeCallback} />
      ) : (
        <FindDiag />
      )}
    </>
  );

  function LoginDiag(props) {
    const [type, setType] = useRecoilState(diagState);
    const [scrollbar, setScrollbar] = useState(type === "join" ? true : false);

    useEffect(() => {
      if (type === "join") {
        setScrollbar(true);
      } else {
        setScrollbar(false);
      }
    }, [type]);

    return (
      <Container
        style={{
          paddingRight: scrollbar ? 12 : 40,
          width: scrollbar ? 526 : 496,
        }}
      >
        <Top>
          <Logo src="/logo_red.png" />
          <MenuFrame style={{ paddingLeft: 150 }}>
            {type === "join" || type === "joinComplete" ? (
              <MenuDisabled
                onClick={() => {
                  setType("login");
                }}
              >
                로그인
              </MenuDisabled>
            ) : (
              <>
                <MenuActive>로그인</MenuActive>
                <ActiveBar />
              </>
            )}
          </MenuFrame>
          <MenuFrame>
            {type === "login" ? (
              <MenuDisabled
                onClick={() => {
                  setType("join");
                }}
              >
                회원가입
              </MenuDisabled>
            ) : (
              <>
                <MenuActive>회원가입</MenuActive>
                <ActiveBar />
              </>
            )}
          </MenuFrame>
        </Top>
        {(() => {
          switch (type) {
            case "join": {
              return <Join />;
            }
            case "login": {
              return <Login loginCallback={props.loginCallback} />;
            }
            case "joinComplete": {
              return <JoinComplete />;
            }
            default:
              return null;
          }
        })()}
      </Container>
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


  function JoinComplete() {
    return (
      <>
        <HCenter>
          <RoundCheck src="/round_check.svg" style={{ marginTop: 221 }} />
          <CompleteText1 style={{ marginTop: 20 }}>
            <span className="name">김이름</span>님 회원가입이 완료되었습니다.
          </CompleteText1>
          <CompleteText2 tyle={{ marginTop: 4 }}>
            아트비의 다양한 서비스를 이용하실 수 있습니다.
          </CompleteText2>
          <ReverseColumn className="reverserdd">
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
              onClick={closeDiaglog}
            >
              홈으로
            </RectButton>
          </ReverseColumn>
        </HCenter>
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

  function FindDiag(props) {
    const [type, setType] = useRecoilState(diagState);

    return (
      <Container
        style={{
          paddingRight: 40,
          width: 496,
        }}
      >
        <Top>
          <Logo src="/logo_red.png" />
          <MenuFrame style={{ paddingLeft: 50, width: 150 }}>
            {["findPass", "findPassComplete"].indexOf(type) >= 0 ? (
              <MenuDisabled
                onClick={() => {
                  setType("findId");
                }}
              >
                아이디 찾기
              </MenuDisabled>
            ) : (
              <>
                <MenuActive>아이디 찾기</MenuActive>
                <ActiveBar />
              </>
            )}
          </MenuFrame>
          <MenuFrame style={{ paddingLeft: 0, width: 140 }}>
            {["findId", "findIdComplete"].indexOf(type) >= 0 ? (
              <MenuDisabled
                onClick={() => {
                  setType("findPass");
                }}
              >
                비밀번호 찾기
              </MenuDisabled>
            ) : (
              <>
                <MenuActive>비밀번호 찾기</MenuActive>
                <ActiveBar />
              </>
            )}
          </MenuFrame>
        </Top>
        {(() => {
          switch (type) {
            case "findId": {
              return <FindId />;
            }
            case "findIdComplete": {
              return <FindIdComplete />;
            }
            case "findPass":
              return <FindPass />;
            case "findPassComplete":
              return <FindPassComplete />;
            default:
              return null;
          }
        })()}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 12px 40px 40px;

  position: relative;
  width: 528px;
  height: 714px;
  left: 310px;
  top: 80px;

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

export default SignDiag;
