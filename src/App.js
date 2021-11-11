/* Components */
import Gnb from "./Components/Gnb";
import Home from "./Components/Home";
import NftTrade from "./Components/NftTrade";
import PayCoin from "./Components/NftTrade/Payment/coin";
import PayCash from "./Components/NftTrade/Payment/cash";
import Footer from "./Components/Footer";
import TermsOfUse from "./Components/NftTrade/Terms/TermsOfUse";
import Privacy from "./Components/NftTrade/Terms/Privacy";
/* Libraries */
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <Gnb />
      <Switch>
        <Route path="/payment/coin" component={PayCoin}></Route>
        <Route path="/payment/cash" component={PayCash}></Route>
        <Route path="/payment" component={NftTrade}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      {/* <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/trade" component={NftTrade}></Route>
      </Switch> */}
      {/* <Footer /> */}
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

export default App;
