/* Components */
import Gnb from "./Components/Gnb";
import Home from "./Components/Home";
import Introduction from "./Components/Home/Introduction";
import Benefit from "./Components/Home/Benefit";
import NftTrade from "./Components/NftTrade";
import PayCoin from "./Components/NftTrade/Payment/coin";
import PayCash from "./Components/NftTrade/Payment/cash";
import Footer from "./Components/Footer";
import MyNFT from "./Components/Gnb/myNFT";
import CheckAccount from "./Components/Gnb/checkAccount";
import Term1 from './Components/Terms/Term1';
import Term2 from './Components/Terms/Term2';
import AccountTransferPopup from './Components/NftTrade/Popup/accountTransfer';
import OrderDetail from './Components/Gnb/OrderDetail';

import Slider from "./Components/Common/slider";

/* Libraries */
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const location = useLocation();

  return (
    <Container>
      <Gnb />
      <Slider width="1920" height="954" dotColors={["#111111", "#555555", "#999999"]} textColors={["#444444", "#555555", "#666666"]}>
        <Introduction />
        <Benefit />
        <BodyC/>
      </Slider>
      {/* <Switch>
        <Route path="/#1" component={BodyA} />
        <Route path="/#2" component={BodyB} />
        <Route path="/#3" component={BodyC} />
      </Switch> */}
        {/* <Switch>
          <Route path="/payment/coin" component={PayCoin} />
          <Route path="/payment/cash" component={PayCash} />
          <Route path="/mypage/check" component={CheckAccount} />
          <Route path="/mypage" exact component={MyNFT} />
          <Route path="/mypage/orders/:id" exact component={OrderDetail} />
          <Route path="/" exact component={Home} />
          <Route path="/term1" exact component={Term1} />
          <Route path="/term2" exact component={Term2} />
          <Route path="/accountTransfer" exact component={AccountTransferPopup} />
        </Switch> */}
      <Footer />
    </Container>
  );
}

function BodyC() {
  return (
    <Body style={{ backgroundColor: "#777777"}}></Body>
  );
}

const Container = styled.div`
  width: 1920px;
`;

const Body = styled.div`
  height: 954px;
`

export default App;
