/* Components */
import Gnb from "./Components/Gnb";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NftList from "./Components/NftList";
import NftDetail from "./Components/NftList/NftDetail";
import Hp from "./Components/Hp";
import Payment from "./Components/NftList/Payment";
import Complete from "./Components/NftList/Complete";
import MyPage from "./Components/MyPage";

import NftTrade from "./Components/NftTrade";
import PayCoin from "./Components/NftTrade/Payment/coin";
import PayCash from "./Components/NftTrade/Payment/cash";
import MyNFT from "./Components/Gnb/myNFT";
import CheckAccount from "./Components/Gnb/checkAccount";
import Term1 from "./Components/Terms/Term1";
import Term2 from "./Components/Terms/Term2";
import AccountTransferPopup from "./Components/NftTrade/Popup/accountTransfer";
import OrderDetail from "./Components/Gnb/OrderDetail";
import Account from "./Components/Account"

/* Libraries */
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [ground, setGround] = useState(window.innerWidth);

  const handleResize = () => {
    setGround(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Ground style={{width: ground}}>
      <Container>
        <Gnb />
        <Switch>
          <Route path="/detail/:id" component={NftDetail} />
          <Route path="/hp/:sub/:id" component={Hp} />
          <Route path="/hp/:sub" component={Hp} />
          <Route path="/payment/:id" component={Payment} />
          <Route path="/complete/:id" component={Complete} />
          <Route path="/mypage/:category/:id" component={MyPage} />
          <Route path="/mypage/:category" component={MyPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/list" component={NftList} />
          <Route path="/account/join" render={() => <Account mode="join"/>}/>
          <Route path="/account/login" render={() => <Account mode="login"/>}/>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Container>
    </Ground>
  );
}

const Ground = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
@media only screen and (max-width: 1920px) {
  width: 1440px;
}

@media only screen and (min-width: 1920px) {
  width: 1920px;
}
`;

export default App;
