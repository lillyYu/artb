/* Components */
import Gnb from "../../../Components/Gnb";
import Footer from "../../../Components/Footer";

/* Libraries */
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Coin() {
  return (
    <Container>
      <Gnb />
      <Contents>
        <div className="coinPay">
          <img
            src="/payment_dummy_coin.png"
            style={{ width: "720px", height: "1300px", position: "absolute", zIndex: "1" }}
          />
          <HashLink to={"/"}>
            <div className="button" />
          </HashLink>
        </div>

        <TransactionHashWrapper>
          <TransactionHash>
            0xee5112a72eebf80e8a886b014de85660d0cc1527fa7e3750b7187b905385c1c7
          </TransactionHash>
        </TransactionHashWrapper>

        <Txid onClick={() => { console.log("1234") }}>

        </Txid>

        <CategoryWrapper>
          <Category>
            남관_가을축제_저작권
          </Category>
        </CategoryWrapper>
        <ApplicationWrapper>
          <Application>
            2,500EA
          </Application>
        </ApplicationWrapper>
        <DepositWrapper>
          <Deposit>
            83,332.5 ABC
          </Deposit>
        </DepositWrapper>
        <MainButton onClick={() => { console.log("1234") }}>

        </MainButton>


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
  position: relative;
  margin-top:130px;
  /* top: 130px; */
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 1300px;
  background-color: #e2e2e2;
  a {
    text-decoration: none;
  }

  .coinPay{
    position: relative;

    .button {
      width: 445px;
      height: 75px;
    //   background-color: white;
      position:absolute;
      left: 138px;
    bottom: 94px;
      cursor: pointer;
    }
}

  }
`;


const TransactionHashWrapper = styled.div`
background-color:#f1f1f1;
box-sizing:border-box;
width:600px;
height:53px;
z-index:2;
display:flex;
justify-content:flex-start;
align-items:center;
margin-left: 60px;
margin-top: 615px;
`
const TransactionHash = styled.div`
width:600px;
height:53px;
margin-left:22px;
font-size:20px;
word-break: break-all;
font-weight: 300;
`
const CategoryWrapper = styled.div`
width:300px;
height:40px;
background-color:#f1f1f1;
z-index:2;
display:flex;
justify-content:flex-start;
align-items:center;
margin-top: 65px;
margin-left: 60px;
`
const Category = styled.div`
margin-left:22px;
height: 40px;
display: flex;
align-items: center;
font-size:22px;
font-weight: 300;
`
const ApplicationWrapper = styled.div`
width:300px;
height:40px;
background-color:#f1f1f1;
z-index:2;
display:flex;
justify-content:flex-start;
align-items:center;
margin-top: 32px;
margin-left: 60px;
`
const Application = styled.div`
margin-left:22px;
margin-left:22px;
height: 40px;
display: flex;
align-items: center;
font-size:20px;
font-weight: 300;
`
const DepositWrapper = styled.div`
width:300px;
height:40px;
background-color:#f1f1f1;
z-index:2;
display:flex;
justify-content:flex-start;
align-items:center;
margin-top: 32px;
margin-left: 60px;
`
const Deposit = styled.div`
margin-left:22px;
margin-left:22px;
height: 40px;
display: flex;
align-items: center;
font-size:20px;
font-weight: 300;
`

const Txid = styled.div`
width:160px;
height:50px;
z-index:2;
margin-left: 83px;

`
const MainButton = styled.div`
width:450px;
height:90px;
z-index:2;
margin-left: 135px;
margin-top:153px;
`
export default Coin;
