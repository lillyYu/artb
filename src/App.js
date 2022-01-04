/* Components */
import Gnb from "./Components/Gnb";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NftList from "./Components/NftList";
import NftDetail from "./Components/NftList/NftDetail";
import Hp from "./Components/Hp";
import Notice from "./Components/CS/Notice";
import NoticeRead from "./Components/CS/Notice/read";

import NftTrade from "./Components/NftTrade";
import PayCoin from "./Components/NftTrade/Payment/coin";
import PayCash from "./Components/NftTrade/Payment/cash";
import MyNFT from "./Components/Gnb/myNFT";
import CheckAccount from "./Components/Gnb/checkAccount";
import Term1 from "./Components/Terms/Term1";
import Term2 from "./Components/Terms/Term2";
import AccountTransferPopup from "./Components/NftTrade/Popup/accountTransfer";
import OrderDetail from "./Components/Gnb/OrderDetail";

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
        <Route path="/detail/:id" component={NftDetail} />
        <Route path="/hp/:sub" component={Hp} />
        <Route path="/notice/:id" component={NoticeRead} />
        <Route path="/notice" component={Notice} />
        <Route path="/list" component={NftList} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 1920px;
`;

export default App;
