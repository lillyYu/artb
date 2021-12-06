/* Components */
import Gnb from "./Components/Gnb";
import Home from "./Components/Home";
import NftTrade from "./Components/NftTrade";
import PayCoin from "./Components/NftTrade/Payment/coin";
import PayCash from "./Components/NftTrade/Payment/cash";
import Footer from "./Components/Footer";
import MyNFT from "./Components/Gnb/myNFT";
import CheckAccount from "./Components/Gnb/checkAccount";
import Term1 from './Components/Terms/Term1';
import Term2 from './Components/Terms/Term2';
import AccountTransferPopup from './Components/NftTrade/Popup/accountTransfer'

/* Libraries */
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const location = useLocation();

  return (
    <Container>
      <Gnb />
      <Switch>
        <Route path="/payment/coin" component={PayCoin}></Route>
        <Route path="/payment/cash" component={PayCash}></Route>
        <Route path="/mypage/check" component={CheckAccount}></Route>
        <Route path="/mypage" component={MyNFT}></Route>
        <Route
          path="/"
          exact
          component={() => <NftTrade />} />
        <Route path="/term1" exact component={Term1} />
        <Route path="/term2" exact component={Term2} />
        <Route path="/accountTransfer" exact component={AccountTransferPopup} />
        {/* <Route path="/" component={NftTrade}></Route> */}
        {/* <Route path="/" component={Home}></Route> */}
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
  width: 720px;
`;

export default App;
