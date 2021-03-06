/* Components */
import Gnb from "../../../Components/Gnb";
import Footer from "../../../Components/Footer";

/* Libraries */
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Cash() {
  return (
    <Container>
      <Gnb />
      <Contents>
        <div className="cashPay">
          <img
            src="/payment_dummy_cash.png"
            style={{ width: "720px", height: "1300px" }}
          />
          <HashLink to={"/"}>
            <div className="button" />
          </HashLink>
        </div>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  // font-family: Pretendard;
  display: flex;
  width: 720px;
  gap: 20px 0;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  position: absolute;
  top: 130px;
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 1300px;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }

  .cashPay {
    position: relative;

    .button {
      width: 443px;
      height: 68px;
      //   background-color: white;
      position: absolute;
      left: 138px;
      bottom: 94px;
      cursor: pointer;
    }
  }
`;
export default Cash;
